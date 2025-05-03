console.log("✅ content.js loaded on CSES result page");

window.addEventListener("load", () => {
  console.log("⏳ DOM fully loaded, checking for submission data");

  // Trying multiple strategies to extract the title
  let title = null;

  const breadcrumb = document.querySelector(".breadcrumb a[href*='problem']");
  const h1 = document.querySelector("h1");

  if (breadcrumb) {
    title = breadcrumb.innerText.trim();
  } else if (h1) {
    title = h1.innerText.trim();
  }

  const codeEl = document.querySelector("pre");

  if (!title || !codeEl) {
    console.warn("⚠️ Could not find problem title or code block");
    console.log("🔍 title:", title);
    console.log("🔍 codeEl:", codeEl);
    return;
  }

  const sanitizedTitle = title.replace(/[^\w\s]/gi, '').replace(/\s+/g, '_');
  const code = codeEl.innerText;

  console.log(`📘 Title: ${sanitizedTitle}`);
  console.log("📄 Code snippet captured");

  chrome.runtime.sendMessage({
    action: "submission",
    data: { title: sanitizedTitle, code }
  });
});
