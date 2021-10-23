const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Data passed into resolve function')
  }, 2000)
})

// console.log('BEFORE promise.then')

const onResolve = data => {
  //   console.log('INSIDE promise.then - onResolve')
  //   console.log(data)
}

const onReject = error => {
  //   console.log('INSIDE promise.then - onReject')
  //   console.log(error)
}

promise.then(onResolve, onReject)

// console.log('AFTER promise.then')

promise
  .then(data => console.log(data))
  .catch(error => console.log(error))
  .finally(() => console.log('finished'))

const newPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('There was an error:(')
  }, 2000)
})

newPromise
  .then(data => {
    // console.log(data)
  })
  .catch(error => {
    // console.log(error)
  })

const chainPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(5)
  }, 2000)
})

chainPromise
  .then(value => {
    console.log(value)
    return value * 2
  })
  .then(value => {
    console.log(value)
    return value * 3
  })
  .then(value => {
    console.log(value)
  })
  .catch(error => {
    console.log(error)
  })

const makePromise = (text, delay) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(text), delay)
  })
}

const promiseA = makePromise('promiseA', 1000)
const promiseB = makePromise('promiseB', 3000)

Promise.all([promiseA, promiseB])
  .then(result => console.log(result))
  .catch(err => console.log(err))

const promiseRace = (text, delay) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(text), delay)
  })
}

const promiseC = promiseRace('promiseC', 4000)
const promiseD = promiseRace('promiseD', 1000)

Promise.race([promiseC, promiseD])
  .then(result => console.log(result))
  .catch(err => console.log(err))

//   analog of new Promise((resolve) => resolve(value))

// callback option (worse)

// const getMessage = function (callback) {
//   const input = prompt('write the message')
//   callback(input)
// }

// const logger = message => console.log(message)

// getMessage(logger)

const getMessage = function () {
  const input = prompt('write the message')
  return Promise.resolve(input)

  //  OR
  // return new Promise(resolve =>
  //   setTimeout(() => {
  //     resolve(input)
  //   }, 4000),
  // )
}

const logger = message => console.log(message)

getMessage().then(message => logger(message))

// OR

// getMessage().then(logger)
