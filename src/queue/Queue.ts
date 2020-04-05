/**
 * Different types of queues:
 *   - FIFO (First-in, first-out), also known as Queue.
 *   - LIFO (Last-in, first-out), also known as Stack.
 */
export enum QUEUE_TYPE {
    FIFO,
    LIFO
}

/**
 * Class representing a FIFO or LIFO queue.
 */
export default class Queue<T> {
    items: T [] = [];
    type: QUEUE_TYPE;

    constructor (type: QUEUE_TYPE) {
        this.type = type;
    }

    /**
     * Push/add a new item into the tail of the queue (last position).
     * @param item The item to be pushed/added to the queue.
     */
    push(item: T) {
        if (this.type === QUEUE_TYPE.FIFO) {
            this.items = [...this.items, item];
        }else if(this.type === QUEUE_TYPE.LIFO) {
            this.items = [item, ...this.items];
        }
    }

    pop(): T {
        if (this.isEmpty()) {
            throw new Error('Cannot call pop() on an empty queue.');
        }

        const firstItem = this.items[0];
        this.items = this.items.slice(1, this.items.length);
        return firstItem;
    }

    peek(): T {
        if (this.isEmpty()) {
            throw new Error('Cannot call pop() on an empty queue.');
        }

        return this.items[0];
    }

    isEmpty(): boolean {
        return !this.items.length;
    }

    toArray(): T[] {
        return this.items;
    }
}