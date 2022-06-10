$(document).ready(function(){
  var count=0;
  setInterval(function(){
    if(count==3){
      count=0;
    }
    $(".sliders").stop().animate({
      left:-1200*count
    })
    count++;
  },3000);
});