var box1Image = document.getElementById("box1image")
var box2Image = document.getElementById("box2image")
var box3Image = document.getElementById("box3image")
var box1Div = document.getElementById("box1div")
var box2Div = document.getElementById("box2div")
var box3Div = document.getElementById("box3div")

box1Div.addEventListener("mouseover", addAnimation1)
box1Div.addEventListener("mouseout", removeAnimation1)

box2Div.addEventListener("mouseover", addAnimation2)
box2Div.addEventListener("mouseout", removeAnimation2)

box3Div.addEventListener("mouseover", addAnimation3)
box3Div.addEventListener("mouseout", removeAnimation3)


function addAnimation1() {
    box1Image.classList.add("animationimgadd")
    box1Image.classList.remove("animationcloseadd")
}

function removeAnimation1() {
    box1Image.classList.remove("animationimgadd")
    box1Image.classList.add("animationcloseadd")
}


function addAnimation2() {
    box2Image.classList.add("animationimgadd")
    box2Image.classList.remove("animationcloseadd")
}

function removeAnimation2() {
    box2Image.classList.remove("animationimgadd")
    box2Image.classList.add("animationcloseadd")
}

function addAnimation3() {
    box3Image.classList.add("animationimgadd")
    box3Image.classList.remove("animationcloseadd")
}

function removeAnimation3() {
    box3Image.classList.remove("animationimgadd")
    box3Image.classList.add("animationcloseadd")
}


var firstLi = document.getElementById("firstli")
var firstLi2 = document.getElementById("firstli2")
var firstLi3 = document.getElementById("firstli3")

var secondLi = document.getElementById("secondli")
var secondLi2 = document.getElementById("secondli2")
var secondLi3 = document.getElementById("secondli3")
var secondLi4 = document.getElementById("secondli4")

var thirdLi = document.getElementById("thirdli")
var thirdLi2 = document.getElementById("thirdli2")

var mainText = document.getElementById("maintext")
var mainText2 = document.getElementById("maintext2")



box1Div.addEventListener("click", openExperience)
box2Div.addEventListener("click", openProfession)
box3Div.addEventListener("click", openSource)

var boxExperience = document.getElementById("boxexperience")
var experienceBtn = document.getElementById("experiencebtn")

var boxProfession = document.getElementById("boxprofession")
var boxDev= document.getElementById("boxdev")
var professionBtn = document.getElementById("professionbtn")
var devBtn = document.getElementById("devbtn")

var expPunk1 = document.getElementById("exppunkt1")
var expPunk2 = document.getElementById("exppunkt2")
var expPunk3 = document.getElementById("exppunkt3")

function openExperience() {
    box1Div.classList.remove("box1")
    box1Div.classList.add("killbox")

    box2Div.classList.remove("box2")
    box2Div.classList.add("killbox2")

    box3Div.classList.remove("box3")
    box3Div.classList.add("killbox3")

    box1Div.style.height = "225px"

    box2Div.style.height = "200px"

    box3Div.style.height = "200px"

    firstLi.classList.remove("firstli")
    firstLi2.classList.remove("firstli2")
    firstLi3.classList.remove("firstli3")
    
    
    firstLi.classList.add("killlis")
    firstLi2.classList.add("killlis2")
    firstLi3.classList.add("killlis3")

    secondLi.classList.remove("secondli")
    secondLi2.classList.remove("secondli2")
    secondLi3.classList.remove("secondli3")
    secondLi4.classList.remove("secondli4")

    secondLi.classList.add("killsecondli")
    secondLi2.classList.add("killsecondli2")
    secondLi3.classList.add("killsecondli3")
    secondLi4.classList.add("killsecondli4")

    thirdLi.classList.remove("thirdli")
    thirdLi2.classList.remove("thirdli2")

    thirdLi.classList.add("killthirdli")
    thirdLi2.classList.add("killthirdli2")

    setTimeout(() => {
    boxExperience.classList.remove("killboxexperience")
    boxExperience.classList.add("boxexperience")

    expPunk1.classList.remove("killtext")
    expPunk2.classList.remove("killtext")
    expPunk3.classList.remove("killtext")

    expPunk1.classList.add("experiencetext")
    expPunk2.classList.add("experiencetext")
    expPunk3.classList.add("experiencetext")


    }, 1000);

    setTimeout(() => {
        imgSpanish.classList.remove("killimage")
        imgSpanish.classList.add("spanimg")
    }, 1400);


}

