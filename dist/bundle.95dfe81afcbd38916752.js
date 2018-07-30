(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{70:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=f(r(1)),o=f(r(81)),l=f(r(88)),i=f(r(89)),c=r(20),u=r(90),s=f(r(91));function f(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),n(t,[{key:"render",value:function(){return a.default.createElement("section",{className:"kanban__main"},a.default.createElement(s.default,{transitionName:"article",transitionEnterTimeout:500,transitionLeaveTimeout:300},this.cardsList))}},{key:"cardsList",get:function(){var e=this.props,t=e.board,r=e.backlog,n=e.progress,c=e.review,u=e.complete,s=e.selected;if(t)return a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:s?"kanban__main-wrapper-opacity":"kanban__main-wrapper"},a.default.createElement(o.default,{name:"Backlog",style:"backlog-color",type:"backlog",data:r}),a.default.createElement(o.default,{name:"In Progress",style:"in-progress-color",type:"progress",data:n}),a.default.createElement(o.default,{name:"Review",style:"review-color",type:"review",data:c}),a.default.createElement(o.default,{name:"Complete",style:"complete-color",type:"complete",data:u})),a.default.createElement(i.default,null),a.default.createElement(l.default,null))}}]),t}();t.default=(0,c.connect)(function(e){return{board:e.board,selected:e.selected,backlog:(0,u.filtratedTasksBacklog)(e),progress:(0,u.filtratedTasksProgress)(e),review:(0,u.filtratedTasksReview)(e),complete:(0,u.filtratedTasksComplete)(e)}})(d)},72:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.boardOpen=function(){return{type:n.BOARD_OPEN}},t.addTask=function(e){return{type:n.ADD_TASK,payload:{task:e},generateId:!0}},t.whoIsOpen=function(e){return{type:n.WHO_OPEN,payload:e}},t.deleteTask=function(e){return{type:n.DELETE_TASK,payload:{id:e}}},t.dragAndDrop=function(e,t){return{type:n.DRAG_AND_DROP,payload:{ev:e,cat:t}}},t.selected=function(){return{type:n.SELECT}};var n=r(5)},81:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=f(r(1)),o=f(r(82)),l=f(r(84)),i=f(r(73)),c=r(20),u=f(r(87)),s=r(72);function f(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p=function(e){function t(){var e,r,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,o=Array(a),l=0;l<a;l++)o[l]=arguments[l];return r=n=d(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),n.state={openCards:!0},n.handleToggle=function(){return n.setState(function(e){return{openCards:!e.openCards}})},d(n,r)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.PureComponent),n(t,[{key:"render",value:function(){var e=this.state.openCards,t=this.props,r=t.name,n=t.style,o=t.forDragOver,l=t.forDrop,c=t.onDragEnter,u=t.onDragLeave,s=t.dropping,f=(0,i.default)({"card-wrapper":!0,"cards-dropping":s}),d=(0,i.default)(n);return a.default.createElement("div",{className:d+" "+f,onDragOver:o,onDrop:l,onDragEnter:c,onDragLeave:u},a.default.createElement("div",{className:"card-wrapper__header"},a.default.createElement("div",{className:"backlog-name"},r),a.default.createElement("div",{onClick:this.handleToggle,className:"backlog-dots"},a.default.createElement("i",{className:"material-icons"},e?"expand_more":"chevron_right"))),this.cardsContainer)}},{key:"cardsContainer",get:function(){var e=this.props.type;return this.state.openCards?a.default.createElement("div",{className:"cards"},this.cardsList,a.default.createElement(l.default,{typeCards:e})):null}},{key:"cardsList",get:function(){return this.props.data.map(function(e){return a.default.createElement(a.default.Fragment,{key:e.id},a.default.createElement(o.default,{data:e}))})}}]),t}();t.default=(0,c.connect)(null,{dragAndDrop:s.dragAndDrop})((0,u.default)(p))},82:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=u(r(1)),o=u(r(73)),l=r(20),i=u(r(83)),c=r(72);function u(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var f=function(e){function t(){var e,r,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,o=Array(a),l=0;l<a;l++)o[l]=arguments[l];return r=n=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),n.handleDelete=function(){var e=n.props,t=e.data;(0,e.deleteTask)(t.id)},s(n,r)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.PureComponent),n(t,[{key:"render",value:function(){var e=this.props,t=e.data,r=e.dragging,n=e.forDragStart,l=(0,o.default)("card-container-color",t.style),i=(0,o.default)({card:!0,"card-dragging":r});return a.default.createElement("div",{className:i,draggable:"true",onDragStart:n},a.default.createElement("div",{className:"card__header"},a.default.createElement("div",{className:l},a.default.createElement("div",{className:"card__header-priority"},t.priority)),a.default.createElement("div",{onClick:this.handleDelete,className:"card__header-clear"},a.default.createElement("i",{className:"material-icons"},"clear"))),a.default.createElement("div",{className:"card__text"},t.text),a.default.createElement("div",{className:"card__menu"},a.default.createElement("div",{className:"card__menu-left"},a.default.createElement("div",{className:"comments-wrapper"},a.default.createElement("div",{className:"comments-ico"},a.default.createElement("i",{className:"material-icons"},"comment")),a.default.createElement("div",{className:"comments-num"},t.comments)),a.default.createElement("div",{className:"attach-wrapper"},a.default.createElement("div",{className:"attach-ico"},a.default.createElement("i",{className:"material-icons"},"attach_file")),a.default.createElement("div",{className:"attach-num"},t.attach))),a.default.createElement("div",{className:"card__menu-right"},a.default.createElement("div",{className:"add-peoples"},a.default.createElement("i",{className:"material-icons"},"add")),a.default.createElement("div",{className:"img-avatar"},a.default.createElement("img",{src:t.avatar})))))}}]),t}();t.default=(0,l.connect)(null,{deleteTask:c.deleteTask})((0,i.default)(f))},83:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(r(1));function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}t.default=function(e){var t=function(t){function r(){var e,t,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r);for(var a=arguments.length,o=Array(a),i=0;i<a;i++)o[i]=arguments[i];return t=n=l(this,(e=r.__proto__||Object.getPrototypeOf(r)).call.apply(e,[this].concat(o))),n.state={dragging:!1},n.forDragStart=function(e){var t=n.props.data;n.onDragStart(e,t.id)},n.onDragStart=function(e,t){n.setState(function(e){return{dragging:!e.dragging}}),e.dataTransfer.setData("text/html",t)},l(n,t)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,o.default.Component),a(r,[{key:"render",value:function(){return o.default.createElement(e,n({},this.props,this.state,{forDragStart:this.forDragStart,onDragStart:this.onDragStart}))}}]),r}();return t.displayName="Dragging("+(e.displayName||e.name||"Card")+")",t}},84:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=c(r(1)),o=c(r(85)),l=r(20),i=r(72);function c(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var s=function(e){function t(){var e,r,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,o=Array(a),l=0;l<a;l++)o[l]=arguments[l];return r=n=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),n.handleToggle=function(){var e=n.props;(0,e.whoIsOpenAction)(e.typeCards)},u(n,r)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),n(t,[{key:"render",value:function(){var e=this.props,t=e.typeCards,r=e.whoIsOpen;return a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{onClick:this.handleToggle,className:"card-wrapper__footer"},a.default.createElement("div",{className:"add-task"},"Add task"),a.default.createElement("div",{className:"add-task-ico"},a.default.createElement("i",{className:"material-icons"},t===r?"remove_circle_outline":"add_circle_outline"))),this.formIsOpen)}},{key:"formIsOpen",get:function(){var e=this.props,t=e.typeCards;return t!==e.whoIsOpen?null:a.default.createElement(o.default,{type:t})}}]),t}();t.default=(0,l.connect)(function(e){return{whoIsOpen:e.whoIsOpen}},{whoIsOpenAction:i.whoIsOpen})(s)},85:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=c(r(1)),o=r(20),l=r(72),i=c(r(86));function c(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var s=function(e){function t(){var e,r,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,o=Array(a),l=0;l<a;l++)o[l]=arguments[l];return r=n=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),n.handleSubmit=function(e){var t=n.props.addTask;e.preventDefault(),t(n.props)},u(n,r)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),n(t,[{key:"render",value:function(){var e=this.props,t=e.text,n=e.handleOption,o=e.handleChange,l=e.isValidField,i=e.getClassName;return a.default.createElement("form",{onSubmit:this.handleSubmit,className:"add-card-form add-card-form-true"},a.default.createElement("div",{className:"add-card-form__header"},a.default.createElement("div",{onClick:n,className:"form__low-pr"},a.default.createElement("input",{className:"form__checkbox",type:"radio",name:"priority",value:"card-color-low",alt:"Low Priority"}),a.default.createElement("label",{className:"form__label",htmlFor:"Low Priority"},"Low Priority")),a.default.createElement("div",{onClick:n,className:"form__med-pr"},a.default.createElement("input",{className:"form__checkbox",type:"radio",name:"priority",value:"card-color-med",alt:"Med Priority"}),a.default.createElement("label",{className:"form__label",htmlFor:"Med Priority"},"Med Priority")),a.default.createElement("div",{onClick:n,className:"form__high-pr"},a.default.createElement("input",{className:"form__checkbox",type:"radio",name:"priority",value:"card-color-high",alt:"High Priority"}),a.default.createElement("label",{className:"form__label",htmlFor:"High Priority"},"High Priority"))),a.default.createElement("textarea",{className:i(),type:"text",placeholder:"Write your task",value:t,onChange:o}),a.default.createElement("div",{className:"add-card-form__footer"},a.default.createElement("div",{className:"form__footer"},a.default.createElement("div",{className:"form__footer-av"},a.default.createElement("img",{src:r(21)})),a.default.createElement("div",{className:"attach-ico"},a.default.createElement("i",{className:"material-icons"},"attach_file"))),a.default.createElement("input",{className:"form-add-btn",type:"submit",value:"Add",disabled:!l()})))}}]),t}();t.default=(0,o.connect)(null,{addTask:l.addTask})((0,i.default)(s))},86:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(r(1));function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var i={min:5,max:100};t.default=function(e){var t=function(t){function r(){var e,t,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r);for(var a=arguments.length,o=Array(a),c=0;c<a;c++)o[c]=arguments[c];return t=n=l(this,(e=r.__proto__||Object.getPrototypeOf(r)).call.apply(e,[this].concat(o))),n.state={id:"",type:"",priority:"",user:"M. Thompson",text:"",avatar:"./41aad055f35eb28f42b84ca1b4cf5d53.jpg",comments:"0",attach:"0",style:""},n.handleOption=function(e){var t=e.target,r=t.value,a=t.alt;n.setState({style:r,priority:a})},n.handleChange=function(e){var t=n.props.type,r=e.target.value;if(r.length<i.max)return n.setState({text:r,type:t})},n.isValidField=function(){var e=n.state,t=e.text,r=e.priority;return t.length>=i.min&&r},n.getClassName=function(){return n.state.text.length>=i.min?"add-card-form__main":"add-card-form__main-error add-card-form__main"},l(n,t)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,o.default.Component),a(r,[{key:"render",value:function(){return o.default.createElement(e,n({},this.props,this.state,{handleOption:this.handleOption,handleChange:this.handleChange,isValidField:this.isValidField,getClassName:this.getClassName}))}}]),r}();return t.displayName="SetNewTask("+(e.displayName||e.name||"Form")+")",t}},87:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(r(1));function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}t.default=function(e){var t=function(t){function r(){var e,t,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r);for(var a=arguments.length,o=Array(a),i=0;i<a;i++)o[i]=arguments[i];return t=n=l(this,(e=r.__proto__||Object.getPrototypeOf(r)).call.apply(e,[this].concat(o))),n.state={dropping:!1},n.forDragOver=function(e){n.onDragOver(e)},n.onDragOver=function(e){e.preventDefault()},n.forDrop=function(e){var t=n.props.type;n.onDrop(e,t)},n.onDragEnter=function(){n.setState(function(e){return{dropping:!e.dropping}})},n.onDrop=function(e,t){n.props.dragAndDrop(e,t),n.setState({dropping:!1})},n.onDragLeave=function(){n.setState(function(e){return{dropping:!e.dropping}})},l(n,t)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,o.default.Component),a(r,[{key:"render",value:function(){return o.default.createElement(e,n({},this.props,this.state,{forDragOver:this.forDragOver,onDragOver:this.onDragOver,forDrop:this.forDrop,onDragEnter:this.onDragEnter,onDrop:this.onDrop,onDragLeave:this.onDragLeave}))}}]),r}();return t.displayName="Dropping("+(e.displayName||e.name||"Cards")+")",t}},88:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=function(e){return e&&e.__esModule?e:{default:e}}(r(1)),o=r(20);var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),n(t,[{key:"render",value:function(){return this.props.selected?a.default.createElement("div",{className:"kanban__main-select"},a.default.createElement("div",{className:"main-select"},a.default.createElement("div",{className:"select-wrapper-main"},a.default.createElement("div",{className:"select-text-main"},"Add reports"),a.default.createElement("div",{className:"select-event-note-main"},a.default.createElement("i",{className:"material-icons"},"assessment"))),a.default.createElement("div",{className:"select-wrapper"},a.default.createElement("div",{className:"select-text"},"Add scheduled task"),a.default.createElement("div",{className:"select-event-note"},a.default.createElement("i",{className:"material-icons"},"event_note"))))):null}}]),t}();t.default=(0,o.connect)(function(e){return{selected:e.selected}})(l)},89:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=function(e){return e&&e.__esModule?e:{default:e}}(r(1)),o=r(20),l=r(72);function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var c=function(e){function t(){var e,r,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,o=Array(a),l=0;l<a;l++)o[l]=arguments[l];return r=n=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),n.handleClick=function(){(0,n.props.selected)()},i(n,r)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),n(t,[{key:"render",value:function(){var e=this.props,t=e.whoIsOpen,r=e.select;return t?null:a.default.createElement("div",{onClick:this.handleClick,className:"kanban__main-add-btn"},a.default.createElement("i",{className:"material-icons"},r?"check":"add"))}}]),t}();t.default=(0,o.connect)(function(e){return{whoIsOpen:e.whoIsOpen,select:e.selected}},{selected:l.selected})(c)},90:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.filtratedTasksBacklog=function(e){return e.tasks.filter(function(e){return"backlog"===e.type})},t.filtratedTasksProgress=function(e){return e.tasks.filter(function(e){return"progress"===e.type})},t.filtratedTasksReview=function(e){return e.tasks.filter(function(e){return"review"===e.type})},t.filtratedTasksComplete=function(e){return e.tasks.filter(function(e){return"complete"===e.type})}}}]);