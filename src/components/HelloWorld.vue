<template lang="pug">
.main-page
  section.general-menu
    .projectus
      h1 PROJECTUS
    section.body
      .product-owner
        p.name Jean Gonzales
        p.owner Product Owner
        .dot-block
          .dot
          .dot
          .dot
      .tasks
        .completed
          h2#number1 372
          p Completed Tasks
        #open
          h2#number2 11
          p Open Tasks
      nav.navigation
        ul
          li
            a(href="#" class="menu") MENU
          li
            a(href="#") Home
          li
            a(href="#") My Tasks
          li.text
            a(href="#") Notifications
            p {{notification}}
  section.content
    header
      .name
        .block-name
          h1 Website Redesign
          .aditional-block
            .dot
            .dot
            .dot
        .right-menu
          .icon-block
            .icon
            .icon1
            .icon2
          button.share Share
          button.chat Chat
      nav.interface
        ul
          li
            router-link(to="/tasks" class="link") Tasks
          li
            a(href="#" class="link") Kanban
          li
            router-link(to="/activity" class="link activity") Activity
          li 
            a(href="#" class="link") Calendar
          li 
            a(href="#" class="link") Files
    section.body
      router-view(@changeIndex="notification = $event")
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return{
      notification: 3,
    }
  },
  mounted() {
    let allNavItems = document.querySelectorAll(".link");
    allNavItems.forEach((currentValue: any) => {
      return currentValue.addEventListener("click", this.makeActive);
    });
  },
  methods: {
    makeActive(e: any) {
      let currentElement = e.target;
      let currentActive = document.querySelector(".activity");
      if (currentActive) {
        currentActive.classList.remove("activity");
        currentElement.classList.add("activity");
      }
    },
  },
});
</script>

<style scoped lang="scss">
@import "../assets/style/helpers/reset.scss";
@import "../assets/style/fonts/fonts.scss";
.main-page {
  width: 100%;
  max-height: 100vh;
  display: flex;
  flex-direction: row;
  margin: 0px;
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
          content: "";
          position: absolute;
          background-image: url("../assets/Logo.svg");
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
          content: "";
          position: absolute;
          background-image: url("../assets/Search.svg");
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
            content: "";
            position: absolute;
            background-image: url("../assets/face.jpg");
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
        display: flex;
        flex-direction: row;
        justify-content: space-between;
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
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .menu {
            font-family: Helvetica;
            font-size: 12px;
            color: #878787;
            line-height: 18px;
            @media (max-width: 425px) {
              font-size: 11px;
            }
          }
          a {
            font-family: Helvetica;
            font-size: 14px;
            color: #ffffff;
            line-height: 22px;
            text-decoration: none;
            @media (max-width: 425px) {
              font-size: 12px;
            }
          }
          .text {
            display: flex;
            justify-content: space-between;
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
  .content {
    width: 100%;
    header {
      background: #ffffff;
      .name {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .block-name {
          margin: 35px 85px 0;
          display: flex;
          justify-content: space-between;
          width: 310px;
          h1 {
            position: relative;
            width: 265px;
            height: 43px;
            font-family: Helvetica;
            font-size: 32px;
            color: #131313;
            &::before {
              content: "";
              position: absolute;
              background-image: url("../assets/Shapes.png");
              background-size: cover;
              cursor: pointer;
              left: -60px;
              top: -5px;
              width: 40px;
              height: 40px;
              background-color: orange;
              border-radius: 8px;
              @media (max-width: 768px) {
                left: -45px;
              }
              @media (max-width: 320px) {
                display: none;
              }
            }
            @media (max-width: 768px) {
              font-size: 25px;
              width: 210px;
            }
          }
          .aditional-block {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 3px;
            background-color: rgb(184, 174, 174);
            cursor: pointer;
            width: 30px;
            height: 30px;
            border-radius: 15px;
            .dot {
              margin: 2px;
              width: 4px;
              height: 4px;
              border-radius: 2px;
              background-color: gray;
              @media (max-width: 425px) {
                width: 2px;
                height: 2px;
              }
            }
            @media (max-width: 425px) {
              width: 20px;
              height: 20px;
            }
          }
          @media (max-width: 768px) {
            margin: 15px 60px 0px;
            width: 250px;
          }
        }
        .right-menu {
          display: flex;
          justify-content: space-between;
          margin-right: 30px;
          width: 278px;
          margin-top: 45px;
          .icon-block {
            display: flex;
            justify-content: space-between;
            width: 100px;
            .icon {
              position: relative;
              &::before {
                content: "";
                position: absolute;
                cursor: pointer;
                width: 30px;
                height: 30px;
                left: 0px;
                border-radius: 15px;
                background-image: url("../assets/peaple.png");
                background-size: cover;
                @media (max-width: 320px) {
                  left: -9px;
                }
              }
            }
            .icon1 {
              position: relative;
              &::before {
                content: "";
                position: absolute;
                cursor: pointer;
                width: 30px;
                height: 30px;
                left: -15px;
                border-radius: 15px;
                background-image: url("../assets/people1.jpg");
                background-size: cover;
                @media (max-width: 320px) {
                  left: -23px;
                }
              }
            }
            .icon2 {
              position: relative;
              &::before {
                content: "";
                position: absolute;
                cursor: pointer;
                width: 30px;
                height: 30px;
                left: -30px;
                border-radius: 15px;
                background-image: url("../assets/people2.jpg");
                background-size: cover;
                @media (max-width: 320px) {
                  left: -37px;
                }
              }
            }
          }
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
              content: "";
              position: absolute;
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
          @media (max-width: 768px) {
            margin-top: 20px;
            padding-left: 50px;
          }
          @media (max-width: 320px) {
            padding-left: 25px;
            margin-right: 20px;
          }
        }
        @media (max-width: 768px) {
          flex-wrap: wrap;
        }
        @media (max-width: 425px) {
          justify-content: center;
        }
      }
      .interface {
        margin: 18px 30px;
        max-width: 401px;
        ul {
          display: flex;
          justify-content: space-between;
          a {
            text-decoration: none;
            opacity: 0.7;
            font-family: Helvetica;
            font-size: 16px;
            color: #131313;
          }
          @media (max-width: 425px) {
            justify-content: space-around;
          }
        }
        .activity {
          position: relative;
          font-family: Helvetica;
          font-size: 16px;
          color: #131313;
          &::after {
            position: absolute;
            content: "";
            width: 55px;
            height: 2px;
            background: #ffc200;
            top: 34px;
            left: -1px;
          }
        }
        @media (max-width: 768px) {
          display: flex;
          flex-direction: column;
          margin: 20px auto;
          width: 100%;
        }
      }
      @media (max-width: 768px) {
        height: 100%;
      }
    }
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
  }
  @media (max-width: 1024px) {
    flex-direction: column;
  }
}
</style>