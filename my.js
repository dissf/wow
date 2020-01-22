// register modal component
Vue.component('modal', {
  template: '#modal-template'
})

// start app
new Vue({
  el: '#app',
  data: {
    inputValue: '',
    name:'',
    email:'',
    selected:'',
    showModal: false
  },
})
$(document).on("ready", function() {
  $(".regular").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            dots: true
          }
        }
      ]
    });
    });
//validatsiya
