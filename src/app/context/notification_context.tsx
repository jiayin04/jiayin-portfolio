"use client";

import React, { createContext, useContext, useState } from 'react';
import Notification from '../components/notification';
import { NotificationContextType, NotificationData } from '../models/interface';
import { NotificationType } from '../models/type';

const NotificationContext = createContext<NotificationContextType>({
  notification: null,
  showNotification: () => {},
  hideNotification: () => {}
});

export const useNotification = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }: { children: React.ReactNode }) => {
  const [notification, setNotification] = useState<NotificationData | null>(null);

  const showNotification = (message: string, type: NotificationType = 'info', duration = 3000) => {
    setNotification({ message, type });
    const timer = setTimeout(() => setNotification(null), duration);
    return () => clearTimeout(timer); // Cleanup function
  };

  const hideNotification = () => setNotification(null);

  return (
    <NotificationContext.Provider value={{ notification, showNotification, hideNotification }}>
      {children}
      {notification && <Notification {...notification} onClose={hideNotification} />}
    </NotificationContext.Provider>
  );
};
