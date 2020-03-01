class Menu {
  constructor(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
  }
  get info() {
    return [this.name, this.price, this.description];
  }
}

function makeMenu() {
  let cheese = new Menu(
    'Cheese pizza',
    'S:8.99 L:13.99 ',
    'A plain cheese pizza with a plain red sauce'
  );

  let pepperoni = new Menu(
    'Pepperoni',
    'S:10.99 L:15.99',
    'Chesse and pepperoni on a plain red sauce'
  );

  let sausage = new Menu(
    'Sausage',
    'S:11.99 L:16.99',
    'Chesse and sauasge on a plain red sauce'
  );

  return [cheese.info, pepperoni.info, sausage.info];
}

export default makeMenu;
