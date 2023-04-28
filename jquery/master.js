

$(document).ready(function () {


    //Hide/Show    
    $("#hide").click(function () {
        $("#master").hide();
    });
    $("#show").click(function () {
        $("#master").show();
    });


    //FadeIn
    $("#fIn").click(function () {
        $("#master").fadeIn();

    });

    //FadeOut
    $("#fOut").click(function () {
        $("#master").fadeOut("5000");

    });

    //FadeTo
    $("#fTo").click(function () {
        $("#master").fadeTo("slow", 0.5);

    });

    //Toggle
    $("#f_toggle").click(function () {
        $("#master").fadeToggle();

    });


    //SliderToggel

    $("#s_toggle").click(function () {
        $("#master").slideToggle()
    });

    //Animate
    $("#animate").click(function () {
        var ani = $("#ani");
        ani.animate({ right: '100px' },3000);
        ani.animate({ bottom: '100px' }, "slow");
        ani.animate({ left: '100px' }, "slow");
        ani.animate({ top: '100px' }, "slow");
        ani.animate({ right: '100px' }, "slow");
        ani.animate({ fontSize: '3em' }, "slow");
       
    });
    //Stop Animate
    $("#s_stop").click(function(){
        $("#ani").stop(true);
      });

    //Add Append / PrependElements
      $("#App").click(function(){
        var text = $("#master").text();
         $("#master").append(text);
      });
      $("#prep").click(function(){
        var text = $("#master").text();
         $("#master").prepend(text);
      });


      // Empty ()Methode
      $("e_text").click(function(){
        $("#master").empty();
      });

});