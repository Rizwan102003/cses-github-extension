chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getSubmissionData") {
      const title = document.querySelector("h1").innerText;
      const code = document.querySelector("pre").innerText;
      const data = {
        title,
        code
      };
      sendResponse(data);
    }
  });