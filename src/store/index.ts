import { createStore } from 'vuex';
import {status} from "../enums/EnumStatus";
import VuexPersist from 'vuex-persist'
import tasksStore from './modules/tasks'
import activityStore from './modules/activity'

const vuexLocal = new VuexPersist({
  storage: window.localStorage,
});

export default createStore({
  plugins: [vuexLocal.plugin],
  state: {
    notification: 3,
    kanban: [
      {
        name: "To Do",
        filter: status.todo,
      },
      {
        name: "In Progress",
        filter: status.inprogress,
      },
      {
        name: "Done",
        filter: status.done,
      },
    ],
    
  },
  mutations: {
    indexNotification(state, index: number) {
      state.notification = index
    }
  },
  getters: {
    notification(state) {
      return state.notification
    },
  },
  actions: {
  },
  modules: {
    tasksModule: tasksStore,
    activityModule: activityStore
  },
})