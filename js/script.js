$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');

    });

    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if($(window).scrollTop()>0){
            $('.top').show();
        }else{
            $('.top').hide();
        }


    });

    //smooth scrolling

    $('a[href*="#"]').on('click',function(e){
        e.preventDefault();

        $('html, body').animate({
            scrollTop :$($(this).attr('href')).offset().top,

        },
          500,
          'linear'
          
        );
    });

    function submitForm(event) {
        event.preventDefault(); // Prevent the default form submission behavior
    
        // Get form data
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var project = document.getElementById("project").value;
        var message = document.getElementById("message").value;
    
        // Validate form data (you can add more validation as needed)
    
        // Example: Check if email is valid
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }
    
        // Prepare data for submission (you may want to send it to a server or handle it accordingly)
        var data = {
            name: name,
            email: email,
            project: project,
            message: message
        };
    
        // Example: Log the data to the console (replace this with your actual submission logic)
        console.log(data);
    
        // Optionally, you can reset the form after submission
        document.getElementById("contactForm").reset();
    }
    
    function validateEmail(email) {
        // Basic email validation (you can use a more sophisticated method)
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    

   

});


  