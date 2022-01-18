<template lang="pug">
.body-content
  h2 TASKS
  .home
    .add-new(v-on:click="showNew()")
      button.add Add new task 
    TaskModal(v-show="isShow", v-on:addClose="addClose()" :tasks="tasks")
  ol
    li(v-for="(task, index) in tasks" :key="'tasks_'+i" :class="{ 'enable': task.enableClass, 'animtask': task.animationClass }" v-on:click="showChange(task)")
      .display
        .header
          h3 {{ index+1 }}. {{ task.name }} 
          .data Date of creation {{ task.dataCreate }}
          .data Date of completion {{ task.dataEnd }}
        p {{ task.title }}
      button.details(v-on:click="taskDetails(task)") Details
      button(v-on:click.prevent="removeTask(index)") Remove
  TaskDetailsModal( 
    v-on:closeDetails="closeDetails()",
    :isOpen="isOpen"
    :taskDetails="taskDescription"
    @saveTask="saveTask($event)"
  )
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TaskModal from "../modals/TaskModals.vue";
import TasksI from "@/types/InterfacesTasks";
import TaskDetailsModal from "../modals/TaskDetailsModal.vue";
export default defineComponent({
  props: ['tasks'],
  name: "Tasks",
  data() {
    return {
      newTasks: {} as Array<TasksI>,
      isShow: false,
      isOpen: false,
      taskDescription: {} as TasksI,
    };
  },
  mounted() {
    this.tasks.forEach((item: TasksI, index: number) => {
      setTimeout(() => {
        item.enableClass = true;
        item.animationClass = false;
      }, index * 500);
      item.enableClass = false;
      item.animationClass = false;
    });
  },
  components: { 
    TaskModal,
    TaskDetailsModal,
   },
  beforeUnmount() {
    this.$emit('tasksGlobal', this.tasks);
  },
  methods: {
    showNew() {
      this.isShow = true;
    },
    addClose() {
      this.isShow = false;
    },
    showChange() {
      this.newTasks = this.tasks;
    },
    taskDetails(task: TasksI) {
      this.taskDescription = task;
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
    removeTask(index: number) {
      this.tasks.splice(index, 1);
    },
  },
});
</script>

<style scoped lang="scss">
@import "../assets/style/helpers/mixins.scss";
@import "../assets/style/components/BodyContent.scss";
.body-content {
  width: 700px;
  height: auto;
  background: #dbf3ef;
  padding: 0px 30px 30px;
  margin-top: 30px;
  h2 {
    font-size: 18px;
    margin: 5px 0px 25px;
  }
  .add-new {
    width: 100px;
    .add {
      background-color: rgb(221, 184, 115);
      border: none;
      border-radius: 5px;
      color: black;
      transition-duration: 0.4s;
      cursor: pointer;
    }
  }

  button:hover {
    background-color: black;
    color: white;
  }
}
ol {
  margin-top: 25px;
  width: 100%;
  max-height: 450px;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    height: auto;
    background-color: rgb(212, 194, 169);
    border: 1px solid grey;
    border-radius: 10px;
    padding: 15px 30px;

    button {
      background-color: red;
      border: none;
      color: white;
      text-align: center;
      text-decoration: none;
      font-size: 16px;
      margin: 4px 6px;
      transition-duration: 0.4s;
      cursor: pointer;
      border-radius: 7px;
      height: 30px;
    }
    button:hover {
      background-color: black;
      color: white;
    }

    h3 {
      font-family: Helvetica;
      font-size: 23px;
      color: #131313;
      font-weight: 600;
      margin-bottom: 5px;
      width: 100%;
    }
    p {
      font-family: Helvetica;
      font-size: 16px;
      color: #131313;
      line-height: 20px;
      margin-left: 15px;
    }
    .header {
      display: flex;

      .data {
        font-family: Helvetica;
        font-size: 14px;
        width: 125px;
        color: #131313;
      }
    }
  }
  .enable {
    .display {
      animation: font 3s reverse;
      width: 100%;
      @keyframes font {
        50% {
          transform: scale(1.2);
        }
        100% {
          transform: scale(1);
        }
      }
    }
  }
  .animtask {
    animation-name: new;
    animation-timing-function: linear;
    animation-duration: 1s;
    animation-iteration-count: 3;
    @keyframes new {
      50% {
        opacity: 0;
      }
    }
    .display {
      width: 100%;
      margin-right: 20px;
    }
  }
  @media (max-width: 768px) {
    height: auto;
    width: 400px;
  }
  @media (max-width: 425px) {
    width: 265px;
  }
}
</style>
