var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector("#polina button");

function vidFade() {
	vid.classList.add("stopfade");
}

vid.addEventListener('ended', function () {
	vid.pause();
	vidFade();
});


pauseButton.addEventListener("click", function () {
	vid.classList.toggle("stopfade");
	if (vid.paused) {
		vid.play();
		pauseButton.innerHTML = "Pause";
	} else {
		vid.pause();
		pauseButton.innerHTML = "Paused";
	}
})

