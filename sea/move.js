document.addEventListener("DOMContentLoaded", function () {
  const whaleFontElement = document.getElementById("whale-font");
  if (whaleFontElement) {
    whaleFontElement.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  }
  if (sessionStorage.noFirstVisit) {
    // Update the 'bubble' element to welcome returning users
    if (sessionStorage.noFirstVisit) {
      // rewrite if visited
      const div = document.getElementById("bubble");
      div.innerHTML = "<p>Welcome</p><p>back!</p>";
    }
    if (window.debugMode) {
      console.log(sessionStorage.noFirstVisit);
    }
    if (!sessionStorage.noFirstVisit) {
      // check this flag for escaping this if block next time
      sessionStorage.noFirstVisit = "1";
    }
    sessionStorage.noFirstVisit = "1";
  }

  document.body.addEventListener("click", function (e) {
    function getRotationAngle(target) {
      const obj = window.getComputedStyle(target, null);
      const matrix =
        obj.getPropertyValue("-webkit-transform") ||
        obj.getPropertyValue("-moz-transform") ||
        obj.getPropertyValue("-ms-transform") ||
        obj.getPropertyValue("-o-transform") ||
        obj.getPropertyValue("transform");

      let angle = 0;

      if (matrix !== "none") {
        const values = matrix.split("(")[1].split(")")[0].split(",");
        const a = values[0];
        const b = values[1];
        angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
      }

      return angle < 0 ? angle + 360 : angle;
    }

    if ($(".bubble").length) {
      $(".bubble").css({ display: "none" });
    }

    let box = document.querySelector(".topbox");
    let whale = document.querySelector(".whale");
    var scrollLeft = $(document).scrollLeft();
    let height = box ? box.offsetHeight : 0;
    var x = e.clientX - width / 2 + scrollLeft;
    var scrollTop = $(document).scrollTop();
    var x = e.clientX - width / 2 - $scrollleft;
    var y = e.clientY - height / 2 - $scrolltop;
    var rect = whale.getBoundingClientRect();
    var test = newposX - rect.right + width / 2 - $scrollleft;
    var testy = newposY - rect.bottom + height / 2 - scrollTop;
    var test2 = rect.right - width / 2 + scrollLeft - 16;
    var testy = newposY - rect.bottom + height / 2 - +scrollTop;
    var test2 = rect.right - width / 2 + scrollLeft - 16;
    var test3 = rect.bottom - height / 2 + scrollTop;
    var transform = 0;

    if (testy > 100) {
      testy = 100;
    }
    if (testy < -100) {
      testy = -100;
    }

    var time = (Math.abs(test) + Math.abs(testy)) / 10;
    if (time < 7) {
      time = 7;
    }
    var start = 0;

    if (test < 0) {
      transform = 180;
    }

    const currentRotationAngle = getRotationAngle(
      document.getElementById("whale")
    );

    if (transform != currentRotationAngle) {
      $(".whale").css({
        transform:
          "translateX(" +
          test2 +
          "px) translateY(" +
          test3 +
          "px) rotateY(" +
          transform +
          "deg)",
        transition: "transform 1s",
      });
    }

    if (transform != currentRotationAngle) {
      start = 1001; // Delay the movement if the whale's rotation needs to change
    }

    if (newposX > 430) {
      newposY = -30;
    }
    if (newposX > 540) {
      newposY = -10;
    }
    if (newposX > 810) {
      newposX = 810;
    }
    if (newposX < -21 && newposY < -70) {
      newposY = -70;
    }
    if (newposX < -214) {
      newposY = -57;
    }
    if (newposX < -430) {
      newposX = -430;
    }
    if (newposY < -105) {
      newposY = -105;
    }
    if (newposY > 43) {
      newposY = 43;
    }

    function move() {
      $(".whale").css({
        transform:
          "translateX(" +
          newposX +
          "px) translateY(" +
          newposY +
          "px) rotateY(" +
          transform +
          "deg)",
        transition: "transform " + time + "s",
      });
    }

    // Schedule the movement of the whale with a delay determined by the 'start' variable
    setTimeout(move, start);

    function move() {
      $(".whale").css({
        transform:
          "translateX(" +
          newposX +
          "px) translateY(" +
          newposY +
          "px) rotateY(" +
          transform +
          "deg)",
        transition: "transform " + time + "s",
      });
    }

    setTimeout(move, start);
  });
});
