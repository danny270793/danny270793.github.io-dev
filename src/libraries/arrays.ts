interface Array<T> {
  chunk(chunkSize: number): Array<T[]>;
}

Array.prototype.chunk = function <T>(chunkSize: number): Array<T[]> {
  const result: Array<T[]> = [];

  for (let i = 0; i < this.length; i += chunkSize) {
    const chunk: T[] = this.slice(i, i + chunkSize);
    result.push(chunk);
  }

  return result;
};
