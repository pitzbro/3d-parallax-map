const circles = Array.from(document.querySelectorAll('[data-circle]'));
const assets = document.querySelectorAll('[data-asset]');

const clock = document.querySelector('.clock');

window.addEventListener('scroll', () => {
    requestAnimationFrame(moveAssets)
  }, false);

  function moveAssets() {

    const prec = window.pageYOffset / (document.body.offsetHeight - window.innerHeight)

    const time = `06:${Math.round(prec * 10) + 12}`;

    clock.innerText = time;

    document.body.style.setProperty('--scroll',prec);

    assets.forEach(asset => {
      const circle = circles.find(circle => circle.dataset.circle === asset.dataset.asset)
      const {left, top, width, height} = circle.getBoundingClientRect();
      asset.style.left = `${left + (width / 2)}px`;
      asset.style.top = `${top + (height / 2)}px`;
    })
  }