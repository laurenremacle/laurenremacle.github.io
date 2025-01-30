//https://archive.org/details/Telephone_201603
document.addEventListener("DOMContentLoaded", () => {
	const music = document.getElementById("music");
	const dancer = document.getElementById("dancer");
	const startButton = document.getElementById("startButton");

	let isPlaying = false;
	let audioContext = null;
	let analyzer = null;
	let startTime = 0;

	function initAudio() {
		// Initialize AudioContext and Analyser only once
		if (!audioContext) {
			audioContext = new (window.AudioContext || window.webkitAudioContext)();
			analyzer = audioContext.createAnalyser();
			analyzer.fftSize = 256;

			// Create a MediaElementSource and connect to analyser and destination
			const source = audioContext.createMediaElementSource(music);
			source.connect(analyzer);
			analyzer.connect(audioContext.destination);

			console.log("AudioContext and Analyzer initialized.");
		}
	}

	function animate() {
		if (!isPlaying) return;

		requestAnimationFrame(animate);
		const bufferLength = analyzer.frequencyBinCount;
		const dataArray = new Uint8Array(bufferLength);
		analyzer.getByteFrequencyData(dataArray);

		const average = dataArray.reduce((a, b) => a + b) / bufferLength;

		// Calculate time elapsed since start
		const currentTime = (Date.now() - startTime) / 1000;

		// Gradually increase animation speed over 4 seconds
		let speedMultiplier = Math.min(currentTime / 4, 1);

		// Base animation speed adjusted by music intensity and time
		const baseSpeed = 4 - 3 * speedMultiplier;
		const speed = baseSpeed - average / 512;

		dancer.style.animationDuration = speed + "s";

		// Adjust limb movement speed
		const limbSpeed = 1 - speedMultiplier * 0.5 - average / 1024;
		document
			.querySelectorAll(
				".dancing #leftArm, .dancing #rightArm, .dancing #leftLeg, .dancing #rightLeg"
			)
			.forEach((limb) => {
				limb.style.animationDuration = limbSpeed + "s";
			});

		// Adjust head bob speed
		document.querySelector(".dancing .head").style.animationDuration =
			limbSpeed * 1.2 + "s";

		// Adjust glow intensity based on music
		const glowIntensity = 5 + (average / 256) * 15;
		dancer.style.filter = `drop-shadow(0 0 ${glowIntensity}px #fff)`;
	}

	startButton.addEventListener("click", () => {
		console.log("Start button clicked");
		if (!audioContext) {
			console.log("Initializing audio context...");
			initAudio();
		}

		if (!isPlaying) {
			if (audioContext.state === "suspended") {
				console.log("Resuming audio context...");
				audioContext.resume();
			}
			startTime = Date.now();
			music
				.play()
				.then(() => {
					console.log("Music started playing!");
				})
				.catch((err) => {
					console.error("Error playing music:", err);
				});
			dancer.classList.add("dancing");
			startButton.classList.add("playing");
			startButton.textContent = "Stop Dancing";
			isPlaying = true;
			animate();
		} else {
			console.log("Pausing music...");
			music.pause();
			console.log("Music is paused!");
			music.currentTime = 0;
			dancer.classList.remove("dancing");
			startButton.classList.remove("playing");
			startButton.textContent = "Start Dancing!";
			isPlaying = false;
		}
	});
});