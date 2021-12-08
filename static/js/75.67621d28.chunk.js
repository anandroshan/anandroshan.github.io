(this["webpackJsonpreact-redux-realworld-example-app"]=this["webpackJsonpreact-redux-realworld-example-app"]||[]).push([[75],{1247:function(e,t,a){"use strict";a.r(t);var n=a(7),l=a.n(n),r=a(13),c=a(53),s=a(29),i=a(30),o=a(32),m=a(31),u=a(0),d=a.n(u),b=a(15),E=a(11),h=a(231),p=a(232),f=a(64),g=a(479),y=a(233),x=a(197),v=a(65),N=(a(485),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n,i;return Object(s.a)(this,a),(i=t.call(this,e)).componentDidMount=function(){var e=i.props.location.pathname,t=e.substring(e.lastIndexOf("/")+1);console.log(t),i.checkWallet()},i.checkWallet=function(){Object(x.a)().then((function(e){console.log("loaded0");try{i.setState({loading:!1,status:void 0==e.data.status?"":e.data.status},(function(){"Accept"==e.data.status&&i.allPairs()}))}catch(t){console.log("loaded"),i.setState({loading:!1})}}),(function(e){i.setState({loading:!1})}))},i.inputChange=function(e){var t=e.target.value,a=e.target.getAttribute("name");if("extCurrency"==a){var n=e.target.selectedOptions[0].getAttribute("data-usd"),l=i.state.extUsd;""!=i.state.extAmount&&(l=i.state.extAmount*n),i.setState({extCurrency:t,estUsd:n,extUsd:l})}else if("extAmount"==a){var r=t*i.state.estUsd;i.setState({extAmount:t,extUsd:r})}else if("intCurrency"==a){n=e.target.selectedOptions[0].getAttribute("data-usd");var s=i.state.intUsd;""!=i.state.intAmount&&(s=i.state.intAmount*n),i.setState({intCurrency:t,estUsd:n,intUsd:s})}else if("intAmount"==a){r=t*i.state.estUsd;i.setState({intAmount:t,intUsd:r})}else"check"==t?i.setState(Object(c.a)({},a,!i.state[a])):"intTo"==a?i.state.intFrom==t?Object(b.a)(!0,"You cannot transfer funds between same wallet"):i.setState(Object(c.a)({},a,t)):"intFrom"==a&&i.state.intTo==t?Object(b.a)(!0,"You cannot transfer funds between same wallet"):i.setState(Object(c.a)({},a,t))},i.resetExt=function(){i.setState({extCurrency:"",extEmail:"",extAmount:"",extUsd:"",extAgree:!1,extSave:!1,extNote:""})},i.resetInt=function(){i.setState({intCurrency:"",intFrom:"trading",intTo:"lending",intAmount:"",intUsd:""})},i.submitExt=function(){if(console.log(i.state),i.state.extAgree)if(""==i.state.extCurrency||""==i.state.extEmail||""==i.state.extAmount||""==i.state.extUsd)Object(b.a)(!0,"Please fill all required fields");else{Object(b.b)("Submitting Transfer Request...");var e={currency:i.state.extCurrency,email:i.state.extEmail,amt:i.state.extAmount,note:i.state.extNote};i.state.extSave&&(e.usd=i.state.extUsd,e.estUsd=i.state.estUsd,window.localStorage.setItem("favourite_external_transfer",JSON.stringify(e))),Object(v.f)(e).then(function(){var e=Object(r.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{1==t.status?(i.resetExt(),Object(b.a)(!0,t.message,"success")):Object(b.a)(!0,t.message)}catch(a){Object(b.a)(!0,void 0==a?"Error":a.toString())}Object(b.b)();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){Object(b.a)(!0,void 0==e?"Error":e.toString()),Object(b.b)()}))}else Object(b.a)(!0,"You need to agree to the terms and conditions in order to continue!")},i.submitInt=function(){if(console.log(i.state),""==i.state.intCurrency||""==i.state.intAmount||""==i.state.intTo||""==i.state.intFrom)Object(b.a)(!0,"Please fill all fields");else{Object(b.b)("Submitting Transfer Request...");var e={amount:i.state.intAmount,currency:i.state.intCurrency,receivee:i.state.intTo,sendd:i.state.intFrom,baseCurr:"USD"};Object(v.A)(e).then(function(){var e=Object(r.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{1==t.success?(i.resetExt(),Object(b.a)(!0,"Successfully Transfered","success")):Object(b.a)(!0,"Transfer Failed")}catch(a){Object(b.a)(!0,void 0==a?"Error":a.toString())}Object(b.b)();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){Object(b.a)(!0,void 0==e?"Error":e.toString()),Object(b.b)()}))}},i.allPairs=function(){Object(v.l)().then(function(){var e=Object(r.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i.setState({loading:!1,coins:t.data,error:""},(function(){window.localStorage.setItem("allPairs",JSON.stringify(t.data)),""!=i.state.extCurrency&&(document.getElementById("extCurrency").value=i.state.extCurrency)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){i.setState({loading:!1})}));var e=window.localStorage.getItem("allBalance");null!=e&&(e=JSON.parse(e),i.setState({loading:!1,coins:e,error:""})),Object(v.k)().then(function(){var e=Object(r.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i.setState({loading:!1,balances:t.data,error:""}),window.localStorage.setItem("allBalance",JSON.stringify(t.data));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){console.log(e)}))},i.changeTab=function(e){i.setState({currentTab:e})},i.state=(n={attempt:0,estUsd:0,filterCurrency:"USD",resetExt:!1,resetInt:!1,extCurrency:"",intCurrency:"",extEmail:"",extAmount:"",extUsd:"",extAgree:!1,extSave:!1,extNote:"",intFrom:"trading",intTo:"lending"},Object(c.a)(n,"intCurrency",""),Object(c.a)(n,"intAmount",""),Object(c.a)(n,"status",null),Object(c.a)(n,"intUsd",""),Object(c.a)(n,"loading",!0),Object(c.a)(n,"coins",null),Object(c.a)(n,"balances",null),Object(c.a)(n,"content","loading"),Object(c.a)(n,"currentTab",0),n),i}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return d.a.createElement("div",{className:"container my-wall-container depositPage"},d.a.createElement("div",{className:"row mt-2"},d.a.createElement("div",{className:"col-sm empty-container-with-out-border left-column"},d.a.createElement(h.a,this.props)),this.state.loading&&d.a.createElement("div",{className:"col-sm empty-container-with-border center-column"},d.a.createElement(f.a,null)),"Accept"!=this.state.status&&!this.state.loading&&d.a.createElement("div",{className:"col-sm empty-container-with-border center-column"},d.a.createElement("p",{className:"text-danger text-center mt-4"},"Finish KYC to use this feature"),d.a.createElement("div",{className:"text-center"},d.a.createElement(E.a,{href:"/wallet/verification"},d.a.createElement("button",{className:"btn btn-main"},"Go to Verification")))),!this.state.loading&&"Accept"==this.state.status&&d.a.createElement("div",{className:"col-sm empty-container-with-border center-column"},d.a.createElement(p.a,this.props),d.a.createElement(g.a,{tabs:["External Transfer","Internal Transfer"],type:"transactions",className:"noBorder",currentTab:this.state.currentTab,changeTab:this.changeTab}),this.state.resetExt?d.a.createElement(f.a,null):d.a.createElement("div",{className:"tab row m--1 mt-2 "+(0!=this.state.currentTab&&"d-none")},d.a.createElement("div",{className:"bordered p-3 w-100"},d.a.createElement("div",{className:"form-group"},d.a.createElement("label",null,"Currency"),d.a.createElement("select",{className:"form-control",name:"extCurrency",onChange:this.inputChange,value:this.state.extCurrency,id:"extCurrency"},d.a.createElement("option",{value:""},"Select"),null!=this.state.coins&&this.state.coins.map((function(e,t){return 1==e.curnType||"BLCK"==e.currencySymbol?null:d.a.createElement("option",{value:e.currencySymbol,"data-usd":e.EstimatedUSD,key:t},e.currencySymbol)})))),d.a.createElement("div",{className:"form-group"},d.a.createElement("label",null,"Recipient"),d.a.createElement("input",{type:"text",className:"form-control",placeholder:"Email",name:"extEmail",onChange:this.inputChange,value:this.state.extEmail})),d.a.createElement("div",{className:"form-group"},d.a.createElement("label",null,"Amount"),d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"d-flex justify-content-start align-items col-md-6"},d.a.createElement("input",{type:"text",placeholder:"Select",value:this.state.extCurrency,className:"form-control currencySelect",readOnly:!0}),d.a.createElement("input",{className:"form-control",type:"text",placeholder:"Amount",name:"extAmount",value:this.state.extAmount,onChange:this.inputChange})),d.a.createElement("div",{className:"d-flex justify-content-start align-items col-md-6"},d.a.createElement("input",{type:"text",placeholder:"Select",value:"USD",className:"form-control currencySelect",readOnly:!0}),d.a.createElement("input",{className:"form-control",type:"text",placeholder:"Amount",name:"extUsd",value:this.state.extUsd,onChange:this.inputChange})))),d.a.createElement("div",{className:"form-group"},d.a.createElement("label",null,"Note"),d.a.createElement("input",{type:"text",className:"form-control",placeholder:"Write a message (eg: Thanks for fast delivery)",name:"extNote",onChange:this.inputChange,value:this.state.extNote})),d.a.createElement("div",{className:"form-group"},d.a.createElement("div",{className:"checkbox"},d.a.createElement("input",{type:"checkbox",name:"extAgree",value:"check",onChange:this.inputChange})," I agree to the ",d.a.createElement(E.a,{href:"",className:"text-main"},"Terms & Conditions"))),d.a.createElement("div",{className:"form-group mt-80 d-flex align-items-center justify-content-end"},d.a.createElement("button",{className:"btn btn-outline box mr-2 big",onClick:this.resetExt},"Reset"),d.a.createElement("button",{className:"btn btn-main box big",onClick:this.submitExt},"Submit"))),d.a.createElement("div",{className:"d-flex justify-content-between align-items-center w-100 mt-4"},d.a.createElement("h3",{className:"subtitle"},"Available Wallet Balance"),d.a.createElement("select",{className:"borderless",name:"filterCurrency",onChange:this.inputChange},d.a.createElement("option",null,"USD"),d.a.createElement("option",null,"EUR"))),d.a.createElement("div",{className:"tableHold"},d.a.createElement("table",{className:"table"},d.a.createElement("tbody",null,null==this.state.coins?d.a.createElement(f.a,null):this.state.coins.map((function(t,a){return d.a.createElement("tr",{className:"whiteBg",key:a},d.a.createElement("td",{className:""},d.a.createElement("div",null,t.currencyName," (",t.currencySymbol,")"),d.a.createElement("div",{className:"time"},t.krakenBalance)),d.a.createElement("td",{className:"time",align:"right"},e.state.filterCurrency,d.a.createElement("br",null),t["Estimated"+e.state.filterCurrency]))})))))),this.state.resetInt?d.a.createElement(f.a,null):d.a.createElement("div",{className:"tab row m--1 mt-2 "+(0==this.state.currentTab&&"d-none")},d.a.createElement("div",{className:"bordered p-3 w-100"},d.a.createElement("div",{className:"form-group"},d.a.createElement("label",null,"Currency"),d.a.createElement("select",{className:"form-control",name:"intCurrency",onChange:this.inputChange,value:this.state.intCurrency},d.a.createElement("option",{value:""},"Select"),null!=this.state.coins&&this.state.coins.map((function(e,t){return"BLCK"==e.currencySymbol?null:d.a.createElement("option",{value:e.currencySymbol,"data-usd":e.EstimatedUSD,key:t},e.currencySymbol)})))),d.a.createElement("div",{className:"form-group"},d.a.createElement("label",null,"Transfer From"),d.a.createElement("select",{className:"form-control",name:"intFrom",value:this.state.intFrom,onChange:this.inputChange},d.a.createElement("option",{value:""},"Select"),d.a.createElement("option",{value:"trading",selected:!0},"Exhange"),d.a.createElement("option",{value:"p2p"},"P2P"),d.a.createElement("option",{value:"lending"},"Lending"))),d.a.createElement("div",{className:"form-group"},d.a.createElement("label",null,"Transfer To"),d.a.createElement("select",{className:"form-control",name:"intTo",value:this.state.intTo,onChange:this.inputChange},d.a.createElement("option",{value:""},"Select"),d.a.createElement("option",{value:"trading"},"Exhange"),d.a.createElement("option",{value:"p2p"},"P2P"),d.a.createElement("option",{value:"lending",selected:!0},"Lending"))),d.a.createElement("div",{className:"form-group"},d.a.createElement("label",null,"Amount"),d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"d-flex justify-content-start align-items col-md-6"},d.a.createElement("input",{type:"text",placeholder:"Select",value:this.state.intCurrency,className:"form-control currencySelect",readOnly:!0}),d.a.createElement("input",{className:"form-control",type:"text",placeholder:"Amount",value:this.state.intAmout,name:"intAmount",onChange:this.inputChange})),d.a.createElement("div",{className:"d-flex justify-content-start align-items col-md-6"},d.a.createElement("input",{type:"text",placeholder:"Select",value:"USD",className:"form-control currencySelect",readOnly:!0}),d.a.createElement("input",{className:"form-control",type:"text",placeholder:"Amount",value:this.state.intUsd,name:"intUsd",onChange:this.inputChange})))),d.a.createElement("div",{className:"form-group mt-80 d-flex align-items-center justify-content-end"},d.a.createElement("button",{className:"btn btn-outline box mr-2 big",onClick:this.resetInt},"Reset"),d.a.createElement("button",{className:"btn btn-main box big",onClick:this.submitInt},"Submit"))),d.a.createElement("div",{className:"d-flex justify-content-between align-items-center w-100 mt-4"},d.a.createElement("h3",{className:"subtitle"},"Available Wallet Balance")),d.a.createElement("table",{className:"table"},d.a.createElement("thead",null,d.a.createElement("tr",{className:"whiteBg title"},d.a.createElement("td",null,"Currency"),d.a.createElement("td",null,"Exchange"),d.a.createElement("td",null,"P2P"),d.a.createElement("td",null,"Lending"),d.a.createElement("td",null,"Tradeable"))),d.a.createElement("tbody",null,null==this.state.balances?d.a.createElement(f.a,null):this.state.balances.map((function(e,t){return d.a.createElement("tr",{key:t},d.a.createElement("td",{className:""},e.currencyName," (",e.currencySymbol,")"),d.a.createElement("td",{className:"time"},e.balance),d.a.createElement("td",{className:"time"},e.p2p),d.a.createElement("td",{className:"time"},e.lending),d.a.createElement("td",{className:"time"},e.lending_hold))})))))),d.a.createElement("div",{className:"col-sm empty-container-with-out-border right-column"},this.state.resetExt?d.a.createElement(f.a,null):d.a.createElement(y.a,null))))}}]),a}(d.a.Component));t.default=N}}]);
//# sourceMappingURL=75.67621d28.chunk.js.map