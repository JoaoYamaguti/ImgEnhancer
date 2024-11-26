'use client'

import { INotification, INotificationContext } from '@imgenhancer/app/lib/interfaces/notifications.interface';
import React, { createContext, useState, useContext } from 'react';

interface INotificationProvider {
    children: any
}

const NotificationContext = createContext<INotificationContext | null>(null);

export const NotificationProvider = ({ children }: INotificationProvider) => {
    const [notifications, setNotifications] = useState([] as INotification[]);

    const addNotification = (status:string, message:string) => {
        setNotifications([...notifications, { status, message, id: Date.now() }]);

        console.log('adicionei')
    };

    const removeNotification = (id: number) => {
        setNotifications((prevNotifications) =>
            prevNotifications.filter((notif) => notif.id !== id)
        );
        console.log('removi')
    };

    return (
        <NotificationContext.Provider value={{ notifications, addNotification, removeNotification }}>
            {children}
        </NotificationContext.Provider>
    );
};

export const useNotifications = () => useContext(NotificationContext) as INotificationContext;
