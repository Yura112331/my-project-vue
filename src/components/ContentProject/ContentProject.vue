<template lang="pug">
section.body
  router-view(:tasks="tasks" @changeIndex="conectEvent" @tasksGlobal="tasks = $event")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TasksI from "../../types/InterfacesTasks";
import {status} from "../../enums/EnumStatus";
export default defineComponent({
  name: "ContentProject",
  data() {
    return {
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
    }
  },
  
  methods: {
    conectEvent(index: any) {
      this.$emit('changeIndexNotification', index);
    },
  }
});
</script>

<style scoped lang="scss">
@import "../../assets/style/helpers/reset.scss";
.body {
  height: calc(100vh - 158px);
  background-color: rgb(214, 206, 206);
  padding-top: 20px;
  @media (max-width: 1024px) {
    padding-top: 1px;
  }
  @media (max-width: 768px) {
    padding: 0px;
    background-color: white;
  }
}
</style>