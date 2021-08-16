console.log(document)
console.dir(document)

console.log(document.body)
console.log(document.body.parentNode)
console.log(document.parentNode)

console.log(document.childNodes)
console.log(document.children)
console.log(document.body.children) // 9 elements

console.log(document.firstChild)

console.log(document.lastChild)

console.log(document.previousSibling)
console.log(document.body.previousSibling)

console.log(document.nextSibling)
console.log(document.body.nextSibling)

// ------------------------------

// access to <span id="headerLogo" class="logo logo--accent">Web</span>

const logoByTag = document.querySelector('span')
console.log(logoByTag)

const logoByIdQuery = document.querySelector('#headerLogo')
console.log(logoByIdQuery)

const logoById = document.getElementById('headerLogo')
console.log(logoById)

const logoByClass = document.querySelector('.logo--accent')
console.log(logoByClass)

// --------------------- getting links
const logoLink = document.querySelector('[href="./index.html"]')
console.log(logoLink)

const allLinksByTag = document.querySelectorAll('a')
console.log(allLinksByTag)

const linksClassLink = document.querySelectorAll('.social-media__link')
console.log(linksClassLink)

const linksByClassName = document.getElementsByClassName('social-media__link')
console.log(linksByClassName)

// -------------  getting attributes

const elemsWithSrc = document.querySelectorAll('[src]')
console.log(elemsWithSrc)

console.dir(logoByTag)
console.log(logoByTag.id)
console.log(logoByTag.classList)
console.log(logoByTag.className)

// GOOD PRACTICE
console.log(logoByTag.hasAttribute('name')) //false
console.log(logoByTag.hasAttribute('id')) // true
console.log(logoByTag.getAttribute('id')) // headerLogo

logoByTag.setAttribute('name', 'logo-span')
console.log(logoByTag.hasAttribute('name')) // true
console.log(logoByTag.getAttribute('name'))

console.log(logoByTag.attributes)

logoByTag.setAttribute('data-myAttr1', 'user')
logoByTag.setAttribute('data-myAttr2', '30')
logoByTag.setAttribute('data-myAttr3', 'JS')

// DELETE

logoByTag.removeAttribute('name')
console.log(logoByTag.hasAttribute('name')) // false
console.log(logoByTag.attributes)

console.log(logoByTag.dataset)
console.log(logoByTag.dataset.myattr1)
console.log(logoByTag.dataset.myattr2)
console.log(logoByTag.dataset.myattr3)

console.log(logoByTag)
console.log(logoByTag.textContent)
logoByTag.textContent = 'Logo'

logoByTag.style.color = 'tomato'

// good practice
console.log(logoByTag.className)
console.log(logoByTag.classList)

logoByTag.classList.add('mainLogo')
logoByTag.classList.remove('logo--accent')

console.log(logoByTag.classList.contains('text'))
console.log(logoByTag.classList.contains('logo'))

logoByTag.classList.replace('mainLogo', 'main-logo')

// GENERATE DOM-elements

const headerLogoLink = document.createElement('a')
// console.log(headerLogoLink)
headerLogoLink.setAttribute('href', './index.html')
// console.log(headerLogoLink.attributes)
headerLogoLink.classList.add('logo', 'header__logo')
// console.log(headerLogoLink.classList)
headerLogoLink.textContent = 'Studio'
// console.log(headerLogoLink.textContent)
const logoParent = document.getElementById('logo-parent')
console.log(logoParent)

// logoParent.appendChild(headerLogoLink)
// logoParent.prepend(headerLogoLink)

const logoSpan = document.createElement('span')
// console.log(logoSpan)
logoSpan.classList.add('logo', 'logo--accent')
// console.log(logoSpan)
logoSpan.textContent = 'Web'

headerLogoLink.prepend(logoSpan)
// console.log(headerLogoLink)

// insertAdjacentElement - альтернатива prepend/append → afterbegin, beforebegin, beforeend, afterend
headerLogoLink.insertAdjacentElement('afterbegin', logoSpan)

// console.log(headerLogoLink)

const footerLogoLink = headerLogoLink.cloneNode(true)
// console.log(footerLogoLink)
// footerLogoLink.style.color = 'white' // BAD PRACTICE
footerLogoLink.classList.replace('logo', 'footer__logo') // GOOD PRACTICE
const footerLogoParent = document.getElementById('footer-logoparent')
// console.log(footerLogoParent)
// footerLogoParent.prepend(footerLogoLink)

const footerAddress = `<address class="footer__address">
            <ul class="list">
              <li class="footer__address footer__address--physical">
                <a
                  href="https://goo.gl/maps/FCQ5aKZxrLypP4Zz5"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="footer__link"
                >
                  г. Киев, пр-т Леси Украинки, 26
                </a>
              </li>
              <li class="footer__mail">
                <a href="mailto:info@example.com" class="footer__link footer__contact">info@example.com</a>
              </li>
              <li><a href="tel:+380991111111" class="footer__link footer__contact">+38 099 111 11 11</a></li>
            </ul>
          </address>`
// console.log(footerAddress)

// footerLogoParent.insertAdjacentHTML('beforeend', footerAddress)

const slWrapper = document.querySelector('.footer__join')
console.log(slWrapper)
const slTitle = document.querySelector('.footer__text')
console.log(slTitle)

// element deletion, 2 ways, first:
// slWrapper.removeChild(slTitle)
// alternative:
slTitle.remove()
