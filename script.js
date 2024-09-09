document.getElementById('quoteBtn').addEventListener('click', getQuote);

async function getQuote() {
    const apiUrl = 'https://api.quotable.io/random';
    const overlay = document.getElementById('overlay');
    
    // Show overlay
    overlay.classList.add('active');

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        document.getElementById('quote').textContent = `"${data.content}" - ${data.author}`;
    } catch (error) {
        document.getElementById('quote').textContent = 'Failed to fetch a quote. Please try again.';
    } finally {
        // Hide overlay after data is loaded or if an error occurs
        overlay.classList.remove('active');
    }
}
