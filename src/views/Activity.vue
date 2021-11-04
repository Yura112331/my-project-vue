<template lang="pug">
.body-content
  h2 TODAY
  .messages(v-for="(item, i) in activity", :key="'activity' + i")
    i(
      :style="{ backgroundImage: 'url(' + require('../assets/' + item.icon + '.png') + ')', backgroundSize: '15px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }",
      :class="item.icon"
    )
    p.text {{ item.text }}
    .time {{ item.time }}
    .commit(v-if="item.commit") {{ item.commit }}
    .images(v-if="item.imgs")
      img(
        v-for="(img, i2) in item.imgs",
        :src="getImage(img)",
        :key="'activity-img' + i2",
        @click="selectImg(i2)"
      )
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Activity",
  data() {
    return {
      activity: [
        {
          icon: "check-mark",
          text: "Darika Samak mark as done Listing on Product Hunt so that we can reach as many potential users",
          time: "8:40 PM",
        },
        {
          icon: "message",
          text: "Emilee Simchenko commented on Account for teams and personal in bottom style",
          time: "7:32 PM",
          commit:
            "During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes",
        },
        {
          icon: "download",
          text: "Darika Samak uploaded 4 files on An option to search in current projects or in all projects",
          time: "6:02 PM",
          imgs: ["image.jpg", "img1.png", "img2.png", "img3.png"],
        },
      ],
    };
  },
  methods: {
    getImage(img: string) {
      return require("@/assets/" + img);
    },
    selectImg(index: number) {
      this.$emit("changeIndex", index);
    },
  },
});
</script>

<style scoped lang="scss">
.body-content {
  margin: auto;
  width: 690px;
  height: 591px;
  background: #ffffff;
  border-radius: 8px;
  padding-left: 10px;

  h2 {
    padding-top: 35px;
    opacity: 0.5;
    font-family: Helvetica;
    font-size: 14px;
    color: #131313;
    width: 45px;
    height: 19px;
    margin: 30px 25px 25px;
    letter-spacing: 1px;

    @media (max-width: 768px) {
      margin: 0px;
      padding-top: 10px;
    }
  }
  .messages {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 640px;
    flex-wrap: wrap;
    margin: 25px 20px;

    i {
      width: 40px;
      height: 40px;
      border-radius: 20px;
      margin-right: -60px;
    }
    .check-mark {
      background-color: #cef9c6;
    }
    .message {
      background-color: #fff8dd;
    }
    .download {
      background-color: #e3efff;
    }
    p {
      font-family: Helvetica;
      font-size: 16px;
      color: #131313;
      line-height: 20px;
      margin: 0px;
      width: 445px;

      @media (max-width: 768px) {
        font-size: 13px;
      }
    }

    .time {
      opacity: 0.7;
      font-family: Helvetica;
      font-size: 14px;
      color: #131313;
      line-height: 20px;

      @media (max-width: 768px) {
        font-size: 12px;
      }
    }
    .commit {
      width: 496px;
      font-family: Helvetica;
      font-size: 15px;
      color: #131313;
      background: #f7f6f3;
      border-radius: 10px;
      padding: 20px 20px;
      letter-spacing: 0.5px;
      margin: 25px 0px 0px 55px;
    }
  }
  .images {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 410px;
    cursor: pointer;
    margin: 25px 0px 0px 60px;

    img {
      width: 90px;
      height: 90px;
      border-radius: 8px;
    }
  }
}
</style>