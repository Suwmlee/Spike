(function(e){function t(t){for(var o,s,r=t[0],l=t[1],c=t[2],p=0,d=[];p<r.length;p++)s=r[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var l=n[r];0!==a[l]&&(o=!1)}o&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},a={app:0},i=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"034f":function(e,t,n){"use strict";n("85ec")},"6a78":function(e,t,n){},7091:function(e,t,n){"use strict";n("79a9")},"73c6":function(e,t,n){"use strict";n("6a78")},7403:function(e,t,n){},"79a9":function(e,t,n){},"7f61":function(e,t,n){"use strict";n("dac0")},"823b":function(e,t,n){"use strict";n("c8b6")},"85ec":function(e,t,n){},"8fd7":function(e,t,n){"use strict";n("7403")},c8b6:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=n("5c96"),i=n.n(a),s=(n("0fae"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("el-container",[n("el-header",[n("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":e.activeIndex,mode:"horizontal"},on:{select:e.handleSelect}},[n("el-menu-item",{attrs:{index:"1"}},[e._v("简介")]),n("el-menu-item",{attrs:{index:"3"}},[e._v("刮削")]),n("el-menu-item",{attrs:{index:"4"}},[e._v("转移")]),n("el-menu-item",{attrs:{index:"5"}},[e._v("重命名")])],1)],1),n("el-main",["1"===e.activeIndex?n("Tutorial"):e._e(),"3"===e.activeIndex?n("JavScraping"):e._e(),"4"===e.activeIndex?n("Transfer"):e._e(),"5"===e.activeIndex?n("Reanme"):e._e()],1)],1)],1)}),r=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"body-wrap"},[n("vue-markdown",{staticClass:"markdown-body",attrs:{source:e.fileContent}})],1)},c=[],u=n("bc3a"),p=n.n(u),d=n("9ce6"),f=n.n(d),m=(n("e4cbc"),{name:"tutorial",components:{VueMarkdown:f.a},data:function(){return{fileContent:""}},created:function(){this.getContent()},methods:{getContent:function(){var e=this;p.a.get("/api/intro").then((function(t){console.log(t),e.fileContent=t.data})).catch((function(e){console.log(e)}))}}}),g=m,h=(n("7091"),n("2877")),b=Object(h["a"])(g,l,c,!1,null,"67350c44",null),v=b.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":e.activeIndex,mode:"horizontal"},on:{select:e.handleSelect}},[n("el-menu-item",{attrs:{index:"first"}},[e._v("刮削")]),n("el-menu-item",{attrs:{index:"second"}},[e._v("配置")])],1),"first"===e.activeIndex?n("Scraping"):e._e(),"second"===e.activeIndex?n("ScrapingConf"):e._e()],1)},w=[],x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"body-wrap"},[n("el-row",{attrs:{gutter:24}},[n("el-col",{attrs:{span:12}},[n("el-button",{attrs:{loading:e.running,size:"medium",type:"primary"},on:{click:e.start}},[e.running?n("span",[e._v("刮削中...")]):n("span",[e._v("刮削")])]),e.running?n("el-button",{attrs:{type:"danger",size:"medium"},on:{click:e.stop}},[e._v("停止")]):e._e()],1),n("el-col",{attrs:{span:9}},[n("el-input",{attrs:{width:"auto",placeholder:"模糊查询"},model:{value:e.blur,callback:function(t){e.blur=t},expression:"blur"}})],1)],1),e.running?n("el-alert",{staticClass:"alter-tip",attrs:{title:e.tips,closable:!1,type:"info"}}):e._e(),n("el-table",{attrs:{data:e.scrapingrecords,stripe:"","default-sort":{prop:"updatetime",order:"descending"},"cell-style":{padding:"0",height:"50px"}},on:{"sort-change":e.changesort}},[n("el-table-column",{attrs:{label:"原始名称","min-width":"150","show-overflow-tooltip":!0,prop:"srcname"}}),n("el-table-column",{attrs:{label:"原始地址","min-width":"150","show-overflow-tooltip":!0,prop:"srcpath"}}),n("el-table-column",{attrs:{label:"大小(MB)",width:"80",prop:"srcsize"}}),n("el-table-column",{attrs:{label:"状态",width:"80",sortable:"custom",prop:"status"},scopedSlots:e._u([{key:"default",fn:function(t){return[0===t.row.status?n("span",[e._v("未刮削")]):e._e(),1===t.row.status?n("span",[e._v("完成")]):e._e(),2===t.row.status?n("span",[e._v("失败")]):e._e(),3===t.row.status?n("span",[e._v("忽略")]):e._e()]}}])}),n("el-table-column",{attrs:{label:"刮削用名称","min-width":"120","show-overflow-tooltip":!0,prop:"scrapingname"}}),n("el-table-column",{attrs:{label:"强制中文",width:"100",sortable:"custom",prop:"cnsubtag"},scopedSlots:e._u([{key:"default",fn:function(t){return[!0===t.row.cnsubtag?n("span",[e._v("开启")]):e._e(),!1===t.row.cnsubtag?n("span"):e._e()]}}])}),n("el-table-column",{attrs:{label:"刮削后名称","min-width":"150","show-overflow-tooltip":!0,prop:"destname"}}),n("el-table-column",{attrs:{label:"刮削后路径","min-width":"150","show-overflow-tooltip":!0,prop:"destpath"}}),n("el-table-column",{attrs:{label:"更新时间",width:"155",sortable:"custom",prop:"updatetime"}}),n("el-table-column",{attrs:{label:"操作",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"mini"},on:{click:function(n){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),n("el-pagination",{attrs:{"page-size":10,"pager-count":7,"current-page":e.currentPage,layout:"prev, pager, next",total:e.totalnum},on:{"current-change":e.handleCurrentChange}}),n("el-dialog",{attrs:{"append-to-body":"","close-on-click-modal":!1,visible:e.editdialog,width:"400px"},on:{"update:visible":function(t){e.editdialog=t}}},[n("el-form",{attrs:{inline:"",size:"small",model:e.rowrecord,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"原始名称",prop:"srcname"}},[n("span",{staticStyle:{width:"370px"},domProps:{textContent:e._s(e.rowrecord.srcname)}})]),n("el-form-item",{attrs:{label:"原始地址",prop:"srcpath"}},[n("span",{staticStyle:{width:"370px"},domProps:{textContent:e._s(e.rowrecord.srcpath)}})]),n("el-form-item",{attrs:{label:"状态",prop:"status"}},[n("el-radio-group",{model:{value:e.rowrecord.status,callback:function(t){e.$set(e.rowrecord,"status",t)},expression:"rowrecord.status"}},[n("el-radio",{attrs:{label:0}},[e._v("未刮削")]),n("el-radio",{attrs:{label:1}},[e._v("完成")]),n("el-radio",{attrs:{label:2}},[e._v("失败")]),n("el-radio",{attrs:{label:3}},[e._v("忽略")])],1)],1),n("el-form-item",{attrs:{label:"刮削用名称",prop:"scrapingname"}},[n("el-input",{staticStyle:{width:"300px"},model:{value:e.rowrecord.scrapingname,callback:function(t){e.$set(e.rowrecord,"scrapingname",t)},expression:"rowrecord.scrapingname"}})],1),n("el-form-item",{attrs:{label:"强制中文",prop:"cnsubtag"}},[n("el-radio-group",{model:{value:e.rowrecord.cnsubtag,callback:function(t){e.$set(e.rowrecord,"cnsubtag",t)},expression:"rowrecord.cnsubtag"}},[n("el-radio",{attrs:{label:!0}},[e._v("开启")]),n("el-radio",{attrs:{label:!1}},[e._v("关闭")])],1)],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"text"},on:{click:function(t){return e.dialogexit()}}},[e._v("取消")]),n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.dialogupdate()}}},[e._v("修改")])],1)],1)],1)},y=[],k=(n("b680"),{name:"scraping",data:function(){return{running:!1,tips:"当前无任务",currentPage:1,totalnum:10,pagesize:10,blur:"",sortprop:"",sortorder:"",editdialog:!1,rowrecord:[],scrapingrecords:[]}},created:function(){console.log("init data"),this.refresh()},mounted:function(){this.timer=setInterval(this.refresh,1500)},beforeDestroy:function(){clearInterval(this.timer)},methods:{start:function(){p.a.post("/api/scraping").then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},stop:function(){p.a.get("/api/stopall").then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},changesort:function(e){this.sortprop=e.prop,this.sortorder=e.order},refresh:function(){var e=this,t="page="+this.currentPage+"&size="+this.pagesize,n="&sortprop="+this.sortprop+"&sortorder="+this.sortorder,o="&blur="+this.blur,a="/api/scrapingrecord?"+t+n+o;p.a.get(a).then((function(t){if(e.scrapingrecords=t.data.data,e.currentPage=t.data.page,e.totalnum=t.data.total,e.running=t.data.running,e.running){var n=t.data.tasktotal,o=t.data.taskfinished,a=o/n*100;e.tips="刮削进度: "+a.toFixed(2)+"% ["+o+"/"+n+"]"}})).catch((function(e){console.log(e)}))},handleEdit:function(e,t){this.rowrecord=t,this.editdialog=!0},dialogexit:function(){this.editdialog=!1},dialogupdate:function(){this.editdialog=!1,p.a.put("/api/scrapingrecord",this.rowrecord).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},handleDelete:function(e,t){var n=this;p.a.delete("/api/scrapingrecord/"+t.id).then((function(){n.$message({showClose:!0,duration:2e3,message:"删除成功",type:"success"})})).catch((function(e){this.$message({showClose:!0,duration:2e3,message:"删除失败:"+e,type:"error"})}))},handleCurrentChange:function(e){this.currentPage=e}}}),D=k,C=(n("73c6"),Object(h["a"])(D,x,y,!1,null,"db20cb6e",null)),$=C.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"body-wrap"},[n("el-form",{attrs:{"label-position":"right","label-width":"auto",model:e.settings}},[n("el-form-item",{attrs:{label:"刮削目录"}},[n("el-input",{model:{value:e.settings.scraping_folder,callback:function(t){e.$set(e.settings,"scraping_folder",t)},expression:"settings.scraping_folder"}},[n("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.showSourceDialog},slot:"append"})],1)],1),n("el-form-item",{attrs:{label:"输出模式"}},[n("el-radio-group",{model:{value:e.mode,callback:function(t){e.mode=t},expression:"mode"}},[n("el-radio",{attrs:{label:1}},[e._v("软链接")]),n("el-radio",{attrs:{label:2}},[e._v("硬链接")]),n("el-radio",{attrs:{label:3}},[e._v("移动文件")]),n("el-radio",{attrs:{label:4}},[e._v("直接刮削")])],1)],1),1==e.mode?n("el-form-item",{attrs:{label:"软链接前缀"}},[n("el-input",{model:{value:e.settings.soft_prefix,callback:function(t){e.$set(e.settings,"soft_prefix",t)},expression:"settings.soft_prefix"}})],1):e._e(),3!=e.mode?n("el-form-item",{attrs:{label:"输出目录"}},[n("el-input",{model:{value:e.settings.success_folder,callback:function(t){e.$set(e.settings,"success_folder",t)},expression:"settings.success_folder"}},[n("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.showOutputDialog},slot:"append"})],1)],1):e._e(),n("el-form-item",{attrs:{label:"跳过目录"}},[n("el-input",{model:{value:e.settings.escape_folders,callback:function(t){e.$set(e.settings,"escape_folders",t)},expression:"settings.escape_folders"}})],1),n("el-form-item",{attrs:{label:"目录规则"}},[n("el-input",{model:{value:e.settings.location_rule,callback:function(t){e.$set(e.settings,"location_rule",t)},expression:"settings.location_rule"}})],1),n("el-form-item",{attrs:{label:"命名规则"}},[n("el-input",{model:{value:e.settings.naming_rule,callback:function(t){e.$set(e.settings,"naming_rule",t)},expression:"settings.naming_rule"}})],1),n("el-form-item",{attrs:{label:"Javdb Cookies"}},[n("el-input",{attrs:{placeholder:"请输入Javdb Cookies(有效期7天)"},model:{value:e.settings.cookies_javdb,callback:function(t){e.$set(e.settings,"cookies_javdb",t)},expression:"settings.cookies_javdb"}})],1),n("el-form-item",{attrs:{label:"水印开关"}},[n("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.settings.watermark_enable,callback:function(t){e.$set(e.settings,"watermark_enable",t)},expression:"settings.watermark_enable"}})],1),1==e.settings.watermark_enable?n("el-form-item",{attrs:{label:"水印大小"}},[n("el-input",{attrs:{type:"Number",placeholder:"添加的水印相对整图的比例 1/size "},model:{value:e.settings.watermark_size,callback:function(t){e.$set(e.settings,"watermark_size",t)},expression:"settings.watermark_size"}})],1):e._e(),1==e.settings.watermark_enable?n("el-form-item",{attrs:{label:"水印位置"}},[n("el-input",{attrs:{type:"Number",placeholder:"右上 0, 左上 1, 左下 2，右下 3"},model:{value:e.settings.watermark_location,callback:function(t){e.$set(e.settings,"watermark_location",t)},expression:"settings.watermark_location"}})],1):e._e(),n("el-form-item",{attrs:{label:"代理开关"}},[n("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.settings.proxy_enable,callback:function(t){e.$set(e.settings,"proxy_enable",t)},expression:"settings.proxy_enable"}})],1),1==e.settings.proxy_enable?n("el-form-item",{attrs:{label:"类型"}},[n("el-input",{model:{value:e.settings.proxy_type,callback:function(t){e.$set(e.settings,"proxy_type",t)},expression:"settings.proxy_type"}})],1):e._e(),1==e.settings.proxy_enable?n("el-form-item",{attrs:{label:"地址"}},[n("el-input",{model:{value:e.settings.proxy_address,callback:function(t){e.$set(e.settings,"proxy_address",t)},expression:"settings.proxy_address"}})],1):e._e(),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("应用")])],1)],1),n("FileBrowserDialog",{directives:[{name:"show",rawName:"v-show",value:e.isDialogVisible,expression:"isDialogVisible"}],attrs:{dialogVisible:e.isDialogVisible,path:e.folderPath},on:{"update:path":function(t){e.folderPath=t},close:e.closeDialog}})],1)},S=[],z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"dialog-fade"}},[n("div",{staticClass:"dialog-backdrop"},[n("div",{staticClass:"dialog",attrs:{role:"dialog","aria-labelledby":"dialogTitle","aria-describedby":"dialogDescription"}},[n("header",{staticClass:"dialog-header",attrs:{id:"dialogTitle"}},[e._t("header",[e._v(" 选择文件夹 ")]),n("button",{staticClass:"btn-close",attrs:{type:"button","aria-label":"Close dialog"},on:{click:e.cancel}},[e._v(" x ")])],2),n("section",{staticClass:"dialog-body",attrs:{id:"dialogDescription"}},[n("p",{domProps:{textContent:e._s(e.selectedPath)}}),n("el-divider"),n("el-button",{staticClass:"btn-item",on:{click:function(t){return e.select(e.parentFolder)}}},[n("i",{staticClass:"el-icon-back"}),e._v("返回上级目录")]),e._l(e.directoryList,(function(t){return n("div",{key:t.index},[n("el-button",{staticClass:"btn-item",domProps:{textContent:e._s(t.fullname)},on:{click:function(n){return e.select(t.fullname)}}})],1)}))],2),n("footer",{staticClass:"dialog-footer"},[n("el-button",{staticClass:"btn-green",attrs:{type:"button","aria-label":"Close dialog"},on:{click:e.close}},[e._v(" 确认 ")])],1)])])])},I=[],V=(n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0"),function(e,t,n,o){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function s(e){try{l(o.next(e))}catch(t){i(t)}}function r(e){try{l(o["throw"](e))}catch(t){i(t)}}function l(e){e.done?n(e.value):a(e.value).then(s,r)}l((o=o.apply(e,t||[])).next())}))}),O=function(e,t){var n,o,a,i,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:r(0),throw:r(1),return:r(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function r(e){return function(t){return l([e,t])}}function l(i){if(n)throw new TypeError("Generator is already executing.");while(s)try{if(n=1,o&&(a=2&i[0]?o["return"]:i[0]?o["throw"]||((a=o["return"])&&a.call(o),0):o.next)&&!(a=a.call(o,i[1])).done)return a;switch(o=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,o=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(a=s.trys,!(a=a.length>0&&a[a.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){s.label=i[1];break}if(6===i[0]&&s.label<a[1]){s.label=a[1],a=i;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(i);break}a[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(r){i=[6,r],o=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},j={name:"FileBrowserDialog",data:function(){return{parentFolder:"",selectedPath:"/",directoryList:{}}},watch:{dialogVisible:function(e){e&&this.dialogInit()}},props:{dialogVisible:Boolean},methods:{getDirs:function(e){return void 0===e&&(e="/"),V(this,void 0,void 0,(function(){var t,n;return O(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),[4,p.a.get("/api/scan/"+e)];case 1:return t=o.sent().data,this.directoryList=t.dirs,this.parentFolder=t.parent,[3,3];case 2:return n=o.sent(),this.showSnack(n.message),[3,3];case 3:return[2]}}))}))},dialogInit:function(){try{this.select()}catch(e){this.getDirs()}},select:function(e){void 0===e&&(e="/"),""===e&&(e="/"),this.selectedPath=e,this.getDirs(e)},cancel:function(){this.$emit("close")},close:function(){this.$emit("update:path",this.selectedPath),this.$emit("close")}}},E=j,F=(n("7f61"),Object(h["a"])(E,z,I,!1,null,null,null)),B=F.exports,T={name:"scrapingconf",components:{FileBrowserDialog:B},data:function(){return{isDialogVisible:!1,openDialogID:1,folderPath:"",mode:1,settings:{}}},mounted:function(){var e=this;p.a.get("/api/scrapingconf").then((function(t){console.log(t),e.settings=t.data,3===t.data.main_mode?e.mode=4:1===t.data.link_type?e.mode=1:2===t.data.link_type?e.mode=2:e.mode=3})).catch((function(e){console.log(e)}))},methods:{onSubmit:function(){var e=this;1===this.mode?(this.settings.link_type=1,this.settings.main_mode=1):2===this.mode?(this.settings.link_type=2,this.settings.main_mode=1):3===this.mode?(this.settings.link_type=0,this.settings.main_mode=1):4===this.mode&&(this.settings.main_mode=3),p.a.post("/api/scrapingconf",this.settings).then((function(){e.$message({showClose:!0,duration:2e3,message:"更新成功",type:"success"})})).catch((function(e){console.log(e)}))},showSourceDialog:function(){this.openDialogID=1,this.isDialogVisible=!0},showOutputDialog:function(){this.openDialogID=2,this.isDialogVisible=!0},closeDialog:function(){this.isDialogVisible=!1,1===this.openDialogID?this.settings.scraping_folder=this.folderPath:2===this.openDialogID&&(this.settings.success_folder=this.folderPath)}}},J=T,M=(n("8fd7"),Object(h["a"])(J,P,S,!1,null,"b0ddb13e",null)),N=M.exports,A={name:"JavScraping",components:{Scraping:$,ScrapingConf:N},data:function(){return{activeIndex:"first"}},methods:{handleSelect:function(e){this.activeIndex=e}}},L=A,G=Object(h["a"])(L,_,w,!1,null,null,null),R=G.exports,q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"body-wrap"},[n("el-select",{attrs:{placeholder:"请选择配置"},on:{change:e.changeConf},model:{value:e.selectedoption,callback:function(t){e.selectedoption=t},expression:"selectedoption"}},e._l(e.options,(function(e){return n("el-option",{key:e.id,attrs:{label:e.mark,value:e.id}})})),1),n("el-divider"),n("el-form",{attrs:{"label-position":"right","label-width":"auto",model:e.transconfig}},[n("el-form-item",{attrs:{label:"源目录"}},[n("el-input",{model:{value:e.transconfig.source_folder,callback:function(t){e.$set(e.transconfig,"source_folder",t)},expression:"transconfig.source_folder"}},[n("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.showSourceDialog},slot:"append"})],1)],1),n("el-form-item",{attrs:{label:"链接类型"}},[n("el-radio-group",{model:{value:e.transconfig.linktype,callback:function(t){e.$set(e.transconfig,"linktype",t)},expression:"transconfig.linktype"}},[n("el-radio",{attrs:{label:0}},[e._v("软链接")]),n("el-radio",{attrs:{label:1}},[e._v("硬链接")])],1)],1),0==e.transconfig.linktype?n("el-form-item",{attrs:{label:"软链接前缀"}},[n("el-input",{model:{value:e.transconfig.soft_prefix,callback:function(t){e.$set(e.transconfig,"soft_prefix",t)},expression:"transconfig.soft_prefix"}})],1):e._e(),n("el-form-item",{attrs:{label:"输出目录"}},[n("el-input",{model:{value:e.transconfig.output_folder,callback:function(t){e.$set(e.transconfig,"output_folder",t)},expression:"transconfig.output_folder"}},[n("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.showOutputDialog},slot:"append"})],1)],1),n("el-form-item",{attrs:{label:"过滤目录"}},[n("el-input",{model:{value:e.transconfig.escape_folder,callback:function(t){e.$set(e.transconfig,"escape_folder",t)},expression:"transconfig.escape_folder"}})],1),n("el-form-item",{attrs:{label:"备注"}},[n("el-input",{model:{value:e.transconfig.mark,callback:function(t){e.$set(e.transconfig,"mark",t)},expression:"transconfig.mark"}})],1),n("el-divider",[e._v("扩展功能")]),n("el-form-item",{attrs:{label:"正则重命名"}},[n("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.renameflag,callback:function(t){e.renameflag=t},expression:"renameflag"}})],1),1==e.renameflag?n("el-form-item",{attrs:{label:"修正前缀"}},[n("el-input",{model:{value:e.renameprefix,callback:function(t){e.renameprefix=t},expression:"renameprefix"}})],1):e._e()],1),n("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.addconf}},[e._v("新增")]),n("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.updateconf}},[e._v("更新")]),n("el-button",{attrs:{type:"danger",size:"medium"},on:{click:e.deleteconf}},[e._v("删除")]),n("el-divider"),n("el-button",{attrs:{loading:e.running,size:"medium",type:"primary"},on:{click:e.onSubmit}},[e.running?n("span",[e._v("转移中...")]):n("span",[e._v("开始转移")])]),e.running?n("el-button",{attrs:{type:"danger",size:"medium"},on:{click:e.stop}},[e._v("停止")]):e._e(),n("el-button",{attrs:{type:"danger",size:"medium"},on:{click:e.delrecords}},[e._v("清理记录")]),n("el-divider"),e.running?n("el-alert",{staticClass:"alter-tip",attrs:{title:e.tips,closable:!1,type:"info"}}):e._e(),n("el-table",{attrs:{data:e.transferdata,stripe:"","cell-style":{padding:"0",height:"50px"}}},[n("el-table-column",{attrs:{label:"原始名称","min-width":"150","show-overflow-tooltip":!0,prop:"srcname"}}),n("el-table-column",{attrs:{label:"原始地址","min-width":"150","show-overflow-tooltip":!0,prop:"srcpath"}}),n("el-table-column",{attrs:{label:"大小(MB)",width:"80",prop:"srcsize"}}),n("el-table-column",{attrs:{label:"链接路径","min-width":"150","show-overflow-tooltip":!0,prop:"linkpath"}}),n("el-table-column",{attrs:{label:"实际路径","min-width":"150","show-overflow-tooltip":!0,prop:"destpath"}}),n("el-table-column",{attrs:{label:"更新时间",width:"155",prop:"updatetime"}})],1),n("el-pagination",{attrs:{"page-size":10,"pager-count":7,"current-page":e.currentPage,layout:"prev, pager, next",total:e.totalnum},on:{"current-change":e.handleCurrentChange}}),n("FileBrowserDialog",{directives:[{name:"show",rawName:"v-show",value:e.isDialogVisible,expression:"isDialogVisible"}],attrs:{dialogVisible:e.isDialogVisible,path:e.folderPath},on:{"update:path":function(t){e.folderPath=t},close:e.closeDialog}})],1)},H=[],K=(n("7db0"),{name:"transfer",components:{FileBrowserDialog:B},data:function(){return{running:!1,tips:"当前无任务",isDialogVisible:!1,openDialogID:1,folderPath:"",renameflag:!1,renameprefix:"S01E",currentPage:1,totalnum:10,pagesize:10,transferdata:[],transconfig:{},selectedoption:-1,options:[]}},created:function(){console.log("init data"),this.refresh(),this.getconfs()},mounted:function(){this.timer=setInterval(this.refresh,1500)},beforeDestroy:function(){clearInterval(this.timer)},methods:{onSubmit:function(){this.transconfig.renameflag=this.renameflag,this.transconfig.renameprefix=this.renameprefix,p.a.post("/api/transfer",this.transconfig).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},stop:function(){p.a.get("/api/stopall").then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},refresh:function(){var e=this,t="page="+this.currentPage+"&size="+this.pagesize,n="/api/transrecord?"+t;p.a.get(n).then((function(t){if(e.transferdata=t.data.data,e.currentPage=t.data.page,e.totalnum=t.data.total,e.running=t.data.running,e.running){var n=t.data.tasktotal,o=t.data.taskfinished,a=o/n*100;e.tips="转移进度: "+a.toFixed(2)+"% ["+o+"/"+n+"]"}})).catch((function(e){console.log(e)}))},delrecords:function(){var e=this;p.a.delete("/api/transrecord").then((function(){e.$message({showClose:!0,duration:2e3,message:"清理成功",type:"success"})})).catch((function(e){console.log(e)}))},handleCurrentChange:function(e){this.currentPage=e},getconfs:function(){var e=this,t="/api/transconf/all";p.a.get(t).then((function(t){e.options=t.data,-1===e.selectedoption&&(e.selectedoption=e.options[0].id),e.changeConf()})).catch((function(e){console.log(e)}))},changeConf:function(){var e=this,t=this.options.find((function(t){return t.id==e.selectedoption}));if("undefined"===typeof t)return this.selectedoption=this.options[0].id,void(this.transconfig=this.options[0]);this.transconfig=t},addconf:function(){var e=this;p.a.post("/api/transconf",this.transconfig).then((function(t){e.transconfig=t.data,e.selectedoption=e.transconfig.id,e.getconfs(),e.$message({showClose:!0,duration:2e3,message:"新增成功",type:"success"})})).catch((function(e){console.log(e)}))},updateconf:function(){var e=this;p.a.put("/api/transconf",this.transconfig).then((function(t){e.transconfig=t.data,e.getconfs(),e.$message({showClose:!0,duration:2e3,message:"更新成功",type:"success"})})).catch((function(e){console.log(e)}))},deleteconf:function(){var e=this;this.options.length<2?this.$message({showClose:!0,duration:2e3,message:"仅剩一份配置无法删除",type:"success"}):p.a.delete("/api/transconf/"+this.transconfig.id).then((function(){e.getconfs(),e.$message({showClose:!0,duration:2e3,message:"删除成功",type:"success"})})).catch((function(e){console.log(e)}))},showSourceDialog:function(){this.openDialogID=1,this.isDialogVisible=!0},showOutputDialog:function(){this.openDialogID=2,this.isDialogVisible=!0},closeDialog:function(){this.isDialogVisible=!1,1===this.openDialogID?this.transconfig.source_folder=this.folderPath:2===this.openDialogID&&(this.transconfig.output_folder=this.folderPath)}}}),Q=K,U=(n("823b"),Object(h["a"])(Q,q,H,!1,null,"23186950",null)),W=U.exports,X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-form",{attrs:{"label-position":"right","label-width":"80px",model:e.renameconf}},[n("el-form-item",{attrs:{label:"源目录"}},[n("el-input",{model:{value:e.renameconf.source_folder,callback:function(t){e.$set(e.renameconf,"source_folder",t)},expression:"renameconf.source_folder"}},[n("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.showDialog},slot:"append"})],1)],1),n("el-form-item",{attrs:{label:"链接类型"}},[n("el-radio-group",{model:{value:e.renametype,callback:function(t){e.renametype=t},expression:"renametype"}},[n("el-radio",{attrs:{label:0}},[e._v("正则")]),n("el-radio",{attrs:{label:1}},[e._v("替换")])],1)],1),0==e.renametype?n("el-form-item",{attrs:{label:"正则"}},[n("el-input",{model:{value:e.renameconf.reg,callback:function(t){e.$set(e.renameconf,"reg",t)},expression:"renameconf.reg"}})],1):e._e(),0==e.renametype?n("el-form-item",{attrs:{label:"备选正则"}},[n("el-input",{model:{value:e.renameconf.reg2,callback:function(t){e.$set(e.renameconf,"reg2",t)},expression:"renameconf.reg2"}})],1):e._e(),0==e.renametype?n("el-form-item",{attrs:{label:"修正前缀"}},[n("el-input",{model:{value:e.renameconf.prefix,callback:function(t){e.$set(e.renameconf,"prefix",t)},expression:"renameconf.prefix"}})],1):e._e(),0==e.renametype?n("el-form-item",[n("el-button",{attrs:{type:"info",size:"medium"},on:{click:e.preview}},[e._v("预览")]),n("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.apply}},[e._v("应用")])],1):e._e(),1==e.renametype?n("el-form-item",{attrs:{label:"替换部分"}},[n("el-input",{model:{value:e.renameconf.base,callback:function(t){e.$set(e.renameconf,"base",t)},expression:"renameconf.base"}})],1):e._e(),1==e.renametype?n("el-form-item",{attrs:{label:"替换后"}},[n("el-input",{model:{value:e.renameconf.newfix,callback:function(t){e.$set(e.renameconf,"newfix",t)},expression:"renameconf.newfix"}})],1):e._e(),1==e.renametype?n("el-form-item",[n("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.replace}},[e._v("应用")])],1):e._e()],1),n("el-divider"),n("el-row",[n("el-col",{attrs:{span:10}},[n("div",{staticClass:"grid-content"},[n("el-input",{staticStyle:{"white-space":"pre-line"},attrs:{readonly:"",type:"textarea",rows:2},domProps:{textContent:e._s(e.prenames)}})],1)]),n("el-col",{attrs:{span:4}},[n("div",{staticClass:"grid-content"},[n("i",{staticClass:"el-icon-mobile-phone"})])]),n("el-col",{attrs:{span:10}},[n("div",{staticClass:"grid-content"},[n("el-input",{staticStyle:{"white-space":"pre-line"},attrs:{readonly:"",type:"textarea"},domProps:{textContent:e._s(e.fixnames)}})],1)])],1),n("FileBrowserDialog",{directives:[{name:"show",rawName:"v-show",value:e.isDialogVisible,expression:"isDialogVisible"}],attrs:{dialogVisible:e.isDialogVisible,path:e.renameconf.source_folder},on:{"update:path":function(t){return e.$set(e.renameconf,"source_folder",t)},close:e.closeDialog}})],1)},Y=[],Z={name:"rename",components:{FileBrowserDialog:B},data:function(){return{isDialogVisible:!1,prenames:"",fixnames:"",renametype:0,renameconf:{source_folder:"E:\\Entertaiment\\ACG\\Animes",reg:"[\\[第 ][0-9.svidevoa\\(\\)]*[\\]話话集 ]",reg2:"\\.e[0-9videvoa\\(\\)]{1,}[.]",prefix:"S01E",ext_type:"",base:"",newfix:""}}},methods:{preview:function(){var e=this;this.fixnames="",this.prenames="",p.a.post("/api/previewrename",this.renameconf).then((function(t){for(var n in t.data.prefix){var o=n+"."+t.data.prefix[n];e.fixnames+=o+"\r\n"}for(var a in t.data.todo){var i=a+"."+t.data.todo[a];e.prenames+=i+"\r\n"}})).catch((function(e){console.log(e)}))},apply:function(){var e=this;this.fixnames="",this.prenames="",p.a.post("/api/renamebyreg",this.renameconf).then((function(t){for(var n in t.data.prefix){var o=n+"."+t.data.prefix[n];e.fixnames+=o+"\r\n"}for(var a in t.data.todo){var i=a+"."+t.data.todo[a];e.prenames+=i+"\r\n"}})).catch((function(e){console.log(e)}))},replace:function(){var e=this;p.a.post("/api/renamebyrep",this.renameconf).then((function(t){console.log(t),e.$message({showClose:!0,duration:2e3,message:"重命名成功",type:"success"})})).catch((function(e){console.log(e)}))},showDialog:function(){this.isDialogVisible=!0},closeDialog:function(){this.isDialogVisible=!1}}},ee=Z,te=Object(h["a"])(ee,X,Y,!1,null,null,null),ne=te.exports,oe={name:"App",components:{Tutorial:v,JavScraping:R,Transfer:W,Reanme:ne},data:function(){return{activeIndex:"1"}},methods:{handleSelect:function(e){this.activeIndex=e}}},ae=oe,ie=(n("034f"),Object(h["a"])(ae,s,r,!1,null,null,null)),se=ie.exports;o["default"].use(i.a),o["default"].config.productionTip=!1,new o["default"]({render:function(e){return e(se)}}).$mount("#app")},dac0:function(e,t,n){}});
//# sourceMappingURL=app.c339f855.js.map