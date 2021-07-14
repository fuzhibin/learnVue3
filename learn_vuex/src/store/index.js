import { createStore } from 'vuex'
import moduleA from './module/moduleA'
import moduleB from './module/moduleB'
const store = createStore({
    state() {
        return {
            count: 1,
            name: 'fuzhibin',
            age: 21
        }
    },
    getters: {
        doubleAge(state, getters) {
            return state.age * 2 + getters.doubleCount
        },
        doubleCount(state, getters) {
            return state.count * 2
        }
    },
    mutations: {
        changeCount(state, payload) {
            if (typeof payload === 'object') {
                state.count += payload.num
                return
            }
            state.count += payload
        }
    },
    actions: {
        delayChangeCount(context, payload) {

            setTimeout(_ => {
                context.commit('changeCount', typeof payload === 'object' ? payload.num : payload)
            }, 1000)
        }
    },
    modules: {
        a: moduleA,
        b: moduleB
    }

})
export default store;