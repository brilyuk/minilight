import Swiper from "swiper/bundle";

const IntroBox = () => {
	const block = document.querySelectorAll(".intro-box");
	if (!block) {
		return;
	}

	block.forEach((item) => {
		let swiper = null;
		const thumbs = Array.from(item.querySelectorAll(".intro-box__thumbs-item"));
		const arrowPrev = item.querySelector(".intro-box__slider-navigation-button_prev");
		const arrowNext = item.querySelector(".intro-box__slider-navigation-button_next");

		thumbs[0].classList.add("active");

		swiper = new Swiper(item.querySelector(".intro-box__slider"), {
			loop: true,
			slidesPerView: 1,
			navigation: {
				nextEl: arrowNext,
				prevEl: arrowPrev
			},
			on: {
				slideChangeTransitionStart(s) {
					thumbs.forEach((el) => {
						el.classList.remove("active");
					});
					thumbs[swiper.realIndex].classList.add("active");
				}
			}
		});
		thumbs.forEach((el, index) => {
			el.addEventListener("click", (e) => {
				swiper.slideToLoop(index);
			});
		});
	});
};

export default IntroBox;
