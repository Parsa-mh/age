const inputs = document.querySelectorAll(".age-input")
const checkbox = document.querySelector("#Swich")
const checkLabel = document.querySelector("#swichLabel")
let currentYear = moment().format(`YYYY`)
let currentMonth = moment().format(`MM`)
let currentDay = moment().format(`DD`)
console.log(inputs);
function calculate(){
    let NumberYear = Number(currentYear)
    let NumberMonth = Number(currentMonth)
    let NumberDay = Number(currentDay)
    let year
    let month
    let day
    if(checkbox.checked){
        try{
            if(inputs[3].value == ""||inputs[4].value == ""||inputs[5].value == "") throw "please fill fields"
            if(isNaN(Number(inputs[3].value)) || isNaN(Number(inputs[4].value)) || isNaN(Number(inputs[5].value))) throw "value is not number"
            if(inputs[3].value.length != 4) throw "year must be completly with 4 number"
            if(inputs[4].value.length > 2) throw "month must has 2 number"
            if(inputs[5].value.length > 2) throw "day must has 2 number"
            const shamsi = jalaali.toJalaali(NumberYear,NumberMonth,NumberDay)
            let currentShamsiY = shamsi.jy
            let currentShamsiM = shamsi.jm
            let currentShamsiD = shamsi.jd
            if(Number(inputs[3].value) > currentShamsiY){
                swal.fire({
                    icon : "error",
                    title : "this year is not vailed",
                    confirmButtonText : "okay",
                })
            }
            else {
                year = currentShamsiY - Number(inputs[3].value)
                if (Number(inputs[4].value) > currentShamsiM){
                    year--;
                    month = (currentShamsiM+12) - Number(inputs[4].value);
                }
                else{
                    month = currentShamsiM - Number(inputs[4].value)
                }
                if (Number(inputs[5].value) > currentShamsiD){
                    month--
                    day = (currentShamsiD + jalaali.jalaaliMonthLength()) - Number(inputs[5].value)
                }
                else{
                    day = currentShamsiD - Number(inputs[5].value)
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
        try{
            if(inputs[0].value == ""||inputs[1].value == ""||inputs[2].value == "") throw "please fill fields"
            if(inputs[0].value.length != 4) throw "year must be completly with 4 number"
            if(isNaN(Number(inputs[0].value)) || isNaN(Number(inputs[1].value)) || isNaN(Number(inputs[2].value))) throw "value is not number"
            if(inputs[1].value.length > 2) throw "month must has 2 number"
            if(inputs[2].value.length > 2) throw "day must has 2 number"
            else{
                if(Number(inputs[0].value) > NumberYear){
                    swal.fire({
                        icon : "error",
                        title : "this year is not vailed",
                        confirmButtonText : "okay",
                    })
                }
                else {
                    year = NumberYear - Number(inputs[0].value)
                    if (Number(inputs[1].value) > Number(currentMonth)){
                        year--
                        month = (NumberMonth+12) - Number(inputs[1].value)
                    }
                    else{
                        month = NumberMonth - Number(inputs[1].value)
                    }
                    if (Number(inputs[2].value) > Number(currentDay)){
                        month--
                        day = (NumberDay + 30) - Number(inputs[2].value)
                    }
                    else{
                        day = NumberDay - Number(inputs[2].value)
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
        checkLabel.textContent = "Shamsi"
        card.style.transform = "rotateY(180deg)"
    }
    else{
        checkLabel.textContent = "Miladi"
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


