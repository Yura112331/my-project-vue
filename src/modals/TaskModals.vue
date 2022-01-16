<template lang="pug">
.modal-add(@click.self="$emit('addClose')")
    .modal
        h2 New Tasks
        form(@submit="checkForm")
            input(v-model="nameTask", type="text", placeholder="Name Tasks", required)
            input(
            v-model="titleTask",
            type="text",
            placeholder="Description Tasks",
            required
            )
            input(
            v-model="dataTask",
            type="date",
            min="2021-12-21",
            max="2022-12-31",
            required
            )
        .button-form
            button(v-on:click="addTask()") Add
            button(v-on:click="$emit('addClose')") Close
</template>
<script>
import { defineComponent } from "vue";
import { status } from "../enums/EnumStatus";
export default defineComponent({
  name: "TaskModal",
  props: ['tasks'],
  data() {
    return {
      nameTask: "",
      titleTask: "",
      dataTask: "",
      enableClass: false,
      animationClass: false,
    };
  },
  methods: {
    checkForm(e) {
      if (this.nameTask && this.titleTask && this.dataTask) {
        this.addTask();
      }
      e.preventDefault();
    },
    addTask() {
      this.tasks.push({
        name: this.nameTask,
        title: this.titleTask,
        data: this.dataTask,
        status: status.todo,
        animationClass: true,
      });
      this.nameTask = "";
      this.titleTask = "";
      this.dataTask = "";
      this.animationClass = false;
      this.$emit("addClose");
    },
  },
});
</script>
<style lang="scss">
.modal-add {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;

  .modal {
    background: #97d3f7;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    z-index: 9;
    padding: 20px 50px;

    h2 {
      text-align: center;
      font-family: Helvetica;
      font-size: 20px;
      color: #131313;
      font-weight: 600;
      margin: 5px 0px 25px;
    }

    form {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 350px;
      height: 110px;
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
    }
    .button-form {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      button {
        width: 70px;
        height: 25px;
        background-color: rgb(144, 76, 184);
        border: none;
        border-radius: 5px;
        color: black;
        transition-duration: 0.4s;
        font-family: Helvetica;
        font-size: 16px;
        cursor: pointer;
      }
      button:hover {
        background-color: black;
        color: white;
      }
    }
  }
}
</style>
