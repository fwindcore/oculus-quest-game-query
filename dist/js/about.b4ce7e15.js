(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0167":function(t,e,r){},"14c3":function(t,e,r){var n=r("c6b6"),a=r("9263");t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var i=r.call(t,e);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},"159b":function(t,e,r){var n=r("da84"),a=r("fdbc"),i=r("17c2"),o=r("9112");for(var c in a){var s=n[c],l=s&&s.prototype;if(l&&l.forEach!==i)try{o(l,"forEach",i)}catch(u){l.forEach=i}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,a=r("a640"),i=r("ae40"),o=a("forEach"),c=i("forEach");t.exports=o&&c?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"3a21":function(t,e,r){},4160:function(t,e,r){"use strict";var n=r("23e7"),a=r("17c2");n({target:"Array",proto:!0,forced:[].forEach!=a},{forEach:a})},5319:function(t,e,r){"use strict";var n=r("d784"),a=r("825a"),i=r("7b0b"),o=r("50c4"),c=r("a691"),s=r("1d80"),l=r("8aa5"),u=r("14c3"),f=Math.max,p=Math.min,d=Math.floor,h=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g,g=function(t){return void 0===t?t:String(t)};n("replace",2,(function(t,e,r,n){var b=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,x=n.REPLACE_KEEPS_$0,m=b?"$":"$0";return[function(r,n){var a=s(this),i=void 0==r?void 0:r[t];return void 0!==i?i.call(r,a,n):e.call(String(a),r,n)},function(t,n){if(!b&&x||"string"===typeof n&&-1===n.indexOf(m)){var i=r(e,t,this,n);if(i.done)return i.value}var s=a(t),d=String(this),h="function"===typeof n;h||(n=String(n));var v=s.global;if(v){var y=s.unicode;s.lastIndex=0}var E=[];while(1){var S=u(s,d);if(null===S)break;if(E.push(S),!v)break;var w=String(S[0]);""===w&&(s.lastIndex=l(d,o(s.lastIndex),y))}for(var D="",T=0,L=0;L<E.length;L++){S=E[L];for(var C=String(S[0]),M=f(p(c(S.index),d.length),0),A=[],k=1;k<S.length;k++)A.push(g(S[k]));var O=S.groups;if(h){var B=[C].concat(A,M,d);void 0!==O&&B.push(O);var P=String(n.apply(void 0,B))}else P=_(C,d,M,A,O,n);M>=T&&(D+=d.slice(T,M)+P,T=M+C.length)}return D+d.slice(T)}];function _(t,r,n,a,o,c){var s=n+t.length,l=a.length,u=v;return void 0!==o&&(o=i(o),u=h),e.call(c,u,(function(e,i){var c;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return r.slice(0,n);case"'":return r.slice(s);case"<":c=o[i.slice(1,-1)];break;default:var u=+i;if(0===u)return e;if(u>l){var f=d(u/10);return 0===f?e:f<=l?void 0===a[f-1]?i.charAt(1):a[f-1]+i.charAt(1):e}c=a[u-1]}return void 0===c?"":c}))}}))},6547:function(t,e,r){var n=r("a691"),a=r("1d80"),i=function(t){return function(e,r){var i,o,c=String(a(e)),s=n(r),l=c.length;return s<0||s>=l?t?"":void 0:(i=c.charCodeAt(s),i<55296||i>56319||s+1===l||(o=c.charCodeAt(s+1))<56320||o>57343?t?c.charAt(s):i:t?c.slice(s,s+2):o-56320+(i-55296<<10)+65536)}};t.exports={codeAt:i(!1),charAt:i(!0)}},7612:function(t,e,r){},"76f4":function(t,e,r){"use strict";r("3a21")},"822b":function(t,e,r){"use strict";r("0167")},"8aa5":function(t,e,r){"use strict";var n=r("6547").charAt;t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},9263:function(t,e,r){"use strict";var n=r("ad6d"),a=r("9f7f"),i=RegExp.prototype.exec,o=String.prototype.replace,c=i,s=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=a.UNSUPPORTED_Y||a.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],f=s||u||l;f&&(c=function(t){var e,r,a,c,f=this,p=l&&f.sticky,d=n.call(f),h=f.source,v=0,g=t;return p&&(d=d.replace("y",""),-1===d.indexOf("g")&&(d+="g"),g=String(t).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==t[f.lastIndex-1])&&(h="(?: "+h+")",g=" "+g,v++),r=new RegExp("^(?:"+h+")",d)),u&&(r=new RegExp("^"+h+"$(?!\\s)",d)),s&&(e=f.lastIndex),a=i.call(p?r:f,g),p?a?(a.input=a.input.slice(v),a[0]=a[0].slice(v),a.index=f.lastIndex,f.lastIndex+=a[0].length):f.lastIndex=0:s&&a&&(f.lastIndex=f.global?a.index+a[0].length:e),u&&a&&a.length>1&&o.call(a[0],r,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(a[c]=void 0)})),a}),t.exports=c},"99af":function(t,e,r){"use strict";var n=r("23e7"),a=r("d039"),i=r("e8b5"),o=r("861d"),c=r("7b0b"),s=r("50c4"),l=r("8418"),u=r("65f0"),f=r("1dde"),p=r("b622"),d=r("2d00"),h=p("isConcatSpreadable"),v=9007199254740991,g="Maximum allowed index exceeded",b=d>=51||!a((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),x=f("concat"),m=function(t){if(!o(t))return!1;var e=t[h];return void 0!==e?!!e:i(t)},_=!b||!x;n({target:"Array",proto:!0,forced:_},{concat:function(t){var e,r,n,a,i,o=c(this),f=u(o,0),p=0;for(e=-1,n=arguments.length;e<n;e++)if(i=-1===e?o:arguments[e],m(i)){if(a=s(i.length),p+a>v)throw TypeError(g);for(r=0;r<a;r++,p++)r in i&&l(f,p,i[r])}else{if(p>=v)throw TypeError(g);l(f,p++,i)}return f.length=p,f}})},"9f7f":function(t,e,r){"use strict";var n=r("d039");function a(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=n((function(){var t=a("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=a("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a15b:function(t,e,r){"use strict";var n=r("23e7"),a=r("44ad"),i=r("fc6a"),o=r("a640"),c=[].join,s=a!=Object,l=o("join",",");n({target:"Array",proto:!0,forced:s||!l},{join:function(t){return c.call(i(this),void 0===t?",":t)}})},a25e:function(t,e,r){"use strict";r("7612")},ac1f:function(t,e,r){"use strict";var n=r("23e7"),a=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(t,e,r){"use strict";var n=r("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},c84b:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"detail"},[r("van-sticky",[r("van-nav-bar",{attrs:{title:t.title,"left-text":"返回","left-arrow":""},on:{"click-left":t.onClickLeft}})],1),t.loaded?r("div",[r("van-swipe",{staticClass:"my-swipe",attrs:{autoplay:1e4,"indicator-color":"white"}},t._l(5,(function(e){return r("van-swipe-item",{key:e},[r("van-image",{attrs:{src:t.getScreenshotUrl(e)}})],1)})),1),r("div",{staticClass:"content"},[r("van-row",[r("van-col",{attrs:{span:"18"}},[r("div",{staticClass:"title"},[t._v(t._s(t.appDetail.display_name))])]),r("van-col",{attrs:{span:"6"}},[r("price",{attrs:{currentOffer:t.appDetail.current_offer},nativeOn:{click:function(e){return t.gotoOculus(e)}}})],1)],1),r("div",{staticClass:"rate"},[r("van-row",{attrs:{gutter:"20",type:"flex"}},[r("van-col",[r("van-rate",{attrs:{color:"#ffd21e","void-icon":"star","void-color":"#eee","allow-half":"",readonly:""},model:{value:t.appDetail.quality_rating_aggregate,callback:function(e){t.$set(t.appDetail,"quality_rating_aggregate",e)},expression:"appDetail.quality_rating_aggregate"}})],1),r("van-col",[r("div",{staticClass:"rating-count"},[t._v(t._s(t.ratingNum)+"次评分")])])],1)],1),r("div",{staticClass:"description van-hairline--top"},[r("van-row",[r("TextMore",{attrs:{text:t.appDetail.display_long_description}})],1)],1),r("van-cell-group",[r("van-cell",{attrs:{title:"发布日期",value:t.releaseData}}),r("van-cell",{attrs:{title:"游戏模式",value:t.gameMode}}),r("van-cell",{attrs:{title:"类型",value:t.genreNames}}),r("van-cell",{attrs:{title:"语言",value:t.appLanguages}}),r("van-cell",{attrs:{title:"开发者",value:t.appDetail.developer_name}}),r("van-cell",{attrs:{title:"发行商",value:t.appDetail.publisher_name}}),r("van-cell",{attrs:{title:"安装体积",value:t.totalInstalledSpace}}),r("van-cell",{attrs:{title:"所需空间",value:t.requiredSpaceAdjusted}}),r("van-cell",{attrs:{title:"最新版本",value:t.appDetail.latest_supported_binary.version}}),r("van-cell",{attrs:{title:"更新记录"},scopedSlots:t._u([{key:"label",fn:function(){return[r("text-more",{attrs:{text:t.appDetail.latest_supported_binary.change_log||"无"}})]},proxy:!0}],null,!1,569455853)})],1)],1)],1):r("div",[r("van-empty")],1)],1)},a=[],i=(r("99af"),r("4160"),r("a15b"),r("d81d"),r("b0c0"),r("ac1f"),r("5319"),r("159b"),r("f8c8")),o=r("ed08"),c=r("cee5"),s=r.n(c),l=r("323e"),u=r.n(l),f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("van-button",{attrs:{type:t.isDiscount?"danger":"info"}},[r("van-row",{staticClass:"current-price"},[t._v(t._s(t.currentPrice))]),t.originPrice?r("van-row",{staticClass:"origin-price"},[t._v(" "+t._s(t.originPrice))]):t._e()],1)],1)},p=[],d={props:{currentOffer:{type:Object,default:function(){}}},computed:{priceCurrency:function(){return this.currentOffer.price.currency},rate:function(){return this.$store.state.rate},isDiscount:function(){return!!this.currentOffer.promo_benefit},isFree:function(){return"0"==this.currentOffer.price.offset_amount},currentPrice:function(){return this.isFree?"免费":"¥"+Object(o["b"])(this.currentOffer.price.offset_amount,this.rate,this.priceCurrency)},originPrice:function(){return this.isDiscount?"¥"+Object(o["b"])(this.currentOffer.strikethrough_price.offset_amount,this.rate,this.priceCurrency):""},promoBenefit:function(){return this.isDiscount?this.currentOffer.promo_benefit:""}}},h=d,v=(r("a25e"),r("2877")),g=Object(v["a"])(h,f,p,!1,null,"67a0ad44",null),b=g.exports,x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{ref:"textDom",class:{more:t.showMore,all:!t.showMore}},[t._v(" "+t._s(t.text)+" ")]),r("div",{directives:[{name:"show",rawName:"v-show",value:t.btnShow,expression:"btnShow"}],staticClass:"more-link"},[r("a",{domProps:{textContent:t._s(t.moreText)},on:{click:t.onShowMoreClick}})])])},m=[],_={props:{text:{type:String,default:""}},computed:{moreText:function(){return this.showMore?"展开":"收起"}},data:function(){return{showMore:!0,btnShow:!1}},mounted:function(){this.textDom=this.$refs.textDom,this.checkDetailBtnShow(),window.addEventListener("resize",this.checkDetailBtnShow)},methods:{onShowMoreClick:function(){this.showMore=!this.showMore},checkDetailBtnShow:function(){var t=this;this.$nextTick((function(){t.textDom=t.$refs.textDom,t.btnShow=t.textDom.clientHeight<t.textDom.scrollHeight}))}}},y=_,E=(r("76f4"),Object(v["a"])(y,x,m,!1,null,"5cb1beab",null)),S=E.exports,w={components:{Price:b,TextMore:S},data:function(){return{appDetail:{},loaded:!1}},computed:{title:function(){return this.appDetail.display_name||""},ratingNum:function(){var t=0;return this.appDetail.quality_rating_histogram_aggregate_all.forEach((function(e){return t+=e.count})),t},releaseData:function(){return Object(o["a"])(this.appDetail.release_date)},genreNames:function(){return this.appDetail.genre_names.join("、")},gameMode:function(){return this.appDetail.user_interaction_mode_names.join("、")},appLanguages:function(){return this.appDetail.supported_in_app_languages.map((function(t){return t.name})).join("\n")},totalInstalledSpace:function(){return s()(this.appDetail.latest_supported_binary.total_installed_space)},requiredSpaceAdjusted:function(){return s()(this.appDetail.latest_supported_binary.required_space_adjusted)}},beforeRouteUpdate:function(t,e,r){console.log("beforeRouteUpdate",t,e),this.loadAppinfo(),r()},watch:{$route:function(t){"Detail"==t.name&&this.loadAppinfo()}},created:function(){this.loadAppinfo()},methods:{loadAppinfo:function(){var t=this;this.loaded=!1,u.a.start(),Object(i["a"])(this.$route.params.id).then((function(e){t.appDetail=e.data.data.node,t.loaded=!0,u.a.done()}))},getScreenshotUrl:function(t){return"./detail/".concat(this.$route.params.id,"/screenshots/").concat(t-1,".jpg")},gotoOculus:function(){window.open("https://www.oculus.com/experiences/quest/".concat(this.$route.params.id,"/"))},onClickLeft:function(){this.$router.replace("/")}}},D=w,T=(r("822b"),Object(v["a"])(D,n,a,!1,null,"1170017b",null));e["default"]=T.exports},cee5:function(t,e,r){"use strict";(function(e){!function(e){var r=/^(b|B)$/,n={iec:{bits:["b","Kib","Mib","Gib","Tib","Pib","Eib","Zib","Yib"],bytes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},jedec:{bits:["b","Kb","Mb","Gb","Tb","Pb","Eb","Zb","Yb"],bytes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}},a={iec:["","kibi","mebi","gibi","tebi","pebi","exbi","zebi","yobi"],jedec:["","kilo","mega","giga","tera","peta","exa","zetta","yotta"]};function i(t){var e,i,o,c,s,l,u,f,p,d,h,v,g,b,x,m=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},_=[],y=0,E=void 0,S=void 0;if(isNaN(t))throw new TypeError("Invalid number");return i=!0===m.bits,h=!0===m.unix,e=m.base||2,d=void 0!==m.round?m.round:h?1:2,l=void 0!==m.locale?m.locale:"",u=m.localeOptions||{},v=void 0!==m.separator?m.separator:"",g=void 0!==m.spacer?m.spacer:h?"":" ",x=m.symbols||{},b=2===e&&m.standard||"jedec",p=m.output||"string",c=!0===m.fullform,s=m.fullforms instanceof Array?m.fullforms:[],E=void 0!==m.exponent?m.exponent:-1,o=2<e?1e3:1024,(f=(S=Number(t))<0)&&(S=-S),(-1===E||isNaN(E))&&(E=Math.floor(Math.log(S)/Math.log(o)))<0&&(E=0),8<E&&(E=8),"exponent"===p?E:(0===S?(_[0]=0,_[1]=h?"":n[b][i?"bits":"bytes"][E]):(y=S/(2===e?Math.pow(2,10*E):Math.pow(1e3,E)),i&&o<=(y*=8)&&E<8&&(y/=o,E++),_[0]=Number(y.toFixed(0<E?d:0)),_[0]===o&&E<8&&void 0===m.exponent&&(_[0]=1,E++),_[1]=10===e&&1===E?i?"kb":"kB":n[b][i?"bits":"bytes"][E],h&&(_[1]="jedec"===b?_[1].charAt(0):0<E?_[1].replace(/B$/,""):_[1],r.test(_[1])&&(_[0]=Math.floor(_[0]),_[1]=""))),f&&(_[0]=-_[0]),_[1]=x[_[1]]||_[1],!0===l?_[0]=_[0].toLocaleString():0<l.length?_[0]=_[0].toLocaleString(l,u):0<v.length&&(_[0]=_[0].toString().replace(".",v)),"array"===p?_:(c&&(_[1]=s[E]?s[E]:a[b][E]+(i?"bit":"byte")+(1===_[0]?"":"s")),"object"===p?{value:_[0],symbol:_[1],exponent:E}:_.join(g)))}i.partial=function(t){return function(e){return i(e,t)}},t.exports=i}("undefined"!=typeof window&&window)}).call(this,r("c8ba"))},d784:function(t,e,r){"use strict";r("ac1f");var n=r("6eeb"),a=r("d039"),i=r("b622"),o=r("9263"),c=r("9112"),s=i("species"),l=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),f=i("replace"),p=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),d=!a((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));t.exports=function(t,e,r,f){var h=i(t),v=!a((function(){var e={};return e[h]=function(){return 7},7!=""[t](e)})),g=v&&!a((function(){var e=!1,r=/a/;return"split"===t&&(r={},r.constructor={},r.constructor[s]=function(){return r},r.flags="",r[h]=/./[h]),r.exec=function(){return e=!0,null},r[h](""),!e}));if(!v||!g||"replace"===t&&(!l||!u||p)||"split"===t&&!d){var b=/./[h],x=r(h,""[t],(function(t,e,r,n,a){return e.exec===o?v&&!a?{done:!0,value:b.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),m=x[0],_=x[1];n(String.prototype,t,m),n(RegExp.prototype,h,2==e?function(t,e){return _.call(t,this,e)}:function(t){return _.call(t,this)})}f&&c(RegExp.prototype[h],"sham",!0)}},d81d:function(t,e,r){"use strict";var n=r("23e7"),a=r("b727").map,i=r("1dde"),o=r("ae40"),c=i("map"),s=o("map");n({target:"Array",proto:!0,forced:!c||!s},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);