(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21eb06"],{d741:function(t,e,c){"use strict";c.r(e);var s=c("7a23"),a={class:"content-header"},n={class:"container-fluid"},l={class:"card"},o={class:"card-header"},b={class:"card-title"},r=Object(s["h"])("div",{style:{}},"Data Pasien",-1),d=Object(s["h"])("div",{class:"card-tools"},[Object(s["h"])("button",{type:"button",class:"btn btn-tool","data-card-widget":"collapse",title:"Collapse"},[Object(s["h"])("i",{class:"fas fa-minus"})])],-1),j={class:"card-body",style:{display:"block"}},i=Object(s["h"])("div",{class:"d-flex justify-content-between align-items-center"},[Object(s["h"])("div",{class:"d-flex align-items-center"},[Object(s["h"])("label",{class:"mt-1"},"Cari:"),Object(s["h"])("input",{type:"text",class:"form-control form-control-sm ml-2"})])],-1),O={class:"table table-bordered table-hover mt-3"},h=Object(s["h"])("thead",null,[Object(s["h"])("tr",null,[Object(s["h"])("th",{scope:"col",class:"text-sm"},"REKAM MEDIS"),Object(s["h"])("th",{scope:"col",class:"text-sm"},"NAMA"),Object(s["h"])("th",{scope:"col",class:"text-sm"},"NO. ID"),Object(s["h"])("th",{scope:"col",class:"text-sm"},"ALAMAT"),Object(s["h"])("th",{scope:"col",class:"text-sm"},"TELEPON"),Object(s["h"])("th",{scope:"col",class:"text-sm"},"GENDER"),Object(s["h"])("th",{scope:"col",class:"text-sm"},"AGAMA"),Object(s["h"])("th",{scope:"col",class:"text-sm"},"PEKERJAAN"),Object(s["h"])("th",{scope:"col",class:"text-sm"},"STATUS"),Object(s["h"])("th",{scope:"col",class:"text-sm"},"ACTION")])],-1),u={class:"text-sm",scope:"row"},m={class:"text-sm"},p={class:"text-sm"},f={class:"text-sm"},x={class:"text-sm"},v={class:"text-sm"},y={class:"text-sm"},g={class:"text-sm"},k={class:"text-sm"},w={class:"text-sm"},A={class:"btn-group"},_=Object(s["h"])("button",{type:"button",class:"btn btn-sm btn-info text-sm"},"Proses",-1),E=Object(s["h"])("button",{type:"button",class:"btn btn-sm btn-info dropdown-toggle dropdown-icon","data-toggle":"dropdown","aria-expanded":"false"},[Object(s["h"])("span",{class:"sr-only"})],-1),D={class:"dropdown-menu",role:"menu",style:{}},M={class:"text-center mt-2"},C=Object(s["h"])("div",{class:"card-footer",style:{display:"block"}},null,-1);function N(t,e,c,N,P,T){var R=Object(s["w"])("ContentHeader"),K=Object(s["w"])("router-link");return Object(s["r"])(),Object(s["d"])("div",null,[Object(s["h"])(R,{title:"Data Pasien"}),Object(s["h"])("div",a,[Object(s["h"])("div",n,[Object(s["h"])("div",l,[Object(s["h"])("div",o,[Object(s["h"])("h3",b,[Object(s["h"])(K,{to:"/data-tindakan"},{default:Object(s["E"])((function(){return[r]})),_:1})]),d]),Object(s["h"])("div",j,[i,Object(s["h"])("table",O,[h,Object(s["h"])("tbody",null,[(Object(s["r"])(!0),Object(s["d"])(s["a"],null,Object(s["v"])(N.pasien,(function(e){return Object(s["r"])(),Object(s["d"])("tr",{key:e.id},[Object(s["h"])("td",u,Object(s["y"])(e.nomor_rekam_medis),1),Object(s["h"])("td",m,Object(s["y"])(e.nama),1),Object(s["h"])("td",p,Object(s["y"])(e.nomor_identitas),1),Object(s["h"])("td",f,Object(s["y"])(e.alamat_lengkap),1),Object(s["h"])("td",x,Object(s["y"])(e.nomor_telepon),1),Object(s["h"])("td",v,Object(s["y"])(e.jenis_kelamin),1),Object(s["h"])("td",y,Object(s["y"])(e.agama),1),Object(s["h"])("td",g,Object(s["y"])(e.pekerjaan),1),Object(s["h"])("td",k,Object(s["y"])(N.format_member(e.status_member)),1),Object(s["h"])("td",w,[Object(s["h"])("div",A,[_,E,Object(s["h"])("div",D,[Object(s["h"])("button",{onClick:function(c){return t.prosesKunjungan(e.id)},class:"dropdown-item text-sm"},"Tambahkan ke kunjungan",8,["onClick"])])])])])})),128))])]),Object(s["h"])("p",M,Object(s["y"])(N.cekData),1)]),C])])])])}var P=c("1da1"),T=(c("96cf"),c("ee90")),R=c("4360"),K=c("bc3a"),I=c.n(K),J={components:{ContentHeader:T["a"]},setup:function(){var t=function(t){return 1==t?"Member":"Belum Member"},e=Object(s["b"])((function(){return R["a"].getters["auth/user"]})),c=Object(s["u"])(),a=Object(s["u"])(),n=function(){var t=Object(P["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,I.a.get("api/pasien/get/"+e.value.cabang_id);case 2:s=t.sent,"kosong"==s.data?(a.value="Data Masih Kosong",c.value=null):(a.value="",c.value=s.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(s["p"])((function(){n()})),{pasien:c,cekData:a,getPasien:n,format_member:t}}};J.render=N;e["default"]=J}}]);
//# sourceMappingURL=chunk-2d21eb06.ed3684fc.js.map