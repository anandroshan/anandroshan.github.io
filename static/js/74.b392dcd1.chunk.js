(this["webpackJsonpreact-redux-realworld-example-app"]=this["webpackJsonpreact-redux-realworld-example-app"]||[]).push([[74],{1248:function(e,t,a){"use strict";a.r(t);var n=a(7),l=a.n(n),c=a(13),r=a(29),s=a(30),i=a(32),m=a(31),o=a(0),u=a.n(o),d=a(231),E=a(232),v=a(64),b=a(479),h=a(233),f=a(24),p=a(197),g=a(65),N=(a(485),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){n.checkWallet()},n.checkWallet=function(){Object(p.a)().then((function(e){n.setState({status:void 0==e.data.status?"":e.data.status},(function(){n.sent()}))}),(function(e){n.setState({loading:!1,error:"Authentication Error!"})}))},n.sent=function(){Object(g.q)().then(function(){var e=Object(c.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.setState({loading:!1,sent:t.data,error:""});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){n.setState({loading:!1})}))},n.received=function(){Object(g.o)().then(function(){var e=Object(c.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.setState({loading:!1,received:t.data,error:""});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){n.setState({loading:!1})}))},n.changeTab=function(e){n.setState({loading:!0,currentTab:e}),0==e?n.sent():n.received()},n.state={attempt:0,content:"loading",currentTab:0,status:null,sent:[],received:[],loading:!0},n}return Object(s.a)(a,[{key:"render",value:function(){return u.a.createElement("div",{className:"container my-wall-container transactionPage"},u.a.createElement("div",{className:"row mt-2"},u.a.createElement("div",{className:"col-sm empty-container-with-out-border left-column"},u.a.createElement(d.a,this.props)),u.a.createElement("div",{className:"col-sm empty-container-with-border center-column"},u.a.createElement(E.a,this.props),u.a.createElement(b.a,{tabs:["Sent","Received"],className:"noBorder",currentTab:this.state.currentTab,changeTab:this.changeTab}),0==this.state.currentTab&&u.a.createElement("div",{className:"tabPanelItem "},this.state.loading?u.a.createElement("div",{className:"col-sm  center-column"},u.a.createElement(v.a,null)):u.a.createElement("div",null,this.state.sent.length>0?this.state.sent.map((function(e,t){return u.a.createElement("div",{className:"trans-item"},u.a.createElement("div",{className:"d-flex align-items-center justify-content-between"},u.a.createElement("div",null,u.a.createElement("label",null,"To"),u.a.createElement("strong",{className:"text-big"},e.receiveremail)),u.a.createElement("div",{className:"text-right"},u.a.createElement("label",null,"Amount"),u.a.createElement("strong",{className:"text-big"},e.currency+" "+e.amount))),u.a.createElement("div",{className:"d-flex align-items-center justify-content-between mt-2"},u.a.createElement("div",null,u.a.createElement("label",null,"Note"),u.a.createElement("div",{className:"val"},e.note)),u.a.createElement("div",{className:"text-right"},u.a.createElement("label",null,"Sent At"),u.a.createElement("div",{className:"val time"},Object(f.b)(e.created_at)))))})):u.a.createElement("p",{className:"no-found"},"No Data Found"))),1==this.state.currentTab&&u.a.createElement("div",{className:"tabPanelItem "},this.state.loading?u.a.createElement("div",{className:"col-sm center-column"},u.a.createElement(v.a,null)):u.a.createElement("div",null,this.state.received.length>0?this.state.received.map((function(e,t){return u.a.createElement("div",{className:"trans-item"},u.a.createElement("div",{className:"d-flex align-items-center justify-content-between"},u.a.createElement("div",null,u.a.createElement("label",null,"From"),u.a.createElement("strong",{className:"val"},e.address)),u.a.createElement("div",{className:"text-right"},u.a.createElement("label",null,"Amount"),u.a.createElement("strong",{className:"text-big"},e.currencySymbol+" "+e.amount))),u.a.createElement("div",{className:"d-flex align-items-center justify-content-between mt-2"},u.a.createElement("div",null,u.a.createElement("label",null,"Type"),u.a.createElement("div",{className:"val"},e.type)),u.a.createElement("div",{className:"text-right"},u.a.createElement("label",null,"Sent At"),u.a.createElement("div",{className:"val time"},Object(f.b)(e.date)))),u.a.createElement("div",{className:"d-flex align-items-center justify-content-between mt-2"},u.a.createElement("div",null,u.a.createElement("label",null,"Tx Hash"),u.a.createElement("strong",{className:"text-big"},e.hash))))})):u.a.createElement("p",{className:"no-found"},"No Data Found")))),u.a.createElement("div",{className:"col-sm empty-container-with-out-border right-column"},u.a.createElement(h.a,null))))}}]),a}(u.a.Component));t.default=N}}]);
//# sourceMappingURL=74.b392dcd1.chunk.js.map