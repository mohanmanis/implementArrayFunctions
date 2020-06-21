/* 
   Implement forEach, map, filter, find, reduce
*/ 

// forEach


var arr = [1, 2, 4, 8,10, 12];
//array.forEach(callback(currentValue, index, arr))

Array.prototype.myForEach = function (callback){
  for(let index = 0; index< this.length; index++){
    callback(this[index], index, this);
  }
}

arr.myForEach((currentValue)=>{
  console.log(currentValue + 100);

})

//array.map(callback(currentValue, index, array))


Array.prototype.myMap = function (callback){
  let result = [];
  for(let index = 0; index< this.length; index++){
        result.push(callback(this[index], index, this));
  }
  return result;
}


Array.prototype.myFilter = function (callback){
  let result = [];
  for(let index = 0; index< this.length; index++) {
    if (callback(this[index], index, this)) {
      result.push(this[index]);
    }
  }
  return result;
}

let result = arr.myFilter((item)=>{
  return item > 8;
})
console.log(result);



Array.prototype.myFind = function (callback){
  for(let index = 0; index< this.length; index++) {
    if (callback(this[index], index, this)) {
         return this[index];
    }
  }
}

console.log(arr.myFind(item => item > 8));


var arr = [1, 2, 4, 8,10, 12];


//arr.reduce((accumulator, currentValue, index, arr)=>{}, initialValue);


console.log(arr.reduce((acc, currentValue, index, arr)=>{return (acc + currentValue)} , 1));


Array.prototype.myReduce = function (callback, initialValue){
  let accumulator = initialValue;
  for(let index = 0; index< this.length; index++) {
    accumulator = callback(accumulator, this[index], index, this);
  }

  return accumulator;
}


console.log (arr.myReduce((acc, value, index, arr)=> acc + value, 1));
