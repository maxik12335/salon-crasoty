const sliderButtonLeft = document.querySelector(".slider__button:first-child")
const sliderButtonRight = document.querySelector(".slider__button:last-child")
const slides = document.querySelector(".slides")
const slideList = document.querySelectorAll(".slide")

let activeItem = 1
let transformSlides = 650
let activeSlideLeft = 275
const activeClasses = "slide-active"

sliderButtonLeft.addEventListener("click", (event) => {
  if(activeItem === 0) {
    slideList[activeItem].classList.remove(activeClasses)
    activeItem = slideList.length - 1
    slideList[activeItem].classList.add(activeClasses)
    slides.style.transform = `translateX(-${transformSlides * (activeItem - 1)}px)`
    document.querySelector(".slide-active").style.left = `${(activeItem - 1) * transformSlides + activeSlideLeft}px`
    return
  }

  if(activeItem === 1) {  
    slideList[activeItem].classList.remove(activeClasses)
    slideList[activeItem - 1].classList.add(activeClasses)
    slides.style.transform = `translateX(650px)`
    document.querySelector(".slide-active").style.left = `-375px`
    activeItem = 0
    return
  }

  slideList[activeItem].classList.remove(activeClasses)
  slideList[activeItem - 1].classList.add(activeClasses)
  activeItem -= 1

  slides.style.transform = `translateX(-${transformSlides * (activeItem - 1)}px)`
  document.querySelector(".slide-active").style.left = `${(activeItem - 1) * transformSlides + activeSlideLeft}px`
})

sliderButtonRight.addEventListener("click", (event) => {
  if(activeItem === slideList.length - 1) {
    slideList[activeItem].classList.remove(activeClasses)
    slideList[0].classList.add(activeClasses)
    activeItem = 0
    slides.style.transform = `translateX(650px)`
    document.querySelector(".slide-active").style.left = `-375px`
    return
  }

  slideList[activeItem].classList.remove(activeClasses)
  slideList[activeItem + 1].classList.add(activeClasses)
  activeItem += 1

  slides.style.transform = `translateX(-${transformSlides * (activeItem - 1)}px)`
  document.querySelector(".slide-active").style.left = `${(activeItem - 1) * transformSlides + activeSlideLeft}px`
})

// SLIDER 2

const slider2ButtonLeft = document.querySelector(".slider__button2:first-child")
const slider2ButtonRight = document.querySelector(".slider__button2:last-child")
const slides2 = document.querySelector(".slides2")
const slideList2 = document.querySelectorAll(".slide2")

let activeItem2 = 1
let transformSlides2 = 600
let activeSlideLeft2 = 275
const activeClasses2 = "slide-active"

slides2.style.transform = `translateX(-${transformSlides2 * (activeItem2)}px)`

slider2ButtonLeft.addEventListener("click", (event) => {
  if(activeItem2 === 0) {  
    activeItem2 = slideList2.length - 1
    slides2.style.transform = `translateX(-${transformSlides2 * (activeItem2)}px)`
    console.log(activeItem2)
    return
  }

  if(activeItem2 === 1) {  
    activeItem2 = 0
    slides2.style.transform = `translateX(0px)`
    console.log(activeItem2)    
    return
  }

  activeItem2 -= 1

  slides2.style.transform = `translateX(-${transformSlides2 * (activeItem2)}px)`
  console.log(activeItem2)
})

slider2ButtonRight.addEventListener("click", (event) => {
  if(activeItem2 === 0) {
    slides2.style.transform = `translateX(-${transformSlides2}px)`
    activeItem2=1
    console.log(activeItem2)
    return
  }

  if(activeItem2 === 1) {
    slides2.style.transform = `translateX(-${transformSlides2*2}px)`
    activeItem2=2
    console.log(activeItem2)
    return
  }

  if(activeItem2 === 2) {
    slides2.style.transform = `translateX(-${transformSlides2*3}px)`
    activeItem2=3
    console.log(activeItem2)
    return
  }

  if(activeItem2 === 3) {
    slides2.style.transform = `translateX(-${transformSlides2*4}px)`
    activeItem2=4
    console.log(activeItem2)
    return
  }

  if(activeItem2 === 4) {
    slides2.style.transform = `translateX(-${transformSlides2*0}px)`
    activeItem2=0
    console.log(activeItem2)
    return
  }
})

// close modal

const close = document.querySelector(".close")
const modal = document.querySelector(".modal")
const openModal = document.querySelector(".offer .button")

openModal.addEventListener("click",() => {
  modal.style.display = "flex"
})

close.addEventListener("click", () => {
  modal.style.display = "none"
})