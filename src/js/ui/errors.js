import messages from "../constants/messages.js";

export function displayFormError(form, error) {
	const { code, message } = error;

	const errorMessage = messages.error[code] ?? message;

	const html = `<div class="p-4 mb-4 text-sm text-red-700 bg-red-100" role="alert">
									${errorMessage}
								</div>`;

	form.querySelector("#error").innerHTML = html;
}
