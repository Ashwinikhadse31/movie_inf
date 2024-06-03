let input = document.getElementById("moviename");
let button = document.getElementById("btn");
let output = document.getElementById("opt");


let apiKey = `98add95b`;

button.addEventListener("click", () => {
    output.innerHTML="";
    fetch(`http://www.omdbapi.com/?t=${input.value}&apikey=${apiKey}`)
    .then(response => 
        response.json())

    .then(data => {
        console.log(data)
        if (data.Response === "True") {
            output.innerHTML = `<img src="${data.Poster}" alt="Movie Poster"><br>
            <b>Title:</b> ${data.Title}<br>
            <b>Director:</b> ${data.Director}<br>
            <b>Year:</b> ${data.Year}<br>
            <b>Cast:</b> ${data.Actors}<br>
            <b>BoxOffice:</b> ${data.BoxOffice}<br>
            <b>Writer:</b> ${data.Writer}<br>
            <b>Plot:</b> ${data.Plot}`
        } else {
            output.innerHTML = `<p>${data.Error}</p>`;
        }
    })
    .catch(error => {
        console.log('There has been a problem', error);
        output.innerHTML = `<p>Failed to fetch movie data.</p>`;
    });
});
