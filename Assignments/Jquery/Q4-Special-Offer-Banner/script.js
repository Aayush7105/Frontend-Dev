/* Q4 — Special Offer Banners jQuery
 * 1. Hide button -> hide specific banners
 * 2. Show button -> show hidden banners
 * 3. Slide Up/Down -> toggle banners using slideUp/slideDown
 * 4. Fade In/Fade Out -> show/hide banners gradually
 * 5. Auto-rotate banners every 5 seconds using fadeOut/fadeIn
 */

$(function () {
  const $banners = $('.banner');
  let rotateTimer = null;
  let rotateIndex = 0;

  // Click a banner to highlight it
  $banners.on('click', function () {
    $banners.removeClass('highlight');
    $(this).addClass('highlight');
  });

  // Hide the currently highlighted banner, or all if none highlighted
  $('#hide-current').on('click', function () {
    const $h = $('.banner.highlight');
    if ($h.length) {
      $h.addClass('hidden');
    } else {
      $banners.addClass('hidden');
    }
  });

  // Show hidden banners
  $('#show-current').on('click', function () {
    $banners.removeClass('hidden');
  });

  // Slide Up/Down toggle — target highlighted or all
  $('#slide-toggle').on('click', function () {
    const $h = $('.banner.highlight');
    if ($h.length) {
      $h.slideToggle(300);
    } else {
      $banners.slideToggle(300);
    }
  });

  // Fade In/Out toggle
  $('#fade-toggle').on('click', function () {
    const $h = $('.banner.highlight');
    if ($h.length) {
      if ($h.is(':visible')) $h.fadeOut(300); else $h.fadeIn(300);
    } else {
      // Toggle all banners visibility using fade
      if ($banners.is(':visible')) {
        $banners.fadeOut(300);
      } else {
        $banners.fadeIn(300);
      }
    }
  });

  // Auto-rotate through banners using fadeOut/fadeIn
  function startRotate() {
    stopRotate();
    rotateIndex = 0;
    rotateTimer = setInterval(function () {
      const $visible = $banners.filter(':visible');
      // If none visible, show them first
      if (!$visible.length) {
        $banners.fadeIn(200);
        return;
      }
      // fade out the currently highlighted or the banner at rotateIndex
      const $current = $banners.eq(rotateIndex % $banners.length);
      $current.fadeOut(400, function () {
        rotateIndex++;
        const $next = $banners.eq(rotateIndex % $banners.length);
        $next.fadeIn(400);
      });
    }, 5000); // every 5 seconds
  }

  function stopRotate() {
    if (rotateTimer) {
      clearInterval(rotateTimer);
      rotateTimer = null;
    }
  }

  $('#start-rotate').on('click', startRotate);
  $('#stop-rotate').on('click', stopRotate);

  // Clicking a banner sets it visible if hidden; helpful while rotating
  $banners.on('dblclick', function () {
    $(this).show();
  });

  // Set year
  $('#year').text(new Date().getFullYear());
});
