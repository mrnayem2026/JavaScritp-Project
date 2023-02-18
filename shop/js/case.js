// ! when i cliced "caseCountPlus" btn the count will be increment

document.getElementById('caseCountPlus').addEventListener('click', function () {
    let caseCount = parseInt(document.getElementById('caseCount').value);
    let newCaseCount = caseCount + 1;
    document.getElementById('caseCount').value = newCaseCount;
})



// !when i cliced "caseCountMinus" btn the count will be diccrement

document.getElementById('caseCountMinus').addEventListener('click', function () {
    let caseCount = parseInt(document.getElementById('caseCount').value);
    if (caseCount > 0) {
        let newCaseCount = caseCount - 1;
        document.getElementById('caseCount').value = newCaseCount;
    }
})