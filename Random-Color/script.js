var btn = document.getElementById("btn");
var box = document.getElementById("box");

btn.addEventListener("click", function(){
    var c1 = Math.floor(Math.random()*256);
    var c2 = Math.floor(Math.random()*256);
    var c3 = Math.floor(Math.random()*256);

    box.style.background = `rgb(${c1}, ${c2}, ${c3})`;
    box.innerHTML = `rgb(${c1}, ${c2}, ${c3})`;
});