console.dir(Date)
let year = 2021
let month = 11
let date = 20
console.log(new Date())
// current unix time in milliseconds
console.log(Date.now())

const myDate = new Date()
console.log('current normal date', myDate)

const myBD = new Date('07.28.1995')
console.log('myBD:', myBD)

const startOfJob = new Date(year, month, date, 9, 30)
console.log(startOfJob)

const unixToDate = new Date(130949140560)
console.log(unixToDate)

// Date.parse to see unix milliseconds of particylar date
console.log(Date.parse('09.06.2021'))

// getTime method

const checkDate = new Date('09.05.2021')

console.log(checkDate.getTime()) // milliseconds

console.log(checkDate.getDay()) // day of the week

console.log(checkDate.getDate())

console.log(checkDate.getMonth())

console.log(checkDate.getFullYear())

console.log(checkDate.getHours())

console.log(checkDate.getMinutes())

console.log(checkDate.getSeconds())

console.log(checkDate.getMilliseconds())

// date format

const options = {
  weekday: 'short',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
}

console.log(checkDate.toLocaleString('Uk-uk', options))

console.log(checkDate.toString())

console.log(checkDate.toDateString())

console.log(checkDate.toTimeString())

console.dir(Promise)
const promise = new Promise(callback)
console.log(promise)
function callback(resolve, reject) {
  let condition = 2
  setTimeout(() => {
    if (condition > 1) {
      resolve('Success')
    } else {
      reject('Error')
      //   console.log('Promise will be activated in 3000 ms')
    }
  }, 3000)
}

promise
  .then(
    handleResult => {
      console.log('1', handleResult)
      return 'ok-1'
    },
    //   all rejects from then go to catch as then is usually used for successful results
    // handleError => {
    //   console.log('1', handleError)
    //   return 'error-1'
    // },
  )
  .then(
    secondRes => {
      console.log('2', secondRes)
    },
    // secondError => {
    //   console.log('2', secondError)
    // },
  )
  .catch(error => {
    console.log(error)
  })
  .finally(() => {
    console.log('finalizing promise processing irrespective of the result')
  })
