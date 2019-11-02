"use strict";

(function ($) {
  "use strict"; // WRAP INTRO TEXT

  $('.ml1 .letters').each(function () {
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
  });
  anime.timeline({
    loop: true
  }).add({
    targets: '.ml1 .letter',
    scale: [0.3, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 100,
    delay: function delay(_, i) {
      return 70 * (i + 1);
    }
  }).add({
    targets: '.ml1 .line',
    scaleX: [0, 1],
    opacity: [0.5, 1],
    easing: "easeOutExpo",
    duration: 900,
    offset: '-=875',
    delay: function delay(_, i, l) {
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

console.log("Hurray! Script working perfectly");
console.log("Developed by Bolaji Ayodeji");
//# sourceMappingURL=app.js.map