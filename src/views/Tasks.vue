<template lang="pug">
.body-content
  h2 TASKS
  form(@submit="checkForm")
    input(
      v-model="nameTask", 
      type="text", 
      placeholder="Name Tasks", 
      required
      )
    input(
      v-model="titleTask",
      type="text",
      placeholder="Description Tasks",
      required
    )
    .button-form
      button Add
  ol
    li(v-for="(task, index) in tasks")
      .display
        h3 {{ task.id }}. {{ task.name }}
        p {{ task.title }}
      button(v-on:click.prevent="removeTask(index)") Remove
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TasksI from "../types/InterfacesTasks";

export default defineComponent({
  name: "Tasks",
  data() {
    return {
      tasks: [] as Array<TasksI>,
      nameTask: "",
      titleTask: "",
      hasError: false,
    };
  },

  methods: {
    checkForm(e: any) {
      if (this.nameTask && this.titleTask) {
        this.addTask();
      }
      e.preventDefault();
    },
    addTask() {
      this.tasks.push({
        id: this.tasks.length + 1,
        name: this.nameTask,
        title: this.titleTask,
        isComplete: false,
      });
      this.nameTask = "";
      this.titleTask = "";
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
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 350px;
    height: 80px;

    input {
      font-family: Helvetica;
      font-size: 16px;
      color: #131313;
      border: 1px solid #bdbdbd;
      border-radius: 5px;
      padding: 3px 5px;
      margin-bottom: 8px;
    }

    input:focus {
      color: #212529;
      background-color: #fff;
      border-color: #bdbdbd;
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
    }

    input:valid {
      border: 1px solid black;
      box-shadow: 0 0 0 0.2rem rgba(0, 0, 0, 0.25);
    }

    .button-form {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      width: 150px;

      button {
        width: 70px;
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
  }

  ol {
    margin-top: 25px;
    width: 100%;
    li {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      height: auto;
      background-color: rgb(212, 194, 169);
      border: 1px solid grey;
      border-radius: 10px;
      padding: 10px;

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
        margin-left: 25px;
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