(function(root) {

  // svg for all
  svg4everybody()
  scrollTo()

  const sliderOptions = {
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
  }

  document.querySelectorAll('[data-slider]').forEach((slider, i) => {
    const slides = slider.querySelector('[data-slider-slides]'),
          slidesCount = slides.children.length,
          sliderData = slider.dataset.slider,
          options = sliderOptions[sliderData],
          sliderWidth = slider.offsetWidth,
          slideWidth = slides.children[0].offsetWidth,
          slidesCapacity = Math.round(sliderWidth/slideWidth),
          controls = slider.querySelector('[data-slider-controls]'),
          controlsPrev = controls.querySelector('[data-slider-controls-prev]'),
          controlsNext = controls.querySelector('[data-slider-controls-next]'),
          controlsEndIndex = slidesCount - slidesCapacity,
          adaptive = Number(slider.dataset.sliderAdaptive),
          windowWidth = window.innerWidth

    if (slidesCount > slidesCapacity) {
      slider.classList.add('slider_initial')
      const flkty = new Flickity(slides, sliderOptions[slider.dataset.slider]);

      if (controls) {
        controlsPrev
          .addEventListener('click', (e) => {
            e.preventDefault()
            flkty.previous()
          })

        controlsNext
          .addEventListener('click', (e) => {
            e.preventDefault()
            flkty.next()
          })

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
  })

  // modal

  // $('[data-modal]').fancybox({
  //   modal: true
  // })
  $('[data-modal-open]').on('click', (e) => {
    const data = $(e.target).closest('[data-modal-open]').data('modalOpen'),
          modal = $(`[data-modal="${data}"]`)

    $.fancybox.open(modal, {
      modal: true,
      autoFocus: false,
      animationEffect: 'fade'
    })
  })

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
