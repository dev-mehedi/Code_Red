// PARALLAX JS ============

$('#advice-us').parallax({imageSrc: 'images/donor/hand-money3.jpg'});
$('#advice-victims').parallax({imageSrc: 'images/donor/hand-money4.jpg'});
$('#myCarousel').parallax({imageSrc: 'images/donor/hand-money3.jpg'});
$('#contact').parallax({imageSrc: 'images/bangladeshmap.jpg'});
// $('.parallax-window').parallax({imageSrc: '/path/to/image.jpg'});


// STICKY SCROLL JS ============

// var  mn = $(".main-nav");
//     mns = "main-nav-scrolled";
//     hdr = $('header').height();

// $(window).scroll(function() {
//   if( $(this).scrollTop() > hdr ) {
//     mn.addClass(mns);
//   } else {
//     mn.removeClass(mns);
//   }
// });


// MODAL ============

$('#myModal').modal({
  keyboard: false
})

// ACTIVE ============

// $('.navbar-nav li').click(function(){
//   $('.navbar-nav li').removeClass("active");
//   $(this).addClass("active");
// })

// OWL CAROUSEL ============

    // Donate Card
$(document).ready(function() {
  var owl = $('.owl-carousel');
    owl.owlCarousel({
    items: 5,
    loop: true,
    margin: 10,
    autoplay: false,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
  });
});

$(document).ready(function() {
  $("#owl-demo").owlCarousel({
    autoPlay: 3000, //Set AutoPlay to 3 seconds
    items : 4,
    itemsDesktop : [1020,3],
    itemsDesktopSmall : [820,3],
    itemsTablet: [768,2],
    itemsMobile : [525,1],
  }); 
});


// external js: ISOTOPE CUSTOMS JS ============

// TOOLTIP

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows',
  getSortData: {
    name: '.name',
    symbol: '.symbol',
    number: '.number parseInt',
    category: '[data-category]',
    weight: function( itemElem ) {
      var weight = $( itemElem ).find('.weight').text();
      return parseFloat( weight.replace( /[\(\)]/g, '') );
    }
  }
});

// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};

// bind filter button click
$('#filters').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});

// bind sort button click
$('#sorts').on( 'click', 'button', function() {
  var sortByValue = $(this).attr('data-sort-by');
  $grid.isotope({ sortBy: sortByValue });
});

// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});


// COUNTER UP ============

$('.counter').counterUp({
    delay: 10,
    time: 1000
});


//  SMOTH SCROL ============

// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
   // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});


//  WOW JS

wow = new WOW(
  {
    animateClass: 'animated',
    offset:       100,
    callback:     function(box) {
      console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
  }
);
wow.init();
document.getElementById('moar').onclick = function() {
  var section = document.createElement('section');
  section.className = 'section--purple wow fadeInDown';
  this.parentNode.insertBefore(section, this);
};



//	SMOOTHWHEET JS

$(function(){
  
  var $window = $(window);    //Window object
  
  var scrollTime = 2.2;     //Scroll time
  var scrollDistance = 170;   //Distance. Use smaller value for shorter scroll and greater value for longer scroll
    
  $window.on("mousewheel DOMMouseScroll", function(event){
    
    event.preventDefault(); 
                    
    var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
    var scrollTop = $window.scrollTop();
    var finalScroll = scrollTop - parseInt(delta*scrollDistance);
      
    TweenMax.to($window, scrollTime, {
      scrollTo : { y: finalScroll, autoKill:true },
        ease: Power1.easeOut, //For more easing functions see https://api.greensock.com/js/com/greensock/easing/package-detail.html
        autoKill: true,
        overwrite: 5              
      });
          
  });
  
});