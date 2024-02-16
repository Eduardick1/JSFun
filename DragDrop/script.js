const drag = document.querySelector(".drag");
const places = document.querySelectorAll(".place");

drag.addEventListener("dragstart", (e) => {
  e.target.classList.add("hold");
  setTimeout(() => e.target.classList.add("hide"), 0);
});
drag.addEventListener("dragend", (e) => {
  e.target.className = "drag";
});

function dragOver(e) {
  e.preventDefault();
}
function dragEnter(e) {
  e.target.classList.add("hovered");
}
function dragLeave(e) {
  e.target.classList.remove("hovered");
}
function dragDrop(e) {
  e.target.append(drag);
  e.target.classList.remove("hovered");
}

places.forEach((p) => {
  p.addEventListener("dragover", dragOver);
  p.addEventListener("dragenter", dragEnter);
  p.addEventListener("dragleave", dragLeave);
  p.addEventListener("drop", dragDrop);
});

// console.log(int);

// let int;

// console.log(int);

// int = 10;

// console.log(int);

// let T = null;

// console.log((T ??= false));
// console.log((T ??= 20));
// console.log((T ??= undefined));

// напиши переменную _____ в pascal case, snake case, flat case, kebab case, camel case

// const s = {
//   r: 10,
//   d() {
//     return this.r * 2;
//   },
//   p: () => 2 * this.r,
// };
// console.log(s.d());
// console.log(s.p());

// /

// console.log(a, b, c, d);
// function cs(a, b) {
//   a *= 10;
//   b.item = "changed";
// }

// let n = 10;
// let obj = {
//   item: "inchanged",
// };
// cs(n, obj);

// console.log(n, obj);

// const info = {
//   text: "desc",
// };
// info[info.text] = " some text";

// console.log(info);

// const a = () => {
//   console.log("ani");
// };

// requestAnimationFrame(a);
// class Logger {
//   log(text) {
//     console.log(text);
//   }
// }

// class Printer extends Logger {
//   constructor(name) {
//     super();
//     this.name = name;
//   }
//   log(text) {
//     super.log(`${this.name}: ${text}`);
//   }
// }

// const p = new Printer("only");

// p.log("hello");

// let i = 5;
// while (i) {
//   console.log(i--);
// }

// try {
//   const x = 123;
//   x++;
// } catch (e) {
//   console.log("unexp err");
// } finally {
//   console.log("finally", x);
// }
let ArrayofArrays = [
  [0, 1, 1, 1, 2, 3, 3, 3, 6, 7, 8],
  [1, 1, 2],
  [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 5, 6, 6],
];

function removeDuplicates(nums) {
  const removed = nums.reduce((acc, n, i) => {
    if (nums[i + 1] != n) acc.push(n);
    return acc;
  }, []);
  console.log([removed.length, removed]);
}

for (let arr of ArrayofArrays) {
  removeDuplicates(arr);
}
