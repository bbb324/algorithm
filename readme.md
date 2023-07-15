1. 时间复杂度超标时，少用 filter
用 slice处理
```
//arr = arr.filter(i => i !== index);
        const k = arr.findIndex(text => text === index);
        arr.splice(k, 1);
```

```
/*
 * 先按照值降序排列
 * 在按照字典序升序排列
 * 返回指定烹饪方式 cuisine 下评分最高的食物的名字。如果存在并列，返回 字典序较小 的名字。
 */
let arr = [
    {
      food: "miso",
      rating: 12,
    },
    {
      food: "sushi",
      rating: 16,
    },
    {
      food: "ramen",
      rating: 16,
    },
  ]

    arr.sort((a, b) => {
      if (a.rating === b.rating) {
        // 按字典升序排列，从小到大
        return a.food.localeCompare(b.food);
      } else {
        return b.rating - a.rating;
      }
    });
  
    return arr;
  

console.log(arr)
```

```
js 优先队列
class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(element, priority) {
    const queueElement = { element, priority };
    let inserted = false;

    for (let i = 0; i < this.queue.length; i++) {
      if (queueElement.priority < this.queue[i].priority) {
        this.queue.splice(i, 0, queueElement);
        inserted = true;
        break;
      }
    }

    if (!inserted) {
      this.queue.push(queueElement);
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.queue.shift().element;
  }

  front() {
    if (this.isEmpty()) {
      return null;
    }
    return this.queue[0].element;
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  size() {
    return this.queue.length;
  }
}

```