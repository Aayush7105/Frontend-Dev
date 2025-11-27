/* Q7 — Search Courses
 * - Search input filters courses in real-time using .keyup()
 * - Highlight matched text using .css() (and small highlight span where needed)
 * - Toggle visibility of courses not matching search
 * - Show count of matched courses dynamically
 * - Clear search -> reset list
 */

$(function() {
  const $courses = $('#courses .course');
  const $search = $('#search');
  const $matchCount = $('#match-count');

  function clearHighlights() {
    $courses.each(function() {
      const $el = $(this);
      // Reset HTML to original course title if we've wrapped matches before
      $el.html($el.text());
      $el.removeClass('highlight');
    });
  }

  function highlightMatch($el, query) {
    const text = $el.text();
    const regex = new RegExp('(' + query.replace(/[.*+?^${}()|[\\]\\]/g, '\\$&') + ')', 'ig');
    const highlighted = text.replace(regex, '<span class="matched">$1</span>');
    $el.html(highlighted);
    // Also change container style using .css() — requirement to utilize .css()
    $el.css('background-color', '#fff9c4');
  }

  // Real-time filtering
  $search.on('keyup', function () {
    const query = $(this).val().trim();
    let matches = 0;

    if (!query) {
      // Reset
      clearHighlights();
      $courses.show();
      $matchCount.text('');
      return;
    }

    $courses.each(function () {
      const $c = $(this);
      const text = $c.text();
      if (text.toLowerCase().indexOf(query.toLowerCase()) !== -1) {
        $c.show();
        highlightMatch($c, query);
        matches++;
      } else {
        $c.hide();
      }
    });

    $matchCount.text(matches + ' matched');
  });

  // Clear search
  $('#clear-search').on('click', function () {
    $search.val('');
    clearHighlights();
    $courses.show();
    $matchCount.text('');
  });

  // Set year
  $('#year').text(new Date().getFullYear());
});
