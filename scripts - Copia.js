const searchInput = document.getElementById('busca');
const moviesContainer = document.querySelector('.filmes');
const movies = document.querySelectorAll('.filme');

searchInput.addEventListener('input', (event) => {
  const searchTerm = event.target.value.trim().toLowerCase();

  movies.forEach((movie) => {
    const movieTitle = movie.querySelector('h3').textContent.toLowerCase();
    if (movieTitle.includes(searchTerm)) {
      movie.style.display = 'block';
    } else {
      movie.style.display = 'none';
    }
  });
});