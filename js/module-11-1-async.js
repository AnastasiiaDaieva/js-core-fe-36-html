function sayHi() {
  console.log('hi!')
}

function myCallbackTimeout() {
  console.log('Timeout')
}

// setTimeout(callback, time)

setTimeout(myCallbackTimeout, 4000)

console.log('hello!')
sayHi()
setTimeout(myCallbackTimeout, 7000)

// setInterval(callback, time)
function myCallbackInterval() {
  console.log('Interval')
}

setInterval(myCallbackInterval, 3000)

// clearInterval

const intervalLink = setInterval(myCallbackInterval, 1000)

const btn = document.getElementById('clear')

btn.addEventListener('click', () => {
  clearInterval(intervalLink)
})
