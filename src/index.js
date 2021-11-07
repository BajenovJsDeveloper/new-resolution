function getResolution () {
  let sizeX = window.innerWidth
  let sizeY = window.innerHeight
  document.querySelector('.text-resolution').innerHTML = `${sizeX} x ${sizeY}`
}

window.onresize = getResolution
getResolution()