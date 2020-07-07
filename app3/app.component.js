// Define a new component called button-counter
Vue.component('button-counter', {
    data: function () {
      return {
        count: 0
      }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
  })
  
  new Vue({ el: '#components-demo' })
    
  var buttoncountdata = {
    count: 0
  }
  Vue.component('button-counter', {  
    data: function () {
      return buttoncountdata
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
  })
  
  new Vue({ el: '#components-demo2' })
  