
$(document).ready(function() {
  $(".bilhete").hide()
  $(".back").hide()
  $(".container").click(function() {
    setTimeout(function(){
      $(".back").fadeIn()
      $(".message").hide()
      $(".css").attr("href", "css/carta.css")
      $(".css2").attr("href", "")
      $(".css3").attr("href", "css/btn.css")
      $(this).fadeOut()
      $(".shadow").hide()
      $(".bilhete").fadeIn()
      $(".title").hide()
    }, 3000)
  })
  $(".back").click(function() {
    $(".back").fadeOut()
    $(".message").fadeOut()
    $(".css").attr("href", "")
    $(".css2").attr("href", "css/index.css")
    $(".css3").attr("href", "")
    $(".container").fadeIn()
    $(".shadow").fadeIn()
    $(".bilhete").fadeOut()
    $(".title").fadeIn()
    
  })
})