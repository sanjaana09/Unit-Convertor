function unit()
{
    let inputValue = document.querySelector("#inputValue").value;
    let type1 = document.querySelector("#type1");
    let type2 = document.querySelector("#type2");
    let result = document.querySelector("#result");
    if(inputValue == "") {
        alert("Please Enter any number")
        location.reload()
    }//cm
    else if (type1.value == "cm" && type2.value == "cm"){
        let a = Number.parseInt(inputValue) * 1
        // a.toFixed(3) se decimal value will reach upto 3 
        result.innerHTML = a.toFixed(3) + "cm"
    }
    else if (type1.value == "cm" && type2.value == "in"){
        let a = Number.parseInt(inputValue) * 0.394
        result.innerHTML = a.toFixed(3) + "in"
    }
    else if (type1.value =="cm" && type2.value ==  "m"){
         let a = Number.parseInt(inputValue) * 0.01
         result.innerHTML =  a.toFixed(3) + "m"
    } 
    else if (type1.value == "cm" && type2.value == "km") {
        let a = Number.parseInt(inputValue) * 0.001
        result.innerHTML =  a.toFixed(3) + "km"
    }
   else if (type1.value == "cm" && type2.value == "ft"){
    let a = Number.parseInt(inputValue) * 0.0328084
    result.innerHTML =  a.toFixed(3) + "ft"
   }//in
   else if (type1.value == "in" && type2.value == "cm"){
    let a = Number.parseInt(inputValue) * 2.54
    result.innerHTML =  a.toFixed(3)  + "cm"
}
else if (type1.value == "in" && type2.value == "in"){
    let a = Number.parseInt(inputValue) * 1
    result.innerHTML =  a.toFixed(3)  + "in"
}
else if (type1.value == "in" && type2.value == "m"){
    let a = Number.parseInt(inputValue) * 0.0254
    result.innerHTML =  a.toFixed(3)  + "m"
}
else if (type1.value == "in" && type2.value == "km"){
    let a = Number.parseInt(inputValue) * 0.00254
    result.innerHTML =  a.toFixed(3)  + "km"
}
else if (type1.value == "in" && type2.value == "ft"){
    let a = Number.parseInt(inputValue) * 0.0833
    result.innerHTML =  a.toFixed(3)  + "ft"
}
else if (type1.value == "in" && type2.value == "cm"){
    let a = Number.parseInt(inputValue) * 100
    result.innerHTML =  a.toFixed(3)  + "cm"
}
else if (type1.value == "in" && type2.value == "in"){
    let a = Number.parseInt(inputValue) * 39.37
    result.innerHTML =  a.toFixed(3)  + "in"
}//m
else if (type1.value == "m" && type2.value == "cm"){
    let a = Number.parseInt(inputValue) * 100
    result.innerHTML =  a.toFixed(3)  + "cm"
}
else if (type1.value == "m" && type2.value == "in"){
    let a = Number.parseInt(inputValue) * 39.37
    result.innerHTML =  a.toFixed(3)  + "in"
}
else if (type1.value == "m" && type2.value == "m"){
    let a = Number.parseInt(inputValue) * 1
    result.innerHTML =  a.toFixed(3)  + "m"
}
else if (type1.value == "m" && type2.value == "km"){
    let a = Number.parseInt(inputValue) * 0.1
    result.innerHTML =  a.toFixed(3)  + "km"
}
else if (type1.value == "m" && type2.value == "ft"){
    let a = Number.parseInt(inputValue) * 3.28084
    result.innerHTML =  a.toFixed(3)  + "ft"
}
else if (type1.value == "m" && type2.value == "cm"){
    let a = Number.parseInt(inputValue) * 1000
    result.innerHTML =  a.toFixed(3)  + "cm"
}
else if (type1.value == "m" && type2.value == "in"){
    let a = Number.parseInt(inputValue) * 39370.079
    result.innerHTML =  a.toFixed(3)  + "in"
}
else if (type1.value == "m" && type2.value == "m"){
    let a = Number.parseInt(inputValue) * 10
    result.innerHTML =  a.toFixed(3)  + "m"
}//km
else if (type1.value == "km" && type2.value == "cm"){
    let a = Number.parseInt(inputValue) * 1000
    result.innerHTML =  a.toFixed(3)  + "cm"
}
else if (type1.value == "km" && type2.value == "in"){
    let a = Number.parseInt(inputValue) * 39370.079
    result.innerHTML =  a.toFixed(3)  + "in"
}
else if (type1.value == "km" && type2.value == "m"){
    let a = Number.parseInt(inputValue) * 10
    result.innerHTML =  a.toFixed(3)  + "m"
}
else if (type1.value == "km" && type2.value == "km"){
    let a = Number.parseInt(inputValue) * 1
    result.innerHTML =  a.toFixed(3)  + "km"
}
else if (type1.value == "km" && type2.value == "ft"){
    let a = Number.parseInt(inputValue) * 3280.84
    result.innerHTML =  a.toFixed(3)  + "ft"
}
else if (type1.value == "km" && type2.value == "m"){
    let a = Number.parseInt(inputValue) * 10
    result.innerHTML =  a.toFixed(3)  + "m"
}
else if (type1.value == "km" && type2.value == "km"){
    let a = Number.parseInt(inputValue) * 1
    result.innerHTML =  a.toFixed(3)  + "km"
}
else if (type1.value == "km" && type2.value == "ft"){
    let a = Number.parseInt(inputValue) * 3280.84
    result.innerHTML =  a.toFixed(3)  + "ft"
}//ft
else if (type1.value == "ft" && type2.value == "cm"){
    let a = Number.parseInt(inputValue) * 30.48
    result.innerHTML =  a.toFixed(3)  + "cm"
}
 else if (type1.value == "ft" && type2.value == "in"){
    let a = Number.parseInt(inputValue) * 12
    result.innerHTML =  a.toFixed(3)  + "m"
}
 else if (type1.value == "ft" && type2.value == "km"){
    let a = Number.parseInt(inputValue) * 0.03048
    result.innerHTML =  a.toFixed(3)  + "km"
}
 else if (type1.value == "ft" && type2.value == "ft"){
    let a = Number.parseInt(inputValue) * 1
    result.innerHTML =  a.toFixed(3)  + "ft"
}
}