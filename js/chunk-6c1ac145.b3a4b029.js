(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c1ac145"],{"1dde":function(e,t,a){var c=a("d039"),n=a("b622"),r=a("2d00"),s=n("species");e.exports=function(e){return r>=51||!c((function(){var t=[],a=t.constructor={};return a[s]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"65f0":function(e,t,a){var c=a("861d"),n=a("e8b5"),r=a("b622"),s=r("species");e.exports=function(e,t){var a;return n(e)&&(a=e.constructor,"function"!=typeof a||a!==Array&&!n(a.prototype)?c(a)&&(a=a[s],null===a&&(a=void 0)):a=void 0),new(void 0===a?Array:a)(0===t?0:t)}},"824e":function(e,t,a){"use strict";var c=a("7a23"),n={class:"content-header"},r={class:"container-fluid"},s={class:"row mb-2"},o={class:"col-sm-6"},l={class:"m-0"},i={class:"col-sm-6"},u={class:"breadcrumb float-sm-right"},b={class:"breadcrumb-item"},d=Object(c["g"])("Home"),O={class:"breadcrumb-item"},h={class:"breadcrumb-item active"};function j(e,t,a,j,p,m){var f=Object(c["w"])("router-link");return Object(c["r"])(),Object(c["d"])("div",n,[Object(c["h"])("div",r,[Object(c["h"])("div",s,[Object(c["h"])("div",o,[Object(c["h"])("h1",l,Object(c["y"])(a.subTitle),1)]),Object(c["h"])("div",i,[Object(c["h"])("ol",u,[Object(c["h"])("li",b,[Object(c["h"])(f,{to:"/"},{default:Object(c["E"])((function(){return[d]})),_:1})]),Object(c["h"])("li",O,[Object(c["h"])(f,{to:a.url},{default:Object(c["E"])((function(){return[Object(c["g"])(Object(c["y"])(a.title),1)]})),_:1},8,["to"])]),Object(c["h"])("li",h,Object(c["y"])(a.subTitle),1)])])])])])}var p={props:["title","url","subTitle"]};p.render=j;t["a"]=p},8418:function(e,t,a){"use strict";var c=a("c04e"),n=a("9bf2"),r=a("5c6c");e.exports=function(e,t,a){var s=c(t);s in e?n.f(e,s,r(0,a)):e[s]=a}},a434:function(e,t,a){"use strict";var c=a("23e7"),n=a("23cb"),r=a("a691"),s=a("50c4"),o=a("7b0b"),l=a("65f0"),i=a("8418"),u=a("1dde"),b=u("splice"),d=Math.max,O=Math.min,h=9007199254740991,j="Maximum allowed length exceeded";c({target:"Array",proto:!0,forced:!b},{splice:function(e,t){var a,c,u,b,p,m,f=o(this),v=s(f.length),g=n(e,v),k=arguments.length;if(0===k?a=c=0:1===k?(a=0,c=v-g):(a=k-2,c=O(d(r(t),0),v-g)),v+a-c>h)throw TypeError(j);for(u=l(f,c),b=0;b<c;b++)p=g+b,p in f&&i(u,b,f[p]);if(u.length=c,a<c){for(b=g;b<v-c;b++)p=b+c,m=b+a,p in f?f[m]=f[p]:delete f[m];for(b=v;b>v-c+a;b--)delete f[b-1]}else if(a>c)for(b=v-c;b>g;b--)p=b+c-1,m=b+a-1,p in f?f[m]=f[p]:delete f[m];for(b=0;b<a;b++)f[b+g]=arguments[b+2];return f.length=v-c+a,u}})},e8b5:function(e,t,a){var c=a("c6b6");e.exports=Array.isArray||function(e){return"Array"==c(e)}},ede4:function(e,t,a){"use strict";a.r(t);var c=a("7a23"),n={class:"content-header"},r={class:"container-fluid"},s={class:"row justify-content-center"},o={class:"col"},l={class:"card"},i=Object(c["h"])("div",{class:"card-header row"},[Object(c["h"])("h3",{class:"card-title"},"Konfirmasi Obat Pasien")],-1),u={class:"card-body"},b={class:"px-lg-2 "},d={class:"form-group"},O=Object(c["h"])("label",{for:"nomor_rekam_medis"},"No Rekam Medis",-1),h={class:"form-group"},j=Object(c["h"])("label",{for:"diagnosa"},"Diagnosa ",-1),p={class:"row"},m={class:"col"},f={class:"table table-bordered table-hover"},v=Object(c["h"])("thead",null,[Object(c["h"])("tr",null,[Object(c["h"])("th",{scope:"col",class:"text-sm"},"NO"),Object(c["h"])("th",{scope:"col",class:"text-sm"},"KODE"),Object(c["h"])("th",{scope:"col",class:"text-sm"},"NAMA DIAGNOSA")])],-1),g=Object(c["h"])("div",{class:"col"},null,-1),k={class:"form-group"},x={class:"row"},_={class:"col-12 col-md-4"},y=Object(c["h"])("label",{for:"resep_obat"},"Tambah Resep Obat",-1),w=Object(c["h"])("div",{class:"col col-md-1"},null,-1),A={class:"col-12 col-md-7"},R=Object(c["h"])("label",{class:"mt-1"},null,-1),M={class:"table table-bordered table-hover"},T=Object(c["h"])("thead",null,[Object(c["h"])("tr",null,[Object(c["h"])("th",{scope:"col",class:"text-sm"},"NO"),Object(c["h"])("th",{scope:"col",class:"text-sm"},"KODE"),Object(c["h"])("th",{scope:"col",class:"text-sm"},"NAMA RESEP"),Object(c["h"])("th",{scope:"col",class:"text-sm"},"STOK"),Object(c["h"])("th",{scope:"col",class:"text-sm"},"ATURAN PAKAI"),Object(c["h"])("th",{scope:"col",class:"text-sm"},"ACTION")])],-1),D={type:"submit",class:"btn btn-primary d-flex align-items-center"},K=Object(c["h"])("div",null," Submit ",-1),N={key:0,xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",style:{background:"none",display:"block","shape-rendering":"auto"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},B=Object(c["h"])("g",null,[Object(c["h"])("path",{d:"M50 15A35 35 0 1 0 74.74873734152916 25.251262658470843",fill:"none",stroke:"#ffffff","stroke-width":"12"}),Object(c["h"])("path",{d:"M49 3L49 27L61 15L49 3",fill:"#ffffff"}),Object(c["h"])("animateTransform",{attributeName:"transform",type:"rotate",repeatCount:"indefinite",dur:"1s",values:"0 50 50;360 50 50",keyTimes:"0;1"})],-1);function C(e,t,a,C,E,I){var S=Object(c["w"])("ContentHeader");return Object(c["r"])(),Object(c["d"])("div",null,[Object(c["h"])(S,{title:"Farmasi",url:"/farmasi",subTitle:"Konfirmasi Obat"}),Object(c["h"])("div",n,[Object(c["h"])("div",r,[Object(c["h"])("div",s,[Object(c["h"])("div",o,[Object(c["h"])("div",l,[i,Object(c["h"])("div",u,[Object(c["h"])("form",{onSubmit:t[4]||(t[4]=Object(c["G"])((function(){return C.prosesKonfirmasi&&C.prosesKonfirmasi.apply(C,arguments)}),["prevent"]))},[Object(c["h"])("div",b,[Object(c["h"])("div",d,[O,Object(c["F"])(Object(c["h"])("input",{type:"text",class:"form-control",id:"nomor_rekam_medis",name:"nomor_rekam_medis",disabled:"","onUpdate:modelValue":t[1]||(t[1]=function(e){return C.rekam_medis.nomor_rekam_medis=e})},null,512),[[c["B"],C.rekam_medis.nomor_rekam_medis]])]),Object(c["h"])("div",h,[j,Object(c["h"])("div",p,[Object(c["h"])("div",m,[Object(c["h"])("table",f,[v,Object(c["h"])("tbody",null,[(Object(c["r"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(C.rekam_medis_result,(function(e,t){return Object(c["r"])(),Object(c["d"])("tr",{key:e.id},[Object(c["h"])("td",null,Object(c["y"])(t+1),1),Object(c["h"])("td",null,Object(c["y"])(e.kode_icdx),1),Object(c["h"])("td",null,Object(c["y"])(e.nama_icdx),1)])})),128))])])]),g])]),Object(c["h"])("div",k,[Object(c["h"])("div",x,[Object(c["h"])("div",_,[y,Object(c["F"])(Object(c["h"])("select",{class:"custom-select form-control",id:"resep_obat",name:"resep_obat","onUpdate:modelValue":t[2]||(t[2]=function(e){return C.resepObatModel=e}),onChange:t[3]||(t[3]=function(e){return C.tambahResep(C.resepObatModel)})},[(Object(c["r"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(C.resepData,(function(e,t){return Object(c["r"])(),Object(c["d"])("option",{key:e.id,value:t},Object(c["y"])(e.kode)+" - "+Object(c["y"])(e.nama),9,["value"])})),128))],544),[[c["A"],C.resepObatModel]])]),w,Object(c["h"])("div",A,[R,Object(c["h"])("table",M,[T,Object(c["h"])("tbody",null,[(Object(c["r"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(C.resep,(function(e,t){return Object(c["r"])(),Object(c["d"])("tr",{key:e.id},[Object(c["h"])("td",null,Object(c["y"])(t+1),1),Object(c["h"])("td",null,Object(c["y"])(e.kode),1),Object(c["h"])("td",null,Object(c["y"])(e.nama),1),Object(c["h"])("td",null,Object(c["y"])(e.stok),1),Object(c["h"])("td",null,Object(c["y"])(e.signa),1),Object(c["h"])("td",null,[e.hapus?(Object(c["r"])(),Object(c["d"])("a",{key:0,class:"btn btn-block btn-outline-danger btn-xs",onClick:function(t){return C.hapusDataResep(e.id)}},"Hapus",8,["onClick"])):Object(c["e"])("",!0)])])})),128))])])])])]),Object(c["h"])("button",D,[K,Object(c["h"])("div",null,[C.loading?(Object(c["r"])(),Object(c["d"])("svg",N,[B])):Object(c["e"])("",!0)])])])],32)])])])])])])])}var E=a("1da1"),I=(a("a434"),a("96cf"),a("824e")),S=a("6c02"),G=a("bc3a"),H=a.n(G),F=a("3d20"),L=a.n(F),P=a("a18c"),U=a("4360"),W={components:{ContentHeader:I["a"]},setup:function(){var e=Object(c["b"])((function(){return U["a"].getters["auth/user"]})),t=Object(c["u"])(!1),a=Object(S["c"])(),n=a.params.id,r=Object(c["u"])([]),s=Object(c["u"])({kunjungan_id:n,resep_id:"",nama_resep:""}),o=Object(c["u"])([]),l=Object(c["u"])([]),i=Object(c["u"])([]),u=Object(c["u"])([]),b=function(){var e=Object(E["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,H.a.get("api/rekam_medis/getWhereId/".concat(n));case 2:for(t=e.sent,r.value=t.data,a=0;a<t.data.kode_icdx.length;a++)o.value.push({kode_icdx:t.data.kode_icdx[a],nama_icdx:t.data.nama_icdx[a]}),null!=t.data.resep_id[a]&&(l.value.push(t.data.resep_id[a]),i.value.push(t.data.nama_resep[a]));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var t=Object(E["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,H.a.get("api/resep_obat/get/".concat(e.value.cabang_id));case 2:a=t.sent,u.value=a.data;case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),O=Object(c["u"])([]),h=Object(c["u"])(),j=function(){var e=Object(E["a"])(regeneratorRuntime.mark((function e(){var t,a,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,H.a.get("api/rekam_medis/getWhereId/".concat(n));case 2:t=e.sent,console.log(t.data),a=0;case 5:if(!(a<l.value.length)){e.next=13;break}return e.next=8,H.a.get("api/resep_obat/getWhereId/".concat(l.value[a]));case 8:c=e.sent,O.value.push({id:a,resep_id:c.data.id,kode:c.data.kode,nama:c.data.nama,stok:c.data.stok,signa:c.data.signa,hapus:!0});case 10:a++,e.next=5;break;case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(e){var t=u.value[e];O.value.push({id:e,resep_id:t.id,kode:t.kode,nama:t.nama,stok:t.stok,signa:t.signa,hapus:!0}),l.value.push(t.id),i.value.push(t.nama)},m=function(e){for(var t=0;t<O.value.length;t++)O.value[t].id==e&&(O.value.splice(t,1),l.value.splice(t,1),i.value.splice(t,1));0==O.value.length&&(h.value="")},f=function(){t.value=!0,s.kunjungan_id=n,s.resep_id=l.value,s.nama_resep=i.value,H.a.put("api/rekam_medis/konfirmasi/".concat(r.value.id),s).then((function(e){L.a.fire({title:"Berhasil!",text:"Obat Berhasil Dikonfirmasi",icon:"success",confirmButtonText:"Ok"}),t.value=!1,console.log(e.data),stop(),P["a"].push("/farmasi")})).catch((function(e){L.a.fire({title:"Gagal!",text:"Gagal mengonfirmasi obat",icon:"error",confirmButtonText:"Ok"}),t.value=!1,console.log(e)}))};return Object(c["p"])((function(){b(),j(),d()})),{rekam_medis:r,getRekamMedis:b,prosesKonfirmasi:f,getResep:j,resep:O,rekam_medis_result:o,getResepData:d,resepData:u,tambahResep:p,hapusDataResep:m,resepObatModel:h,loading:t}}};W.render=C;t["default"]=W}}]);
//# sourceMappingURL=chunk-6c1ac145.b3a4b029.js.map