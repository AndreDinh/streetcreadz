$(document).ready(function(){
  $("#stance").on('click',function(){
    $('.container').empty();
    $("img").addClass(' bounceOutRight animated');
    ajax();
  });
  $("#naw").on('click',function(){
    $('.container').empty();
    $("img").addClass(' bounceOutLeft animated');
    ajax();
  });

});
