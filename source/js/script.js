// Слайдер

const SLIDE_WIDTH = 915;

const slider = document.querySelector(' .slider' );
const slidesContainer = document.querySelector( '.slides-wrapper' );
const prevButton = document.querySelector( '.button-prev' );
const nextButton = document.querySelector( '.button-next' );
const slides = Array.from( slider.querySelectorAll( 'figure' ) );
const slideCount = slides.length;
let slideIndex = 1;

prevButton.addEventListener( 'click', showPreviousSlide );
nextButton.addEventListener( 'click', showNextSlide );

function showPreviousSlide() 
{
	slideIndex = (slideIndex - 1 + slideCount) % slideCount;
	updateSlider();
}

function showNextSlide() 
{
	slideIndex = (slideIndex + 1) % slideCount;
	updateSlider();
}

function updateSlider() 
{
	slides.forEach( ( slide, index ) => 
	{
		if ( index === slideIndex ) 
		{
			slide.classList.add( 'active-slide' );
		} 
		else 
		{
			slide.classList.remove( 'active-slide' );
		}
	} );
	slidesContainer.style.transform = `translateX(${-SLIDE_WIDTH * slideIndex}px)`;
}

updateSlider();

// Окно формы

const form = document.querySelector( 'form' );
const nameInput = form.querySelector( '#name' );
const emailInput = form.querySelector( '#email' );
const submitButton = form.querySelector( 'button[type="submit"]' );
const popup = form.querySelector( '.popup' );

submitButton.addEventListener( 'click', function( evt ) 
{
	if ( nameInput.validity.valid && emailInput.validity.valid )
	{
		evt.preventDefault();
		popup.classList.add( 'show-popup' );
	}
} );
