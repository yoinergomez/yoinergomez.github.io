var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector("#bio button");

if (window.matchMedia("(prefers-reduced-motion)").matches) {
  vid.removeAttribute("autoplay");
  vid.pause();
  pauseButton.innerHTML = "Paused";
}

function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener("ended", function() {
  // only functional if "loop" is removed
  vid.pause();
  // to capture IE10
  vidFade();
});

pauseButton.addEventListener("click", function() {
  vid.classList.toggle("stopfade");
  if (vid.paused) {
    vid.play();
    pauseButton.innerHTML = "Pause";
  } else {
    vid.pause();
    pauseButton.innerHTML = "Paused";
  }
});
$(document).ready(function() {

    $("#clock")
    .countdown("2018/01/01")
    .on("update.countdown", function(event) {
      var $this = $(this).html(
        event.strftime(
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
            "<span>%-w</span> week%!w      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
            "<span>%-d</span> day%!d &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
            "<span>%H</span> hr &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
            "<span>%M</span> min &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
            "<span>%S</span> sec <br/>"
        )
      );
    });
});
