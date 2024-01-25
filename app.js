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
    try {
        if(inputs[0].value == ""||inputs[1].value == ""||inputs[2].value == "") throw "please fill fields"
        if(inputs[0].value.length != 4) throw "year must be completly with 4 number"
        if(isNaN(Number(inputs[0].value)) || isNaN(Number(inputs[1].value)) || isNaN(Number(inputs[2].value))) throw "value is not number"
        if(inputs[1].value.length > 2) throw "month must has 2 number"
        if(inputs[2].value.length > 2) throw "day must has 2 number"
        if (checkbox.checked){
            const shamsi = jalaali.toJalaali(NumberYear,NumberMonth,NumberDay)
            let currentShamsiY = shamsi.jy
            let currentShamsiM = shamsi.jm
            let currentShamsiD = shamsi.jd
            if(Number(inputs[0].value) > currentShamsiY){
                swal.fire({
                    icon : "error",
                    title : "this year is not vailed",
                    confirmButtonText : "okay",
                })
            }
            else {
                year = currentShamsiY - Number(inputs[0].value)
                if (Number(inputs[1].value) > currentShamsiM){
                    year--;
                    month = (currentShamsiM+12) - Number(inputs[1].value);
                }
                else{
                    month = currentShamsiM - Number(inputs[1].value)
                }
                if (Number(inputs[2].value) > currentShamsiD){
                    month--
                    day = (currentShamsiD + jalaali.jalaaliMonthLength()) - Number(inputs[2].value)
                }
                else{
                    day = currentShamsiD - Number(inputs[2].value)
                }
                swal.fire({
                    icon : "info",
                    title : `you are ${year} years old`,
                    text : `with ${month} month and ${day} days`,
                })
            }
        }
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
            }
        }
    }
    catch (err){
        swal.fire({
            icon : "error",
            title : err,
            confirmButtonText : "okay",
            confirmButtonColor : "#424769",
        })
    }
}
function changeLabel(){
    if (checkbox.checked){
        checkLabel.textContent = "Shamsi"
    }
    else{
        checkLabel.textContent = "Miladi"
    }
}


