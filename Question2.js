let array = [{
    name: 'stephen', age: 41
  },
  {
    name: 'einstein', age: 32
  },
  {
    name: 'newton', age: 46 
  }];

let newArrays = [];

function splitArray( array ) {
    while (array.length > 0) {
        let arrayElement = array.splice(0,1);
        newArrays.push(arrayElement);
    }
    return newArrays;
}

console.log(splitArray(array))
