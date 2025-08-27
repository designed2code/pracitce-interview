// Turn the bit OFF (0)
function clearKthBit(n, k) {
  // left shift with AND and NOT
  return n & ~(1 << k);
}
