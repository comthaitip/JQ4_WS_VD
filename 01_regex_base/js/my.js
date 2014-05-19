/* 
 * Author & Facebook: Kasiti Panthanom
 * E-Mail: kasiti@cityhubs.net, comthaitip@gmail.com
 */

function validateAll() {
    var email = $("#email").val();
    var url = $("#url").val();
    var username = $("#username").val();
    var password = $("#password").val();
    var spassword = $("#spassword").val();

    checkEmail(email);
    checkUrl(url);
    checkUsername(username);
    checkPassword(password);
    checkSPassword(spassword);

    return false;
}

//function used to check valid email
function checkEmail(email)
{
    //regular expression for email
    //var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

    var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!pattern.test(email)) {
        $(".email_error").show();
    } else {
        $(".email_error").hide();
    }
}

function checkUrl(url) {
    //regular expression for url
    var pattern = /^(http|https)?:\/\/[a-zA-Z0-9-\.]+\.[a-z]{2,4}/;
    if (!pattern.test(url)) {
        $(".url_error").show();
    } else {
        $(".url_error").hide();
    }
}

function checkUsername(username) {
    var pattern = /^[a-z0-9_-]{4,15}$/;
    if (!pattern.test(username)) {
        $(".username_error").show();
    } else {
        $(".username_error").hide();
    }
}

function checkPassword(password) {
    var pattern = /^[a-zA-Z0-9_-]{5,15}$/;
    if (!pattern.test(password)) {
        $(".password_error").show();
    } else {
        $(".password_error").hide();
    }
}

function checkSPassword(password) {
    var pattern = /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/;
    if (!pattern.test(password)) {
        $(".spassword_error").show();
    } else {
        $(".spassword_error").hide();
    }
}