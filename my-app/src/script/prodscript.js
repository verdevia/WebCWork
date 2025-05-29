import $ from 'jquery';

export default function initProductAnimation() {
  $('.product-block').on('mouseenter', function () {
    $(this).addClass('animate');
  }).on('mouseleave', function () {
    $(this).removeClass('animate');
  });
}
