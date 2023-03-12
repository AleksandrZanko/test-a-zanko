// form submit
const form = document.querySelector(".form");
const button = document.querySelector(".form__bottom-button");
const dataSection = document.querySelector(".data-section");
const dataContainer = document.querySelector(".data-section--form");
const successContainer = document.querySelector(".data-section--success");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	dataContainer.classList.add("hide");
	successContainer.classList.add("show");
	dataSection.classList.add("bg-none");
});

// form check 
const name = document.querySelector(".form__first-name");
const lastName = document.querySelector(".form__last-name");
const email = document.querySelector(".form__email");
const date = document.querySelector(".form__date-of-birth");
const passwordConfirm = document.querySelector(".form__confirm-password");
button.addEventListener("click", (e) => {
	e.preventDefault();
	if(name.value.length === 0 || lastName.value.length === 0 || email.value.length === 0 || date.value.length === 0 || password.value.length === 0 || passwordConfirm.value.length === 0) {
		button.classList.add('shake');
		setTimeout(() => {
			button.classList.remove('shake');
		}, 600);
	}
});

//password check
const password = document.querySelector(".form__password");

password.addEventListener("change", (e) => {
	value = e.target.value;
	const passTool = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,100}$/;
	if (value.match(passTool)) {
		password.classList.add("good-password");
	} else {
		alert(
			"Пароль должен содержать от 8 символов, заглавные и строчные буквы, а также цифры."
		);
		password.classList.add("error-password");
	}
});
