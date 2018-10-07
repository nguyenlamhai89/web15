'use strict'

function search(input, target) {
  let targetnotfound = -1;
  for(let i = 0; i < input.length; i++) {
    if(input[i] == target) {
      targetnotfound = i;
      break;
    }
    else if(input[i] > target) {
      break;
    }
  }
  return targetnotfound;
}

module.exports = search