var videosFiles = [
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

var keysCodes = [
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
  'BracketRight'
]

var keysFrench = [
  'Q',
  'S',
  'D',
  'F',
  'G',
  'H',
  'J',
  'K',
  'L',
  'M',
  'Ù',
  '*',
  '$'
]

var mainContainer = document.getElementById('main-container')

var buttons = []
var videos = []

videosFiles.forEach(function (videoFile, i) {
  var div = document.createElement('div')
  div.setAttribute('class', 'note')

  var video = document.createElement('video')
  var source = document.createElement('source')
  source.setAttribute('src', 'videos/' + videoFile)
  video.setAttribute('class', 'video')
  video.appendChild(source)
  div.appendChild(video)
  videos.push(video)

  var button = document.createElement('button')
  button.innerHTML =
    '<h1>' +
    videoFile.split('_')[1].split('.')[0] + // '01_Sol.mp4' -> 'Sol'
    '</h1><h2>' +
    keysFrench[i] + // Add the keyboard shortcut
    '</h2>'

  button.addEventListener('mousedown', playNote)
  button.addEventListener('touchstart', playNote)
  button.addEventListener('mouseup', stopNote)
  button.addEventListener('touchend', stopNote)
  buttons.push(button)
  
  div.appendChild(button)
  mainContainer.appendChild(div)
})

function playNote (e) {
  var [button, video] = getButtonAndVideo(e)
  video.currentTime = 0
  video.play()
  video.classList.add("video-active");
  button.classList.add("button-active");
}

function stopNote (e) {
  var [button, video] = getButtonAndVideo(e)
  video.pause()
  video.classList.remove("video-active");
  button.classList.remove("button-active");
}

function getButtonAndVideo(e) {
  var button = (e.target.nodeName === "BUTTON" ?  e.target : e.target.parentNode)
  return [button, videos[buttons.indexOf(button)]]
}

document.addEventListener('keypress', keypressed)
document.addEventListener('keyup', keyupped)

function keypressed (e) {
  index = keysCodes.indexOf(e.code)
  if (index !== -1) buttons[index].dispatchEvent(new Event('mousedown'))
}

function keyupped (e) {
  index = keysCodes.indexOf(e.code)
  if (index !== -1) buttons[index].dispatchEvent(new Event('mouseup'))
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
