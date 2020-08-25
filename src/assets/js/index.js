import "src/app/components/blog-page/blog-page.component.scss"

const starship = document.getElementById("starship");

document.onmousemove = ev => {
    const positionX = (window.innerWidth / 2 - ev.x) / 4;
    const positionY = -ev.y / 5;
    console.log(positionX, positionY);
    starship.style.transform = `translate(${positionX}px, ${positionY}px)`;
  };