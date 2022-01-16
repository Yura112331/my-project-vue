<template lang="pug">
.modal-details(@click.self="$emit('closeDetails')")
    .modal
        h2 Details Tasks
        .form
          .name(v-if="show") Name: {{name}}
          .text(v-if="!show" @change="handleChange") Name: 
            textarea(v-model='editTask.name')
        .form
          .status(v-if="show") Status: {{status}}
          .text(v-if="!show" @change="handleChange" ) Status: 
            textarea(v-model='editTask.name')  
        .form
          .data(v-if="show" ) Deadline: {{data}}
          .text(v-if="!show" @change="handleChange") Deadline: 
            input(v-model='editTask.data'  type="date" min="2021-12-21", max="2022-12-31" required)
        .form
          .title(v-if="show" @change="handleChange") Description: {{title}}
          .text(v-if="!show" @change="handleChange") Description: 
            textarea(v-model='editTask.title')

        .button-form
          button.add-task(v-on:click="show=!show" v-if="show") Edit
          button.add-task(v-if="!show" @click="cancleForm()") Cancle
          button.add-task(v-show="!show" @click="") Save
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "TaskDetailsModal",
  props: {
    name: String,
    status: String,
    data: String,
    title: String,
    isShow: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      show: true,
      editTask: {
        name: "",
        title: "",
        data: "",
        status: "",
      },
    };
  },
  methods: {
    cancleForm() {
      this.show = true;
    },
  },
});
</script>
<style lang="scss">
.modal-details {
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
    padding: 15px 40px;

    h2 {
      text-align: center;
      font-family: Helvetica;
      font-size: 20px;
      color: #131313;
      font-weight: 600;
      margin: 5px 0px 25px;
    }

    .form {
      display: flex;
      justify-content: space-between;
      width: 400px;
      height: 100%;
      background-color: rgb(124, 164, 209);
      margin-bottom: 10px;
      padding: 5px;
      border-radius: 5px;

      .name,
      .status,
      .data,
      .title {
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: Helvetica;
        font-size: 16px;
        color: #131313;
        height: 100%;
      }
      .name {
        font-weight: 600;
        font-size: 25px;
      }
      .title {
        font-size: 20px;
      }
      .text {
        padding: 5px 10px;
        display: flex;
        align-items: center;
        height: 100%;
        font-weight: 600;
        font-size: 25px;
        textarea, input {
          height: 100%;
          padding: 12px 20px;
          box-sizing: border-box;
          border: 2px solid #ccc;
          border-radius: 4px;
          background-color: #f8f8f8;
          font-size: 16px;
          resize: none;
          margin-left: 10px;
        }
      }
    }

    .button-form {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      button {
        width: 80px;
        height: 40px;
        background-color: rgb(73, 148, 85);
        border: none;
        border-radius: 5px;
        color: black;
        transition-duration: 0.4s;
        font-family: Helvetica;
        font-size: 20px;
        cursor: pointer;
        margin: 0px 20px;
      }
      button:hover {
        background-color: black;
        color: white;
      }
    }
  }
}
</style>
