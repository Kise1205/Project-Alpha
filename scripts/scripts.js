
document.
    addEventListener("DOMContentLoaded",()=>{
    console.log("we workin'!");
    document.getElementById('btnClicky').addEventListener('click',btnClicky);
    }
);
function btnClicky(){
    console.log("in btnClicky event");
    document.getElementById("btnClicky").style.transform = 'rotate(15deg)'
    console.log("After rotation");
}
// const btnClicky = document.getElementById('btnClicky'); btnClicky.addEventListener('click', () => { // ...now do DOM stuff });