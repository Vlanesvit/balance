function marquee() {
	const marquees = document.querySelectorAll('.marquee');

	marquees.forEach(marquee => {
		const list = marquee.querySelector('ul');
		const items = list.querySelectorAll('ul li');

		let scrollAmount = 0; // Переменная для отслеживания текущего смещения
		const speed = 1; // Скорость прокрутки бегущей строки

		// Клонируем элементы для создания бесшовного эффекта
		for (let i = 0; i < 5; i++) {
			items.forEach(item => {
				const clone = item.cloneNode(true);
				list.appendChild(clone);
			});
		}

		function scrollMarquee() {
			switch (true) {
				case marquee.dataset.direction === "left":
					scrollAmount -= speed;

					const firstItem = list.firstElementChild;
					const firstItemWidth = firstItem.getBoundingClientRect().width;

					list.style.transform = `translateX(${scrollAmount}px)`;

					if (firstItem.getBoundingClientRect().right <= 0) {
						list.append(firstItem); // Перемещаем первый элемент в конец списка

						// Пересчитываем смещение, чтобы сделать переход плавным
						scrollAmount += firstItemWidth + parseFloat(getComputedStyle(firstItem).marginLeft);
						list.style.transform = `translateX(${scrollAmount}px)`;
					}
					break;

				case marquee.dataset.direction === "right":
					scrollAmount += speed;

					const lastItem = list.lastElementChild;
					const lastItemWidth = lastItem.getBoundingClientRect().width;

					list.style.transform = `translateX(${scrollAmount}px)`;

					if (lastItem.getBoundingClientRect().left >= window.innerWidth) {
						list.prepend(lastItem); // Перемещаем последний элемент в начало списка

						// Пересчитываем смещение, чтобы сделать переход плавным
						scrollAmount -= lastItemWidth + parseFloat(getComputedStyle(lastItem).marginRight);
						list.style.transform = `translateX(${scrollAmount}px)`;
					}
					break;

				default:
			}

			requestAnimationFrame(scrollMarquee); // Рекурсивно вызываем функцию для плавной анимации
		}

		scrollMarquee();
	});
}
marquee()
