function compute(form) {

    let userInput = parseInt(form.telephone.value);
    let userInput = Number(userInput);

    //Converts number to GSM acceptable Prefixes
    let checkNumber = userInput.toString().slice(0, 3);
    let checkNumber = 0 + checkNumber;

    let checkNumber2 = userInput.toString().slice(0, 4);
    let checkNumber2 = 0 + checkNumber2;

    //Checks validity of number, (must start with 0)
    let checkValid = userInput.toString().slice(0);
    let checkValid = 0 + checkValid;

    //Stores initial number
    let iInput = userInput.toString().slice(0);
    let iInput = 0 + iInput;

    //Returns output of the converter
    function validate(checker1) {
        return checkNumber;
    }

    function validate(checker2) {
        return checkNumber2;
    }

    //Prepares input result
    const myResult = validate(userInput);
    const myResult2 = validate(userInput);


    //Stores GSM Prefixes
    const gPrefixes = function (GSM) {
        this.GSM = GSM;
    }

    //MTN GSM Prefixes
    const m1 = new gPrefixes('0806');
    const m2 = new gPrefixes('0803');
    const m3 = new gPrefixes('0816');
    const m4 = new gPrefixes('0813');
    const m5 = new gPrefixes('0810');
    const m6 = new gPrefixes('0814');
    const m7 = new gPrefixes('0903');
    const m8 = new gPrefixes('0703');
    const m9 = new gPrefixes('0706');

    //GLO GSM Prefixes
    const g1 = new gPrefixes('0805');
    const g2 = new gPrefixes('0705');
    const g3 = new gPrefixes('0905');
    const g4 = new gPrefixes('0807');
    const g5 = new gPrefixes('0815');
    const g6 = new gPrefixes('0811');

    //9MOBILE GSM Prefixes
    const n1 = new gPrefixes('0809');
    const n2 = new gPrefixes('0909');
    const n3 = new gPrefixes('0817');
    const n4 = new gPrefixes('0818');
    const n5 = new gPrefixes('0908');

    //AIRTEL GSM Prefixes
    const a1 = new gPrefixes('0802');
    const a2 = new gPrefixes('0902');
    const a3 = new gPrefixes('0701');
    const a4 = new gPrefixes('0808');
    const a5 = new gPrefixes('0708');
    const a6 = new gPrefixes('0812');
    const a7 = new gPrefixes('0907');

    //STARCOMMS GSM Prefixes
    const s1 = new gPrefixes('07028');
    const s2 = new gPrefixes('07029');
    const s3 = new gPrefixes('0819');

    //VISAFONE GSM Prefixes
    const v1 = new gPrefixes('07025');
    const v2 = new gPrefixes('07026');
    const v3 = new gPrefixes('0704');

    //MULTILINKS GSM Prefixes
    const mu1 = new gPrefixes('07027');
    const mu2 = new gPrefixes('0709');

    //ZOOM GSM Prefix
    const z1 = new gPrefixes('0707')

    //NTEL GSM Prefix
    const nt1 = new gPrefixes('0804')

    //SMILE GSM Prefix
    const sm1 = new gPrefixes('0702')


    //Validates number and detects network
    if (checkValid.length < 11 || checkValid.lenght > 11) {
        alert("Error! Invalid number. Number must not be lesser or greater than 11")
    }
    else if (checkNumber === m1.GSM || checkNumber === m2.GSM || checkNumber === m3.GSM || checkNumber === m4.GSM || checkNumber === m5.GSM || checkNumber === m6.GSM || checkNumber === m7.GSM || checkNumber === m8.GSM || checkNumber === m9.GSM) {
        form.nettyResult.value = iInput + " belongs to MTN network 💛"
    }
    else if (checkNumber === g1.GSM || checkNumber === g2.GSM || checkNumber === g3.GSM || checkNumber === g4.GSM || checkNumber === g5.GSM || checkNumber === g6.GSM) {
        form.nettyResult.value = iInput + " belongs to GLO network 💚"
    }
    else if (checkNumber === n1.GSM || checkNumber === n2.GSM || checkNumber === n3.GSM || checkNumber === n4.GSM || checkNumber === n5.GSM) {
        form.nettyResult.value = iInput + " belongs to 9MOBILE network 💚"
    }
    else if (checkNumber === a1.GSM || checkNumber === a2.GSM || checkNumber === a3.GSM || checkNumber === a4.GSM || checkNumber === a5.GSM || checkNumber === a6.GSM || checkNumber === a7.GSM) {
        form.nettyResult.value = iInput + " belongs to AIRTEL network ❤️"
    }
    else if (checkNumber2 === s1.GSM || checkNumber2 === s2.GSM || checkNumber === s3.GSM) {
        form.nettyResult.value = iInput + " belongs to STARCOMMS network 💛️"
    }
    else if (checkNumber2 === v1.GSM || checkNumber2 === v2.GSM || checkNumber === v3.GSM) {
        form.nettyResult.value = iInput + " belongs to VISAFONE network 💗"
    }
    else if (checkNumber2 === mu1.GSM || checkNumber === mu2.GSM) {
        form.nettyResult.value = iInput + " belongs to MULTILINKS network 💙"
    }
    else if (checkNumber === s1.GSM || checkNumber === s2.GSM || checkNumber === s3.GSM) {
        form.nettyResult.value = iInput + " belongs to STARCOMMS network 💛️"
    }
    else if (checkNumber === z1.GSM) {
        form.nettyResult.value = iInput + " belongs to ZOOM network 💛️"
    }
    else if (checkNumber === nt1.GSM) {
        form.nettyResult.value = iInput + " belongs to NTEL network 💖"
    }
    else if (checkNumber === sm1.GSM) {
        form.nettyResult.value = iInput + " belongs to SMILE network 💛️"
    }
    else {
        alert(iInput + " belongs to no Nigerian network, check the number and TRY AGAIN!!")
    }
}

console.log("Hurray! Script working perfectly")
console.log("Developed by Bolaji Ayodeji")
