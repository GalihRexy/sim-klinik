(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22e0f8"],{f9c2:function(a,e,t){"use strict";t.r(e);var n=t("7a23"),c={class:"content-header"},l={class:"container-fluid"},r={class:"card"},o=Object(n["h"])("div",{class:"card-header"},[Object(n["h"])("h3",{class:"card-title"},[Object(n["h"])("div",{style:{}},"Setting Data Klinik")]),Object(n["h"])("div",{class:"card-tools"})],-1),b={class:"card-body",style:{display:"block"}},s={class:"px-lg-2 "},u={class:"form-group"},i=Object(n["h"])("label",{for:"nama"},"Nama Cabang",-1),d={class:"px-lg-2 "},p={class:"form-group"},g=Object(n["h"])("label",{for:"alamat"},"Alamat",-1),j={class:"px-lg-2 "},O={class:"form-group"},h=Object(n["h"])("label",{for:"telepon"},"Telepon",-1),m={class:"px-lg-2 "},f={class:"form-group"},v=Object(n["h"])("label",{for:"penanggung_jawab"},"Penanggung Jawab",-1),w=Object(n["h"])("div",{class:"px-lg-2"},[Object(n["h"])("button",{type:"submit",class:"btn btn-primary"},"Selesai")],-1),y=Object(n["h"])("div",{class:"card-footer",style:{display:"block"}},null,-1);function x(a,e,t,x,k,_){var B=Object(n["w"])("ContentHeader");return Object(n["r"])(),Object(n["d"])("div",null,[Object(n["h"])(B,{title:"Setting Klinik"}),Object(n["h"])("div",c,[Object(n["h"])("div",l,[Object(n["h"])("div",r,[o,Object(n["h"])("div",b,[Object(n["h"])("form",null,[Object(n["h"])("div",s,[Object(n["h"])("div",u,[i,Object(n["F"])(Object(n["h"])("input",{type:"text",class:"form-control",id:"nama",name:"nama","onUpdate:modelValue":e[1]||(e[1]=function(a){return x.cabang.nama=a})},null,512),[[n["B"],x.cabang.nama]])])]),Object(n["h"])("div",d,[Object(n["h"])("div",p,[g,Object(n["F"])(Object(n["h"])("input",{type:"text",class:"form-control",id:"alamat",name:"alamat","onUpdate:modelValue":e[2]||(e[2]=function(a){return x.cabang.alamat=a})},null,512),[[n["B"],x.cabang.alamat]])])]),Object(n["h"])("div",j,[Object(n["h"])("div",O,[h,Object(n["F"])(Object(n["h"])("input",{type:"text",class:"form-control",id:"telepon",name:"telepon","onUpdate:modelValue":e[3]||(e[3]=function(a){return x.cabang.telepon=a})},null,512),[[n["B"],x.cabang.telepon]])])]),Object(n["h"])("div",m,[Object(n["h"])("div",f,[v,Object(n["F"])(Object(n["h"])("input",{type:"text",class:"form-control",id:"penanggung_jawab",name:"penanggung_jawab","onUpdate:modelValue":e[4]||(e[4]=function(a){return x.cabang.penanggung_jawab=a})},null,512),[[n["B"],x.cabang.penanggung_jawab]])])]),w])]),y])])])])}var k=t("1da1"),_=(t("96cf"),t("ee90")),B=t("4360"),C=t("bc3a"),F=t.n(C),U={components:{ContentHeader:_["a"]},setup:function(){var a=Object(n["b"])((function(){return B["a"].getters["auth/user"]})),e=Object(n["u"])([]),t=function(){var t=Object(k["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,F.a.get("api/cabang/getWhereId/".concat(a.value.cabang_id));case 2:n=t.sent,e.value=n.data,console.log(e.value.nama);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(n["p"])((function(){t()})),{cabang:e,getCabang:t}}};U.render=x;e["default"]=U}}]);
//# sourceMappingURL=chunk-2d22e0f8.b012a183.js.map