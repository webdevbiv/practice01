//! Task 7

// window.addEventListener('mousemove', position)

// function position(event) {
//     console.log('mousemove', event);
//     console.log(`cordinates: ${event.screenX}, ${event.screenY}`);
// }

const fieldRef = document.querySelector('.football-field')
const ballRef = document.querySelector('.ball')
console.log(fieldRef, ballRef);


fieldRef.addEventListener('click', moveBall)
console.dir(ballRef)
const style = getComputedStyle(ballRef)
const ballWidth = ballRef.clientWidth
console.log("🚀 ~ ballWidth", ballWidth, typeof ballWidth)



function moveBall(event) {
    console.log(`cordinates: ${event.offsetX}, ${event.offsetY}`);
    const x = event.offsetX - ballWidth / 2
    const y = event.offsetY - ballWidth / 2
    console.log(x, y);
    ballRef.style.cssText = `position:absolute; left:${x}px; top:${y}px`
}