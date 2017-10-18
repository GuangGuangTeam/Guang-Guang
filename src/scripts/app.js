import Vue from 'vue';

Vue.component('my-component',{
    template : '<div>abc</div>'
})

new Vue({
    el: '#root',
    data: {
        message : 'hello'
    }
})

