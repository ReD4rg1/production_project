import { Notification } from "@/entities/Notification/model/types/notification";

export const notificationsMock: Notification[] = [
  {
    id: "1",
    title: "Уведомление 1",
    description: "Произошло какое-то событие",
  },
  {
    id: "2",
    title: "Уведомление 2",
    description: "Произошло какое-то событие",
    href: "http://localhost:3000/admin",
  },
  {
    id: "3",
    title: "Уведомление 3",
    description: "Произошло какое-то событие",
    href: "http://localhost:3000/admin",
  },
  {
    id: "4",
    title: "Уведомление 4",
    description: "Произошло какое-то событие",
  },
  {
    id: "5",
    title: "Уведомление 1",
    description: "Произошло какое-то событие",
  },
];
