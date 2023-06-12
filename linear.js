
function getPoints(){
    point1x = document.getElementById("point1x").value;
    point1y = document.getElementById("point1y").value;
    point2x = document.getElementById("point2x").value;
    point2y = document.getElementById("point2y").value;
    if (point1x.value == "" || point1y == null || point2x == null || point2y == null) {
        error();
    }
}

function getSlope(point1x, point1y, point2x, point2y) {
    var slope = (point2y - point1y) / (point2x - point1x);
    return slope;
}

function getIntercept(point1x, point1y){
    var intercept = point1y - (getSlope(point1x, point1y, point2x, point2y) * point1x);
    return intercept;
}

function getLinearLen(point1x, point1y, point2x, point2y){
    var len = (((point2x - point1x) ** 2) + ((point2y - point1y) ** 2)) ** .5;
    return len;
}

function getEqOutput() {
    var output1 = "Equation: y = ";
    var output2 = getSlope(point1x, point1y, point2x, point2y).toString();
    var output3 = "x + ";
    var output4 = getIntercept(point1x, point1y).toString();
    var outputEquation = "";
    if (getIntercept(point1x, point1y) == 0) {
        output3 = "x";
        if(getSlope(point1x, point1y, point2x, point2y) == 1){
            outputEquation = output1 + output3;
        }
        else {
            outputEquation = output1 + output2 + output3;
        }
    }
    else if (getIntercept(point1x, point1y) < 0) {
        output3 = "x ";
        if(getSlope(point1x, point1y, point2x, point2y) == 1){
            outputEquation = output1 + output3 + output4;
        }
        else {
            outputEquation = output1 + output2 + output3 + output4;
        }
    }
    else {
        if(getSlope(point1x, point1y, point2x, point2y) == 1){
            outputEquation = output1 + output3 + output4;
        }
        else {
            outputEquation = output1 + output2 + output3 + output4;
        }
    }

    return outputEquation;
}

function error(){
    document.getElementById('eqOutput').innerHTML = "Make sure all fields are filled!";
}

function print(){
    document.getElementById('eqOutput').innerHTML = getEqOutput();
    var lenOut = "Length: " + getLinearLen(point1x, point1y, point2x, point2y).toString()
    document.getElementById('lenOutput').innerHTML = lenOut;
}

function submitButton(){
    getPoints();
    print();
}
