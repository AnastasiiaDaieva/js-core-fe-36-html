console.dir(_)

const input = document.getElementById('subscribe')
// without debounce

// input.addEventListener('input', e => {
//   console.log(e.target.value)
// })

// with debounce

input.addEventListener(
  'input',
  _.debounce(e => {
    console.log(e.target.value)
  }, 3000),
)
