<template lang="pug">
button.share Share
button.chat Chat
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ButtonsHeaderProject",
});
</script>

<style scoped lang="scss">
@import "../assets/style/helpers/mixins.scss";
@import "../assets/style/helpers/reset.scss";

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
    background-image: url("../assets/Combined-Shape@1x.svg");
    background-size: cover;
    background-position: auto;
    width: 20px;
    height: 20px;
    left: 10px;
    top: 5px;
  }
}
</style>