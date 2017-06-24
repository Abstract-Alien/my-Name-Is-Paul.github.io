// This code adds or removes the responsive class to main-div when icon is clicked

function openNav() {
  var x = document.getElementById('handle');
  if (x.className ==='nav-btns') {
    x.className += ' nav-open';
  } else {
    x.className = 'nav-btns';
  }
}

// This is the code to make the navbar disappear while scrolling down

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('nav').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    // if (st > lastScrollTop && st > navbarHeight){
    //     // Scroll Down
    //     $('nav').removeClass('nav-down').addClass('nav-up');
    //   } else {
    //     // Scroll Up
    //     if(st + $(window).height() < $(document).height()) {
    //         $('nav').removeClass('nav-up').addClass('nav-down');
    //     }
    // }  un-comment later to try and fix issue

    lastScrollTop = st;
}

// This is the code that will determine which page is the current page and set the class of 'active' to the nav button
// Not the prettiest way to do it so I will change the way it's done when I understand it a bit more

for (var i = 0; i < document.links.length; i++) {
  if (document.links[i].href == document.URL) {
    document.links[i].className = 'current';
  } else {document.links[0].className = 'current';}
}

// This part fades in an image after reaching it on scroll

function showImages(el) {
  var windowHeight = jQuery( window ).height();
  $(el).each(function() {
    var thisPos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (topOfWindow + windowHeight - 300 > thisPos) {
      $(this).addClass('fade-in');
    }
  });
}

$(window).scroll(function() {
  showImages('.alien-stopper');
});
