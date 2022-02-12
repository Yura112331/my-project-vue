import { ref, computed, provide } from "vue";
import { useStore } from "vuex";
import TasksI from "@/types/InterfacesTasks";

export function modalInfo() {
    const store = useStore();
    const tasks = computed(() => store.state.tasksModule.tasks);
    let isOpen: any = ref(false);
    let taskDescription: any = ref({});

    const taskDetails = (task: TasksI) => {
        taskDescription.value = task;
        isOpen.value = true;
    };
      
    let showEditButton: any = ref(true);
    const saveTask = (item: TasksI) => {
        tasks.value.forEach((task: TasksI) => {
          if (task.id === taskDescription.value.id) {
            task.title = item.title;
            task.dataEnd = item.dataEnd;
            task.name = item.name;
          }
        });
      };
    provide('saveT', saveTask);
    const closeDetails = () => {
        isOpen.value = false;
    };
    return {
        isOpen,
        taskDescription,
        taskDetails,
        showEditButton,
        closeDetails,
        saveTask,
    };
}