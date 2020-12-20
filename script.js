

setTimeout(BarFunction,5000);


function BarFunction(){
const progressBar = document.getElementsByClassName('progress-bar')[0]
setInterval(() => {
  const computedStyle = getComputedStyle(progressBar)
  const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
  progressBar.style.setProperty('--width', width + 1.7)
}, 50) }




function myFunction() {
  const progressBar = document.getElementsByClassName('progress-bar')[0]
  setInterval(() => {
    const computedStyle = getComputedStyle(progressBar)
    const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
    progressBar.style.setProperty('--width', width - 0.8)
  },0)

}
