(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-249ffce9"],{1148:function(t,e,n){"use strict";var r=n("a691"),i=n("1d80");t.exports="".repeat||function(t){var e=String(i(this)),n="",c=r(t);if(c<0||c==1/0)throw RangeError("Wrong number of repetitions");for(;c>0;(c>>>=1)&&(e+=e))1&c&&(n+=e);return n}},1276:function(t,e,n){"use strict";var r=n("d784"),i=n("44e7"),c=n("825a"),a=n("1d80"),o=n("4840"),s=n("8aa5"),l=n("50c4"),u=n("14c3"),d=n("9263"),b=n("d039"),h=[].push,f=Math.min,j=4294967295,O=!b((function(){return!RegExp(j,"y")}));r("split",2,(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(a(this)),c=void 0===n?j:n>>>0;if(0===c)return[];if(void 0===t)return[r];if(!i(t))return e.call(r,t,c);var o,s,l,u=[],b=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,O=new RegExp(t.source,b+"g");while(o=d.call(O,r)){if(s=O.lastIndex,s>f&&(u.push(r.slice(f,o.index)),o.length>1&&o.index<r.length&&h.apply(u,o.slice(1)),l=o[0].length,f=s,u.length>=c))break;O.lastIndex===o.index&&O.lastIndex++}return f===r.length?!l&&O.test("")||u.push(""):u.push(r.slice(f)),u.length>c?u.slice(0,c):u}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var i=a(this),c=void 0==e?void 0:e[t];return void 0!==c?c.call(e,i,n):r.call(String(i),e,n)},function(t,i){var a=n(r,t,this,i,r!==e);if(a.done)return a.value;var d=c(t),b=String(this),h=o(d,RegExp),p=d.unicode,v=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(O?"y":"g"),g=new h(O?d:"^(?:"+d.source+")",v),m=void 0===i?j:i>>>0;if(0===m)return[];if(0===b.length)return null===u(g,b)?[b]:[];var w=0,x=0,y=[];while(x<b.length){g.lastIndex=O?x:0;var k,E=u(g,O?b:b.slice(x));if(null===E||(k=f(l(g.lastIndex+(O?0:x)),b.length))===w)x=s(b,x,p);else{if(y.push(b.slice(w,x)),y.length===m)return y;for(var A=1;A<=E.length-1;A++)if(y.push(E[A]),y.length===m)return y;x=w=k}}return y.push(b.slice(w)),y}]}),!O)},"408a":function(t,e,n){var r=n("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=r(t))throw TypeError("Incorrect invocation");return+t}},"44e7":function(t,e,n){var r=n("861d"),i=n("c6b6"),c=n("b622"),a=c("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==i(t))}},6275:function(t,e,n){"use strict";n("5319"),n("ac1f"),n("b680"),n("1276"),n("a15b");function r(t,e,n,r){t=(t+"").replace(/[^0-9+\-Ee.]/g,"");var i=isFinite(+t)?+t:0,c=isFinite(+e)?Math.abs(e):0,a="undefined"===typeof r?",":r,o="undefined"===typeof n?".":n,s="",l=function(t,e){var n=Math.pow(10,e);return""+(Math.round(t*n)/n).toFixed(e)};return s=(c?l(i,c):""+Math.round(i)).split("."),s[0].length>3&&(s[0]=s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,a)),(s[1]||"").length<c&&(s[1]=s[1]||"",s[1]+=new Array(c-s[1].length+1).join("0")),s.join(o)}e["a"]=r},"69b5":function(t,e,n){"use strict";n.r(e);var r=n("7a23"),i={class:"content-header"},c={class:"container-fluid"},a={class:"row justify-content-center"},o={class:"col"},s={class:"card"},l={class:"card-header row d-flex align-items-center"},u=Object(r["h"])("h3",{class:"card-title col-6"},"Table Jasa Pemeriksaan",-1),d={class:"col-6 text-right"},b=Object(r["h"])("button",{class:"btn btn-sm btn-info"},"Tambah",-1),h={class:"card-body"},f={class:"table table-bordered table-hover"},j=Object(r["h"])("thead",null,[Object(r["h"])("tr",null,[Object(r["h"])("th",{scope:"col"},"KODE"),Object(r["h"])("th",{scope:"col"},"NAMA JASA"),Object(r["h"])("th",{scope:"col"},"HARGA"),Object(r["h"])("th",{scope:"col"},"TARIF DOKTER"),Object(r["h"])("th",{scope:"col"},"ACTION")])],-1),O={scope:"row"},p={class:"btn-group"},v=Object(r["h"])("button",{type:"button",class:"btn btn-sm btn-info"},"Proses",-1),g=Object(r["h"])("button",{type:"button",class:"btn btn-sm btn-info dropdown-toggle dropdown-icon","data-toggle":"dropdown","aria-expanded":"false"},[Object(r["h"])("span",{class:"sr-only"})],-1),m={class:"dropdown-menu",role:"menu",style:{}},w=Object(r["g"])("Edit"),x=Object(r["h"])("div",{class:"dropdown-divider"},null,-1),y={class:"text-center mt-2"};function k(t,e,n,k,E,A){var R=Object(r["w"])("ContentHeader"),T=Object(r["w"])("router-link");return Object(r["r"])(),Object(r["d"])("div",null,[Object(r["h"])(R,{title:"Administrasi",url:"/administrasi",subTitle:"Data Jasa Pemeriksaan"}),Object(r["h"])("div",i,[Object(r["h"])("div",c,[Object(r["h"])("div",a,[Object(r["h"])("div",o,[Object(r["h"])("div",s,[Object(r["h"])("div",l,[u,Object(r["h"])("div",d,[Object(r["h"])(T,{to:"/tambah-data-jasa"},{default:Object(r["E"])((function(){return[b]})),_:1})])]),Object(r["h"])("div",h,[Object(r["h"])("table",f,[j,Object(r["h"])("tbody",null,[(Object(r["r"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(k.administrasi,(function(t){return Object(r["r"])(),Object(r["d"])("tr",{key:t.id},[Object(r["h"])("td",O,Object(r["y"])(t.kode_administrasi),1),Object(r["h"])("td",null,Object(r["y"])(t.nama),1),Object(r["h"])("td",null,"Rp. "+Object(r["y"])(k.number_format(t.harga,0,",",".")),1),Object(r["h"])("td",null,"Rp. "+Object(r["y"])(k.number_format(t.fee_dokter,0,",",".")),1),Object(r["h"])("td",null,[Object(r["h"])("div",p,[v,g,Object(r["h"])("div",m,[Object(r["h"])(T,{to:"/edit-data-jasa/".concat(t.id),class:"dropdown-item"},{default:Object(r["E"])((function(){return[w]})),_:2},1032,["to"]),x,Object(r["h"])("button",{onClick:function(e){return k.hapusDataAdministrasi(t.id)},class:"dropdown-item text-danger"},"Hapus",8,["onClick"])])])])])})),128))])]),Object(r["h"])("p",y,Object(r["y"])(k.cekData),1)])])])])])])])}var E=n("1da1"),A=(n("96cf"),n("824e")),R=n("bc3a"),T=n.n(R),F=n("4360"),I=n("3d20"),_=n.n(I),D=n("6275"),M={components:{ContentHeader:A["a"]},setup:function(){var t=Object(r["u"])([]),e=Object(r["u"])(),n=Object(r["b"])((function(){return F["a"].getters["auth/user"]})),i=function(){var r=Object(E["a"])(regeneratorRuntime.mark((function r(){var i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,T.a.get("api/administrasi/getWhereJasa/"+n.value.cabang_id);case 2:i=r.sent,"kosong"==i.data?(e.value="Data Masih Kosong",t.value=null):(e.value="",t.value=i.data);case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),c=function(t){T.a.delete("api/administrasi/destroy/".concat(t)).then((function(t){_.a.fire({title:"Berhasil!",text:"Berhasil menghapus data",icon:"success",confirmButtonText:"Ok"}),console.log(t.data)})).catch((function(t){console.log(t)})),i()};return setInterval((function(){i()}),24e4),Object(r["p"])((function(){i()})),{administrasi:t,getAdministrasi:i,hapusDataAdministrasi:c,number_format:D["a"],cekData:e}}};M.render=k;e["default"]=M},"824e":function(t,e,n){"use strict";var r=n("7a23"),i={class:"content-header"},c={class:"container-fluid"},a={class:"row mb-2"},o={class:"col-sm-6"},s={class:"m-0"},l={class:"col-sm-6"},u={class:"breadcrumb float-sm-right"},d={class:"breadcrumb-item"},b=Object(r["g"])("Home"),h={class:"breadcrumb-item"},f={class:"breadcrumb-item active"};function j(t,e,n,j,O,p){var v=Object(r["w"])("router-link");return Object(r["r"])(),Object(r["d"])("div",i,[Object(r["h"])("div",c,[Object(r["h"])("div",a,[Object(r["h"])("div",o,[Object(r["h"])("h1",s,Object(r["y"])(n.subTitle),1)]),Object(r["h"])("div",l,[Object(r["h"])("ol",u,[Object(r["h"])("li",d,[Object(r["h"])(v,{to:"/"},{default:Object(r["E"])((function(){return[b]})),_:1})]),Object(r["h"])("li",h,[Object(r["h"])(v,{to:n.url},{default:Object(r["E"])((function(){return[Object(r["g"])(Object(r["y"])(n.title),1)]})),_:1},8,["to"])]),Object(r["h"])("li",f,Object(r["y"])(n.subTitle),1)])])])])])}var O={props:["title","url","subTitle"]};O.render=j;e["a"]=O},a15b:function(t,e,n){"use strict";var r=n("23e7"),i=n("44ad"),c=n("fc6a"),a=n("a640"),o=[].join,s=i!=Object,l=a("join",",");r({target:"Array",proto:!0,forced:s||!l},{join:function(t){return o.call(c(this),void 0===t?",":t)}})},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},b680:function(t,e,n){"use strict";var r=n("23e7"),i=n("a691"),c=n("408a"),a=n("1148"),o=n("d039"),s=1..toFixed,l=Math.floor,u=function(t,e,n){return 0===e?n:e%2===1?u(t,e-1,n*t):u(t*t,e/2,n)},d=function(t){var e=0,n=t;while(n>=4096)e+=12,n/=4096;while(n>=2)e+=1,n/=2;return e},b=function(t,e,n){var r=-1,i=n;while(++r<6)i+=e*t[r],t[r]=i%1e7,i=l(i/1e7)},h=function(t,e){var n=6,r=0;while(--n>=0)r+=t[n],t[n]=l(r/e),r=r%e*1e7},f=function(t){var e=6,n="";while(--e>=0)if(""!==n||0===e||0!==t[e]){var r=String(t[e]);n=""===n?r:n+a.call("0",7-r.length)+r}return n},j=s&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!o((function(){s.call({})}));r({target:"Number",proto:!0,forced:j},{toFixed:function(t){var e,n,r,o,s=c(this),l=i(t),j=[0,0,0,0,0,0],O="",p="0";if(l<0||l>20)throw RangeError("Incorrect fraction digits");if(s!=s)return"NaN";if(s<=-1e21||s>=1e21)return String(s);if(s<0&&(O="-",s=-s),s>1e-21)if(e=d(s*u(2,69,1))-69,n=e<0?s*u(2,-e,1):s/u(2,e,1),n*=4503599627370496,e=52-e,e>0){b(j,0,n),r=l;while(r>=7)b(j,1e7,0),r-=7;b(j,u(10,r,1),0),r=e-1;while(r>=23)h(j,1<<23),r-=23;h(j,1<<r),b(j,1,1),h(j,2),p=f(j)}else b(j,0,n),b(j,1<<-e,0),p=f(j)+a.call("0",l);return l>0?(o=p.length,p=O+(o<=l?"0."+a.call("0",l-o)+p:p.slice(0,o-l)+"."+p.slice(o-l))):p=O+p,p}})}}]);
//# sourceMappingURL=chunk-249ffce9.e0ed81b7.js.map