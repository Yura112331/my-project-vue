<template lang="pug">
header
  .name
    .block-name
      h1 Website Redesign
      .aditional-block
        .dot
        .dot
        .dot
    .right-menu
      .icon-block
        .icon
        .icon1
        .icon2
      ButtonsHeaderProject
  NavHeaderProject
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ButtonsHeaderProject from "./ButtonsHeaderProject.vue";
import NavHeaderProject from "./NavHeaderProject.vue";
export default defineComponent({
  name: "HeaderProject",
  components: {
    ButtonsHeaderProject,
    NavHeaderProject,
  },
});
</script>

<style scoped lang="scss">
@import "../../assets/style/helpers/mixins.scss";
@import "../../assets/style/helpers/reset.scss";
header {
  background: #ffffff;
  .name {
    @include flex;
    flex-direction: row;
    .block-name {
      margin: 35px 85px 0;
      @include flex;
      width: 310px;
      h1 {
        position: relative;
        width: 265px;
        height: 43px;
        font-family: Helvetica;
        font-size: 32px;
        color: #131313;
        &::before {
          @include content;
          background-image: url("../../assets/Shapes.png");
          background-size: cover;
          cursor: pointer;
          left: -60px;
          top: -5px;
          width: 40px;
          height: 40px;
          background-color: orange;
          border-radius: 8px;
          @media (max-width: 768px) {
            left: -45px;
          }
          @media (max-width: 320px) {
            display: none;
          }
        }
        @media (max-width: 768px) {
          font-size: 25px;
          width: 210px;
        }
      }
      .aditional-block {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 3px;
        background-color: rgb(184, 174, 174);
        cursor: pointer;
        width: 30px;
        height: 30px;
        border-radius: 15px;
        .dot {
          margin: 2px;
          width: 4px;
          height: 4px;
          border-radius: 2px;
          background-color: gray;
          @media (max-width: 425px) {
            width: 2px;
            height: 2px;
          }
        }
        @media (max-width: 425px) {
          width: 20px;
          height: 20px;
        }
      }
      @media (max-width: 768px) {
        margin: 15px 60px 0px;
        width: 250px;
      }
    }
    .right-menu {
      @include flex;
      margin-right: 30px;
      width: 278px;
      margin-top: 45px;
      .icon-block {
        @include flex;
        width: 100px;
        .icon {
          position: relative;
          &::before {
            @include icon-header;
            left: 0px;
            background-image: url("../../assets/peaple.png");
            @media (max-width: 320px) {
              left: -9px;
            }
          }
        }
        .icon1 {
          position: relative;
          &::before {
            @include icon-header;
            left: -15px;
            background-image: url("../../assets/people1.jpg");
            @media (max-width: 320px) {
              left: -23px;
            }
          }
        }
        .icon2 {
          position: relative;
          &::before {
            @include icon-header;
            left: -30px;
            background-image: url("../../assets/people2.jpg");
            @media (max-width: 320px) {
              left: -37px;
            }
          }
        }
      }
      .share {
        background: #eaeaea;
        width: 67px;
        cursor: pointer;
        font-family: Helvetica;
        font-size: 14px;
        border-radius: 15px;
        height: 30px;
        border: none;
      }
      .chat {
        position: relative;
        width: 81px;
        height: 30px;
        cursor: pointer;
        background: #fff8dd;
        border-radius: 15px;
        border: none;
        font-family: Helvetica;
        font-size: 14px;
        color: #ffc200;
        padding-left: 30px;
        &::before {
          @include content;
          cursor: pointer;
          background-image: url("../../assets/Combined-Shape@1x.svg");
          background-size: cover;
          background-position: auto;
          width: 20px;
          height: 20px;
          left: 10px;
          top: 5px;
        }
      }
      @media (max-width: 768px) {
        margin-top: 20px;
        padding-left: 50px;
      }
      @media (max-width: 320px) {
        padding-left: 25px;
        margin-right: 20px;
      }
    }
    @media (max-width: 768px) {
      flex-wrap: wrap;
    }
    @media (max-width: 425px) {
      justify-content: center;
    }
  }
  .interface {
    margin: 18px 30px 0px;
    max-width: 401px;
    @include flex;

    a {
      text-decoration: none;
      opacity: 0.7;
      font-family: Helvetica;
      font-size: 16px;
      color: #131313;
      padding-bottom: 22px;
    }

    .link {
      border-bottom: 2px solid #ffc200;
    }

    
  }
  @media (max-width: 768px) {
    height: 100%;
  }
}
</style>
