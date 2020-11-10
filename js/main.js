function clicou() {
    document.getElementById("thanks").innerHTML = "<b>Thanks for clicking</b>";
    console.log(document.getElementById("thanks"));
}


function redirect() {
    window.open("https://www.freecodecamp.org/learn/");
    //abre em outra aba
    window.location.href = "https://www.freecodecamp.org/learn/";
    //abre na mesma aba
}

function change(element) {
    //document.getElementById("mouseover").innerHTML = "Naughty :P"
    element.innerHTML = "Naughty :P";
}

function back(element) {
    //document.getElementById("mouseover").innerHTML = "Pass over here"
    element.innerHTML = "Pass over here";
}

function load() {
    alert("Page loaded");
}

function choose(element) {
    console.log(element.value)
    
}