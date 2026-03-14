/* slider.js - injected as external file */
function initSlider(){
  var carousel = document.querySelector('.thg-slider');
  var prev = document.querySelector('.prev');
  var next = document.querySelector('.next');
  if(!carousel){ console.warn('Slider not found — skipping slider init.'); return; }
  var getSlideWidth = function(){
    var slide = carousel.querySelector('.thg-slide');
    if(!slide) return 300;
    var style = window.getComputedStyle(slide);
    var margin = parseFloat(style.marginLeft) + parseFloat(style.marginRight);
    return slide.getBoundingClientRect().width + margin;
  };
  if(next){ next.addEventListener('click', function(e){ e.preventDefault(); carousel.scrollBy({ left: getSlideWidth(), behavior: 'smooth' }); }); }
  if(prev){ prev.addEventListener('click', function(e){ e.preventDefault(); carousel.scrollBy({ left: -getSlideWidth(), behavior: 'smooth' }); }); }
  var startX = 0, endX = 0;
  carousel.addEventListener('touchstart', function(e){ startX = e.touches && e.touches[0] ? e.touches[0].clientX : 0; });
  carousel.addEventListener('touchmove', function(e){ endX = e.touches && e.touches[0] ? e.touches[0].clientX : 0; });
  carousel.addEventListener('touchend', function(){ var diff = startX - endX; if(Math.abs(diff) > 50){ if(diff > 0){ carousel.scrollBy({ left: getSlideWidth(), behavior: 'smooth' }); } else { carousel.scrollBy({ left: -getSlideWidth(), behavior: 'smooth' }); } } });
}
if(document.readyState === 'loading'){ window.addEventListener('DOMContentLoaded', initSlider); } else { initSlider(); }
