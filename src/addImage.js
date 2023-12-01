import image from './image.png'

export default function addImage() {
    const img = document.createElement('img');
    img.alt = 'water';
    img.height = 300;
    img.src = image;
    document.body.appendChild(img);
}