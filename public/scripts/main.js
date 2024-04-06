fetch('components/gameContent.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('simulation').innerHTML = html;
    })
    .catch(error => console.error('Error fetching content:', error));

