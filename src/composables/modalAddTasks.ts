import { ref, computed } from "vue";
import { useStore } from "vuex";
import { status } from "../enums/EnumStatus";

export function modalAddTasks() {
    const store = useStore();
    const tasks = computed(() => store.state.tasksModule.tasks);
    let isShow: any = ref(false);
    let nameTask: any = ref('');
    let titleTask: any = ref('');
    let dataTask: any = ref('');
    let enableClass: any = ref(false);
    let animationClass: any = ref(false);
    const addTask = (e: any, id: any) => {
        e.preventDefault();
        if (nameTask.value && titleTask.value && dataTask.value) {
          tasks.value.push({
          name: nameTask.value,
          title: titleTask.value,
          dataEnd: dataTask.value,
          dataCreate: Date.now(),
          status: status.todo,
          animationClass: true,
          id: id = tasks.value.length+1,
          });
        }
        nameTask.value;
        titleTask.value;
        dataTask.value;
        animationClass.value;
    }
    
    const showNew = () => {
        isShow.value = true;
      };
      const addClose = () => {
        isShow.value = false;
      };

      return {
        showNew,
        addClose,
        isShow,
        nameTask,
        titleTask,
        dataTask,
        enableClass,
        animationClass,
        addTask,
      }
}