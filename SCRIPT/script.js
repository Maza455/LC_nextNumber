//next number function
let myArray = [1, 2, 3, 4, 5];
function createNextNumberFunction(arr) {
  let index = 0;
  return ()=> {
    if (index < arr.length) {
      console.log(arr[index]);
      index++;
    } else {
      console.log("End of array reached");
    }
  };
}

let nextNumber = createNextNumberFunction(myArray);
nextNumber();
nextNumber();
nextNumber();