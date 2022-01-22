<template lang="pug">
.body-content
  h2 KANBAN
    input(type='search' v-model='search' placeholder='Search name..')
  .task-header
    .head-item(v-for="(column, i) in kanban" :key="'column_'+i")
      p.headCaption {{column.name}}
      span.headCaptionCount Cards count: {{taskLength(column.filter)}}
  .task-body
    .task-item(
      :class="{dropped: checkItems(toDoList)}"
      @dragenter.prevent
      @dragover.prevent
      @drop="onDropToDo($event)")
      p.dropCaption(v-if="checkItems(toDoList)") Drop here...
      div(v-for="(item, i) in toDoList" :key="'col1'+i" draggable="true" @dragstart="onDrag($event, item.listIndex)")
        .status
          p {{ item.name }}
          .data Date of completion {{ item.dataEnd }}
          button.details(v-on:click="taskDetails(item)") Details
    .task-item(
      :class="{dropped: checkItems(inProgressList)}"
      @dragenter.prevent
      @dragover.prevent
      @drop="onDropInprogress($event)")
        p.dropCaption(v-if="checkItems(inProgressList)") Drop here...
        div(v-for="(item, i) in inProgressList" :key="'col2'+i" draggable="true" @dragstart="onDrag($event, item.listIndex)")
          .status
            p {{ item.name }}
            .data Date of completion {{ item.dataEnd }}
            button.details(v-on:click="taskDetails(item)") Details
    .task-item(
      :class="{dropped: checkItems(doneList)}"
      @dragenter.prevent
      @dragover.prevent
      @drop="onDropDone($event)")
        p.dropCaption(v-if="checkItems(doneList)") Drop here...
        div(v-for="(item, i) in doneList" :key="'col3'+i")
          .status
            p {{ item.name }}
            .data Date of completion {{ item.dataEnd }}
            button.details(v-on:click="taskDetails(item)") Details
  TaskDetailsModal(
    v-on:closeDetails="closeDetails()",
    :isOpen="isOpen"
    :taskDetails="taskDescription"
    @saveTask="saveTask($event)"
    )
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { status } from "../enums/EnumStatus";
import TaskModal from "../modals/TaskModals.vue";
import TaskDetailsModal from "../modals/TaskDetailsModal.vue";
import TasksI from "@/types/InterfacesTasks";
export default defineComponent({
  props: ['tasks'],
  data() {
    return {
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
      toDoList: [] as Array<TasksI>,
      inProgressList: [] as Array<TasksI>,
      doneList: [] as Array<TasksI>,
      isOpen: false,
      taskDescription: {} as TasksI,
      search: "",
      timeafter: "",
      timebefore: "",
    };
  },
  components: {
    TaskModal,
    TaskDetailsModal,
  },
  mounted() {
    this.createListsData();
  },
   beforeUnmount() {
    this.$emit('tasksGlobal', this.tasks);
  },
  methods: {
    taskLength(status: status) {
      return this.getFilteredArray(status).length;
    },
    checkItems(items: Array<TasksI>) {
      return !items.length;
    },
    onDropToDo(e: DragEvent) {
      if (e.dataTransfer) {
        const itemDragIndex = parseInt(e.dataTransfer.getData("dragItem"));
        this.tasks[itemDragIndex].status = status.todo;
        this.createListsData();
      }
    },
    onDropInprogress(e: DragEvent) {
      if (e.dataTransfer) {
        const itemDragIndex = parseInt(e.dataTransfer.getData("dragItem"));
        this.tasks[itemDragIndex].status = status.inprogress;
        this.createListsData();
      }
    },
    onDrag(e: DragEvent, value: string) {
      if (e.dataTransfer) {
        e.dataTransfer.dropEffect = "move";
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("dragItem", value);
      }
    },
    onDropDone(e: DragEvent) {
      if (e.dataTransfer) {
        const itemDragIndex = parseInt(e.dataTransfer.getData("dragItem"));
        this.tasks[itemDragIndex].status = status.done;
        this.createListsData();
      }
    },
    createListsData() {
      this.toDoList = this.getFilteredArray(status.todo);
      this.inProgressList = this.getFilteredArray(status.inprogress);
      this.doneList = this.getFilteredArray(status.done);
    },
    taskDetails(item: TasksI) {
      this.taskDescription = item;
      this.isOpen = true;
    },
    closeDetails() {
      this.isOpen = false;
    },
    saveTask(item: TasksI) {
       this.tasks.forEach((task: TasksI) => {
         if (task.id === this.taskDescription.id) {
          task.title = item.title
          task.dataEnd = item.dataEnd
          task.name = item.name
         }
       });
    },
    getFilteredArray(status: status) {
      return this.tasks.filter((element: any, key: number) => {
        element.listIndex = key;
        return element.status === status;
      });
    },
    
  },
});
</script>
<style lang="scss" scoped>
@import "../assets/style/components/BodyContent.scss";

.body-content {
  padding: 0px 10px;
  h2 {
    text-align: center;
    font-family: Helvetica;
    font-size: 20px;
    color: #131313;
    font-weight: 600;
  }

  .task-header,
  .task-body {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  .task-header {
    .head-item {
      p {
        font-size: 18px;
        text-align: center;
        margin-bottom: 20px;
        font-weight: 600;
      }
      .headCaptionCount {
        text-align: center;
        font-family: Helvetica;
        font-size: 15px;
        color: #131313;
        background: burlywood;
        padding: 5px 10px;
      }
    }
  }
}

.task-body {
  .task-item {
    min-width: 30%;
    margin: 0 10px;

    &.dropped {
      margin-top: 1rem;
      background-color: #ffe;
      border: 0.1rem dashed #cccccc;
      align-items: center;
      transition: 0.3s;
      &:hover {
        border: 0.1rem dashed silver;
        background-color: #fffffc;
      }
    }

    div {
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
        button {
          background-color: rgb(91, 137, 163);
          border: none;
          color: white;
          text-align: center;
          text-decoration: none;
          font-size: 10px;
          margin: 10px 6px 0px;
          transition-duration: 0.4s;
          cursor: pointer;
          border-radius: 7px;
          height: 17px;
        }
        button:hover {
          background-color: black;
          color: white;
        }
      }
    }
  }
}

.kanban {
  display: flex;
  justify-content: space-around;
  max-width: 100%;
  margin: 0px 25px 0px 20px;
}
</style>
