(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(30)},24:function(e,t,a){},25:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(17),r=a.n(s),l=(a(24),a(3)),c=a(4),i=a(10),d=a(6),u=a(9);a(25);var m=function(e){return o.a.createElement("span",{className:"title-bottom"},e.name)};var g=function(e){return o.a.createElement("h2",null,o.a.createElement("span",{className:"title-top"},"\u0421\u043a\u0430\u0437\u043e\u0447\u043d\u043e\u0435 \u0437\u0430\u043c\u043e\u0440\u0441\u043a\u043e\u0435 \u044f\u0441\u0442\u0432\u043e"),o.a.createElement("span",{className:"title-middle"},"\u041d\u044f\u043c\u0443\u0448\u043a\u0430"),o.a.createElement(m,{name:e.name}))};var b=function(e){var t=e.features;return o.a.createElement("div",{className:"features"},Object.keys(t).map(function(e){return o.a.createElement("div",{key:t[e]},t[e])}))};var p=function(e){return o.a.createElement("div",{className:e.selected?"badge badge-red":"badge badge-blue"},o.a.createElement("div",{className:"badge-inner"},o.a.createElement("span",{className:"badge-size"},e.size),"\u043a\u0433"))};var f=function(e){return o.a.createElement("div",{className:"slogan"},e.goods.amount<1?e.goods.slogan_disabled:e.selected?e.goods.slogan_selected:e.goods.slogan_default,o.a.createElement("span",{className:"slogan-span",onClick:function(){return e.selectHandler(e.goods.id)}},!e.selected&&e.goods.amount>0?"\u043a\u0443\u043f\u0438":null))};var v=function(e){return o.a.createElement("div",{className:e.goods.amount<1?"disabled":"box-wrapper"},o.a.createElement("div",{onClick:function(){return e.selectHandler(e.goods.id)},className:e.goods.amount<1?"box-inner-disabled box-inner":e.selected?"box-inner-red box-inner":"box-inner"},o.a.createElement("div",{className:"box-inner-white"},o.a.createElement(g,{name:e.goods.name}),o.a.createElement(b,{features:e.goods.features}),o.a.createElement(p,{size:e.goods.size,selected:e.selected}))),o.a.createElement(f,{goods:e.goods,selected:e.selected,selectHandler:e.selectHandler}))},E=[{id:0,name:"\u0441 \u0444\u0443\u0430-\u0433\u0440\u0430",features:["10 \u043f\u043e\u0440\u0446\u0438\u0439","\u043c\u044b\u0448\u044c \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a"],weight:"0.5",slogan_default:"\u0427\u0435\u0433\u043e \u0441\u0438\u0434\u0438\u0448\u044c? \u041f\u043e\u0440\u0430\u0434\u0443\u0439 \u043a\u043e\u0442\u044d, ",slogan_selected:"\u041f\u0435\u0447\u0435\u043d\u044c \u0443\u0442\u043a\u0438 \u0440\u0430\u0437\u0432\u0430\u0440\u043d\u0430\u044f \u0441 \u0430\u0440\u0442\u0438\u0448\u043e\u043a\u0430\u043c\u0438",slogan_disabled:"\u041f\u0435\u0447\u0430\u043b\u044c\u043a\u0430, \u0441 \u0444\u0443\u0430-\u0433\u0440\u0430 \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u0441\u044f",amount:1,size:.5},{id:1,name:"\u0441 \u0440\u044b\u0431\u043e\u0439",features:["40 \u043f\u043e\u0440\u0446\u0438\u0439","2 \u043c\u044b\u0448\u0438 \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a"],weight:"2",slogan_default:"\u0427\u0435\u0433\u043e \u0441\u0438\u0434\u0438\u0448\u044c? \u041f\u043e\u0440\u0430\u0434\u0443\u0439 \u043a\u043e\u0442\u044d, ",slogan_selected:"\u0413\u043e\u043b\u043e\u0432\u044b \u0449\u0443\u0447\u044c\u0438  \u0447\u0435\u0441\u043d\u043e\u043a\u043e\u043c \u0434\u0430 \u0441\u0432\u0435\u0436\u0430\u0439\u0449\u0430\u044f \u0441\u0435\u043c\u0433\u0443\u0448\u043a\u0430",slogan_disabled:"\u041f\u0435\u0447\u0430\u043b\u044c\u043a\u0430, \u0441 \u0440\u044b\u0431\u043e\u0439 \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u0441\u044f",amount:1,size:2},{id:2,name:"\u0441 \u043a\u0443\u0440\u043e\u0439",portion:"100 \u043f\u043e\u0440\u0446\u0438\u0439",features:["100 \u043f\u043e\u0440\u0446\u0438\u0439","5 \u043c\u044b\u0448\u0435\u0439 \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a","\u0437\u0430\u043a\u0430\u0437\u0447\u0438\u043a \u0434\u043e\u0432\u043e\u043b\u0435\u043d"],weight:"5",slogan_default:"\u0427\u0435\u0433\u043e \u0441\u0438\u0434\u0438\u0448\u044c? \u041f\u043e\u0440\u0430\u0434\u0443\u0439 \u043a\u043e\u0442\u044d, ",slogan_selected:"\u0424\u0438\u043b\u0435 \u0438\u0437 \u0446\u044b\u043f\u043b\u044f\u0442 \u0441 \u0442\u0440\u044e\u0444\u0435\u043b\u044f\u043c\u0438 \u0432 \u0431\u0443\u043b\u044c\u043e\u043d\u0435",slogan_disabled:"\u041f\u0435\u0447\u0430\u043b\u044c\u043a\u0430, \u0441 \u043a\u0443\u0440\u043e\u0439 \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u0441\u044f",amount:0,size:5}],h="SELECT";var w=a(8);var j=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"app"},o.a.createElement("h1",{className:"header"},"\u0422\u044b \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u043f\u043e\u043a\u043e\u0440\u043c\u0438\u043b \u043a\u043e\u0442\u0430?"),o.a.createElement("div",{className:"wrapper"},Object.keys(E).map(function(t){return o.a.createElement(v,{key:E[t].id,goods:E[t],selected:e.props.selected[t],selectHandler:e.props.selectBox})})))}}]),t}(n.Component),O=Object(w.b)(function(e){return console.log("mapStateToProps state: ",e),{selected:e}},function(e){return{selectBox:function(t){console.log("mapDispatchToProps id: ",t),e(function(e){return console.log("values: ",e),{type:h,id:e}}(t))}}})(j),N=a(7),k=a(14),y=[!1,!1,!1],_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(console.log("state in reducer: ",e),console.log("action in reducer: ",t),t.type){case h:return[].concat(Object(k.a)(e.slice(0,t.id)),[!e[t.id]],Object(k.a)(e.slice(t.id+1)));default:return e}},x=(console.log("selectReducer: ",_),Object(N.b)(_));console.log("store: ",x);var z=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(w.a,{store:x},o.a.createElement(O,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.8290b53b.chunk.js.map