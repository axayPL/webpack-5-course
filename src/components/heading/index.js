import "./styles.scss";

export default class Heading {
  render(name) {
    const h1 = document.createElement("h1");
    h1.innerHTML = `Webpack 5. Page - ${name}.`;
    document.body.appendChild(h1);
  }
}
