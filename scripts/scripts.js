
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

var currentDog = 1;
// document.getElementById("imageContainer").onclick = function() {
$("#imageContainer").on('click', function() {
    if (currentDog == 1)
    {
        document.getElementById("doge-1").style.display = 'none';
        document.getElementById("doge-2").style.display = 'block';
        // $("#doge-1").hide();
        // $("#doge-2").show();
        currentDog = 2;
    }
    else
    {
        $("#doge-2").hide();
        $("#doge-1").show();
        currentDog = 1;
    }
});