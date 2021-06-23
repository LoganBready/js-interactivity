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
    event.target.parentNode.remove('li');
    message.textContent = "movie has been deleted"
}

function crossOffMovie (event) {
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked') === true) {
        message.textContent = 'Movie has been watched already'
    } else {
        message.textContent = 'Movie has been added back';
    }
}

document.querySelector('form').addEventListener('submit', addMovie);





