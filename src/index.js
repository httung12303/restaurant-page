import { Home, Menu, Contacts } from './tab-content';

import 'normalize.css';
import './style.css';

const home = Home();
const menu = Menu();
const contacts = Contacts();
const content = document.getElementById('content');

home.injectHTML(content);
menu.injectHTML(content);
contacts.injectHTML(content);
