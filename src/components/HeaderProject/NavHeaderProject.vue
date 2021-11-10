<template lang="pug">
nav.interface
  router-link(
    v-for="(item, i) in routers",
    active-class="link",
    :to="item.url",
    :key="'routers' + i"
  ) {{ item.name }}
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "NavHeaderProject",
  data() {
    return {
      routers: [
        {
          name: "Tasks",
          url: "/tasks",
        },
        {
          name: "Kanban",
          url: "/kanban",
        },
        {
          name: "Activity",
          url: "/",
        },
        {
          name: "Calendar",
          url: "/calendar",
        },
        {
          name: "Files",
          url: "/files",
        },
      ],
    };
  },
});
</script>

<style scoped lang="scss">
@import "../../assets/style/helpers/mixins.scss";
@import "../../assets/style/helpers/reset.scss";

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

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin: 20px auto;
    width: 100%;
  }
}
</style>