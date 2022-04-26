const nightSky = (ctx) => {
  const star = new Image();
  star.src = "../../images/star.png";
  star.onload = () => {
    ctx.drawImage(star, 220, 220, 30, 30);
    ctx.drawImage(star, 230, 260, 25, 25);
    ctx.drawImage(star, 290, 270, 30, 30);
    ctx.drawImage(star, 370, 240, 30, 30);
    ctx.drawImage(star, 260, 310, 20, 20);
  };
};

export default nightSky;
