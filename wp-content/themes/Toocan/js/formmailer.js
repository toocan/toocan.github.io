/**
 * Simple JS-Formmailer
 *
 * This is a simple implementation of a formmailer which serializes all form
 * fields to a string and opens up a `mailto://` link which then opens the
 * default mail handler on the client’s OS with prefilled subject, recipient
 * and text.
 *
 * Just add the `.formmailer` class to the form and include this script.
 */
jQuery(function() {
  jQuery('form.formmailer').on('submit', function(e) {
    // stop submitting
    e.preventDefault();

    var
      // configuration
      recipients = ['info@toocan.biz'],
      subject = 'Contact Request toocan.biz '
      ;
    
    // aggregate all fields from the form and add the values to the mail’s text
    var
      $form = jQuery(e.currentTarget),
      $fields = $form.find('textarea,input,select'),
      text = ''
      ;
    $fields.each(function(index, input) {
      var $input = jQuery(input);
      text += "# " + $input.attr('name') + "\r\n" + $input.val().trim() + "\r\n\r\n";
    });

    // compose the url 
    var url = "mailto:" + recipients.join(',') + "?" + 
      "subject=" + escape(subject) + "&" + 
      "body=" + escape(text);

    // open mailto schema handler
    document.location.href = url;

    return true;
  });
});