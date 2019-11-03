const compute = function (ev) {
  ev.preventDefault();

  let form = ev.target;
  let phone = form.telephone.value.replace(/\s/g, "");
  let detector = new NetworkDetect(phone);
  let result = form.nettyResult;

  try {
    let network = detector.getNetworkName();

    if (!network) {
      return result.value = "Network not found, check the number and TRY AGAIN!!";
    }

    form.telephone.value = ''; // clear input field
    return new Toast({
      message: `${phone} belongs to the ${network} network 💚`,
      type: `${network}`
    })
  } catch (e) {
    return new Toast({
      message: e.message,
      type: 'error'
    })
  }
}


let c = document.getElementById('copy_year');
let cd = new Date().getFullYear();
c.innerHTML = cd;

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('./sw.js')
      .then(function () {
        console.log("Service Worker Registered!");
      });
  });
}

console.log("%cNetty-Finder!!!", "font-weight: bold; font-size: 50px; color: green; text-shadow: 1px 1px 0px black, 1px -1px 0px black, -1px 1px 0px black, -1px -1px 0px black;");
console.log("Developed by Bolaji Ayodeji");
