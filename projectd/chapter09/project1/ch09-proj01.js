
window.onload = function () {
  const video = document.querySelector("#vidPlayer");
  const playButton = document.querySelector("#play");
  const stopButton = document.querySelector("#stop");
  const skipButtons = document.querySelectorAll("[data-skip]");
  const volumeSlider = document.querySelector("#volume");
  const progress = document.querySelector("#progress");
  const progressFilled = document.querySelector("#progressFilled");
  const nextButton = document.querySelector("#next");
  const prevButton = document.querySelector("#prev");
  const currentTimeDisplay = document.querySelector("#currentTime");
  const remainingTimeDisplay = document.querySelector("#remainingTime");

  const videoList = [
    { src: "videos/Nature-8399.mp4", poster: "images/Nature-8399.jpg" },
    { src: "videos/River-655.mp4", poster: "images/River-655.jpg" },
    { src: "videos/Waterfall-941.mp4", poster: "images/Waterfall-941.jpg" },
    { src: "videos/Wave-2737.mp4", poster: "images/Wave-2737.jpg" }
  ];
  let currentIndex = 0;

  function loadVideo(index) {
    if (index >= 0 && index < videoList.length) {
      video.pause();
      video.src = videoList[index].src;
      video.setAttribute("poster", videoList[index].poster);
      playButton.textContent = "⯈";
      video.load();
    }
  }

  function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60).toString().padStart(2, "0");
    return `${min}:${sec}`;
  }

  // Toggle Play/Pause and icon
  playButton.addEventListener("click", function () {
    if (video.paused || video.ended) {
      video.removeAttribute("poster");
      video.play();
    } else {
      video.pause();
    }
  });

  // Update play button icon based on playback state
  video.addEventListener("play", function () {
    playButton.textContent = "❚❚";
  });

  video.addEventListener("pause", function () {
    playButton.textContent = "⯈";
  });

  stopButton.addEventListener("click", function () {
    video.pause();
    video.currentTime = 0;
  });

  skipButtons.forEach(function (Button) {
    Button.addEventListener("click", function () {
      video.currentTime += parseFloat(this.dataset.skip);
    });
  });

  volumeSlider.addEventListener("input", function () {
    video.volume = parseFloat(this.value);
  });

  video.addEventListener("timeupdate", function () {
    const percent = (video.currentTime / video.duration) * 100;
    progressFilled.style.width = percent + "%";
    currentTimeDisplay.textContent = formatTime(video.currentTime);
    remainingTimeDisplay.textContent = formatTime(video.duration - video.currentTime);
  });

  progress.addEventListener("click", function (e) {
    const width = progress.offsetWidth;
    const offsetX = e.offsetX;
    video.currentTime = (offsetX / width) * video.duration;
  });

  nextButton.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % videoList.length;
    loadVideo(currentIndex);
  });

  prevButton.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + videoList.length) % videoList.length;
    loadVideo(currentIndex);
  });

  loadVideo(currentIndex);
};
