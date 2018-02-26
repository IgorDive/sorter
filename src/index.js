class Sorter {
  constructor() {
    let arr = [];
    
    this.getArr = function() { return arr };
  }

  add(element) {
    this.getArr().push(element);
  }

  at(index) {
    return this.getArr()[index];
  }

  get length() {
    return this.getArr().length;
  }

  toArray() {
    return this.getArr();
  }

  sort(indices) {
    this.sortIndices = indices.sort( (a, b) => a - b );
    this.sortArr = [];
    
    indices.forEach(element => {
      this.sortArr.push(this.getArr()[element]);
    });

    if (this.compareFunction) {
      this.sortArr = this.sortArr.sort(this.compareFunction);
      this.sortIndices.forEach( (item, i) => this.getArr()[item] = this.sortArr[i]);
    } else {
      this.sortArr = this.sortArr.sort( (a, b) => a - b );
      this.sortIndices.forEach( (item, i) => this.getArr()[item] = this.sortArr[i]);
    }
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;