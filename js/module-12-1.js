const hero = document.querySelector('.hero')
const input = document.querySelector('[name="search"]')
const photoList = document.querySelector('.photoList')
photoList.style.display = 'flex'
photoList.style.flexFlow = 'row wrap'

console.dir(fetch)
const API_KEY = '563492ad6f91700001000001e62d8d13e8ec4ff49cb075eb9ec64348'
const options = {
  // GET is a defualt value, can be not indicated
  method: 'GET', // || POST || PATCH || DELETE
  headers: {
    Authorization: API_KEY,
  },
  // body: {} // for methods POST ||PUT|| PATCH
}

let value = 'people'
let per_page = 10
const base_url = `https://api.pexels.com/`

input.addEventListener('change', e => {
  console.log(e.target.value)
  const { value } = e.target
  photoList.innerHTML = ''
  getFetch(value, per_page, createItems)
  e.target.value = ''
})

function getFetch(search, perPage = 10, cb) {
  let params = `v1/search?query=${search}&per_page=${perPage}`
  const url = base_url + params

  const request = fetch(url, options)
    .then(response => {
      console.log(response)
      if (response.status === 200) {
        return response.json()
      } else {
        throw new Error(`ERROR`)
      }
    })
    .then(data => {
      // console.log(data)
      if (data.photos.length === 0) {
        throw new Error('Nothing was found')
      } else {
        return data.photos
      }
    })
    .then(photos => {
      console.log(photos)
      cb(photoList, photos)
    })
    .catch(error => {
      alert(error)
    })
}

function createItems(place, array) {
  place.style.display = 'flex'
  let items = array
    .map(item => {
      const {
        src: { tiny },
        photographer,
      } = item
      return `<li>
    <img src="${tiny}" alt="${photographer}"/>
    <h3>${photographer}</h3>
</li>`
    })
    .join('')
  place.insertAdjacentHTML('beforeend', items)
}
