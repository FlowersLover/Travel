"uses strict"
const reviewsSwiper = document.querySelector('.swiper-reviews');

if (reviewsSwiper) {
	const swiper = new Swiper('.swiper-reviews', {
		// Optional parameters
		spaceBetween: 30,
		autoHeight: true,
		loop: true,
		autoplay: {
			delay: 1000,
		},
		speed: 2000,
		navigation: {
			nextEl: '.rewiev-swiper__next',
			prevEl: '.rewiev-swiper__prev'
		},


	});
}

$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
	});
});