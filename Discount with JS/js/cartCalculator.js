//! Quantity incress and decress [-]00[+] Start

/*

 Step : 1 ;> " quantity " btn k dorte hobe. tarpor take inital value 0 set kote hobe. 
 Step : 2 > Plus btn k dorte hobe . dhore 1,1,1 kore Increment korte hobe.
step : 3 :> "minus"  k  dorte hobe .dhore 1,1,1 kore  Decrement  korte hobe.
step : 4 :> "price" k dorte hobe. dore parsFlote korte hobe.
step : 5 :> "price" er shthe "quantity" k gun korte hobe . gun kore new variable a rakte hobe.
step : 6 :> er por "shopkipperBlance" k dorte hobe . dore parsflot korte hobe . kore "shopkipperBlance" er modhe |"Gunfol rakte hobe"


 */
// !Plus minus er sathe Gun korte pari nai pore dekte hobe 
// Step : 1 ;>" quantity " btn k dorte hobe. tarpor take  Initialize value 0 set kote hobe. 
// let quantity =parseInt(document.getElementById('quantity').innerText);
// console.log(typeof quantity);
// let count = 0;
// quantity.innerText = count;


// Step : 2 ;> Plus btn k dorte hobe 

document.getElementById('plus').addEventListener('click', function () {
    let quantity =parseInt(document.getElementById('quantity').innerText);
    let incrementNumber = quantity + 1;
    document.getElementById('quantity').innerText = incrementNumber;
    let price = parseFloat(document.getElementById('price').innerText);
    let gun = price *(quantity+1);
    console.log(gun);

//     count++;
//    quantity.innerHTML = count;
})

// step : 3 :> "minus"  k  dorte hobe .dhore 1,1,1 kore  Decrement  korte hobe.
// });


document.getElementById('minus').addEventListener('click', function () {
    let quantity =parseInt(document.getElementById('quantity').innerText);
    if (quantity > 0) {
        let disincrementNumber = quantity - 1;
        document.getElementById('quantity').innerText = disincrementNumber ;
    }

    // if (count > 0) {
    //     count--;
    //     quantity.innerHTML = count;
    // }
})

// let price = parseFloat(document.getElementById('price').innerText);
// let quantity =parseInt(document.getElementById('quantity').innerText);
// console.log(quantity);

// step : 4 :> "price" k dorte hobe. dore parsFlote korte hobe.

// let price = parseFloat(document.getElementById('price').innerText);
// let gun = price * count;
// console.log(gun);
// step : 5 :> "price" er shthe "quantity" k gun korte hobe . gun kore new variable a rakte hobe.




// step : 6 :> er por "shopkipperBlance" k dorte hobe . dore parsflot korte hobe . kore "shopkipperBlance" er modhe |"Gunfol rakte hobe"

// let shopkipperBlance = parseFloat(document.getElementById('shopkipperBlance').innerHTML);
// shopkipperBlance = totalPrice;
// !Plus minus er sathe Gun korte pari nai pore dekte hobe 
//! Quantity incress and decress [-]00[+] End



// ? Discount start 
/*

Step : 1 > "buyNow" k dorte hobe.
Step : 2 > "discountCode" er value dorte hobe.
Step : 2.1 > "discountCode" er value jodi "DISC30" hoi tahole 30% sar [mani  if else use korte hobe].
Step : 3 > "price" k dore take parseFlote korte hobe.
Step :  3.1 > "price" k dore  parseFlote korrar pore 0.3 dara multiply korte hobe
Step :  3.2 > "shopkipperBlance" er moddhe 'priceDiscount'-'price' k biug kore rakte hobe.
Step :  4 > "discountAmmount" er moddhe 'priceDiscount' k rakte hobe.


 */


// Step : 1 > "buyNow" k dorte hobe.
document.getElementById('buyNow').addEventListener('click',function(){
    // Step : 2 > "discountCode" er value dorte hobe.
    let discountCode = document.getElementById('discountCode').value ;
    // Step : 2.1 > "discountCode" er value jodi "DISC30" hoi tahole 30% sar [mani  if else use korte hobe].
    if(discountCode === 'DISC30'){
        // Step : 3 > "price" k dore take parseFlote korte hobe.
        let price = parseFloat(document.getElementById('price').innerText);
        // Step :  3.1 > "price" k dore  parseFlote korrar pore 0.3 dara multiply korte hobe
        let priceDiscount = price * 0.3;
        // Step :  3.2 > "shopkipperBlance" er moddhe 'priceDiscount' k rakte hobe.
        document.getElementById('shopkipperBlance').innerText = price - priceDiscount;
        // Step :  4 > "discountAmmount" er moddhe 'priceDiscount' k rakte hobe.
        document.getElementById('discountAmmount').innerText = priceDiscount;
        
    } else {
        alert("Please give valid promocode. if you want to 30% discount.");
    }
})

// ? Discount End
