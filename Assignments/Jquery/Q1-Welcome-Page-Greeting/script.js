/* script.js — Q1 Welcome Page Greeting
 * jQuery logic for:
 *  - Showing a personalized greeting on page load (morning/afternoon/evening)
 *  - Changing greeting to a motivational quote using a button
 *  - Toggling visibility of the welcome message
 *  - Showing an alert when the greeting is clicked
 */

$(document).ready(function () {
  const $greeting = $('#welcome-heading');
  const $submessage = $('#submessage');
  const $changeBtn = $('#change-greeting');
  const $toggleBtn = $('#toggle-welcome');
  const $resetBtn = $('#reset-greeting');
  const $quoteBtn = $('#show-quote');

  // Helper: return greeting based on hour
  function timeBasedGreeting() {
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 5 && hour < 12) return { title: 'Good Morning', subtitle: 'Have a great start to your day!' };
    if (hour >= 12 && hour < 17) return { title: 'Good Afternoon', subtitle: 'Hope your day is productive!' };
    return { title: 'Good Evening', subtitle: 'Relax and enjoy your evening!' };
  }

  // Display a personalized greeting on page load
  function showInitialGreeting() {
    const greeting = timeBasedGreeting();
    $greeting.text(greeting.title);
    $submessage.text(greeting.subtitle);
    // store the initial greeting in data for reset later
    $greeting.data('initialTitle', greeting.title);
    $submessage.data('initialSubtitle', greeting.subtitle);
    $greeting.data('isQuote', false);
  }

  // List of motivational quotes we can cycle through
  const motivationalQuotes = [
    'Believe you can and you’re halfway there.',
    'The best way to predict the future is to create it.',
    'Start where you are. Use what you have. Do what you can.',
    'Dream big and dare to fail.'
  ];

  // Change greeting to a random motivational quote (toggle back if pressed again)
  $changeBtn.on('click', function () {
    const isQuote = $greeting.data('isQuote');

    if (!isQuote) {
      // choose a random quote
      const q = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
      $greeting.text(q);
      $submessage.text('Motivation of the moment');
      $greeting.data('isQuote', true);
      $changeBtn.text('Revert Greeting');
    } else {
      // revert to time-based greeting
      showInitialGreeting();
      $changeBtn.text('Change Greeting');
    }
  });

  // Toggle visibility of the welcome message using another button
  $toggleBtn.on('click', function () {
    $('#welcome-section').toggle();
    const isVisible = $('#welcome-section').is(':visible');
    $toggleBtn.text(isVisible ? 'Hide Welcome' : 'Show Welcome');
  });

  // Reset greeting explicitly to initial time-based greeting
  $resetBtn.on('click', function () {
    showInitialGreeting();
    $changeBtn.text('Change Greeting');
  });

  // Show a special random quote when a separate button is clicked (non-toggle)
  $quoteBtn.on('click', function () {
    const q = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
    $greeting.text(q);
    $submessage.text('A fresh quote to inspire you');
    $greeting.data('isQuote', true);
    $changeBtn.text('Revert Greeting');
  });

  // Show an alert when the greeting is clicked (simple interaction)
  $greeting.on('click', function () {
    const text = $(this).text();
    alert('You clicked the greeting: "' + text + '"');
  });

  // Set the copyright year automatically
  $('#year').text(new Date().getFullYear());

  // Initialize greeting on page load
  showInitialGreeting();
});