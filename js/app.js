const openMenu = () => {

    const menu = document.querySelector(".header-menu");
    menu.style.display = menu.style.display === "flex"? "none":"flex";
    // menu.classList.toggle("active")

}

const text = "Developpeur web & mobile | Passionne de code.";
let index = 0;

function typeText(){
    if(index<text.length){
        document.getElementById("typing-text").textContent += text.charAt(index);
        index++;
        setTimeout(typeText,100)
    }
}

window.onload = function(){
    setTimeout(typeText,1000);
}

const toggleButton = document.getElementById("toggleDarkMode");
const body = document.body;

// if(localStorage.getItem("darkMode")==="enabled"){
//     body.classList.add("dark-mode");
//     toggleButton.textContent = "Desactiver le dark mode";
// }

toggleButton.addEventListener("click", function(){
    if(body.classList.contains("dark-mode")){
        body.classList.remove("dark-mode");
        localStorage.setItem("darkMode", "disabled");
        toggleButton.textContent = "Activer le dark mode";
    }
    else{
        body.classList.add("dark-mode");
        localStorage.setItem("darkMode","enabled");
        toggleButton.textContent = "Desactiver le dark mode"
    }
})
