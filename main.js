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

var videosBlock = document.getElementById('videos-block')
var buttonsBlock = document.getElementById('buttons-block')

var buttons = []

videos.forEach(function (videoFile, i) {
  var div = document.createElement('div')
  div.setAttribute('class', 'note')

  var videoContainer = document.createElement('div')
  videoContainer.setAttribute('class', 'video-container')
  var video = document.createElement('video')
  var source = document.createElement('source')
  source.setAttribute('src', 'videos/' + videoFile)
  video.setAttribute('class', 'video')
  video.appendChild(source)
  videoContainer.appendChild(video)
  div.appendChild(videoContainer)
  video.style.display = 'none'

  var button = document.createElement('button')
  button.innerHTML =
    videoFile.split('_')[1].split('.')[0] + '\n' + keysFrench[i]
  button.innerHTML =
    '<h1>' +
    videoFile.split('_')[1].split('.')[0] +
    '</h1><h2>' +
    keysFrench[i] +
    '</h2>'

  button.addEventListener('mousedown', function () {
    video.style.display = 'inline-block'
    video.currentTime = 0
    video.play()
    button.style.backgroundColor = 'rgb(220, 220, 220)'
    button.style.boxShadow = '0px 1px 1px rgb(22, 22, 22)'
  })
  button.addEventListener('mouseup', function () {
    video.style.display = 'none'
    video.pause()
    button.style.backgroundColor = null
    button.style.boxShadow = null
  })
  buttons.push(button)
  div.appendChild(button)

  buttonsBlock.appendChild(div)
})

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
