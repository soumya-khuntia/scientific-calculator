
let user=document.getElementById('display');
// To check whether inverse trigonometric functions are enabled
let isInverse = false;

function appendToDisplay(value) {
    user.value += value;
}
function clearDisplay() {
    user.value = '';
}
function backspace() {
    let currentValue = user.value;
    user.value = currentValue.slice(0, -1);
}
function calculate() {
    try {
        user.value = eval(user.value);
    } catch (error) {
        user.value = 'Error';
    }
}

function log() {
    user.value = Math.log10(eval(user.value));
}

function divide(){
    user.value = 1 / eval(user.value);
}

function upon() {
    user.value = Math.exp(eval(user.value));
}

// Function to get Euler's number (e)
function eular() {
    user.value += Math.E;
}

function pie(){
    user.value += Math.PI;
}

function calculateFactorial() {
    var number = parseInt(user.value);

    if (isNaN(number) || number < 0) {
        user.value = 'NaN';
    } else {
        var factorial = 1;
        for (var i = 2; i <= number; i++) {
            factorial *= i;
        }
        user.value=factorial;
    }
}

var base = null;
function calculatePower() {
    var result;
    var exponent;

    if (base === null) {
        base = parseFloat(user.value);
        user.value = '';
    } else {
        exponent = parseFloat(user.value);
        // Check if exponent is a valid number
        if (!isNaN(exponent)) {
            result = Math.pow(base, exponent);
            user.value = result; 
            base = null; 
            result = null;
          } else {
            // If exponent is not a valid number, set base to null
            base = null;
            user.value = 'Error';
        }
    }
}

function power() {
    user.value = isInverse ? eval(user.value) ** 3 : eval(user.value) ** 2;
}

function squareRoot() {
    user.value = isInverse ? Math.cbrt(eval(user.value)) : Math.sqrt(eval(user.value));
}


// Trigonometric functions using radians
// Function onvert degrees to radians
Math.radians = function (degrees) {
    return degrees * Math.PI / 180;
};

function sin() {
    user.value = isInverse ? Math.asin(eval(user.value)) : Math.sin(Math.radians(eval(user.value)));
}

function cos() {
    user.value = isInverse ? Math.acos(eval(user.value)) : Math.cos(Math.radians(eval(user.value)));
}

function tan() {
    user.value = isInverse ? Math.atan(eval(user.value)) : Math.tan(Math.radians(eval(user.value)));
}

function toggleTrigFunction() {
    isInverse = !isInverse;

    if (isInverse) {
        document.getElementById('sin').innerHTML = 'asin';
        document.getElementById('cos').innerHTML = 'acos';
        document.getElementById('tan').innerHTML = 'atan';
        document.getElementById('sq').innerHTML = 'x<sup>3</sup>';
        document.getElementById('sqr').innerHTML = '<span>&#8731;</span>';
        document.getElementById('cn').innerHTML = '1st';
    } else {
        document.getElementById('sin').innerHTML = 'sin';
        document.getElementById('cos').innerHTML = 'cos';
        document.getElementById('tan').innerHTML = 'tan';
        document.getElementById('sq').innerHTML = 'x<sup>2</sup>';
        document.getElementById('sqr').innerHTML = '<span>&#8730;</span>';
        document.getElementById('cn').innerHTML = '2nd';
    }

}
