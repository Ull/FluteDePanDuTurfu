// document.getElementById("sol-button").addEventListener("click", play_sol);
// document.getElementById("la-button").addEventListener("click", play_la);

// var video = document.getElementById("video");
// var source = document.createElement('source');
// source.setAttribute('src', 'videos/01_Sol.mp4');

// video.appendChild(source);

// function play_sol() {
//     source.setAttribute('src', 'videos/01_Sol.mp4');
//     video.load();
//     video.play();
// }

// function play_la() {
//     source.setAttribute('src', 'videos/02_La.mp4');
//     video.load();
//     video.play();
// }

// document.getElementById("test-button").addEventListener("mousedown", test1);
// document.getElementById("test-button").addEventListener("mouseup", test2);

// var videoTest = document.getElementById("video-test");
// videoTest.style.display = "none";
// function test1() {
//     videoTest.style.display = "inline-block";
//     videoTest.currentTime = 0;
//     videoTest.play();

// }
// function test2() {
//     videoTest.style.display = "none";
//     videoTest.pause();

// }

var videos = [
  '01_Sol.mp4',
  '02_La.mp4',
  '03_Si.mp4',
  '04_Do.mp4',
  '05_Re.mp4',
  '06_Mi.mp4',
  '07_Fa.mp4',
  '08_Sol.mp4',
  '09_La.mp4',
  '10_Si.mp4',
  '11_Do.mp4',
  '12_Re.mp4',
  '13_Mi.mp4'
]

var keys = [
  'KeyA',
  'KeyS',
  'KeyD',
  'KeyF',
  'KeyG',
  'KeyH',
  'KeyJ',
  'KeyK',
  'KeyL',
  'Semicolon',
  'Quote',
  'Backslash',
  'BracketRight',
]

var videosBlock = document.getElementById('videos-block')
var buttonsBlock = document.getElementById('buttons-block')

var videoPlayers = []
var buttons = []

videos.forEach(videoFile => {
  var video = document.createElement('video')
  var source = document.createElement('source')
  source.setAttribute('src', 'videos/' + videoFile)
  video.setAttribute('width', '120')
  video.appendChild(source)
  videosBlock.appendChild(video)
  videoPlayers.push(video)
  video.style.display = 'none'

  var button = document.createElement('button')
  button.innerHTML = videoFile
  buttonsBlock.appendChild(button)

  button.addEventListener('mousedown', function () {
    video.style.display = 'inline-block'
    video.currentTime = 0
    video.play()
  })
  button.addEventListener('mouseup', function () {
    video.style.display = 'none'
    video.pause()
  })
  buttons.push(button)
})

document.addEventListener('keypress', keypressed)
document.addEventListener('keyup', keyupped)

function keypressed (e) {
//   console.log(e.code)

//   if (e.code == 'KeyQ') {
//     buttons[0].dispatchEvent(new Event('mousedown'))
//   }
//   if (e.code == 'KeyW') {
//     buttons[1].dispatchEvent(new Event('mousedown'))
//   }

  index = keys.indexOf(e.code)
  console.log(index)
  if (index !== -1) buttons[index].dispatchEvent(new Event('mousedown'))
}

function keyupped (e) {
  //   console.log(e.code)
  //   console.log(e)

  index = keys.indexOf(e.code)
  if (index !== -1) buttons[index].dispatchEvent(new Event('mouseup'))

//   if (e.code == 'KeyQ') {
//     buttons[0].dispatchEvent(new Event('mouseup'))
//   }
//   if (e.code == 'KeyW') {
//     buttons[1].dispatchEvent(new Event('mouseup'))
//   }
}

var pressedKeys = []
// Prevent keypress to be fire infinilty
document.onkeydown = function (e) {
  console.log(e.code)

  if (pressedKeys.includes(e.code)) {
    return false
  } else {
    pressedKeys.push(e.code)
  }
}

document.onkeyup = function (e) {
  var index = pressedKeys.indexOf(e.code)
  if (index !== -1) pressedKeys.splice(index, 1)
}
