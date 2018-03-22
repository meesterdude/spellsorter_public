$(document).ready(function() {

    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    // This only happens on mailchimp subscribe
    $('.submit_email_subscribe').submit(function(ev) {
        ev.preventDefault(); // to stop the form from submitting

        if (validateEmail($(".email_address_field").val()))
        {
            // Create the conversion record using ajax
            var pageview = $("#pageview_id").val();

            if ($.isNumeric(pageview))
            {
                var full_url = getFullHostName() + '/ajax/create_conversion/' + pageview;

                // This will create the actual conversion
                $.ajax({url: full_url, success: function(result){
                    // Eventual error handling here
                }});

                // Has to happen after submit but submit closes the function
                setTimeout( function(){
                    window.location = $("#thankyou_url").val();
                }, 1000);
            }

            this.submit();
        }
        else
        {
            alert ('Email address is not valid');
        }
    });

});