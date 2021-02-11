    const app = {
        data() {
            return {
                shirts: [{
                        image: './images/whitelogoteefront_1024x1024.png',
                        done: false
                    },
                    {
                        image: './images/white3front_1024x1024.png',
                        done: false
                    },
                    {
                        image: './images/resizedwhiteteelarge_1024x1024.png',
                        done: false
                    }
                ]
                
            }
        },
        methods: {
            toggleDone(index) {
                this.shirts[index].done = !this.shirts[index].done
            }
        },
        computed: {
            countUndone() {
                return this.shirts.filter( t => t.done ).length
            }
        }
    }

    Vue.createApp(app).mount('#app')