(this["webpackJsonpconstruction-jobs"]=this["webpackJsonpconstruction-jobs"]||[]).push([[0],{28:function(e,i,s){},29:function(e,i,s){},36:function(e,i,s){"use strict";s.r(i);var t=s(2),a=s.n(t),c=s(21),n=s.n(c),u=(s(28),s(29),s(12)),l=s.p+"static/media/logo.e7218ea6.jpeg",r=s(6),o=s(11),d=s(1),m=function(){var e=Object(t.useState)(!1),i=Object(u.a)(e,2),s=i[0],a=i[1];return Object(d.jsx)("header",{children:Object(d.jsxs)("div",{className:"header-wraper",children:[Object(d.jsxs)("div",{className:"logo-wraper",children:[Object(d.jsx)("img",{src:l,alt:"Constrcutions Jobs",className:"logo"}),Object(d.jsx)("h1",{className:"nav-title",children:"Construction Jobs"})]}),Object(d.jsx)("div",{className:"menu",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(r.c,{to:"/",children:"Home"})}),Object(d.jsx)("li",{children:Object(d.jsx)(r.c,{to:"/Jobs",children:"Jobs"})})]})}),Object(d.jsx)("div",{className:"hamburger-menu",children:Object(d.jsx)("a",{href:"#",onClick:function(){return a(!s)},children:Object(d.jsx)(o.a,{})})}),Object(d.jsx)("div",{className:s?"second-menu":"second-menu-hide",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(r.c,{to:"/",children:"Home"})}),Object(d.jsx)("li",{children:Object(d.jsx)(r.c,{to:"/Jobs",children:"Jobs"})})]})})]})})},j=s(15),b=s(14),p=function(e){var i=e.jobs;return Object(d.jsx)("div",{id:"list-items",children:i.map((function(e,i){return Object(d.jsxs)("div",{className:"item-full",children:[Object(d.jsxs)("div",{children:[Object(d.jsxs)("h1",{children:[Object(d.jsx)(o.b,{})," ",e.title]}),Object(d.jsxs)("h3",{children:[Object(d.jsx)(b.a,{})," ",e.company]}),Object(d.jsxs)("h3",{children:[Object(d.jsx)(j.a,{})," ",e.location]})]}),Object(d.jsxs)("div",{className:"details",children:[Object(d.jsx)("button",{className:"apply-btn",children:Object(d.jsx)(r.b,{to:"/Register",children:"Apply"})}),Object(d.jsx)("button",{className:"more-btn",children:Object(d.jsx)(r.b,{to:{pathname:"/Details/".concat(e.id),state:{}},children:"More Details"})})]})]},e.id)}))})},x=s(9),h=function(){return Object(d.jsxs)("div",{id:"home",children:[Object(d.jsx)("div",{id:"home-bg-cover",children:Object(d.jsx)("div",{className:"overlay",children:Object(d.jsxs)("div",{className:"overlay-text",children:[Object(d.jsx)("h1",{children:"Construction Jobs Finder"}),Object(d.jsx)("h2",{children:"Convenient Construction job search"})]})})}),Object(d.jsx)("div",{children:Object(d.jsxs)("div",{id:"jobs-container",children:[Object(d.jsx)("div",{id:"heading-container",children:Object(d.jsx)("h1",{children:"Current Jobs"})}),x&&Object(d.jsx)(p,{jobs:x.Jobs})]})})]})},v=function(){return Object(d.jsxs)("div",{id:"jobs-container",children:[Object(d.jsx)("div",{id:"heading-container",children:Object(d.jsx)("h1",{children:"Jobs"})}),Object(d.jsx)(p,{jobs:x.Jobs})]})},O=function(){var e=Object(t.useState)(!1),i=Object(u.a)(e,2),s=i[0],a=i[1];return Object(d.jsx)("div",{id:"Register",children:s?Object(d.jsx)("div",{id:"show",children:Object(d.jsx)("h1",{children:"Thanks for Applying"})}):Object(d.jsxs)("div",{id:"register-wraper",children:[Object(d.jsx)("h1",{children:"Fill out your details"}),Object(d.jsxs)("label",{children:["First Name",Object(d.jsx)("input",{className:"input-field",type:"text"})]}),Object(d.jsxs)("label",{children:["Last Name",Object(d.jsx)("input",{className:"input-field",type:"text"})]}),Object(d.jsxs)("label",{children:["Email",Object(d.jsx)("input",{className:"input-field",type:"email"})]}),Object(d.jsxs)("label",{children:["Phone Number",Object(d.jsx)("input",{className:"input-field",type:"text"})]}),Object(d.jsxs)("label",{children:["Position",Object(d.jsx)("input",{className:"input-field",type:"text"})]}),Object(d.jsx)("input",{className:"submit-button",type:"submit",value:"Apply",onClick:function(){return a(!s)}})]})})},f=s(19),g=function(e){var i=e.match,s=Number(i.params.id);return Object(d.jsx)("div",{children:x.Jobs.map((function(e,i){return s===e.id?Object(d.jsxs)("div",{className:"job-details-container",children:[Object(d.jsxs)("div",{className:"job-details",children:[Object(d.jsxs)("h2",{children:[Object(d.jsx)(o.b,{})," ",e.title]}),Object(d.jsxs)("h3",{children:[Object(d.jsx)(b.a,{})," ",e.company]}),Object(d.jsxs)("h3",{children:[Object(d.jsx)(j.a,{})," ",e.location]}),Object(d.jsxs)("p",{children:[" ",e.discription," "]})]}),Object(d.jsxs)("div",{className:"contact-info",children:[Object(d.jsx)("h1",{children:"Contact Info"}),Object(d.jsxs)("h3",{children:[Object(d.jsx)(f.b,{})," ",e.contact]}),Object(d.jsxs)("h3",{children:[Object(d.jsx)(f.a,{})," ",e.address]}),Object(d.jsx)("button",{children:Object(d.jsx)(r.b,{to:"/Contract",children:"Contract"})}),Object(d.jsx)("button",{children:Object(d.jsx)(r.b,{to:"/Register",children:"Apply"})})]})]},e.id):null}))})},C=function(){var e=Object(t.useState)(!1),i=Object(u.a)(e,2),s=i[0],a=i[1];return Object(d.jsx)("div",{id:"Contract",children:s?Object(d.jsx)("div",{id:"show",children:Object(d.jsx)("h1",{children:"Submited."})}):Object(d.jsxs)("div",{id:"contract-wraper",children:[Object(d.jsx)("h1",{children:"Contract"}),Object(d.jsxs)("label",{children:["Work Scope",Object(d.jsx)("input",{className:"input-field",type:"text"})]}),Object(d.jsxs)("label",{children:["Permit",Object(d.jsx)("input",{className:"input-field",type:"text"})]}),Object(d.jsxs)("label",{children:["Fees",Object(d.jsx)("input",{className:"input-field",type:"email"})]}),Object(d.jsxs)("label",{children:["Materials",Object(d.jsx)("input",{className:"input-field",type:"text"})]}),Object(d.jsxs)("label",{children:["Termination",Object(d.jsx)("input",{className:"input-field",type:"text"})]}),Object(d.jsxs)("label",{children:["Signature",Object(d.jsx)("input",{className:"input-field",type:"text"})]}),Object(d.jsxs)("label",{children:["Date of contract",Object(d.jsx)("input",{className:"input-field",type:"date"})]}),Object(d.jsxs)("div",{className:"terms",children:[Object(d.jsx)("input",{type:"checkbox"}),Object(d.jsx)("h4",{children:"Terms and Conditions"})]}),Object(d.jsx)("div",{className:"button-wraper",children:Object(d.jsx)("input",{className:"submit-button",type:"submit",value:"Submit",onClick:function(){return a(!s)}})})]})})},q=s(3);var S=function(){return Object(d.jsx)(r.a,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(m,{}),Object(d.jsxs)(q.c,{children:[Object(d.jsx)(q.a,{exact:!0,path:"/",component:h}),Object(d.jsx)(q.a,{exact:!0,path:"/Register",component:O}),Object(d.jsx)(q.a,{exact:!0,path:"/Jobs",component:v}),Object(d.jsx)(q.a,{exact:!0,path:"/Details/:id",component:g}),Object(d.jsx)(q.a,{exact:!0,path:"/Contract",component:C})]})]})})},y=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,37)).then((function(i){var s=i.getCLS,t=i.getFID,a=i.getFCP,c=i.getLCP,n=i.getTTFB;s(e),t(e),a(e),c(e),n(e)}))};n.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(S,{})}),document.getElementById("root")),y()},9:function(e){e.exports=JSON.parse('{"Jobs":[{"id":1,"title":"Part time Sun-Sat pulling online orders","company":"Jo-Ann Fabric and Craft Stores","location":"Roseville, CA","discription":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consequat convallis nisi, sed sagittis purus sollicitudin malesuada. Cras accumsan non elit nec aliquam. Ut ipsum dui, sodales vitae elit eu, egestas rhoncus lectus. Suspendisse vulputate a leo fringilla maximus. Donec facilisis convallis lacus ut convallis. Vivamus eu interdum purus. Ut auctor lectus vitae mauris iaculis tristique. Donec aliquet bibendum ipsum, a vulputate neque. Vivamus laoreet porta justo nec facilisis. Cras at efficitur odio, id ornare ipsum. Donec posuere pharetra est, at mollis velit cursus id. Donec scelerisque risus varius, dictum est in, euismod urna. Morbi scelerisque convallis sollicitudin. Vivamus felis metus, gravida nec orci a, consectetur suscipit sapien. Sed auctor nibh a ex fermentum, a elementum enim maximus.","contact":"123xxxxxx","address":"7777 South Lafayette St. Lexington, NC 27292"},{"id":2,"title":"Work from Home CSR: UP TO $13/HR","company":"Call Experts","location":"Pennsylvania","discription":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consequat convallis nisi, sed sagittis purus sollicitudin malesuada. Cras accumsan non elit nec aliquam. Ut ipsum dui, sodales vitae elit eu, egestas rhoncus lectus. Suspendisse vulputate a leo fringilla maximus. Donec facilisis convallis lacus ut convallis. Vivamus eu interdum purus. Ut auctor lectus vitae mauris iaculis tristique. Donec aliquet bibendum ipsum, a vulputate neque. Vivamus laoreet porta justo nec facilisis. Cras at efficitur odio, id ornare ipsum. Donec posuere pharetra est, at mollis velit cursus id. Donec scelerisque risus varius, dictum est in, euismod urna. Morbi scelerisque convallis sollicitudin. Vivamus felis metus, gravida nec orci a, consectetur suscipit sapien. Sed auctor nibh a ex fermentum, a elementum enim maximus.","contact":"123xxxxxx","address":"7777 South Lafayette St. Lexington, NC 27292"},{"id":3,"title":"Enpherium","company":"typicode","location":"karachi","discription":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consequat convallis nisi, sed sagittis purus sollicitudin malesuada. Cras accumsan non elit nec aliquam. Ut ipsum dui, sodales vitae elit eu, egestas rhoncus lectus. Suspendisse vulputate a leo fringilla maximus. Donec facilisis convallis lacus ut convallis. Vivamus eu interdum purus. Ut auctor lectus vitae mauris iaculis tristique. Donec aliquet bibendum ipsum, a vulputate neque. Vivamus laoreet porta justo nec facilisis. Cras at efficitur odio, id ornare ipsum. Donec posuere pharetra est, at mollis velit cursus id. Donec scelerisque risus varius, dictum est in, euismod urna. Morbi scelerisque convallis sollicitudin. Vivamus felis metus, gravida nec orci a, consectetur suscipit sapien. Sed auctor nibh a ex fermentum, a elementum enim maximus.","contact":"123xxxxxx","address":"7777 South Lafayette St. Lexington, NC 27292"},{"id":4,"title":"Work from Home CSR: UP TO $13/HR","company":"Call Experts","location":"Pennsylvania","discription":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consequat convallis nisi, sed sagittis purus sollicitudin malesuada. Cras accumsan non elit nec aliquam. Ut ipsum dui, sodales vitae elit eu, egestas rhoncus lectus. Suspendisse vulputate a leo fringilla maximus. Donec facilisis convallis lacus ut convallis. Vivamus eu interdum purus. Ut auctor lectus vitae mauris iaculis tristique. Donec aliquet bibendum ipsum, a vulputate neque. Vivamus laoreet porta justo nec facilisis. Cras at efficitur odio, id ornare ipsum. Donec posuere pharetra est, at mollis velit cursus id. Donec scelerisque risus varius, dictum est in, euismod urna. Morbi scelerisque convallis sollicitudin. Vivamus felis metus, gravida nec orci a, consectetur suscipit sapien. Sed auctor nibh a ex fermentum, a elementum enim maximus.","contact":"123xxxxxx","address":"7777 South Lafayette St. Lexington, NC 27292"},{"id":5,"title":"Work from Home CSR: UP TO $13/HR","company":"Call Experts","location":"Pennsylvania","discription":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consequat convallis nisi, sed sagittis purus sollicitudin malesuada. Cras accumsan non elit nec aliquam. Ut ipsum dui, sodales vitae elit eu, egestas rhoncus lectus. Suspendisse vulputate a leo fringilla maximus. Donec facilisis convallis lacus ut convallis. Vivamus eu interdum purus. Ut auctor lectus vitae mauris iaculis tristique. Donec aliquet bibendum ipsum, a vulputate neque. Vivamus laoreet porta justo nec facilisis. Cras at efficitur odio, id ornare ipsum. Donec posuere pharetra est, at mollis velit cursus id. Donec scelerisque risus varius, dictum est in, euismod urna. Morbi scelerisque convallis sollicitudin. Vivamus felis metus, gravida nec orci a, consectetur suscipit sapien. Sed auctor nibh a ex fermentum, a elementum enim maximus.","contact":"123xxxxxx","address":"7777 South Lafayette St. Lexington, NC 27292"},{"id":6,"title":"Work from Home CSR: UP TO $13/HR","company":"Call Experts","location":"Pennsylvania","discription":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consequat convallis nisi, sed sagittis purus sollicitudin malesuada. Cras accumsan non elit nec aliquam. Ut ipsum dui, sodales vitae elit eu, egestas rhoncus lectus. Suspendisse vulputate a leo fringilla maximus. Donec facilisis convallis lacus ut convallis. Vivamus eu interdum purus. Ut auctor lectus vitae mauris iaculis tristique. Donec aliquet bibendum ipsum, a vulputate neque. Vivamus laoreet porta justo nec facilisis. Cras at efficitur odio, id ornare ipsum. Donec posuere pharetra est, at mollis velit cursus id. Donec scelerisque risus varius, dictum est in, euismod urna. Morbi scelerisque convallis sollicitudin. Vivamus felis metus, gravida nec orci a, consectetur suscipit sapien. Sed auctor nibh a ex fermentum, a elementum enim maximus.","contact":"123xxxxxx","address":"7777 South Lafayette St. Lexington, NC 27292"},{"id":7,"title":"Work from Home CSR: UP TO $13/HR","company":"Call Experts","location":"Pennsylvania","discription":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consequat convallis nisi, sed sagittis purus sollicitudin malesuada. Cras accumsan non elit nec aliquam. Ut ipsum dui, sodales vitae elit eu, egestas rhoncus lectus. Suspendisse vulputate a leo fringilla maximus. Donec facilisis convallis lacus ut convallis. Vivamus eu interdum purus. Ut auctor lectus vitae mauris iaculis tristique. Donec aliquet bibendum ipsum, a vulputate neque. Vivamus laoreet porta justo nec facilisis. Cras at efficitur odio, id ornare ipsum. Donec posuere pharetra est, at mollis velit cursus id. Donec scelerisque risus varius, dictum est in, euismod urna. Morbi scelerisque convallis sollicitudin. Vivamus felis metus, gravida nec orci a, consectetur suscipit sapien. Sed auctor nibh a ex fermentum, a elementum enim maximus.","contact":"123xxxxxx","address":"7777 South Lafayette St. Lexington, NC 27292"},{"id":8,"title":"Work from Home CSR: UP TO $13/HR","company":"Call Experts","location":"Pennsylvania","discription":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consequat convallis nisi, sed sagittis purus sollicitudin malesuada. Cras accumsan non elit nec aliquam. Ut ipsum dui, sodales vitae elit eu, egestas rhoncus lectus. Suspendisse vulputate a leo fringilla maximus. Donec facilisis convallis lacus ut convallis. Vivamus eu interdum purus. Ut auctor lectus vitae mauris iaculis tristique. Donec aliquet bibendum ipsum, a vulputate neque. Vivamus laoreet porta justo nec facilisis. Cras at efficitur odio, id ornare ipsum. Donec posuere pharetra est, at mollis velit cursus id. Donec scelerisque risus varius, dictum est in, euismod urna. Morbi scelerisque convallis sollicitudin. Vivamus felis metus, gravida nec orci a, consectetur suscipit sapien. Sed auctor nibh a ex fermentum, a elementum enim maximus.","contact":"123xxxxxx","address":"7777 South Lafayette St. Lexington, NC 27292"}]}')}},[[36,1,2]]]);
//# sourceMappingURL=main.2e2d72ff.chunk.js.map