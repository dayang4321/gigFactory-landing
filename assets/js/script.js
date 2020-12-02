
    $(document).ready(function() {
        $('#servicesSelect').multiselect({

            buttonClass: 'sort-button form-control',
            buttonWidth: '100p%',
            nonSelectedText: "\00",
            // onChange: function (option, checked) {
            //         console.log('values');

            //         var values = [];
            //         $('#transaction-history-sort option').each(function() {
            //             if ($(this).val() !== option.val()) {
            //                 values.push($(this).val());
            //                 console.log(values)
            //             }
            //         });
 
            //         $('#transaction-history-sort').multiselect('deselect', values);
            //     }
        });
    });
