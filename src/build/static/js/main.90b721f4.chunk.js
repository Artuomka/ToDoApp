(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(t,e,n){t.exports=n(78)},68:function(t,e){},71:function(t,e,n){},72:function(t,e,n){},73:function(t,e,n){},74:function(t,e,n){},75:function(t,e,n){},76:function(t,e,n){},77:function(t,e,n){},78:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(34),c=n.n(r),l=n(19),i=n(6),s=n(1),u=n(2),m=n(4),d=n(3),f=n(5),h=n(35),b=n.n(h),p=(n(71),function(t){var e=t.toDo,n=t.done;return o.a.createElement("div",{className:"app-header d-flex "},o.a.createElement("h1",null,"Simple Todo List"),o.a.createElement("h2",null,e," more to do, ",n," done"))}),g=(n(72),function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(m.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(o)))).state={term:""},n.onSearchChange=function(t){var e=t.target.value;n.setState({term:e}),n.props.onSearchChange(e)},n}return Object(f.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return o.a.createElement("input",{type:"text",className:"form-control search-input",placeholder:"Start typing to search task",value:this.state.term,onChange:this.onSearchChange})}}]),e}(o.a.Component)),v=n(36),O=(n(73),function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(m.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(o)))).state={done:!1,important:!1},n}return Object(f.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this.props,e=t.label,n=t.onDeleted,a=t.onToggleImportant,r=t.onToggleDone,c=t.important,l="todo-list-item";return t.done&&(l+=" done"),c&&(l+=" important"),o.a.createElement("span",{className:l},o.a.createElement("span",{className:"todo-list-item-label",onClick:r},e),o.a.createElement("button",{type:"button",className:"btn btn-outline-danger btn-sm float-right",onClick:n},o.a.createElement("i",{className:"fa fa-trash-o"})),o.a.createElement("button",{type:"button",className:"btn btn-outline-success btn-sm float-right",onClick:a},o.a.createElement("i",{className:"fa fa-exclamation"})))}}]),e}(o.a.Component)),j=(n(74),function(t){var e=t.todos,n=t.onDeleted,a=t.onToggleImportant,r=t.onToggleDone,c=e.map(function(t){var e=t.id,c=Object(v.a)(t,["id"]);return o.a.createElement("li",{key:e,className:"list-group-item"},o.a.createElement(O,Object.assign({},c,{onDeleted:function(){return n(e)},onToggleImportant:function(){return a(e)},onToggleDone:function(){return r(e)}})))});return o.a.createElement("ul",{className:"list-group todo-list"},c)}),y=(n(75),function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(m.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(o)))).buttons=[{name:"all",label:"All"},{name:"active",label:"Active"},{name:"done",label:"Done"}],n}return Object(f.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this.props,e=t.filter,n=t.onFilterChange,a=this.buttons.map(function(t){var a=t.name,r=t.label,c=e===a?"btn-info":"btn-outline-secondary";return o.a.createElement("button",{type:"button",className:"btn ".concat(c),key:a,onClick:function(){return n(a)}},r)});return o.a.createElement("div",{className:"btn-group"},a)}}]),e}(o.a.Component)),E=(n(76),function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(m.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(o)))).state={label:""},n.onLabelChange=function(t){n.setState({label:t.target.value})},n.onSubmit=function(t){t.preventDefault(),0===n.state.label.trim().length?alert("Your task is empty!"):(n.props.onItemAdded(n.state.label),n.setState({label:""}))},n}return Object(f.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return o.a.createElement("form",{className:"item-add-form d-flex",onSubmit:this.onSubmit},o.a.createElement("input",{type:"text",className:"form-control",onChange:this.onLabelChange,placeholder:"Start typing to create task",value:this.state.label}),o.a.createElement("button",{className:"btn btn-success"},"Add Task"))}}]),e}(o.a.Component)),D=(n(77),b()("http://localhost:80")),C=function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(m.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(o)))).maxId=0,n.state={todoData:[""],term:"",filter:"all"},n.deleteItem=function(t){console.log(t),n.setState(function(e){var n=e.todoData,a=n.findIndex(function(e){return e.id===t}),o=n.slice(0,a),r=n.slice(a+1);return{todoData:[].concat(Object(i.a)(o),Object(i.a)(r))}}),n.eventEmit("deleteItem",t)},n.addItem=function(t){var e=n.createTodoItem(t);n.setState(function(t){var n=t.todoData;return{todoData:[].concat(Object(i.a)(n),[e])}})},n.onToggleImportant=function(t){n.setState(function(e){var n=e.todoData,a=n.findIndex(function(e){return e.id===t}),o=n[a],r=Object(l.a)({},o,{important:!o.important}),c=n.slice(0,a),s=n.slice(a+1);return{todoData:[].concat(Object(i.a)(c),[r],Object(i.a)(s))}}),n.eventEmit("onToggleImportant",t)},n.onToggleDone=function(t){n.setState(function(e){var n=e.todoData,a=n.findIndex(function(e){return e.id===t}),o=n[a],r=Object(l.a)({},o,{done:!o.done}),c=n.slice(0,a),s=n.slice(a+1);return{todoData:[].concat(Object(i.a)(c),[r],Object(i.a)(s))}}),n.eventEmit("onToggleDone",t)},n.onSearchChange=function(t){n.setState({term:t})},n.onFilterChange=function(t){n.setState({filter:t})},n}return Object(f.a)(e,t),Object(u.a)(e,[{key:"setDataOnConnection",value:function(t){for(var e=[],n=0;n<t.length;n++){var a={label:t[n].label,important:t[n].important,done:t[n].done,id:t[n].id};e.push(a),this.maxId=e.length}this.setState(function(){return{todoData:e}})}},{key:"componentDidMount",value:function(){var t=this;D.on("connect",function(t){console.log("Connection to socket.io emitted")}),D.on("setItems",function(e){console.log("Set Items Emitted "+JSON.stringify(e)),t.setDataOnConnection(e)})}},{key:"eventEmit",value:function(t,e){D.emit(t,e)}},{key:"createTodoItem",value:function(t){var e={label:t,important:!1,done:!1,id:this.maxId};return this.eventEmit("createTodoItem",e),{label:t,important:!1,done:!1,id:this.maxId++}}},{key:"search",value:function(t,e){return 0===e.length?t:t.filter(function(t){return t.label.toLowerCase().indexOf(e.toLowerCase())>-1})}},{key:"filter",value:function(t,e){switch(e){case"all":return t;case"active":return t.filter(function(t){return!t.done});case"done":return t.filter(function(t){return t.done});default:return t}}},{key:"render",value:function(){var t=this.state,e=t.todoData,n=t.term,a=t.filter,r=this.filter(this.search(e,n),a),c=e.filter(function(t){return t.done}).length,l=e.length-c;return o.a.createElement("div",{className:"todo-app border border-secondary"},o.a.createElement(p,{toDo:l,done:c}),o.a.createElement("div",{className:"top-panel d-flex"},o.a.createElement(g,{onSearchChange:this.onSearchChange}),o.a.createElement(y,{filter:a,onFilterChange:this.onFilterChange})),o.a.createElement(j,{todos:r,onDeleted:this.deleteItem,onToggleImportant:this.onToggleImportant,onToggleDone:this.onToggleDone}),o.a.createElement(E,{onItemAdded:this.addItem}))}}]),e}(o.a.Component);c.a.render(o.a.createElement(C,null),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.90b721f4.chunk.js.map