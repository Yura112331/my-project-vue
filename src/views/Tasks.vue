<template lang="pug">
.body-content
  h2 Test
  .block(v-for="(item, i) in tasks", :key="'tasks' + i")
    p {{ item.text }}
    .images(v-if="item.imgs")
      img(
        v-for="(img, i1) in item.imgs",
        :src="getImage(img)",
        :key="'tasks-img' + i1",
      )
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Tasks",
  data() {
    return {
      tasks: [
        {
          text: "Keep your to-do list in Salesforce and stay right on top of your deals and accounts. Easily relate every task to records for leads, contacts, campaigns, contracts, and other information that you need. Salesforce gives you different tools to maximize productivity—quick ways to create and update tasks, prefiltered task lists, and task notification options.",
          imgs: ["task-img.jpg", "task-img1.jpg", "task-img.jpg", "task-img1.jpg"],
        },
        {
          text: "Keep your to-do list in Salesforce and stay right on top of your deals and accounts. Easily relate every task to records for leads, contacts, campaigns, contracts, and other information that you need. Salesforce gives you different tools to maximize productivity—quick ways to create and update tasks, prefiltered task lists, and task notification options.",
        },
        {
          
          text: "Keep your to-do list in Salesforce and stay right on top of your deals and accounts. Easily relate every task to records for leads, contacts, campaigns, contracts, and other information that you need. Salesforce gives you different tools to maximize productivity—quick ways to create and update tasks, prefiltered task lists, and task notification options.",
        },
      ],
    };
  },
  methods: {
    getImage(img) {
      return require("@/assets/" + img);
    },
  },
});
</script>



<style scoped lang="scss">
.body-content {
  margin: auto;
  width: 700px;
  height: 540px;
  background: #9dbe60;
  border-radius: 8px;
  padding-left: 30px;

  h2 {
    padding-top: 35px;
    opacity: 0.5;
    font-family: Helvetica;
    font-size: 14px;
    color: #131313;
    width: 45px;
    height: 19px;
    margin: 30px 0px 25px;
    letter-spacing: 1px;

    @media (max-width: 768px) {
      margin: 0px;
      padding-top: 10px;
    }
  }

  .block {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 680px;
    flex-wrap: wrap;
    margin: 25px 0px;

    p {
      font-family: Helvetica;
      font-size: 16px;
      color: #131313;
      line-height: 20px;
      margin: 0px;
      width: 660px;

      @media (max-width: 768px) {
        font-size: 13px;
      }
    }

    .images {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    cursor: pointer;
    width: 500px;
    margin-top: 25px;

    img {
      width: 90px;
      height: 90px;
      border-radius: 8px;
    }
  }
  }
}
</style> 
