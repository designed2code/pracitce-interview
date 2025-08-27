function setKthBit(n, k) {
  // left shift with OR
  return n | (1 << k);
}
