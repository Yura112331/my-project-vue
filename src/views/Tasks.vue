<template lang="pug">
.body-content
  h2 TASKS
  .home
    .add-new(v-on:click="showNew()")
      button.add Add new task 
  TaskModal(v-show="isShow", v-on:removeNew="removeNew()")
  ol
    li(v-for="(task, index) in tasks" :class="{ 'enable': task.enableClass, 'animtask': task.animationClass }" v-on:click="showChange(task)")
      .display
       h3 {{ index+1 }}. {{ task.name }} 
       p {{ task.title }}
      button(v-on:click.prevent="removeTask(index)") Remove
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TaskModal from "@/modals/TaskModals.vue";
export default defineComponent({
  name: "Tasks",
  props: ["tasks"],

  data() {
    return {
      isShow: false,
      nameTask: "",
      titleTask: "",
      enableClass: false,
      animationClass: false,
    };
  },
  mounted() {
    this.tasks.forEach((item: any, index: number) => {
      setTimeout(() => {
        item.enableClass = true;
        item.animationClass = false;
      }, index * 500);
      item.enableClass = false;
      item.animationClass = false;
    });
  },
  components: { TaskModal },
  methods: {
    showNew() {
      this.isShow = true;
    },
    removeNew() {
      this.isShow = false;
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
  .add {
    background-color: rgb(221, 184, 115);
    border: none;
    border-radius: 5px;
    color: black;
    transition-duration: 0.4s;
    cursor: pointer;
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
    h3 {
      font-family: Helvetica;
      font-size: 23px;
      color: #131313;
      font-weight: 600;
      margin-bottom: 5px;
    }
    p {
      font-family: Helvetica;
      font-size: 16px;
      color: #131313;
      line-height: 20px;
      margin-left: 15px;
    }
    button {
      background-color: red;
      border: none;
      color: white;
      text-align: center;
      text-decoration: none;
      font-size: 16px;
      margin: 4px 2px;
      transition-duration: 0.4s;
      cursor: pointer;
      border-radius: 7px;
      height: 30px;
    }
    button:hover {
      background-color: black;
      color: white;
    }
  }
  .enable {
    .display {
      animation: font 3s reverse;
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
