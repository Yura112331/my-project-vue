<template lang="pug">
.product-owner
  p.name Jean Gonzales
  p.owner Product Owner
  .dot-block
    .dot
    .dot
    .dot
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ProfileSideBar",
  
});
</script>

<style scoped lang="scss">
@import "../assets/style/helpers/mixins.scss";
@import "../assets/style/helpers/reset.scss";
.product-owner {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 93px;
  height: 80px;
  background: #202020;
  .name {
    position: relative;
    font-family: Helvetica;
    font-size: 14px;
    color: #ffffff;
    line-height: 17px;
    &::before {
      @include content;
      background-image: url("../assets/face.jpg");
      background-size: cover;
      background-position: center;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      left: -63px;
      top: -9px;
      @media (max-width: 425px) {
        left: -100px;
      }
      @media (max-width: 320px) {
        left: -65px;
      }
    }
  }
  .owner {
    margin-top: 2px;
    font-family: Helvetica;
    font-size: 12px;
    color: #9b9b9b;
    line-height: 14px;
  }
  .dot-block {
    position: absolute;
    display: flex;
    left: 226px;
    cursor: pointer;
    .dot {
      margin: 2px;
      width: 4px;
      height: 4px;
      border-radius: 2px;
      background-color: gray;
    }
    @media (max-width: 425px) {
      left: 300px;
    }
    @media (max-width: 320px) {
      left: 220px;
    }
  }
  @media (max-width: 1024px) {
    width: 210px;
    margin: 0px 20px 10px 20px;
  }
  @media (max-width: 425px) {
    width: 100%;
    padding-left: 135px;
  }
  @media (max-width: 320px) {
    width: 100%;
    padding-left: 80px;
  }
}
</style>
