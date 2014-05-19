/* 
 * Author & Facebook: Kasiti Panthanom
 * E-Mail: kasiti@cityhubs.net, comthaitip@gmail.com
 */
$(document).ready(function() {
    $("#myForm").submit(function() {
        $.cookie('yourname', $("#inputName").val(), { expires: 7 });
    });
    
    var user = $.cookie('yourname');
    if (!user.match("undefined"))
    {
        alert("Welcome again " + user);
    }
});



