function contact() {
  const mainInfo = document.createElement('h1');
  const mainNumber = document.createElement('h2');
  const manager = document.createElement('h1');
  const managerNumber = document.createElement('h2');
  const managerEmail = document.createElement('h2');

  mainInfo.innerHTML = 'For reservations or other inquiries please call: ';
  mainNumber.innerHTML = '654-1568-1350';
  manager.innerHTML =
    'For business inquiries or events please contact our manager: ';
  managerNumber.innerHTML = '654-1568-1340';
  managerEmail.innerHTML = 'manager@pizzaplace.com';

  return [mainInfo, mainNumber, manager, managerNumber, managerEmail];
}

export default contact;
