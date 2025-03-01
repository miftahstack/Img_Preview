// LightBox Start

lightbox.option({
    'resizeDuration': 100,
    'wrapAround': true
  })
  // LightBox End

  // VenoBox Start
  new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});
  // VenoBox End

/* Mixitup Start */
var containerEl = document.querySelector('.mixitUP');

            var mixer = mixitup(containerEl, {
                multifilter: {
                    enable: true
                },
                animation: {
                    effects: 'fade translateZ(-100px)'
                }
            });
/* Mixitup End */


/* Typed JS End */
$(function(){
	$(".typed").typed({
		strings: ["Lightbox is small javascript library used to overlay images on top of the current page. It's a snap to setup and works on all modern browsers."],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 20,
		// time before typing starts
		startDelay: 1000,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 7000,
		// loop
		loop: true,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: true,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
});
$(function(){
	$(".typedd").typed({
		strings: ["Lightbox is small javascript library used to overlay images on top of the current page. It's a snap to setup and works on all modern browsers."],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 20,
		// time before typing starts
		startDelay: 1000,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 7000,
		// loop
		loop: true,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: true,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
});


/* Mixitup End */