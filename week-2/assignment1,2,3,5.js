
//Assignment 1: Function and Array

function max(numbers) {
  let maxNum;
  for (let i = 0; i < numbers.length; i++) {
    maxNum = maxNum > numbers[i] ? maxNum : numbers[i];
  }
  return maxNum;
}
console.log(max([1, 2, 4, 5])); // expected output: 5
console.log(max([5, 2, 7, 1, 6])); // expected output: 7

//Assignment 2: Function and Object

function calculate(args) {
  const arr = Object.values(args);
  const ans = arr[2] == "+" ? arr[0] + arr[1] : arr[2] == "-" ? arr[0] - arr[1] : "Not supported";
  return ans;
}

console.log(calculate({ n1: 2, n2: 3, op: "+" }));
// expected output: 5
console.log(calculate({ n1: 5, n2: 2, op: "-" }));
// expected output: 3
console.log(calculate({ n1: 1, n2: 6, op: "x" }));
// expected output: 'Not supported'

//Assignment 3: Function, Array, and Object

function calculate3(data) {
  const arr=[];
  for(i=0; i<data.products.length; i++){
    arr.push(data.products[i].price)
  }
  let sum=0;
  arr.forEach((item)=>sum+=item*data.discount)
  return sum
}

const discountedPrice = calculate3({
  discount: 0.1,
  products: [
    {
      name: "Product 1",
      price: 100
    },
    {
      name: "Product 2",
      price: 700
    },
    {
      name: "Product 3",
      price: 250
    }
  ]
});
console.log(discountedPrice)

// Assignment 5: Algorithm (Advanced Optional)

function twoSum(nums, target) {
  const arr=[];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if(nums[i] + nums[j]===target){
        arr.push(i,j)
        return arr
      }
    }
  }
}

twoSum([2, 7, 11, 15], 9)
