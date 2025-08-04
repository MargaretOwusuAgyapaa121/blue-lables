const toggleBtn = document.getElementById('toggle-btn'); // no dot

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Change icon
    if (document.body.classList.contains('dark-mode')) {
        toggleBtn.textContent = '🌞'; // Sun icon for light mode
    } else {
        toggleBtn.textContent = '🌙'; // Moon icon for dark mode
    }
});
