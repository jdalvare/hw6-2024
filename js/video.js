var video;
var volume_span;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	console.log("auto play is set to " + video.autoplay);
	console.log("loop is set to " + video.loop);

});
// play button
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
})

    // Play
    document.getElementById('play').addEventListener('click', function() {
        video.play();
        updateVolumeInfo();
    });

    // Pause
    document.getElementById('pause').addEventListener('click', function() {
        video.pause();
    });

    // Slow Down
    document.getElementById('slower').addEventListener('click', function() {
        video.playbackRate *= 0.9;
        console.log(`New Speed: ${video.playbackRate}`);
    });

    // Speed Up
    document.getElementById('faster').addEventListener('click', function() {
        video.playbackRate /= 0.9;
        console.log(`New Speed: ${video.playbackRate}`);
    });

    // Skip Ahead
    document.getElementById('skip').addEventListener('click', function() {
        video.currentTime += 10;
        if(video.currentTime >= video.duration) {
            video.currentTime = 0;
        }
        console.log(`Current Location: ${video.currentTime}`);
    });

    // Mute
    document.getElementById('mute').addEventListener('click', function() {
        video.muted = !video.muted;
        this.textContent = video.muted ? "Unmute" : "Mute";
    });

    // Volume
    document.getElementById('slider').addEventListener('input', function() {
        video.volume = this.value / 100;
        updateVolumeInfo();
    });

    // Apply Old School style
    document.getElementById('vintage').addEventListener('click', function() {
        video.classList.add('oldSchool');
    });

    // Remove Old School style
    document.getElementById('orig').addEventListener('click', function() {
        video.classList.remove('oldSchool');
    });

    // update volume information
    function updateVolumeInfo() {
        document.getElementById('volume').textContent = `${Math.round(video.volume * 100)}%`;
    }
// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// 	video.play();
// 	volume_span.innerHTML = video.volume * 100 + "%";
// });

// // pause button
// document.querySelector("#pause").addEventListener("click", function() {
// 	console.log("Pause Video");
// 	video.pause();
// });

// // slow button
// document.querySelector("#slower").addEventListener("click", function () {
// 	video.playbackRate *= 0.9;
// 	console.log("Speed is " + video.playbackRate);
// })

// // fast button
// document.querySelector("#faster").addEventListener("click", function () {
// 	video.playbackRate = video.playbackRate * 10 / 9;
// 	console.log("Speed is " + video.playbackRate);
// })

// // skip ahead
// document.querySelector("#skip").addEventListener("click", function () {
// 	video.currentTime += 10;
// 	if (video.currentTime == video.duration) {
// 		video.currentTime = 0;
// 	}
// 	console.log("Video current time is "+video.currentTime)
// })

// // mute button
// document.querySelector("#mute").addEventListener("click", function () {
// 	video.muted = !video.muted;
// 	this.innerHTML = (video.muted ? "Unmute" : "Mute");
// })

// // Volume slider
// document.querySelector("#slider").addEventListener("input", function () {
// 	video.volume = this.value / 100;
// 	volume_span.innerHTML = video.volume * 100 + "%";
// 	console.log("Current volume: " + video.volume);
// })

// // Style old school
// document.querySelector("#vintage").addEventListener("click", function () {
// 	video.classList.add("oldSchool");
// })

// // Style original
// document.querySelector("#orig").addEventListener("click", function () {
// 	video.classList.remove("oldSchool");
// })