const resources = document.querySelector('#resources');
const resource_box = document.querySelector('#resources-box');

resources.addEventListener('mouseover', () => {
  resource_box.classList.toggle('box_closed');
});

resources.addEventListener('mouseout', () => {
  resource_box.classList.toggle('box_closed');
});

resource_box.addEventListener('mouseover', () => {
  resource_box.classList.toggle('box_closed');
});

resource_box.addEventListener('mouseout', () => {
  resource_box.classList.toggle('box_closed');
});
