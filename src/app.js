const compute = function(ev) {
  ev.preventDefault();

  let form = ev.target;
  let phone = form.telephone.value.replace(/\s/g, "");
  let detector = new NetworkDetect(phone);
  let result = form.nettyResult;

  try {
    let network = detector.getNetworkName();

    if (!network) {
      return result.value = "🚫 " + this.phone + " belongs to no Nigerian network, check the number and TRY AGAIN!!";
    }

    form.telephone.value = ''; // clear input field
    return result.value = phone + ' belongs to the ' + network + ' network 💚';
  } catch (e) {
    return alert(e.message);
  }
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('../sw.js')
      .then(function () {
        console.log("Service Worker Registered!");
      });
  });
}

console.log("Developed by Bolaji Ayodeji")
