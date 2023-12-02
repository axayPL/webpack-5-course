import image from './asset.png';
import alt from './assetSourceExample.txt';
import './style.scss';

export default class Image{
    render(){
        const img = document.createElement('img');
        img.src = image;
        img.alt = alt;
        img.classList.add('image');
        document.body.appendChild(img);
    }
}