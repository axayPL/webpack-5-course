import './styles.scss'

export default class Heading{
    render() {
        const h1 = document.createElement('h1');
        h1.innerHTML = 'Webpack 5';
        document.body.appendChild(h1);
    }
}