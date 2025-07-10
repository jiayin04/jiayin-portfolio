import { NotificationType } from "./type";

export interface ProjectInterface {
    title: string;
    description: string;
    image: string;
    tags: string[];
    projectLink: string;
    demoLink: string;
}

export interface ExperienceInterface {
    title: string;
    desc: string;
    image?: string;
    date: Date;
    category: "General" | "Volunteer" | "Event" | "Job";
}


/* Utility */
export interface NotificationData {
    message: string;
    type: NotificationType;
}

export interface NotificationContextType {
  notification: NotificationData | null;
  showNotification: (message: string, type?: NotificationType, duration?: number) => void;
  hideNotification: () => void;
}

/*
 * Props 
 */
export interface ContactFormProps {
  onSubmitFormStatus: (success: boolean) => void;
}

export interface NotificationProps {
  message: string;
  type: NotificationType;
  onClose: () => void;
}