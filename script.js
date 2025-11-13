document.addEventListener('DOMContentLoaded', function() {
    console.log('Hello World Static Site loaded!');
});

// Add a container for markdown content
document.body.innerHTML += '<div id="markdown-content"></div>';

// Function to load and render markdown file
function loadMarkdown(file) {
    fetch(file)
        .then(response => response.text())
        .then(md => {
            document.getElementById('markdown-content').innerHTML = marked.parse(md);
        });
}

// Load default markdown file
loadMarkdown('content.md');
