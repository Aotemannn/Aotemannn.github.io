(this.webpackJsonpdbank=this.webpackJsonpdbank||[]).push([[0],{186:function(e,t,n){e.exports=n(445)},193:function(e){e.exports=JSON.parse("{}")},194:function(e){e.exports=JSON.parse("{}")},205:function(e,t){},214:function(e,t){},231:function(e,t){},233:function(e,t){},256:function(e,t){},277:function(e,t){},279:function(e,t){},311:function(e,t){},316:function(e,t){},318:function(e,t){},325:function(e,t){},344:function(e,t){},437:function(e,t,n){},445:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(39),c=n.n(o),i=(n(191),n(15)),l=n.n(i),u=n(48),s=n(179),m=n(180),p=n(185),d=n(184),f=n(449),h=n(448),b=(n(193),n(194),n(90)),w=n.n(b),v=n(181),E=n.n(v),k=(n(437),function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={web3:"undefined",account:"",dbank:null,balance:0,dBankAddress:null},a}return Object(m.a)(n,[{key:"componentWillMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loadBlockchainData(this.props.dispatch);case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"loadBlockchainData",value:function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"===typeof window.ethereum){e.next=7;break}return new E.a(window.ethereum),e.next=4,window.ethereum.enable();case 4:e.next=8;break;case 7:window.alert("Please install MetaMask");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"deposit",value:function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"withdraw",value:function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"text-monospace"},r.a.createElement("nav",{className:"navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow"},r.a.createElement("img",{src:w.a,className:"App-logo",alt:"logo",height:"32"}),r.a.createElement("b",null,"DeFi App")),r.a.createElement("div",{className:"container-fluid mt-5 text-center"},r.a.createElement("br",null),r.a.createElement("h1",null,"Welcome to BNB TRADE ",r.a.createElement("img",{src:w.a,style:{height:"40px"},alt:"bnb logo"})),r.a.createElement("h2",null,"Your ID: ".concat(this.state.account)),r.a.createElement("br",null),r.a.createElement("div",{className:"row"},r.a.createElement("main",{role:"main",className:"col-lg-12 d-flex text-center"},r.a.createElement("div",{className:"content mr-auto ml-auto"},r.a.createElement(f.a,{defaultActiveKey:"profile",id:"uncontrolled-tab-example"},r.a.createElement(h.a,{eventKey:"deposit",title:"Deposit"},r.a.createElement("div",null,r.a.createElement("br",null),"How much do you want to deposit?",r.a.createElement("form",{onSubmit:function(t){t.preventDefault();var n=e.depositAmount.value;n*=Math.pow(10,18),e.deposit(n)}},r.a.createElement("div",{className:"form-group mr-sm-2"},r.a.createElement("br",null),r.a.createElement("input",{id:"depositAmount",step:"0.01",type:"number",ref:function(t){e.depositAmount=t},className:"form-control form-control-md",placeholder:"amount...",required:!0})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"DEPOSIT")))),r.a.createElement(h.a,{eventKey:"withdraw",title:"Withdraw"},r.a.createElement("br",null),"Do you want to withdraw + take interest?",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:function(t){return e.withdraw(t)}},"WITHDRAW")))))))))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},90:function(e,t,n){e.exports=n.p+"static/media/bnb.162aaf57.png"}},[[186,1,2]]]);
//# sourceMappingURL=main.cee1cfd3.chunk.js.map