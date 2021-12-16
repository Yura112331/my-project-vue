<template lang="pug">
.body-content
  h2 KANBAN
  .kanban
    .column(v-for="(item, i) in kanban" :key="'status_' + i")
      h3 {{item.name}}
      .task(v-for="(task, i) in filteredTask(item.filter)")
        .status
          p {{task.title}}
          .data Date of completion {{task.data}}
    
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { status } from "../enums/EnumStatus";
import KanbanI from "../types/InterfacesTasks";
export default defineComponent({
  props: ["tasks"],
  data() {
    return {
      kanban: [
        {
          name: 'To Do',
          filter: status.todo,
        },
        {
          name: 'In Progress',
          filter: status.inprogress,
        },
        {
          name: 'Done',
          filter: status.done,
        },
      ],
    };
  },
  methods: {
    filteredTask(filteredStatus: status): Array<KanbanI> {
      return this.tasks.filter((task: any) => {
        return task.status === filteredStatus
      })
    }
  }
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
