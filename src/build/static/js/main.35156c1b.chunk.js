(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,t,n){e.exports=n(78)},68:function(e,t){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(34),c=n.n(r),l=n(19),i=n(6),u=n(1),s=n(2),m=n(4),d=n(3),f=n(5),b=n(35),h=n.n(b),p=(n(71),function(e){var t=e.toDo,n=e.done;return o.a.createElement("div",{className:"app-header d-flex "},o.a.createElement("h1",null,"Simple Todo List"),o.a.createElement("h2",null,t," more to do, ",n," done"))}),g=(n(72),function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={term:""},n.onSearchChange=function(e){var t=e.target.value;n.setState({term:t}),n.props.onSearchChange(t)},n}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("input",{type:"text",className:"form-control search-input",placeholder:"Start typing to search task",value:this.state.term,onChange:this.onSearchChange})}}]),t}(o.a.Component)),v=n(36),O=(n(73),function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={done:!1,important:!1},n}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.label,n=e.onDeleted,a=e.onToggleImportant,r=e.onToggleDone,c=e.important,l="todo-list-item";return e.done&&(l+=" done"),c&&(l+=" important"),o.a.createElement("span",{className:l},o.a.createElement("span",{className:"todo-list-item-label",onClick:r},t),o.a.createElement("button",{type:"button",className:"btn btn-outline-danger btn-sm float-right",onClick:n},o.a.createElement("i",{className:"fa fa-trash-o"})),o.a.createElement("button",{type:"button",className:"btn btn-outline-success btn-sm float-right",onClick:a},o.a.createElement("i",{className:"fa fa-exclamation"})))}}]),t}(o.a.Component)),j=(n(74),function(e){var t=e.todos,n=e.onDeleted,a=e.onToggleImportant,r=e.onToggleDone,c=t.map(function(e){var t=e.id,c=Object(v.a)(e,["id"]);return o.a.createElement("li",{key:t,className:"list-group-item"},o.a.createElement(O,Object.assign({},c,{onDeleted:function(){return n(t)},onToggleImportant:function(){return a(t)},onToggleDone:function(){return r(t)}})))});return o.a.createElement("ul",{className:"list-group todo-list"},c)}),y=(n(75),function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).buttons=[{name:"all",label:"All"},{name:"active",label:"Active"},{name:"done",label:"Done"}],n}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.filter,n=e.onFilterChange,a=this.buttons.map(function(e){var a=e.name,r=e.label,c=t===a?"btn-info":"btn-outline-secondary";return o.a.createElement("button",{type:"button",className:"btn ".concat(c),key:a,onClick:function(){return n(a)}},r)});return o.a.createElement("div",{className:"btn-group"},a)}}]),t}(o.a.Component)),E=(n(76),function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={label:""},n.onLabelChange=function(e){n.setState({label:e.target.value})},n.onSubmit=function(e){e.preventDefault(),0===n.state.label.trim().length?alert("Your task is empty!"):(n.props.onItemAdded(n.state.label),n.setState({label:""}))},n}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{className:"item-add-form d-flex",onSubmit:this.onSubmit},o.a.createElement("input",{type:"text",className:"form-control",onChange:this.onLabelChange,placeholder:"Start typing to create task",value:this.state.label}),o.a.createElement("button",{className:"btn btn-success"},"Add Task"))}}]),t}(o.a.Component)),C=(n(77),h()("http//localhost:80")),D=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).maxId=100,n.state={todoData:[n.createTodoItem("Byu a milk"),n.createTodoItem("Call Mam"),n.createTodoItem("Have a lunch")],term:"",filter:"all"},n.deleteItem=function(e){n.setState(function(t){var n=t.todoData,a=n.findIndex(function(t){return t.id===e}),o=n.slice(0,a),r=n.slice(a+1);return{todoData:[].concat(Object(i.a)(o),Object(i.a)(r))}})},n.addItem=function(e){var t=n.createTodoItem(e);n.setState(function(e){var n=e.todoData;return{todoData:[].concat(Object(i.a)(n),[t])}})},n.onToggleImportant=function(e){n.setState(function(t){var n=t.todoData,a=n.findIndex(function(t){return t.id===e}),o=n[a],r=Object(l.a)({},o,{important:!o.important}),c=n.slice(0,a),u=n.slice(a+1);return{todoData:[].concat(Object(i.a)(c),[r],Object(i.a)(u))}})},n.onToggleDone=function(e){n.setState(function(t){var n=t.todoData,a=n.findIndex(function(t){return t.id===e}),o=n[a],r=Object(l.a)({},o,{done:!o.done}),c=n.slice(0,a),u=n.slice(a+1);return{todoData:[].concat(Object(i.a)(c),[r],Object(i.a)(u))}})},n.onSearchChange=function(e){n.setState({term:e})},n.onFilterChange=function(e){n.setState({filter:e})},n}return Object(f.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){C.on("connect",function(e){console.log("Connection to socket.io emitted")})}},{key:"eventEmit",value:function(e,t){C.emit(e,t)}},{key:"createTodoItem",value:function(e){return this.eventEmit("createTodoItem",e),{label:e,important:!1,done:!1,id:this.maxId++}}},{key:"search",value:function(e,t){return 0===t.length?e:e.filter(function(e){return e.label.toLowerCase().indexOf(t.toLowerCase())>-1})}},{key:"filter",value:function(e,t){switch(t){case"all":return e;case"active":return e.filter(function(e){return!e.done});case"done":return e.filter(function(e){return e.done});default:return e}}},{key:"render",value:function(){var e=this.state,t=e.todoData,n=e.term,a=e.filter,r=this.filter(this.search(t,n),a),c=t.filter(function(e){return e.done}).length,l=t.length-c;return o.a.createElement("div",{className:"todo-app border border-secondary"},o.a.createElement(p,{toDo:l,done:c}),o.a.createElement("div",{className:"top-panel d-flex"},o.a.createElement(g,{onSearchChange:this.onSearchChange}),o.a.createElement(y,{filter:a,onFilterChange:this.onFilterChange})),o.a.createElement(j,{todos:r,onDeleted:this.deleteItem,onToggleImportant:this.onToggleImportant,onToggleDone:this.onToggleDone}),o.a.createElement(E,{onItemAdded:this.addItem}))}}]),t}(o.a.Component);c.a.render(o.a.createElement(D,null),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.35156c1b.chunk.js.map