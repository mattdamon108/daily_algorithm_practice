function numberOfItems(arr, item) {
  return arr.flat(Infinity).filter((i) => i === item).length;
}

module.exports = numberOfItems;
