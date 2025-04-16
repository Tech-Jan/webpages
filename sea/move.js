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
    const div = document.getElementById("bubble");
    if (div) {
      div.innerHTML = "<p>Welcome</p><p>back!</p>";
    }
    sessionStorage.noFirstVisit = "1";
  }

  if (document.body) {
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

      const box = document.querySelector(".topbox");
      const whale = document.querySelector(".whale");
      const width = box ? box.offsetWidth : 0;
      const height = box ? box.offsetHeight : 0;
      const scrollLeft = $(document).scrollLeft();
      const scrollTop = $(document).scrollTop();
      const x = e.clientX - width / 2 + scrollLeft;
      const y = e.clientY - height / 2 + scrollTop;

      if (!whale) return;

      const rect = whale.getBoundingClientRect();
      let newposX = x;
      let newposY = y;
      const test = newposX - rect.right + width / 2 - scrollLeft;
      let testy = newposY - rect.bottom + height / 2 - scrollTop;
      const test2 = rect.right - width / 2 + scrollLeft - 16;
      const test3 = rect.bottom - height / 2 + scrollTop;
      let transform = 0;

      if (testy > 100) testy = 100;
      if (testy < -100) testy = -100;

      let time = (Math.abs(test) + Math.abs(testy)) / 10;
      if (time < 7) time = 7;

      let start = 0;

      if (test < 0) transform = 180;

      const currentRotationAngle = getRotationAngle(whale);

      if (transform != currentRotationAngle) {
        $(".whale").css({
          transform: `translateX(${test2}px) translateY(${test3}px) rotateY(${transform}deg)`,
          transition: "transform 1s",
        });
        start = 1001;
      }

      if (newposX > 430) newposY = -30;
      if (newposX > 540) newposY = -10;
      if (newposX > 810) newposX = 810;
      if (newposX < -21 && newposY < -70) newposY = -70;
      if (newposX < -214) newposY = -57;
      if (newposX < -430) newposX = -430;
      if (newposY < -105) newposY = -105;
      if (newposY > 43) newposY = 43;

      function move() {
        $(".whale").css({
          transform: `translateX(${newposX}px) translateY(${newposY}px) rotateY(${transform}deg)`,
          transition: `transform ${time}s`,
        });
      }

      setTimeout(move, start);
    });
  }
});
