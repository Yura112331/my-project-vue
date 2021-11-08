<template lang="pug">
.body-content
  h2 TASKS
  .block(v-for="(item, i) in tasks", :key="'tasks' + i")
    h3 {{ i + 1 + '.' + ' ' + item.name }}
    i(
      :style="{ backgroundImage: 'url(' + require('../assets/' + item.icon + '.png') + ')' }"
    )
    p {{ item.text }}
    .data {{ item.data }}
    .alt {{ item.alt }}
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Tasks",
  data() {
    return {
      tasks: [
        {
          name: "Understand Vue",
          icon: "check-mark",
          text: "Make a project using vue js.",
          data: "24.11.2021",
          alt: "Done",
        },
        {
          name: "Migration",
          icon: "check-mark",
          text: "Transfer data from the old project.",
          data: "24.11.2021",
          alt: "Done",
        },
        {
          name: "Array",
          icon: "check-mark",
          text: "Move Tasks content into an array.",
          data: "25.11.2021",
          alt: "Done",
        },
        {
          name: "GitHub",
          icon: "check-mark",
          text: "Сreate repository on GitHub",
          data: "26.11.2021",
          alt: "Done",
        },
        {
          name: "Delivery of the assignment",
          icon: "mark",
          text: "Unsubscribe for the completed task",
          data: "26.11.2021",
          alt: "In process",
        },
      ],
    };
  },
});
</script>



<style scoped lang="scss">
@import "../assets/style/helpers/variables.scss";
@import "../assets/style/helpers/mixins.scss";
@import "../assets/style/components/BodyContent.scss";

.body-content {
  width: 700px;
  height: 440px;
  background: #c0eee6;
  padding: 30px;

  h2 {
    font-size: 18px;
    margin: 5px 0px 25px;
  }
  
  .block {
    @include flex;
    flex-direction: row;
    width: 680px;
    flex-wrap: wrap;
    margin: 25px 0px;

    h3 {
      margin: 0px;
      width: 100%;
      margin-left: 5px;
      padding-bottom: 10px;

      @media (max-width: 768px) {
        margin: 0px;
      }
    }
    i {
      background-size: 12px;
      background-repeat: no-repeat;
      width: 12px;
      height: 12px;
      margin: 5px;
    }

    p {
      font-family: $helv;
      font-size: 16px;
      color: $black;
      line-height: 20px;
      margin: 0px;
      width: 450px;
      margin: 0px;

      @media (max-width: 768px) {
        font-size: 13px;
        width: 200px;
      }
      @media (max-width: 425px) {
        font-size: 12px;
        width: 100px;
      }
    }

    .data,
    .alt {
      font-family: $helv;
      font-size: 16px;
      color: $black;
      line-height: 20px;

      @media (max-width: 425px) {
        font-size: 12px;
      }
    }

    .alt {
      width: 80px;
      text-align: center;
    }
    @media (max-width: 768px) {
      height: auto;
      width: 400px;
    }
    @media (max-width: 425px) {
      width: 265px;
    }
  }
}
</style> 
