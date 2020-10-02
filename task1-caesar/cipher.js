module.exports = (chunk, shift, coder) => {
  const shiftCoder = coder === 'encode' ? shift : (-shift);
  return chunk.map((element) => {
    if(element >= 65 &&  element <= 90) {
      if(element + shiftCoder < 65) {
        return element + shiftCoder + 26;
      }
      if(element + shiftCoder > 90) {
        return element + shiftCoder - 26;
        }
      return element + shiftCoder
    }
    if(element >= 97 &&  element <= 122) {
      if(element + shiftCoder < 97) {
        return element + shiftCoder + 26;
        }
      if(element + shiftCoder > 122) {
        return element + shiftCoder - 26;
      }
      return element + shiftCoder
    }
    return element
  });
}