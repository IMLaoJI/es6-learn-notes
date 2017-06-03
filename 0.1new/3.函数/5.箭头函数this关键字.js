/**
 * Created by Weil on 16/4/9.
 */
// TypeScript

// function func () {
//  setTimeout(function () {
//   console.log(this);
//  });
//  setTimeout(() => {
//    console.log(this);
//  })
// }

// let obj = {
//  id: 123
// };

// func.call(obj);

let obj = {
  id: 123,
  func1: function () {
    setTimeout(function () {
      console.log(this);
    })
  },
  func2: function () {
    setTimeout(() => {
      console.log(this.id);
    })
  },
  func3: () => {
  setTimeout(() => {
    console.log(this);
  });
}
};

obj.func1();
obj.func2();
obj.func3();































