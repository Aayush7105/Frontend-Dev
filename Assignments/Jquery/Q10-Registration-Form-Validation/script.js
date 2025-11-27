/* Q10 — Registration Form Validation
 * - Check Name field -> not empty
 * - Check Email field -> valid format and uniqueness
 * - Check Password field -> minimum 8 characters
 * - Show success message if valid
 * - Highlight invalid fields with red border using .css()
 */

$(function () {
  const registeredEmails = ['existing@example.com', 'user@example.com']; // initial sample emails for uniqueness check

  const $form = $('#register-form');
  const $name = $('#name');
  const $email = $('#email');
  const $password = $('#password');
  const $status = $('#status-area');

  function setInvalid($el, message) {
    $el.addClass('invalid');
    $el.next('.error').text(message).show();
    // use .css() to style border explicitly (requirement)
    $el.css('border', '2px solid #e74c3c');
  }

  function clearInvalid($el) {
    $el.removeClass('invalid');
    $el.css('border', '1px solid #ccc');
    $el.next('.error').hide();
  }

  // Validate name
  function validateName() {
    const val = $name.val().trim();
    if (!val) {
      setInvalid($name, 'Name cannot be empty');
      return false;
    }
    clearInvalid($name);
    return true;
  }

  // Validate email format and uniqueness
  function validateEmail() {
    const val = $email.val().trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!val) {
      setInvalid($email, 'Email cannot be empty');
      return false;
    }
    if (!emailRegex.test(val)) {
      setInvalid($email, 'Email format invalid');
      return false;
    }
    if (registeredEmails.indexOf(val.toLowerCase()) !== -1) {
      setInvalid($email, 'Email already registered');
      return false;
    }
    clearInvalid($email);
    return true;
  }

  // Validate password
  function validatePassword() {
    const val = $password.val();
    if (!val || val.length < 8) {
      setInvalid($password, 'Password must be at least 8 characters');
      return false;
    }
    clearInvalid($password);
    return true;
  }

  // Real-time validation events
  $name.on('input blur', validateName);
  $email.on('input blur', validateEmail);
  $password.on('input blur', validatePassword);

  // Submit handler
  $form.on('submit', function (e) {
    e.preventDefault();
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isNameValid && isEmailValid && isPasswordValid) {
      // Register the email (simulate saving)
      registeredEmails.push($email.val().trim().toLowerCase());

      // Show success message
      const $msg = $('<div class="message" role="status"></div>').text('Registration successful for ' + $name.val().trim() + '.');
      $status.empty().append($msg);

      // Clear form fields
      $form[0].reset();

      // Clear any field highlighting
      clearInvalid($name); clearInvalid($email); clearInvalid($password);
    } else {
      // Show an error status
      const $msg = $('<div class="message" role="status"></div>').text('Please correct the highlighted fields.');
      $status.empty().append($msg);
    }
  });

  // Clear button: reset and clear highlights
  $('#clear').on('click', function () {
    $form[0].reset();
    clearInvalid($name); clearInvalid($email); clearInvalid($password);
    $status.empty();
  });

  // Set year
  $('#year').text(new Date().getFullYear());
});
