/* Q8 — Dynamic Blog Posts jQuery
 * 1. Add New Post -> append a new post to the list
 * 2. Prepend Featured Post -> add a post at the top
 * 3. Remove Last Post -> remove last element in the list
 * 4. Add tags to posts -> use .before()/.after() for placement
 * 5. Highlight posts with specific keywords dynamically
 */

$(function() {
  const $posts = $('#posts');

  function createPost(title, body) {
    return $('<li class="post"><h3 class="title"></h3><p class="body"></p></li>').find('.title').text(title).end().find('.body').text(body).end();
  }

  // Append new post
  $('#add-post').on('click', function() {
    const title = $('#post-title').val().trim() || 'Untitled';
    const body = $('#post-body').val().trim() || '';
    const $new = $('<li class="post"><h3 class="title"></h3><p class="body"></p></li>');
    $new.find('.title').text(title).end().find('.body').text(body);
    $posts.append($new);
    // clear inputs
    $('#post-title').val('');
    $('#post-body').val('');
  });

  // Prepend featured post
  $('#prepend-post').on('click', function() {
    const title = $('#post-title').val().trim() || 'Featured: Untitled';
    const body = $('#post-body').val().trim() || '';
    const $new = $('<li class="post"><h3 class="title"></h3><p class="body"></p></li>');
    $new.find('.title').text(title).end().find('.body').text(body);
    $posts.prepend($new);
    $('#post-title').val('');
    $('#post-body').val('');
  });

  // Remove last post
  $('#remove-last').on('click', function() {
    $posts.find('.post').last().fadeOut(200, function() { $(this).remove(); });
  });

  // Add tag before/after a post — for demonstration we add tags to the first post
  $('#add-tag-before').on('click', function() {
    const tag = $('#tag-name').val().trim() || 'New';
    const $first = $posts.find('.post').first();
    $first.find('.title').before(`<span class="tag">${tag}</span>`);
  });

  $('#add-tag-after').on('click', function() {
    const tag = $('#tag-name').val().trim() || 'New';
    const $first = $posts.find('.post').first();
    $first.find('.title').after(`<span class="tag">${tag}</span>`);
  });

  // Highlight posts containing the keyword
  $('#apply-highlight').on('click', function() {
    const kw = $('#keyword').val().trim();
    if (!kw) return;
    $posts.find('.post').each(function() {
      const $p = $(this);
      if ($p.text().toLowerCase().indexOf(kw.toLowerCase()) !== -1) {
        $p.addClass('highlighted');
      }
    });
  });

  $('#clear-highlight').on('click', function() {
    $posts.find('.post').removeClass('highlighted');
    $('#keyword').val('');
  });

  // Set year
  $('#year').text(new Date().getFullYear());
});
