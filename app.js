const movies = [
    { title: 'Inception', rating: 5, year: 2010, director: 'Christopher Nolan' },
    { title: 'The Shawshank Redemption', rating: 9.3, year: 1994, director: 'Frank Darabont' },
    { title: 'The Dark Knight', rating: 9.0, year: 2008, director: 'Christopher Nolan' },
    { title: 'Pulp Fiction', rating: 8.9, year: 1994, director: 'Quentin Tarantino' },
];

const tableBody = document.getElementById('movies-body');
const modal = document.getElementById('modal');
const modalText = document.getElementById('modal-text');
const confirmButton = document.getElementById('confirm-button');
const cancelButton = document.getElementById('cancel-button');

function generateTable() {
    movies.forEach(movie => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${movie.title}</td>
            <td>${movie.year}</td>
            <td>${movie.rating}</td>
            <td>${movie.director}</td>
            <td><button class="buy-button">Купить</button></td>
        `;
        tableBody.appendChild(row);
    });
}

function handleBuyButtonClick(event) {
    const target = event.target;
    if (target.classList.contains('buy-button')) {
        const modalRow = target.parentNode.parentNode;
        const movieTitle = modalRow.querySelector('td:first-child').innerText;
        modalText.innerText = `Подтверждение покупки билета на "${movieTitle}"?`;
        modal.style.display = 'block';
        const confirmFunction = () => {
            modalRow.style.backgroundColor = '#ccc';
            target.style.display = 'none';
            modal.style.display = 'none';
        };
        confirmButton.onclick = confirmFunction;
        cancelButton.onclick = () => modal.style.display = 'none';
    }
}

// Event listeners
window.addEventListener('load', generateTable);
tableBody.addEventListener('click', handleBuyButtonClick);
