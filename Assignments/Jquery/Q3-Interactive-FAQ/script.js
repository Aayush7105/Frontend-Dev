/* Q3 Interactive FAQ — jQuery logic
 * 1. Click question: toggle its .answer visibility
 * 2. Hover question: change color
 * 3. Double-click question: collapse all answers
 * 4. Focus on answer input: highlight parent .question
 * 5. Blur on input: reset background color
 */

$(function () {
  const $questions = $('.question');

  // Toggle answer on click
  $questions.on('click', function () {
    const $q = $(this);
    $q.next('.answer').slideToggle(180);
  });

  // Hover — change question color using class
  $questions.on('mouseenter', function () { $(this).addClass('hovered'); });
  $questions.on('mouseleave', function () { $(this).removeClass('hovered'); });

  // Double-click — collapse all answers
  $questions.on('dblclick', function () {
    $('.answer').slideUp(180);
  });

  // Focus/blur on input inside answer: highlight parent question
  $('.answer input').on('focus', function () {
    const $parentQ = $(this).closest('.answer').prev('.question');
    $parentQ.addClass('focused');
  }).on('blur', function () {
    const $parentQ = $(this).closest('.answer').prev('.question');
    $parentQ.removeClass('focused');
  });

  // Accessibility: Allow toggling with Enter/Space when focusing question
  $questions.on('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ' || e.keyCode === 32 || e.keyCode === 13) {
      e.preventDefault();
      $(this).trigger('click');
    }
  });

  // Set year
  $('#year').text(new Date().getFullYear());
});
