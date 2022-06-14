//сортировка по диапазону цены
const filterBox = document.querySelectorAll('.courses')

//отследить клик внутри навигации
document.querySelector('.filter_wraper').addEventListener('click', event =>{
  if (event.target.tagName !== 'LI') return false //защита от рандомного клика в область

  let filterClass = event.target.dataset['f'] //получение элемента по клику из data-f

  //скрытие не подходящих элементов, добавление класса hide
  filterBox.forEach( elem => {
    elem.classList.remove('hide')
    if (!elem.classList.contains(filterClass) && filterClass!== 'all' ){
      elem.classList.add('hide')
    }
  })
})