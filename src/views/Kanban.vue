<template lang="pug">
.body-content
  h2 KANBAN
  form
    input(type="text" v-model='search' placeholder='Search name..') 
    p  Range: from - 
    input.data(type="date" v-model='dataSearchFrom' min="2021-11-21" max="2022-12-31") 
    p  Before - 
    input.data(type="date" v-model='dataSearchTo' min="2021-11-21" max="2022-12-31")
    button.clear(@click="clearForm()" v-if="search || dataSearchFrom || dataSearchTo") Clear
  .task-header
    .head-item(v-for="(column, i) in kanban" :key="'column_'+i")
      p.headCaption {{column.name}}
      span.headCaptionCount Cards count: {{taskLength(column.filter)}}
  .task-body
    .task-item(
      :class="{dropped: checkItems(getList(status.todo))}"
      @dragenter.prevent
      @dragover.prevent
      @drop="onDropToDo($event)")
      p.dropCaption(v-if="checkItems(getList(status.todo))") Drop here...
      div(v-for="(item, i) in getList(status.todo)" :key="'col1'+i" draggable="true" @dragstart="onDrag($event, item.listIndex)")
        .status(:class="taskClass(item)")
          p {{ item.name }}
          .data Date of completion {{ item.dataEnd }}
          button.details(v-on:click="taskDetails(item)") Details
    .task-item(
      :class="{dropped: checkItems(getList(status.inprogress))}"
      @dragenter.prevent
      @dragover.prevent
      @drop="onDropInprogress($event)")
        p.dropCaption(v-if="checkItems(getList(status.inprogress))") Drop here...
        div(v-for="(item, i) in getList(status.inprogress)" :key="'col2'+i" draggable="true" @dragstart="onDrag($event, item.listIndex)")
          .status(:class="taskClass(item)")
            p {{ item.name }}
            .data Date of completion {{ item.dataEnd }}
            button.details(v-on:click="taskDetails(item)") Details
    .task-item(
      :class="{dropped: checkItems(getList(status.done))}"
      @dragenter.prevent
      @dragover.prevent
      @drop="onDropDone($event)")
        p.dropCaption(v-if="checkItems(getList(status.done))") Drop here...
        div(v-for="(item, i) in getList(status.done)" :key="'col3'+i")
          .status(:class="taskClass(item)")
            p {{ item.name }}
            .data Date of completion {{ item.dataEnd }}
            button.details(v-on:click="taskDetails(item)") Details
  TaskDetailsModall(
    v-on:closeDetails="closeDetails()",
    :isOpen="isOpen"
    :showEditButton='showEditButton'
    :taskDetails="taskDescription"
    @saveTask="saveTask($event)"
    )
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { status } from "../enums/EnumStatus";
import TaskModal from "../modals/TaskModals.vue";
import TaskDetailsModal from "../modals/TaskDetailsModal.vue";
import TasksI from "@/types/InterfacesTasks";
import { modalInfo } from "@/composables/modalInfo";
import {useStore} from 'vuex';
export default defineComponent({
  setup() {
    const store = useStore();
    const tasks = computed(() => store.state.tasksModule.tasks);
    const kanban = computed(() => store.state.kanban);
    let search: any = ref("");
    let dataSearchTo: any = ref("");
    let dataSearchFrom: any = ref("");
    const getFilteredArray = (status: status) => {
      return tasks.value.filter((element: any, key: number) => {
        element.listIndex = key;
        return element.status === status;
      });
    };

    const getList = (status: status) => {
      const startDate = new Date(dataSearchFrom.value);
      const endDate = new Date(dataSearchTo.value);
      return getFilteredArray(status).filter((item: any) => {
        return (
          item.name.toLowerCase().includes(search.value.toLowerCase()) &&
          (+new Date(item.dataEnd) - +startDate >= 0 ||
            isNaN(+new Date(item.dataEnd) - +startDate)) &&
          (+new Date(item.dataEnd) - +endDate <= 0 ||
            isNaN(+new Date(item.dataEnd) - +endDate))
        );
      });
    };
    const taskClass = (item: TasksI) => {
      const toDay = new Date();
      const toMorrow = new Date(Date.now() + 3600 * 1000 * 24);
      return {
        failed:
          new Date() > new Date(item.dataEnd) && item.status != status.done,
        grey: item.status === status.todo,
        yelow: item.status === status.inprogress,
        green: item.status === status.done,
        orange:
          toDay < new Date(item.dataEnd) && new Date(item.dataEnd) < toMorrow,
      };
    };
    const taskLength = (status: status) => {
      return getFilteredArray(status).length;
    };
    const checkItems = (items: Array<TasksI>) => {
      return !items.length;
    };
    const onDropToDo = (e: DragEvent) => {
      if (e.dataTransfer) {
        const itemDragIndex = parseInt(e.dataTransfer.getData("dragItem"));
        tasks.value[itemDragIndex].status = status.todo;
      }
    };
    const onDropInprogress = (e: DragEvent) => {
      if (e.dataTransfer) {
        const itemDragIndex = parseInt(e.dataTransfer.getData("dragItem"));
        tasks.value[itemDragIndex].status = status.inprogress;
      }
    };
    const onDrag = (e: DragEvent, value: string) => {
      if (e.dataTransfer) {
        e.dataTransfer.dropEffect = "move";
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("dragItem", value);
      }
    };
    const onDropDone = (e: DragEvent) => {
      if (e.dataTransfer) {
        const itemDragIndex = parseInt(e.dataTransfer.getData("dragItem"));
        tasks.value[itemDragIndex].status = status.done;
      }
    };

    const clearForm = () => {
      search
      dataSearchTo
      dataSearchFrom
    };
    return {
      clearForm,
      onDropDone,
      onDrag,
      onDropInprogress,
      onDropToDo,
      checkItems,
      taskLength,
      taskClass,
      getList,
      getFilteredArray,
      dataSearchFrom,
      dataSearchTo,
      search,
      kanban,
      tasks,
      status,
      ...modalInfo(),
    }
  },
  components: {
    TaskModal,
    TaskDetailsModal,
  },
});
</script>
<style lang="scss" scoped>
@import "../assets/style/components/BodyContent.scss";

