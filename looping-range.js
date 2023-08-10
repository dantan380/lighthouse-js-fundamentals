function range(start, end, step){
  let numbers = [];
  if (start > end || step < 0 || start === undefined || end === undefined || step === undefined){
    return numbers;
  }else for (let i = start; i <= end; i += step){
    numbers.push(i);
  }
  return numbers;
}
console.log(range(0, 10, 2));
