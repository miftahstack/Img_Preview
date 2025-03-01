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