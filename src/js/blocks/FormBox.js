const FormBox = () => {
	const block = document.querySelectorAll(".form-box");
	if (!block) {
		return;
	}

	block.forEach((item) => {
		const form = item.querySelector(".form-box__form");
		const formButtonValidate = item.querySelector(".form-box__form-button_validate");
		const formButtonSubmit = item.querySelector(".form-box__form-button_submit");

		formButtonValidate.addEventListener("click", function () {
			form.setAttribute(
				"action",
				"https://script.google.com/macros/s/AKfycbwhJ_by7jMj9AJC96UAI5I3mvYgrMRCrL3N8MBpCiGzAhk9ayB5M0TrwBxwVofUJEITFA/exec"
			);
			form.classList.add("process");

			formButtonSubmit.click();
		});
	});
};

export default FormBox;
