<template lang="pug">
.modal-details(@click.self="$emit('closeDetails')" v-if="CalendarShow")
    .modal
        h2 Details Tasks
        .form
         .name Name: {{taskDetails.name}}
        .form
         .status Status: {{taskDetails.status}}
        .form
        .data Deadline: {{taskDetails.dataEnd}}
        .form
         .title Description: {{taskDetails.title}}
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "CalendarDetailsModal",
  props: ["taskDetails", "CalendarShow"],
  data() {
    return {
    };
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
    }
  }
}
</style>