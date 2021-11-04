<template lang="pug">
.project
  HelloWorld
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
export default defineComponent({
  name: "project",
  components: {
    HelloWorld,
  },
});
</script>

<style lang="scss">
body {
  margin: 0px;
}
</style>