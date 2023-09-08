// Script for changing color of the navbar elements while scrolling to the particular element
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
}

// Script for showing the typed cursor in home page 
var typed = new Typed('.type', {
    strings: [
      'Software',
      'Full Stack Web'
  ],
    typeSpeed: 130,
  //   backspeed: 90,
    loop: true
  });

//   Script for changing color of the navbar while scrolling down

$(function () {
    $(document).scroll(function () {
        var $nav = $(".fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});


