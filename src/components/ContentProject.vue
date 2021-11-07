<template lang="pug">
section.body
  router-view(@changeIndex="notification = $event")
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ContentProject",
});
</script>

<style scoped lang="scss">
@import "../assets/style/helpers/reset.scss";
.body {
  height: calc(100vh - 158px);
  background-color: rgb(214, 206, 206);
  padding-top: 25px;
  @media (max-width: 1024px) {
    padding-top: 1px;
  }
  @media (max-width: 768px) {
    padding: 0px;
    background-color: white;
  }
}
</style>