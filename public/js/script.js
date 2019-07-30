'use strict';

(function (root) {

  // svg for all
  svg4everybody();
  scrollTo();

  var sliderOptions = {
    'banner': {
      cellAlign: 'center',
      pageDots: false,
      prevNextButtons: false,
      wrapAround: true,
      contain: true
    },
    'items': {
      cellAlign: 'left',
      pageDots: false,
      prevNextButtons: false,
      wrapAround: true,
      contain: true
    }
  };

  document.querySelectorAll('[data-slider]').forEach(function (slider, i) {
    var slides = slider.querySelector('[data-slider-slides]'),
        slidesCount = slides.children.length,
        sliderData = slider.dataset.slider,
        options = sliderOptions[sliderData],
        sliderWidth = slider.offsetWidth,
        slideWidth = slides.children[0].offsetWidth,
        slidesCapacity = Math.round(sliderWidth / slideWidth),
        controls = slider.querySelector('[data-slider-controls]'),
        controlsPrev = controls.querySelector('[data-slider-controls-prev]'),
        controlsNext = controls.querySelector('[data-slider-controls-next]'),
        controlsEndIndex = slidesCount - slidesCapacity,
        adaptive = Number(slider.dataset.sliderAdaptive),
        windowWidth = window.innerWidth;

    if (slidesCount > slidesCapacity) {
      slider.classList.add('slider_initial');
      var flkty = new Flickity(slides, sliderOptions[slider.dataset.slider]);

      if (controls) {
        controlsPrev.addEventListener('click', function (e) {
          e.preventDefault();
          flkty.previous();
        });

        controlsNext.addEventListener('click', function (e) {
          e.preventDefault();
          flkty.next();
        });

        // if (!sliderData.wrapAround) {
        //   if (flkty.selectedIndex === 0) {
        //     controlsPrev.disabled = true
        //   } else if (flkty.selectedIndex === controlsEndIndex) {
        //     controlsNext.disabled = true
        //   }
        //
        //   flkty.on('change', (index) => {
        //     if (index >= controlsEndIndex) {
        //       flkty.select(controlsEndIndex)
        //     }
        //   })
        // }
      }
    }
  });

  // modal

  // $('[data-modal]').fancybox({
  //   modal: true
  // })
  $('[data-modal-open]').on('click', function (e) {
    var data = $(e.target).closest('[data-modal-open]').data('modalOpen'),
        modal = $('[data-modal="' + data + '"]');

    $.fancybox.open(modal, {
      modal: true,
      autoFocus: false,
      animationEffect: 'fade'
    });
  });

  // // drop
  //
  // document.addEventListener('click', (e) => {
  //   const drop = document.querySelector('[data-drop-state="1"]')
  //
  //   if (drop && !e.target.closest('.drop.show') && !e.target.closest('[data-drop-state="1"]')) {
  //     e.preventDefault()
  //     drop.click()
  //   }
  //
  // })
  //
  // document.querySelectorAll('[data-drop]').forEach((drop, i) => {
  //   drop.addEventListener('click', (e) => {
  //     e.preventDefault()
  //
  //     const data = drop.dataset.drop,
  //           dropContent = document.querySelector(`[data-drop-content="${data}"]`),
  //           state = Number(drop.dataset.dropState)
  //
  //     switch (state) {
  //       case 0:
  //         dropContent.classList.add('show')
  //         break
  //       case 1:
  //         dropContent.classList.remove('show')
  //         break
  //     }
  //
  //     drop.dataset.dropState = Number(!state)
  //
  //   })
  //
  //   drop.addEventListener('keydown', (e) => {
  //     if (e.keyCode === 13) {
  //       e.preventDefault()
  //       e.target.click()
  //     }
  //   })
  // })
  //
  // // rating
  //
  // document.querySelectorAll('.rating').forEach((rating, i) => {
  //   const value = Number(rating.querySelector('[data-stars]').dataset.stars)
  //
  //   rating.querySelectorAll('.star').forEach((star, k) => {
  //     if (k < value) {
  //       star.classList.add('star_fill')
  //     }
  //   })
  // })
  //
  // function prevAll(element) {
  //   var result = [];
  //
  //   while (element = element.previousElementSibling)
  //       result.push(element);
  //   return result;
  // }
  //
  // function nextAll(element) {
  //   var result = [];
  //
  //   while (element = element.nextElementSibling)
  //       result.push(element);
  //   return result;
  // }
  //
  // function starFocus(star) {
  //   star.classList.add('star_hover')
  //
  //   prevAll(star).forEach((el, k) => {
  //     el.classList.add('star_hover')
  //   })
  //
  //   nextAll(star).forEach((el, k) => {
  //     el.classList.remove('star_hover')
  //   })
  // }
  //
  // document.querySelectorAll('.star').forEach((star, i) => {
  //   star.addEventListener('mouseenter', (e) => {
  //     starFocus(star)
  //   })
  //
  //   star.addEventListener('focus', (e) => {
  //     starFocus(star)
  //   })
  //
  //   star.addEventListener('mouseleave', (e) => {
  //     document.querySelectorAll('.star_hover').forEach((el, k) => {
  //       el.classList.remove('star_hover')
  //     })
  //   })
  //
  //   star.addEventListener('click', (e) => {
  //     e.preventDefault()
  //     star.classList.add('star_fill')
  //
  //     prevAll(star).forEach((el, k) => {
  //       el.classList.add('star_fill')
  //     })
  //
  //     nextAll(star).forEach((el, k) => {
  //       el.classList.remove('star_fill')
  //     })
  //   })
  //
  //   star.addEventListener('keydown', (e) => {
  //     if (e.keyCode === 13) {
  //       e.preventDefault()
  //       star.click()
  //     }
  //   })
  // })

  // select
  // $('select').niceSelect();

  // select
  // document.querySelectorAll('select').forEach((select, i) => {
  //   new CustomSelect({
  //     elem: select
  //   });
  // })

  // modals
  // document.querySelectorAll('[data-modal-open]').forEach((trigger, i) => {
  //   trigger.addEventListener('click', (e) => {
  //     e.preventDefault()
  //
  //     const t = e.target.closest('[data-modal-open]'),
  //           data = t.dataset.modalOpen,
  //           modalElement = document.querySelector(`[data-modal="${data}"]`)
  //
  //     let modalContent = modalElement.innerHTML
  //
  //     if (data == 'gallery') {
  //       modalContent = t.innerHTML
  //     }
  //
  //     let modal = new tingle.modal({
  //       closeMethods: ['overlay', 'escape'],
  //       onClose: function() {
  //         this.remove()
  //       },
  //       cssClass: modalElement.classList
  //     });
  //
  //     modal.setContent(modalContent)
  //     modal.open()
  //
  //     const forms = modal.modalBoxContent.querySelectorAll('form')
  //
  //     try {
  //       document.querySelector('.modal__close').addEventListener('click', (e) => {
  //         e.preventDefault()
  //         modal.close()
  //       })
  //     } catch (e) {
  //
  //     }
  //   })
  // })

})(window);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJyb290Iiwic3ZnNGV2ZXJ5Ym9keSIsInNjcm9sbFRvIiwic2xpZGVyT3B0aW9ucyIsImNlbGxBbGlnbiIsInBhZ2VEb3RzIiwicHJldk5leHRCdXR0b25zIiwid3JhcEFyb3VuZCIsImNvbnRhaW4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwic2xpZGVyIiwiaSIsInNsaWRlcyIsInF1ZXJ5U2VsZWN0b3IiLCJzbGlkZXNDb3VudCIsImNoaWxkcmVuIiwibGVuZ3RoIiwic2xpZGVyRGF0YSIsImRhdGFzZXQiLCJvcHRpb25zIiwic2xpZGVyV2lkdGgiLCJvZmZzZXRXaWR0aCIsInNsaWRlV2lkdGgiLCJzbGlkZXNDYXBhY2l0eSIsIk1hdGgiLCJyb3VuZCIsImNvbnRyb2xzIiwiY29udHJvbHNQcmV2IiwiY29udHJvbHNOZXh0IiwiY29udHJvbHNFbmRJbmRleCIsImFkYXB0aXZlIiwiTnVtYmVyIiwic2xpZGVyQWRhcHRpdmUiLCJ3aW5kb3dXaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJjbGFzc0xpc3QiLCJhZGQiLCJmbGt0eSIsIkZsaWNraXR5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInByZXZpb3VzIiwibmV4dCIsIiQiLCJvbiIsImRhdGEiLCJ0YXJnZXQiLCJjbG9zZXN0IiwibW9kYWwiLCJmYW5jeWJveCIsIm9wZW4iLCJhdXRvRm9jdXMiLCJhbmltYXRpb25FZmZlY3QiXSwibWFwcGluZ3MiOiI7O0FBQUEsQ0FBQyxVQUFTQSxJQUFULEVBQWU7O0FBRWQ7QUFDQUM7QUFDQUM7O0FBRUEsTUFBTUMsZ0JBQWdCO0FBQ3BCLGNBQVU7QUFDUkMsaUJBQVcsUUFESDtBQUVSQyxnQkFBVSxLQUZGO0FBR1JDLHVCQUFpQixLQUhUO0FBSVJDLGtCQUFZLElBSko7QUFLUkMsZUFBUztBQUxELEtBRFU7QUFRcEIsYUFBUztBQUNQSixpQkFBVyxN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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdELENBL1BELEVBK1BHcEIsTUEvUEgiLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKHJvb3QpIHtcblxuICAvLyBzdmcgZm9yIGFsbFxuICBzdmc0ZXZlcnlib2R5KClcbiAgc2Nyb2xsVG8oKVxuXG4gIGNvbnN0IHNsaWRlck9wdGlvbnMgPSB7XG4gICAgJ2Jhbm5lcic6IHtcbiAgICAgIGNlbGxBbGlnbjogJ2NlbnRlcicsXG4gICAgICBwYWdlRG90czogZmFsc2UsXG4gICAgICBwcmV2TmV4dEJ1dHRvbnM6IGZhbHNlLFxuICAgICAgd3JhcEFyb3VuZDogdHJ1ZSxcbiAgICAgIGNvbnRhaW46IHRydWVcbiAgICB9LFxuICAgICdpdGVtcyc6IHtcbiAgICAgIGNlbGxBbGlnbjogJ2xlZnQnLFxuICAgICAgcGFnZURvdHM6IGZhbHNlLFxuICAgICAgcHJldk5leHRCdXR0b25zOiBmYWxzZSxcbiAgICAgIHdyYXBBcm91bmQ6IHRydWUsXG4gICAgICBjb250YWluOiB0cnVlXG4gICAgfVxuICB9XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtc2xpZGVyXScpLmZvckVhY2goKHNsaWRlciwgaSkgPT4ge1xuICAgIGNvbnN0IHNsaWRlcyA9IHNsaWRlci5xdWVyeVNlbGVjdG9yKCdbZGF0YS1zbGlkZXItc2xpZGVzXScpLFxuICAgICAgICAgIHNsaWRlc0NvdW50ID0gc2xpZGVzLmNoaWxkcmVuLmxlbmd0aCxcbiAgICAgICAgICBzbGlkZXJEYXRhID0gc2xpZGVyLmRhdGFzZXQuc2xpZGVyLFxuICAgICAgICAgIG9wdGlvbnMgPSBzbGlkZXJPcHRpb25zW3NsaWRlckRhdGFdLFxuICAgICAgICAgIHNsaWRlcldpZHRoID0gc2xpZGVyLm9mZnNldFdpZHRoLFxuICAgICAgICAgIHNsaWRlV2lkdGggPSBzbGlkZXMuY2hpbGRyZW5bMF0ub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgc2xpZGVzQ2FwYWNpdHkgPSBNYXRoLnJvdW5kKHNsaWRlcldpZHRoL3NsaWRlV2lkdGgpLFxuICAgICAgICAgIGNvbnRyb2xzID0gc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXNsaWRlci1jb250cm9sc10nKSxcbiAgICAgICAgICBjb250cm9sc1ByZXYgPSBjb250cm9scy5xdWVyeVNlbGVjdG9yKCdbZGF0YS1zbGlkZXItY29udHJvbHMtcHJldl0nKSxcbiAgICAgICAgICBjb250cm9sc05leHQgPSBjb250cm9scy5xdWVyeVNlbGVjdG9yKCdbZGF0YS1zbGlkZXItY29udHJvbHMtbmV4dF0nKSxcbiAgICAgICAgICBjb250cm9sc0VuZEluZGV4ID0gc2xpZGVzQ291bnQgLSBzbGlkZXNDYXBhY2l0eSxcbiAgICAgICAgICBhZGFwdGl2ZSA9IE51bWJlcihzbGlkZXIuZGF0YXNldC5zbGlkZXJBZGFwdGl2ZSksXG4gICAgICAgICAgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxuXG4gICAgaWYgKHNsaWRlc0NvdW50ID4gc2xpZGVzQ2FwYWNpdHkpIHtcbiAgICAgIHNsaWRlci5jbGFzc0xpc3QuYWRkKCdzbGlkZXJfaW5pdGlhbCcpXG4gICAgICBjb25zdCBmbGt0eSA9IG5ldyBGbGlja2l0eShzbGlkZXMsIHNsaWRlck9wdGlvbnNbc2xpZGVyLmRhdGFzZXQuc2xpZGVyXSk7XG5cbiAgICAgIGlmIChjb250cm9scykge1xuICAgICAgICBjb250cm9sc1ByZXZcbiAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICBmbGt0eS5wcmV2aW91cygpXG4gICAgICAgICAgfSlcblxuICAgICAgICBjb250cm9sc05leHRcbiAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICBmbGt0eS5uZXh0KClcbiAgICAgICAgICB9KVxuXG4gICAgICAgIC8vIGlmICghc2xpZGVyRGF0YS53cmFwQXJvdW5kKSB7XG4gICAgICAgIC8vICAgaWYgKGZsa3R5LnNlbGVjdGVkSW5kZXggPT09IDApIHtcbiAgICAgICAgLy8gICAgIGNvbnRyb2xzUHJldi5kaXNhYmxlZCA9IHRydWVcbiAgICAgICAgLy8gICB9IGVsc2UgaWYgKGZsa3R5LnNlbGVjdGVkSW5kZXggPT09IGNvbnRyb2xzRW5kSW5kZXgpIHtcbiAgICAgICAgLy8gICAgIGNvbnRyb2xzTmV4dC5kaXNhYmxlZCA9IHRydWVcbiAgICAgICAgLy8gICB9XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgZmxrdHkub24oJ2NoYW5nZScsIChpbmRleCkgPT4ge1xuICAgICAgICAvLyAgICAgaWYgKGluZGV4ID49IGNvbnRyb2xzRW5kSW5kZXgpIHtcbiAgICAgICAgLy8gICAgICAgZmxrdHkuc2VsZWN0KGNvbnRyb2xzRW5kSW5kZXgpXG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgfSlcbiAgICAgICAgLy8gfVxuICAgICAgfVxuICAgIH1cbiAgfSlcblxuICAvLyBtb2RhbFxuXG4gIC8vICQoJ1tkYXRhLW1vZGFsXScpLmZhbmN5Ym94KHtcbiAgLy8gICBtb2RhbDogdHJ1ZVxuICAvLyB9KVxuICAkKCdbZGF0YS1tb2RhbC1vcGVuXScpLm9uKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJ1tkYXRhLW1vZGFsLW9wZW5dJykuZGF0YSgnbW9kYWxPcGVuJyksXG4gICAgICAgICAgbW9kYWwgPSAkKGBbZGF0YS1tb2RhbD1cIiR7ZGF0YX1cIl1gKVxuXG4gICAgJC5mYW5jeWJveC5vcGVuKG1vZGFsLCB7XG4gICAgICBtb2RhbDogdHJ1ZSxcbiAgICAgIGF1dG9Gb2N1czogZmFsc2UsXG4gICAgICBhbmltYXRpb25FZmZlY3Q6ICdmYWRlJ1xuICAgIH0pXG4gIH0pXG5cbiAgLy8gLy8gZHJvcFxuICAvL1xuICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIC8vICAgY29uc3QgZHJvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWRyb3Atc3RhdGU9XCIxXCJdJylcbiAgLy9cbiAgLy8gICBpZiAoZHJvcCAmJiAhZS50YXJnZXQuY2xvc2VzdCgnLmRyb3Auc2hvdycpICYmICFlLnRhcmdldC5jbG9zZXN0KCdbZGF0YS1kcm9wLXN0YXRlPVwiMVwiXScpKSB7XG4gIC8vICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgLy8gICAgIGRyb3AuY2xpY2soKVxuICAvLyAgIH1cbiAgLy9cbiAgLy8gfSlcbiAgLy9cbiAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZHJvcF0nKS5mb3JFYWNoKChkcm9wLCBpKSA9PiB7XG4gIC8vICAgZHJvcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIC8vICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgLy9cbiAgLy8gICAgIGNvbnN0IGRhdGEgPSBkcm9wLmRhdGFzZXQuZHJvcCxcbiAgLy8gICAgICAgICAgIGRyb3BDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtZHJvcC1jb250ZW50PVwiJHtkYXRhfVwiXWApLFxuICAvLyAgICAgICAgICAgc3RhdGUgPSBOdW1iZXIoZHJvcC5kYXRhc2V0LmRyb3BTdGF0ZSlcbiAgLy9cbiAgLy8gICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgLy8gICAgICAgY2FzZSAwOlxuICAvLyAgICAgICAgIGRyb3BDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3Nob3cnKVxuICAvLyAgICAgICAgIGJyZWFrXG4gIC8vICAgICAgIGNhc2UgMTpcbiAgLy8gICAgICAgICBkcm9wQ29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93JylcbiAgLy8gICAgICAgICBicmVha1xuICAvLyAgICAgfVxuICAvL1xuICAvLyAgICAgZHJvcC5kYXRhc2V0LmRyb3BTdGF0ZSA9IE51bWJlcighc3RhdGUpXG4gIC8vXG4gIC8vICAgfSlcbiAgLy9cbiAgLy8gICBkcm9wLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAvLyAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgLy8gICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIC8vICAgICAgIGUudGFyZ2V0LmNsaWNrKClcbiAgLy8gICAgIH1cbiAgLy8gICB9KVxuICAvLyB9KVxuICAvL1xuICAvLyAvLyByYXRpbmdcbiAgLy9cbiAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJhdGluZycpLmZvckVhY2goKHJhdGluZywgaSkgPT4ge1xuICAvLyAgIGNvbnN0IHZhbHVlID0gTnVtYmVyKHJhdGluZy5xdWVyeVNlbGVjdG9yKCdbZGF0YS1zdGFyc10nKS5kYXRhc2V0LnN0YXJzKVxuICAvL1xuICAvLyAgIHJhdGluZy5xdWVyeVNlbGVjdG9yQWxsKCcuc3RhcicpLmZvckVhY2goKHN0YXIsIGspID0+IHtcbiAgLy8gICAgIGlmIChrIDwgdmFsdWUpIHtcbiAgLy8gICAgICAgc3Rhci5jbGFzc0xpc3QuYWRkKCdzdGFyX2ZpbGwnKVxuICAvLyAgICAgfVxuICAvLyAgIH0pXG4gIC8vIH0pXG4gIC8vXG4gIC8vIGZ1bmN0aW9uIHByZXZBbGwoZWxlbWVudCkge1xuICAvLyAgIHZhciByZXN1bHQgPSBbXTtcbiAgLy9cbiAgLy8gICB3aGlsZSAoZWxlbWVudCA9IGVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZylcbiAgLy8gICAgICAgcmVzdWx0LnB1c2goZWxlbWVudCk7XG4gIC8vICAgcmV0dXJuIHJlc3VsdDtcbiAgLy8gfVxuICAvL1xuICAvLyBmdW5jdGlvbiBuZXh0QWxsKGVsZW1lbnQpIHtcbiAgLy8gICB2YXIgcmVzdWx0ID0gW107XG4gIC8vXG4gIC8vICAgd2hpbGUgKGVsZW1lbnQgPSBlbGVtZW50Lm5leHRFbGVtZW50U2libGluZylcbiAgLy8gICAgICAgcmVzdWx0LnB1c2goZWxlbWVudCk7XG4gIC8vICAgcmV0dXJuIHJlc3VsdDtcbiAgLy8gfVxuICAvL1xuICAvLyBmdW5jdGlvbiBzdGFyRm9jdXMoc3Rhcikge1xuICAvLyAgIHN0YXIuY2xhc3NMaXN0LmFkZCgnc3Rhcl9ob3ZlcicpXG4gIC8vXG4gIC8vICAgcHJldkFsbChzdGFyKS5mb3JFYWNoKChlbCwgaykgPT4ge1xuICAvLyAgICAgZWwuY2xhc3NMaXN0LmFkZCgnc3Rhcl9ob3ZlcicpXG4gIC8vICAgfSlcbiAgLy9cbiAgLy8gICBuZXh0QWxsKHN0YXIpLmZvckVhY2goKGVsLCBrKSA9PiB7XG4gIC8vICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdzdGFyX2hvdmVyJylcbiAgLy8gICB9KVxuICAvLyB9XG4gIC8vXG4gIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdGFyJykuZm9yRWFjaCgoc3RhciwgaSkgPT4ge1xuICAvLyAgIHN0YXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIChlKSA9PiB7XG4gIC8vICAgICBzdGFyRm9jdXMoc3RhcilcbiAgLy8gICB9KVxuICAvL1xuICAvLyAgIHN0YXIuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoZSkgPT4ge1xuICAvLyAgICAgc3RhckZvY3VzKHN0YXIpXG4gIC8vICAgfSlcbiAgLy9cbiAgLy8gICBzdGFyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoZSkgPT4ge1xuICAvLyAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN0YXJfaG92ZXInKS5mb3JFYWNoKChlbCwgaykgPT4ge1xuICAvLyAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdzdGFyX2hvdmVyJylcbiAgLy8gICAgIH0pXG4gIC8vICAgfSlcbiAgLy9cbiAgLy8gICBzdGFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgLy8gICAgIGUucHJldmVudERlZmF1bHQoKVxuICAvLyAgICAgc3Rhci5jbGFzc0xpc3QuYWRkKCdzdGFyX2ZpbGwnKVxuICAvL1xuICAvLyAgICAgcHJldkFsbChzdGFyKS5mb3JFYWNoKChlbCwgaykgPT4ge1xuICAvLyAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdzdGFyX2ZpbGwnKVxuICAvLyAgICAgfSlcbiAgLy9cbiAgLy8gICAgIG5leHRBbGwoc3RhcikuZm9yRWFjaCgoZWwsIGspID0+IHtcbiAgLy8gICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnc3Rhcl9maWxsJylcbiAgLy8gICAgIH0pXG4gIC8vICAgfSlcbiAgLy9cbiAgLy8gICBzdGFyLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAvLyAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgLy8gICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIC8vICAgICAgIHN0YXIuY2xpY2soKVxuICAvLyAgICAgfVxuICAvLyAgIH0pXG4gIC8vIH0pXG5cbiAgLy8gc2VsZWN0XG4gIC8vICQoJ3NlbGVjdCcpLm5pY2VTZWxlY3QoKTtcblxuICAvLyBzZWxlY3RcbiAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0JykuZm9yRWFjaCgoc2VsZWN0LCBpKSA9PiB7XG4gIC8vICAgbmV3IEN1c3RvbVNlbGVjdCh7XG4gIC8vICAgICBlbGVtOiBzZWxlY3RcbiAgLy8gICB9KTtcbiAgLy8gfSlcblxuICAvLyBtb2RhbHNcbiAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbW9kYWwtb3Blbl0nKS5mb3JFYWNoKCh0cmlnZ2VyLCBpKSA9PiB7XG4gIC8vICAgdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIC8vICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgLy9cbiAgLy8gICAgIGNvbnN0IHQgPSBlLnRhcmdldC5jbG9zZXN0KCdbZGF0YS1tb2RhbC1vcGVuXScpLFxuICAvLyAgICAgICAgICAgZGF0YSA9IHQuZGF0YXNldC5tb2RhbE9wZW4sXG4gIC8vICAgICAgICAgICBtb2RhbEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1tb2RhbD1cIiR7ZGF0YX1cIl1gKVxuICAvL1xuICAvLyAgICAgbGV0IG1vZGFsQ29udGVudCA9IG1vZGFsRWxlbWVudC5pbm5lckhUTUxcbiAgLy9cbiAgLy8gICAgIGlmIChkYXRhID09ICdnYWxsZXJ5Jykge1xuICAvLyAgICAgICBtb2RhbENvbnRlbnQgPSB0LmlubmVySFRNTFxuICAvLyAgICAgfVxuICAvL1xuICAvLyAgICAgbGV0IG1vZGFsID0gbmV3IHRpbmdsZS5tb2RhbCh7XG4gIC8vICAgICAgIGNsb3NlTWV0aG9kczogWydvdmVybGF5JywgJ2VzY2FwZSddLFxuICAvLyAgICAgICBvbkNsb3NlOiBmdW5jdGlvbigpIHtcbiAgLy8gICAgICAgICB0aGlzLnJlbW92ZSgpXG4gIC8vICAgICAgIH0sXG4gIC8vICAgICAgIGNzc0NsYXNzOiBtb2RhbEVsZW1lbnQuY2xhc3NMaXN0XG4gIC8vICAgICB9KTtcbiAgLy9cbiAgLy8gICAgIG1vZGFsLnNldENvbnRlbnQobW9kYWxDb250ZW50KVxuICAvLyAgICAgbW9kYWwub3BlbigpXG4gIC8vXG4gIC8vICAgICBjb25zdCBmb3JtcyA9IG1vZGFsLm1vZGFsQm94Q29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCdmb3JtJylcbiAgLy9cbiAgLy8gICAgIHRyeSB7XG4gIC8vICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fY2xvc2UnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIC8vICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIC8vICAgICAgICAgbW9kYWwuY2xvc2UoKVxuICAvLyAgICAgICB9KVxuICAvLyAgICAgfSBjYXRjaCAoZSkge1xuICAvL1xuICAvLyAgICAgfVxuICAvLyAgIH0pXG4gIC8vIH0pXG5cblxufSkod2luZG93KTtcbiJdfQ==
