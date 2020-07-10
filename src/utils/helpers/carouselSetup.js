const CarouselSetup = (el, e) => {
  let posCursor;
  if (e.type === 'touchstart') {
    posCursor = e.touches[0].clientX;
  } else {
    posCursor = e.clientX;
  }

  let posEl = el.getBoundingClientRect().left;

  let posX2 = null;
  const onMouseMove = (e) => {
    if (e.type === 'touchmove') {
      posX2 = posEl + (e.touches[0].clientX - posCursor) * 2;
    } else {
      posX2 = posEl + (e.clientX - posCursor) * 2;
    }

    el.style.transform = `translate(${posX2}px)`;
  };
  const onMouseUp = () => {
    const elem = document.getElementById('carousel');
    if (el.getBoundingClientRect().x > elem.getBoundingClientRect().x) {
      el.style.transform = `translate(0px)`;
    } else if (el.getBoundingClientRect().right < window.innerWidth) {
      el.style.transform = `translate(0px)`;
    }
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('touchmove', onMouseMove);
    document.removeEventListener('touchend', onMouseUp);
  };
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('touchmove', onMouseMove);
  document.addEventListener('touchend', onMouseUp);
  document.addEventListener('mouseup', onMouseUp);
};

export default CarouselSetup;
