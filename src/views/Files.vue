<template lang="pug">
.body-content
  h2 Files
  ul
    li(v-for="imgItem of imgs") {{imgItem}}
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapGetters } from "vuex";

export default defineComponent({
  data() {
    return {};
  },

  name: "files",
  computed: {
    ...mapState({
      activity(state: any): any {
        return state.messages.activity;
      },
    }),

    ...mapGetters("activityModule", { imgs: "getImgs" }),
  },
});
</script>

<style lang="scss" scoped>
@import "../assets/style/components/BodyContent.scss";
.body-content {
  width: 700px;
  height: auto;
  background: #dbf3ef;
  padding: 0px 30px 30px;
  margin-top: 30px;
  h2 {
    font-size: 18px;
    margin: 5px 0px 25px;
  }
  ul {
    margin: 20px 0 0 30px;
    li {
      font-family: Helvetica;
      font-size: 16px;
      color: #131313;
    }
  }
}
</style>
