(this["webpackJsonpreact-redux-realworld-example-app"]=this["webpackJsonpreact-redux-realworld-example-app"]||[]).push([[62],{1272:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),c=a(13),s=a(29),o=a(30),i=a(32),l=a(31),u=a(0),m=a.n(u),d=a(15),p=a(33),f=a(850),h=a(231),b=a(232),v=a(233),y=a(24),E=a(65),g=(a(485),function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).changeTab=function(e){n.setState({currentTab:e})},n.componentDidMount=function(){try{console.log("fav",n.props.match.params.coin),n.setState({coin:n.props.match.params.coin,currentCoin:n.props.match.params.coin},(function(){n.allPairs(n.props.match.params.coin),n.getAddresses(n.props.match.params.coin)}))}catch(e){}},n.componentDidUpdate=function(e){if(e.match.params.coin!=n.props.match.params.coin)try{console.log("fav2",n.props.match.params.coin),n.setState({coin:n.props.match.params.coin,currentCoin:n.props.match.params.coin},(function(){n.allPairs(n.props.match.params.coin),n.getAddresses(n.props.match.params.coin)}))}catch(t){}},n.allPairs=function(e){console.log(e),null!=e&&(n.state.coins.length>0||Object(E.l)().then(function(){var t=Object(c.a)(r.a.mark((function t(a){var c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(c=a.data).forEach((function(t){t.currencySymbol==e&&n.setState({coins:c,error:""},(function(){null!=t&&n.setState({currentCoin:t})}))}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),(function(e){})))},n.getAddresses=function(e){Object(E.x)({currency:e}).then(function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:1==t.status?n.setState({addresses:t.data}):n.setState({addresses:[]});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){n.setState({loading:!1})}))},n.getDetails=function(){Object(E.u)().then(function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.setState({loading:!1,tfa_status:t.data.tfa_status});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){n.setState({loading:!1})}))},n.delete=function(e){Object(E.e)({_id:e._id,currency:e.currency}).then(function(){var t=Object(c.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:1==a.status?n.getAddresses(e.currency):Object(d.a)(!0,a.message);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),(function(e){Object(d.a)(!0,"Something went wrong")}))},n.selectCurrency=function(e){n.props.history.push("/wallet/address/"+e.currencySymbol),n.setState({currentCoin:e})},n.submit=function(e){e.preventDefault(),console.log(n.state),Object(d.b)("Submitting Request...");var t={currency:n.state.currentCoin.currencySymbol,currencyId:n.state.currentCoin._id,address:n.state.address,status:1,url:"https://eclipton.com/wallet/confirm/address/",whitelistStatus:1};Object(E.G)(t).then(function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{1==t.status?(n.setState({address:""}),Object(d.a)(!0,t.Message,"success")):Object(d.a)(!0,t.Message)}catch(a){Object(d.a)(!0,void 0==a?"Error":a.toString())}Object(d.b)();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){Object(d.a)(!0,void 0==e?"Error":e.toString()),Object(d.b)()}))},n.state={attempt:0,loading:!0,reset:!1,tfa_status:null,with_pass:null,to:"",address:"",withdrawals:null,amountCurrency:"",amount:"",usdCurrency:"",addresses:[],usd:"",tfa:"",note:"",fee:0,estUsd:0,agree:!1,takeFee:!1,status:null,currentCoin:void 0==n.props.match.params.coin?"":n.props.match.params.coin,coins:[],content:"loading",currentTab:0,coin:null},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return m.a.createElement("div",{className:"container my-wall-container depositPage"},m.a.createElement("div",{className:"row mt-2"},m.a.createElement("div",{className:"col-sm empty-container-with-out-border left-column"},m.a.createElement(h.a,this.props)),m.a.createElement("div",{className:"col-sm empty-container-with-out-border center-column"},m.a.createElement(b.a,this.props),m.a.createElement("div",{className:"tab row "+(0!=this.state.currentTab&&"d-none")},m.a.createElement("div",{className:"col-md-5 p-1"},m.a.createElement("div",{className:"bordered p-3"},m.a.createElement(f.a,{selectCoin:this.selectCurrency,selected:this.state.currentCoin}))),m.a.createElement("div",{className:"col-md-7 p-1"},m.a.createElement("div",{className:"bordered p-3"},m.a.createElement("form",{action:"",method:"POST",onSubmit:this.submit},m.a.createElement("div",{className:"form-group"},m.a.createElement("input",{type:"text",className:"form-control",placeholder:"To Address",value:this.state.address,onChange:function(t){return e.setState({address:t.target.value})}})),m.a.createElement("div",{className:"form-group"},m.a.createElement(p.a,null,"Add Address"))),m.a.createElement("hr",null),m.a.createElement("div",{className:"mt-3"},m.a.createElement("h3",{className:"subtitle"},"Address Book"),0==this.state.addresses.length&&m.a.createElement("p",null,"No Address Found"),this.state.addresses.map((function(t,a){return m.a.createElement("div",{key:a,className:"d-flex align-items-center justify-content-between"},m.a.createElement("div",null,m.a.createElement("strong",{className:"text-big"},t.address),m.a.createElement("div",{className:"text-small"},Object(y.b)(t.createddate))),m.a.createElement("div",null,m.a.createElement("i",{className:"fa fa-times pointer",onClick:function(){return e.delete(t)}})))}))))))),m.a.createElement("div",{className:"col-sm empty-container-with-out-border right-column"},m.a.createElement(v.a,null))))}}]),a}(m.a.Component));t.default=g},850:function(e,t,a){"use strict";var n=a(7),r=a.n(n),c=a(13),s=a(14),o=a(0),i=a.n(o),l=a(64),u=a(65);a(851),a(240);t.a=function(e){var t=Object(o.useState)(null),a=Object(s.a)(t,2),n=a[0],m=a[1],d=Object(o.useState)(null),p=Object(s.a)(d,2),f=p[0],h=p[1],b=Object(o.useState)(e.selected),v=Object(s.a)(b,2),y=v[0],E=v[1],g=function(t,a){E(t.currencySymbol),e.selectCoin(t)};Object(o.useEffect)((function(){O()}),[]);var O=function(){Object(u.l)().then(function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m(t.data);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){m(null)}))};return i.a.createElement("div",{className:"coinSelector"},i.a.createElement("input",{type:"text",placeholder:"Search",onChange:function(e){var t=e.target.value;if(""==t)h(null);else{t=t.toLowerCase();var a=[];n.forEach((function(e){-1==e.currencyName.toLowerCase().indexOf(t)&&-1==e.currencySymbol.toLowerCase().indexOf(t)||a.push(e)})),h(a)}}}),i.a.createElement("div",{className:"bottom-border-list"},null==n?i.a.createElement(l.a,null):null==f?n.map((function(e,t){return 1==e.curnType||"BLCK"==e.currencySymbol?null:i.a.createElement("div",{key:t,className:"list-item pointer "+(e.currencySymbol==y?"active":""),onClick:function(){g(e)}},e.currencyName+" ("+e.currencySymbol+")"," ",i.a.createElement("span",{className:"fa fa-chevron-right"}))})):f.map((function(e,t){return"BLCK"==e.currencySymbol?null:i.a.createElement("div",{key:t,className:"list-item pointer "+(e.currencySymbol==y?"active":""),onClick:function(){g(e)}},e.currencyName+" ("+e.currencySymbol+")"," ",i.a.createElement("span",{className:"fa fa-chevron-right"}))}))))}},851:function(e,t,a){}}]);
//# sourceMappingURL=62.8acd6439.chunk.js.map