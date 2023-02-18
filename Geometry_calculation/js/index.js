


// Triangle card start
function mouseover(t) {
    // Generate a random hexadecimal color code
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById(t).style.backgroundColor = randomColor;
}
function mouseOut(t) {
    document.getElementById(t).style.backgroundColor = '#ffff';
}

document.getElementById('calculate').addEventListener('click', function () {
    getDate("first-name", "base", "height")
})
// Triangle card end

// Rectangle card Start 
document.getElementById('rectangleCalc').addEventListener('click', function () {
    getDateForRectPara('rectangle-title', 'rectangle-width', 'rectangle-length')
})
// Rectangle card End

// parallelogram card Start
document.getElementById('parallelogramCalc').addEventListener('click', function () {
    getDateForRectPara('parallelogram-name', 'parallelogram-width', 'parallelogram-length')
})
// parallelogram card End

// Pentagon card Start
document.getElementById('pentagonCalc').addEventListener('click', function () {
    getDate("pentagon-name", "pentagon-p", "pentagon-b")
})
// Pentagon card End

// Rhombus card Start
document.getElementById('rhombusCalc').addEventListener('click', function () {
    getDate("rhombusName", "rhombusD1", "rhombusD2")
})
// Rhombus card End


// ellipse card End
document.getElementById('ellipseCalc').addEventListener('click', function () {
    let elipseName = document.getElementById('elipseName').innerText;
    let ellipseA = parseFloat(document.getElementById('ellipseA').innerText);
    let ellipseB = parseFloat(document.getElementById('ellipseB').innerText);
    let area = (3.1416 * ellipseA * ellipseB).toFixed(2);
    displayData(elipseName, area);
})
// ellipse card End



// Use the random color in your code





