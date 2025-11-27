/* Q2 Product Highlight — jQuery logic
 * 1. Click on product -> highlight background (toggle)
 * 2. Hover over product -> show .details
 * 3. Clicking .favorite -> toggle "selected" class (and not trigger product click)
 * 4. [data-discount="true"] -> different styling via CSS
 * 5. If data-instock="false" -> show alert when product clicked
 */

$(function () {
  const $cards = $('.product-card');

  // Add class to out-of-stock ones for visual hint
  $cards.each(function () {
    const $this = $(this);
    if ($this.attr('data-instock') === 'false') {
      $this.addClass('out-of-stock');
    }
  });

  // Click on a product to highlight it; if out-of-stock -> show alert instead
  $cards.on('click', function () {
    const $this = $(this);
    const instock = $this.attr('data-instock');

    if (instock === 'false') {
      alert('Sorry — this product is currently out of stock.');
      return; // do not toggle highlight
    }

    // Remove highlight from others, add to this
    $cards.removeClass('highlight');
    $this.toggleClass('highlight');
  });

  // Show details on hover
  $cards.on('mouseenter', function () {
    $(this).find('.details').stop(true, true).slideDown(200);
  }).on('mouseleave', function () {
    $(this).find('.details').stop(true, true).slideUp(200);
  });

  // Favorite button: toggle selected class and stop propagation so product click won't run
  $cards.find('.favorite').on('click', function (e) {
    e.stopPropagation();
    const $btn = $(this);
    $btn.toggleClass('selected');
    // Toggle star character for visual feedback
    if ($btn.hasClass('selected')) {
      $btn.text('★');
    } else {
      $btn.text('☆');
    }
  });

  // Allow keyboard focusing and toggling with Enter key for accessibility
  $cards.attr('tabindex', 0);
  $cards.on('keydown', function (e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
      $(this).trigger('click');
    }
  });

  // Set year
  $('#year').text(new Date().getFullYear());
});
