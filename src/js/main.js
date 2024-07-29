import IntroBox from "./blocks/IntroBox";
import FormBox from "./blocks/FormBox";
import "./form-submission-handler.js";

const handleScrollLink = (e) => {
	e.preventDefault();
	const target = document.querySelector(e.target.getAttribute("href"));

	target.scrollIntoView({
		behavior: "smooth"
	});
};

document.querySelectorAll(".scroll-link").forEach((link) => {
	link.addEventListener("click", handleScrollLink);
});

IntroBox();
FormBox();
