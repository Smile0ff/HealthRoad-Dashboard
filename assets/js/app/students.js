"use strict";

import $ from "jquery";
import validate from "jquery-validation";
import mask from "jquery-mask-plugin";
import selectify from "selectify";
import Menu from "../controllers/menu";
import Confirm from "../controllers/confirm";
import Bind from "../controllers/bindController";
import Status from "../controllers/statusPanel";

window.$ = $;

$(function(){

	new Menu();
	new Confirm();
	new Bind();
	new Status();

	$(".select-holder").selectify();
	$("form").validate();
});