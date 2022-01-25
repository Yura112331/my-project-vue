<template lang="pug">
section.general-menu(v-if="sideBarshow")
  .projectus
    h1 PROJECTUS
  section.body
    ProfileSideBar
    .tasks
      .completed(@click="setTasks") 
        h2 {{ CompletedTasks }}
        p Completed Tasks
      #open
        h2 {{ OpenTasks }}
        p Open Tasks
    nav.navigation
      ul
        li
          h3.menu MENU
        li
          h3(@click="homeClick") Home
        li
          h3(@click="taskClick") My Tasks
        li.text
          h3(@click="notificationClick") Notifications
          p {{ notification }}
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProfileSideBar from "./ProfileSideBar.vue";
export default defineComponent({
  name: "SideBar",
  components: {
    ProfileSideBar,
  },
  props: {
    notification: {
      type: Number,
      default: 3,
    },
    sideBarshow: {
      type: Boolean,
      require: true,
    },
  },

  data() {
    return {
      CompletedTasks: 372,
      OpenTasks: 11,
    };
  },
  methods: {
    setTasks: function () {
      if (Number(this.OpenTasks) > 0) {
        if (confirm("Are you sure you want to change the number of tasks?")) {
          this.CompletedTasks += 1;
          this.OpenTasks -= 1;
        }
      }
    },
    homeClick (){
      this.$router.push('/home')
    },
    taskClick (){
      this.$router.push('/tasks')
    },
    notificationClick (){
      this.$router.push('/notification')
    }
  },
});
</script>

<style scoped lang="scss">
@import "../../assets/style/helpers/mixins.scss"; 
@import "../../assets/style/helpers/reset.scss";
.general-menu {
  position: relative;
  background-color: black;
  min-width: 270px;
  .projectus {
    height: 84px;
    h1 {
      position: relative;
      padding: 30px 65px;
      font-family: Helvetica;
      font-size: 16px;
      color: #ffffff;
      line-height: 24px;
      width: 87px;
      height: 24px;
      &::after {
        @include content;
        background-image: url("../../assets/Logo.svg");
        cursor: pointer;
        width: 21.6px;
        height: 18.9px;
        left: 30.4px;
        top: 32.5px;
        @media (max-width: 425px) {
          left: 0px;
        }
      }
      &::before {
        @include content;
        background-image: url("../../assets/Search.svg");
        cursor: pointer;
        width: 16px;
        height: 16px;
        left: 234px;
        top: 33px;
      }
    }
    @media (max-width: 768px) {
      height: 84px;
      margin: auto;
    }
  }
  .body {
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
          background-image: url("../../assets/face.jpg");
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
    .tasks {
      margin: 20px 30px;
      @include flex;
      flex-direction: row;
      cursor: pointer;
      h2 {
        width: 35px;
        height: 27px;
        line-height: 24px;
        font-family: Helvetica;
        font-size: 20px;
        color: #ffffff;
        @media (max-width: 425px) {
          font-size: 15px;
        }
      }
      p {
        line-height: 14px;
        opacity: 0.5;
        font-family: Helvetica;
        font-size: 12px;
        color: #ffffff;
        @media (max-width: 425px) {
          font-size: 10px;
        }
      }
      @media (max-width: 1024px) {
        height: 100%;
        width: 210px;
      }
      @media (max-width: 953px) {
        margin: auto;
      }
    }
    .navigation {
      height: 135px;
      display: flex;
      margin: 30px 30px 0px;
      ul {
        @include flex;
        flex-direction: column;
        .menu {
          font-family: Helvetica;
          font-size: 12px;
          color: #878787;
          line-height: 18px;
          @media (max-width: 425px) {
            font-size: 11px;
          }
        }
        h3 {
          font-family: Helvetica;
          font-size: 14px;
          color: #ffffff;
          line-height: 22px;
          text-decoration: none;
          cursor: pointer;
          @media (max-width: 425px) {
            font-size: 12px;
          }
        }
        .text {
          @include flex;
          width: 110px;
          p {
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 20px;
            height: 20px;
            background-color: #ffc200;
            border-radius: 10px;
            font-family: Helvetica;
            font-size: 13px;
            color: #131313;
            @media (max-width: 425px) {
              font-size: 11px;
              width: 15px;
              height: 15px;
            }
          }
        }
        @media (max-width: 1024px) {
          flex-direction: row;
          flex-wrap: wrap;
        }
      }
      @media (max-width: 1024px) {
        height: 100%;
        width: 300px;
      }
      @media (max-width: 953px) {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        padding-bottom: 10px;
      }
      @media (max-width: 425px) {
        margin: 15px 10px 0px;
      }
    }
    @media (max-width: 1024px) {
      display: flex;
      flex-direction: row;
      height: 100%;
      flex-wrap: wrap;
      margin-bottom: 10px;
    }
  }
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
