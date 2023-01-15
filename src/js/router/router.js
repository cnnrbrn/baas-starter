import routes from "./routes.js";
import * as handlers from "../handlers/index.js";

export default function router() {
	window.addEventListener("popstate", handleRouteChange);
	window.route = route;
	handleRouteChange();
	handleNavLinks();
}

export const navigate = (path, state = {}) => {
	window.history.pushState(state, "", path);
	handleRouteChange();
};

const route = (event) => {
	event = event || window.event;
	event.preventDefault();
	window.history.pushState({}, "", event.target.href);
	handleRouteChange();
};

const handleRouteChange = async () => {
	const path = window.location.pathname;
	const route = routes[path] || routes[404];
	await renderTemplate(route);

	switch (path) {
		case "/register":
			handlers.handleRegisterForm();
			return;
	}
};

const handleNavLinks = () => {
	document.addEventListener("click", (event) => {
		if (!event.target.matches("a")) {
			return;
		}
		event.preventDefault();
		route();
	});
};

const renderTemplate = async (route) => {
	const html = await fetch(route.template).then((data) => data.text());
	document.querySelector("#app").innerHTML = html;
	document.title = route.title;
};
