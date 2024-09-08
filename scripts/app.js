// * Read the instructions inside the readme file carefully

// * Remember to "go live" below. The browser will automatically reload when you save your code.

function init() {

  // ? Task 1

const buttEl = document.querySelector('#toggle');
const circleDiv = document.querySelector('.circle')

buttEl.addEventListener('click', () => {
  circleDiv.classList.toggle('pulse');
})

// console.log(circleDiv)

// buttEl.addEventListener('click', () => {
//   circleDiv.classList.add('class', 'pulse')
//   buttEl.addEventListener('click', () => {
//     circleDiv.classList.remove('class','pulse')
//   })
// })






//if (!circleDiv.classList.contains('pulse')) { 
//     circleDiv.add('pulse')
//   }
// })


  // ? Task 2

const citiesEl = document.querySelector('#cities');
const cityPlacement = document.querySelector('#city')

  // citiesEl.addEventListener('change', (place) => {
  //   if (cityPlacement.textContent === '') {
  //     const newCit = createElement('p', place);
  //     cityPlacement.append(newCit);
  //   }
  // })

  // citiesEl.addEventListener('change', (place) => {
  //   cityPlacement.textContent.input = citiesEl.options.textContent;
  // })



  citiesEl.addEventListener('change', (place) => {
    cityPlacement.textContent = place.target.value
  })
  
  //  ? Task 3
const currentName = document.querySelector('#current')


const names = document.getElementsByClassName('name')
  for (let name of names) {
    name.addEventListener('mouseover', () => {
      currentName.textContent = name.textContent;
  })
    name.addEventListener('mouseout', () => {
     currentName.textContent = '';
  })
  }



  // ? Task 4

const subscribe = document.querySelector('#subscribe');
const subButton = document.querySelector('.submit');

subButton.addEventListener('click', (form) => {
  subButton.setAttribute('class', 'submitted');
  subButton.textContent ='Submitted!';
  form.preventDefault();
})



  // ? Task 5

  const hTag = document.querySelector('h1');

window.addEventListener('scroll', () => {
  if(window.scrollY > 40) { 
    hTag.classList.add('fadeOutUp') 
  }  else if (window.scrollY < 0,40) {
     hTag.classList.remove('fadeOutUp')}
    }
)











}
window.addEventListener('DOMContentLoaded', init)
