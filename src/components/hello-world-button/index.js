import "./styles.scss";

export default class HelloWorldButon {
  buttonCssClass = "btn_hello_world";
  pCssClass = "text_hello_world";
  render() {
    const button = document.createElement("button");
    button.innerHTML = "Hello world!";
    button.classList.add(this.buttonCssClass);
    button.addEventListener("click", () => {
      const p = document.createElement("p");
      p.innerHTML = "Hello World";
      p.classList.add(this.pCssClass);
      document.body.appendChild(p);
    });
    document.body.appendChild(button);
  }
}
