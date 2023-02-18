// !when i cliced 'phoneCountPlus' btn the count will be increment
document.getElementById('phoneCountPlus').addEventListener('click', function () {
    upDatePhoneCount(true);
    phonePriceTotal();
})

// !when i cliced 'phoneCountPlus' btn the count will be diccrement
document.getElementById('phoneCountMinus').addEventListener('click', function () {
    upDatePhoneCount(false);
})