.body-content {
  padding: 0px 10px;
  h2 {
    text-align: center;
    font-family: Helvetica;
    font-size: 20px;
    color: #131313;
    font-weight: 600;

    @media (max-width: 426px) {
      width: 100%;
    }
  }
  form {
    display: flex;
    flex-direction: row;
    margin-left: 15px;
    input {
      font-family: Helvetica;
      font-size: 16px;
      color: #131313;
      border: 1px solid #bdbdbd;
      border-radius: 5px;
      padding: 3px 5px;
      margin-bottom: 8px;

      &.data {
        width: 105px;
        height: 17px;
        font-size: 12px;
      }
    }
    input:focus {
      color: #212529;
      background-color: #fff;
      border-color: #bdbdbd;
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
    }
    p {
      font-family: Helvetica;
      font-size: 16px;
      color: #131313;
      line-height: 20px;
      margin: 0px 5px;
    }
    .clear {
      margin-left: 10px;
      height: 25px;
      background-color: rgb(224, 210, 185);
      border: none;
      border-radius: 5px;
      color: black;
      transition-duration: 0.4s;
      cursor: pointer;
    }

  }

  .task-header,
  .task-body {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  .task-header {
    .head-item {
      p {
        font-size: 18px;
        text-align: center;
        margin-bottom: 20px;
        font-weight: 600;
      }
      .headCaptionCount {
        text-align: center;
        font-family: Helvetica;
        font-size: 15px;
        color: #131313;
        background: burlywood;
        padding: 5px 10px;

        @media (max-width: 426px) {
          font-size: 10px;
        }
      }
    }
  }
  @media (max-width: 426px) {
    padding: 0px;
    width: 350px;
  }
}

.task-body {
  .task-item {
    min-width: 30%;
    margin: 0 10px;

    &.dropped {
      margin-top: 1rem;
      background-color: #ffe;
      border: 0.1rem dashed #cccccc;
      align-items: center;
      transition: 0.3s;
      &:hover {
        border: 0.1rem dashed silver;
        background-color: #fffffc;
      }
    }

    div {
      .status {
        margin-top: 10px;
        padding: 10px;
        border-radius: 5px;
        p {
          text-align: start;
          height: auto;
          font-size: 13px;
          font-weight: 200;
        }
        .data {
          margin-top: 10px;
          display: flex;
          justify-content: space-between;
          font-size: 11px;
          font-weight: 200;
          opacity: 0.5;
        }
        button {
          background-color: rgb(91, 137, 163);
          border: none;
          color: white;
          text-align: center;
          text-decoration: none;
          font-size: 10px;
          margin: 10px 6px 0px;
          transition-duration: 0.4s;
          cursor: pointer;
          border-radius: 7px;
          height: 17px;
        }
        button:hover {
          background-color: black;
          color: white;
        }
        &.grey {
          background: rgb(158, 156, 156);
        }
        &.failed {
          background: red !important;
        }
        &.yelow {
          background: yellow;
        }
        &.green {
          background: green;
        }
        &.orange {
          background: orange !important;
        }
      }
    }
  }
}

.kanban {
  display: flex;
  justify-content: space-around;
  max-width: 100%;
  margin: 0px 25px 0px 20px;
}
</style>