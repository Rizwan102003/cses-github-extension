chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "submission") {
    console.log("📨 Received submission from content script", message.data);

    const { title, code } = message.data;

    chrome.storage.sync.get(["repo", "token"], ({ repo, token }) => {
      if (!repo || !token) {
        console.error("❌ Missing GitHub repo or token");
        return;
      }

      const path = `cses/${title}.cpp`;
      const commitMsg = `Add solution for ${title}`;
      const content = btoa(unescape(encodeURIComponent(code)));

      const body = JSON.stringify({
        message: commitMsg,
        content: content
      });

      console.log(`📤 Sending commit to https://api.github.com/repos/${repo}/contents/${path}`);

      fetch(`https://api.github.com/repos/${repo}/contents/${path}`, {
        method: "PUT",
        headers: {
          Authorization: `token ${token}`,
          "Content-Type": "application/json"
        },
        body: body
      })
        .then(res => res.json())
        .then(json => {
          console.log("✅ GitHub response:", json);
          if (json.content) {
            console.log("🎉 Commit succeeded!");
          } else {
            console.warn("⚠️ Commit failed or file exists:", json);
          }
        })
        .catch(err => console.error("🔥 GitHub error:", err));
    });
  }
});
