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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJyb290Iiwic3ZnNGV2ZXJ5Ym9keSIsInNjcm9sbFRvIiwic2xpZGVyT3B0aW9ucyIsImNlbGxBbGlnbiIsInBhZ2VEb3RzIiwicHJldk5leHRCdXR0b25zIiwid3JhcEFyb3VuZCIsImNvbnRhaW4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwic2xpZGVyIiwiaSIsInNsaWRlcyIsInF1ZXJ5U2VsZWN0b3IiLCJzbGlkZXNDb3VudCIsImNoaWxkcmVuIiwibGVuZ3RoIiwic2xpZGVyRGF0YSIsImRhdGFzZXQiLCJvcHRpb25zIiwic2xpZGVyV2lkdGgiLCJvZmZzZXRXaWR0aCIsInNsaWRlV2lkdGgiLCJzbGlkZXNDYXBhY2l0eSIsIk1hdGgiLCJyb3VuZCIsImNvbnRyb2xzIiwiY29udHJvbHNQcmV2IiwiY29udHJvbHNOZXh0IiwiY29udHJvbHNFbmRJbmRleCIsImFkYXB0aXZlIiwiTnVtYmVyIiwic2xpZGVyQWRhcHRpdmUiLCJ3aW5kb3dXaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJjbGFzc0xpc3QiLCJhZGQiLCJmbGt0eSIsIkZsaWNraXR5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInByZXZpb3VzIiwibmV4dCIsIiQiLCJvbiIsImRhdGEiLCJ0YXJnZXQiLCJjbG9zZXN0IiwibW9kYWwiLCJmYW5jeWJveCIsIm9wZW4iLCJhdXRvRm9jdXMiLCJhbmltYXRpb25FZmZlY3QiXSwibWFwcGluZ3MiOiI7O0FBQUEsQ0FBQyxVQUFTQSxJQUFULEVBQWU7O0FBRWQ7QUFDQUM7QUFDQUM7O0FBRUEsTUFBTUMsZ0JBQWdCO0FBQ3BCLGNBQVU7QUFDUkMsaUJBQVcsUUFESDtBQUVSQyxnQkFBVSxLQUZGO0FBR1JDLHVCQUFpQixLQUhUO0FBSVJDLGtCQUFZLElBSko7QUFLUkMsZUFBUztBQUxEO0FBRFUsR0FBdEI7O0FBVUFDLFdBQVNDLGdCQUFULENBQTBCLGVBQTFCLEVBQTJDQyxPQUEzQyxDQUFtRCxVQUFDQyxNQUFELEVBQVNDLENBQVQsRUFBZTtBQUNoRSxRQUFNQyxTQUFTRixPQUFPRyxhQUFQLENBQXFCLHNCQUFyQixDQUFmO0FBQUEsUUFDTUMsY0FBY0YsT0FBT0csUUFBUCxDQUFnQkMsTUFEcEM7QUFBQSxRQUVNQyxhQUFhUCxPQUFPUSxPQUFQLENBQWVSLE1BRmxDO0FBQUEsUUFHTVMsVUFBVWxCLGNBQWNnQixVQUFkLENBSGhCO0FBQUEsUUFJTUcsY0FBY1YsT0FBT1csV0FKM0I7QUFBQSxRQUtNQyxhQUFhVixPQUFPRyxRQUFQLENBQWdCLENBQWhCLEVBQW1CTSxXQUx0QztBQUFBLFFBTU1FLGlCQUFpQkMsS0FBS0MsS0FBTCxDQUFXTCxjQUFZRSxVQUF2QixDQU52QjtBQUFBLFFBT01JLFdBQVdoQixPQUFPRyxhQUFQLENBQXFCLHdCQUFyQixDQVBqQjtBQUFBLFFBUU1jLGVBQWVELFNBQVNiLGFBQVQsQ0FBdUIsNkJBQXZCLENBUnJCO0FBQUEsUUFTTWUsZUFBZUYsU0FBU2IsYUFBVCxDQUF1Qiw2QkFBdkIsQ0FUckI7QUFBQSxRQVVNZ0IsbUJBQW1CZixjQUFjUyxjQVZ2QztBQUFBLFFBV01PLFdBQVdDLE9BQU9yQixPQUFPUSxPQUFQLENBQWVjLGNBQXRCLENBWGpCO0FBQUEsUUFZTUMsY0FBY0MsT0FBT0MsVUFaM0I7O0FBY0EsUUFBSXJCLGNBQWNTLGNBQWxCLEVBQWtDO0FBQ2hDYixhQUFPMEIsU0FBUCxDQUFpQkMsR0FBakIsQ0FBcUIsZ0JBQXJCO0FBQ0EsVUFBTUMsUUFBUSxJQUFJQyxRQUFKLENBQWEzQixNQUFiLEVBQXFCWCxjQUFjUyxPQUFPUSxPQUFQLENBQWVSLE1BQTdCLENBQXJCLENBQWQ7O0FBRUEsVUFBSWdCLFFBQUosRUFBYztBQUNaQyxxQkFDR2EsZ0JBREgsQ0FDb0IsT0FEcEIsRUFDNkIsVUFBQ0MsQ0FBRCxFQUFPO0FBQ2hDQSxZQUFFQyxjQUFGO0FBQ0FKLGdCQUFNSyxRQUFOO0FBQ0QsU0FKSDs7QUFNQWYscUJBQ0dZLGdCQURILENBQ29CLE9BRHBCLEVBQzZCLFVBQUNDLENBQUQsRUFBTztBQUNoQ0EsWUFBRUMsY0FBRjtBQUNBSixnQkFBTU0sSUFBTjtBQUNELFNBSkg7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRDtBQUNGO0FBQ0YsR0EvQ0Q7O0FBaURBOztBQUVBO0FBQ0E7QUFDQTtBQUNBQyxJQUFFLG1CQUFGLEVBQXVCQyxFQUF2QixDQUEwQixPQUExQixFQUFtQyxVQUFDTCxDQUFELEVBQU87QUFDeEMsUUFBTU0sT0FBT0YsRUFBRUosRUFBRU8sTUFBSixFQUFZQyxPQUFaLENBQW9CLG1CQUFwQixFQUF5Q0YsSUFBekMsQ0FBOEMsV0FBOUMsQ0FBYjtBQUFBLFFBQ01HLFFBQVFMLG9CQUFrQkUsSUFBbEIsUUFEZDs7QUFHQUYsTUFBRU0sUUFBRixDQUFXQyxJQUFYLENBQWdCRixLQUFoQixFQUF1QjtBQUNyQkEsYUFBTyxJQURjO0FBRXJCRyxpQkFBVyxLQUZVO0FBR3JCQyx1QkFBaUI7QUFISSxLQUF2QjtBQUtELEdBVEQ7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdELENBeFBELEVBd1BHcEIsTUF4UEgiLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKHJvb3QpIHtcblxuICAvLyBzdmcgZm9yIGFsbFxuICBzdmc0ZXZlcnlib2R5KClcbiAgc2Nyb2xsVG8oKVxuXG4gIGNvbnN0IHNsaWRlck9wdGlvbnMgPSB7XG4gICAgJ2Jhbm5lcic6IHtcbiAgICAgIGNlbGxBbGlnbjogJ2NlbnRlcicsXG4gICAgICBwYWdlRG90czogZmFsc2UsXG4gICAgICBwcmV2TmV4dEJ1dHRvbnM6IGZhbHNlLFxuICAgICAgd3JhcEFyb3VuZDogdHJ1ZSxcbiAgICAgIGNvbnRhaW46IHRydWVcbiAgICB9XG4gIH1cblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1zbGlkZXJdJykuZm9yRWFjaCgoc2xpZGVyLCBpKSA9PiB7XG4gICAgY29uc3Qgc2xpZGVzID0gc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXNsaWRlci1zbGlkZXNdJyksXG4gICAgICAgICAgc2xpZGVzQ291bnQgPSBzbGlkZXMuY2hpbGRyZW4ubGVuZ3RoLFxuICAgICAgICAgIHNsaWRlckRhdGEgPSBzbGlkZXIuZGF0YXNldC5zbGlkZXIsXG4gICAgICAgICAgb3B0aW9ucyA9IHNsaWRlck9wdGlvbnNbc2xpZGVyRGF0YV0sXG4gICAgICAgICAgc2xpZGVyV2lkdGggPSBzbGlkZXIub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgc2xpZGVXaWR0aCA9IHNsaWRlcy5jaGlsZHJlblswXS5vZmZzZXRXaWR0aCxcbiAgICAgICAgICBzbGlkZXNDYXBhY2l0eSA9IE1hdGgucm91bmQoc2xpZGVyV2lkdGgvc2xpZGVXaWR0aCksXG4gICAgICAgICAgY29udHJvbHMgPSBzbGlkZXIucXVlcnlTZWxlY3RvcignW2RhdGEtc2xpZGVyLWNvbnRyb2xzXScpLFxuICAgICAgICAgIGNvbnRyb2xzUHJldiA9IGNvbnRyb2xzLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXNsaWRlci1jb250cm9scy1wcmV2XScpLFxuICAgICAgICAgIGNvbnRyb2xzTmV4dCA9IGNvbnRyb2xzLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXNsaWRlci1jb250cm9scy1uZXh0XScpLFxuICAgICAgICAgIGNvbnRyb2xzRW5kSW5kZXggPSBzbGlkZXNDb3VudCAtIHNsaWRlc0NhcGFjaXR5LFxuICAgICAgICAgIGFkYXB0aXZlID0gTnVtYmVyKHNsaWRlci5kYXRhc2V0LnNsaWRlckFkYXB0aXZlKSxcbiAgICAgICAgICB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG5cbiAgICBpZiAoc2xpZGVzQ291bnQgPiBzbGlkZXNDYXBhY2l0eSkge1xuICAgICAgc2xpZGVyLmNsYXNzTGlzdC5hZGQoJ3NsaWRlcl9pbml0aWFsJylcbiAgICAgIGNvbnN0IGZsa3R5ID0gbmV3IEZsaWNraXR5KHNsaWRlcywgc2xpZGVyT3B0aW9uc1tzbGlkZXIuZGF0YXNldC5zbGlkZXJdKTtcblxuICAgICAgaWYgKGNvbnRyb2xzKSB7XG4gICAgICAgIGNvbnRyb2xzUHJldlxuICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIGZsa3R5LnByZXZpb3VzKClcbiAgICAgICAgICB9KVxuXG4gICAgICAgIGNvbnRyb2xzTmV4dFxuICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIGZsa3R5Lm5leHQoKVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgLy8gaWYgKCFzbGlkZXJEYXRhLndyYXBBcm91bmQpIHtcbiAgICAgICAgLy8gICBpZiAoZmxrdHkuc2VsZWN0ZWRJbmRleCA9PT0gMCkge1xuICAgICAgICAvLyAgICAgY29udHJvbHNQcmV2LmRpc2FibGVkID0gdHJ1ZVxuICAgICAgICAvLyAgIH0gZWxzZSBpZiAoZmxrdHkuc2VsZWN0ZWRJbmRleCA9PT0gY29udHJvbHNFbmRJbmRleCkge1xuICAgICAgICAvLyAgICAgY29udHJvbHNOZXh0LmRpc2FibGVkID0gdHJ1ZVxuICAgICAgICAvLyAgIH1cbiAgICAgICAgLy9cbiAgICAgICAgLy8gICBmbGt0eS5vbignY2hhbmdlJywgKGluZGV4KSA9PiB7XG4gICAgICAgIC8vICAgICBpZiAoaW5kZXggPj0gY29udHJvbHNFbmRJbmRleCkge1xuICAgICAgICAvLyAgICAgICBmbGt0eS5zZWxlY3QoY29udHJvbHNFbmRJbmRleClcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICB9KVxuICAgICAgICAvLyB9XG4gICAgICB9XG4gICAgfVxuICB9KVxuXG4gIC8vIG1vZGFsXG5cbiAgLy8gJCgnW2RhdGEtbW9kYWxdJykuZmFuY3lib3goe1xuICAvLyAgIG1vZGFsOiB0cnVlXG4gIC8vIH0pXG4gICQoJ1tkYXRhLW1vZGFsLW9wZW5dJykub24oJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zdCBkYXRhID0gJChlLnRhcmdldCkuY2xvc2VzdCgnW2RhdGEtbW9kYWwtb3Blbl0nKS5kYXRhKCdtb2RhbE9wZW4nKSxcbiAgICAgICAgICBtb2RhbCA9ICQoYFtkYXRhLW1vZGFsPVwiJHtkYXRhfVwiXWApXG5cbiAgICAkLmZhbmN5Ym94Lm9wZW4obW9kYWwsIHtcbiAgICAgIG1vZGFsOiB0cnVlLFxuICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcbiAgICAgIGFuaW1hdGlvbkVmZmVjdDogJ2ZhZGUnXG4gICAgfSlcbiAgfSlcblxuICAvLyAvLyBkcm9wXG4gIC8vXG4gIC8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgLy8gICBjb25zdCBkcm9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZHJvcC1zdGF0ZT1cIjFcIl0nKVxuICAvL1xuICAvLyAgIGlmIChkcm9wICYmICFlLnRhcmdldC5jbG9zZXN0KCcuZHJvcC5zaG93JykgJiYgIWUudGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLWRyb3Atc3RhdGU9XCIxXCJdJykpIHtcbiAgLy8gICAgIGUucHJldmVudERlZmF1bHQoKVxuICAvLyAgICAgZHJvcC5jbGljaygpXG4gIC8vICAgfVxuICAvL1xuICAvLyB9KVxuICAvL1xuICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1kcm9wXScpLmZvckVhY2goKGRyb3AsIGkpID0+IHtcbiAgLy8gICBkcm9wLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgLy8gICAgIGUucHJldmVudERlZmF1bHQoKVxuICAvL1xuICAvLyAgICAgY29uc3QgZGF0YSA9IGRyb3AuZGF0YXNldC5kcm9wLFxuICAvLyAgICAgICAgICAgZHJvcENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1kcm9wLWNvbnRlbnQ9XCIke2RhdGF9XCJdYCksXG4gIC8vICAgICAgICAgICBzdGF0ZSA9IE51bWJlcihkcm9wLmRhdGFzZXQuZHJvcFN0YXRlKVxuICAvL1xuICAvLyAgICAgc3dpdGNoIChzdGF0ZSkge1xuICAvLyAgICAgICBjYXNlIDA6XG4gIC8vICAgICAgICAgZHJvcENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnc2hvdycpXG4gIC8vICAgICAgICAgYnJlYWtcbiAgLy8gICAgICAgY2FzZSAxOlxuICAvLyAgICAgICAgIGRyb3BDb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKVxuICAvLyAgICAgICAgIGJyZWFrXG4gIC8vICAgICB9XG4gIC8vXG4gIC8vICAgICBkcm9wLmRhdGFzZXQuZHJvcFN0YXRlID0gTnVtYmVyKCFzdGF0ZSlcbiAgLy9cbiAgLy8gICB9KVxuICAvL1xuICAvLyAgIGRyb3AuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gIC8vICAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAvLyAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgLy8gICAgICAgZS50YXJnZXQuY2xpY2soKVxuICAvLyAgICAgfVxuICAvLyAgIH0pXG4gIC8vIH0pXG4gIC8vXG4gIC8vIC8vIHJhdGluZ1xuICAvL1xuICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmF0aW5nJykuZm9yRWFjaCgocmF0aW5nLCBpKSA9PiB7XG4gIC8vICAgY29uc3QgdmFsdWUgPSBOdW1iZXIocmF0aW5nLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXN0YXJzXScpLmRhdGFzZXQuc3RhcnMpXG4gIC8vXG4gIC8vICAgcmF0aW5nLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdGFyJykuZm9yRWFjaCgoc3RhciwgaykgPT4ge1xuICAvLyAgICAgaWYgKGsgPCB2YWx1ZSkge1xuICAvLyAgICAgICBzdGFyLmNsYXNzTGlzdC5hZGQoJ3N0YXJfZmlsbCcpXG4gIC8vICAgICB9XG4gIC8vICAgfSlcbiAgLy8gfSlcbiAgLy9cbiAgLy8gZnVuY3Rpb24gcHJldkFsbChlbGVtZW50KSB7XG4gIC8vICAgdmFyIHJlc3VsdCA9IFtdO1xuICAvL1xuICAvLyAgIHdoaWxlIChlbGVtZW50ID0gZWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKVxuICAvLyAgICAgICByZXN1bHQucHVzaChlbGVtZW50KTtcbiAgLy8gICByZXR1cm4gcmVzdWx0O1xuICAvLyB9XG4gIC8vXG4gIC8vIGZ1bmN0aW9uIG5leHRBbGwoZWxlbWVudCkge1xuICAvLyAgIHZhciByZXN1bHQgPSBbXTtcbiAgLy9cbiAgLy8gICB3aGlsZSAoZWxlbWVudCA9IGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nKVxuICAvLyAgICAgICByZXN1bHQucHVzaChlbGVtZW50KTtcbiAgLy8gICByZXR1cm4gcmVzdWx0O1xuICAvLyB9XG4gIC8vXG4gIC8vIGZ1bmN0aW9uIHN0YXJGb2N1cyhzdGFyKSB7XG4gIC8vICAgc3Rhci5jbGFzc0xpc3QuYWRkKCdzdGFyX2hvdmVyJylcbiAgLy9cbiAgLy8gICBwcmV2QWxsKHN0YXIpLmZvckVhY2goKGVsLCBrKSA9PiB7XG4gIC8vICAgICBlbC5jbGFzc0xpc3QuYWRkKCdzdGFyX2hvdmVyJylcbiAgLy8gICB9KVxuICAvL1xuICAvLyAgIG5leHRBbGwoc3RhcikuZm9yRWFjaCgoZWwsIGspID0+IHtcbiAgLy8gICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXJfaG92ZXInKVxuICAvLyAgIH0pXG4gIC8vIH1cbiAgLy9cbiAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN0YXInKS5mb3JFYWNoKChzdGFyLCBpKSA9PiB7XG4gIC8vICAgc3Rhci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKGUpID0+IHtcbiAgLy8gICAgIHN0YXJGb2N1cyhzdGFyKVxuICAvLyAgIH0pXG4gIC8vXG4gIC8vICAgc3Rhci5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIChlKSA9PiB7XG4gIC8vICAgICBzdGFyRm9jdXMoc3RhcilcbiAgLy8gICB9KVxuICAvL1xuICAvLyAgIHN0YXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIChlKSA9PiB7XG4gIC8vICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3Rhcl9ob3ZlcicpLmZvckVhY2goKGVsLCBrKSA9PiB7XG4gIC8vICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXJfaG92ZXInKVxuICAvLyAgICAgfSlcbiAgLy8gICB9KVxuICAvL1xuICAvLyAgIHN0YXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAvLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIC8vICAgICBzdGFyLmNsYXNzTGlzdC5hZGQoJ3N0YXJfZmlsbCcpXG4gIC8vXG4gIC8vICAgICBwcmV2QWxsKHN0YXIpLmZvckVhY2goKGVsLCBrKSA9PiB7XG4gIC8vICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ3N0YXJfZmlsbCcpXG4gIC8vICAgICB9KVxuICAvL1xuICAvLyAgICAgbmV4dEFsbChzdGFyKS5mb3JFYWNoKChlbCwgaykgPT4ge1xuICAvLyAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdzdGFyX2ZpbGwnKVxuICAvLyAgICAgfSlcbiAgLy8gICB9KVxuICAvL1xuICAvLyAgIHN0YXIuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gIC8vICAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAvLyAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgLy8gICAgICAgc3Rhci5jbGljaygpXG4gIC8vICAgICB9XG4gIC8vICAgfSlcbiAgLy8gfSlcblxuICAvLyBzZWxlY3RcbiAgLy8gJCgnc2VsZWN0JykubmljZVNlbGVjdCgpO1xuXG4gIC8vIHNlbGVjdFxuICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QnKS5mb3JFYWNoKChzZWxlY3QsIGkpID0+IHtcbiAgLy8gICBuZXcgQ3VzdG9tU2VsZWN0KHtcbiAgLy8gICAgIGVsZW06IHNlbGVjdFxuICAvLyAgIH0pO1xuICAvLyB9KVxuXG4gIC8vIG1vZGFsc1xuICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1tb2RhbC1vcGVuXScpLmZvckVhY2goKHRyaWdnZXIsIGkpID0+IHtcbiAgLy8gICB0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgLy8gICAgIGUucHJldmVudERlZmF1bHQoKVxuICAvL1xuICAvLyAgICAgY29uc3QgdCA9IGUudGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLW1vZGFsLW9wZW5dJyksXG4gIC8vICAgICAgICAgICBkYXRhID0gdC5kYXRhc2V0Lm1vZGFsT3BlbixcbiAgLy8gICAgICAgICAgIG1vZGFsRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLW1vZGFsPVwiJHtkYXRhfVwiXWApXG4gIC8vXG4gIC8vICAgICBsZXQgbW9kYWxDb250ZW50ID0gbW9kYWxFbGVtZW50LmlubmVySFRNTFxuICAvL1xuICAvLyAgICAgaWYgKGRhdGEgPT0gJ2dhbGxlcnknKSB7XG4gIC8vICAgICAgIG1vZGFsQ29udGVudCA9IHQuaW5uZXJIVE1MXG4gIC8vICAgICB9XG4gIC8vXG4gIC8vICAgICBsZXQgbW9kYWwgPSBuZXcgdGluZ2xlLm1vZGFsKHtcbiAgLy8gICAgICAgY2xvc2VNZXRob2RzOiBbJ292ZXJsYXknLCAnZXNjYXBlJ10sXG4gIC8vICAgICAgIG9uQ2xvc2U6IGZ1bmN0aW9uKCkge1xuICAvLyAgICAgICAgIHRoaXMucmVtb3ZlKClcbiAgLy8gICAgICAgfSxcbiAgLy8gICAgICAgY3NzQ2xhc3M6IG1vZGFsRWxlbWVudC5jbGFzc0xpc3RcbiAgLy8gICAgIH0pO1xuICAvL1xuICAvLyAgICAgbW9kYWwuc2V0Q29udGVudChtb2RhbENvbnRlbnQpXG4gIC8vICAgICBtb2RhbC5vcGVuKClcbiAgLy9cbiAgLy8gICAgIGNvbnN0IGZvcm1zID0gbW9kYWwubW9kYWxCb3hDb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Zvcm0nKVxuICAvL1xuICAvLyAgICAgdHJ5IHtcbiAgLy8gICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19jbG9zZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgLy8gICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgLy8gICAgICAgICBtb2RhbC5jbG9zZSgpXG4gIC8vICAgICAgIH0pXG4gIC8vICAgICB9IGNhdGNoIChlKSB7XG4gIC8vXG4gIC8vICAgICB9XG4gIC8vICAgfSlcbiAgLy8gfSlcblxuXG59KSh3aW5kb3cpO1xuIl19
