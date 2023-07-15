1. 时间复杂度超标时，少用 filter
用 slice处理
```
//arr = arr.filter(i => i !== index);
        const k = arr.findIndex(text => text === index);
        arr.splice(k, 1);
```