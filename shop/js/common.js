//! Phone Count Increment and decrement function Start 

function upDatePhoneCount(isIncrement) {
    let phoneCount = document.getElementById('phoneCount');
    let phoneString = phoneCount.value;
    let prePhoneNuber = parseInt(phoneString);
    let newCount;
    if (isIncrement === true) {
        newCount =  prePhoneNuber + 1;
        phoneCount.value = newCount;
    } else {
        if (phoneCount > 0) {
            newCount = prePhoneNuber - 1;
            phoneCount.value = newCount;
        }
    }
    return newCount;
}

function phonePriceTotal(newCount){
    let phonePriceTotal = newCount * 1219;
    let phonePriceElement = document.getElementById('phonePriceTotal');
     phonePriceElement.innerText = phonePriceTotal;
 
}



//! Phone Count Increment and decrement function End