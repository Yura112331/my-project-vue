import { status } from "../enums/EnumStatus";
export default interface TasksI {
    name: string;
    title: string;
    isComplete: boolean;
    enableClass: boolean;
    animationClass: boolean;
    status: status;
    dataEnd: string;
    dataCreate: string;
    id: number;
    listIndex: string;
    element: DragEvent;
}