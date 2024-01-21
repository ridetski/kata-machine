type Node<T> = {
    value: T,
    prev?: Node<T>,
}

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;


    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;
        if (!this.head) {
            this.head = node;
            return;
        }

        node.prev = this.head;
        this.head = node;
    }
    pop(): T | undefined {
        this.length = Math.max(0, this.length - 1);

        if (this.length === 0) {
            const item = this.head;
            this.head = undefined;
            return item?.value;
        }

        const item = this.head as Node<T>;
        this.head = item.prev;

        //free item from memory
        return item.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}