/**
 * author: Joker
 * creationDate: 2018/2/8
 * usage:
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    name: 'test',
    scale: 100
  },
  getters: {
    upperName: state => {
      return state.name.toUpperCase();
    }
  },
  //mutations全部是同步的
  mutations: {
    increment(state){
      state.count++;
    },
    changeName(state, param){
      state.name = param.name
    },
    changeScale(state, param){
      state.scale = param.scale
    }
  },
  actions: {
    increment(context){
      setTimeout(function () {
        context.commit('increment');
      },2000)
    }
  }
});

export default store;
