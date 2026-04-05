document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');

  function performSearch() {
    const query = searchInput.value.trim();
    if (query) {
      alert(`Searching for: "${query}"\n\n(This is a demo — in a real version this would filter tools)`);
      // You can later expand this to show tool cards
    } else {
      alert("Please type what you're looking for! 🔍");
    }
  }

  searchBtn.addEventListener('click', performSearch);

  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') performSearch();
  });

  // Optional: Keyboard shortcut
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement.tagName !== "INPUT") {
      e.preventDefault();
      searchInput.focus();
    }
  });
});