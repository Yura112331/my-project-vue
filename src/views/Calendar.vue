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
      CalendarDetailsModal(:CalendarShow="CalendarShow", v-on:closeDetails="closeDetails()" :taskDetails="taskDescription")
  
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import CalendarDetailsModal from "../modals/CalendarDetailsModal.vue";
import TasksI from "@/types/InterfacesTasks";
import {mapState} from 'vuex';

export default defineComponent({
  name: 'Calendar',
  data() {
    return {
      masks: {
        weekdays: 'WWW',
      },
      attributes: [],
      CalendarShow: false,
      taskDescription: {} as TasksI,
    };
  },
  components: { 
    CalendarDetailsModal,
   },
  computed: {
    ...mapState(['tasks']),
  },
  created() {
    this.attributes = this.tasks.map((el: any) => {
      el.dates = new Date(el.dataEnd);
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
      this.CalendarShow = true;
    },
    closeDetails() {
      this.CalendarShow = false;
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
  cursor:pointer;
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
/deep/ .vc-title{
    font-size: 18;
    color: #2d3748;
    font-weight: 600;
    line-height: 28px;
    cursor: pointer;
    user-select: none;
    white-space: nowrap;
}
/deep/ .vc-arrows-container.title-center {
      width: 690px;
    position: absolute;
    display: flex;
    justify-content: space-between;
    margin-left: 10px;
    top: 60px;
}
/deep/ .vc-svg-icon{
  width: 26px;
  height: 26px;
  cursor: pointer;
}

/deep/ .vc-header {
  background-color: #f1f5f8;
  padding: 10px 0;
}
/deep/ .vc-weeks {
  padding: 0;
  display: grid;
    grid-template-columns: repeat(7,1fr);
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
}

</style>