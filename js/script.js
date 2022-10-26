const {createApp} = Vue 

createApp({
    data() {
        return {
            message: 'Ciao, sto usando Vue',
            image: './img/vue-logo.png'
        }
    }
}).mount('#container')