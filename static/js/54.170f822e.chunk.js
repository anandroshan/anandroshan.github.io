(this["webpackJsonpreact-redux-realworld-example-app"]=this["webpackJsonpreact-redux-realworld-example-app"]||[]).push([[54],{1263:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),l=a(13),s=a(29),c=a(30),o=a(32),i=a(31),m=a(0),u=a.n(m),p=a(829),d=a.n(p),g=a(15),v=a(33),E=a(482),f=a(480),h=a(66),b=a(789),y=a(45),N=a(35),w=(a(852),function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).reportModal=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;n.setState({lastData:e,lastI:t,lastType:a}),n.setState({reportModal:!n.state.reportModal})},n.report=function(){var e=n.state.lastData,t=n.state.lastI,a="gigonomy/gig/"+e._id;Object(N.z)({id:e._id,type:n.state.lastType,link:a,category:n.state.category,reason:n.state.reason}).then(function(){var e=Object(l.a)(r.a.mark((function e(a){var l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(g.a)(!0,a.message,"success"),(l=n.state.posts)[t].reported=1,n.setState({reportModal:!1,posts:l});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){Object(g.a)(!0,e.data.message),n.setState({reportModal:!1})}))},n.unReport=function(e,t){Object(N.A)({id:e._id}).then(function(){var e=Object(l.a)(r.a.mark((function e(a){var l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(g.a)(!0,a.message,"success"),(l=n.state.posts)[t].reported=0,n.setState({reportModal:!1,posts:l});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){Object(g.a)(!0,e.data.message)}))},n.componentDidMount=function(){n.getData()},n.dataChange=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};n.getData(e)},n.getData=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};n.setState({gigs:[]});var t=e;t.page=n.state.page,t.limit=n.state.limit,t.userid=n.props.currentUser._id,Object(y.q)(t).then((function(e){n.setState({gigs:e.post},(function(){console.log(n.state.gigs)}))}),(function(e){console.log(e)}))},n.state={limit:20,gigPage:!1,page:1,cid:0,posts:[],category:"",reason:"",reportModal:!1,data:{category:"",subCategory:"",priceFrom:"",priceTo:"",rating:"",key:""},lastData:null,lastI:null,lastType:null,gigs:[],currentTab:0},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:"gigsPage"},u.a.createElement(h.a,{displayModal:this.state.reportModal,closeModal:this.reportModal},u.a.createElement("div",null,u.a.createElement("div",{className:"form-group"},u.a.createElement("select",{className:"form-control",value:this.state.category,onChange:function(t){return e.setState({category:t.target.value})}},u.a.createElement("option",{value:""},"Select Category"),u.a.createElement("option",null,"Violence"),u.a.createElement("option",null,"Racism / Hatespeech"),u.a.createElement("option",null,"Pornographic"),u.a.createElement("option",null,"Spam"),u.a.createElement("option",null,"Other"))),u.a.createElement("div",{className:"form-group"},u.a.createElement("textarea",{type:"text",placeholder:"Reason",className:"form-control",onChange:function(t){return e.setState({reason:t.target.value})},value:this.state.reason}))),u.a.createElement("div",{className:""},u.a.createElement(v.a,{variant:"primary",size:"compact m-2",onClick:function(){return e.report()}},"Report"),u.a.createElement(v.a,{variant:"secondary",size:"compact m-2",onClick:this.reportModal},"Cancel"))),u.a.createElement("div",{className:"container my-wall-container "},u.a.createElement("div",{className:"row mt-2"},u.a.createElement("div",{className:"col-sm empty-container-with-out-border left-column"},u.a.createElement(E.a,{dataChange:this.dataChange})),u.a.createElement("div",{className:"col-sm empty-container-with-out-border center-column"},u.a.createElement("div",{className:"banner"},u.a.createElement("div",{className:"banner-body"},u.a.createElement("div",{className:"banner-desc"},u.a.createElement("h3",null,"All Jobs")),u.a.createElement("div",{className:"banner-btns"},u.a.createElement("span",{className:"pr-2"},"Find Jobs"),u.a.createElement(d.a,{activeLabel:"",inactiveLabel:"",value:!1,onToggle:function(t){console.log(t),t||e.props.history.push("/passionomy/requests")}}),u.a.createElement("span",{className:"pl-2"},"Hire Talents")))),u.a.createElement("div",{className:"clearfix"},0==this.state.gigs.length?u.a.createElement("p",{className:"no-found"},"No Gigs Found"):u.a.createElement("div",{className:"row-1"},this.state.gigs.map((function(t,a){return u.a.createElement(f.a,Object.assign({},e.props,{post:t}))}))))),u.a.createElement("div",{className:"col-sm empty-container-with-out-border right-column"},u.a.createElement(b.a,this.props)))))}}]),a}(u.a.Component));t.default=w},789:function(e,t,a){"use strict";var n=a(14),r=a(0),l=a.n(r),s=a(11),c=a(33),o=(a(791),a(64)),i=(a(65),a(24)),m=a(197);t.a=function(e){var t=Object(r.useState)(!1),a=Object(n.a)(t,2),u=a[0],p=(a[1],Object(r.useState)(null)),d=Object(n.a)(p,2),g=d[0],v=d[1];return Object(r.useEffect)((function(){Object(m.a)().then((function(e){try{v(e.data.status)}catch(t){}}))}),[]),l.a.createElement("div",{className:" empty-inner-container-with-border widget rewardsWidget "+(null!=e.variant&&" "+e.variant)},l.a.createElement("div",{className:"col"},l.a.createElement("ul",{className:"list-group w-100"},l.a.createElement("li",{className:"widgetTitle"},l.a.createElement("img",{src:Object(i.a)("icon-material-royalty.svg")}),l.a.createElement("span",null,"Rewards"))),l.a.createElement("div",{className:"widgetBody"},u?l.a.createElement(o.a,null):l.a.createElement("div",{className:"flex-row"},l.a.createElement("img",{src:Object(i.a)("icon-material-stars.svg"),className:"icon-star"}),"Accept"==g?l.a.createElement("div",null,l.a.createElement("p",null,"Congrats! You have earned ",l.a.createElement("strong",null,"400 Points")," on your KYC."),l.a.createElement("p",null,"Refer your friend and earn ",l.a.createElement("strong",null,"500 Points"),"."),l.a.createElement(s.a,{href:"/wallet/verification"},l.a.createElement(c.a,{variant:"primary-outline",size:"big"},"Earn Points"))):l.a.createElement("div",null,l.a.createElement("p",null,"Congrats! You have earned ",l.a.createElement("strong",null,"100 Points")," on your Registration."),l.a.createElement("p",null,"Complete your KYC and earn ",l.a.createElement("strong",null,"400 Points"),"."),l.a.createElement(s.a,{href:"/wallet/verification"},l.a.createElement(c.a,{variant:"primary-outline",size:"big"},"Earn Points")))))))}},791:function(e,t,a){},852:function(e,t,a){}}]);
//# sourceMappingURL=54.170f822e.chunk.js.map