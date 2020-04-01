document.getElementById("downButton").addEventListener("click", function() {
  addFade();
});

function viewportToPixels(value) {
  var parts = value.match(/([0-9\.]+)(vh|vw)/)
  var q = Number(parts[1])
  var side = window[['innerHeight', 'innerWidth'][['vh', 'vw'].indexOf(parts[2])]]
  return side * (q/100)
}

function addFade() {
  document.getElementById("about").classList.add("fading");
}

function addFadeSlow() {
  document.getElementById("about").classList.add("fading-slow");
}

window.onscroll = addFadeSlow;
