<template lang="pug">
.body-content
  h2 TASKS
  
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Tasks",
  data() {
    return {

    };
  },
  
});
</script>

<style scoped lang="scss">
@import "../assets/style/helpers/mixins.scss";
@import "../assets/style/components/BodyContent.scss";

.body-content {
  width: 700px;
  height: 440px;
  background: #c0eee6;
  padding: 0px 30px;
  margin-top: 30px;

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
      font-family: Helvetica;
      font-size: 16px;
      color: #131313;
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
      font-family: Helvetica;
      font-size: 16px;
      color: #131313;
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