<template lang="pug">
.body-content
  h2 TODAY
  .messages(v-for="(item, i) in activity", :key="'activity' + i")
    i(
      :style="{ backgroundImage: 'url(' + require('../assets/' + item.icon + '.png') + ')' }",
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
import {mapState} from 'vuex';
export default defineComponent({
  name: "Activity",
  computed: {
    ...mapState('activityModule', ['activity'])
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
@import "../assets/style/helpers/mixins.scss";
@import "../assets/style/components/BodyContent.scss";
.messages {
  @include flex;
  flex-direction: row;
  width: 640px;
  flex-wrap: wrap;
  margin: 25px 20px;
  i {
    background-size: 15px;
    background-repeat: no-repeat;
    background-position: center;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin-right: -60px;

    @media (max-width: 768px) {
      margin-right: -30px;
    }
    @media (max-width: 320px) {
      width: 30px;
      height: 30px;
    }
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
    @media (max-width: 700px) {
      width: 350px;
    }
    @media (max-width: 580px) {
      width: 300px;
    }

    @media (max-width: 480px) {
      width: 230px;
    }
    @media (max-width: 375px) {
      width: 200px;
    }
    @media (max-width: 320px) {
      width: 150px;
      font-size: 10px;
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

    @media (max-width: 768px) {
      font-size: 13px;
      letter-spacing: 0px;
      width: 380px;
    }

    @media (max-width: 700px) {
      margin-left: 88px;
    }

    @media (max-width: 660px) {
      margin-left: 58px;
    }
    @media (max-width: 320px) {
      margin-left: 33px;
    }
  }
  @media (max-width: 768px) {
    height: auto;
    width: 600px;
  }

  @media (max-width: 660px) {
    width: 540px;
  }
  @media (max-width: 580px) {
    width: 450px;
  }
  @media (max-width: 480px) {
    margin-left: 0px;
  }
  @media (max-width: 480px) {
    width: 400px;
  }
  @media (max-width: 420px) {
    width: 360px;
  }
  @media (max-width: 375px) {
    width: 330px;
  }
  @media (max-width: 320px) {
    width: 280px;
  }
}
.images {
  @include flex;
  flex-direction: row;
  width: 410px;
  cursor: pointer;
  margin: 25px 0px 0px 60px;
  img {
    width: 90px;
    height: 90px;
    border-radius: 8px;

    @media (max-width: 480px) {
      width: 70px;
      height: 70px;
    }
  }
  @media (max-width: 768px) {
    width: 380px;
  }
  @media (max-width: 700px) {
    margin-left: 90px;
  }
  @media (max-width: 660px) {
    margin-left: 60px;
  }
  @media (max-width: 435px) {
    width: 320px;
  }
  @media (max-width: 375px) {
    width: 280px;
  }
  @media (max-width: 320px) {
    margin: 10px;
  }
}
</style>