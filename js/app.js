function compute(form) {

    var userInput = parseInt(form.telephone.value);
    var userInput = Number(userInput);

    //Converts number to GSM acceptable codes
    var checkNumber = userInput.toString().slice(0, 3);
    var checkNumber = 0 + checkNumber;

    //Checks validity of number, (must start with 0)
    var checkValid = userInput.toString().slice(0);
    var checkValid = 0 + checkValid;

    //Stores initial number
    var iInput = userInput.toString().slice(0);
    var iInput = 0 + iInput;

    console.log(checkValid)

    //Returns output of the converter
    function validate(checker) {
        return checkNumber;
    }

    //Prepares input result
    var myResult = validate(userInput);


    //Stores GSM codes
    var gCodes = function (GSM) {
        this.GSM = GSM;
    }

    //MTN GSM codes
    var m1 = new gCodes('0806');
    var m2 = new gCodes('0803');
    var m3 = new gCodes('0816');
    var m4 = new gCodes('0813');
    var m5 = new gCodes('0810');
    var m6 = new gCodes('0814');
    var m7 = new gCodes('0816');
    var m8 = new gCodes('0703');
    var m9 = new gCodes('0706');

    //GLO GSM codes
    var g1 = new gCodes('0805');
    var g2 = new gCodes('0705');
    var g3 = new gCodes('0905');
    var g4 = new gCodes('0807');
    var g5 = new gCodes('0815');
    var g6 = new gCodes('0811');
    var g7 = new gCodes('0905');

    //9MOBILE GSM codes
    var n1 = new gCodes('0809');
    var n2 = new gCodes('0909');
    var n3 = new gCodes('0817');
    var n4 = new gCodes('0818');

    //AIRTEL GSM codes
    var a1 = new gCodes('0802');
    var a2 = new gCodes('0902');
    var a3 = new gCodes('0701');
    var a4 = new gCodes('0808');
    var a5 = new gCodes('0708');
    var a6 = new gCodes('0812');


    //Validates number and detects network
    if (checkValid.length < 11 || checkValid.lenght > 11) {
        alert("Error! Invalid number. Number must not be lesser or greater than 11")
    }
    else if (checkNumber === m1.GSM || checkNumber === m2.GSM || checkNumber === m3.GSM || checkNumber === m4.GSM || checkNumber === m5.GSM || checkNumber === m6.GSM || checkNumber === m7.GSM || checkNumber === m8.GSM || checkNumber === m9.GSM) {
        form.nettyResult.value = iInput + " belongs to MTN network 💛"
    }
    else if (checkNumber === g1.GSM || checkNumber === g2.GSM || checkNumber === g3.GSM || checkNumber === g4.GSM || checkNumber === g5.GSM || checkNumber === g6.GSM || checkNumber === g7.GSM) {
        form.nettyResult.value = iInput + " belongs to GLO network 💚"
    }
    else if (checkNumber === n1.GSM || checkNumber === n2.GSM || checkNumber === n3.GSM || checkNumber === n4.GSM) {
        form.nettyResult.value = iInput + " belongs to 9MOBILE network 💚"
    }
    else if (checkNumber === a1.GSM || checkNumber === a2.GSM || checkNumber === a3.GSM || checkNumber === a4.GSM || checkNumber === a5.GSM || checkNumber === a6.GSM) {
        form.nettyResult.value = iInput + " belongs to AIRTEL network 💛️"
    }
    else {
        alert(iInput + " belongs to no Nigerian network, check the number and TRY AGAIN!!")
    }
}

console.log("Hurray! Script working perfectly")
console.log("Developed by Bolaji Ayodeji")