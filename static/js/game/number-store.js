class Num {
  constructor() {
    this.num = undefined;
  }

  init(num) {
    this.num = num;
  }

  addNum = () => {
    this.num++;
  };

  subNum = () => {
    this.num--;
  };

  getNum = () => {
    return this.num;
  };

  setNum = (num) => {
    this.num = num;
  };
}

const number = new Num();
export default number;
