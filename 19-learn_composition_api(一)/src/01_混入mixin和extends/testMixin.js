export const testMixin = {
    data() {
        return {
            counter: 0,
            message: 'Hello Vue3!'
        }
    },
    created() {
        console.log('我是 testMixin 里面的 created');
    },
    methods: {
        btnClic() {
            console.log('我是 testMixin 里面的 btnClic');
        }
    }
}