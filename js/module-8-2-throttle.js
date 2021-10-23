console.dir(_)

// input
// element.addEventListener('event', callback)

// // syntax:
// // throttle:
// // _.throttle(callback, 500);
// element.addEventListener('event', _.throttle(callback, 1000))
// // anonymous

// element.addEventListener(
//   'event',
//   _.throttle(e => {}, 1000),
// )

// // debounce:
// // _.debounce(callback, 500);
// element.addEventListener('event', _.debounce(callback, 1000))

// // anonymous
// element.addEventListener(
//   'event',
//   _.debounce(e => {
//     console.log(e)
//   }, 1000),
// )

window.addEventListener(
  'scroll',
  _.throttle(e => {
    console.log(e)
  }, 5000),
)
