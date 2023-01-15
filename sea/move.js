jQuery(document).ready(function(){
jQuery('body,html').animate({scrollLeft: 530}, 3000);
jQuery('body,html').animate({scrollTop: 650}, 5000);
})

jQuery(document).on("move click","body",function(e){

function getRotationAngle(target)
{
  const obj = window.getComputedStyle(target, null);
  const matrix = obj.getPropertyValue('-webkit-transform') ||
    obj.getPropertyValue('-moz-transform') ||
    obj.getPropertyValue('-ms-transform') ||
    obj.getPropertyValue('-o-transform') ||
    obj.getPropertyValue('transform');

  let angle = 0;

  if (matrix !== 'none')
  {
    const values = matrix.split('(')[1].split(')')[0].split(',');
    const a = values[0];
    const b = values[1];
    angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
  }

  return (angle < 0) ? angle +=360 : angle;
}

let box = document.querySelector('.topbox');
let whale = document.querySelector('.whale');
let width = box.offsetWidth;
let height = box.offsetHeight;
var $scrollleft = $(document).scrollLeft()
var $scrolltop = $(document).scrollTop()
var x = e.clientX -width/2 + $scrollleft;
var y = e.clientY -height/2 +$scrolltop;
var rect = whale.getBoundingClientRect();
var newposX = x  ;
var newposY = y   ;
var test = newposX-rect.right +width/2 -+ $scrollleft;
var testy = newposY-rect.bottom +height/2 -+ $scrolltop;
var test2 = rect.right - width/2 + $scrollleft - 16;
var test3 = rect.bottom - height/2 + $scrolltop;
var transform = 0;

if (testy>100) {testy=100}
if (testy<-100) {testy=-100}

var time = (Math.abs(test)+Math.abs(testy))/10;
if (time<7) {time=7}
var start = 0;

if (test<0) {transform=180}

if ( transform != getRotationAngle(document.getElementById('whale'))) {$(".whale").css({'transform':'translateX('+test2+'px) translateY('+test3+'px) rotateY('+transform+'deg)',
            'transition': 'transform 1s'
			})}

if (transform != getRotationAngle(document.getElementById('whale'))) {start=1001}

if (newposX>430) {newposY=-30}
if (newposX>540) {newposY=-10}
if (newposX>810) {newposX=810}
if (newposX<-21 && newposY<-70 ) {newposY=-70}
if (newposX<-214) {newposY=-57}
if (newposX<-430) {newposX=-430}
if (newposY< -105) {newposY=-105}
if (newposY> 43) {newposY=43}


function move() {$(".whale").css({'transform':'translateX('+newposX+'px) translateY('+newposY+'px) rotateY('+transform+'deg)',
            'transition': 'transform '+time+'s'
			})}

setTimeout(move, start);

});

