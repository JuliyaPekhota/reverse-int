module.exports = function reverse (n) {
    let arr = [...n.toString()];
    let newArr = [];   
    arr.map((item) => {
      newArr = [item, ...newArr];
      return newArr;
    });
    return parseInt(newArr.join(""), 10);   
}
