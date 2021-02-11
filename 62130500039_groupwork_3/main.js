    const app = {
        data() {
            return {
                shirts: [{
                        image: '//cdn.shopify.com/s/files/1/0521/0400/3735/products/whitelogoteefront_1024x1024.png?v=1612491469',
                        done: false
                    },
                    {
                        image: '//cdn.shopify.com/s/files/1/0521/0400/3735/products/white3front_1024x1024.png?v=1612492454',
                        done: false
                    },
                    {
                        image: '//cdn.shopify.com/s/files/1/0521/0400/3735/products/resizedwhiteteelarge_1024x1024.png?v=1612490593',
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