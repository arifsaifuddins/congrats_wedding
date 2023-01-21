const btn = document.querySelector('button.btn')
const cover = document.querySelector('.cover')

btn.onclick = () => {
  return cover.classList.add('open')
}