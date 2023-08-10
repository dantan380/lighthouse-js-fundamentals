const smartGarbage = function(trash, bins){
  let keys = Object.keys(bins);
  for (let x of keys){
    if (x === trash){
      bins[x]+= 1;
    }
  }
  return(bins);
};
console.log(smartGarbage("recycling", { waste: 4, recycling: 2, compost: 5 }));
