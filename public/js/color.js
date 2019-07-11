const boot = document.getElementById('boot');
const colorDetail = document.createElement('ul');

fetch('color.html')
  .then(res => res.json())
  .then(colors => {
    colors.forEach(color => {
      const li = document.createElement('li');
      li.textContent = `${color.name} - ${color.hex} - ${color.r} - ${color.r} - ${color.g} ${color.b}`;
      colorDetail.appendChild(li);
    });
  });



boot.appendChild(colorDetail);
