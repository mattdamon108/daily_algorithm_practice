function mergeArray(arr1, arr2) {
  return Object.values(
    [...arr1, ...arr2].reduce((acc, cur) => {
      acc[cur.id]
        ? (acc[cur.id] = Object.assign(acc[cur.id], cur))
        : (acc[cur.id] = cur);
      return acc;
    }, {})
  );
}

module.exports = { mergeArray };
