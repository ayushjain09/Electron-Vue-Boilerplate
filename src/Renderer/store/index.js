import { createStore } from 'vuex';

import rootMutations from './mutations.js';
import rootGetters from './getters.js';
import rootActions from './actions.js';

const store = createStore({
    state(){
        return{

        };
    },

    mutations: rootMutations,
    getters: rootGetters,
    actions: rootActions
})

export default store;