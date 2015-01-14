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
      recipients = ['info@toocan.biz']
      ;
    
    var
      $form = jQuery(e.currentTarget),
      text = 
        $form.find('#contact_message').val() + "\r\n\r\n" +
        "Name: " + $form.find('#contact_name').val() + "\r\n" +
        "E-Mail: " + $form.find('#contact_email').val() + "\r\n" +
        "Telefon: " + $form.find('#contact_phone').val()
      ;

    // set subject language dependend
    var subject = 'Contact Request toocan.biz';
    if ($form.find('[name="language"]').val() === 'de') {
      subject = 'Kontaktanfrage von toocan.biz';
    }

    // compose the url 
    var url = "mailto:" + recipients.join(',') + "?" + 
      "subject=" + escape(subject) + "&" + 
      "body=" + escape(text);

    // open mailto schema handler
    document.location.href = url;

    return true;
  });
});