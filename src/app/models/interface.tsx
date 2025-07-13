import { iconComponents, IconKey } from "../utils/icons";
import { NotificationType } from "./type";

export interface ProjectInterface {
  title: string;
  description: string;
  image: string;
  tags: string[];
  project_link: string;
  demo_link: string;
  created_at: Date;
}

export interface ExperienceInterface {
  title: string;
  desc: string;
  image?: string;
  from_date: Date;
  to_date: Date | null;
  category: "General" | "Competition" | "Event" | "Job";
}

export interface Skill {
  name: string;
  description: string;
  icon_name: keyof typeof iconComponents;
  categories: {
    name: string;
  };
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

export interface ProjectCardProps {
  project: ProjectInterface;
}
