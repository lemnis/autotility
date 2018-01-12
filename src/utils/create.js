import selector from "./selector";
import elements from "./elements";
import getComputedRole from "./getComputedRole";

import Range from "./../role/abstract/Range";
import Roletype from "./../role/abstract/Roletype";

import Button from "./../role/Button";
import Checkbox from "./../role/Checkbox";
import Combobox from "./../role/Combobox";
import Dialog from "./../role/Dialog";
import Form from "./../role/Form";
import Listbox from "./../role/Listbox";
import Option from "./../role/option";
import Slider from "./../role/Slider";
import Spinbutton from "./../role/Spinbutton";
import Tab from "./../role/Tab";
import Tablist from "./../role/Tablist";
import Tabpanel from "./../role/Tabpanel";
import Textbox from "./../role/Textbox";

var obj = { button: Button, checkbox: Checkbox, combobox: Combobox, dialog: Dialog, form: Form, listbox: Listbox, 
	options: Option, range: Range, roletype: Roletype, slider: Slider, spinbutton: Spinbutton,
	tab: Tab, tablist: Tablist, tabpanel: Tabpanel, texbox: Textbox};

function all() {
	for (let key in obj) {
		var nodeList = document.querySelectorAll(selector.getRole(key));
		for (let i = 0; i < nodeList.length; i++) {
			elements.set(nodeList[i], new obj[key](nodeList[i]));
		}
	}
}

function one(el) {
	if(elements.has(el)) return elements.get(el);
	var role = getComputedRole(el);
	console.log(el, role);
	return elements.set(el, new obj[role](el));
}

function instanceOf(ay, role) {
	return ay instanceof obj[role];
}

export default {all, one, instanceOf};

// roles.forEach((Role) => {
// 	var nodeList = document.querySelectorAll(selector);
// 	for (let i = 0; i < nodeList.length; i++) {
// 		elements.set(nodeList[i], new Role(nodeList[i]));
// 	}

// 	// if(role.options && role.options.selectorsWithImplicitRole) {
// 	// 	var htmlNodeList = document.querySelectorAll(role.options.selectorsWithImplicitRole.join(","));
// 	// 	for (let j = 0; j < htmlNodeList.length; j++) {
// 	// 		elements.set(htmlNodeList[j], new role.default(htmlNodeList[j]));
// 	// 	}
// 	// }
// });