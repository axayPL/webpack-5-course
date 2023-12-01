import image from './image.png'
import imageAlt from './assetSourceExample.txt'

export default function addImage() {
    const img = document.createElement('img');
    img.alt = imageAlt;
    img.height = 300;
    img.src = image;
    document.body.appendChild(img);
}