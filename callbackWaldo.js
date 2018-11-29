// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(found, index) {
    if (arr[index] === "Waldo") {
      actionWhenFound(index);
    }
  })
}

function actionWhenFound(index) {
  console.log("Found Waldo at index", index + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);