(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:function(t,e,n){t.exports=n(82)},45:function(t,e,n){},46:function(t,e,n){},47:function(t,e,n){},48:function(t,e,n){},49:function(t,e,n){},50:function(t,e,n){},51:function(t,e,n){},52:function(t,e,n){},79:function(t,e){},82:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(35),i=n.n(r),c=n(20),l=n.n(c),s=n(36),u=n(1),d=n(2),m=n(3),f=n(5),h=n(4),g=n(6),b=n(12),p=(n(45),function(t){var e=t.toDo,n=t.done,a=t.header,r=(t.listID,t.onProjectDeleted),i=t.onProjectEdited;t.onDateEdited;return o.a.createElement("div",{className:"app-header d-flex "},o.a.createElement("h1",null,a),o.a.createElement("button",{type:"button",className:"btn btn-outline-light btn-lg float-right",onClick:r},o.a.createElement("i",{className:"fa fa-trash-o"})),o.a.createElement("button",{type:"button",className:"btn btn-outline-light btn-lg float-right",onClick:i},o.a.createElement("i",{className:"fa fa-pencil"})),o.a.createElement("h2",null,e," more to do, ",n," done"))}),D=(n(46),function(t){function e(){var t,n;Object(d.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(f.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(o)))).state={term:""},n.onSearchChange=function(t){var e=t.target.value;n.setState({term:e}),n.props.onSearchChange(e)},n}return Object(g.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){return o.a.createElement("input",{type:"text",className:"form-control search-input",placeholder:"Start typing to search task",value:this.state.term,onChange:this.onSearchChange})}}]),e}(o.a.Component)),v=n(38),j=(n(47),function(t){function e(){var t,n;Object(d.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(f.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(o)))).state={done:!1,important:!1},n}return Object(g.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){var t=this.props,e=t.label,n=t.onDeleted,a=t.onEdited,r=t.onToggleImportant,i=t.onToggleDone,c=t.onToggleDown,l=t.onToggleUp,s=t.important,u="todo-list-item";return t.done&&(u+=" done"),s&&(u+=" important"),o.a.createElement("span",{className:u},o.a.createElement("span",{className:"todo-list-item-label",onClick:i},e),o.a.createElement("button",{type:"button",className:"btn btn-outline-danger btn-sm float-right",onClick:n},o.a.createElement("i",{className:"fa fa-trash-o"})),o.a.createElement("button",{type:"button",className:"btn btn-outline-secondary btn-sm float-right",onClick:a},o.a.createElement("i",{className:"fa fa-pencil"})),o.a.createElement("button",{type:"button",className:"btn btn-outline-success btn-sm float-right",onClick:r},o.a.createElement("i",{className:"fa fa-exclamation"})),o.a.createElement("button",{type:"button",className:"btn btn-outline-dark btn-sm float-right",onClick:c},o.a.createElement("i",{className:"fa fa-arrow-down"})),o.a.createElement("button",{type:"button",className:"btn btn-outline-dark btn-sm float-right",onClick:l},o.a.createElement("i",{className:"fa fa-arrow-up"})))}}]),e}(o.a.Component)),E=(n(48),function(t){var e=t.todos,n=t.onDeleted,a=t.onEdited,r=t.onToggleImportant,i=t.onToggleDone,c=t.onToggleDown,l=t.onToggleUp,s=e.map(function(t){var e=t.id,s=Object(v.a)(t,["id"]);return o.a.createElement("li",{key:e,className:"list-group-item"},o.a.createElement(j,Object.assign({},s,{onDeleted:function(){return n(e)},onEdited:function(){return a(e)},onToggleImportant:function(){return r(e)},onToggleDone:function(){return i(e)},onToggleDown:function(){return c(e)},onToggleUp:function(){return l(e)}})))});return o.a.createElement("ul",{className:"list-group todo-list"},s)}),O=(n(49),function(t){function e(){var t,n;Object(d.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(f.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(o)))).buttons=[{name:"all",label:"All"},{name:"active",label:"Active"},{name:"done",label:"Done"}],n}return Object(g.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){var t=this.props,e=t.filter,n=t.onFilterChange,a=this.buttons.map(function(t){var a=t.name,r=t.label,i=e===a?"btn-info":"btn-outline-secondary";return o.a.createElement("button",{type:"button",className:"btn ".concat(i),key:a,onClick:function(){return n(a)}},r)});return o.a.createElement("div",{className:"btn-group"},a)}}]),e}(o.a.Component)),I=(n(50),function(t){function e(){var t,n;Object(d.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(f.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(o)))).state={label:""},n.onLabelChange=function(t){n.setState({label:t.target.value})},n.onSubmit=function(t){t.preventDefault(),0===n.state.label.trim().length?alert("Your task is empty!"):(n.props.onItemAdded(n.state.label),n.setState({label:""}))},n}return Object(g.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){return o.a.createElement("form",{className:"item-add-form d-flex",onSubmit:this.onSubmit},o.a.createElement("input",{type:"text",className:"form-control",onChange:this.onLabelChange,placeholder:"Start typing to create task",value:this.state.label}),o.a.createElement("button",{className:"btn btn-success"},"Add Task"))}}]),e}(o.a.Component)),y=(n(51),function(t){function e(){var t,n;Object(d.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(f.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(o)))).listID=n.props,n.onListChanged=n.props.onListChanged,n.todoData=n.props.todoData,n.maxId=0,n.state={todoData:[],term:"",filter:"all"},n.deleteItem=function(t){console.log(t),n.setState(function(e){var a=e.todoData,o=a.findIndex(function(e){return e.id===t}),r=a.slice(0,o),i=a.slice(o+1),c=[].concat(Object(u.a)(r),Object(u.a)(i));return n.onListChanged(c,n.listID),{todoData:c}})},n.addItem=function(t){var e=n.createTodoItem(t);n.setState(function(t){var a=t.todoData,o=[].concat(Object(u.a)(a),[e]);return n.onListChanged(o,n.listID),{todoData:o}})},n.editItem=function(t){n.setState(function(e){var a=e.todoData,o=prompt("Enter new task name");if(null!==o){if(0!==o.trim().length){var r=a.findIndex(function(e){return e.id===t}),i=a[r],c=Object(b.a)({},i,{label:o}),l=a.slice(0,r),s=a.slice(r+1),d=[].concat(Object(u.a)(l),[c],Object(u.a)(s));return n.onListChanged(d,n.listID),{todoData:d}}alert("Task name cannot be empty!")}})},n.onToggleImportant=function(t){n.setState(function(e){var a=e.todoData,o=a.findIndex(function(e){return e.id===t}),r=a[o],i=Object(b.a)({},r,{important:!r.important}),c=a.slice(0,o),l=a.slice(o+1),s=[].concat(Object(u.a)(c),[i],Object(u.a)(l));return n.onListChanged(s,n.listID),{todoData:s}})},n.onToggleDone=function(t){n.setState(function(e){var a=e.todoData,o=a.findIndex(function(e){return e.id===t}),r=a[o],i=Object(b.a)({},r,{done:!r.done}),c=a.slice(0,o),l=a.slice(o+1),s=[].concat(Object(u.a)(c),[i],Object(u.a)(l));return n.onListChanged(s,n.listID),{todoData:s}})},n.onToggleDown=function(t){n.setState(function(e){var a=e.todoData,o=a.findIndex(function(e){return e.id===t});if(!(o>=a.length-1)){var r=a[o],i=a[o+1];a[o]=i,a[o+1]=r;var c=a.slice(0,o),l=a.slice(o+1),s=[].concat(Object(u.a)(c),[i],Object(u.a)(l));return n.onListChanged(s,n.listID),{todoData:s}}alert("This item has lowest priority!")})},n.onToggleUp=function(t){n.setState(function(e){var a=e.todoData,o=a.findIndex(function(e){return e.id===t});if(!(o<=0)){var r=a[o],i=a[o-1];a[o]=i,a[o-1]=r;var c=a.slice(0,o),l=a.slice(o+1),s=[].concat(Object(u.a)(c),[i],Object(u.a)(l));return n.onListChanged(s,n.listID),{todoData:s}}alert("This item has highest priority!")})},n.onSearchChange=function(t){n.setState({term:t})},n.onFilterChange=function(t){n.setState({filter:t})},n}return Object(g.a)(e,t),Object(m.a)(e,[{key:"newID",value:function(){return"_"+Math.random().toString(36).substr(2,9)}},{key:"componentDidMount",value:function(){var t=this;this.setState(function(){return{todoData:t.todoData}})}},{key:"createTodoItem",value:function(t){return{label:t,important:!1,done:!1,id:this.newID()}}},{key:"search",value:function(t,e){return 0===e.length?t:t.filter(function(t){return t.label.toLowerCase().indexOf(e.toLowerCase())>-1})}},{key:"filter",value:function(t,e){switch(e){case"all":return t;case"active":return t.filter(function(t){return!t.done});case"done":return t.filter(function(t){return t.done});default:return t}}},{key:"render",value:function(){var t=this.state,e=t.todoData,n=t.term,a=t.filter,r=this.filter(this.search(e,n),a),i=this.props,c=i.header,l=i.onProjectDeleted,s=i.onProjectEdited,u=i.onDateEdited,d=e.filter(function(t){return t.done}).length,m=e.length-d;return o.a.createElement("div",{className:"project-list border border-secondary"},o.a.createElement(p,{toDo:m,done:d,header:c,onProjectDeleted:l,onProjectEdited:s,onDateEdited:u}),o.a.createElement("div",{className:"top-panel d-flex"},o.a.createElement(D,{onSearchChange:this.onSearchChange}),o.a.createElement(O,{filter:a,onFilterChange:this.onFilterChange})),o.a.createElement(E,{todos:r,onDeleted:this.deleteItem,onEdited:this.editItem,onToggleImportant:this.onToggleImportant,onToggleDone:this.onToggleDone,onToggleDown:this.onToggleDown,onToggleUp:this.onToggleUp}),o.a.createElement(I,{onItemAdded:this.addItem}))}}]),e}(o.a.Component)),C=(n(52),n(37)),N=n.n(C)()("http://localhost:9000"),k=function(t){function e(){var t,n;Object(d.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(f.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(o)))).listCount=0,n.state={listData:[]},n.onListAdd=function(){var t=n.createProjectListItem(++n.listCount);void 0!==t&&(console.log(JSON.stringify(t)),n.eventEmit("onListAdd",t))},n.createProjectListItem=function(t){var e=prompt("Enter the new project name (not more 14 characters long)");if(null!==e)if(0!==e.trim().length){if(!(e.trim().length>14))return{listName:e.trim(),listID:t,todoData:[]};alert("Project name is to long. It must be not more than 14 characters.")}else alert("Project name cannot be empty!")},n.onProjectDeleted=function(t){n.setState(function(e){var n=e.listData,a=n.findIndex(function(e){return e.listID===t}),o=n.slice(0,a),r=n.slice(a+1);return{listData:[].concat(Object(u.a)(o),Object(u.a)(r))}}),console.log("Current ID of deleted list",t),n.eventEmit("onProjectDeleted",t)},n.onProjectEdited=function(t){console.log("ListID for UPDATE >>>"+t);var e=null;n.setState(function(a){var o=a.listData,r=o.findIndex(function(e){return e.listID===t}),i=prompt("Enter new list name. (not more 14 characters long)");if(null!==i)if(0!==i.trim().length){if(!(i.trim().length>14)){var c=o[r];c.listName=i;var l=c,s=o;return s[r]=l,null!=(e={listName:i,listID:t})&&n.eventEmit("onProjectEdited",e),{listData:s}}alert("Project name is to long. It must be not more than 14 characters.")}else alert("Project name cannot be empty!")})},n.onDateEdited=function(t){alert("LIST DATE EDIT CALLED!")},n.onListChanged=function(t,e){var a={todoData:t,listID:e};console.log("ID of changed List"+e),n.eventEmit("onListChanged",a)},n}return Object(g.a)(e,t),Object(m.a)(e,[{key:"componentDidMount",value:function(){var t=this;N.on("connect",function(t){console.log("Connection to socket.io emitted from app emitted")}),this.eventEmit("getProjects"),N.on("setProjects",function(e){console.log("Set Projects Emitted "+JSON.stringify(e)),t.setProjectsOnConnection(e)}),N.on("setNewListItem",function(){var e=Object(s.a)(l.a.mark(function e(n){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("set new list Item Emitted with"+JSON.stringify(n)),e.next=3,t.setNewListItem(n);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())}},{key:"setProjectsOnConnection",value:function(t){for(var e=[],n=0;n<t.length;n++){var a={listName:t[n].listName,listID:t[n].listID,todoData:t[n].todoData};e.push(a),this.listCount=e.length}this.setState(function(){return{listData:e}})}},{key:"setNewListItem",value:function(t){this.setState(function(e){var n=e.listData;return{listData:[].concat(Object(u.a)(n),[t])}})}},{key:"eventEmit",value:function(t,e){N.emit(t,e)}},{key:"render",value:function(){var t=this,e=this.state.listData.map(function(e){var n=e.listID,a=e.listName,r=e.todoData;return console.log(JSON.stringify(r)),o.a.createElement("li",{key:n,className:"project-list-item"},o.a.createElement(y,{listID:n,header:a,todoData:r,onProjectDeleted:function(){return t.onProjectDeleted(n)},onProjectEdited:function(){return t.onProjectEdited(n)},onDateEdited:function(){return t.onDateEdited(n)},onListChanged:t.onListChanged}))});return o.a.createElement("div",null,o.a.createElement("div",{className:"head-text"},"SIMPLE TODO LISTS"),o.a.createElement("ul",null,e),o.a.createElement("div",{className:"btn-container"},o.a.createElement("button",{type:"button",id:"btnListAdd",className:"btn btn-primary btn-lg",onClick:this.onListAdd},"Add TODO List")))}}]),e}(o.a.Component);i.a.render(o.a.createElement(k,null),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.4ef07195.chunk.js.map