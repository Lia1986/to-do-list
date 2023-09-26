import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
    completedTasks: [],
  },
  getters: {
    getTasks(state) {
      return state.tasks;
    },
    getCompletedTasks(state) {
      return state.completedTasks;
    },
  },
  mutations: {
    setCompletedTask(state, data) {
      const item = state.tasks.findIndex((obj) => obj.id === data.id);
      const i = state.completedTasks.findIndex((obj) => obj.id === data.id);
      if (item > -1 && i === -1) {
        data.status = "completed";
        state.completedTasks.push(data);
      }
    },
    setTask(state, data) {
      state.tasks.push(data);
    },
    removeTask(state, data) {
      const item = state.tasks.findIndex((obj) => obj.id === data.id);
      const i = state.completedTasks.findIndex((obj) => obj.id === data.id);
      if (item > -1) {
        state.tasks.splice(item, 1);
        if (i > -1) {
          state.completedTasks.splice(i, 1);
        }
      }
    },
  },
  actions: {
    addTask({ commit }, data) {
      commit("setTask", data);
    },
    addCompletedTask({ commit }, data) {
      commit("setCompletedTask", data);
    },
    removeTask({ commit }, data) {
      commit("removeTask", data);
    },
  },
  modules: {},
});
