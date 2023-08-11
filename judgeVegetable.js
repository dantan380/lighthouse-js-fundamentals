//Array containing different types of tomatoes.
const vegetables = [
  {
    submitter: "Old Man Franklin",
    redness: 10,
    plumpness: 5,
  },
  {
    submitter: "Sally Tomato-Grower",
    redness: 2,
    plumpness: 8,
  },
  {
    submitter: "Hamid Hamidson",
    redness: 4,
    plumpness: 3,
  },
];

//Metric which is used to judge the winner for most red or plump tomato.
let metric = "plumpness";

//Function which uses sort() to arrange the metric keys in descending order, to return the submitter key who has the highest metric value.

const judgeVegetable = function (vegetables, metric){
  vegetables.sort(function(a, b){
    return b[metric] - a[metric];
  });
  return vegetables[0].submitter
  //"[0]" is used in the return statement since the sort() function arranges the keys in descending order, so the first position would have the highest value.
}

console.log(judgeVegetable(vegetables, metric));
