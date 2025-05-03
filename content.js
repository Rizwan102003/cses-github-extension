console.log("✅ content.js loaded on CSES result page");

window.addEventListener("load", () => {
  console.log("⏳ DOM fully loaded, checking for submission data");

  const titleEl = document.querySelector(".title");
  const codeEl = document.querySelector("pre");

  if (!titleEl || !codeEl) {
    console.warn("⚠️ Could not find title or code");
    return;
  }

  const title = titleEl.innerText.trim().replace(/[^\w\s]/gi, '').replace(/\s+/g, '_');
  const code = codeEl.innerText;

  console.log(`📘 Title: ${title}`);
  console.log("📄 Code snippet captured");

  chrome.runtime.sendMessage({
    action: "submission",
    data: { title, code }
  });
});
