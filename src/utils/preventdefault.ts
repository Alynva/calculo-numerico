document.querySelectorAll("data-form-preventdefault")
	.forEach(form => form
		.addEventListener("submit", evt => evt.preventDefault()))
