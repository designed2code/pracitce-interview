function checkIthBit(n, k) {
  if ((1 & (n >> k)) !== 0) {
    return true;
  } else {
    return false;
  }
}

console.log(checkIthBit(4, 0));
console.log(checkIthBit(4, 2));
console.log(checkIthBit(500, 3));

function checkIthBitLeftShift(n, k) {
  if ((n & (1 << k)) !== 0) {
    return true;
  } else {
    return false;
  }
}
