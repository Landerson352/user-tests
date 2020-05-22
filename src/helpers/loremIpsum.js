import { times } from 'lodash';

const loremIpsum = (n) => times(n, () => 'Lorem ipsum dolor sit amet.').join(' ');

export default loremIpsum;
