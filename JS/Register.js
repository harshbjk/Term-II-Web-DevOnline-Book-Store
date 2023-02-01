$(document).ready(function() {
    console.log('Page is ready with JQuery1');
    $("#RegisterationForm").validate({
        rules: {
            firstname: {
                required: true,
                minlength: 3
            },
            lastname: {
                required: true,
                minlength: 3
            },
            username:{
                required: true,
                minlength: 5
            },
            password1:{
                required: true,
                minlength: 5
            },
            confirm_password: {
                required: true,
                minlength: 5,
                equalTo: "#password1"
            },
            email:{
                required: true,
            },
            agree: "required"
        },
        messages:{
            firstname: {
                required:"Please Enter Your Firstname",
                minlength: "Firstname must be at least 3 characters long"
            },
            lastname: {
                required:"Please Enter Your Lastname",
                minlength: "Lastname must be at least 3 characters long"
            },
            username: {
                required: "Please enter your Username",
                minlength: "Username must be at least 5 characters long"
            },
            password1: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },
            confirm_password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long",
                equalTo: "Please enter the same password as above"
            },
            email: "Please enter a valid email address",
            agree:"Please Agree to our policy"

        }
    });
    $("#username").focus(function() {
        var firstname = $("#firstname").val();
        username1 = 'Hey'
        var lastname = $("#lastname").val();
        if (firstname && lastname && !this.value) {
            var categoryId =   this.value = firstname + "." + lastname;
        }
    })
    $(document).ready(function() {
        var user = "hey"
        $(function() {
            $('#main-menu').smartmenus();
        });

    });
    let username1 = document.getElementById('firstname').value;
    document.cookie = username1;
    console.log(username1);
});
