//image spin
/*
function spin() {
    var logo = document.getElementById('logo');
    for (let i = 0; i < 360; i++) {
        setTimeout(50);
        logo.style.transform = 'rotateY(' + i + 'deg)';
    }
}
*/

//hamburger swap

function hamburgerSwap() {
    var menu = document.getElementById("nav-wrapper");
    var burger = document.getElementById("hamburger");
    if (menu.style.display === "block") {
        menu.style.display = "none";
        burger.style.display = "block";
    } else {
        menu.style.display = "block";
        burger.style.display = "none";
    }
}

/*function learnMore() {
    var info = document.getElementById('sales-more');
    if (info.className === 'services-more') {
        info.className = 'services-more-shown';
    } else {
        info.className = 'services-more';
    }
    //info.display
    var but = document.getElementById('sales-button');
    if (but.textContent === 'Learn More') {
        but.textContent = 'See Less';
    } else {
        but.textContent = 'Learn More';
    }
} */
/*function learnMore() {
    var info = document.getElementById('sales-more');
    var but = info.nextElementSibling;
    if (info.className === 'services-more') {
        info.className = 'services-more-shown';
        but.innerHTML = '<h2 id="sales-button">See Less</h2>';
    } else {
        info.className = 'services-more';
        but.innerHTML = '<h2 id="sales-button">Learn More</h2>';
    } */
function learnMore(lmBut) {
    var info = lmBut.previousElementSibling;
    //var info = document.getElementById('sales-more');
    //var but = info.nextElementSibling;
    if (info.className === 'services-more') {
        info.className = 'services-more-shown';
        lmBut.innerHTML = '<h2 id="sales-button">See Less</h2>';
    } else {
        info.className = 'services-more';
        lmBut.innerHTML = '<h2 id="sales-button">Learn More</h2>';
    }
}
/*
function slideshow() {
    var a = 'see  this';
    console.log(a);
    var slides = [...document.querySelectorAll('.buy-img')];
    console.log('slides: ' + slides);
     slides.forEach((item) => {
         item.style.display = 'none';
     });
    let i = 0;
    while (true) {
        slides[i].style.display = 'block';
        setTimeout(() => {
            slides[i].style.display = 'none';
        }, 5000);
        if (i === 5) {
            i = 0;
        } else {
            i++;
        }
        console.log(i);
    }

} */

//window.addEventListener('load', slideshow, false);



/*
//slideshow
document.getElementsByClassName('slider').forEach(function () {
    var tthis = this;
    var group = this.getElementsByClassName('slide-group');
    var slides = this.getElementsByClassName('slide');
    var buttonArray = [];
    var currentIndex = 0;
    var timeout;

    function move(newIndex) {

    }
    function advance() {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            if (currentIndex < slides.length - 1) {
                move(currentIndex + 1);
                    } else {
                move(0);
            }
        }, 4000);
    }

    slides.forEach((index) => {
        var btn = '<button type="button" class="slide-btn">*</button>';
        if (index === currentIndex) {
            let attr = btn.getAttribute('class');
            attr += ' active';
            btn.setAttribute('class', attr);
        }
        btn.addEventListener('click', () => {
            move(index);
            let container = document.getElementsByClass('slide-buttons')[0].innerHTML;
            container += btn;
            document.getElementsByClass('slide-buttons')[0].innerHTML = container;
        });
    });
})
*/