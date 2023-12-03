import Heading from './components/heading/index.js';
import Image from './components/image/index.js';
import _ from 'lodash';

const heading = new Heading();
heading.render(_.upperFirst('Image'));
const image = new Image();
image.render();