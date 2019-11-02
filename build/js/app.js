"use strict";

var compute = function compute(ev) {
  ev.preventDefault();
  var form = ev.target;
  var phone = form.telephone.value;
  var detector = new NetworkDetect(phone);
  var result = form.nettyResult;

  try {
    var network = detector.getNetworkName();

    if (!network) {
      return result.value = "🚫 " + this.phone + " belongs to no Nigerian network, check the number and TRY AGAIN!!";
    }

    form.telephone.value = ''; // clear input field

    return result.value = phone + ' belongs to the ' + network + ' network 💚';
  } catch (e) {
    return alert(e.message);
  }
};

console.log("Developed by Bolaji Ayodeji");
//# sourceMappingURL=app.js.map