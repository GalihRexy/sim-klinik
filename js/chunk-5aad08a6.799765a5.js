(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5aad08a6"],{"009c":function(t,e,a){"use strict";var c=a("7a23"),r={class:"content-header"},i={class:"container-fluid"},n={class:"row mb-2"},s={class:"col-sm-6"},o={class:"m-0"},d={class:"col-sm-6"},l={class:"breadcrumb float-sm-right"},u={class:"breadcrumb-item"},b=Object(c["g"])("Home"),m={class:"breadcrumb-item"},j={class:"breadcrumb-item"},O={class:"breadcrumb-item active"};function p(t,e,a,p,h,f){var v=Object(c["w"])("router-link");return Object(c["r"])(),Object(c["d"])("div",r,[Object(c["h"])("div",i,[Object(c["h"])("div",n,[Object(c["h"])("div",s,[Object(c["h"])("h1",o,Object(c["y"])(a.subTitle),1)]),Object(c["h"])("div",d,[Object(c["h"])("ol",l,[Object(c["h"])("li",u,[Object(c["h"])(v,{to:"/"},{default:Object(c["E"])((function(){return[b]})),_:1})]),Object(c["h"])("li",m,[Object(c["h"])(v,{to:a.url},{default:Object(c["E"])((function(){return[Object(c["g"])(Object(c["y"])(a.title),1)]})),_:1},8,["to"])]),Object(c["h"])("li",j,[Object(c["h"])(v,{to:a.url2},{default:Object(c["E"])((function(){return[Object(c["g"])(Object(c["y"])(a.title2),1)]})),_:1},8,["to"])]),Object(c["h"])("li",O,Object(c["y"])(a.subTitle),1)])])])])])}var h={props:["title","url","title2","url2","subTitle"]};h.render=p;e["a"]=h},"5d80":function(t,e,a){"use strict";a.r(e);var c=a("7a23"),r={class:"content-header"},i={class:"container-fluid"},n={class:"row justify-content-center"},s={class:"col"},o={class:"card"},d=Object(c["h"])("div",{class:"card-header row"},[Object(c["h"])("h3",{class:"card-title"},"Input Data Administrasi")],-1),l={class:"card-body"},u={class:"px-lg-2 "},b={class:"form-group"},m=Object(c["h"])("label",{for:"kode"},[Object(c["g"])("Kode Administrasi "),Object(c["h"])("span",{class:"text-danger"},"*")],-1),j={class:"form-group"},O=Object(c["h"])("label",{for:"nama"},[Object(c["g"])("Nama "),Object(c["h"])("span",{class:"text-danger"},"*")],-1),p={class:"form-group"},h=Object(c["h"])("label",{for:"fee_dokter"},[Object(c["g"])("Tarif "),Object(c["h"])("span",{class:"text-danger"},"*")],-1),f={class:"input-group mb-3"},v=Object(c["h"])("div",{class:"input-group-prepend"},[Object(c["h"])("div",{type:"button",class:"btn btn-secondary"},"Rp.")],-1),g={class:"form-group"},k=Object(c["h"])("label",{for:"fee_dokter"},[Object(c["g"])("Fee Dokter "),Object(c["h"])("span",{class:"text-danger"},"*")],-1),y={class:"input-group mb-3"},w=Object(c["h"])("div",{class:"input-group-prepend"},[Object(c["h"])("div",{type:"button",class:"btn btn-secondary"},"Rp.")],-1),x=Object(c["h"])("button",{type:"submit",class:"btn btn-primary mt-3"},"Submit",-1);function _(t,e,a,_,D,B){var A=Object(c["w"])("ContentHeader3");return Object(c["r"])(),Object(c["d"])("div",null,[Object(c["h"])(A,{title:"Administrasi",url:"/administrasi",title2:"Data Jasa",url2:"/data-jasa-pemeriksaan",subTitle:"Edit Data Jasa"}),Object(c["h"])("div",r,[Object(c["h"])("div",i,[Object(c["h"])("div",n,[Object(c["h"])("div",s,[Object(c["h"])("div",o,[d,Object(c["h"])("div",l,[Object(c["h"])("form",{onSubmit:e[5]||(e[5]=Object(c["G"])((function(){return _.updateDataAdministrasi&&_.updateDataAdministrasi.apply(_,arguments)}),["prevent"]))},[Object(c["h"])("div",u,[Object(c["h"])("div",b,[m,Object(c["F"])(Object(c["h"])("input",{type:"text",class:"form-control",id:"kode_administrasi",name:"kode_administrasi",disabled:"","onUpdate:modelValue":e[1]||(e[1]=function(t){return _.administrasi.kode_administrasi=t})},null,512),[[c["B"],_.administrasi.kode_administrasi]])]),Object(c["h"])("div",j,[O,Object(c["F"])(Object(c["h"])("input",{type:"text",class:"form-control",id:"nama",name:"nama",autocomplete:"off",placeholder:"Nama Administrasi","onUpdate:modelValue":e[2]||(e[2]=function(t){return _.administrasi.nama=t}),required:""},null,512),[[c["B"],_.administrasi.nama]])]),Object(c["h"])("div",p,[h,Object(c["h"])("div",f,[v,Object(c["F"])(Object(c["h"])("input",{type:"number",class:"form-control",id:"harga",name:"harga",placeholder:"Fee Dokter","onUpdate:modelValue":e[3]||(e[3]=function(t){return _.administrasi.harga=t}),required:""},null,512),[[c["B"],_.administrasi.harga]])])]),Object(c["h"])("div",g,[k,Object(c["h"])("div",y,[w,Object(c["F"])(Object(c["h"])("input",{type:"number",class:"form-control",id:"fee_dokter",name:"fee_dokter",placeholder:"Fee Dokter","onUpdate:modelValue":e[4]||(e[4]=function(t){return _.administrasi.fee_dokter=t}),required:""},null,512),[[c["B"],_.administrasi.fee_dokter]])])]),x])],32)])])])])])])])}var D=a("1da1"),B=(a("96cf"),a("009c")),A=a("6c02"),F=a("bc3a"),T=a.n(F),E=a("a18c"),J=a("3d20"),R=a.n(J),U={components:{ContentHeader3:B["a"]},setup:function(){var t=Object(A["c"])(),e=t.params.id,a=Object(c["u"])([]),r=function(){var t=Object(D["a"])(regeneratorRuntime.mark((function t(){var c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,T.a.get("api/administrasi/getWhereId/".concat(e));case 2:c=t.sent,a.value=c.data,console.log(a.value);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){T.a.put("api/administrasi/update/".concat(e),a.value).then((function(t){R.a.fire({title:"Berhasil!",text:"Berhasil mengedit data",icon:"success",confirmButtonText:"Ok"}),console.log(t.data)})).catch((function(t){R.a.fire({title:"Gagal!",text:"Gagal mengedit data",icon:"error",confirmButtonText:"Ok"}),console.log(t)})),E["a"].push("/data-jasa-pemeriksaan")};return Object(c["p"])((function(){r()})),{administrasi:a,updateDataAdministrasi:i}}};U.render=_;e["default"]=U}}]);
//# sourceMappingURL=chunk-5aad08a6.799765a5.js.map