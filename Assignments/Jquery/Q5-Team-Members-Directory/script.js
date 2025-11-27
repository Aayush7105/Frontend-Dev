/* Q5 — Team Members Directory jQuery
 * 1. Click a manager -> highlight direct reports
 * 2. Hover an employee -> show contact info using .next() or finding a sibling
 * 3. Click a department -> change background of all members in that department using .children()
 * 4. Select a random employee -> highlight sibling employees
 * 5. Collapse/expand team using .parent() and .find()
 */

$(function () {
  // Click manager: highlight direct reports
  $('.manager').on('click', function () {
    const $manager = $(this);
    // Clear previous highlights
    $('.employee').removeClass('highlight');

    // The direct reports are inside .reports > .employee
    $manager.find('.employee').addClass('highlight');
  });

  // Hover on employee: show contact info — using next() is tricky since contact is inside span; we reference .find or .children
  $('.employee').on('mouseenter', function () {
    $(this).children('.contact').show();
  }).on('mouseleave', function () {
    $(this).children('.contact').hide();
  });

  // Click a department header: change background of all members in that department
  $('.dept-name').on('click', function (e) {
    // prevent toggling collapse; click on the h3 toggles department as well
    const $dept = $(this).closest('.department');
    // highlight all employees and managers in this department
    $dept.find('.manager, .employee').toggleClass('highlight');
  });

  // Toggle team collapse/expand — arrow button uses parent and find
  $('.toggle-team').on('click', function (e) {
    e.stopPropagation();
    const $btn = $(this);
    const $dept = $btn.closest('.department');
    const $reports = $dept.find('.reports');
    $reports.slideToggle(220);
    // rotate arrow visually
    $btn.text($btn.text() === '▼' ? '▲' : '▼');
  });

  // Random employee: highlight sibling employees (same manager)
  $('#random-employee').on('click', function () {
    // remove previous sibling-highlights
    $('.sibling-highlight').removeClass('sibling-highlight');

    // select a random employee from those visible
    const $allEmployees = $('.employee');
    if (!$allEmployees.length) return;
    const idx = Math.floor(Math.random() * $allEmployees.length);
    const $selected = $allEmployees.eq(idx);

    // siblings are other .employee objects within the same .reports parent
    const $siblings = $selected.parent().children('.employee');
    $siblings.addClass('sibling-highlight');
  });

  // Click a manager to expand/collapse their reports using parent() and find()
  $('.manager').on('dblclick', function () {
    const $mgr = $(this);
    // find the parent .department or .team-list and then find .reports to toggle
    const $reports = $mgr.find('.reports');
    $reports.slideToggle(200);
  });

  // Accessibility: allow toggling with enter on manager or department
  $('.manager, .dept-name').attr('tabindex', 0).on('keydown', function (e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
      $(this).trigger('click');
    }
  });

  $('#collapse-all').on('click', function () { $('.reports').slideUp(180); $('.toggle-team').text('▲'); });
  $('#expand-all').on('click', function () { $('.reports').slideDown(180); $('.toggle-team').text('▼'); });

  // Set year
  $('#year').text(new Date().getFullYear());
});
