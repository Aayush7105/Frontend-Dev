/* Q9 — Multi jQuery Widgets
 * Demonstrate running two versions of jQuery (jq1 and jq3) on the same page using noConflict
 * - jq1 handles carousel rotation and active widget highlight
 * - jq3 handles modals and tooltips
 */

// jq1 and jq3 are assigned in index.html via noConflict
(function(jq1, jq3){
  // Carousel with jq1
  jq1(function(){
    const $slides = jq1('#carousel .slide');
    let index = 0;
    let timer = null;

    function showSlide(i) {
      $slides.removeClass('active');
      $slides.eq(i % $slides.length).addClass('active');
    }

    showSlide(index);

    function nextSlide() { index = (index + 1) % $slides.length; showSlide(index); }
    function prevSlide() { index = (index - 1 + $slides.length) % $slides.length; showSlide(index); }

    jq1('#next').on('click', nextSlide);
    jq1('#prev').on('click', prevSlide);

    jq1('#start-carousel').on('click', function(){
      if (timer) return;
      timer = setInterval(nextSlide, 3000);
    });

    jq1('#stop-carousel').on('click', function(){ clearInterval(timer); timer = null; });

    // Highlight active widget when clicked (v1)
    jq1('#widgets .widget').on('click', function(){
      jq1('#widgets .widget').removeClass('active');
      jq1(this).addClass('active');
    });
  });

  // Modal and tooltips with jq3
  jq3(function(){
    const $modal = jq3('#modal');

    jq3('#open-modal').on('click', function(){
      $modal.attr('aria-hidden','false');
    });
    jq3('#close-modal').on('click', function(){
      $modal.attr('aria-hidden','true');
    });

    // simple tooltip implementation using jq3
    const $tooltip = jq3('<div class="tooltip" id="floating-tooltip"></div>').appendTo('body');
    jq3('.tip').on('mouseenter', function(e){
      const text = jq3(this).attr('data-tip');
      $tooltip.text(text).show();
      $tooltip.css({ left: e.pageX + 8, top: e.pageY + 8 });
    }).on('mousemove', function(e){
      $tooltip.css({ left: e.pageX + 8, top: e.pageY + 8 });
    }).on('mouseleave', function(){
      $tooltip.hide();
    });
  });

  // Expose both versions in the global scope for debugging
  window.jq1 = jq1;
  window.jq3 = jq3;
})(window.jq1 || window.jQuery, window.jq3 || window.jQuery);