experienceBtn.addEventListener("click", closeExperience)

function closeExperience() {
    box1Div.classList.add("box1")
    box1Div.classList.remove("killbox")

    box2Div.classList.add("box2")
    box2Div.classList.remove("killbox2")

    box3Div.classList.add("box3")
    box3Div.classList.remove("killbox3")


    firstLi.classList.add("firstli")
    firstLi2.classList.add("firstli2")
    firstLi3.classList.add("firstli3")
    
    
    firstLi.classList.remove("killlis")
    firstLi2.classList.remove("killlis2")
    firstLi3.classList.remove("killlis3")

    secondLi.classList.add("secondli")
    secondLi2.classList.add("secondli2")
    secondLi3.classList.add("secondli3")
    secondLi4.classList.add("secondli4")

    secondLi.classList.remove("killsecondli")
    secondLi2.classList.remove("killsecondli2")
    secondLi3.classList.remove("killsecondli3")
    secondLi4.classList.remove("killsecondli4")

    thirdLi.classList.add("thirdli")
    thirdLi2.classList.add("thirdli2")

    thirdLi.classList.remove("killthirdli")
    thirdLi2.classList.remove("killthirdli2")

    boxExperience.classList.add("killboxexperience")
    boxExperience.classList.remove("boxexperience")

    expPunk1.classList.add("killtext")
    expPunk2.classList.add("killtext")
    expPunk3.classList.add("killtext")

    imgSpanish.classList.add("killimage")
        imgSpanish.classList.remove("spanimg")


}

var secondexPunkt1 = document.getElementById("secondexpunkt1")
var secondexPunkt2 = document.getElementById("secondexpunkt2")
var secondexPunkt3 = document.getElementById("secondexpunkt3")
var secondexPunkt4 = document.getElementById("secondexpunkt4")

var imgSpanish = document.getElementById("imgspanish")
var salaryImg = document.getElementById("salaryimg")
function openProfession() {
    box1Div.classList.remove("box1")
    box1Div.classList.add("killbox")

    box2Div.classList.remove("box2")
    box2Div.classList.add("killbox2")

    box3Div.classList.remove("box3")
    box3Div.classList.add("killbox3")

    box1Div.style.height = "200px"

    box2Div.style.height = "225px"

    box3Div.style.height = "200px"

    firstLi.classList.remove("firstli")
    firstLi2.classList.remove("firstli2")
    firstLi3.classList.remove("firstli3")
    
    
    firstLi.classList.add("killlis")
    firstLi2.classList.add("killlis2")
    firstLi3.classList.add("killlis3")

    secondLi.classList.remove("secondli")
    secondLi2.classList.remove("secondli2")
    secondLi3.classList.remove("secondli3")
    secondLi4.classList.remove("secondli4")

    secondLi.classList.add("killsecondli")
    secondLi2.classList.add("killsecondli2")
    secondLi3.classList.add("killsecondli3")
    secondLi4.classList.add("killsecondli4")

    thirdLi.classList.remove("thirdli")
    thirdLi2.classList.remove("thirdli2")

    thirdLi.classList.add("killthirdli")
    thirdLi2.classList.add("killthirdli2")



    setTimeout(() => {
        boxProfession.classList.remove("killboxexperience")
        boxProfession.classList.add("boxprofession")
    
        secondexPunkt1.classList.remove("killtext")
        secondexPunkt1.classList.add("professiontext")

        secondexPunkt2.classList.remove("killtext")
        secondexPunkt2.classList.add("professiontext")


        secondexPunkt3.classList.remove("killtext")
        secondexPunkt3.classList.add("professiontext")

        secondexPunkt4.classList.remove("killtext")
        secondexPunkt4.classList.add("professiontext")

        salaryImg.classList.remove("killimage")
        salaryImg.classList.add("salaryimg")

        
        
       
        }, 1000);

        setTimeout(() => {
         
        }, 1400);

        


}

professionBtn.addEventListener("click", closeProfession)

