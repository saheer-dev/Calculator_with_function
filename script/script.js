let ab= document.querySelector(".screen")
function show (n){
    ab.innerText+=n
}
function allclear(){
    ab.innerText=""
}
function calculate (){
ab.innerText=eval(ab.innerText);
}
function empty(){
    ab.innerText=ab.innerText.slice(0,-1);
}
