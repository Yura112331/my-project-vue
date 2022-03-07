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
  },
  actions: {
  },
  modules: {
    tasksModule: tasksStore,
    activityModule: activityStore
  },
})