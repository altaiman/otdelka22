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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJyb290Iiwic3ZnNGV2ZXJ5Ym9keSIsInNjcm9sbFRvIiwic2xpZGVyT3B0aW9ucyIsImNlbGxBbGlnbiIsInBhZ2VEb3RzIiwicHJldk5leHRCdXR0b25zIiwid3JhcEFyb3VuZCIsImNvbnRhaW4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwic2xpZGVyIiwiaSIsInNsaWRlcyIsInF1ZXJ5U2VsZWN0b3IiLCJzbGlkZXNDb3VudCIsImNoaWxkcmVuIiwibGVuZ3RoIiwic2xpZGVyRGF0YSIsImRhdGFzZXQiLCJvcHRpb25zIiwic2xpZGVyV2lkdGgiLCJvZmZzZXRXaWR0aCIsInNsaWRlV2lkdGgiLCJzbGlkZXNDYXBhY2l0eSIsIk1hdGgiLCJyb3VuZCIsImNvbnRyb2xzIiwiY29udHJvbHNQcmV2IiwiY29udHJvbHNOZXh0IiwiY29udHJvbHNFbmRJbmRleCIsImFkYXB0aXZlIiwiTnVtYmVyIiwic2xpZGVyQWRhcHRpdmUiLCJ3aW5kb3dXaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJjbGFzc0xpc3QiLCJhZGQiLCJmbGt0eSIsIkZsaWNraXR5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInByZXZpb3VzIiwibmV4dCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxDQUFDLFVBQVNBLElBQVQsRUFBZTs7QUFFZDtBQUNBQztBQUNBQzs7QUFFQSxNQUFNQyxnQkFBZ0I7QUFDcEIsY0FBVTtBQUNSQyxpQkFBVyxRQURIO0FBRVJDLGdCQUFVLEtBRkY7QUFHUkMsdUJBQWlCLEtBSFQ7QUFJUkMsa0JBQVksSUFKSjtBQUtSQyxlQUFTO0FBTEQ7QUFEVSxHQUF0Qjs7QUFVQUMsV0FBU0MsZ0JBQVQsQ0FBMEIsZUFBMUIsRUFBMkNDLE9BQTNDLENBQW1ELFVBQUNDLE1BQUQsRUFBU0MsQ0FBVCxFQUFlO0FBQ2hFLFFBQU1DLFNBQVNGLE9BQU9HLGFBQVAsQ0FBcUIsc0JBQXJCLENBQWY7QUFBQSxRQUNNQyxjQUFjRixPQUFPRyxRQUFQLENBQWdCQyxNQURwQztBQUFBLFFBRU1DLGFBQWFQLE9BQU9RLE9BQVAsQ0FBZVIsTUFGbEM7QUFBQSxRQUdNUyxVQUFVbEIsY0FBY2dCLFVBQWQsQ0FIaEI7QUFBQSxRQUlNRyxjQUFjVixPQUFPVyxXQUozQjtBQUFBLFFBS01DLGFBQWFWLE9BQU9HLFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBbUJNLFdBTHRDO0FBQUEsUUFNTUUsaUJBQWlCQyxLQUFLQyxLQUFMLENBQVdMLGNBQVlFLFVBQXZCLENBTnZCO0FBQUEsUUFPTUksV0FBV2hCLE9BQU9HLGFBQVAsQ0FBcUIsd0JBQXJCLENBUGpCO0FBQUEsUUFRTWMsZUFBZUQsU0FBU2IsYUFBVCxDQUF1Qiw2QkFBdkIsQ0FSckI7QUFBQSxRQVNNZSxlQUFlRixTQUFTYixhQUFULENBQXVCLDZCQUF2QixDQVRyQjtBQUFBLFFBVU1nQixtQkFBbUJmLGNBQWNTLGNBVnZDO0FBQUEsUUFXTU8sV0FBV0MsT0FBT3JCLE9BQU9RLE9BQVAsQ0FBZWMsY0FBdEIsQ0FYakI7QUFBQSxRQVlNQyxjQUFjQyxPQUFPQyxVQVozQjs7QUFjQSxRQUFJckIsY0FBY1MsY0FBbEIsRUFBa0M7QUFDaENiLGFBQU8wQixTQUFQLENBQWlCQyxHQUFqQixDQUFxQixnQkFBckI7QUFDQSxVQUFNQyxRQUFRLElBQUlDLFFBQUosQ0FBYTNCLE1BQWIsRUFBcUJYLGNBQWNTLE9BQU9RLE9BQVAsQ0FBZVIsTUFBN0IsQ0FBckIsQ0FBZDs7QUFFQSxVQUFJZ0IsUUFBSixFQUFjO0FBQ1pDLHFCQUNHYSxnQkFESCxDQUNvQixPQURwQixFQUM2QixVQUFDQyxDQUFELEVBQU87QUFDaENBLFlBQUVDLGNBQUY7QUFDQUosZ0JBQU1LLFFBQU47QUFDRCxTQUpIOztBQU1BZixxQkFDR1ksZ0JBREgsQ0FDb0IsT0FEcEIsRUFDNkIsVUFBQ0MsQ0FBRCxFQUFPO0FBQ2hDQSxZQUFFQyxjQUFGO0FBQ0FKLGdCQUFNTSxJQUFOO0FBQ0QsU0FKSDs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEO0FBQ0Y7QUFDRixHQS9DRDs7QUFpREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdELENBeE9ELEVBd09HVixNQXhPSCIsImZpbGUiOiJzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24ocm9vdCkge1xuXG4gIC8vIHN2ZyBmb3IgYWxsXG4gIHN2ZzRldmVyeWJvZHkoKVxuICBzY3JvbGxUbygpXG5cbiAgY29uc3Qgc2xpZGVyT3B0aW9ucyA9IHtcbiAgICAnYmFubmVyJzoge1xuICAgICAgY2VsbEFsaWduOiAnY2VudGVyJyxcbiAgICAgIHBhZ2VEb3RzOiBmYWxzZSxcbiAgICAgIHByZXZOZXh0QnV0dG9uczogZmFsc2UsXG4gICAgICB3cmFwQXJvdW5kOiB0cnVlLFxuICAgICAgY29udGFpbjogdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXNsaWRlcl0nKS5mb3JFYWNoKChzbGlkZXIsIGkpID0+IHtcbiAgICBjb25zdCBzbGlkZXMgPSBzbGlkZXIucXVlcnlTZWxlY3RvcignW2RhdGEtc2xpZGVyLXNsaWRlc10nKSxcbiAgICAgICAgICBzbGlkZXNDb3VudCA9IHNsaWRlcy5jaGlsZHJlbi5sZW5ndGgsXG4gICAgICAgICAgc2xpZGVyRGF0YSA9IHNsaWRlci5kYXRhc2V0LnNsaWRlcixcbiAgICAgICAgICBvcHRpb25zID0gc2xpZGVyT3B0aW9uc1tzbGlkZXJEYXRhXSxcbiAgICAgICAgICBzbGlkZXJXaWR0aCA9IHNsaWRlci5vZmZzZXRXaWR0aCxcbiAgICAgICAgICBzbGlkZVdpZHRoID0gc2xpZGVzLmNoaWxkcmVuWzBdLm9mZnNldFdpZHRoLFxuICAgICAgICAgIHNsaWRlc0NhcGFjaXR5ID0gTWF0aC5yb3VuZChzbGlkZXJXaWR0aC9zbGlkZVdpZHRoKSxcbiAgICAgICAgICBjb250cm9scyA9IHNsaWRlci5xdWVyeVNlbGVjdG9yKCdbZGF0YS1zbGlkZXItY29udHJvbHNdJyksXG4gICAgICAgICAgY29udHJvbHNQcmV2ID0gY29udHJvbHMucXVlcnlTZWxlY3RvcignW2RhdGEtc2xpZGVyLWNvbnRyb2xzLXByZXZdJyksXG4gICAgICAgICAgY29udHJvbHNOZXh0ID0gY29udHJvbHMucXVlcnlTZWxlY3RvcignW2RhdGEtc2xpZGVyLWNvbnRyb2xzLW5leHRdJyksXG4gICAgICAgICAgY29udHJvbHNFbmRJbmRleCA9IHNsaWRlc0NvdW50IC0gc2xpZGVzQ2FwYWNpdHksXG4gICAgICAgICAgYWRhcHRpdmUgPSBOdW1iZXIoc2xpZGVyLmRhdGFzZXQuc2xpZGVyQWRhcHRpdmUpLFxuICAgICAgICAgIHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGhcblxuICAgIGlmIChzbGlkZXNDb3VudCA+IHNsaWRlc0NhcGFjaXR5KSB7XG4gICAgICBzbGlkZXIuY2xhc3NMaXN0LmFkZCgnc2xpZGVyX2luaXRpYWwnKVxuICAgICAgY29uc3QgZmxrdHkgPSBuZXcgRmxpY2tpdHkoc2xpZGVzLCBzbGlkZXJPcHRpb25zW3NsaWRlci5kYXRhc2V0LnNsaWRlcl0pO1xuXG4gICAgICBpZiAoY29udHJvbHMpIHtcbiAgICAgICAgY29udHJvbHNQcmV2XG4gICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgZmxrdHkucHJldmlvdXMoKVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgY29udHJvbHNOZXh0XG4gICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgZmxrdHkubmV4dCgpXG4gICAgICAgICAgfSlcblxuICAgICAgICAvLyBpZiAoIXNsaWRlckRhdGEud3JhcEFyb3VuZCkge1xuICAgICAgICAvLyAgIGlmIChmbGt0eS5zZWxlY3RlZEluZGV4ID09PSAwKSB7XG4gICAgICAgIC8vICAgICBjb250cm9sc1ByZXYuZGlzYWJsZWQgPSB0cnVlXG4gICAgICAgIC8vICAgfSBlbHNlIGlmIChmbGt0eS5zZWxlY3RlZEluZGV4ID09PSBjb250cm9sc0VuZEluZGV4KSB7XG4gICAgICAgIC8vICAgICBjb250cm9sc05leHQuZGlzYWJsZWQgPSB0cnVlXG4gICAgICAgIC8vICAgfVxuICAgICAgICAvL1xuICAgICAgICAvLyAgIGZsa3R5Lm9uKCdjaGFuZ2UnLCAoaW5kZXgpID0+IHtcbiAgICAgICAgLy8gICAgIGlmIChpbmRleCA+PSBjb250cm9sc0VuZEluZGV4KSB7XG4gICAgICAgIC8vICAgICAgIGZsa3R5LnNlbGVjdChjb250cm9sc0VuZEluZGV4KVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgIH0pXG4gICAgICAgIC8vIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pXG5cbiAgLy8gLy8gZHJvcFxuICAvL1xuICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIC8vICAgY29uc3QgZHJvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWRyb3Atc3RhdGU9XCIxXCJdJylcbiAgLy9cbiAgLy8gICBpZiAoZHJvcCAmJiAhZS50YXJnZXQuY2xvc2VzdCgnLmRyb3Auc2hvdycpICYmICFlLnRhcmdldC5jbG9zZXN0KCdbZGF0YS1kcm9wLXN0YXRlPVwiMVwiXScpKSB7XG4gIC8vICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgLy8gICAgIGRyb3AuY2xpY2soKVxuICAvLyAgIH1cbiAgLy9cbiAgLy8gfSlcbiAgLy9cbiAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZHJvcF0nKS5mb3JFYWNoKChkcm9wLCBpKSA9PiB7XG4gIC8vICAgZHJvcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIC8vICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgLy9cbiAgLy8gICAgIGNvbnN0IGRhdGEgPSBkcm9wLmRhdGFzZXQuZHJvcCxcbiAgLy8gICAgICAgICAgIGRyb3BDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtZHJvcC1jb250ZW50PVwiJHtkYXRhfVwiXWApLFxuICAvLyAgICAgICAgICAgc3RhdGUgPSBOdW1iZXIoZHJvcC5kYXRhc2V0LmRyb3BTdGF0ZSlcbiAgLy9cbiAgLy8gICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgLy8gICAgICAgY2FzZSAwOlxuICAvLyAgICAgICAgIGRyb3BDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3Nob3cnKVxuICAvLyAgICAgICAgIGJyZWFrXG4gIC8vICAgICAgIGNhc2UgMTpcbiAgLy8gICAgICAgICBkcm9wQ29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93JylcbiAgLy8gICAgICAgICBicmVha1xuICAvLyAgICAgfVxuICAvL1xuICAvLyAgICAgZHJvcC5kYXRhc2V0LmRyb3BTdGF0ZSA9IE51bWJlcighc3RhdGUpXG4gIC8vXG4gIC8vICAgfSlcbiAgLy9cbiAgLy8gICBkcm9wLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAvLyAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgLy8gICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIC8vICAgICAgIGUudGFyZ2V0LmNsaWNrKClcbiAgLy8gICAgIH1cbiAgLy8gICB9KVxuICAvLyB9KVxuICAvL1xuICAvLyAvLyByYXRpbmdcbiAgLy9cbiAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJhdGluZycpLmZvckVhY2goKHJhdGluZywgaSkgPT4ge1xuICAvLyAgIGNvbnN0IHZhbHVlID0gTnVtYmVyKHJhdGluZy5xdWVyeVNlbGVjdG9yKCdbZGF0YS1zdGFyc10nKS5kYXRhc2V0LnN0YXJzKVxuICAvL1xuICAvLyAgIHJhdGluZy5xdWVyeVNlbGVjdG9yQWxsKCcuc3RhcicpLmZvckVhY2goKHN0YXIsIGspID0+IHtcbiAgLy8gICAgIGlmIChrIDwgdmFsdWUpIHtcbiAgLy8gICAgICAgc3Rhci5jbGFzc0xpc3QuYWRkKCdzdGFyX2ZpbGwnKVxuICAvLyAgICAgfVxuICAvLyAgIH0pXG4gIC8vIH0pXG4gIC8vXG4gIC8vIGZ1bmN0aW9uIHByZXZBbGwoZWxlbWVudCkge1xuICAvLyAgIHZhciByZXN1bHQgPSBbXTtcbiAgLy9cbiAgLy8gICB3aGlsZSAoZWxlbWVudCA9IGVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZylcbiAgLy8gICAgICAgcmVzdWx0LnB1c2goZWxlbWVudCk7XG4gIC8vICAgcmV0dXJuIHJlc3VsdDtcbiAgLy8gfVxuICAvL1xuICAvLyBmdW5jdGlvbiBuZXh0QWxsKGVsZW1lbnQpIHtcbiAgLy8gICB2YXIgcmVzdWx0ID0gW107XG4gIC8vXG4gIC8vICAgd2hpbGUgKGVsZW1lbnQgPSBlbGVtZW50Lm5leHRFbGVtZW50U2libGluZylcbiAgLy8gICAgICAgcmVzdWx0LnB1c2goZWxlbWVudCk7XG4gIC8vICAgcmV0dXJuIHJlc3VsdDtcbiAgLy8gfVxuICAvL1xuICAvLyBmdW5jdGlvbiBzdGFyRm9jdXMoc3Rhcikge1xuICAvLyAgIHN0YXIuY2xhc3NMaXN0LmFkZCgnc3Rhcl9ob3ZlcicpXG4gIC8vXG4gIC8vICAgcHJldkFsbChzdGFyKS5mb3JFYWNoKChlbCwgaykgPT4ge1xuICAvLyAgICAgZWwuY2xhc3NMaXN0LmFkZCgnc3Rhcl9ob3ZlcicpXG4gIC8vICAgfSlcbiAgLy9cbiAgLy8gICBuZXh0QWxsKHN0YXIpLmZvckVhY2goKGVsLCBrKSA9PiB7XG4gIC8vICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdzdGFyX2hvdmVyJylcbiAgLy8gICB9KVxuICAvLyB9XG4gIC8vXG4gIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdGFyJykuZm9yRWFjaCgoc3RhciwgaSkgPT4ge1xuICAvLyAgIHN0YXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIChlKSA9PiB7XG4gIC8vICAgICBzdGFyRm9jdXMoc3RhcilcbiAgLy8gICB9KVxuICAvL1xuICAvLyAgIHN0YXIuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoZSkgPT4ge1xuICAvLyAgICAgc3RhckZvY3VzKHN0YXIpXG4gIC8vICAgfSlcbiAgLy9cbiAgLy8gICBzdGFyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoZSkgPT4ge1xuICAvLyAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN0YXJfaG92ZXInKS5mb3JFYWNoKChlbCwgaykgPT4ge1xuICAvLyAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdzdGFyX2hvdmVyJylcbiAgLy8gICAgIH0pXG4gIC8vICAgfSlcbiAgLy9cbiAgLy8gICBzdGFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgLy8gICAgIGUucHJldmVudERlZmF1bHQoKVxuICAvLyAgICAgc3Rhci5jbGFzc0xpc3QuYWRkKCdzdGFyX2ZpbGwnKVxuICAvL1xuICAvLyAgICAgcHJldkFsbChzdGFyKS5mb3JFYWNoKChlbCwgaykgPT4ge1xuICAvLyAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdzdGFyX2ZpbGwnKVxuICAvLyAgICAgfSlcbiAgLy9cbiAgLy8gICAgIG5leHRBbGwoc3RhcikuZm9yRWFjaCgoZWwsIGspID0+IHtcbiAgLy8gICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnc3Rhcl9maWxsJylcbiAgLy8gICAgIH0pXG4gIC8vICAgfSlcbiAgLy9cbiAgLy8gICBzdGFyLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAvLyAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgLy8gICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIC8vICAgICAgIHN0YXIuY2xpY2soKVxuICAvLyAgICAgfVxuICAvLyAgIH0pXG4gIC8vIH0pXG5cbiAgLy8gc2VsZWN0XG4gIC8vICQoJ3NlbGVjdCcpLm5pY2VTZWxlY3QoKTtcblxuICAvLyBzZWxlY3RcbiAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0JykuZm9yRWFjaCgoc2VsZWN0LCBpKSA9PiB7XG4gIC8vICAgbmV3IEN1c3RvbVNlbGVjdCh7XG4gIC8vICAgICBlbGVtOiBzZWxlY3RcbiAgLy8gICB9KTtcbiAgLy8gfSlcblxuICAvLyBtb2RhbHNcbiAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbW9kYWwtb3Blbl0nKS5mb3JFYWNoKCh0cmlnZ2VyLCBpKSA9PiB7XG4gIC8vICAgdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIC8vICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgLy9cbiAgLy8gICAgIGNvbnN0IHQgPSBlLnRhcmdldC5jbG9zZXN0KCdbZGF0YS1tb2RhbC1vcGVuXScpLFxuICAvLyAgICAgICAgICAgZGF0YSA9IHQuZGF0YXNldC5tb2RhbE9wZW4sXG4gIC8vICAgICAgICAgICBtb2RhbEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1tb2RhbD1cIiR7ZGF0YX1cIl1gKVxuICAvL1xuICAvLyAgICAgbGV0IG1vZGFsQ29udGVudCA9IG1vZGFsRWxlbWVudC5pbm5lckhUTUxcbiAgLy9cbiAgLy8gICAgIGlmIChkYXRhID09ICdnYWxsZXJ5Jykge1xuICAvLyAgICAgICBtb2RhbENvbnRlbnQgPSB0LmlubmVySFRNTFxuICAvLyAgICAgfVxuICAvL1xuICAvLyAgICAgbGV0IG1vZGFsID0gbmV3IHRpbmdsZS5tb2RhbCh7XG4gIC8vICAgICAgIGNsb3NlTWV0aG9kczogWydvdmVybGF5JywgJ2VzY2FwZSddLFxuICAvLyAgICAgICBvbkNsb3NlOiBmdW5jdGlvbigpIHtcbiAgLy8gICAgICAgICB0aGlzLnJlbW92ZSgpXG4gIC8vICAgICAgIH0sXG4gIC8vICAgICAgIGNzc0NsYXNzOiBtb2RhbEVsZW1lbnQuY2xhc3NMaXN0XG4gIC8vICAgICB9KTtcbiAgLy9cbiAgLy8gICAgIG1vZGFsLnNldENvbnRlbnQobW9kYWxDb250ZW50KVxuICAvLyAgICAgbW9kYWwub3BlbigpXG4gIC8vXG4gIC8vICAgICBjb25zdCBmb3JtcyA9IG1vZGFsLm1vZGFsQm94Q29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCdmb3JtJylcbiAgLy9cbiAgLy8gICAgIHRyeSB7XG4gIC8vICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fY2xvc2UnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIC8vICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIC8vICAgICAgICAgbW9kYWwuY2xvc2UoKVxuICAvLyAgICAgICB9KVxuICAvLyAgICAgfSBjYXRjaCAoZSkge1xuICAvL1xuICAvLyAgICAgfVxuICAvLyAgIH0pXG4gIC8vIH0pXG5cblxufSkod2luZG93KTtcbiJdfQ==
