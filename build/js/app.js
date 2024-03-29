"use strict";

var compute = function compute(ev) {
  ev.preventDefault();
  var form = ev.target;
  var phone = form.telephone.value.replace(/\s/g, "");
  var detector = new NetworkDetect(phone);

  try {
    var network = detector.getNetworkName();

    if (!network) {
      return new Toast({
        message: "".concat(phone, " belongs to no +234 network, check the number and TRY AGAIN!"),
        type: "error"
      });
    }

    form.telephone.value = ""; // clear input field

    return new Toast({
      message: "".concat(phone, " belongs to the ").concat(network, " network"),
      type: "".concat(network)
    });
  } catch (e) {
    return new Toast({
      message: e.message,
      type: "error"
    });
  }
};

var c = document.getElementById("copy_year");
var cd = new Date().getFullYear();
c.innerHTML = cd;

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("./sw.js").then(function () {
      console.log("Service Worker Registered!");
    });
  });
}

console.log("%cNettyFinder!!!", "font-weight: bold; font-size: 50px; color: green; text-shadow: 1px 1px 0px black, 1px -1px 0px black, -1px 1px 0px black, -1px -1px 0px black;");
console.log("Developed by https://bolajiayodeji.com");
//# sourceMappingURL=app.js.map