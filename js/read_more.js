'use strict';

/// Vairables
const road_stories1 = document.querySelector('.road_stories-p1');
const read_more1 = document.querySelector('.read-more1');
const road_stories2 = document.querySelector('.road_stories-p2');
const read_more2 = document.querySelector('.read-more2');
const road_stories3 = document.querySelector('.road_stories-p3');
const read_more3 = document.querySelector('.read-more3');
const road_stories4 = document.querySelector('.road_stories-p4');
const read_more4 = document.querySelector('.read-more4');

///////////////////////////////////////
// Read more and less road stories
function read_expend_and_limit(read_more, road_stories) {
  read_more.addEventListener('click', function (e) {
    if (read_more.textContent === 'Read More...') {
      // Replace the read more in read less
      read_more.textContent = 'Read Less...';
      // Expend the text
      road_stories.style['-webkit-line-clamp'] = 100;
    } else {
      // Replace the read less in read more
      read_more.textContent = 'Read More...';
      // Limit the text
      road_stories.style['-webkit-line-clamp'] = 8;
    }
  });
}

read_expend_and_limit(read_more1, road_stories1);
read_expend_and_limit(read_more2, road_stories2);
read_expend_and_limit(read_more3, road_stories3);
read_expend_and_limit(read_more4, road_stories4);
