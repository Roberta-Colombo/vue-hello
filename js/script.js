const {createApp} = Vue 

createApp({
    data() {
        return {
            message: 'Ciao, sto usando Vue',
            image: './img/vue-logo.png',
            myImg: 'my-img',
            colorClass: 'green'
        }    
    },
    methods: {
        changeColor() {
            this.colorClass = 'blue';            
        }
    } 
}).mount('#container')