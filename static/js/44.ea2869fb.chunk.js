(this["webpackJsonpreact-redux-realworld-example-app"]=this["webpackJsonpreact-redux-realworld-example-app"]||[]).push([[44],{1246:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),c=a(13),l=a(53),s=a(29),i=a(30),o=a(32),u=a(31),m=a(979),d=a.n(m),f=a(0),p=a.n(f),h=a(15),b=a(11),E=a(850),y=a(848),g=a(231),v=a(232),C=a(64),N=a(479),w=a(233),j=a(197),k=a(65),O=(a(485),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).inputChange=function(e){var t=e.target.value,a=e.target.getAttribute("name");n.setState(Object(l.a)({},a,t))},n.fiatReset=function(){console.log("sdfsdf"),n.setState({reset:!0}),setTimeout((function(){n.setState({reset:!1})}),200)},n.fiatSubmit=function(){if(""==n.state.transCurrency||""==n.state.transId||""==n.state.transAmount||""==n.state.transProof)Object(h.a)(!0,"All fields are required!");else{Object(h.b)("Submitting Request...");var e={currency:n.state.transCurrency,transactionid:n.state.transId,amount:n.state.transAmount,image:n.state.transProof,clearjunction_id:n.state.clearJunction};console.log(e),Object(k.g)(e).then(function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{1==t.status?(n.fiatReset(),Object(h.a)(!0,t.message,"success")):Object(h.a)(!0,t.message)}catch(a){Object(h.a)(!0,void 0==a?"Error":a.toString())}Object(h.b)();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){Object(h.a)(!0,void 0==e?"Error":e.toString()),Object(h.b)()}))}},n.fileChange=function(e,t,a){n.setState(Object(l.a)({},e,a))},n.componentDidMount=function(){n.checkWallet()},n.checkWallet=function(){n.allPairs(),n.received(),n.adminBankDetails(),Object(j.a)().then((function(e){try{n.setState({loading:!1,status:void 0==e.data.status?"":e.data.status},(function(){}))}catch(t){alert(t)}}),(function(e){n.setState({loading:!1,error:"Authentication Error!"})}))},n.selectCurrency=function(e){n.setState({loading:!0,currentCoin:e},(function(){return n.walletAddress({currency:e.currencySymbol,currency_id:e._id})}))},n.copyThis=function(e){var t=e.target.getAttribute("data-target"),a=document.getElementById(t).value;navigator.clipboard.writeText(a),Object(h.a)(!0,"Address Copied!","success")},n.walletAddress=function(e){Object(k.t)(e).then((function(e){var t={address:e.data,add_id:e.data._id};n.setState({currentCoin:t,loading:!1})}),(function(e){Object(h.a)(!0,"Error generating wallet")}))},n.received=function(){Object(k.o)().then(function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.setState({loading:!1,received:t.data,error:""});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){n.setState({loading:!1})}))},n.allPairs=function(){var e=[];Object(k.l)().then(function(){var t=Object(c.a)(r.a.mark((function t(a){var c,l,s,i,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=a.data,c=n.props.location.pathname,l=c.substring(c.lastIndexOf("/")+1),s=[],i=0,o=e.length,e.forEach((function(t,a){t.currencySymbol==l&&(i=1),1==t.curnType&&s.push(t),a==o-1&&n.setState({loading:!1,coins:e,fiatCoins:s,error:""},(function(){1==i&&n.selectCurrency(t)}))}));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),(function(e){n.setState({loading:!1})}))},n.adminBankDetails=function(){Object(k.j)().then((function(e){console.log(e),n.setState({bank:e.data})}),(function(e){}))},n.changeTab=function(e){n.setState({content:[{date:"16:23, 12 dec 2018",amount:"0.0008",currency:"BTC",tx_hash:"sdfsldslksfJLKkLsdKJLKJKlkjkjj23423"}],currentTab:e})},n.state={clearJunction:"",attempt:0,reset:!1,transAmount:"",transId:"",transCurrency:"",transProof:null,received:[],bank:null,currentCoin:null,coins:null,fiatCoins:[],status:null,error:"",loading:!1,content:"loading",currentTab:0},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return p.a.createElement("div",{className:"container my-wall-container depositPage"},p.a.createElement("div",{className:"row mt-2"},p.a.createElement("div",{className:"col-sm empty-container-with-out-border left-column"},p.a.createElement(g.a,this.props)),p.a.createElement("div",{className:"col-sm empty-container-with-border center-column"},p.a.createElement(v.a,this.props),p.a.createElement(N.a,{tabs:["Cryptocurrency","Bank Wire"],type:"transactions",className:"noBorder",currentTab:this.state.currentTab,changeTab:this.changeTab}),p.a.createElement("div",{className:"tab row m--1 mt-2 "+(0!=this.state.currentTab&&"d-none")},p.a.createElement("div",{className:"col-md-5 p-1"},p.a.createElement("div",{className:"bordered p-3"},p.a.createElement(E.a,{selectCoin:this.selectCurrency}))),p.a.createElement("div",{className:"col-md-7 p-1"},null==this.state.currentCoin?p.a.createElement("div",{className:"bordered p-3"},p.a.createElement("p",null,"Select a coin from the list")):p.a.createElement("div",{className:"bordered p-3"},this.state.loading?p.a.createElement(C.a,null):p.a.createElement("div",null,p.a.createElement("div",{className:"qrImgHold"},null!=this.state.currentCoin&&void 0!=this.state.currentCoin.address&&null!=this.state.currentCoin.address&&""!=this.state.currentCoin.address?p.a.createElement(d.a,{value:this.state.currentCoin.address,className:"qrImg"}):null),p.a.createElement("h3",{className:"subtitle"},"Scan QR Code or Copy address to deposit ",this.state.currentCoin.currencySymbol),p.a.createElement("div",{className:"d-flex justify-content-start align-items"},p.a.createElement("input",{className:"dark-bordered-input",type:"text",placeholder:"Wallet Address",id:"wal1",value:this.state.currentCoin.address}),p.a.createElement("button",{className:"btn btn-main box",onClick:function(t){return e.copyThis(t)},"data-target":"wal1"},"Copy")),p.a.createElement("div",{className:"note"},p.a.createElement("p",null,"Note:"),p.a.createElement("p",null,"Minimum deposit is 0.001 ",this.state.currentCoin.currencySymbol,", deposits below that can not be recovered and would be lost forever. Deposit only ",this.state.currentCoin.currencySymbol," to this address. Minimum 30 blockchain confirmations requied."))))),p.a.createElement("div",{className:"p-4"},p.a.createElement("h3",{className:"subtitle mt-3"},"Recent Received"),p.a.createElement("div",{className:"tableHold"},p.a.createElement("table",{className:"table"},p.a.createElement("tbody",null,this.state.received.map((function(e,t){return p.a.createElement("tr",{className:"whiteBg",key:t},p.a.createElement("td",{className:"time"},e.date),p.a.createElement("td",null,p.a.createElement("img",{src:e.images,className:"smallPic"})),p.a.createElement("td",null,p.a.createElement("span",{className:"fa fa-arrow-left"})," ",e.hash),p.a.createElement("td",{className:"amount"},e.amount," ",e.currencySymbol," ",p.a.createElement("span",{className:"fa fa-check"})))}))))))),this.state.reset?p.a.createElement(C.a,null):p.a.createElement("div",{className:"tab mt-3 p-2 bordered "+(1!=this.state.currentTab&&"d-none")},"Accept"!=this.state.status&&!this.state.loading&&p.a.createElement("div",{className:"col-sm empty-container-with-border center-column"},p.a.createElement("p",{className:"text-danger text-center mt-4"},"Finish KYC to use this feature"),p.a.createElement("div",{className:"text-center"},p.a.createElement(b.a,{href:"/wallet/verification"},p.a.createElement("button",{className:"btn btn-main"},"Go to Verification")))),!this.state.loading&&"Accept"==this.state.status&&p.a.createElement("div",null,p.a.createElement("div",{className:"note"},p.a.createElement("p",null,p.a.createElement("strong",null,"Wire Transfer Deposit-Bank Wire")),p.a.createElement("p",null,p.a.createElement("strong",null,"Deposit to your account using the information below. You'll need to contact your bank for specific instructions.")),p.a.createElement("ul",null,p.a.createElement("li",null,"Be sure to include the 'Reference' code given below- this code identifies the deposit with your account."),p.a.createElement("li",null,"Don't exceed your daily or monthly funding limits. If you exceed the limits, your account will be frozen until you get verified for higher limits or until the funds are returned to you."),p.a.createElement("li",null,"Fees listed are what our bank charge us. Other banks used during the transfer may charge additional fees and are out of our control."),p.a.createElement("li",null,"Multiple deposits of the same amounts within a few days of each other may be delayed. If you must make multiple deposit, consider sending different amounts."),p.a.createElement("li",null,"Important: The name on the bank account you are depositing from must match the name entered for verification on the Eclipton account you are depositing into."),p.a.createElement("li",null,"Fidor can accept international wire transfer deposits (EUR only), but withdrawals can only be sent to SEPA bank accounts."),p.a.createElement("li",null,"Please be aware that Fidor can only accept Euro transfers. Transfer sent in any other currency will be rejected and returned to you automatically."))),p.a.createElement("div",{className:"form-group mt-4"},p.a.createElement("label",null,"Bank Details"),""==this.state.transCurrency&&p.a.createElement("p",{className:"text-danger text-small"},"Choose a currency to see the bank details"),null==this.state.bank?p.a.createElement(C.a,null):this.state.bank.map((function(t,a){return t.currency==e.state.transCurrency&&p.a.createElement("table",{className:"table",key:a},p.a.createElement("tbody",null,p.a.createElement("tr",null,p.a.createElement("th",{width:"200px"},"Account Name"),p.a.createElement("td",null,t.acc_name)),p.a.createElement("tr",null,p.a.createElement("th",{width:"200px"},"Address"),p.a.createElement("td",null,t.address)),p.a.createElement("tr",null,p.a.createElement("th",{width:"200px"},"Account Number"),p.a.createElement("td",null,t.acc_number)),p.a.createElement("tr",null,p.a.createElement("th",{width:"200px"},"IBAN"),p.a.createElement("td",null,t.iban)),p.a.createElement("tr",null,p.a.createElement("th",{width:"200px"},"Bank Name"),p.a.createElement("td",null,t.bank_name)),p.a.createElement("tr",null,p.a.createElement("th",{width:"200px"},"Bank Code"),p.a.createElement("td",null,t.bank_code)),p.a.createElement("tr",null,p.a.createElement("th",{width:"200px"},"Swift"),p.a.createElement("td",null,t.swift_code)),p.a.createElement("tr",null,p.a.createElement("th",{width:"200px"},"Bank/Branch Address"),p.a.createElement("td",null,t.bank_address)),p.a.createElement("tr",null,p.a.createElement("th",{width:"200px"},"Reference Code"),p.a.createElement("td",null,t.reference_code)),p.a.createElement("tr",null,p.a.createElement("th",{width:"200px"},"Currency"),p.a.createElement("td",null,t.currency))))}))),p.a.createElement("div",{className:"form-group"},p.a.createElement("label",null,"Transaction ID"),p.a.createElement("input",{type:"text",className:"form-control",required:!0,placeholder:"for Reference",name:"transId",onChange:this.inputChange})),p.a.createElement("div",{className:"form-group"},p.a.createElement("label",null,"ClearJunction ID"),p.a.createElement("input",{type:"text",className:"form-control",required:!0,placeholder:"for Reference",name:"clearJunction",onChange:this.inputChange})),p.a.createElement("div",{className:"form-group"},p.a.createElement("label",null,"Amount"),p.a.createElement("div",{className:"d-flex justify-content-start align-items"},p.a.createElement("select",{className:"form-control currencySelect",name:"transCurrency",onChange:this.inputChange},p.a.createElement("option",{value:""},"Select"),this.state.fiatCoins.length>0&&this.state.fiatCoins.map((function(e,t){return p.a.createElement("option",{value:e.currencySymbol,key:t},e.currencySymbol)}))),p.a.createElement("input",{className:"form-control",type:"text",placeholder:"Amount",name:"transAmount",onChange:this.inputChange}))),p.a.createElement("div",{className:"form-group"},p.a.createElement("label",null,"Deposit Proof"),p.a.createElement(y.a,{name:"transProof",type:"upload",fileChange:this.fileChange,accept:"image/*, application/pdf"})),p.a.createElement("div",{className:"form-group mt-80 d-flex align-items-center justify-content-end"},p.a.createElement("button",{className:"btn btn-outline box mr-2 big",onClick:this.fiatReset},"Reset"),p.a.createElement("button",{className:"btn btn-main box big",onClick:this.fiatSubmit},"Submit"))))),p.a.createElement("div",{className:"col-sm empty-container-with-out-border right-column"},p.a.createElement(w.a,null))))}}]),a}(p.a.Component));t.default=O},848:function(e,t,a){"use strict";var n=a(7),r=a.n(n),c=a(13),l=a(14),s=a(0),i=a.n(s),o=a(64),u=a(35),m=a(15);a(849);t.a=function(e){var t=Object(s.useState)(""),a=Object(l.a)(t,2),n=a[0],d=a[1],f=Object(s.useState)("valid"),p=Object(l.a)(f,2),h=p[0],b=p[1],E=Object(s.useState)(!1),y=Object(l.a)(E,2),g=y[0],v=y[1];Object(s.useEffect)((function(){var t=e.accept;if(void 0!=t&&null!=t&&""!=t&&"*"!=t){var a="valid ";t.split(",").forEach((function(e){"image/*"==e.trim()?a+="image":a+=", pdf"})),b(a)}}),[]);var C=function(e){var t=e.target.getAttribute("data-target");document.getElementById(t).click()};return i.a.createElement("div",{className:"fileBrowse"},i.a.createElement("div",{className:"d-flex justify-content-start align-items"},i.a.createElement("input",{className:"form-control",value:"upload"==e.type?n:void 0!=e.value?e.value.name:"",type:"text",placeholder:"jpg, png, jpeg, pdf files only","data-target":e.name,onClick:function(e){return C(e)}}),i.a.createElement("input",{type:"file",name:"file",className:"hide",id:e.name,onChange:function(t){return function(t){var a=t.target.files[0],n=e.accept,l=a.type;console.log(l);var s=l.split("/")[0];"application"==s&&(s=l,l.split("/")[1]),void 0==n||null==n||""==n||"*"==n||-1!=n.indexOf(s)?(d(a.name),"upload"==e.type?(v(!0),Object(u.K)({page:null==e.page?"general":e.page,file:a}).then(function(){var t=Object(c.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.fileChange(e.name,e.type,a.file.filePath),console.log(a),v(!1);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),(function(e){v(!1),Object(m.a)(!0,e.message)}))):e.fileChange(e.name,e.type,a)):Object(m.a)(!0,"Please choose "+h+" files only")}(t)},accept:void 0!=e.accept&&null!=e.accept?e.accept:"*"}),i.a.createElement("button",{className:"btn btn-main box","data-target":e.name,type:"button",onClick:function(e){return C(e)}},g?i.a.createElement(o.a,null):"Browse")))}},849:function(e,t,a){},850:function(e,t,a){"use strict";var n=a(7),r=a.n(n),c=a(13),l=a(14),s=a(0),i=a.n(s),o=a(64),u=a(65);a(851),a(240);t.a=function(e){var t=Object(s.useState)(null),a=Object(l.a)(t,2),n=a[0],m=a[1],d=Object(s.useState)(null),f=Object(l.a)(d,2),p=f[0],h=f[1],b=Object(s.useState)(e.selected),E=Object(l.a)(b,2),y=E[0],g=E[1],v=function(t,a){g(t.currencySymbol),e.selectCoin(t)};Object(s.useEffect)((function(){C()}),[]);var C=function(){Object(u.l)().then(function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m(t.data);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){m(null)}))};return i.a.createElement("div",{className:"coinSelector"},i.a.createElement("input",{type:"text",placeholder:"Search",onChange:function(e){var t=e.target.value;if(""==t)h(null);else{t=t.toLowerCase();var a=[];n.forEach((function(e){-1==e.currencyName.toLowerCase().indexOf(t)&&-1==e.currencySymbol.toLowerCase().indexOf(t)||a.push(e)})),h(a)}}}),i.a.createElement("div",{className:"bottom-border-list"},null==n?i.a.createElement(o.a,null):null==p?n.map((function(e,t){return 1==e.curnType||"BLCK"==e.currencySymbol?null:i.a.createElement("div",{key:t,className:"list-item pointer "+(e.currencySymbol==y?"active":""),onClick:function(){v(e)}},e.currencyName+" ("+e.currencySymbol+")"," ",i.a.createElement("span",{className:"fa fa-chevron-right"}))})):p.map((function(e,t){return"BLCK"==e.currencySymbol?null:i.a.createElement("div",{key:t,className:"list-item pointer "+(e.currencySymbol==y?"active":""),onClick:function(){v(e)}},e.currencyName+" ("+e.currencySymbol+")"," ",i.a.createElement("span",{className:"fa fa-chevron-right"}))}))))}},851:function(e,t,a){}}]);
//# sourceMappingURL=44.ea2869fb.chunk.js.map