<template lang="pug">
.body-content 
  .tab-item.active-item
    .tab-title Calendar
    .text-center.section
      v-calendar.custom-calendar.max-w-full(:masks='masks' :attributes='attributes' disable-page-swipe='' is-expanded='')
        template(v-slot:day-content='{ day, attributes }')
          .flex.flex-col.h-full.z-10.overflow-hidden
            span.day-label.text-sm.text-gray-900 {{ day.day }}
            .flex-grow.overflow-y-auto.overflow-x-auto
              p.text-xs.leading-tight.rounded-sm.p-1.mt-0.mb-1(v-for='(attr, index) in attributes' :key='index' v-on:click="taskDetails(task)")
                | {{ attr.customData.title }} {{ attr.title }}
                button()
    TaskDetailsModal(
     v-on:closeDetails="closeDetails()",
    :isOpen="isOpen",
    :showEditButton='showEditButton'
    :taskDetails="taskDescription"
  )
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { status } from "../enums/EnumStatus";
import TaskDetailsModal from "../modals/TaskDetailsModal.vue";
import TasksI from "@/types/InterfacesTasks";
import { mapState } from "vuex";

export default defineComponent({
  name: "Calendar",
  data() {
    return {
      masks: {
        weekdays: "WWW",
      },
      attributes: [],
      isOpen: false,
      showEditButton: false,
      taskDescription: {} as TasksI,
      status,
    };
  },
  components: {
    TaskDetailsModal,
  },
  computed: {
    ...mapState("tasksModule", ["tasks"]),
  },
  created() {
    this.attributes = this.tasks.map((el: any) => {
      el.dates = new Date(el.dataCreate);
      el.customData = {
        title: el.name,
        description: el.title,
        id: el.id,
      };
      return el;
    });
  },
  methods: {
    taskDetails(task: TasksI) {
      this.taskDescription = task;
      this.isOpen = true;
    },
    closeDetails() {
      this.isOpen = false;
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../assets/style/helpers/mixins.scss";
@import "../assets/style/components/BodyContent.scss";
.body-content {
  position: relative;
  width: 700px;
  height: auto;
  background: #dbf3ef;
  padding: 0px 30px 30px;
  margin-top: 30px;

  .tab-title {
    display: flex;
    justify-content: center;
    width: 100%;
    font-size: 18px;
    padding: 15px;
  }
  .h-full {
    height: 100%;
  }
  p {
    margin-top: 5px;
    cursor: pointer;
    background-color: rgb(187, 209, 169);
    padding: 3px;
    border-radius: 5px;
  }
  .flex-grow {
    padding: 5px;
    border-radius: 5px;
  }
  .flex-col {
    flex-direction: column;
  }
  .flex {
    display: flex;
  }
  .tab-item {
    width: 710px;
  }
  .overflow-y-auto {
    overflow-y: auto;
  }
  .overflow-x-auto {
    overflow-x: auto;
  }
  .section {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
  .testClass {
    padding: 4px;
    border-radius: 0.125rem;
    margin-bottom: 4px;
    background: #4299e1;
    color: white;
    font-size: 14px;
  }
  ::-webkit-scrollbar {
    width: 0px;
  }
  ::-webkit-scrollbar-track {
    display: none;
  }
  /deep/ .vc-title {
    font-size: 18;
    color: #2d3748;
    font-weight: 600;
    line-height: 28px;
    cursor: pointer;
    user-select: none;
    white-space: nowrap;
  }
  /deep/ .vc-svg-icon {
    width: 26px;
    height: 26px;
    cursor: pointer;
  }
  /deep/ .vc-arrow {
    &.is-right {
      position: absolute;
      top: 60px;
      right: 30px;
    }
    &.is-left {
      position: absolute;
      top: 60px;
      left: 40px;
    }
  }
  /deep/ .vc-header {
    background-color: #f1f5f8;
    padding: 10px 0;
  }
  /deep/ .vc-weeks {
    padding: 0;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    position: relative;
    min-width: 250px;
  }
  /deep/ .vc-weekday {
    background-color: #f8fafc;
    border-bottom: 1px solid #eaeaea;
    border-top: 1px solid #eaeaea;
    padding: 5px 0;
  }
  /deep/ .vc-day {
    padding: 0 5px 3px 5px;
    text-align: left;
    height: 90px;
    min-width: 90px;
    background-color: white;
    z-index: 0;
  }
  /deep/ .weekday-1 {
    background-color: #eff8ff;
  }
  /deep/ .weekday-7 {
    background-color: #eff8ff;
  }
  /deep/ .vc-day:not(.on-bottom) {
    border-bottom: 1px solid #b8c2cc;
  }
  /deep/ .vc-day:not(.on-right) {
    border-right: 1px solid #b8c2cc;
  }
  /deep/ .vc-day:not(.on-bottom) .weekday-1 {
    border-bottom: 1px solid #b8c2cc;
  }
  /deep/ .custom-calendar.vc-container {
    --day-border: 1px solid #b8c2cc;
    --day-border-highlight: 1px solid #b8c2cc;
    --day-width: 90px;
    --day-height: 90px;
    --weekday-bg: #f8fafc;
    --weekday-border: 1px solid #eaeaea;
    border-radius: 0;
    width: 100%;
    & .vc-header {
      background-color: #f1f5f8;
      padding: 10px 0;
    }
    & .vc-weeks {
      padding: 0;
    }
    & .vc-weekday {
      background-color: var(--weekday-bg);
      border-bottom: var(--weekday-border);
      border-top: var(--weekday-border);
      padding: 5px 0;
    }
    & .vc-day {
      padding: 0 5px 3px 5px;
      text-align: left;
      height: var(--day-height);
      min-width: var(--day-width);
      background-color: white;
      &.weekday-1,
      &.weekday-7 {
        background-color: #eff8ff;
      }
      &:not(.on-bottom) {
        border-bottom: var(--day-border);
        &.weekday-1 {
          border-bottom: var(--day-border-highlight);
        }
      }
      &:not(.on-right) {
        border-right: var(--day-border);
      }
    }
    & .vc-day-dots {
      margin-bottom: 5px;
    }
  }
  /deep/ .vc-popover-content-wrapper {
    --popover-horizontal-content-offset: 8px;
    --popover-vertical-content-offset: 10px;
    --popover-slide-translation: 15px;
    --popover-transition-time: 0.14s ease-in-out;
    --popover-caret-horizontal-offset: 18px;
    --popover-caret-vertical-offset: 8px;
    background-color: darkgray;
    position: absolute;
    border-radius: 10px;
    display: block;
    outline: none;
    z-index: 10;
    &:not(.is-interactive) {
      pointer-events: none;
    }
  }
  /deep/ .vc-popover-content {
    position: relative;
    outline: none;
    z-index: 10;
    box-shadow: var(--shadow-lg);
    &.direction-bottom {
      margin-top: var(--popover-vertical-content-offset);
    }
    &.direction-top {
      margin-bottom: var(--popover-vertical-content-offset);
    }
    &.direction-left {
      margin-right: var(--popover-horizontal-content-offset);
    }
    &.direction-right {
      margin-left: var(--popover-horizontal-content-offset);
    }
  }
  /deep/ .vc-popover-caret {
    content: "";
    position: absolute;
    display: block;
    width: 12px;
    height: 12px;
    border-top: inherit;
    border-left: inherit;
    background-color: inherit;
    user-select: none;
    z-index: -1;
    &.direction-bottom {
      top: 0;
      &.align-left {
        transform: translateY(-50%) rotate(45deg);
      }
      &.align-center {
        transform: translateX(-50%) translateY(-50%) rotate(45deg);
      }
      &.align-right {
        transform: translateY(-50%) rotate(45deg);
      }
    }
    &.direction-top {
      top: 100%;
      &.align-left {
        transform: translateY(-50%) rotate(-135deg);
      }
      &.align-center {
        transform: translateX(-50%) translateY(-50%) rotate(-135deg);
      }
      &.align-right {
        transform: translateY(-50%) rotate(-135deg);
      }
    }
    &.direction-left {
      left: 100%;
      &.align-top {
        transform: translateX(-50%) rotate(135deg);
      }
      &.align-middle {
        transform: translateY(-50%) translateX(-50%) rotate(135deg);
      }
      &.align-bottom {
        transform: translateX(-50%) rotate(135deg);
      }
    }
    &.direction-right {
      left: 0;
      &.align-top {
        transform: translateX(-50%) rotate(-45deg);
      }
      &.align-middle {
        transform: translateY(-50%) translateX(-50%) rotate(-45deg);
      }
      &.align-bottom {
        transform: translateX(-50%) rotate(-45deg);
      }
    }
    &.align-left {
      left: var(--popover-caret-horizontal-offset);
    }
    &.align-center {
      left: 50%;
    }
    &.align-right {
      right: var(--popover-caret-horizontal-offset);
    }
    &.align-top {
      top: var(--popover-caret-vertical-offset);
    }
    &.align-middle {
      top: 50%;
    }
    &.align-bottom {
      bottom: var(--popover-caret-vertical-offset);
    }
  }
  /deep/ .vc-nav-header {
    display: flex;
    justify-content: space-between;
  }
  /deep/ .vc-nav-arrow {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    user-select: none;
    line-height: var(--leading-snug);
    border-width: 2px;
    border-style: solid;
    border-color: transparent;
    border-radius: var(--rounded);
    &.is-left {
      margin-right: auto;
    }
    &.is-right {
      margin-left: auto;
    }
    &.is-disabled {
      opacity: 0.25;
      pointer-events: none;
      cursor: not-allowed;
    }
    &:hover {
      background-color: var(--gray-900);
    }
    &:focus {
      border-color: var(--accent-600);
    }
  }
  /deep/ .vc-nav-title {
    color: var(--accent-100);
    padding: 10px;
    font-weight: var(--font-bold);
    line-height: var(--leading-snug);
    padding: 4px 8px;
    border-radius: var(--rounded);
    border-width: 2px;
    border-style: solid;
    border-color: transparent;
    user-select: none;
    &:hover {
      background-color: var(--gray-900);
    }
    &:focus {
      border-color: var(--accent-600);
    }
  }
  /deep/ .vc-nav-items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 10px;
    grid-row-gap: 2px;
    grid-column-gap: 5px;
  }
  /deep/ .vc-nav-item {
    width: 48px;
    text-align: center;
    line-height: var(--leading-snug);
    font-weight: var(--font-semibold);
    padding: 4px 0;
    cursor: pointer;
    border-color: transparent;
    border-width: 2px;
    border-style: solid;
    border-radius: var(--rounded);
    user-select: none;
    &:hover {
      color: var(--white);
      background-color: var(--gray-900);
      box-shadow: var(--shadow-inner);
    }
    &.is-active {
      color: var(--accent-900);
      background: var(--accent-100);
      font-weight: var(--font-bold);
      box-shadow: var(--shadow);
    }
    &.is-current {
      color: var(--accent-100);
      font-weight: var(--bold);
      border-color: var(--accent-100);
    }
    &:focus {
      border-color: var(--accent-600);
    }
    &.is-disabled {
      opacity: 0.25;
      pointer-events: none;
    }
  }
  /deep/ .vc-is-dark {
    & .vc-nav-title {
      color: var(--gray-900);
      &:hover {
        background-color: var(--gray-200);
      }
      &:focus {
        border-color: var(--accent-400);
      }
    }
    & .vc-nav-arrow {
      &:hover {
        background-color: var(--gray-200);
      }
      &:focus {
        border-color: var(--accent-400);
      }
    }
    & .vc-nav-item {
      &:hover {
        color: var(--gray-900);
        background-color: var(--gray-200);
        box-shadow: none;
      }
      &.is-active {
        color: var(--white);
        background: var(--accent-500);
      }
      &.is-current {
        color: var(--accent-600);
        border-color: var(--accent-500);
      }
      &:focus {
        border-color: var(--accent-400);
      }
    }
  }
}
</style>
