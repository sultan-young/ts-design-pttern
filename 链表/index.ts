/**
 * 我们在大部分应用中使用数组就够了，但是也有一些情况使用链表更好。
 * 数组是连续的，链表是离散的。
 * 数组删除中间的成员，会导致后续的成员全部往前移动一位，消耗大。
 * 链表是每个成员的内存地址的随意的，链表的成员指针总会指向后一位成员。
 */

class List {
    public name: string;
    public next: this;

    constructor(name: string) {
        this.name = name;
    }
}

let list = new List('链表一');
list.next = new List('链表二');
list.next.next = new List('链表三');

while(list) {
    console.log(list.name);
    list = list.next;
}
