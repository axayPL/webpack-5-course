import HelloWorldButton from './components/hello-world-button/index.js';
import Heading from './components/heading/index.js';
import _ from 'lodash';

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();
const heading = new Heading();
heading.render(_.upperFirst('hello world'));