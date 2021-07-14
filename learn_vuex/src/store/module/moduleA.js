export default {

    namespaced: true,
    state() {
        return {
            aCount: 100
        }
    },
    getters: {
        getACount(state, getters, rootstate, rootgetter) {
            console.log(rootgetter);
            return state.aCount * 2 + rootstate.count * 10
        }
    },
    mutations: {
        changeACount(state, payload) {
            state.aCount++;
        }
    },
    actions: {
        delayChangeACount(context, payload) {
            console.log(context, payload);
            setTimeout(_ => {
                context.commit('changeACount', typeof payload === 'object' ? payload.num : payload)
            }, 1000)
        }
    },
    modules: {}
}