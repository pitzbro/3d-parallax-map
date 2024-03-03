const inputs = document.querySelectorAll('.controls input');
const labels = Array.from(document.querySelectorAll('.controls label'));
const circles2 = Array.from(document.querySelectorAll('[data-circle]'));
const assets2 = document.querySelectorAll('[data-asset]');

inputs.forEach(input => {
  input.oninput = () => {
    const v = input.getAttribute('name');
    const units = v.startsWith('r') ? 'deg' : v.startsWith('t') ? '%' : '';
    const label = labels.find(l => l.getAttribute('for') === v);
    const valueInput = label.querySelector('span');
    
    const inputString = input.value + units;
    
    valueInput.innerText = inputString;
    
    document.documentElement.style.setProperty(`--${v}`, inputString);
    
    assets2.forEach(asset => {
      const circle = circles2.find(circle => circle.dataset.circle === asset.dataset.asset)
      const {left, top, width, height} = circle.getBoundingClientRect();
      asset.style.left = `${left + (width / 2)}px`;
      asset.style.top = `${top + (height / 2)}px`;
    })
  }
})