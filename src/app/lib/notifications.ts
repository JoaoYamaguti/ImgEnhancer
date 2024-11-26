function createNotification() {
    function createNotification(note) {
        console.log(`notification ${note.title} created`)

        return
    }

    return {
        createNotification
    }
}

function createNotificationListener() {
    const state = {
        observers: []
    }

    function subscribe(observerFunction: any) {
        state.observers.push(observerFunction)
    }

    function notifyAll(command) {
        console.log(`Notifying ${state.observers.length} observers`)

        for (const observerFunction of state.observers) {
            observerFunction(command)
        }
    }

    handleAlert(){

    }

    return { subscribe }
}

const notification = createNotification()
const notificationListener = createNotificationListener()

export default notification