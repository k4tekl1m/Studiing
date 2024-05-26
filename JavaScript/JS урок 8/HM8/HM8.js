const arrColorsName = []
let i = 0
const onSubmit = (e) => {
    e.preventDefault()
    i++
    let color = document.getElementById("color").value
    let errorNameColor = document.getElementById("errorNameColor")
    let regexp = /\d/
    let regexpCodeRGB = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?),(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?),(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
    let regexpCodeRGBA = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?),(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?),(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?),([0-1])$/
    let regexpCodeHEX = /^\#[0-9A-F]{6}$/
    const selectElement = document.getElementById("typeColor")
    let selectedValue = selectElement.options[selectElement.selectedIndex].value;
    let code = document.getElementById("code").value

    if(regexp.test(color) == true){
        errorNameColor.innerText = "Color can only contain letters"
    }else{
        checkUniqueName()
    }
    function checkUniqueName(){
        if(arrColorsName.length == 0){
            arrColorsName.push(document.cookie = `${encodeURIComponent(color)} = ${encodeURIComponent(selectedValue)}(${encodeURIComponent(code)})`)
            checkCode()  
        }else{
            for (let i = 0; i < arrColorsName.length; i++){
                if(color == arrColorsName[i]){
                    errorNameColor.innerText = "That name's taken. Create another name"                    
                }else{
                    checkCode()
                    arrColorsName.push(document.cookie = `${encodeURIComponent(color)} = ${encodeURIComponent(selectedValue)}(${encodeURIComponent(code)})`)
                    errorNameColor.innerText = ""
                }
                return            
            }
        }
    }    
    //проверка правильности ввода кода цвета
    function checkCode(){
        switch(selectedValue){
            case "rgb":
                let validRGB = regexpCodeRGB.test(code);
                if(validRGB == false){
                errorCodeColor.innerText = "RGB code must match the pattern [0-255],[0-255],[0-255]";
                return false;
                }
                break;
            case "rgba":
                let validRGBA = regexpCodeRGBA.test(code);
                if(validRGBA == false){
                  errorCodeColor.innerText = "RGBA code must match the pattern [0-255],[0-255],[0-255],[0-1]";
                  return false;
                }
                break;
            case "hex":
                let validHEX = regexpCodeHEX.test(code);
                if(validHEX == false){
                  errorCodeColor.innerText = "HEX code must contain character # and 6 digits or letters from A to F";
                  return false;
                }
                break;              
        }
        errorCodeColor.innerText = ""
        createCardColor();
    }

    //запись куки
    
    //создание карточки цвета
    function createCardColor(){
        let newCardColor = document.createElement("div")
        let newMateGlass = document.createElement("div")
        let newNameColor = document.createElement("h5")
        let newTypeColor = document.createElement("p")
        let newCodeColor = document.createElement("p")
        bodyColors.appendChild(newCardColor)
        newCardColor.appendChild(newMateGlass)
        newMateGlass.appendChild(newNameColor)
        newMateGlass.appendChild(newTypeColor)
        newMateGlass.appendChild(newCodeColor)
        newNameColor.innerHTML = color.toUpperCase()
        newTypeColor.innerHTML = selectedValue.toUpperCase()
        newCodeColor.innerHTML = code.toUpperCase()
        newCodeColor.style.fontWeight = "bold"
        newCardColor.id = "color" + i
        newMateGlass.className = "mateGlass"
        // newCardColor.style.backgroundColor = "rgb("+code+")"
        newCardColor.style.width = `300px`
        newCardColor.style.height = `180px`
        newCardColor.style.padding = `40px 60px`
        newCardColor.style.margin = `10px 10px`
        newCardColor.style.display = "block"
        if(selectedValue == "hex"){
            newCardColor.style.backgroundColor = code
        }else{
            newCardColor.style.backgroundColor = selectedValue + "("+code+")"
        }
    }
    console.log(arrColorsName)
    console.log(document.cookie)
    
    function cookiePars(){
        document.cookie = "color=" + encodeURIComponent(color) +";max-age=10800"
        document.cookie = "typeColor=" + encodeURIComponent(selectedValue) +";max-age=10800"
        document.cookie = "code=" + encodeURIComponent(code) +";max-age=10800"
        if(selectedValue == "rgb"||selectedValue == "rgba"){
            document.cookie = `${encodeURIComponent(color)} = ${encodeURIComponent(selectedValue)}(${encodeURIComponent(code)})`
        }else{
            document.cookie = `${encodeURIComponent(color)} = ${encodeURIComponent(selectedValue)}(${encodeURIComponent(code)})`

        }
        // window.location.href = "cookiePage.html"
    }
    cookiePars()



    
}

