function getPoints(){
    point1x = document.getElementById("point1x").value;
    point1y = document.getElementById("point1y").value;
    point2x = document.getElementById("point2x").value;
    point2y = document.getElementById("point2y").value;
    point3x = document.getElementById("point3x").value;
    point3y = document.getElementById("point3y").value;
}

function getEqOutput() {
    var firstEq = [0.0,0.0,0.0];
    var secondEq = [0.0,0.0,0.0];
    var thirdEq = [0.0,0.0,0.0];
    var firstSecEq = [0.0,0.0,0.0];
    var newFirstSecEq = [0.0,0.0,0.0];
    var secThirdEq= [0.0,0.0,0.0];
    var newThirdSecEq = [0.0,0.0,0.0];
    var sumEq = [0.0,0.0,0.0];
    var coefficients = [0.0,0.0,0.0];
    
    firstEq[0] = point1x ** 2;
    firstEq[1] = point1x;
    firstEq[2] = point1y;

    secondEq[0] = point2x ** 2;
    secondEq[1] = point2x;
    secondEq[2] = point2y;

    thirdEq[0] = point3x ** 2;
    thirdEq[1] = point3x;
    thirdEq[2] = point3y;

    firstSecEq[0] = firstEq[0] - secondEq[0];
    firstSecEq[1] = firstEq[1] - secondEq[1];
    firstSecEq[2] = firstEq[2] - secondEq[2];

    secThirdEq[0] = thirdEq[0] - secondEq[0];
    secThirdEq[1] = thirdEq[1] - secondEq[1];
    secThirdEq[2] = thirdEq[2] - secondEq[2];

    newFirstSecEq[0] = firstSecEq[0] * secThirdEq[0];
    newFirstSecEq[1] = firstSecEq[1] * secThirdEq[0];
    newFirstSecEq[2] = firstSecEq[2] * secThirdEq[0];

    newThirdSecEq[0] = secThirdEq[0] * firstSecEq[0];
    newThirdSecEq[1] = secThirdEq[1] * firstSecEq[0];
    newThirdSecEq[2] = secThirdEq[2] * firstSecEq[0];

    sumEq[0] = newFirstSecEq[0] - newThirdSecEq[0];
    sumEq[1] = newFirstSecEq[1] - newThirdSecEq[1];
    sumEq[2] = newFirstSecEq[2] - newThirdSecEq[2];

    coefficients[1] = sumEq[2] / sumEq[1]; 

    coefficients[0] = (firstSecEq[2] - (firstSecEq[1] * coefficients[1]))
    / firstSecEq[0];

    coefficients[2] = firstEq[2] - ((firstEq[0] * coefficients[0]) +
    (firstEq[1] * coefficients[1]));
    

    var output1 = "Equation: y = ";
    var output2 = coefficients[0].toString();
    var output3 = "x^2 + ";
    var output4 = coefficients[1].toString();
    var output5 = "x + ";
    var output6 = coefficients[2].toString();

    var outputEquation = output1 + output2 + output3 + output4 + output5 + output6;
    return outputEquation;
    
    
}

function print(){
    document.getElementById('eqOutput').innerHTML = getEqOutput();
}

function submitButton(){
    getPoints();
    print();
}