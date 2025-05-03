export async function commitToGitHub({ token, repo, filePath, content, message }) {
    const encodedContent = btoa(unescape(encodeURIComponent(content)));
    const body = JSON.stringify({
      message: message,
      content: encodedContent
    });
  
    const res = await fetch(`https://api.github.com/repos/${repo}/contents/${filePath}`, {
      method: 'PUT',
      headers: {
        'Authorization': `token ${token}`,
        'Content-Type': 'application/json'
      },
      body
    });
  
    if (!res.ok) {
      const error = await res.json();
      console.error("GitHub Error:", error);
      throw new Error(`GitHub commit failed: ${error.message}`);
    }
  
    return await res.json();
  }
  