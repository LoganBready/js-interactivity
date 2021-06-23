const message = document.querySelector('#message');

function addMovie(event) {
    event.preventDefault();
    let inputField = document.querySelector('input').value;
    const movie = document.createElement('li');
    const movieTitle = document.createElement('span');
    movieTitle.textContent = inputField;
    movie.appendChild(movieTitle);
    movieTitle.addEventListener('click', crossOffMovie)
    document.querySelector('ul').appendChild(movie);
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X'
    movie.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', deleteMovie);
    
}

function deleteMovie (event) {
    let deletedMovie = event.target.parentNode.firstChild.textContent;
    event.target.parentNode.remove('li');
    message.textContent = `${deletedMovie} has been deleted!`;
    revealMessage();
    
}

function crossOffMovie (event) {
    event.target.classList.toggle('checked');
    let movie = event.target.textContent;
    if(event.target.classList.contains('checked') === true) {
        message.textContent = `${movie} has been watched!`
    } else {
        message.textContent = `${movie} has been added back`;
    }
}

function revealMessage() {
    setTimeout(() => {
        message.classList.add('hide');
    }, 1000)
    message.classList.remove('hide');
}

document.querySelector('form').addEventListener('submit', addMovie);





