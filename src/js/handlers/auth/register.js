import { register } from "../../backend/auth.js";
import { navigate } from "../../router/router.js";
import { displayFormError } from "../../ui/errors.js";

export function handleRegisterForm() {
	const form = document.querySelector("#registerForm");
	if (!form) {
		return;
	}
	form.addEventListener("submit", submitRegisterForm);
}

async function submitRegisterForm(event) {
	event.preventDefault();
	const form = event.target;
	const data = new FormData(form);
	const email = data.get("email");
	const password = data.get("password");

	const { user, error } = await register(email, password);

	if (user) {
		return navigate("/admin");
	}

	displayFormError(form, error);
}
