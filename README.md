TypeScript Define a New Type Based on Some Key of Items of an Array Demo
========================================================================

我们能否由一个已有的数组上的元素中的值来定义一个全新的类型？

https://stackoverflow.com/questions/53394285/how-to-define-a-new-type-based-on-some-key-of-items-of-an-array

答案是目前还不行，不过可以有一些变通的手段。
不直接定义一个数组，而是把元素们传入一个特殊构建的函数中，以取得每个元素的类型，最后再整合。

```
npm install
```

Then open it in your webstorm. You will see the compilation errors.
