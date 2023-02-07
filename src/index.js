import createBasicStructure from './structure';
import injectHomeEle from './home';
import injectContactsEle from './contacts';
import injectMenuEle from './menu';
import { injectTabBtn, addTabBtnOnClick } from './tab-btn';
import 'normalize.css';
import './style.css';

createBasicStructure();

const content= document.getElementById('content');

const homeBtn = injectTabBtn('Home');
const menuBtn = injectTabBtn('Menu');
const contactsBtn = injectTabBtn('Contacts');

const homeTab = injectHomeEle(content);
const menuTab = injectMenuEle(content);
const contactsTab = injectContactsEle(content);

addTabBtnOnClick(homeBtn, homeTab);
addTabBtnOnClick(menuBtn, menuTab);
addTabBtnOnClick(contactsBtn, contactsTab);


