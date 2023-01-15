


jQuery(document).on("move click","body",function(e){
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
var transform = 1;
if (newposX>430) {newposY=-30}
if (newposX>540) {newposY=-10}
if (newposX>810) {newposX=810}
if (newposX<-21 && newposY<-70 ) {newposY=-70}
if (newposX<-214) {newposY=-57}
if (newposX<-430) {newposX=-430}
if (newposY< -105) {newposY=-105}
if (newposY> 43) {newposY=43}

$(".whale").css({'transform':'translateX('+newposX+'px) translateY('+newposY+'px)'
			});

});

