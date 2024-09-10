/*
Документация слайдера: https://swiperjs.com/
*/

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдов
	if (document.querySelector('.rs-support__slider')) {
		// Инициализация слайдера
		const sliderBlocks = document.querySelectorAll('.rs-support');

		sliderBlocks.forEach(sliderBlock => {
			const sliders = sliderBlock.querySelectorAll('.rs-support__slider');

			sliders.forEach(slider => {
				const arrowPrev = sliderBlock.querySelector('.rs-support__button-prev');
				const arrowNext = sliderBlock.querySelector('.rs-support__button-next');
				const pagination = sliderBlock.querySelector('.rs-support__pagination');

				// До этой ширины слайдер будет неактивным
				const breakpoint = window.matchMedia('(min-width: 991.98px)');

				let sliderSwiper;

				const breakpointChecker = function () {
					if (breakpoint.matches === true) {
						// Выключаем слайдер
						if (sliderSwiper !== undefined) sliderSwiper.destroy(true, true);
						return;
					} else if (breakpoint.matches === false) {
						// Включаем слайдер
						return enableSwiper();
					}
				};

				const enableSwiper = function () {
					sliderSwiper = new Swiper(slider, {
						// // Автопрокрутка
						// autoplay: {
						// 	// Пауза между прокруткой
						// 	delay: 10000,
						// 	// Закончить на последнем слайде
						// 	stopOnLastSlide: false,
						// 	// Отключить после ручного переключения
						// 	disableOnInteraction: false,
						// },

						// Обновить свайпер
						// при изменении элементов слайдера
						observer: true,
						// при изменении родительских элементов слайдера
						observeParents: true,
						// при изменении дочерних элементов слайдера
						observeSlideChildren: true,

						// Скорость смены слайдов
						speed: 500,

						// Включение/отключение
						// перетаскивание на ПК
						simulateTouch: true,
						allowTouchMove: true,
						// Чувствительность свайпа
						touchRadio: 1,
						// Угол срабатывания свайпа/перетаскивания
						touchAngle: 45,

						// Цикличность слайдера
						// loop: true,

						// Анимация переключения
						// effect: 'fade',

						// Курсор перетаскивания
						grabCursor: true,

						// Стрелки
						navigation: {
							prevEl: arrowPrev,
							nextEl: arrowNext,
						},

						// Пагинация
						pagination: {
							el: pagination,
							clickable: true,
						},

						// Брекпоинты (адаптив)
						breakpoints: {
							320: {
								slidesPerView: 1.1,
								spaceBetween: 16,
							},
							767.98: {
								slidesPerView: 2.2,
								spaceBetween: 24,
							},
						},
					});
				}

				breakpoint.addListener(breakpointChecker);
				breakpointChecker();
			});
		});
	}

	if (document.querySelector('.rs-help__slider')) {
		// Инициализация слайдера
		const sliderBlocks = document.querySelectorAll('.rs-help');

		sliderBlocks.forEach(sliderBlock => {
			const sliders = sliderBlock.querySelectorAll('.rs-help__slider');

			sliders.forEach(slider => {
				const arrowPrev = sliderBlock.querySelector('.rs-help__button-prev');
				const arrowNext = sliderBlock.querySelector('.rs-help__button-next');
				const pagination = sliderBlock.querySelector('.rs-help__pagination');

				// До этой ширины слайдер будет неактивным
				const breakpoint = window.matchMedia('(min-width: 991.98px)');

				let sliderSwiper;

				const breakpointChecker = function () {
					if (breakpoint.matches === true) {
						// Выключаем слайдер
						if (sliderSwiper !== undefined) sliderSwiper.destroy(true, true);
						return;
					} else if (breakpoint.matches === false) {
						// Включаем слайдер
						return enableSwiper();
					}
				};

				const enableSwiper = function () {
					sliderSwiper = new Swiper(slider, {
						// // Автопрокрутка
						// autoplay: {
						// 	// Пауза между прокруткой
						// 	delay: 10000,
						// 	// Закончить на последнем слайде
						// 	stopOnLastSlide: false,
						// 	// Отключить после ручного переключения
						// 	disableOnInteraction: false,
						// },

						// Обновить свайпер
						// при изменении элементов слайдера
						observer: true,
						// при изменении родительских элементов слайдера
						observeParents: true,
						// при изменении дочерних элементов слайдера
						observeSlideChildren: true,

						// Скорость смены слайдов
						speed: 500,

						// Включение/отключение
						// перетаскивание на ПК
						simulateTouch: true,
						allowTouchMove: true,
						// Чувствительность свайпа
						touchRadio: 1,
						// Угол срабатывания свайпа/перетаскивания
						touchAngle: 45,

						// Цикличность слайдера
						// loop: true,

						// Анимация переключения
						// effect: 'fade',

						// Курсор перетаскивания
						grabCursor: true,

						// Стрелки
						navigation: {
							prevEl: arrowPrev,
							nextEl: arrowNext,
						},

						// Пагинация
						pagination: {
							el: pagination,
							clickable: true,
						},

						// Брекпоинты (адаптив)
						breakpoints: {
							320: {
								slidesPerView: 1.1,
								spaceBetween: 16,
							},
							767.98: {
								slidesPerView: 2.2,
								spaceBetween: 24,
							},
						},
					});
				}

				breakpoint.addListener(breakpointChecker);
				breakpointChecker();
			});
		});
	}

	if (document.querySelector('.rs-news__slider')) {
		const sliderBlocks = document.querySelectorAll('.rs-news');
		sliderBlocks.forEach(sliderBlock => {
			const slider = sliderBlock.querySelector('.rs-news__slider');
			const pagination = sliderBlock.querySelector('.rs-news__pagination');
			const arrowNext = sliderBlock.querySelector('.rs-news__button-next');
			const arrowPrev = sliderBlock.querySelector('.rs-news__button-prev');

			const sliderSwiper = new Swiper(slider, {
				// // Автопрокрутка
				// autoplay: {
				// 	// Пауза между прокруткой
				// 	delay: 10000,
				// 	// Закончить на последнем слайде
				// 	stopOnLastSlide: false,
				// 	// Отключить после ручного переключения
				// 	disableOnInteraction: false,
				// },

				// Обновить свайпер
				// при изменении элементов слайдера
				observer: true,
				// при изменении родительских элементов слайдера
				observeParents: true,
				// при изменении дочерних элементов слайдера
				observeSlideChildren: true,

				// Скорость смены слайдов
				speed: 500,

				// Включение/отключение
				// перетаскивание на ПК
				simulateTouch: true,
				// Чувствительность свайпа
				touchRadio: 1,
				// Угол срабатывания свайпа/перетаскивания
				touchAngle: 45,

				// Цикличность слайдера
				// loop: true,

				// Анимация переключения
				// effect: 'fade',

				// Курсор
				grabCursor: true,

				// Пагинация
				pagination: {
					el: pagination,
					clickable: true,
					// dynamicBullets: true
				},

				// Стрелки
				navigation: {
					nextEl: arrowNext,
					prevEl: arrowPrev,
				},


				// Брекпоинты (адаптив)
				breakpoints: {
					320: {
						slidesPerView: 1.1,
						spaceBetween: 16,
					},
					767.98: {
						slidesPerView: 2,
						spaceBetween: 24,
					},
					1439.98: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
				},
			});
		});
	}

	if (document.querySelector('.rs-reviews__slider')) {
		const sliderBlocks = document.querySelectorAll('.rs-reviews');
		sliderBlocks.forEach(sliderBlock => {
			const slider = sliderBlock.querySelector('.rs-reviews__slider');
			const pagination = sliderBlock.querySelector('.rs-reviews__pagination');
			const arrowNext = sliderBlock.querySelector('.rs-reviews__button-next');
			const arrowPrev = sliderBlock.querySelector('.rs-reviews__button-prev');

			const sliderSwiper = new Swiper(slider, {
				// // Автопрокрутка
				// autoplay: {
				// 	// Пауза между прокруткой
				// 	delay: 10000,
				// 	// Закончить на последнем слайде
				// 	stopOnLastSlide: false,
				// 	// Отключить после ручного переключения
				// 	disableOnInteraction: false,
				// },

				// Обновить свайпер
				// при изменении элементов слайдера
				observer: true,
				// при изменении родительских элементов слайдера
				observeParents: true,
				// при изменении дочерних элементов слайдера
				observeSlideChildren: true,

				// Скорость смены слайдов
				speed: 500,

				// Включение/отключение
				// перетаскивание на ПК
				simulateTouch: true,
				// Чувствительность свайпа
				touchRadio: 1,
				// Угол срабатывания свайпа/перетаскивания
				touchAngle: 45,

				// Цикличность слайдера
				// loop: true,

				// Анимация переключения
				// effect: 'fade',

				// Курсор
				grabCursor: true,

				// Пагинация
				pagination: {
					el: pagination,
					clickable: true,
					// dynamicBullets: true
				},

				// Стрелки
				navigation: {
					nextEl: arrowNext,
					prevEl: arrowPrev,
				},


				// Брекпоинты (адаптив)
				breakpoints: {
					320: {
						slidesPerView: 1.1,
						spaceBetween: 16,
					},
					767.98: {
						slidesPerView: 2,
						spaceBetween: 24,
					},
					1439.98: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
				},
			});
		});
	}
}

// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	if (document.querySelector('.swiper')) {
		initSliders();
	}
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});