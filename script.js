var bodyFirst = document.getElementById("bodyfirst")
var mainText = document.getElementById("maintext")

bodyFirst.addEventListener("click", moveOn)


function moveOn() {


    setTimeout(() => {
       mainText.innerHTML = "Hotelmanager Profession"
    }, 700);

    setTimeout(() => {
    mainText.innerHTML = "Presentation And Website Created By Denis"
    }, 2600);

    
    setTimeout(() => {
    mainText.innerHTML = "Enjoy"
    }, 5000);

    setTimeout(() => {
        mainText.classList.add("goinv2")
        }, 6500);

    setTimeout(() => {
        window.location.pathname = "main/home.html"
    }, 8000);
}



