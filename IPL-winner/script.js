const teams = [
    { 
        "name": "CSK",
        "wins": 5,
        "primary": "yellow",
        "secondary": "white",
    },
    {
        "name": "MI",
        "wins": 5,
        "primary": "blue",
        "secondary": "gold",
    },
    {
        "name": "RCB",
        "wins": 1,
        "primary": "red",
        "secondary": "black",
    },
    {
        "name": "KKR",
        "wins": 3,
        "primary": "purple",
        "secondary": "gold",
    }
]

var btn = document.querySelector("#btn");
var h1 = document.querySelector("h1");
var box = document.querySelector("#box");

btn.addEventListener("click", function(){
    var winner = teams[Math.floor(Math.random()*teams.length)];
    console.log(winner);
    h1.innerHTML = winner.name;
    box.style.background = `${winner.primary}`;
    box.style.color = `${winner.secondary}`;
    main.style.background = `${winner.secondary}`;
});