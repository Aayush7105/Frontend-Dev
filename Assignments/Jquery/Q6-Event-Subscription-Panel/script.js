/* Q6 — Event Subscription Panel
 * - Subscribe -> enable notifications (updates UI class)
 * - Unsubscribe -> disable notifications
 * - Dynamically add new subscription topics -> attach .on click events via event delegation
 * - Remove specific subscription -> detach and remove DOM element
 * - Show success message -> dynamically insert a message into DOM on action
 */

$(function () {
  const $topics = $('#topics');
  const $messageArea = $('#message-area');

  // Helper to show temporary success message
  function showMessage(text) {
    const $msg = $('<div class="message"></div>').text(text);
    $messageArea.prepend($msg);
    setTimeout(() => { $msg.fadeOut(400, function() { $(this).remove(); }); }, 3000);
  }

  // Event delegation for subscribe/unsubscribe button clicks inside topics list
  $topics.on('click', '.sub-btn', function (e) {
    const $btn = $(this);
    const $li = $btn.closest('.topic');

    // Toggle subscribe state
    if ($btn.text() === 'Subscribe') {
      $btn.text('Unsubscribe');
      $li.addClass('subscribed');
      showMessage('Subscribed to ' + $li.attr('data-topic'));
    } else {
      $btn.text('Subscribe');
      $li.removeClass('subscribed');
      showMessage('Unsubscribed from ' + $li.attr('data-topic'));
    }
  });

  // Remove topic — will use .off() semantics to clean up if necessary (not strictly required, but demonstrated)
  $topics.on('click', '.remove-btn', function (e) {
    const $li = $(this).closest('.topic');
    const name = $li.attr('data-topic');

    // If the topic had event-attachers bound specifically (not in our case), we'd call $li.off() before removing
    $li.fadeOut(200, function() { $(this).remove(); });
    showMessage('Removed topic ' + name);
  });

  // Subscribe all topics — uses event trigger for demonstration
  $('#subscribe-all').on('click', function () {
    $topics.find('.sub-btn').each(function () { 
      const $b = $(this);
      if ($b.text() === 'Subscribe') $b.trigger('click');
    });
  });

  // Unsubscribe all topics
  $('#unsubscribe-all').on('click', function () {
    $topics.find('.sub-btn').each(function () { 
      const $b = $(this);
      if ($b.text() === 'Unsubscribe') $b.trigger('click');
    });
  });

  // Add new topic dynamically — uses event delegation for subscribe/remove to work for new items
  $('#add-topic').on('click', function () {
    const val = $('#new-topic').val().trim();
    if (!val) {
      showMessage('Please enter a topic name.');
      return;
    }
    const sanitized = $('<div/>').text(val).html();
    const $li = $(`<li class="topic" data-topic="${sanitized}">${sanitized} <button class="sub-btn">Subscribe</button> <button class="remove-btn">Remove</button></li>`);
    $topics.append($li);
    $('#new-topic').val('');
    showMessage('Added topic ' + sanitized);
  });

  // Demonstration of detach/off: Remove click handlers from specific topic (not typical in this pattern, but included for completeness)
  // We'll provide a helper to detach click handlers of a given topic name via data attribute
  function detachTopicHandlers(topicName) {
    const $li = $topics.find(`[data-topic="${topicName}"]`);
    // detaching delegated handlers from list doesn't remove delegation; here we detach any directly bound events on the item
    $li.off('click');
    showMessage('Detached handlers from ' + topicName);
  }

  // Expose detach example via console (so maintainers can run detachTopicHandlers('news'))
  window.__detachTopicHandlers = detachTopicHandlers;

  // Set year
  $('#year').text(new Date().getFullYear());
});
