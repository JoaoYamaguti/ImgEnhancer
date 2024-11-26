export interface INotification {
    status: string
    message: string
    id: number
}

export type INotificationContext = {
    notifications: INotification[]
    addNotification: (notif: INotification) => void
    removeNotification: (id: number) => void
}