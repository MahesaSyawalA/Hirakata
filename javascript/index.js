const navbar = document.getElementById("navbar-container");
const content = document.getElementById("content");

const hiragana = document.getElementById("hiragana");
const katakana = document.getElementById("katakana");
let selection = false;

function handleScroll() {
  if (window.scrollY > content.offsetTop) {
    navbar.style.background = "#A8E4EB";
    localStorage.setItem('statusNavbar', 'solid')
  } else {
    navbar.style.background = "transparent";
    localStorage.setItem('statusNavbar', 'transparent')
  }
}

const initialNavbar = localStorage.getItem('statusNavbar');
if(initialNavbar === 'solid'){
    navbar.style.background = "#A8E4EB"; 
}

window.addEventListener("scroll", handleScroll);

function handleHiragana() {
  if(!selection){
      selection = !selection;
      hiragana.style.color= '#46C5D3';
      hiragana.style.backgroundColor= 'white';
      katakana.style.color= '';
      katakana.style.backgroundColor= '';
      console.log(selection)
  } ;
}

function handleKatakana() {
    if(selection){
        selection = !selection;
        katakana.style.color= '#46C5D3';
        katakana.style.backgroundColor= 'white';
        hiragana.style.color= '';
        hiragana.style.backgroundColor= '';
        console.log(selection);
    } ;
  }

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
