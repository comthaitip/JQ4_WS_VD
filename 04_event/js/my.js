/* 
 * Author & Facebook: Kasiti Panthanom
 * E-Mail: kasiti@cityhubs.net, comthaitip@gmail.com
 */

$(document).ready(function() {

    $("#para1").click(function() {
        $(this).hide();
    });

    $("#para2").dblclick(function() {
        $(this).hide();
    });

    $("#box3").mouseenter(function() {
        $(this).css("background", "#0f0");
    });

    $("#box3").mouseleave(function() {
        $(this).css("background", "#f00");
    });

    $("#box3").mousedown(function() {
        $(this).css("background", "#00f");
    });

    $("#box3").mouseup(function() {
        $(this).css("background", "#000");
    });

    $("#para2").hover(function() {
        $(this).css("font-size", "1.5em");
    }, function() {
        $(this).css("font-size", "1em");
    });
    
    $("input").focus(function() {
        $(this).css("background", "#f00");
    });
    
     $("p").bind("mouseenter mouseleave", function() {
        $(this).css("background", "#f00");
    });
    // validate the comment form when it is submitted
    $("#commentForm").validate();

  

});