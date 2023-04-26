let sliderImages = Array.from(document.querySelectorAll('.slider-container img')),
    slidesCount = sliderImages.length,
    currentSlide = 1,
    slideNumberElement = document.getElementById('slide-number'),
    nextButton = document.getElementById('next'),
    prevButton = document.getElementById('prev'),
    paginationElement = document.createElement('ul');
    
paginationElement.setAttribute('id', 'pagination-ul');

nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

for (let i = 1; i <= slidesCount; i++) {
    let paginationItem = document.createElement('li');
    paginationItem.setAttribute('data-index', i);
    paginationItem.appendChild(document.createTextNode(i));
    paginationElement.appendChild(paginationItem);
}

document.getElementById('indicators').appendChild(paginationElement);

let paginationUl = document.getElementById('pagination-ul');

let paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

for (let i = 0; i < paginationBullets.length; i++) {
    paginationBullets[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute('data-index'));
        theChecker();
    }
}

theChecker();

function nextSlide() {
    if (nextButton.classList.contains('disabled')) {
        return false;
    } else {
        currentSlide++;
        theChecker();
    }
}

function prevSlide() {
    if (prevButton.classList.contains('disabled')) {
        return false;
    } else {
        currentSlide--;
        theChecker();
    }
}

function theChecker () {
    slideNumberElement.textContent = 'Slide #' + (currentSlide) + ' of ' + (slidesCount);

    removeAllActive();

    sliderImages[currentSlide - 1].classList.add('active');

    paginationUl.children[currentSlide - 1].classList.add('active');

    if (currentSlide == 1) {
        prevButton.classList.add('disabled');
    } else {
        prevButton.classList.remove('disabled');
    }
    if (currentSlide == slidesCount) {
        nextButton.classList.add('disabled');
    } else {
        nextButton.classList.remove('disabled');
    }

}

function removeAllActive () {
    sliderImages.forEach(img => {
        img.classList.remove('active');
    });

    paginationBullets.forEach(bullet => {
        bullet.classList.remove('active');
    });
}