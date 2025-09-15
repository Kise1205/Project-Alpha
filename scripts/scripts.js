
document.
    addEventListener("DOMContentLoaded",()=>{
    console.log("we workin'!");
    document.getElementById('btnClicky').addEventListener('click',btnClicky);
    }
);
function btnClicky(){
    console.log("in btnClicky event");
    // document.getElementById("btnClicky").style.transform = 'rotate(15deg)'
    alert("Hello! Message has been sent 😊");
    console.log("Message sent!!!");
}
// const btnClicky = document.getElementById('btnClicky'); btnClicky.addEventListener('click', () => { // ...now do DOM stuff });

var currentImg = 1;
document.getElementById("imageContainer").onclick = function() {

    if (currentImg == 1)
    {
        document.getElementById("doge-1").style.display = 'none';
        document.getElementById("doge-2").style.display = 'block';
        currentImg = 2;
    }
    else
    {
        document.getElementById("doge-1").style.display = 'block';
        document.getElementById("doge-2").style.display = 'none';
        currentImg = 1;
    }
};