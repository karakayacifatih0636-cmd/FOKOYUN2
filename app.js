let games = [];

// games.json yükle
fetch("games.json")
.then(res => res.json())
.then(data => {
    games = data;
    render(games);
});

// ekrana bas
function render(list){
    const box = document.getElementById("box");
    box.innerHTML = "";

    list.forEach(g => {
        box.innerHTML += `
        <div class="card">
            <img src="${g.img}">
            <div>
                <h3>${g.name}</h3>
                <p>${g.cat}</p>
                <small>⭐ ${g.rating}</small>
            </div>
        </div>
        `;
    });
}

// arama
function search(v){
    v = v.toLowerCase();
    render(games.filter(g => g.name.toLowerCase().includes(v)));
}
