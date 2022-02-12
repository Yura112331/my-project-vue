<template lang="pug">
.main-page
  SideBar
  section.content
    HeaderProject
    ContentProject
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SideBar from "@/components/SideBar/SideBar.vue";
import HeaderProject from "@/components/HeaderProject/HeaderProject.vue";
import ContentProject from "@/components/ContentProject/ContentProject.vue";
export default defineComponent({
  name: "TheLayout",
  components: {
    SideBar,
    HeaderProject,
    ContentProject,
  },
});
</script>

<style lang="scss">
@import "../assets/style/fonts/fonts.scss";
@import "../assets/style/helpers/reset.scss";
.main-page {
  width: 100%;
  max-height: 100vh;
  display: flex;
  flex-direction: row;
  margin: 0px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
}
.content {
  width: 100%;
}
</style>