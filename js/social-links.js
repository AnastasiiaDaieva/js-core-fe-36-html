import data from '../db/social-links-info.js'
// console.log(data)

function createItems(arr) {
  // ul
  const list = document.createElement('ul')
  list.className = 'social-media__icons social-media__icons--footer list'
  // li * 4
  console.log(arr)
  const items = arr.map(elem => {
    // console.log(elem)
    // console.log(elem.class)
    const item = document.createElement('li')
    item.className = elem.class
    // console.log(item.classList)

    const link = document.createElement('a')
    // console.log(link)
    link.setAttribute('href', elem.link.href)
    link.className = elem.link.class
    link.setAttribute('target', elem.link.target)
    link.setAttribute('rel', elem.link.rel)
    //   console.log(item)

    const icon = document.createElement('svg')
    icon.className = elem.icon.class
    const iconUse = document.createElement('use')
    iconUse.setAttribute('href', elem.icon.href)

    icon.append(iconUse)
    link.append(icon)
    item.append(link)
    return item
  })
  list.append(...items)
  return list
}

const list = createItems(data)
console.log(list)
const slWrapper = document.querySelector('.footer__join')
slWrapper.append(list)
