export interface INotification {
    status: string
    message: string
    id: number
}

export type INotificationContext = {
    notifications: INotification[]
    addNotification: (status: string, message: string) => void
    removeNotification: (id: number) => void
}