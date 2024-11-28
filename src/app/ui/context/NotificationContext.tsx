'use client'

import { INotification, INotificationContext } from '@imgenhancer/app/lib/interfaces/notifications.interface';
import React, { createContext, useState, useContext } from 'react';

const NotificationContext = createContext<INotificationContext | null>(null);

export const NotificationProvider = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
    const [notifications, setNotifications] = useState<Array<INotification>>([]);

    const addNotification = (status: string, message: string) => {
        setNotifications((prevNotifications) => [...prevNotifications, { status, message, id: Date.now() }]);
    };

    const removeNotification = (id: number) => {
        setNotifications((prevNotifications) =>
            prevNotifications.filter((notif) => notif.id !== id)
        );
    };

    return (
        <NotificationContext.Provider value={{ notifications, addNotification, removeNotification }}>
            {children}
        </NotificationContext.Provider>
    );
};

export const useNotifications = () => useContext(NotificationContext) as INotificationContext;
