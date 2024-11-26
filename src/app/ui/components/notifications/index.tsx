'use client'
import React, { useEffect } from 'react';
import { useNotifications } from '../../context/NotificationContext';

import { FiInfo, FiAlertCircle, FiCheckCircle } from "react-icons/fi";

import './style.scss'

interface INotification {
    status: string
    message: string
    onClose: () => void
}

const Notification = ({ status, message, onClose }: INotification) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 4000);

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className='notification'>
            <div className={`title ${status}`}>
                {
                    status === "success" ? <FiCheckCircle /> : <FiAlertCircle />
                }
                <span>{status}</span>
            </div>
            <p>{message}</p>
        </div>
    );
};

export default function Notifications() {
    const { notifications, removeNotification } = useNotifications();
    console.log(notifications)

    return (
        <div className="notifications">
            {
                notifications.map((notification) => (
                    <Notification
                        key={notification.id}
                        status={notification.status}
                        message={notification.message}
                        onClose={() => removeNotification(notification.id)}
                    />
                ))
            }
        </div>
    );
};
