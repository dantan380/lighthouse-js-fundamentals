function howManyHundreds(num){
  let result = num / 100;
  if (result < 1){
    return 0;
  }else{
    return Math.trunc(result);
  }
};
console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);


for (var row = 0; row < numbers.length; row++){
  for (var column = 0; column < numbers[row].length; column++){
    if (number % 2 === 0){
      console.log("even");
    }else{
      console.log("odd");
    }
  }
}
