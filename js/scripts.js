$(document).ready(function(){
  var voterAge = parseInt(prompt("How old are you?"));
  if (voterAge >= 18){
    $("#over").show();
  } else {
    $("#under").show();
  }

});
