<template lang="pug">
.modal-details(@click.self="$emit('closeDetails')" v-if="isOpen")
    .modal
        h2 Details Tasks
        .form
          .name(v-if="show") Name: {{taskDetails.name}}
          .text(v-if="!show" @change="handleChange") Name: 
            textarea(v-model='editTask.name')
        .form
          .status(v-if="show") Status: {{taskDetails.status}}
        .form
          .data(v-if="show" ) Deadline: {{taskDetails.dataEnd}}
          .text(v-if="!show" @change="handleChange") Deadline: 
            input(v-model='editTask.dataEnd'  type="date" min="2021-12-21", max="2022-12-31" required)
        .form
          .title(v-if="show" @change="handleChange") Description: {{taskDetails.title}}
          .text(v-if="!show" @change="handleChange") Description: 
            textarea(v-model='editTask.title')

        .button-form
          button.add-task(v-if="show" v-on:click="$emit('closeDetails')") Cancle
          button.add-task(v-on:click="editShow()" v-if="show") Edit
          button.add-task(v-if="!show" @click="cancleForm()") Cancle
          button.add-task(v-show="!show" @click="saveTask()") Save
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "TaskDetailsModal",
  props: ["taskDetails", "isOpen"],
  data() {
    return {
      show: true,
      editTask: {
        name: "",
        title: "",
        dataEnd: "",
      },
    };
  },
  methods: {
    cancleForm() {
      this.show = true;
    },
    saveTask() {
      this.show = true;
      this.$emit('saveTask', this.editTask);
      this.$emit('closeDetails');
    },
    editShow() {
      this.show=!this.show;
      this.editTask.title = this.taskDetails.title;
      this.editTask.dataEnd = this.taskDetails.dataEnd;
      this.editTask.name = this.taskDetails.name;
      this.id = this.tasks.length+1;
    }
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
        background-color: rgb(124, 164, 209);
        padding: 5px;
        border-radius: 5px;

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
    .form-edit {
       display: flex;
      justify-content: space-between;
      width: 400px;
      height: 100%;
      background-color: rgb(124, 164, 209);
      margin-bottom: 10px;
      border-radius: 5px;
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