chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url.includes('cses.fi/problemset/result')) {
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        func: () => {
          chrome.runtime.sendMessage({ action: "getSubmissionData" }, async (data) => {
            const { title, code } = data;
            const repo = await chrome.storage.sync.get("repo");
            const token = await chrome.storage.sync.get("token");
  
            const filePath = `cses/${title.replace(/\s+/g, '_')}.cpp`;
            const content = btoa(unescape(encodeURIComponent(code)));
            const body = JSON.stringify({
              message: `Add solution for ${title}`,
              content: content
            });
  
            fetch(`https://api.github.com/repos/${repo.repo}/contents/${filePath}`, {
              method: 'PUT',
              headers: {
                'Authorization': `token ${token.token}`,
                'Content-Type': 'application/json'
              },
              body: body
            });
          });
        }
      });
    }
  });