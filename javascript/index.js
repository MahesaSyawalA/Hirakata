const navbar = document.getElementById("navbar-container");
const content = document.getElementById("content");

const hiraganaButton = document.getElementById("hiraganaButton");
const katakanaButton = document.getElementById("katakanaButton");
const hiragana = document.getElementById("hiragana");
const katakana = document.getElementById("katakana");

let selection = true;

function handleScroll() {
  if (window.scrollY > content.offsetTop) {
    navbar.style.background = "#A8E4EB";
    localStorage.setItem("statusNavbar", "solid");
  } else {
    navbar.style.background = "transparent";
    localStorage.setItem("statusNavbar", "transparent");
  }
}

const initialNavbar = localStorage.getItem("statusNavbar");
if (initialNavbar === "solid") {
  navbar.style.background = "#A8E4EB";
}

window.addEventListener("scroll", handleScroll);

function handleHiragana() {
  if (!selection) {
    selection = !selection;
    hiraganaButton.style.color = "#46C5D3";
    hiraganaButton.style.backgroundColor = "white";
    katakanaButton.style.color = "";
    katakanaButton.style.backgroundColor = "";
    hiragana.style.display = "flex";
    katakana.style.display = "none";
    console.log(selection);
  }else{
    hiragana.style.display = "flex";
    katakana.style.display = "none";
  }
}

function handleKatakana() {
  if (selection) {
    selection = !selection;
    katakanaButton.style.color = "#46C5D3";
    katakanaButton.style.backgroundColor = "white";
    hiraganaButton.style.color = "";
    hiraganaButton.style.backgroundColor = "";
    hiragana.style.display = "none";
    katakana.style.display = "flex";
    console.log(selection);
  }else{
    hiragana.style.display = "none";
    katakana.style.display = "flex";
  }
}

handleKatakana();
handleHiragana();

// hiragana.addEventListener("click", function(){
//     if(selection == true){
//         console.log(selection);
//         handleButton()
//     }
// } );

// katakana.addEventListener("click", function(){
//     if(selection == false){
//         console.log(selection);
//         handleButton()
//     }
// } );
