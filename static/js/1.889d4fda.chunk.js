(this["webpackJsonpreact-redux-realworld-example-app"]=this["webpackJsonpreact-redux-realworld-example-app"]||[]).push([[1],{1227:function(e,t,o){"use strict";var n=o(1),i=o(5),r=o(23),a=o(0),s=(o(3),o(6)),l=o(9),c=o(17),p=o(776),d=o(34),u=o(714),h=o(68),f=o(57),b=o(69),m=o(19),v={entering:{opacity:1},entered:{opacity:1}},y={enter:h.b.enteringScreen,exit:h.b.leavingScreen},g=a.forwardRef((function(e,t){var o=e.children,r=e.disableStrictModeCompat,s=void 0!==r&&r,l=e.in,c=e.onEnter,p=e.onEntered,h=e.onEntering,g=e.onExit,x=e.onExited,E=e.onExiting,w=e.style,k=e.TransitionComponent,O=void 0===k?u.a:k,S=e.timeout,C=void 0===S?y:S,L=Object(i.a)(e,["children","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","TransitionComponent","timeout"]),j=Object(f.a)(),P=j.unstable_strictMode&&!s,W=a.useRef(null),M=Object(m.a)(o.ref,t),T=Object(m.a)(P?W:void 0,M),B=function(e){return function(t,o){if(e){var n=P?[W.current,t]:[t,o],i=Object(d.a)(n,2),r=i[0],a=i[1];void 0===a?e(r):e(r,a)}}},D=B(h),R=B((function(e,t){Object(b.b)(e);var o=Object(b.a)({style:w,timeout:C},{mode:"enter"});e.style.webkitTransition=j.transitions.create("opacity",o),e.style.transition=j.transitions.create("opacity",o),c&&c(e,t)})),N=B(p),_=B(E),H=B((function(e){var t=Object(b.a)({style:w,timeout:C},{mode:"exit"});e.style.webkitTransition=j.transitions.create("opacity",t),e.style.transition=j.transitions.create("opacity",t),g&&g(e)})),K=B(x);return a.createElement(O,Object(n.a)({appear:!0,in:l,nodeRef:P?W:void 0,onEnter:R,onEntered:N,onEntering:D,onExit:H,onExited:K,onExiting:_,timeout:C},L),(function(e,t){return a.cloneElement(o,Object(n.a)({style:Object(n.a)({opacity:0,visibility:"exited"!==e||l?void 0:"hidden"},v[e],w,o.props.style),ref:T},t))}))})),x=a.forwardRef((function(e,t){var o=e.children,r=e.classes,l=e.className,c=e.invisible,p=void 0!==c&&c,d=e.open,u=e.transitionDuration,h=e.TransitionComponent,f=void 0===h?g:h,b=Object(i.a)(e,["children","classes","className","invisible","open","transitionDuration","TransitionComponent"]);return a.createElement(f,Object(n.a)({in:d,timeout:u},b),a.createElement("div",{className:Object(s.a)(r.root,l,p&&r.invisible),"aria-hidden":!0,ref:t},o))})),E=Object(l.a)({root:{zIndex:-1,position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},invisible:{backgroundColor:"transparent"}},{name:"MuiBackdrop"})(x),w=o(758),k={enter:h.b.enteringScreen,exit:h.b.leavingScreen},O=a.forwardRef((function(e,t){var o=e.BackdropProps,r=e.children,l=e.classes,d=e.className,u=e.disableBackdropClick,h=void 0!==u&&u,f=e.disableEscapeKeyDown,b=void 0!==f&&f,m=e.fullScreen,v=void 0!==m&&m,y=e.fullWidth,x=void 0!==y&&y,O=e.maxWidth,S=void 0===O?"sm":O,C=e.onBackdropClick,L=e.onClose,j=e.onEnter,P=e.onEntered,W=e.onEntering,M=e.onEscapeKeyDown,T=e.onExit,B=e.onExited,D=e.onExiting,R=e.open,N=e.PaperComponent,_=void 0===N?w.a:N,H=e.PaperProps,K=void 0===H?{}:H,Y=e.scroll,$=void 0===Y?"paper":Y,A=e.TransitionComponent,F=void 0===A?g:A,z=e.transitionDuration,I=void 0===z?k:z,U=e.TransitionProps,X=e["aria-describedby"],q=e["aria-labelledby"],J=Object(i.a)(e,["BackdropProps","children","classes","className","disableBackdropClick","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","onEnter","onEntered","onEntering","onEscapeKeyDown","onExit","onExited","onExiting","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps","aria-describedby","aria-labelledby"]),G=a.useRef();return a.createElement(p.a,Object(n.a)({className:Object(s.a)(l.root,d),BackdropComponent:E,BackdropProps:Object(n.a)({transitionDuration:I},o),closeAfterTransition:!0,disableBackdropClick:h,disableEscapeKeyDown:b,onEscapeKeyDown:M,onClose:L,open:R,ref:t},J),a.createElement(F,Object(n.a)({appear:!0,in:R,timeout:I,onEnter:j,onEntering:W,onEntered:P,onExit:T,onExiting:D,onExited:B,role:"none presentation"},U),a.createElement("div",{className:Object(s.a)(l.container,l["scroll".concat(Object(c.a)($))]),onMouseUp:function(e){e.target===e.currentTarget&&e.target===G.current&&(G.current=null,C&&C(e),!h&&L&&L(e,"backdropClick"))},onMouseDown:function(e){G.current=e.target}},a.createElement(_,Object(n.a)({elevation:24,role:"dialog","aria-describedby":X,"aria-labelledby":q},K,{className:Object(s.a)(l.paper,l["paperScroll".concat(Object(c.a)($))],l["paperWidth".concat(Object(c.a)(String(S)))],K.className,v&&l.paperFullScreen,x&&l.paperFullWidth)}),r))))}));t.a=Object(l.a)((function(e){return{root:{"@media print":{position:"absolute !important"}},scrollPaper:{display:"flex",justifyContent:"center",alignItems:"center"},scrollBody:{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}},container:{height:"100%","@media print":{height:"auto"},outline:0},paper:{margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},paperScrollPaper:{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},paperScrollBody:{display:"inline-block",verticalAlign:"middle",textAlign:"left"},paperWidthFalse:{maxWidth:"calc(100% - 64px)"},paperWidthXs:{maxWidth:Math.max(e.breakpoints.values.xs,444),"&$paperScrollBody":Object(r.a)({},e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+64),{maxWidth:"calc(100% - 64px)"})},paperWidthSm:{maxWidth:e.breakpoints.values.sm,"&$paperScrollBody":Object(r.a)({},e.breakpoints.down(e.breakpoints.values.sm+64),{maxWidth:"calc(100% - 64px)"})},paperWidthMd:{maxWidth:e.breakpoints.values.md,"&$paperScrollBody":Object(r.a)({},e.breakpoints.down(e.breakpoints.values.md+64),{maxWidth:"calc(100% - 64px)"})},paperWidthLg:{maxWidth:e.breakpoints.values.lg,"&$paperScrollBody":Object(r.a)({},e.breakpoints.down(e.breakpoints.values.lg+64),{maxWidth:"calc(100% - 64px)"})},paperWidthXl:{maxWidth:e.breakpoints.values.xl,"&$paperScrollBody":Object(r.a)({},e.breakpoints.down(e.breakpoints.values.xl+64),{maxWidth:"calc(100% - 64px)"})},paperFullWidth:{width:"calc(100% - 64px)"},paperFullScreen:{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,"&$paperScrollBody":{margin:0,maxWidth:"100%"}}}}),{name:"MuiDialog"})(O)},788:function(e,t,o){e.exports=o(801)},801:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),i=o(0),r=s(i),a=s(o(3));function s(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.scrollListener=o.scrollListener.bind(o),o.eventListenerOptions=o.eventListenerOptions.bind(o),o.mousewheelListener=o.mousewheelListener.bind(o),o}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"componentDidMount",value:function(){this.pageLoaded=this.props.pageStart,this.options=this.eventListenerOptions(),this.attachScrollListener()}},{key:"componentDidUpdate",value:function(){if(this.props.isReverse&&this.loadMore){var e=this.getParentElement(this.scrollComponent);e.scrollTop=e.scrollHeight-this.beforeScrollHeight+this.beforeScrollTop,this.loadMore=!1}this.attachScrollListener()}},{key:"componentWillUnmount",value:function(){this.detachScrollListener(),this.detachMousewheelListener()}},{key:"isPassiveSupported",value:function(){var e=!1,t={get passive(){e=!0}};try{document.addEventListener("test",null,t),document.removeEventListener("test",null,t)}catch(o){}return e}},{key:"eventListenerOptions",value:function(){var e=this.props.useCapture;return this.isPassiveSupported()&&(e={useCapture:this.props.useCapture,passive:!0}),e}},{key:"setDefaultLoader",value:function(e){this.defaultLoader=e}},{key:"detachMousewheelListener",value:function(){var e=window;!1===this.props.useWindow&&(e=this.scrollComponent.parentNode),e.removeEventListener("mousewheel",this.mousewheelListener,this.options?this.options:this.props.useCapture)}},{key:"detachScrollListener",value:function(){var e=window;!1===this.props.useWindow&&(e=this.getParentElement(this.scrollComponent)),e.removeEventListener("scroll",this.scrollListener,this.options?this.options:this.props.useCapture),e.removeEventListener("resize",this.scrollListener,this.options?this.options:this.props.useCapture)}},{key:"getParentElement",value:function(e){var t=this.props.getScrollParent&&this.props.getScrollParent();return null!=t?t:e&&e.parentNode}},{key:"filterProps",value:function(e){return e}},{key:"attachScrollListener",value:function(){var e=this.getParentElement(this.scrollComponent);if(this.props.hasMore&&e){var t=window;!1===this.props.useWindow&&(t=e),t.addEventListener("mousewheel",this.mousewheelListener,this.options?this.options:this.props.useCapture),t.addEventListener("scroll",this.scrollListener,this.options?this.options:this.props.useCapture),t.addEventListener("resize",this.scrollListener,this.options?this.options:this.props.useCapture),this.props.initialLoad&&this.scrollListener()}}},{key:"mousewheelListener",value:function(e){1!==e.deltaY||this.isPassiveSupported()||e.preventDefault()}},{key:"scrollListener",value:function(){var e=this.scrollComponent,t=window,o=this.getParentElement(e),n=void 0;if(this.props.useWindow){var i=document.documentElement||document.body.parentNode||document.body,r=void 0!==t.pageYOffset?t.pageYOffset:i.scrollTop;n=this.props.isReverse?r:this.calculateOffset(e,r)}else n=this.props.isReverse?o.scrollTop:e.scrollHeight-o.scrollTop-o.clientHeight;n<Number(this.props.threshold)&&e&&null!==e.offsetParent&&(this.detachScrollListener(),this.beforeScrollHeight=o.scrollHeight,this.beforeScrollTop=o.scrollTop,"function"===typeof this.props.loadMore&&(this.props.loadMore(this.pageLoaded+=1),this.loadMore=!0))}},{key:"calculateOffset",value:function(e,t){return e?this.calculateTopPosition(e)+(e.offsetHeight-t-window.innerHeight):0}},{key:"calculateTopPosition",value:function(e){return e?e.offsetTop+this.calculateTopPosition(e.offsetParent):0}},{key:"render",value:function(){var e=this,t=this.filterProps(this.props),o=t.children,n=t.element,i=t.hasMore,a=(t.initialLoad,t.isReverse),s=t.loader,l=(t.loadMore,t.pageStart,t.ref),c=(t.threshold,t.useCapture,t.useWindow,t.getScrollParent,function(e,t){var o={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n]);return o}(t,["children","element","hasMore","initialLoad","isReverse","loader","loadMore","pageStart","ref","threshold","useCapture","useWindow","getScrollParent"]));c.ref=function(t){e.scrollComponent=t,l&&l(t)};var p=[o];return i&&(s?a?p.unshift(s):p.push(s):this.defaultLoader&&(a?p.unshift(this.defaultLoader):p.push(this.defaultLoader))),r.default.createElement(n,c,p)}}]),t}(i.Component);l.propTypes={children:a.default.node.isRequired,element:a.default.node,hasMore:a.default.bool,initialLoad:a.default.bool,isReverse:a.default.bool,loader:a.default.node,loadMore:a.default.func.isRequired,pageStart:a.default.number,ref:a.default.func,getScrollParent:a.default.func,threshold:a.default.number,useCapture:a.default.bool,useWindow:a.default.bool},l.defaultProps={element:"div",hasMore:!1,initialLoad:!0,pageStart:0,ref:null,threshold:250,useWindow:!0,isReverse:!1,useCapture:!1,loader:null,getScrollParent:null},t.default=l,e.exports=t.default}}]);
//# sourceMappingURL=1.889d4fda.chunk.js.map