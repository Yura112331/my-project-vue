<template lang="pug">
.body-content
  h2 KANBAN
  .kanban
    .column
      h3 To Do
      .task(v-for="(task, index) in tasks")
        .status(v-if="task.status === status.todo")
          p {{task.title}}
          .data Date of completion {{task.data}}
    .column
      h3 In Progress
      .task(v-for="(task, index) in tasks")
        .status(v-if="task.status === status.inprogress")
          p {{task.title}}
          .data Date of completion {{task.data}}
    .column
      h3 Done
      .task(v-for="(task, index) in tasks")
        .status(v-if="task.status === status.done")
          p {{task.title}}
          .data Date of completion {{task.data}}
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { status } from "../enums/EnumStatus";
export default defineComponent({
  props: ["tasks"],
  data() {
    return {
      status,
    };
  },
});
</script>
<style lang="scss" scoped>
@import "../assets/style/components/BodyContent.scss";
.kanban {
  display: flex;
  justify-content: space-around;
  max-width: 100%;
  margin: 0px 25px 0px 20px;
  h3 {
    text-align: center;
    font-family: Helvetica;
    font-size: 20px;
    color: #131313;
    font-weight: 600;
  }
  .task {
    
    margin: 10px;
    width: auto;
    .status {
      background-color: rgb(235, 231, 225);
    margin-top: 10px;
    padding: 10px;
    border-radius: 5px;
      p {
        text-align: start;
        height: auto;
        font-size: 13px;
        font-weight: 200;
      }
      .data {
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        font-size: 11px;
        font-weight: 200;
        opacity: 0.5;
      }
    }
  }
}
</style>
