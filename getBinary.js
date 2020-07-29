function convertBinary(int) {
  let result = [];

  function recursive(int) {
    if (int > 1) {
      const remainder = int % 2;
      const devided = Math.floor(int / 2);
      result = [...result, remainder];

      return recursive(devided);
    }

    result = [int, ...result];

    return Number(result.join(""));
  }

  return recursive(int);
}

module.exports = convertBinary;
