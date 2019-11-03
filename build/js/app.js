"use strict";

var compute = function compute(ev) {
  ev.preventDefault();
  var form = ev.target;
  var phone = form.telephone.value.replace(/\s/g, "");
  var detector = new NetworkDetect(phone);
  var result = form.nettyResult;

  try {
    var network = detector.getNetworkName();

    if (!network) {
      return result.value = "Network not found, check the number and TRY AGAIN!!";
    }

    form.telephone.value = ''; // clear input field

    return new Toast({
      message: "".concat(phone, " belongs to the ").concat(network, " network \uD83D\uDC9A"),
      type: "".concat(network)
    });
  } catch (e) {
    return new Toast({
      message: e.message,
      type: 'error'
    });
  }
};

var c = document.getElementById('copy_year');
var cd = new Date().getFullYear();
c.innerHTML = cd;

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('../sw.js').then(function () {
      console.log("Service Worker Registered!");
    });
  });
}

console.log("%cNetty-Finder!!!", "font-weight: bold; font-size: 50px; color: green; text-shadow: 1px 1px 0px black, 1px -1px 0px black, -1px 1px 0px black, -1px -1px 0px black;");
console.log("Developed by Bolaji Ayodeji");
//# sourceMappingURL=app.js.map