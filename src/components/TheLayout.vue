<template lang="pug">
.main-page
  SideBar(:sideBarshow="sideBarshow" :notification="notification")
  img.swipeClose(v-if="swipeShowTrue" src="@/assets/swipeClose.png" alt="swipeTrue" v-on:click="sideBarClose()")
  img.swipeOpen(v-if="swipeShowFalse" src="@/assets/swipeOpen.png" alt="swipeFalse" v-on:click="sideBarOpen()")
  section.content
    HeaderProject
    ContentProject(@changeIndexNotification="notification = $event")
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

  data() {
    return {
      notification: 3,
      sideBarshow: true,
      swipeShowTrue: true,
      swipeShowFalse: false,
    };
  },
  methods: {
    sideBarClose() {
      this.sideBarshow = false;
      this.swipeShowTrue = false;
      this.swipeShowFalse = true;
    },
    sideBarOpen() {
      this.sideBarshow = true;
      this.swipeShowTrue = true;
      this.swipeShowFalse = false;
    },
  }
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
  .swipeClose {
    display: none;
    background: white;
    width: 20px;
    height: 20px;
    position: absolute;
    right: 15px;
    top: 290px;
    opacity: 0.8;

    @media (max-width: 426px) {
      display: block;
    }
  }
  .swipeOpen {
    width: 20px;
    height: 20px;
    position: absolute;
    right: 15px;
    top: 10px;
    opacity: 0.8;
  }
  .content {
    width: 100%;
  }
}
</style>
