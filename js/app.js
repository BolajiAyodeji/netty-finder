(function($) {

    "use strict";

    // WRAP INTRO TEXT
    $('.ml1 .letters').each(function() {
        $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
    });

    anime.timeline({
            loop: true
        })
        .add({
            targets: '.ml1 .letter',
            scale: [0.3, 1],
            opacity: [0, 1],
            translateZ: 0,
            easing: "easeOutExpo",
            duration: 100,
            delay: function(el, i) {
                return 70 * (i + 1)
            }
        }).add({
            targets: '.ml1 .line',
            scaleX: [0, 1],
            opacity: [0.5, 1],
            easing: "easeOutExpo",
            duration: 900,
            offset: '-=875',
            delay: function(el, i, l) {
                return 80 * (l - i);
            }
        }).add({
            targets: '.ml1',
            opacity: 0,
            duration: 1000000000,
            easing: "easeOutExpo",
            delay: 1000
        });

})(jQuery);



function compute(form) {

    var userInput = parseInt(form.telephone.value);
    var userInput = Number(userInput);

    //Converts number to GSM acceptable Prefixes
    var checkNumber = userInput.toString().slice(0, 3);
    var checkNumber = 0 + checkNumber;

    var checkNumber2 = userInput.toString().slice(0, 4);
    var checkNumber2 = 0 + checkNumber2;

    //Checks validity of number, (must start with 0)
    var checkValid = userInput.toString().slice(0);
    var checkValid = 0 + checkValid;

    //Stores initial number
    var iInput = userInput.toString().slice(0);
    var iInput = 0 + iInput;

    //Returns output of the converter
    function validate(checker1) {
        return checkNumber;
    }

    function validate(checker2) {
        return checkNumber2;
    }

    //Prepares input result
    var myResult = validate(userInput);
    var myResult2 = validate(userInput);


    //Stores GSM Prefixes
    var gPrefixes = function(GSM) {
        this.GSM = GSM;
    }

    //MTN GSM Prefixes
    var m1 = new gPrefixes('0806');
    var m2 = new gPrefixes('0803');
    var m3 = new gPrefixes('0816');
    var m4 = new gPrefixes('0813');
    var m5 = new gPrefixes('0810');
    var m6 = new gPrefixes('0814');
    var m7 = new gPrefixes('0903');
    var m8 = new gPrefixes('0703');
    var m9 = new gPrefixes('0706');

    //GLO GSM Prefixes
    var g1 = new gPrefixes('0805');
    var g2 = new gPrefixes('0705');
    var g3 = new gPrefixes('0905');
    var g4 = new gPrefixes('0807');
    var g5 = new gPrefixes('0815');
    var g6 = new gPrefixes('0811');

    //9MOBILE GSM Prefixes
    var n1 = new gPrefixes('0809');
    var n2 = new gPrefixes('0909');
    var n3 = new gPrefixes('0817');
    var n4 = new gPrefixes('0818');
    var n5 = new gPrefixes('0908');

    //AIRTEL GSM Prefixes
    var a1 = new gPrefixes('0802');
    var a2 = new gPrefixes('0902');
    var a3 = new gPrefixes('0701');
    var a4 = new gPrefixes('0808');
    var a5 = new gPrefixes('0708');
    var a6 = new gPrefixes('0812');
    var a7 = new gPrefixes('0907');

    //STARCOMMS GSM Prefixes
    var s1 = new gPrefixes('07028');
    var s2 = new gPrefixes('07029');
    var s3 = new gPrefixes('0819');

    //VISAFONE GSM Prefixes
    var v1 = new gPrefixes('07025');
    var v2 = new gPrefixes('07026');
    var v3 = new gPrefixes('0704');

    //MULTILINKS GSM Prefixes
    var mu1 = new gPrefixes('07027');
    var mu2 = new gPrefixes('0709');

    //ZOOM GSM Prefix
    var z1 = new gPrefixes('0707')

    //NTEL GSM Prefix
    var nt1 = new gPrefixes('0804')

    //SMILE GSM Prefix
    var sm1 = new gPrefixes('0702')


    //Validates number and detects network
    if (checkValid.length < 11 || checkValid.lenght > 11) {
        alert("Error! Invalid number. Number must not be lesser or greater than 11")
    } else if (checkNumber === m1.GSM || checkNumber === m2.GSM || checkNumber === m3.GSM || checkNumber === m4.GSM || checkNumber === m5.GSM || checkNumber === m6.GSM || checkNumber === m7.GSM || checkNumber === m8.GSM || checkNumber === m9.GSM) {
        form.nettyResult.value = iInput + " belongs to MTN network 💛"
    } else if (checkNumber === g1.GSM || checkNumber === g2.GSM || checkNumber === g3.GSM || checkNumber === g4.GSM || checkNumber === g5.GSM || checkNumber === g6.GSM) {
        form.nettyResult.value = iInput + " belongs to GLO network 💚"
    } else if (checkNumber === n1.GSM || checkNumber === n2.GSM || checkNumber === n3.GSM || checkNumber === n4.GSM || checkNumber === n5.GSM) {
        form.nettyResult.value = iInput + " belongs to 9MOBILE network 💚"
    } else if (checkNumber === a1.GSM || checkNumber === a2.GSM || checkNumber === a3.GSM || checkNumber === a4.GSM || checkNumber === a5.GSM || checkNumber === a6.GSM || checkNumber === a7.GSM) {
        form.nettyResult.value = iInput + " belongs to AIRTEL network ❤️"
    } else if (checkNumber2 === s1.GSM || checkNumber2 === s2.GSM || checkNumber === s3.GSM) {
        form.nettyResult.value = iInput + " belongs to STARCOMMS network 💛️"
    } else if (checkNumber2 === v1.GSM || checkNumber2 === v2.GSM || checkNumber === v3.GSM) {
        form.nettyResult.value = iInput + " belongs to VISAFONE network 💗"
    } else if (checkNumber2 === mu1.GSM || checkNumber === mu2.GSM) {
        form.nettyResult.value = iInput + " belongs to MULTILINKS network 💙"
    } else if (checkNumber === s1.GSM || checkNumber === s2.GSM || checkNumber === s3.GSM) {
        form.nettyResult.value = iInput + " belongs to STARCOMMS network 💛️"
    } else if (checkNumber === z1.GSM) {
        form.nettyResult.value = iInput + " belongs to ZOOM network 💛️"
    } else if (checkNumber === nt1.GSM) {
        form.nettyResult.value = iInput + " belongs to NTEL network 💖"
    } else if (checkNumber === sm1.GSM) {
        form.nettyResult.value = iInput + " belongs to SMILE network 💛️"
    } else {
        alert(iInput + " belongs to no Nigerian network, check the number and TRY AGAIN!!")
    }
}

console.log("Hurray! Script working perfectly")
console.log("Developed by Bolaji Ayodeji")