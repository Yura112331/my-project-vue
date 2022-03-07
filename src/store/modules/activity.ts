import ActivityI from "../../types/InterfacesActivity";
import { Module } from "vuex";

const store: Module<any, any> = {
  namespaced: true,
  state: {
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
  getters: {
    getActivity: (state: any) => {
      return state.activity;
    },

    getImgs: (state: any, getters: any) => {
      const img: string[] = [];
      for (const msgItem of getters.getActivity) {
        if ("imgs" in msgItem) {
          for (const imgItem of msgItem.imgs) {
            img.push(imgItem);
          }
        }
      }
      return img;
    },
  },
};
export default store;
