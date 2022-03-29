let display = document.getElementById("display")
let select = document = document.querySelector ("select")
let Bory = document = document.querySelector ("body")
let Buttun_Change = document.querySelector(".Button_Change")

let insert = (num) => {

    display.innerHTML = display.textContent + num

}

let Clean = () => {
    document.getElementById("display").innerHTML = "sd"
}

let Back = () => {

    display.innerHTML = display.textContent.slice(0, -1)
}


let Calc = () => {
    if (display.textContent != "") {
        display.innerHTML = eval(display.textContent)
    } else {
        alert("No value")


    }

}

let Change = () => {



        Bory.classList.toggle ("Bory_Change")
        
}


let Change_theme = () => {
    Buttun_Change.classList.toggle ("Button_Change2")
   
    Change ()
}