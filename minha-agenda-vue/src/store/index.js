import {createStore } from 'vuex'
import moduloLancamentos from './modules/lancamento';

const store = createStore({
    modules: {
        moduloLancamentos
    }
});

export default store;