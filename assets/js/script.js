
    (function() {
        'use strict';
        window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var form = $('.signup-form')[0];

            var formData = {};
            var url = '';
           // console.log(form)
         
        // prevent submission
          form.addEventListener('submit', function (event) {
        
              if ($('.signup-form').attr('id') === 'proSignupForm') {
                  url = 'professionals.json';
                formData = {
                    name : $('#proName').val()? $('#proName').val(): "",
                    linkedIn : $('#proLinkedIn').val()? $('#proLinkedIn').val(): "",
                    email : $('#proEmail').val()? $('#proEmail').val(): "",
                    phone : $('#proPhone').val()? $('#proPhone').val(): "",
                    skill : $('#proSkill').val()? $('#proSkill').val(): "",
                }
            }
      
            $('.submit-btn').html('<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>Submitting...').addClass('disabled d-flex align-items-center');
        

        if (form.checkValidity() === false) {
        event.preventDefault();
            event.stopPropagation();

            if (formData.skill === "") {
                $('.skill-feedback').show()
            }
            else $('.skill-feedback').hide()
            
            console.log('invalid')
      
          // console.log('validated')    
        } 
        form.classList.add('was-validated');
            // console.log('dated')
            if (form.checkValidity() === true) { 
              event.preventDefault();
              event.stopPropagation();
              $('.submit-btn').html('<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>Submitting...').addClass('disabled d-flex align-items-center');
              $.post("https://gigfactory-landing.firebaseio.com/" + url,
              JSON.stringify({
                 ...formData
            }),
              function (data, status) {
                  if (data) {
                      console.log(data)
                    console.log('success')    
                      $(".signup-title").fadeToggle(300);
                      $(".signup-title + h6").fadeToggle(300);
                     $('.form-block').fadeOut(300);
                     $(".signup-title").html("We would be in touch with you very soon");
                    // $(".hero-title").removeClass('col-xl-7').addClass('mx-auto');
                     $(".signup-title").fadeToggle(300);
                 
                }
                  else {
                    console.log('fail')    
                    // $(".hero-title h2").fadeToggle(300);
                    // $('.form-content').fadeOut(300);
                    // $(".hero-title h2").html("Oops! Something went wrong.");
                    // $(".hero-title").removeClass('col-xl-7').addClass('mx-auto');
                    // $(".hero-title h2").fadeToggle(300);
                 
                }
                
              });
            }
      
        }, false);
      
        }, false);
        })();
      
