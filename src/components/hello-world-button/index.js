import './styles.css';

export default class HelloWorldButon {
    render() {
        const button = document.createElement('button');
        button.innerHTML = 'Hello world!';
        button.classList.add('btn_hello_world');
        button.addEventListener('click', () => {
            const p = document.createElement('p');
            p.innerHTML = 'Hello World';
            p.classList.add('text_hello_world');
            document.body.appendChild(p);
        })
        document.body.appendChild(button);
    }
}