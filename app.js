const navSlide = () => {
	const burger = document.querySelector(".buttonToogle");
	const nav = document.querySelector(".navLinks");
	const navLink = document.querySelectorAll(".navLinks li");

	burger.addEventListener("click", () => {
		//toogle nav
		nav.classList.toggle("nav-active");
		//animation Links
		navLink.forEach((link, index) => {
			//console.log(index);
			if (link.style.animation) {
				link.style.animation = "";
			} else {
				link.style.animation = `navLinkFade 0.8s ease forwards ${
					index / 7 + 1.5
				}s`;
			}
			//console.log(index / 7);
		});

		//buttonToggle animation
		burger.classList.toggle("toggle");
	});
};

navSlide();
