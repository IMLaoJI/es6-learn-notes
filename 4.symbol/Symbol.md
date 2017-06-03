# Symbol

## 主要 应用场景

对象是一种key-value结构的数据.
其中key一般都是字符串.

``` javascript
let obj = {
    'a', 'a'
}

let obj = {
    a, 'a'
}

let key = 'key';
let obj = {};
obj[key] = 'key\'s value';
```

无论是哪种写法,对象的key都是一个字符串,只要是一个字符串,那么就有可能出现被其他人覆盖的情况.

eg.
你写了一个动画库，在DOM上绑定了两个变量 x 和 y，如果别人的动画库也在DOM上绑定了 x 和 y，那么你的动画库和别人的动画库一起使用会出现问题。

`Symbol`的出现就是为了解决这个问题，你自己在DOM上定义一个属性，一般来说，属性名只能是一个字符串，但是，如果这个时候你使用`Symbol`定义属性名，那么这个属性只有你自己才知道，其他人是无法修改的。

`Symbol`定义的属性不能够被枚举出来。
这里只对`Symbol`做概念上的简单介绍。