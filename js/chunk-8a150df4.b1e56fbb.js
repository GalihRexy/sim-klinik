(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8a150df4"],{"121b":function(e,t,a){"use strict";function n(e){var t=e>9?e>99?e:"0"+e:"00"+e;return t}t["a"]=n},"1dde":function(e,t,a){var n=a("d039"),c=a("b622"),o=a("2d00"),r=c("species");e.exports=function(e){return o>=51||!n((function(){var t=[],a=t.constructor={};return a[r]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"65f0":function(e,t,a){var n=a("861d"),c=a("e8b5"),o=a("b622"),r=o("species");e.exports=function(e,t){var a;return c(e)&&(a=e.constructor,"function"!=typeof a||a!==Array&&!c(a.prototype)?n(a)&&(a=a[r],null===a&&(a=void 0)):a=void 0),new(void 0===a?Array:a)(0===t?0:t)}},"824e":function(e,t,a){"use strict";var n=a("7a23"),c={class:"content-header"},o={class:"container-fluid"},r={class:"row mb-2"},l={class:"col-sm-6"},i={class:"m-0"},s={class:"col-sm-6"},u={class:"breadcrumb float-sm-right"},b={class:"breadcrumb-item"},p=Object(n["g"])("Home"),d={class:"breadcrumb-item"},h={class:"breadcrumb-item active"};function j(e,t,a,j,O,f){var m=Object(n["w"])("router-link");return Object(n["r"])(),Object(n["d"])("div",c,[Object(n["h"])("div",o,[Object(n["h"])("div",r,[Object(n["h"])("div",l,[Object(n["h"])("h1",i,Object(n["y"])(a.subTitle),1)]),Object(n["h"])("div",s,[Object(n["h"])("ol",u,[Object(n["h"])("li",b,[Object(n["h"])(m,{to:"/"},{default:Object(n["E"])((function(){return[p]})),_:1})]),Object(n["h"])("li",d,[Object(n["h"])(m,{to:a.url},{default:Object(n["E"])((function(){return[Object(n["g"])(Object(n["y"])(a.title),1)]})),_:1},8,["to"])]),Object(n["h"])("li",h,Object(n["y"])(a.subTitle),1)])])])])])}var O={props:["title","url","subTitle"]};O.render=j;t["a"]=O},8418:function(e,t,a){"use strict";var n=a("c04e"),c=a("9bf2"),o=a("5c6c");e.exports=function(e,t,a){var r=n(t);r in e?c.f(e,r,o(0,a)):e[r]=a}},"99af":function(e,t,a){"use strict";var n=a("23e7"),c=a("d039"),o=a("e8b5"),r=a("861d"),l=a("7b0b"),i=a("50c4"),s=a("8418"),u=a("65f0"),b=a("1dde"),p=a("b622"),d=a("2d00"),h=p("isConcatSpreadable"),j=9007199254740991,O="Maximum allowed index exceeded",f=d>=51||!c((function(){var e=[];return e[h]=!1,e.concat()[0]!==e})),m=b("concat"),g=function(e){if(!r(e))return!1;var t=e[h];return void 0!==t?!!t:o(e)},v=!f||!m;n({target:"Array",proto:!0,forced:v},{concat:function(e){var t,a,n,c,o,r=l(this),b=u(r,0),p=0;for(t=-1,n=arguments.length;t<n;t++)if(o=-1===t?r:arguments[t],g(o)){if(c=i(o.length),p+c>j)throw TypeError(O);for(a=0;a<c;a++,p++)a in o&&s(b,p,o[a])}else{if(p>=j)throw TypeError(O);s(b,p++,o)}return b.length=p,b}})},a94c:function(e,t,a){"use strict";a.r(t);var n=a("7a23"),c={class:"content-header"},o={class:"container-fluid"},r={class:"row justify-content-center"},l={class:"col"},i={class:"card"},s=Object(n["h"])("div",{class:"card-header row d-flex align-items-center"},[Object(n["h"])("h3",{class:"card-title col-6"},"Tambah Data Percetakan")],-1),u={class:"card-body"},b={class:"px-lg-2 "},p={class:"form-group"},d=Object(n["h"])("label",{for:"kode"},"Kode Percetakan ",-1),h={class:"form-group"},j=Object(n["h"])("label",{for:"nama"},[Object(n["g"])("Nama "),Object(n["h"])("span",{class:"text-danger"},"*")],-1),O={class:"form-group"},f=Object(n["h"])("label",{for:"kategori"},[Object(n["g"])("Kategori "),Object(n["h"])("span",{class:"text-danger"},"*")],-1),m=Object(n["h"])("option",{selected:"",hidden:""},null,-1),g=Object(n["h"])("option",{value:"MD"},"Medrek",-1),v=Object(n["h"])("option",{value:"SP"},"Surat Pesanan",-1),k=Object(n["h"])("option",{value:"BK"},"Buku Kas",-1),y={class:"form-group"},_=Object(n["h"])("label",{for:"jenis"},[Object(n["g"])("Jenis "),Object(n["h"])("span",{class:"text-danger"},"*")],-1),x=Object(n["h"])("option",{selected:"",hidden:""},null,-1),w=Object(n["h"])("option",{value:"P"},"Percetakan",-1),B={class:"form-group"},F=Object(n["h"])("label",{for:"fungsi"},"Fungsi ",-1),U={class:"form-group"},A=Object(n["h"])("label",{for:"golongan"},[Object(n["g"])("Golongan "),Object(n["h"])("span",{class:"text-danger"},"*")],-1),V=Object(n["h"])("option",{selected:"",hidden:""},null,-1),q=Object(n["h"])("option",{value:"bahan jadi"},"Bahan Jadi",-1),K=Object(n["h"])("option",{value:"bahan baku"},"Bahan Baku",-1),T={class:"form-group"},S=Object(n["h"])("label",{for:"nama"},[Object(n["g"])("Satuan "),Object(n["h"])("span",{class:"text-danger"},"*")],-1),P=Object(n["f"])('<option selected="" hidden=""></option><option value="pcs">Pcs</option><option value="tube">Tube</option><option value="ml">Ml</option><option value="fls">Fls</option><option value="cream">Cream</option><option value="vial">Vial</option><option value="bungkus">Bungkus</option><option value="botol">Botol</option><option value="tablet">Tablet</option><option value="kaplet">Kaplet</option><option value="gram">Gram</option><option value="pot">Pot</option><option value="strip">Strip</option><option value="box">Box</option><option value="ampl">Ampl</option><option value="cc">CC</option><option value="kotak">Kotak</option><option value="lembar">Lembar</option><option value="kapsul">Kapsul</option><option value="kaleng">Kaleng</option>',21),C={class:"form-group"},M=Object(n["h"])("label",null,[Object(n["g"])("Harga "),Object(n["h"])("span",{class:"text-danger"},"*")],-1),R={class:"row"},D={class:"col"},G=Object(n["h"])("span",null,"Harga Beli",-1),H={class:"input-group mb-3"},N=Object(n["h"])("div",{class:"input-group-prepend"},[Object(n["h"])("div",{type:"button",class:"btn btn-secondary"},"Rp.")],-1),E={class:"col"},J=Object(n["h"])("span",null,"Harga Jual",-1),L={class:"input-group mb-3"},I=Object(n["h"])("div",{class:"input-group-prepend"},[Object(n["h"])("div",{type:"button",class:"btn btn-secondary"},"Rp.")],-1),W={class:"form-group"},Y=Object(n["h"])("label",null,[Object(n["g"])("Stok "),Object(n["h"])("span",{class:"text-danger"},"*")],-1),z={class:"row"},Q={class:"col"},X=Object(n["h"])("span",null,"Stok Awal",-1),Z={class:"input-group mb-3"},$=Object(n["h"])("div",{class:"input-group-prepend"},[Object(n["h"])("div",{type:"button",class:"btn btn-secondary"},"Rp.")],-1),ee={class:"col"},te=Object(n["h"])("span",null,"Stok Akhir",-1),ae={class:"input-group mb-3"},ne=Object(n["h"])("div",{class:"input-group-prepend"},[Object(n["h"])("div",{type:"button",class:"btn btn-secondary"},"Rp.")],-1),ce={class:"form-group"},oe=Object(n["h"])("label",{for:"expired_date"},[Object(n["g"])("Expired Date "),Object(n["h"])("span",{class:"text-danger"},"*")],-1),re={class:"row"},le={class:"col col-md-4"},ie=Object(n["h"])("div",{class:"col col-md-8"},null,-1),se={class:"form-group"},ue={class:"row"},be={class:"col"},pe=Object(n["h"])("label",{for:"minimal_stok"},[Object(n["g"])("Minimal Stok "),Object(n["h"])("span",{class:"text-danger"},"*")],-1),de={class:"col"},he=Object(n["h"])("label",{for:"maksimal_stok"},[Object(n["g"])("Maksimal Stok "),Object(n["h"])("span",{class:"text-danger"},"*")],-1),je={class:"form-group"},Oe=Object(n["h"])("label",{for:"lokasi"},[Object(n["g"])("Lokasi "),Object(n["h"])("span",{class:"text-danger"},"*")],-1),fe={class:"form-group"},me=Object(n["h"])("label",null,[Object(n["g"])("Fee "),Object(n["h"])("span",{class:"text-danger"},"*")],-1),ge={class:"row"},ve={class:"col"},ke=Object(n["h"])("span",null,"Fee Dokter",-1),ye={class:"input-group"},_e=Object(n["h"])("div",{class:"input-group-prepend"},[Object(n["h"])("div",{type:"button",class:"btn btn-secondary"},"Rp.")],-1),xe={class:"col"},we=Object(n["h"])("span",null,"Fee Beautician",-1),Be={class:"input-group"},Fe=Object(n["h"])("div",{class:"input-group-prepend"},[Object(n["h"])("div",{type:"button",class:"btn btn-secondary"},"Rp.")],-1),Ue={class:"col"},Ae=Object(n["h"])("span",null,"Fee Sales",-1),Ve={class:"input-group"},qe=Object(n["h"])("div",{class:"input-group-prepend"},[Object(n["h"])("div",{type:"button",class:"btn btn-secondary"},"Rp.")],-1),Ke={class:"form-group"},Te=Object(n["h"])("label",{for:"supplier_id"},[Object(n["g"])("Supplier "),Object(n["h"])("span",{class:"text-danger"},"*")],-1),Se=Object(n["h"])("option",{selected:"",hidden:""},null,-1),Pe=Object(n["h"])("option",{value:"1"},"Parma Store",-1),Ce={type:"submit",class:"btn btn-primary d-flex align-items-center"},Me=Object(n["h"])("div",null," Submit ",-1),Re={key:0,xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",style:{background:"none",display:"block","shape-rendering":"auto"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},De=Object(n["h"])("g",null,[Object(n["h"])("path",{d:"M50 15A35 35 0 1 0 74.74873734152916 25.251262658470843",fill:"none",stroke:"#ffffff","stroke-width":"12"}),Object(n["h"])("path",{d:"M49 3L49 27L61 15L49 3",fill:"#ffffff"}),Object(n["h"])("animateTransform",{attributeName:"transform",type:"rotate",repeatCount:"indefinite",dur:"1s",values:"0 50 50;360 50 50",keyTimes:"0;1"})],-1);function Ge(e,t,a,Ge,He,Ne){var Ee=Object(n["w"])("contentHeader");return Object(n["r"])(),Object(n["d"])("div",null,[Object(n["h"])(Ee,{title:"Data Percetakan",url:"/data-percetakan",subTitle:"Tambah Data Percetakan"}),Object(n["h"])("div",c,[Object(n["h"])("div",o,[Object(n["h"])("div",r,[Object(n["h"])("div",l,[Object(n["h"])("div",i,[s,Object(n["h"])("div",u,[Object(n["h"])("form",{onSubmit:t[22]||(t[22]=Object(n["G"])((function(){return Ge.prosesTambahPercetakan&&Ge.prosesTambahPercetakan.apply(Ge,arguments)}),["prevent"]))},[Object(n["h"])("div",b,[Object(n["h"])("div",p,[d,Object(n["F"])(Object(n["h"])("input",{type:"text",class:"form-control",id:"kode",name:"kode",autocomplete:"off",disabled:"","onUpdate:modelValue":t[1]||(t[1]=function(e){return Ge.percetakan.kode=e})},null,512),[[n["B"],Ge.percetakan.kode]])]),Object(n["h"])("div",h,[j,Object(n["F"])(Object(n["h"])("input",{type:"text",class:"form-control",id:"nama",name:"nama",autocomplete:"off",required:"","onUpdate:modelValue":t[2]||(t[2]=function(e){return Ge.percetakan.nama=e})},null,512),[[n["B"],Ge.percetakan.nama]])]),Object(n["h"])("div",O,[f,Object(n["F"])(Object(n["h"])("select",{class:"custom-select form-control","onUpdate:modelValue":t[3]||(t[3]=function(e){return Ge.percetakan.kategori=e}),required:"",onChange:t[4]||(t[4]=function(e){return Ge.generateKode()})},[m,g,v,k],544),[[n["A"],Ge.percetakan.kategori]])]),Object(n["h"])("div",y,[_,Object(n["F"])(Object(n["h"])("select",{class:"custom-select form-control","onUpdate:modelValue":t[5]||(t[5]=function(e){return Ge.percetakan.jenis=e}),required:"",onChange:t[6]||(t[6]=function(e){return Ge.generateKodeDanGetNomorUrut()})},[x,w],544),[[n["A"],Ge.percetakan.jenis]])]),Object(n["h"])("div",B,[F,Object(n["F"])(Object(n["h"])("textarea",{class:"form-control","onUpdate:modelValue":t[7]||(t[7]=function(e){return Ge.percetakan.fungsi=e})},null,512),[[n["B"],Ge.percetakan.fungsi]])]),Object(n["h"])("div",U,[A,Object(n["F"])(Object(n["h"])("select",{class:"custom-select form-control","onUpdate:modelValue":t[8]||(t[8]=function(e){return Ge.percetakan.golongan=e}),required:""},[V,q,K],512),[[n["A"],Ge.percetakan.golongan]])]),Object(n["h"])("div",T,[S,Object(n["F"])(Object(n["h"])("select",{class:"custom-select form-control","onUpdate:modelValue":t[9]||(t[9]=function(e){return Ge.percetakan.satuan=e}),required:""},[P],512),[[n["A"],Ge.percetakan.satuan]])]),Object(n["h"])("div",C,[M,Object(n["h"])("div",R,[Object(n["h"])("div",D,[G,Object(n["h"])("div",H,[N,Object(n["F"])(Object(n["h"])("input",{class:"form-control",type:"number",required:"",name:"harga_beli","onUpdate:modelValue":t[10]||(t[10]=function(e){return Ge.percetakan.harga_beli=e})},null,512),[[n["B"],Ge.percetakan.harga_beli]])])]),Object(n["h"])("div",E,[J,Object(n["h"])("div",L,[I,Object(n["F"])(Object(n["h"])("input",{class:"form-control",type:"number",required:"",name:"harga_jual","onUpdate:modelValue":t[11]||(t[11]=function(e){return Ge.percetakan.harga_jual=e})},null,512),[[n["B"],Ge.percetakan.harga_jual]])])])])]),Object(n["h"])("div",W,[Y,Object(n["h"])("div",z,[Object(n["h"])("div",Q,[X,Object(n["h"])("div",Z,[$,Object(n["F"])(Object(n["h"])("input",{class:"form-control",type:"number",required:"",name:"stok_awal","onUpdate:modelValue":t[12]||(t[12]=function(e){return Ge.percetakan.stok_awal=e})},null,512),[[n["B"],Ge.percetakan.stok_awal]])])]),Object(n["h"])("div",ee,[te,Object(n["h"])("div",ae,[ne,Object(n["F"])(Object(n["h"])("input",{class:"form-control",type:"number",required:"",name:"stok_akhir","onUpdate:modelValue":t[13]||(t[13]=function(e){return Ge.percetakan.stok_akhir=e})},null,512),[[n["B"],Ge.percetakan.stok_akhir]])])])])]),Object(n["h"])("div",ce,[oe,Object(n["h"])("div",re,[Object(n["h"])("div",le,[Object(n["F"])(Object(n["h"])("input",{type:"date",class:"form-control",id:"expired_date",name:"expired_date","onUpdate:modelValue":t[14]||(t[14]=function(e){return Ge.percetakan.expired_date=e}),required:""},null,512),[[n["B"],Ge.percetakan.expired_date]])]),ie])]),Object(n["h"])("div",se,[Object(n["h"])("div",ue,[Object(n["h"])("div",be,[pe,Object(n["F"])(Object(n["h"])("input",{type:"text",class:"form-control",id:"minimal_stok",name:"minimal_stok",autocomplete:"off","onUpdate:modelValue":t[15]||(t[15]=function(e){return Ge.percetakan.minimal_stok=e}),required:""},null,512),[[n["B"],Ge.percetakan.minimal_stok]])]),Object(n["h"])("div",de,[he,Object(n["F"])(Object(n["h"])("input",{type:"text",class:"form-control",id:"maksimal_stok",name:"maksimal_stok",autocomplete:"off","onUpdate:modelValue":t[16]||(t[16]=function(e){return Ge.percetakan.maksimal_stok=e}),required:""},null,512),[[n["B"],Ge.percetakan.maksimal_stok]])])])]),Object(n["h"])("div",je,[Oe,Object(n["F"])(Object(n["h"])("input",{type:"text",class:"form-control",id:"lokasi",name:"lokasi",autocomplete:"off","onUpdate:modelValue":t[17]||(t[17]=function(e){return Ge.percetakan.lokasi=e}),required:""},null,512),[[n["B"],Ge.percetakan.lokasi]])]),Object(n["h"])("div",fe,[me,Object(n["h"])("div",ge,[Object(n["h"])("div",ve,[ke,Object(n["h"])("div",ye,[_e,Object(n["F"])(Object(n["h"])("input",{class:"form-control",type:"number",required:"",name:"fee_dokter","onUpdate:modelValue":t[18]||(t[18]=function(e){return Ge.percetakan.fee_dokter=e})},null,512),[[n["B"],Ge.percetakan.fee_dokter]])])]),Object(n["h"])("div",xe,[we,Object(n["h"])("div",Be,[Fe,Object(n["F"])(Object(n["h"])("input",{class:"form-control",type:"number",required:"",name:"fee_beautician","onUpdate:modelValue":t[19]||(t[19]=function(e){return Ge.percetakan.fee_beautician=e})},null,512),[[n["B"],Ge.percetakan.fee_beautician]])])]),Object(n["h"])("div",Ue,[Ae,Object(n["h"])("div",Ve,[qe,Object(n["F"])(Object(n["h"])("input",{class:"form-control",type:"number",required:"",name:"fee_sales","onUpdate:modelValue":t[20]||(t[20]=function(e){return Ge.percetakan.fee_sales=e})},null,512),[[n["B"],Ge.percetakan.fee_sales]])])])])]),Object(n["h"])("div",Ke,[Te,Object(n["F"])(Object(n["h"])("select",{"onUpdate:modelValue":t[21]||(t[21]=function(e){return Ge.percetakan.supplier_id=e}),class:"custom-select from-control",id:"supplier_id",name:"supplier_id",required:""},[Se,Pe],512),[[n["A"],Ge.percetakan.supplier_id]])]),Object(n["h"])("button",Ce,[Me,Object(n["h"])("div",null,[Ge.loading?(Object(n["r"])(),Object(n["d"])("svg",Re,[De])):Object(n["e"])("",!0)])])])],32)])])])])])])])}var He=a("1da1"),Ne=(a("fb6a"),a("99af"),a("96cf"),a("824e")),Ee=a("4360"),Je=a("bc3a"),Le=a.n(Je),Ie=a("3d20"),We=a.n(Ie),Ye=a("121b"),ze=a("a18c"),Qe={components:{ContentHeader:Ne["a"]},setup:function(){var e=Object(n["b"])((function(){return Ee["a"].getters["auth/user"]})),t=Object(n["u"])(!1),a=Object(n["t"])({cabang_id:"",kode:"",nama:"",kategori:"",jenis:"",fungsi:"",golongan:"",satuan:"",harga_beli:"",harga_jual:"",stok_awal:"",stok_akhir:"",expired_date:"",minimal_stok:"",maksimal_stok:"",lokasi:"",fee_dokter:"",fee_beautician:"",fee_sales:"",supplier_id:""}),c=Xe(e,a),o=c.generateKode,r=c.generateKodeDanGetNomorUrut,l=c.getCabang,i=function(){t.value=!0,Le.a.post("api/percetakan/create",a).then((function(e){We.a.fire({title:"Berhasil!",text:"Berhasil menambahkan data",icon:"success",showConfirmButton:!1,timer:1500}),t.value=!1,ze["a"].push("/data-percetakan"),console.log(e)})).catch((function(e){We.a.fire({title:"Gagal!",text:"Gagal menambahkan data",icon:"error",confirmButtonText:"Ok"}),t.value=!1,console.log(e)}))};return Object(n["p"])((function(){l()})),{percetakan:a,generateKode:o,generateKodeDanGetNomorUrut:r,loading:t,prosesTambahPercetakan:i}}};function Xe(e,t){var a=Object(n["u"])(),c=Object(n["u"])(""),o=function(){var n=Object(He["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Le.a.get("api/cabang/getWhereId/".concat(e.value.cabang_id)).then((function(e){a.value="".concat(e.data.kode_cabang),t.cabang_id=e.data.id})).catch((function(e){console.log(e)}));case 2:t.kode="".concat(a.value,"-");case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),r=function(){var e=Object(He["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Le.a.get("api/percetakan/getForGenerateCode/".concat(t.kode)).then((function(e){if("kosong"==e.data)c.value=Object(Ye["a"])(1),l();else{var t=e.data,a=t.length,n=a-3,o=t.slice(n,a);o=Math.abs(o),c.value=Object(Ye["a"])(o+1),l()}})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){t.kode="".concat(a.value,"-").concat(t.kategori).concat(t.jenis).concat(c.value)},i=function(){r(),t.kode="".concat(a.value,"-").concat(t.kategori).concat(t.jenis).concat(c.value)};return{generateKode:l,generateKodeDanGetNomorUrut:i,getCabang:o}}Qe.render=Ge;t["default"]=Qe},e8b5:function(e,t,a){var n=a("c6b6");e.exports=Array.isArray||function(e){return"Array"==n(e)}},fb6a:function(e,t,a){"use strict";var n=a("23e7"),c=a("861d"),o=a("e8b5"),r=a("23cb"),l=a("50c4"),i=a("fc6a"),s=a("8418"),u=a("b622"),b=a("1dde"),p=b("slice"),d=u("species"),h=[].slice,j=Math.max;n({target:"Array",proto:!0,forced:!p},{slice:function(e,t){var a,n,u,b=i(this),p=l(b.length),O=r(e,p),f=r(void 0===t?p:t,p);if(o(b)&&(a=b.constructor,"function"!=typeof a||a!==Array&&!o(a.prototype)?c(a)&&(a=a[d],null===a&&(a=void 0)):a=void 0,a===Array||void 0===a))return h.call(b,O,f);for(n=new(void 0===a?Array:a)(j(f-O,0)),u=0;O<f;O++,u++)O in b&&s(n,u,b[O]);return n.length=u,n}})}}]);
//# sourceMappingURL=chunk-8a150df4.b1e56fbb.js.map