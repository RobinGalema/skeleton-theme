class PubSub {
    constructor() {
        this.events = {};
    }

    // subscribe to an event
    subscribe(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    }

    // unsubscribe from an event
    unsubscribe(event, callback) {
        if (!this.events[event]) return;

        this.events[event] = this.events[event].filter(cb => cb !== callback);
    }

    // publish an event
    publish(event, data) {
        if (!this.events[event]) return;

        this.events[event].forEach(callback => callback(data));
    }
}

// Export a singleton instance
const pubSubInstance = new PubSub();
window.PubSub = pubSubInstance;