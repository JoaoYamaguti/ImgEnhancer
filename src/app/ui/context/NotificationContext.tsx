'use client'

import React, { createContext, useState, useContext } from 'react';

// Criando o contexto
const NotificationContext = createContext(null);

// Provedor do contexto que irá envolver a aplicação
export const NotificationProvider = ({ children }) => {
    const [notifications, setNotifications] = useState([]);

    const addNotification = (notif: { status: string, message: string, }) => {
        setNotifications([...notifications, { status: notif.status, message: notif.message, id: Date.now() }]);

        console.log('adicionei')
    };

    const removeNotification = (id: Date) => {
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

// Hook para facilitar o consumo do contexto
export const useNotifications = () => useContext(NotificationContext);