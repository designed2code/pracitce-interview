function setKthBit(n, k) {
  // left shift
  return n | (1 << k);
}