function closeProfession() {
    box1Div.classList.add("box1")
    box1Div.classList.remove("killbox")

    box2Div.classList.add("box2")
    box2Div.classList.remove("killbox2")

    box3Div.classList.add("box3")
    box3Div.classList.remove("killbox3")


    firstLi.classList.add("firstli")
    firstLi2.classList.add("firstli2")
    firstLi3.classList.add("firstli3")
    
    
    firstLi.classList.remove("killlis")
    firstLi2.classList.remove("killlis2")
    firstLi3.classList.remove("killlis3")

    secondLi.classList.add("secondli")
    secondLi2.classList.add("secondli2")
    secondLi3.classList.add("secondli3")
    secondLi4.classList.add("secondli4")

    secondLi.classList.remove("killsecondli")
    secondLi2.classList.remove("killsecondli2")
    secondLi3.classList.remove("killsecondli3")
    secondLi4.classList.remove("killsecondli4")

    thirdLi.classList.add("thirdli")
    thirdLi2.classList.add("thirdli2")

    thirdLi.classList.remove("killthirdli")
    thirdLi2.classList.remove("killthirdli2")

    boxProfession.classList.add("killboxexperience")
    boxProfession.classList.remove("boxprofession")

    secondexPunkt1.classList.add("killtext")
    secondexPunkt1.classList.remove("professiontext")

    secondexPunkt2.classList.add("killtext")
    secondexPunkt2.classList.remove("professiontext")

    secondexPunkt3.classList.add("killtext")
    secondexPunkt3.classList.remove("professiontext")

    secondexPunkt4.classList.add("killtext")
    secondexPunkt4.classList.remove("professiontext")
    

    salaryImg.classList.add("killimage")
    salaryImg.classList.remove("salaryimg")


   
    }

devBtn.addEventListener("click", closeSource)

var devText = document.getElementById("devtext")

function openSource() {
    box1Div.classList.remove("box1")
    box1Div.classList.add("killbox")

    box2Div.classList.remove("box2")
    box2Div.classList.add("killbox2")

    box3Div.classList.remove("box3")
    box3Div.classList.add("killbox3")

    box3Div.style.height = "225px"

    firstLi.classList.remove("firstli")
    firstLi2.classList.remove("firstli2")
    firstLi3.classList.remove("firstli3")
    
    
    firstLi.classList.add("killlis")
    firstLi2.classList.add("killlis2")
    firstLi3.classList.add("killlis3")

    secondLi.classList.remove("secondli")
    secondLi2.classList.remove("secondli2")
    secondLi3.classList.remove("secondli3")
    secondLi4.classList.remove("secondli4")

    secondLi.classList.add("killsecondli")
    secondLi2.classList.add("killsecondli2")
    secondLi3.classList.add("killsecondli3")
    secondLi4.classList.add("killsecondli4")

    thirdLi.classList.remove("thirdli")
    thirdLi2.classList.remove("thirdli2")

    thirdLi.classList.add("killthirdli")
    thirdLi2.classList.add("killthirdli2")

    box1Div.style.height = "200px"

    box2Div.style.height = "200px"

    box3Div.style.height = "225px"

    setTimeout(() => {
        boxDev.classList.remove("killboxexperience")
        boxDev.classList.add("boxdev")

        devText.classList.remove("killtext")

        devText.classList.add("devtext")


    }, 1000);


}

function closeSource() {
    box1Div.classList.add("box1")
    box1Div.classList.remove("killbox")

    box2Div.classList.add("box2")
    box2Div.classList.remove("killbox2")

    box3Div.classList.add("box3")
    box3Div.classList.remove("killbox3")


    firstLi.classList.add("firstli")
    firstLi2.classList.add("firstli2")
    firstLi3.classList.add("firstli3")
    
    
    firstLi.classList.remove("killlis")
    firstLi2.classList.remove("killlis2")
    firstLi3.classList.remove("killlis3")

    secondLi.classList.add("secondli")
    secondLi2.classList.add("secondli2")
    secondLi3.classList.add("secondli3")
    secondLi4.classList.add("secondli4")

    secondLi.classList.remove("killsecondli")
    secondLi2.classList.remove("killsecondli2")
    secondLi3.classList.remove("killsecondli3")
    secondLi4.classList.remove("killsecondli4")

    thirdLi.classList.add("thirdli")
    thirdLi2.classList.add("thirdli2")

    thirdLi.classList.remove("killthirdli")
    thirdLi2.classList.remove("killthirdli2")

    boxDev.classList.add("killboxexperience")
    boxDev.classList.remove("boxdev")


    
    devText.classList.add("killtext")

    devText.classList.remove("devtext")

   
    }


    var sourcE1 = document.getElementById("source1")

    sourcE1.innerHTML = "<div>"


