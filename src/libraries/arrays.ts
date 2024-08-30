Array.prototype.chunk = function (chunkSize) {
    let result = [];
  
    for (let i = 0; i < this.length; i += chunkSize) {
      let chunk = this.slice(i, i + chunkSize);
      result.push(chunk);
    }
  
    return result;
};
