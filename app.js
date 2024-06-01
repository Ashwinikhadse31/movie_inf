let input = document.getElementById("moviename");
let button = document.getElementById("btn");
let output1 = document.querySelector('.output1');
let output2 = document.querySelector('.output2');
let output3 = document.querySelector('.output3');
let output4 = document.querySelector('.output4');
let output5 = document.querySelector('.output5');
let output6 = document.querySelector('.output6');
let output7 = document.querySelector('.output7');
let output8 = document.querySelector('.output8');

let apiKey = `98add95b`;

button.addEventListener("click", () => {
    fetch(`http://www.omdbapi.com/?t=${input.value}&apikey=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        if (data.Response === "True") {
            output1.innerHTML = `<img src="${data.Poster}" alt="Movie Poster">`;
            output2.innerHTML = `<b>Title:</b> ${data.Title}`;
            output3.innerHTML = `<b>Director:</b> ${data.Director}`;
            output4.innerHTML = `<b>Year:</b> ${data.Year}`;
            output5.innerHTML = `<b>Cast:</b> ${data.Actors}`;
            output6.innerHTML = `<b>BoxOffice:</b> ${data.BoxOffice}`;
            output7.innerHTML = `<b>Writer:</b> ${data.Writer}`;
            output8.innerHTML = `<b>Plot:</b> ${data.Plot}`;
        } else {
            output1.innerHTML = `<p>${data.Error}</p>`;
        }
    })
    .catch(error => {
        console.log('There has been a problem', error);
        output1.innerHTML = `<p>Failed to fetch movie data.</p>`;
    });
});
