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
      return result.value = "🚫 Network not found, check the number and TRY AGAIN!!";
    }

    form.telephone.value = ''; // clear input field

    return result.value = phone + ' belongs to the ' + network + ' network 💚';
  } catch (e) {
    return alert(e.message);
  }
};

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('../sw.js').then(function () {
      console.log("Service Worker Registered!");
    });
  });
}

console.log("Developed by Bolaji Ayodeji");
//# sourceMappingURL=app.js.map