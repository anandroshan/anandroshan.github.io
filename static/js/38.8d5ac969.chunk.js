(this["webpackJsonpreact-redux-realworld-example-app"]=this["webpackJsonpreact-redux-realworld-example-app"]||[]).push([[38],{1236:function(e,a,o){"use strict";o.r(a);var n=o(53),d=o(7),c=o.n(d),i=o(13),t=o(29),l=o(30),r=o(38),s=o(32),m=o(31),u=o(835),_=o(0),h=o.n(_),p=o(15),b=o(11),f=o(856),g=o.n(f),S=o(799),v=o(24),w=o(35),E=o(86),M=o(2),N=o(823);o(807);var O=function(e){Object(s.a)(o,e);var a=Object(m.a)(o);function o(e){var d;return Object(t.a)(this,o),(d=a.call(this,e)).startAuth=function(){Object(E.a)().then(function(){var e=Object(i.a)(c.a.mark((function e(a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.redirectUrl&&(Object(p.b)(),localStorage.setItem("oauthDevToken",a.oauthToken),localStorage.setItem("oauthDevSecret",a.oauthSecret),window.location.href=a.redirectUrl);case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),(function(e){Object(p.b)(),d.setState({step:-1})}))},d.updateInfo=function(){Object(p.b)(!0,"Sending OTP, please wait...");var e={ccode:d.state.countryCode,phone:d.state.phone,id:d.state.userid,token:d.state.token,secret:d.state.secret};Object(w.I)(e).then(function(){var e=Object(i.a)(c.a.mark((function e(a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:void 0!=a.id&&null!=a.id&&(Object(p.b)(),localStorage.setItem("vid",d.state.userid),d.props.history.push("/verify-phone"));case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),(function(e){Object(p.b)(),Object(p.a)(!0,e.data.message)}))},d.callback=function(e){var a={oauthToken:localStorage.getItem("oauthDevToken"),oauthSecret:localStorage.getItem("oauthDevSecret"),oauthVerifier:e.oauth_verifier};Object(E.b)(a).then(function(){var e=Object(i.a)(c.a.mark((function e(a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.oauthToken?d.verify(a.oauthToken,a.oauthSecret):(Object(p.b)(),d.setState({step:-1}));case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),(function(e){Object(p.b)(),d.setState({step:-1})}))},d.verify=function(e,a){var o={oauthToken:e,oauthSecret:a};Object(E.f)(o).then(function(){var o=Object(i.a)(c.a.mark((function o(n){return c.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:console.log(n),Object(p.b)(),void 0!=n.id?(d.setState({userid:n.id,token:e,secret:a,checkbox:!1}),d.login()):(d.setState({step:-2,error:n.message}),Object(p.a)(!0,n.message));case 3:case"end":return o.stop()}}),o)})));return function(e){return o.apply(this,arguments)}}(),(function(e){var a="Authentication Error";Object(p.b)();try{Object(p.a)(!0,e.data.message),a=e.data.message}catch(e){Object(p.a)(!0,"Authentication Error")}d.setState({step:-2,error:a})}))},d.login=function(){var e={oauthToken:d.state.token,oauthSecret:d.state.secret,browser:d.state.browser,userid:d.state.userid};Object(E.c)(e).then(function(){var e=Object(i.a)(c.a.mark((function e(a){var o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(p.b)(),localStorage.clear(),localStorage.setItem("currentUser",JSON.stringify(a.userinfo)),localStorage.setItem("jwt",a.token),localStorage.setItem("walletToken",a.walletToken);try{console.log(d.props.location),o=d.props.location.search,console.log(o),-1!=o.indexOf("?next=")?(o=o.replace("?next=",""),console.log(o),-1!=o.indexOf("trade/")?window.location.href=M.a.tradeBase+o+"?token="+a.walletToken:(console.log("path"),window.location.href=o)):window.location.href="/home"}catch(n){window.location.href="/home"}case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),(function(e){Object(p.b)(),d.setState({step:-1})}))},d.handleCheck=function(e){d.setState({checkbox:!d.state.checkbox})},d.handleChange=function(e){var a=e.target,o=a.name,c=a.value;d.setState(Object(n.a)({},o,c),(function(){}))},d.goBack=function(e){localStorage.removeItem("oauthDevToken"),localStorage.removeItem("oauthUsrToken"),localStorage.removeItem("oauthDevSecret"),localStorage.removeItem("oauthUsrSecret"),window.location.href="/twitter-login"},d.submitForm=function(e){},d.state={email:"",browser:null,values:[],password:"",countryCode:"",phone:"",pwdtype:"password",step:0,userid:0,error:"",errors:{}},d.handleChange=d.handleChange.bind(Object(r.a)(d)),d.submitForm=d.submitForm.bind(Object(r.a)(d)),d}return Object(l.a)(o,[{key:"componentDidMount",value:function(){var e=Object(u.a)();this.setState({browser:e});var a=this.props.location.search,o=new URLSearchParams(a),n={oauth_token:o.get("oauth_token"),oauth_verifier:o.get("oauth_verifier")},d=localStorage.getItem("oauthDevToken");Object(p.b)(!0,"Authentication in progress, please wait..."),void 0!=n.oauth_token&&null!=n.oauth_token&&void 0!=d&&null!=d&&n.oauth_token==d?this.callback(n):this.startAuth()}},{key:"render",value:function(){var e=this,a=this.state,o=(a.email,a.name,a.phone);a.password,a.cPassword,a.pwdtype;return h.a.createElement(h.a.Fragment,null,h.a.createElement("div",{className:"loginPage"},h.a.createElement("div",{className:"container"},h.a.createElement("div",{className:"row"},h.a.createElement("div",{className:"col-md-7"},h.a.createElement(b.a,{href:"/"},h.a.createElement("img",{className:"logo",src:Object(v.a)("logo-main.png"),alt:""})),h.a.createElement("p",{className:"intro-text"},"Social Media Platform with Trusted Cryptocurrency Exchange"),h.a.createElement("img",{className:"coins",src:Object(v.a)("front/coins1.png")})),h.a.createElement("div",{className:"col-md-5"},h.a.createElement("div",{className:"loginForm"},0==this.state.step?h.a.createElement("div",null,h.a.createElement("h3",{className:"blueTitle"},"Authentication in progress, please wait...")):null,-1==this.state.step?h.a.createElement("div",null,h.a.createElement("h3",{className:"blueTitle"},"Authentication error, please go back and try again!"),h.a.createElement("div",{className:"input-group mb-3 "},h.a.createElement("div",{className:"input-group-append nextbtn"},h.a.createElement("button",{className:"btn btn-main big",type:"button",onClick:function(a){return e.goBack(a)}},"Try Again"),h.a.createElement("div",null)))):null,-2==this.state.step?h.a.createElement("div",null,h.a.createElement("h3",{className:"blueTitle"},"Authentication failed, please try again!"),h.a.createElement("p",{color:"red"},this.state.error),h.a.createElement("div",{className:"input-group mb-3 "},h.a.createElement("div",{className:"input-group-append nextbtn"},h.a.createElement("button",{className:"btn btn-main big",type:"button",onClick:function(a){return e.goBack(a)}},"Try Again"),h.a.createElement("div",null)))):null,1==this.state.step?h.a.createElement("div",null,h.a.createElement("h3",{className:"blueTitle"},"Final Step"),h.a.createElement("div",{className:"input-group mb-3"},h.a.createElement("div",{className:"input-group-append mr-2"},h.a.createElement(g.a,{className:"form-control",options:N,values:this.state.values,labelField:"name",valueField:"name",required:!0,name:"ccode",onChange:function(a){console.log(a);try{e.setState({countryCode:a[0].dial_code,values:a})}catch(o){e.setState({countryCode:"",values:a})}}})),h.a.createElement("input",{className:"form-control",type:"tel",required:!0,placeholder:"Mobile",pattern:"[0-9]{6,}",title:"Minimum 6 digit, numbers only",name:"phone",value:o,onChange:function(a){return e.handleChange(a)}}),h.a.createElement("span",{style:{color:"red",width:"100%"}},this.state.errors.phone)),h.a.createElement("div",{className:"input-group mb-3 "},h.a.createElement("div",{className:"input-group-append nextbtn"},h.a.createElement("div",null),h.a.createElement("button",{className:"btn btn-main big",type:"submit",disabled:this.props.inProgress,onClick:function(a){return e.updateInfo()}},"Continue")))):null))))),h.a.createElement(S.a,null))}}]),o}(h.a.Component);a.default=O},799:function(e,a,o){"use strict";var n=o(14),d=o(0),c=o.n(d),i=(o(64),o(11)),t=(o(24),o(800),o(2));a.a=function(e){var a=Object(d.useState)(void 0!=e.layout?e.layout:"default"),o=Object(n.a)(a,2);o[0],o[1];return c.a.createElement("footer",{className:"frontFooter"},c.a.createElement("div",{className:"container"},c.a.createElement("p",null,"Copyright \xa9 2021 Eclipton | All rights reserved"),c.a.createElement("p",{className:"pl-3 pr-3"},"Activity licence FVT000294"),c.a.createElement("div",{className:"d-flex align-items-center justify-content-end flex-wrap foot-menu"},c.a.createElement("a",{href:t.a.frontEnd+"terms-and-conditions.pdf",target:"_BLANK"},"Terms & Conditions"),c.a.createElement(i.a,{href:"/contact-us"},"Contact Us"))))}},800:function(e,a,o){},807:function(e,a,o){},823:function(e){e.exports=JSON.parse('[{"name":"Afghanistan","dial_code":"+93","code":"AF"},{"name":"Albania","dial_code":"+355","code":"AL"},{"name":"Algeria","dial_code":"+213","code":"DZ"},{"name":"AmericanSamoa","dial_code":"+1 684","code":"AS"},{"name":"Andorra","dial_code":"+376","code":"AD"},{"name":"Angola","dial_code":"+244","code":"AO"},{"name":"Anguilla","dial_code":"+1 264","code":"AI"},{"name":"Antigua and Barbuda","dial_code":"+1268","code":"AG"},{"name":"Argentina","dial_code":"+54","code":"AR"},{"name":"Armenia","dial_code":"+374","code":"AM"},{"name":"Aruba","dial_code":"+297","code":"AW"},{"name":"Australia","dial_code":"+61","code":"AU"},{"name":"Austria","dial_code":"+43","code":"AT"},{"name":"Azerbaijan","dial_code":"+994","code":"AZ"},{"name":"Bahamas","dial_code":"+1 242","code":"BS"},{"name":"Bahrain","dial_code":"+973","code":"BH"},{"name":"Bangladesh","dial_code":"+880","code":"BD"},{"name":"Barbados","dial_code":"+1 246","code":"BB"},{"name":"Belarus","dial_code":"+375","code":"BY"},{"name":"Belgium","dial_code":"+32","code":"BE"},{"name":"Belize","dial_code":"+501","code":"BZ"},{"name":"Benin","dial_code":"+229","code":"BJ"},{"name":"Bermuda","dial_code":"+1 441","code":"BM"},{"name":"Bhutan","dial_code":"+975","code":"BT"},{"name":"Bosnia and Herzegovina","dial_code":"+387","code":"BA"},{"name":"Botswana","dial_code":"+267","code":"BW"},{"name":"Brazil","dial_code":"+55","code":"BR"},{"name":"British Indian Ocean Territory","dial_code":"+246","code":"IO"},{"name":"Bulgaria","dial_code":"+359","code":"BG"},{"name":"Burkina Faso","dial_code":"+226","code":"BF"},{"name":"Burundi","dial_code":"+257","code":"BI"},{"name":"Cambodia","dial_code":"+855","code":"KH"},{"name":"Cameroon","dial_code":"+237","code":"CM"},{"name":"Canada","dial_code":"+1","code":"CA"},{"name":"Cape Verde","dial_code":"+238","code":"CV"},{"name":"Cayman Islands","dial_code":"+ 345","code":"KY"},{"name":"Central African Republic","dial_code":"+236","code":"CF"},{"name":"Chad","dial_code":"+235","code":"TD"},{"name":"Chile","dial_code":"+56","code":"CL"},{"name":"China","dial_code":"+86","code":"CN"},{"name":"Christmas Island","dial_code":"+61","code":"CX"},{"name":"Colombia","dial_code":"+57","code":"CO"},{"name":"Comoros","dial_code":"+269","code":"KM"},{"name":"Congo","dial_code":"+242","code":"CG"},{"name":"Cook Islands","dial_code":"+682","code":"CK"},{"name":"Costa Rica","dial_code":"+506","code":"CR"},{"name":"Croatia","dial_code":"+385","code":"HR"},{"name":"Cuba","dial_code":"+53","code":"CU"},{"name":"Cyprus","dial_code":"+537","code":"CY"},{"name":"Czech Republic","dial_code":"+420","code":"CZ"},{"name":"Denmark","dial_code":"+45","code":"DK"},{"name":"Djibouti","dial_code":"+253","code":"DJ"},{"name":"Dominica","dial_code":"+1 767","code":"DM"},{"name":"Dominican Republic","dial_code":"+1 849","code":"DO"},{"name":"Ecuador","dial_code":"+593","code":"EC"},{"name":"Egypt","dial_code":"+20","code":"EG"},{"name":"El Salvador","dial_code":"+503","code":"SV"},{"name":"Equatorial Guinea","dial_code":"+240","code":"GQ"},{"name":"Eritrea","dial_code":"+291","code":"ER"},{"name":"Estonia","dial_code":"+372","code":"EE"},{"name":"Ethiopia","dial_code":"+251","code":"ET"},{"name":"Faroe Islands","dial_code":"+298","code":"FO"},{"name":"Fiji","dial_code":"+679","code":"FJ"},{"name":"Finland","dial_code":"+358","code":"FI"},{"name":"France","dial_code":"+33","code":"FR"},{"name":"French Guiana","dial_code":"+594","code":"GF"},{"name":"French Polynesia","dial_code":"+689","code":"PF"},{"name":"Gabon","dial_code":"+241","code":"GA"},{"name":"Gambia","dial_code":"+220","code":"GM"},{"name":"Georgia","dial_code":"+995","code":"GE"},{"name":"Germany","dial_code":"+49","code":"DE"},{"name":"Ghana","dial_code":"+233","code":"GH"},{"name":"Gibraltar","dial_code":"+350","code":"GI"},{"name":"Greece","dial_code":"+30","code":"GR"},{"name":"Greenland","dial_code":"+299","code":"GL"},{"name":"Grenada","dial_code":"+1 473","code":"GD"},{"name":"Guadeloupe","dial_code":"+590","code":"GP"},{"name":"Guam","dial_code":"+1 671","code":"GU"},{"name":"Guatemala","dial_code":"+502","code":"GT"},{"name":"Guinea","dial_code":"+224","code":"GN"},{"name":"Guinea-Bissau","dial_code":"+245","code":"GW"},{"name":"Guyana","dial_code":"+595","code":"GY"},{"name":"Haiti","dial_code":"+509","code":"HT"},{"name":"Honduras","dial_code":"+504","code":"HN"},{"name":"Hungary","dial_code":"+36","code":"HU"},{"name":"Iceland","dial_code":"+354","code":"IS"},{"name":"India","dial_code":"+91","code":"IN"},{"name":"Indonesia","dial_code":"+62","code":"ID"},{"name":"Iraq","dial_code":"+964","code":"IQ"},{"name":"Ireland","dial_code":"+353","code":"IE"},{"name":"Israel","dial_code":"+972","code":"IL"},{"name":"Italy","dial_code":"+39","code":"IT"},{"name":"Jamaica","dial_code":"+1 876","code":"JM"},{"name":"Japan","dial_code":"+81","code":"JP"},{"name":"Jordan","dial_code":"+962","code":"JO"},{"name":"Kazakhstan","dial_code":"+7 7","code":"KZ"},{"name":"Kenya","dial_code":"+254","code":"KE"},{"name":"Kiribati","dial_code":"+686","code":"KI"},{"name":"Kuwait","dial_code":"+965","code":"KW"},{"name":"Kyrgyzstan","dial_code":"+996","code":"KG"},{"name":"Latvia","dial_code":"+371","code":"LV"},{"name":"Lebanon","dial_code":"+961","code":"LB"},{"name":"Lesotho","dial_code":"+266","code":"LS"},{"name":"Liberia","dial_code":"+231","code":"LR"},{"name":"Liechtenstein","dial_code":"+423","code":"LI"},{"name":"Lithuania","dial_code":"+370","code":"LT"},{"name":"Luxembourg","dial_code":"+352","code":"LU"},{"name":"Madagascar","dial_code":"+261","code":"MG"},{"name":"Malawi","dial_code":"+265","code":"MW"},{"name":"Malaysia","dial_code":"+60","code":"MY"},{"name":"Maldives","dial_code":"+960","code":"MV"},{"name":"Mali","dial_code":"+223","code":"ML"},{"name":"Malta","dial_code":"+356","code":"MT"},{"name":"Marshall Islands","dial_code":"+692","code":"MH"},{"name":"Martinique","dial_code":"+596","code":"MQ"},{"name":"Mauritania","dial_code":"+222","code":"MR"},{"name":"Mauritius","dial_code":"+230","code":"MU"},{"name":"Mayotte","dial_code":"+262","code":"YT"},{"name":"Mexico","dial_code":"+52","code":"MX"},{"name":"Monaco","dial_code":"+377","code":"MC"},{"name":"Mongolia","dial_code":"+976","code":"MN"},{"name":"Montenegro","dial_code":"+382","code":"ME"},{"name":"Montserrat","dial_code":"+1664","code":"MS"},{"name":"Morocco","dial_code":"+212","code":"MA"},{"name":"Myanmar","dial_code":"+95","code":"MM"},{"name":"Namibia","dial_code":"+264","code":"NA"},{"name":"Nauru","dial_code":"+674","code":"NR"},{"name":"Nepal","dial_code":"+977","code":"NP"},{"name":"Netherlands","dial_code":"+31","code":"NL"},{"name":"Netherlands Antilles","dial_code":"+599","code":"AN"},{"name":"New Caledonia","dial_code":"+687","code":"NC"},{"name":"New Zealand","dial_code":"+64","code":"NZ"},{"name":"Nicaragua","dial_code":"+505","code":"NI"},{"name":"Niger","dial_code":"+227","code":"NE"},{"name":"Nigeria","dial_code":"+234","code":"NG"},{"name":"Niue","dial_code":"+683","code":"NU"},{"name":"Norfolk Island","dial_code":"+672","code":"NF"},{"name":"Northern Mariana Islands","dial_code":"+1 670","code":"MP"},{"name":"Norway","dial_code":"+47","code":"NO"},{"name":"Oman","dial_code":"+968","code":"OM"},{"name":"Pakistan","dial_code":"+92","code":"PK"},{"name":"Palau","dial_code":"+680","code":"PW"},{"name":"Panama","dial_code":"+507","code":"PA"},{"name":"Papua New Guinea","dial_code":"+675","code":"PG"},{"name":"Paraguay","dial_code":"+595","code":"PY"},{"name":"Peru","dial_code":"+51","code":"PE"},{"name":"Philippines","dial_code":"+63","code":"PH"},{"name":"Poland","dial_code":"+48","code":"PL"},{"name":"Portugal","dial_code":"+351","code":"PT"},{"name":"Puerto Rico","dial_code":"+1 939","code":"PR"},{"name":"Qatar","dial_code":"+974","code":"QA"},{"name":"Romania","dial_code":"+40","code":"RO"},{"name":"Rwanda","dial_code":"+250","code":"RW"},{"name":"Samoa","dial_code":"+685","code":"WS"},{"name":"San Marino","dial_code":"+378","code":"SM"},{"name":"Saudi Arabia","dial_code":"+966","code":"SA"},{"name":"Senegal","dial_code":"+221","code":"SN"},{"name":"Serbia","dial_code":"+381","code":"RS"},{"name":"Seychelles","dial_code":"+248","code":"SC"},{"name":"Sierra Leone","dial_code":"+232","code":"SL"},{"name":"Singapore","dial_code":"+65","code":"SG"},{"name":"Slovakia","dial_code":"+421","code":"SK"},{"name":"Slovenia","dial_code":"+386","code":"SI"},{"name":"Solomon Islands","dial_code":"+677","code":"SB"},{"name":"South Africa","dial_code":"+27","code":"ZA"},{"name":"South Georgia and the South Sandwich Islands","dial_code":"+500","code":"GS"},{"name":"Spain","dial_code":"+34","code":"ES"},{"name":"Sri Lanka","dial_code":"+94","code":"LK"},{"name":"Sudan","dial_code":"+249","code":"SD"},{"name":"Suriname","dial_code":"+597","code":"SR"},{"name":"Swaziland","dial_code":"+268","code":"SZ"},{"name":"Sweden","dial_code":"+46","code":"SE"},{"name":"Switzerland","dial_code":"+41","code":"CH"},{"name":"Tajikistan","dial_code":"+992","code":"TJ"},{"name":"Thailand","dial_code":"+66","code":"TH"},{"name":"Togo","dial_code":"+228","code":"TG"},{"name":"Tokelau","dial_code":"+690","code":"TK"},{"name":"Tonga","dial_code":"+676","code":"TO"},{"name":"Trinidad and Tobago","dial_code":"+1 868","code":"TT"},{"name":"Tunisia","dial_code":"+216","code":"TN"},{"name":"Turkey","dial_code":"+90","code":"TR"},{"name":"Turkmenistan","dial_code":"+993","code":"TM"},{"name":"Turks and Caicos Islands","dial_code":"+1 649","code":"TC"},{"name":"Tuvalu","dial_code":"+688","code":"TV"},{"name":"Uganda","dial_code":"+256","code":"UG"},{"name":"Ukraine","dial_code":"+380","code":"UA"},{"name":"United Arab Emirates","dial_code":"+971","code":"AE"},{"name":"United Kingdom","dial_code":"+44","code":"GB"},{"name":"United States","dial_code":"+1","code":"US"},{"name":"Uruguay","dial_code":"+598","code":"UY"},{"name":"Uzbekistan","dial_code":"+998","code":"UZ"},{"name":"Vanuatu","dial_code":"+678","code":"VU"},{"name":"Wallis and Futuna","dial_code":"+681","code":"WF"},{"name":"Yemen","dial_code":"+967","code":"YE"},{"name":"Zambia","dial_code":"+260","code":"ZM"},{"name":"Zimbabwe","dial_code":"+263","code":"ZW"},{"name":"land Islands","dial_code":"","code":"AX"},{"name":"Antarctica","dial_code":null,"code":"AQ"},{"name":"Bolivia, Plurinational State of","dial_code":"+591","code":"BO"},{"name":"Brunei Darussalam","dial_code":"+673","code":"BN"},{"name":"Cocos (Keeling) Islands","dial_code":"+61","code":"CC"},{"name":"Congo, The Democratic Republic of the","dial_code":"+243","code":"CD"},{"name":"Cote d\'Ivoire","dial_code":"+225","code":"CI"},{"name":"Falkland Islands (Malvinas)","dial_code":"+500","code":"FK"},{"name":"Guernsey","dial_code":"+44","code":"GG"},{"name":"Holy See (Vatican City State)","dial_code":"+379","code":"VA"},{"name":"Hong Kong","dial_code":"+852","code":"HK"},{"name":"Iran, Islamic Republic of","dial_code":"+98","code":"IR"},{"name":"Isle of Man","dial_code":"+44","code":"IM"},{"name":"Jersey","dial_code":"+44","code":"JE"},{"name":"Korea, Democratic People\'s Republic of","dial_code":"+850","code":"KP"},{"name":"Korea, Republic of","dial_code":"+82","code":"KR"},{"name":"Lao People\'s Democratic Republic","dial_code":"+856","code":"LA"},{"name":"Libyan Arab Jamahiriya","dial_code":"+218","code":"LY"},{"name":"Macao","dial_code":"+853","code":"MO"},{"name":"Macedonia, The Former Yugoslav Republic of","dial_code":"+389","code":"MK"},{"name":"Micronesia, Federated States of","dial_code":"+691","code":"FM"},{"name":"Moldova, Republic of","dial_code":"+373","code":"MD"},{"name":"Mozambique","dial_code":"+258","code":"MZ"},{"name":"Palestinian Territory, Occupied","dial_code":"+970","code":"PS"},{"name":"Pitcairn","dial_code":"+872","code":"PN"},{"name":"R\xe9union","dial_code":"+262","code":"RE"},{"name":"Russia","dial_code":"+7","code":"RU"},{"name":"Saint Barth\xe9lemy","dial_code":"+590","code":"BL"},{"name":"Saint Helena, Ascension and Tristan Da Cunha","dial_code":"+290","code":"SH"},{"name":"Saint Kitts and Nevis","dial_code":"+1 869","code":"KN"},{"name":"Saint Lucia","dial_code":"+1 758","code":"LC"},{"name":"Saint Martin","dial_code":"+590","code":"MF"},{"name":"Saint Pierre and Miquelon","dial_code":"+508","code":"PM"},{"name":"Saint Vincent and the Grenadines","dial_code":"+1 784","code":"VC"},{"name":"Sao Tome and Principe","dial_code":"+239","code":"ST"},{"name":"Somalia","dial_code":"+252","code":"SO"},{"name":"Svalbard and Jan Mayen","dial_code":"+47","code":"SJ"},{"name":"Syrian Arab Republic","dial_code":"+963","code":"SY"},{"name":"Taiwan, Province of China","dial_code":"+886","code":"TW"},{"name":"Tanzania, United Republic of","dial_code":"+255","code":"TZ"},{"name":"Timor-Leste","dial_code":"+670","code":"TL"},{"name":"Venezuela, Bolivarian Republic of","dial_code":"+58","code":"VE"},{"name":"Viet Nam","dial_code":"+84","code":"VN"},{"name":"Virgin Islands, British","dial_code":"+1 284","code":"VG"},{"name":"Virgin Islands, U.S.","dial_code":"+1 340","code":"VI"}]')},835:function(e,a,o){"use strict";(function(e){o.d(a,"a",(function(){return u}));var n=function(){for(var e=0,a=0,o=arguments.length;a<o;a++)e+=arguments[a].length;var n=Array(e),d=0;for(a=0;a<o;a++)for(var c=arguments[a],i=0,t=c.length;i<t;i++,d++)n[d]=c[i];return n},d=function(e,a,o){this.name=e,this.version=a,this.os=o,this.type="browser"},c=function(a){this.version=a,this.type="node",this.name="node",this.os=e.platform},i=function(e,a,o,n){this.name=e,this.version=a,this.os=o,this.bot=n,this.type="bot-device"},t=function(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null},l=function(){this.type="react-native",this.name="react-native",this.version=null,this.os=null},r=/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,s=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FBAV\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["searchbot",/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]],m=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function u(a){return a?h(a):"undefined"===typeof document&&"undefined"!==typeof navigator&&"ReactNative"===navigator.product?new l:"undefined"!==typeof navigator?h(navigator.userAgent):"undefined"!==typeof e&&e.version?new c(e.version.slice(1)):null}function _(e){return""!==e&&s.reduce((function(a,o){var n=o[0],d=o[1];if(a)return a;var c=d.exec(e);return!!c&&[n,c]}),!1)}function h(e){var a=_(e);if(!a)return null;var o=a[0],c=a[1];if("searchbot"===o)return new t;var l=c[1]&&c[1].split(/[._]/).slice(0,3);l?l.length<3&&(l=n(l,function(e){for(var a=[],o=0;o<e;o++)a.push("0");return a}(3-l.length))):l=[];var s=l.join("."),u=function(e){for(var a=0,o=m.length;a<o;a++){var n=m[a],d=n[0];if(n[1].exec(e))return d}return null}(e),h=r.exec(e);return h&&h[1]?new i(o,s,u,h[1]):new d(o,s,u)}}).call(this,o(98))}}]);
//# sourceMappingURL=38.8d5ac969.chunk.js.map