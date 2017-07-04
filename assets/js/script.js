// This code adds or removes the responsive class to main-div when icon is clicked

function openNav() {
  var x = document.getElementById('handle');
  if (x.className ==='nav-btns') {
    x.className += ' nav-open';
  } else {
    x.className = 'nav-btns';
  }
}

// This is the code that will determine which page is the current page and set the class of 'active' to the nav button
// Not the prettiest way to do it so I will change the way it's done when I understand it a bit more

for (var i = 0; i< document.links.length; i++) {
  if (document.URL.contains(document.links[i])) {
    document.links[i].classname += 'current';
  } else {document.links[0].classname += 'current';}
}



// This part fades in an image after reaching it on scroll

// function showImages(el) {
//   var windowHeight = $(window).height();
//   $(el).each(function() {
//     var thisPos = $('#alien-stopper').offset().top;
//
//     var topOfWindow = $(window).scrollTop();
//     if (topOfWindow + windowHeight - 300 > thisPos) {
//       $('#alien-stopper').addClass('fade-in');
//     }
//   });
// }

$(window).scroll(function() {
     $('#alienStopper').each(function(){
     var imagePos = $(this).offset().top;

     var topOfWindow = $(window).scrollTop();
         if (imagePos < topOfWindow+400) {
             $(this).addClass("slideUp");
         }
     });
 });

// $(window).scroll(function() {
//   showImages('.alien-stopper');
// });
