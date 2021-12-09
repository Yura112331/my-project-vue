<template lang="pug">
.body-content
  h2 KANBAN
  .kanban
    h3 TO DO
      .todo(v-for="(task, index) in tasks") 
        p {{task.title}}
        .data Date of completion {{task.data}}
    h3 In Progress
      .inprogress(v-for="(task, index) in tasks") 
    h3 Done
      .done(v-for="(task, index) in tasks") 
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: ["tasks"],
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
    .todo {
      background-color: rgb(235, 231, 225);
      margin-top: 10px;
      padding: 10px;
      border-radius: 5px;
      p {
        text-align: start;

        width: 120px;
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
