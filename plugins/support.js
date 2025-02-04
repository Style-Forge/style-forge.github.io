const node = document.createElement('div')
document.body.appendChild(node)

const classAdd = a =>
  (document.documentElement.className = [document.documentElement.className, a].filter(x => x).join(' '))

if (!checkVar()) classAdd('var')
if (!checkFlex()) classAdd('flex')
if (!checkGrid()) classAdd('grid')
if (!checkFloat()) classAdd('float')
if (!checkTextAlign()) classAdd('ta')
if (!checkAlignContent()) classAdd('xy')

document.body.removeChild(node)

// Functions
function checkVar() {
  try {
    node.style.cssText = ''
    node.style.setProperty('--a', '1')
    return node.style.getPropertyValue('--a')
  } catch (e) {}
  return false
}
function checkFlex() {
  try {
    node.style.cssText = ''
    node.style.display = 'flex'
    return getComputedStyle(node).display === 'flex'
  } catch (e) {}
  return false
}
function checkGrid() {
  try {
    node.style.cssText = ''
    node.style.display = 'grid'
    return getComputedStyle(node).display === 'grid'
  } catch (e) {}
  return false
}
function checkFloat() {
  try {
    node.style.cssText = ''
    node.style.float = 'inline-start'
    return getComputedStyle(node).float === 'inline-start'
  } catch (e) {}
  return false
}
function checkTextAlign() {
  try {
    node.style.cssText = ''
    node.style.textAlign = 'start'
    return getComputedStyle(node).textAlign === 'start'
  } catch (e) {}
  return false
}
function checkAlignContent() {
  try {
    node.style.cssText = ''
    node.style.alignContent = 'start'
    return getComputedStyle(node).alignContent === 'start'
  } catch (e) {}
  return false
}
