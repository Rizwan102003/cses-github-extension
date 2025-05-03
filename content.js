console.log("✅ content.js loaded on CSES result page");

window.addEventListener("load", () => {
  console.log("⏳ DOM fully loaded, checking for submission data");

  const titleAnchor = document.querySelector("h1 a[href^='/problemset/task/']");
  const codeEl = document.querySelector("pre");

  if (!titleAnchor || !codeEl) {
    console.warn("⚠️ Could not find problem title or code block");
    console.log("🔍 titleAnchor:", titleAnchor);
    console.log("🔍 codeEl:", codeEl);
    return;
  }

  const rawTitle = titleAnchor.innerText.trim();
  const title = rawTitle.replace(/[^\w\s]/gi, '').replace(/\s+/g, '_');
  const code = codeEl.innerText;

  console.log(`📘 Title: ${title}`);
  console.log("📄 Code snippet captured");

  chrome.runtime.sendMessage({
    action: "submission",
    data: { title, code }
  });
});
