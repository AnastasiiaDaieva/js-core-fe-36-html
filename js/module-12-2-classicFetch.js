import FetchObject from './module-12-2-functions.js'

const moreButton = document.querySelector('.getmore')
const accessUl = document.getElementById('list')
const accessForm = document.getElementById('form')

const BASE_URL = 'https://api.pexels.com/v1'
let endPoint = '/search'
const API_KEY = '563492ad6f91700001000001e62d8d13e8ec4ff49cb075eb9ec64348'
const options = {
  headers: {
    Authorization: API_KEY,
  },
}

const myFetch = new FetchObject(BASE_URL, endPoint, options)
console.log(myFetch)
myFetch.getFetchBySubmit(accessForm, accessUl)
myFetch.getFetchByClick(moreButton, accessUl, accessForm)
