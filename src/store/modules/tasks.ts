import TasksI from "../../types/InterfacesTasks";
import { status } from "../../enums/EnumStatus";
import { Module } from "vuex";

const store: Module<any, any> = {
  namespaced: true,
  state: {
    tasks: [
      {
        name: "Lifecycle hooks",
        title: "Explore lifecycle hooks",
        enableClass: false,
        animationClass: false,
        status: status.done,
        dataEnd: "2021-12-02",
        dataCreate: "2021-12-01",
        id: 1,
      },
      {
        name: "Lesson 9",
        title: "Study the documentation for lesson 9",
        enableClass: false,
        animationClass: false,
        status: status.inprogress,
        dataEnd: "2021-12-10",
        dataCreate: "2021-12-01",
        id: 2,
      },
      {
        name: "Lesson 9",
        title: "Make a task for the 9th lesson",
        enableClass: false,
        animationClass: false,
        status: status.todo,
        dataEnd: "2021-12-10",
        dataCreate: "2021-12-01",
        id: 3,
      },
    ] as Array<TasksI>,
  },
  mutations: {
    addNewTask(state, payload) {
      state.tasks.push(payload);
    },
    removeTask(state, i: number) {
      state.tasks.splice(i, 1);
    },
  },
};
export default store;

