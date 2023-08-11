const smartGarbage = function(trash, bins){
  let keys = Object.keys(bins);
  //"keys" is created to house all of the keys for bins.
  for (let x of keys){
    if (x === trash){
      bins[x]+= 1;
    }
  //for loop is created to loop through all of bins' keys to find one (x) that matches "trash". bins[x] is used because bracket notation is needed, since "trash" contains a string. Finally, += 1 is used to increment the existing value of that key.
  }
  return(bins);
};
console.log(smartGarbage("recycling", { waste: 4, recycling: 2, compost: 5 }));
