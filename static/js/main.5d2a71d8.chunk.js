(this["webpackJsonpgoit-react-hw-05-phonebook"]=this["webpackJsonpgoit-react-hw-05-phonebook"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,n){e.exports=n(29)},,,,,function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(3),o=n.n(r),u=n(12),l=n(9),i=n(10),m=n(11),s=n(14),f=n(13),p=n(31),h=n(32),b=(n(21),function(){return c.a.createElement(p.a,{in:!0,timeout:500,classNames:"slide",appear:!0},c.a.createElement("div",{className:"bigs"},"Phonebook"))}),d=(n(24),function(){return c.a.createElement("div",{className:"warning"},"Something wrong!")});n(25);var E=function(e){function t(t){e.handleInput(t.target.name,t.target.value)}var n=e.name,a=e.number;return c.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.handleSubmit()}},c.a.createElement("p",null,"Name"),c.a.createElement("input",{autoComplete:"off",autoFocus:!0,name:"name",value:n,onChange:function(e){return t(e)},type:"text"}),c.a.createElement("p",null,"Number"),c.a.createElement("input",{autoComplete:"off",name:"number",value:a,onChange:function(e){return t(e)},type:"text"}),c.a.createElement("button",{type:"submit"},"Add Contact"))};n(26);var g=function(e){var t=e.onSearch;return c.a.createElement("form",null,c.a.createElement("p",null,"Search"),c.a.createElement("input",{autoComplete:"off",type:"text",onInput:function(e){return function(e){t(e.target.value)}(e)}}))},v=n(33);n(27);var S=function(e){return c.a.createElement(v.a,{component:"ul"},e.contacts.map((function(t){return c.a.createElement(p.a,{key:t.id,in:!0,timeout:500,classNames:"cl"},c.a.createElement("li",{key:t.id},c.a.createElement("p",{className:"name"},t.name,":"),c.a.createElement("p",{className:"number"},"\u260e",t.number),c.a.createElement("button",{onClick:function(){return e.delete(t.id)},className:"delete"})))})))},C=(n(28),function(e){Object(s.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:"",contacts:[],filter:"",alert:!1},e.alert=function(){e.setState({alert:!0}),setTimeout((function(){e.setState({alert:!1})}),1e3)},e.handleInput=function(t,n){t&&e.setState(Object(l.a)({},t,n))},e.handleSubmit=function(){var t=e.state,n=t.name,a=t.number,c=t.contacts;n&&a&&0===c.filter((function(e){return n===e.name})).length?(e.setState((function(e){return{contacts:[].concat(Object(u.a)(e.contacts),[{name:n,number:a,id:Object(h.a)()}])}})),e.setState({name:"",number:""}),console.log(c.filter((function(e){return n===e.name})).length)):e.alert()},e.setFilter=function(t){e.setState({filter:t})},e.deleteContact=function(t){var n=e.state.contacts;e.setState({contacts:n.filter((function(e){return e.id!==t}))})},e.filterContacts=function(){var t=e.state,n=t.contacts,a=t.filter;return n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}))},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){localStorage.getItem("contacts")&&this.setState((function(e){return{contacts:JSON.parse(localStorage.getItem("contacts"))}}))}},{key:"componentDidUpdate",value:function(){localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var e=this.state,t=e.name,n=e.number,a=e.alert,r=e.contacts,o=this.filterContacts();return c.a.createElement(c.a.Fragment,null,c.a.createElement(b,null),c.a.createElement(p.a,{in:a,unmountOnExit:!0,timeout:500,classNames:"al"},c.a.createElement(d,null)),c.a.createElement(E,{handleSubmit:this.handleSubmit,handleInput:this.handleInput,name:t,number:n}),c.a.createElement(p.a,{in:r.length>=1,timeout:500,unmountOnExit:!0,classNames:"al"},c.a.createElement(g,{onSearch:this.setFilter})),c.a.createElement(S,{contacts:o,delete:this.deleteContact}))}}]),n}(a.Component));o.a.render(c.a.createElement(C,null),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.5d2a71d8.chunk.js.map