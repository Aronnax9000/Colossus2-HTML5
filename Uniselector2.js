// uniselector2.js - Emulate a PO Type 2 Uniselector
class Uniselector2 {
// 25 rows of wipers but 50 positions in 180 degree mode
  position = 0;
  
  name;
  bank; // Array of Level 
  wipers; // Array of Wiper
  interruptor = true;
  constructor(props) {
    this.name = props.name;
    this.position = props.position;
  }

  introduceSelf() {
    console.log('Uniselector2 ${this.name}');
  }
}

