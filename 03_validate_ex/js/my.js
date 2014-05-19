/* 
 * Author & Facebook: Kasiti Panthanom
 * E-Mail: kasiti@cityhubs.net, comthaitip@gmail.com
 */

$(document).ready(function() {
    // validate the comment form when it is submitted
    $("#commentForm").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            password: {
                required: true,
                minlength: 6
            },
            email: {
                required: true,
                email: true
            },
            postalCode: {
                required: true,
                pattern: /^\d{5}$/
            },
            comment: {
                required: true
            }
        },
        messages: {
            name: {
                required: "Please enter a name",
                minlength: "Your name must consist of at least 2 characters"
            },
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 6 characters long"
            },            
            email: "Please enter a valid email address",
            url: "Please enter valid URL (include protocol)",
            postalCode: "You must enter valid Postal Code",
            comment: "Please insert some comment"
        }
    });

});