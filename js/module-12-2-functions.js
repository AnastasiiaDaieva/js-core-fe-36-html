export default class FetchObject {
  constructor(BASE_URL, endPoint, options) {
    this.BASE_URL = BASE_URL
    this.endPoint = endPoint
    this.options = options
    this._query = ''
    this._page = 1
    this.perPage = 5
  }

  get query() {
    return this._query
  }

  set query(value) {
    return (this._query = value)
  }

  get page() {
    return this._page
  }

  set page(value) {
    return (this._page += value)
  }

  getFetch(formRef, listRef) {
    let params = `?query=${this._query}&per_page=${this.perPage}&page=${this._page}`
    let url = this.BASE_URL + this.endPoint + params
    fetch(url, this.options)
      .then(response => response.json())
      .then(data => data.photos)
      .then(array => {
        let result = this.generateMarkUp(array)

        listRef.insertAdjacentHTML('beforeend', result)
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => formRef.reset())
  }

  generateMarkUp(array) {
    return array
      .map(elem => {
        const {
          photographer,
          src: { tiny, original },
        } = elem
        // console.log(elem) // src.original, src.tiny photographer
        return `
          <li>
          <img src="${tiny}" data-src="${original}" alt="${photographer}"/>
          </li>`
      })
      .join('')
  }

  getFetchBySubmit(formRef, listRef) {
    formRef.addEventListener('submit', e => {
      e.preventDefault()
      this.query = e.target.elements.input.value // setter
      listRef.innerHTML = ''
      if (this.query) {
        this.getFetch(formRef, listRef)
      } else {
        alert('Enter the search value')
      }
    })
  }
  getFetchByClick(btnRef, listRef, formRef) {
    btnRef.addEventListener('click', () => {
      this.page = 1
      this.getFetch(formRef, listRef)
    })
  }
}
