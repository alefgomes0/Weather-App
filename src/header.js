import cloudPath from './assets/images/cloud.png';

export  default function addCloud() {
  const cloud = new Image();
  cloud.src = cloudPath;
  cloud.style.width = '40px';
  cloud.style.height = '40px';
  document.querySelector('.header').appendChild(cloud);
}

