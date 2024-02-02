const inputs = document.querySelectorAll(".age-input")
const checkbox = document.querySelector("#Swich")
const checkLabel = document.querySelector("#swichLabel")
let currentYear = moment().format(`YYYY`)
let currentMonth = moment().format(`MM`)
let currentDay = moment().format(`DD`)
function calculate(){
    let NumberYear = Number(currentYear)
    let NumberMonth = Number(currentMonth)
    let NumberDay = Number(currentDay)
    let year
    let month
    let day
    if(checkbox.checked){
        let userBirth = inputs[1].value.split("/")
        try{
            if(userBirth[0] == ""||userBirth[1] == ""||userBirth[2] == "") throw "please fill fields"
            if(userBirth.length != 3) throw "you should enter 3 values"
            if(isNaN(Number(userBirth[0])) || isNaN(Number(userBirth[1])) || isNaN(Number(userBirth[2]))) throw "value is not number"
            if(userBirth[0].length != 4) throw "year must be completly with 4 number"
            if(userBirth[1].length > 2) throw "month must has 2 number"
            if(userBirth[2].length > 2) throw "day must has 2 number"
            const shamsi = jalaali.toJalaali(NumberYear,NumberMonth,NumberDay)
            let currentShamsiY = shamsi.jy
            let currentShamsiM = shamsi.jm
            let currentShamsiD = shamsi.jd
            if(Number(userBirth[0]) > currentShamsiY){
                swal.fire({
                    icon : "error",
                    title : "this year is not vailed",
                    confirmButtonText : "okay",
                })
            }
            else {
                year = currentShamsiY - Number(userBirth[0])
                if (Number(userBirth[1]) > currentShamsiM){
                    year--;
                    month = (currentShamsiM+12) - Number(userBirth[1]);
                }
                else{
                    month = currentShamsiM - Number(userBirth[1])
                }
                if (Number(userBirth[2]) > currentShamsiD){
                    month--
                    day = (currentShamsiD + jalaali.jalaaliMonthLength()) - Number(userBirth[2])
                }
                else{
                    day = currentShamsiD - Number(userBirth[3])
                }
                swal.fire({
                    icon : "info",
                    title : `you are ${year} years old`,
                    text : `with ${month} month and ${day} days`,
                })
                inputs.forEach((item) => {
                    item.value = ""
                });
            }
        }
        catch(error){
            swal.fire({
                icon : "error",
                title : error,
                confirmButtonText : "okay",
                confirmButtonColor : "#424769",
            })
        }
    }
    else{
        let userBirth = inputs[0].value.split("/")
        try{
            if(userBirth[0] == ""||userBirth[1] == ""||userBirth[2] == "") throw "please fill fields"
            if(userBirth.length != 3) throw "you should enter 3 values"
            if(isNaN(Number(userBirth[0])) || isNaN(Number(userBirth[1])) || isNaN(Number(userBirth[2]))) throw "value is not number"
            if(userBirth[0].length != 4) throw "year must be completly with 4 number"
            if(userBirth[1].length > 2) throw "month must has 2 number"
            if(userBirth[2].length > 2) throw "day must has 2 number"
            else{
                if(Number(userBirth[0]) > NumberYear || NumberYear - Number(userBirth[0] > 200)){
                    swal.fire({
                        icon : "error",
                        title : "this year is not vailed",
                        confirmButtonText : "okay",
                    })
                }
                else {
                    year = NumberYear - Number(userBirth[0])
                    if (Number(userBirth[1]) > Number(currentMonth)){
                        year--
                        month = (NumberMonth+12) - Number(userBirth[1])
                    }
                    else{
                        month = NumberMonth - Number(userBirth[1])
                    }
                    if (Number(userBirth[2]) > Number(currentDay)){
                        month--
                        day = (NumberDay + 30) - Number(userBirth[2])
                    }
                    else{
                        day = NumberDay - Number(userBirth[2])
                    }
                    swal.fire({
                        icon : "info",
                        title : `you are ${year} years old`,
                        text : `with ${month} month and ${day} days`,
                    })
                    inputs.forEach((item) => {
                        item.value = ""
                    });
                }
            }
        }
        catch(err){
            swal.fire({
                icon : "error",
                title : err,
                confirmButtonText : "okay",
                confirmButtonColor : "#424769",
            })
        }
    }
}
const card = document.querySelector(".moeen")
function changeLabel(){
    if (checkbox.checked){
        checkLabel.textContent = "Solar"
        card.style.transform = "rotateY(180deg)"
    }
    else{
        checkLabel.textContent = "Georgian"
        card.style.transform = "rotateY(0deg)"
    }
}
const checkDark = document.querySelector("#darkMode")
const html = document.querySelector("html")
const DarkLabel = document.querySelector("#dark-label")
const cards = document.querySelectorAll(".cards")
function darkMode(){
    if (checkDark.checked){
        cards.forEach(item => {
            item.setAttribute("style","background-color: #b6b6b61d;")
        });
        DarkLabel.classList.replace("btn-outline-dark","btn-outline-light")
        DarkLabel.textContent = "light"
        html.setAttribute("data-bs-theme","dark")
    }
    else{
        cards.forEach(item => {
            item.setAttribute("style","background-color: #27272781;")
        });
        DarkLabel.classList.replace("btn-outline-light","btn-outline-dark")
        DarkLabel.textContent = "dark"
        html.setAttribute("data-bs-theme","light")
    }
}