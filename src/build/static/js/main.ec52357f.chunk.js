(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(t,e,n){t.exports=n(79)},68:function(t,e){},71:function(t,e,n){},72:function(t,e,n){},73:function(t,e,n){},74:function(t,e,n){},75:function(t,e,n){},76:function(t,e,n){},77:function(t,e,n){},78:function(t,e,n){},79:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(35),i=n.n(r),c=n(1),l=n(2),s=n(3),u=n(5),m=n(4),d=n(6),f=n(13),b=n(12),h=n.n(b),g=(n(71),function(t){var e=t.toDo,n=t.done,a=t.header,r=(t.listID,t.onProjectDeleted),i=t.onProjectEdited;t.onDateEdited;return o.a.createElement("div",{className:"app-header d-flex "},o.a.createElement("h1",null,a),o.a.createElement("button",{type:"button",className:"btn btn-outline-light btn-lg float-right",onClick:r},o.a.createElement("i",{className:"fa fa-trash-o"})),o.a.createElement("button",{type:"button",className:"btn btn-outline-light btn-lg float-right",onClick:i},o.a.createElement("i",{className:"fa fa-pencil"})),o.a.createElement("h2",null,e," more to do, ",n," done"))}),p=(n(72),function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(o)))).state={term:""},n.onSearchChange=function(t){var e=t.target.value;n.setState({term:e}),n.props.onSearchChange(e)},n}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return o.a.createElement("input",{type:"text",className:"form-control search-input",placeholder:"Start typing to search task",value:this.state.term,onChange:this.onSearchChange})}}]),e}(o.a.Component)),v=n(36),D=(n(73),function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(o)))).state={done:!1,important:!1},n}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.props,e=t.label,n=t.onDeleted,a=t.onEdited,r=t.onToggleImportant,i=t.onToggleDone,c=t.onToggleDown,l=t.onToggleUp,s=t.important,u="todo-list-item";return t.done&&(u+=" done"),s&&(u+=" important"),o.a.createElement("span",{className:u},o.a.createElement("span",{className:"todo-list-item-label",onClick:i},e),o.a.createElement("button",{type:"button",className:"btn btn-outline-danger btn-sm float-right",onClick:n},o.a.createElement("i",{className:"fa fa-trash-o"})),o.a.createElement("button",{type:"button",className:"btn btn-outline-secondary btn-sm float-right",onClick:a},o.a.createElement("i",{className:"fa fa-pencil"})),o.a.createElement("button",{type:"button",className:"btn btn-outline-success btn-sm float-right",onClick:r},o.a.createElement("i",{className:"fa fa-exclamation"})),o.a.createElement("button",{type:"button",className:"btn btn-outline-dark btn-sm float-right",onClick:c},o.a.createElement("i",{className:"fa fa-arrow-down"})),o.a.createElement("button",{type:"button",className:"btn btn-outline-dark btn-sm float-right",onClick:l},o.a.createElement("i",{className:"fa fa-arrow-up"})))}}]),e}(o.a.Component)),E=(n(74),function(t){var e=t.todos,n=t.onDeleted,a=t.onEdited,r=t.onToggleImportant,i=t.onToggleDone,c=t.onToggleDown,l=t.onToggleUp,s=e.map(function(t){var e=t.id,s=Object(v.a)(t,["id"]);return o.a.createElement("li",{key:e,className:"list-group-item"},o.a.createElement(D,Object.assign({},s,{onDeleted:function(){return n(e)},onEdited:function(){return a(e)},onToggleImportant:function(){return r(e)},onToggleDone:function(){return i(e)},onToggleDown:function(){return c(e)},onToggleUp:function(){return l(e)}})))});return o.a.createElement("ul",{className:"list-group todo-list"},s)}),j=(n(75),function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(o)))).buttons=[{name:"all",label:"All"},{name:"active",label:"Active"},{name:"done",label:"Done"}],n}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.props,e=t.filter,n=t.onFilterChange,a=this.buttons.map(function(t){var a=t.name,r=t.label,i=e===a?"btn-info":"btn-outline-secondary";return o.a.createElement("button",{type:"button",className:"btn ".concat(i),key:a,onClick:function(){return n(a)}},r)});return o.a.createElement("div",{className:"btn-group"},a)}}]),e}(o.a.Component)),O=(n(76),function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(o)))).state={label:""},n.onLabelChange=function(t){n.setState({label:t.target.value})},n.onSubmit=function(t){t.preventDefault(),0===n.state.label.trim().length?alert("Your task is empty!"):(n.props.onItemAdded(n.state.label),n.setState({label:""}))},n}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return o.a.createElement("form",{className:"item-add-form d-flex",onSubmit:this.onSubmit},o.a.createElement("input",{type:"text",className:"form-control",onChange:this.onLabelChange,placeholder:"Start typing to create task",value:this.state.label}),o.a.createElement("button",{className:"btn btn-success"},"Add Task"))}}]),e}(o.a.Component)),y=(n(77),h()("http://localhost:9000")),I=function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(o)))).listID=n.props,n.todoData=n.props,n.maxId=0,n.state={todoData:n.todoData,term:"",filter:"all"},n.deleteItem=function(t){console.log(t),n.setState(function(e){var n=e.todoData,a=n.findIndex(function(e){return e.id===t}),o=n.slice(0,a),r=n.slice(a+1);return{todoData:[].concat(Object(c.a)(o),Object(c.a)(r))}}),n.eventEmit("deleteItem",t)},n.addItem=function(t){var e=n.createTodoItem(t);n.setState(function(t){var n=t.todoData;return{todoData:[].concat(Object(c.a)(n),[e])}})},n.editItem=function(t){n.setState(function(e){var n=e.todoData,a=prompt("Enter new task name");if(null!==a){if(0!==a.trim().length){var o=n.findIndex(function(e){return e.id===t}),r=n[o],i=Object(f.a)({},r,{label:a}),l=n.slice(0,o),s=n.slice(o+1);return{todoData:[].concat(Object(c.a)(l),[i],Object(c.a)(s))}}alert("Task name cannot be empty!")}}),n.eventEmit("",t)},n.onToggleImportant=function(t){n.setState(function(e){var n=e.todoData,a=n.findIndex(function(e){return e.id===t}),o=n[a],r=Object(f.a)({},o,{important:!o.important}),i=n.slice(0,a),l=n.slice(a+1);return{todoData:[].concat(Object(c.a)(i),[r],Object(c.a)(l))}}),n.eventEmit("onToggleImportant",t)},n.onToggleDone=function(t){n.setState(function(e){var n=e.todoData,a=n.findIndex(function(e){return e.id===t}),o=n[a],r=Object(f.a)({},o,{done:!o.done}),i=n.slice(0,a),l=n.slice(a+1);return{todoData:[].concat(Object(c.a)(i),[r],Object(c.a)(l))}}),n.eventEmit("onToggleDone",t)},n.onToggleDown=function(t){n.setState(function(e){var n=e.todoData,a=n.findIndex(function(e){return e.id===t});if(!(a>=n.length-1)){var o=n[a],r=n[a+1];n[a]=r,n[a+1]=o;var i=n.slice(0,a),l=n.slice(a+1);return{todoData:[].concat(Object(c.a)(i),[r],Object(c.a)(l))}}alert("This item has lowest priority!")}),n.eventEmit("onToggleDown",t)},n.onToggleUp=function(t){n.setState(function(e){var n=e.todoData,a=n.findIndex(function(e){return e.id===t});if(!(a<=0)){var o=n[a],r=n[a-1];n[a]=r,n[a-1]=o;var i=n.slice(0,a),l=n.slice(a+1);return{todoData:[].concat(Object(c.a)(i),[r],Object(c.a)(l))}}alert("This item has highest priority!")}),n.eventEmit("onToggleUp",t)},n.onSearchChange=function(t){n.setState({term:t})},n.onFilterChange=function(t){n.setState({filter:t})},n}return Object(d.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){console.log(this.todoData)}},{key:"eventEmit",value:function(t,e){y.emit(t,e)}},{key:"createTodoItem",value:function(t){var e={label:t,important:!1,done:!1,id:this.maxId};return this.eventEmit("createTodoItem",e),{label:t,important:!1,done:!1,id:this.maxId++}}},{key:"search",value:function(t,e){return 0===e.length?t:t.filter(function(t){return t.label.toLowerCase().indexOf(e.toLowerCase())>-1})}},{key:"filter",value:function(t,e){switch(e){case"all":return t;case"active":return t.filter(function(t){return!t.done});case"done":return t.filter(function(t){return t.done});default:return t}}},{key:"render",value:function(){var t=this.state,e=t.todoData,n=t.term,a=t.filter,r=this.filter(this.search(e,n),a),i=this.props,c=i.header,l=i.onProjectDeleted,s=i.onProjectEdited,u=i.onDateEdited,m=e.filter(function(t){return t.done}).length,d=e.length-m;return o.a.createElement("div",{className:"project-list border border-secondary"},o.a.createElement(g,{toDo:d,done:m,header:c,onProjectDeleted:l,onProjectEdited:s,onDateEdited:u}),o.a.createElement("div",{className:"top-panel d-flex"},o.a.createElement(p,{onSearchChange:this.onSearchChange}),o.a.createElement(j,{filter:a,onFilterChange:this.onFilterChange})),o.a.createElement(E,{todos:r,onDeleted:this.deleteItem,onEdited:this.editItem,onToggleImportant:this.onToggleImportant,onToggleDone:this.onToggleDone,onToggleDown:this.onToggleDown,onToggleUp:this.onToggleUp}),o.a.createElement(O,{onItemAdded:this.addItem}))}}]),e}(o.a.Component),T=(n(78),h()("http://localhost:9000")),C=function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(o)))).listCount=0,n.state={listData:[]},n.onListAdd=function(){var t=n.createProjectListItem(++n.listCount);void 0!==t&&(n.setState(function(e){var n=e.listData;return{listData:[].concat(Object(c.a)(n),[t])}}),n.eventEmit("onListAdd",t))},n.createProjectListItem=function(t){var e=prompt("Enter the new project name (not more 14 characters long)");if(null!==e)if(0!==e.trim().length){if(!(e.trim().length>14))return{listName:e.trim(),listID:t};alert("Project name is to long. It must be not more than 14 characters.")}else alert("Project name cannot be empty!")},n.onProjectDeleted=function(t){n.setState(function(e){var n=e.listData,a=n.findIndex(function(e){return e.listID===t}),o=n.slice(0,a),r=n.slice(a+1);return{listData:[].concat(Object(c.a)(o),Object(c.a)(r))}}),n.eventEmit("onProjectDeleted",t)},n.onProjectEdited=function(t){var e=null;n.setState(function(n){var a=n.listData,o=a.findIndex(function(e){return e.listID===t}),r=prompt("Enter new list name. (not more 14 characters long)");if(null!==r)if(0!==r.trim().length){if(!(r.trim().length>14)){var i=a[o];i.listName=r;var c=i,l=a;return l[o]=c,e={listName:r,listID:t},{listData:l}}alert("Project name is to long. It must be not more than 14 characters.")}else alert("Project name cannot be empty!")}),null!=e&&n.eventEmit("onProjectEdited",e)},n.onDateEdited=function(t){alert("LIST DATE EDIT CALLED!")},n}return Object(d.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;T.on("connect",function(t){console.log("Connection to socket.io emitted from app emitted")}),this.eventEmit("getProjects"),T.on("setProjects",function(e){console.log("Set Projects Emitted "+JSON.stringify(e)),t.setProjectsOnConnection(e)})}},{key:"setProjectsOnConnection",value:function(t){for(var e=[],n=0;n<t.length;n++){var a={listName:t[n].listName,listID:t[n].listID};e.push(a),this.listCount=e.length}this.setState(function(){return{listData:e}})}},{key:"eventEmit",value:function(t,e){T.emit(t,e)}},{key:"render",value:function(){var t=this,e=this.state.listData.map(function(e){var n=e.listID,a=e.listName,r=e.todoData;e.onProjectDeleted,e.onProjectEdited,e.onDateEdited;return o.a.createElement("li",{key:n,className:"project-list-item"},o.a.createElement(I,{listID:n,header:a,todoData:r,onProjectDeleted:function(){return t.onProjectDeleted(n)},onProjectEdited:function(){return t.onProjectEdited(n)},onDateEdited:function(){return t.onDateEdited(n)}}))});return o.a.createElement("div",null,o.a.createElement("div",{className:"head-text"},"SIMPLE TODO LISTS"),o.a.createElement("ul",null,e),o.a.createElement("div",{className:"btn-container"},o.a.createElement("button",{type:"button",id:"btnListAdd",className:"btn btn-primary btn-lg",onClick:this.onListAdd},"Add TODO List")))}}]),e}(o.a.Component);i.a.render(o.a.createElement(C,null),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.ec52357f.chunk.js.map