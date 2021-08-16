const allBtn = document.getElementById('all')
console.log(allBtn)

// PROCESSING OF A CLICK

// allBtn.addEventListener('click', event => {
//   // console.log('Event happened')
//   console.log(event)

//   console.log(event.target)
//   // allBtn.style.background = 'red'
//   allBtn.classList.toggle('activeBtn')
// })

// const allBtns = document.getElementsByClassName('portfolio__button')
// console.log(allBtns)

//  =

const allBtns = document.querySelectorAll('.portfolio__button')
console.log(allBtns)

allBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // btn.style.background = 'green' // inline style
    btn.classList.toggle('activeBtn')
  })
})

// =======

// PROCESSING INPUT

const input = document.querySelector('[type="email"]')
// console.log(input)
// input.addEventListener('input', event => {
//   // console.log(event)

//   console.log(event.target.value)
// })

// BAD PRACTICE - CHANGE FOR INPUT; CHANGE IS GOOD FOR CHECKBOXS AND SELECTION

// input.addEventListener('change', e => {
//   console.log(e)
// })

// js - speaker - form

const form = document.querySelector('.js-speaker-form')
console.log(form)
// form.addEventListener('submit', e => {
//   console.log(e.target.elements) // HTMLFormControlsCollection
//   console.log(e.target.elements.email.value)
//   // first we prevent default submit event
//   e.preventDefault()
// })

// KEYDOWN

// window.addEventListener('keydown', e => {
//   console.log(e)
//   console.log('code:', e.code, 'key:', e.key)
// })

// KEYPRESS - doesn't work for system buttons
// window.addEventListener('keypress', e => {
//   console.log(e)
//   console.log('code:', e.code, 'key:', e.key)
// })

// KEYUP

// window.addEventListener('keyup', e => {
//   console.log(e)
//   console.log('code:', e.code, 'key:', e.key)
// })

// FOCUS & BLUR

input.addEventListener('focus', e => {
  console.log(e)
  e.target.style.background = 'red'
})

input.addEventListener('blur', e => {
  console.log(e)
  e.target.style.background = 'teal'
})

// removeEventListener - needed when a window is not active anymore, e.g. modal window when it's not needed and has display: none or smth like this; we need to have the function of the listener action placed separately above and be used in add/removeEventListener as callback after the type of action with mouse or keyboard
