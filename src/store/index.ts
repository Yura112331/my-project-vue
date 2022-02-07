import { createStore } from 'vuex';
import TasksI from "../types/InterfacesTasks";
import ActivityI from "../types/InterfacesActivity";
import {status} from "../enums/EnumStatus";

export default createStore({
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
    activity: [
      {
        icon: "check-mark",
        text: "Darika Samak mark as done Listing on Product Hunt so that we can reach as many potential users",
        time: "8:40 PM",
      },
      {
        icon: "message",
        text: "Emilee Simchenko commented on Account for teams and personal in bottom style",
        time: "7:32 PM",
        commit:
          "During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes",
      },
      {
        icon: "download",
        text: "Darika Samak uploaded 4 files on An option to search in current projects or in all projects",
        time: "6:02 PM",
        imgs: ["image.jpg", "img1.png", "img2.png", "img3.png"],
      },
    ] as Array<ActivityI>,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  } 
})