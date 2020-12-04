const startingDiv = document.getElementById("starting-div");
const somosree = document.getElementById("asmita");
const particle = document.getElementById("particle-js");
const audio = document.getElementById("audio");
const explosion = document.getElementById("explosion");
const end = document.getElementById("end");

somosree.addEventListener("click", () => {
	anime({
		targets: "#starting-div",
		keyframes: [{ scale: 1.2 }, { scale: 0 }],
		duration: 800,
		easing: "easeInOutQuad"
	});
	setTimeout(() => {
		startingDiv.style.display = "none";
		particle.style.display = "block";
		particlesJS.load("particle-js", "../assets/particle.json");
		setTimeout(() => {
			particle.style.transform = "translateY(0)";
			audio.play();
		}, 500);
	}, 1200);

	setTimeout(() => {
		anime({
			targets: "#harry",
			translateX: 2000,
			duration: 3000,
			easing: "easeInOutQuad"
		});
	}, 8000);

	setTimeout(() => {
		anime({
			targets: "#harry",
			scaleX: -1,
			duration: 500,
			easing: "easeInOutQuad"
		});
	}, 11000);

	document.getElementById("first").style.display = "block";
	setTimeout(() => {
		anime({
			targets: "#harry",
			translateX: 400,
			duration: 3000,
			easing: "easeInOutQuad"
		});
		anime({
			targets: "#first",
			opacity: 1,
			duration: 1000,
			easing: "easeInOutQuad"
		});
	}, 12000);

	document.getElementById("second").style.display = "block";
	setTimeout(() => {
		anime({
			targets: "#harry",
			translateX: -1000,
			translateY: -1000,
			duration: 2000,
			easing: "easeInOutQuad"
		});
		anime({
			targets: "#first",
			opacity: 0,
			duration: 1000,
			easing: "easeInOutQuad"
		});
		anime({
			targets: "#second",
			opacity: 1,
			delay: 1000,
			duration: 1000,
			easing: "easeInOutQuad"
		});
	}, 18000);

	setTimeout(() => {
		anime({
			targets: "#harry",
			scaleX: 1,
			duration: 500,
			easing: "easeInOutQuad"
		});
	}, 20000);

	setTimeout(() => {
		anime({
			targets: "#harry",
			translateX: 1000,
			translateY: 0,
			duration: 2000,
			easing: "easeInOutQuad"
		});
	}, 21000);

	document.getElementById("third").style.display = "block";
	setTimeout(() => {
		anime({
			targets: "#second",
			opacity: 0,
			duration: 1000,
			easing: "easeInOutQuad"
		});
		anime({
			targets: "#third",
			opacity: 1,
			delay: 1000,
			duration: 1000,
			easing: "easeInOutQuad"
		});
	}, 27000);

	setTimeout(() => {
		anime({
			targets: "#harry",
			translateX: 1500,
			translateY: 1000,
			duration: 2000,
			easing: "easeInOutQuad"
		});
	}, 28000);

	setTimeout(() => {
		anime({
			targets: "#harry",
			scaleX: -1,
			duration: 500,
			easing: "easeInOutQuad"
		});
	}, 30000);

	setTimeout(() => {
		anime({
			targets: "#harry",
			translateX: 400,
			translateY: 0,
			duration: 3000,
			easing: "easeInOutQuad"
		});
	}, 31000);

	document.getElementById("fourth").style.display = "block";
	setTimeout(() => {
		anime({
			targets: "#harry",
			translateX: -1000,
			translateY: -1000,
			duration: 2000,
			easing: "easeInOutQuad"
		});
		anime({
			targets: "#third",
			opacity: 0,
			duration: 1000,
			easing: "easeInOutQuad"
		});
		anime({
			targets: "#fourth",
			opacity: 1,
			delay: 1000,
			duration: 1000,
			easing: "easeInOutQuad"
		});
	}, 32000);

	setTimeout(() => {
		anime({
			targets: "#harry",
			scaleX: 1,
			duration: 500,
			easing: "easeInOutQuad"
		});
	}, 34000);

	setTimeout(() => {
		anime({
			targets: "#harry",
			translateX: 1000,
			translateY: 0,
			duration: 2000,
			easing: "easeInOutQuad"
		});
	}, 35000);

	document.getElementById("fifth").style.display = "block";
	setTimeout(() => {
		anime({
			targets: "#fourth",
			opacity: 0,
			duration: 1000,
			easing: "easeInOutQuad"
		});
		anime({
			targets: "#fifth",
			opacity: 1,
			delay: 1000,
			duration: 1000,
			easing: "easeInOutQuad"
		});
	}, 36000);

	setTimeout(() => {
		anime({
			targets: "#harry",
			translateX: 1500,
			translateY: 1000,
			duration: 2000,
			easing: "easeInOutQuad"
		});
	}, 37000);

	setTimeout(() => {
		anime({
			targets: "#harry",
			scaleX: -1,
			duration: 500,
			easing: "easeInOutQuad"
		});
	}, 39000);

	setTimeout(() => {
		anime({
			targets: "#harry",
			translateX: 400,
			translateY: 0,
			duration: 3000,
			easing: "easeInOutQuad"
		});
	}, 40000);

	setTimeout(() => {
		anime({
			targets: "#harry",
			translateX: -1000,
			translateY: 1000,
			duration: 3000,
			easing: "easeInOutQuad"
		});
	}, 41000);

	setTimeout(() => {
		anime({
			targets: "#fifth",
			opacity: 0,
			duration: 1000,
			easing: "easeInOutQuad"
		});
	}, 45000);

	setTimeout(() => {
		anime({
			targets: "#flower-l",
			translateY: -210,
			duration: 1000,
			easing: "easeInOutQuad"
		});
		anime({
			targets: "#flower-r",
			translateY: -210,
			duration: 1000,
			easing: "easeInOutQuad"
		});
	}, 46000);

	document.getElementById("seventh").style.display = "block";
	setTimeout(() => {
		confetti.start();
		explosion.play();
		anime({
			targets: "#seventh",
			opacity: 1,
			duration: 1000,
			easing: "easeInOutQuad"
		});
		anime({
			targets: "#flower-l",
			translateX: 210,
			duration: 1000,
			easing: "easeInOutQuad"
		});
		anime({
			targets: "#flower-r",
			translateX: -210,
			duration: 1000,
			easing: "easeInOutQuad"
		});
		anime({
			targets: "#cake",
			bottom: 0,
			duration: 2000,
			easing: "easeInOutQuad"
		});
	}, 48000);

	setTimeout(() => {
		end.style.display = "block";
		anime({
			targets: "#end",
			translateX: "-50%",
			scale: 1,
			duration: 1000,
			easing: "easeInOutQuad"
		});
	}, 48000);
});

end.addEventListener("click", () => {
	location.reload();
});
