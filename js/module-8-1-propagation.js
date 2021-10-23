const parentOfBtns = document.querySelector('.portfolio__buttons')
// console.log(parentOfBtns)

// access to div.container
const sectionWrapper = document.querySelector('.section .portfolio__container')
// console.log(sectionWrapper)

// access to section portfolio
const sectionPortfolio = document.querySelector('.portfolio')
// console.log(sectionPortfolio)

parentOfBtns.addEventListener('click', e => {
  console.log(e)
  console.log('LI - element that was clicked', e.target) // element where click occurred
  if (e.target.nodeName !== 'BUTTON') {
    console.error('ВЫ НАЖАЛИ НЕ НА КНОПКУ')
  } else {
    e.target.classList.toggle('activeBtn')
  }

  console.log('UL - element that caught the click', e.currentTarget) // element that caught the click
})

sectionWrapper.addEventListener('click', e => {
  e.stopImmediatePropagation()

  console.log('DIV - element that was clicked', e.target)
  console.log('DIV - element that caught the click', e.currentTarget)
})

sectionPortfolio.addEventListener('click', e => {
  e.stopPropagation()

  console.log('SECTION - element that was clicked', e.target)
  console.log('SECTION - element that caught the click', e.currentTarget)
})

window.addEventListener('click', e => {
  console.log('window - element that was clicked', e.target)
  console.log('window - element that caught the click', e.currentTarget)
})
