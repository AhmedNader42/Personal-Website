var slideIndex = 1;

const tabs = ['breakpoint_demo_container', 'watch_demo_container', 'tinder_clone_demo_container', 'algo_club_demo_container'];
showSlides(slideIndex);

function plusSlides(n) {
    showSlides((slideIndex += n));
}

function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName('mySlides');
    var dots = document.getElementsByClassName('dot');
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';

    for (let index = 0; index < tabs.length; index++) {
        document.getElementById(tabs[index]).style.display = 'none';
    }
    const currentTab = document.getElementById(tabs[(slideIndex - 1) % tabs.length]);
    currentTab.style.display = 'block';
}
