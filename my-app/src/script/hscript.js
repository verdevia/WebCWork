import $ from 'jquery';

export default function initHeaderAnimation() {
  $('.header').on('mouseenter', function () {
    $(this).addClass('animate');
  }).on('mouseleave', function () {
    $(this).removeClass('animate');
  });
}
