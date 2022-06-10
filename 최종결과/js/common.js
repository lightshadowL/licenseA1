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
  
  $(".tabs>li>a").click(function(){
    $(".tab-content").hide();
    $(this.hash).show().css({display:"flex"});
    $(".tabs>li>a").removeClass("active");
    $(this).addClass("active")
  });

  $(".notic>ul>li:first-child").click(function(){
    $(".modal-wrap").show();
  });
  $(".modal-close").click(function(){
    $(".modal-wrap").hide();
  });
});