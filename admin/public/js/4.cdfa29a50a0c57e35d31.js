webpackJsonp([4],{IwDU:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("Xxa5"),s=a.n(l),r=a("woOf"),i=a.n(r),n=a("exGp"),o=a.n(n),c={name:"hero-edit",props:{id:""},data:function(){return{model:{skills:[],partners:[],categories:[],restraint:[],continent:[],inscriptionChoice:[],scores:{difficult:0,items1:[],items2:[]}},options:[],itemOptions:[],heroListOptions:[],inscriptionOptions:[]}},mounted:function(){this.id&&this.fetch(),this.fetchCategory(),this.fetchItem(),this.heroList(),this.fetchInscription()},methods:{fetch:function(){var e=this;return o()(s.a.mark(function t(){var a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("hero/edit/"+e.id);case 2:a=t.sent,e.model=i()({},e.model,a.data);case 4:case"end":return t.stop()}},t,e)}))()},fetchInscription:function(){var e=this;return o()(s.a.mark(function t(){var a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("inscription");case 2:a=t.sent,e.inscriptionOptions=a.data;case 4:case"end":return t.stop()}},t,e)}))()},fetchCategory:function(){var e=this;return o()(s.a.mark(function t(){var a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("category");case 2:a=t.sent,e.options=a.data;case 4:case"end":return t.stop()}},t,e)}))()},fetchItem:function(){var e=this;return o()(s.a.mark(function t(){var a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("item");case 2:a=t.sent,e.itemOptions=a.data;case 4:case"end":return t.stop()}},t,e)}))()},handleAvatarSuccess:function(e){this.$set(this.model,"avator",e.url)},heroList:function(){var e=this;return o()(s.a.mark(function t(){var a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("/hero");case 2:a=t.sent,e.heroListOptions=a.data;case 4:case"end":return t.stop()}},t,e)}))()},save:function(){var e=this;return o()(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(4===e.model.skills.length){t.next=3;break}return e.$message.error("只能输入4个技能值"),t.abrupt("return");case 3:if(void 0,!e.id){t.next=10;break}return t.next=7,e.$http.put("hero/"+e.id,e.model);case 7:t.sent,t.next=13;break;case 10:return t.next=12,e.$http.post("hero",e.model);case 12:t.sent;case 13:case"end":return t.stop()}},t,e)}))()}}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hero-edit"},[a("strong",[e._v(e._s(e.id?"编辑":"新建")+"英雄")]),e._v(" "),a("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save(t)}}},[a("el-tabs",{attrs:{type:"border-card",value:"inscription"}},[a("el-tab-pane",{attrs:{label:"基础信息",name:"basic"}},[a("el-form-item",{attrs:{label:"英雄"}},[a("el-input",{model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"称号"}},[a("el-input",{model:{value:e.model.title,callback:function(t){e.$set(e.model,"title",t)},expression:"model.title"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"类型"}},[a("el-select",{attrs:{placeholder:"请选择",multiple:""},model:{value:e.model.categories,callback:function(t){e.$set(e.model,"categories",t)},expression:"model.categories"}},e._l(e.options,function(e){return a("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"难度"}},[a("el-rate",{staticStyle:{"margin-top":".6rem"},attrs:{max:9,"show-score":""},model:{value:e.model.scores.difficult,callback:function(t){e.$set(e.model.scores,"difficult",t)},expression:"model.scores.difficult"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"技能"}},[a("el-rate",{staticStyle:{"margin-top":".6rem"},attrs:{max:9,"show-score":""},model:{value:e.model.scores.skills,callback:function(t){e.$set(e.model.scores,"skills",t)},expression:"model.scores.skills"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"攻击"}},[a("el-rate",{staticStyle:{"margin-top":".6rem"},attrs:{max:9,"show-score":""},model:{value:e.model.scores.attack,callback:function(t){e.$set(e.model.scores,"attack",t)},expression:"model.scores.attack"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"生存"}},[a("el-rate",{staticStyle:{"margin-top":".6rem"},attrs:{max:9,"show-score":""},model:{value:e.model.scores.survive,callback:function(t){e.$set(e.model.scores,"survive",t)},expression:"model.scores.survive"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"顺风出装"}},[a("el-select",{attrs:{filterable:"","collapse-tags":"",placeholder:"请选择",multiple:""},model:{value:e.model.items2,callback:function(t){e.$set(e.model,"items2",t)},expression:"model.items2"}},e._l(e.itemOptions,function(e){return a("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"逆风出装"}},[a("el-select",{attrs:{filterable:"","collapse-tags":"",placeholder:"请选择",multiple:""},model:{value:e.model.items1,callback:function(t){e.$set(e.model,"items1",t)},expression:"model.items1"}},e._l(e.itemOptions,function(e){return a("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"使用技巧"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.model.usageTips,callback:function(t){e.$set(e.model,"usageTips",t)},expression:"model.usageTips"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"团战思路"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.model.teamTips,callback:function(t){e.$set(e.model,"teamTips",t)},expression:"model.teamTips"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"对抗技巧"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.model.battleTips,callback:function(t){e.$set(e.model,"battleTips",t)},expression:"model.battleTips"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"头像"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"http://localhost:3000/admin/api/upload",headers:e.getAuthHeaders,"show-file-list":!1,"on-success":function(t){return e.$set(e.model,"avator",t.url)}}},[e.model.avator?a("img",{staticClass:"avatar",attrs:{src:e.model.avator}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),e._v(" "),a("el-form-item",{attrs:{label:"banner"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"http://localhost:3000/admin/api/upload",headers:e.getAuthHeaders,"show-file-list":!1,"on-success":function(t){return e.$set(e.model,"banner",t.url)}}},[e.model.avator?a("img",{staticClass:"avatar",attrs:{src:e.model.banner}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)],1),e._v(" "),a("el-tab-pane",{attrs:{label:"技能",name:"skills"}},[a("el-button",{attrs:{type:"text"},on:{click:function(t){return e.model.skills.push({})}}},[a("i",{staticClass:"el-icon-plus"}),e._v(" 添加技能\n        ")]),e._v(" "),a("el-row",e._l(e.model.skills,function(t,l){return a("el-col",{key:l,staticStyle:{"margin-bottom":"15px"},attrs:{xl:12}},[a("el-form-item",{attrs:{label:"名称"}},[a("el-input",{model:{value:t.name,callback:function(a){e.$set(t,"name",a)},expression:"item.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"图标"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"http://localhost:3000/admin/api/upload","show-file-list":!1,"on-success":function(a){return e.$set(t,"icon",a.url)},headers:e.getAuthHeaders}},[t.icon?a("img",{staticClass:"avatar",attrs:{src:t.icon}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),e._v(" "),a("el-form-item",{attrs:{label:"描述"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.description,callback:function(a){e.$set(t,"description",a)},expression:"item.description"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"冷却值"}},[a("el-input",{model:{value:t.delay,callback:function(a){e.$set(t,"delay",a)},expression:"item.delay"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"消耗值"}},[a("el-input",{model:{value:t.cost,callback:function(a){e.$set(t,"cost",a)},expression:"item.cost"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"小提示"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.tips,callback:function(a){e.$set(t,"tips",a)},expression:"item.tips"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(t){return e.model.skills.splice(l,1)}}},[e._v("删除")])],1)],1)}),1)],1),e._v(" "),a("el-tab-pane",{attrs:{label:"最佳搭档",name:"partners"}},[a("el-button",{attrs:{type:"text"},on:{click:function(t){return e.model.partners.push({})}}},[a("i",{staticClass:"el-icon-plus"}),e._v(" 添加英雄\n        ")]),e._v(" "),a("el-row",e._l(e.model.partners,function(t,l){return a("el-col",{key:l,attrs:{span:12}},[a("el-form-item",{attrs:{label:"英雄"}},[a("el-select",{attrs:{filterable:""},model:{value:t.hero,callback:function(a){e.$set(t,"hero",a)},expression:"item.hero"}},e._l(e.heroListOptions,function(t){return a("el-option",{directives:[{name:"show",rawName:"v-show",value:t._id!==e.id,expression:"hero._id!==id"}],key:t._id,attrs:{label:t.name,value:t._id}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"描述"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.description,callback:function(a){e.$set(t,"description",a)},expression:"item.description"}})],1)],1)}),1)],1),e._v(" "),a("el-tab-pane",{attrs:{label:"被谁克制",name:"restraint"}},[a("el-button",{attrs:{type:"text"},on:{click:function(t){return e.model.restraint.push({})}}},[a("i",{staticClass:"el-icon-plus"}),e._v(" 添加英雄\n        ")]),e._v(" "),a("el-row",e._l(e.model.restraint,function(t,l){return a("el-col",{key:l,attrs:{span:12}},[a("el-form-item",{attrs:{label:"英雄"}},[a("el-select",{attrs:{filterable:""},model:{value:t.hero,callback:function(a){e.$set(t,"hero",a)},expression:"item.hero"}},e._l(e.heroListOptions,function(t){return a("el-option",{directives:[{name:"show",rawName:"v-show",value:t._id!==e.id,expression:"hero._id!==id"}],key:t._id,attrs:{label:t.name,value:t._id}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"描述"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.description,callback:function(a){e.$set(t,"description",a)},expression:"item.description"}})],1)],1)}),1)],1),e._v(" "),a("el-tab-pane",{attrs:{label:"克制谁",name:"continent"}},[a("el-button",{attrs:{type:"text"},on:{click:function(t){return e.model.continent.push({})}}},[a("i",{staticClass:"el-icon-plus"}),e._v(" 添加英雄\n        ")]),e._v(" "),a("el-row",e._l(e.model.continent,function(t,l){return a("el-col",{key:l,attrs:{span:12}},[a("el-form-item",{attrs:{label:"英雄"}},[a("el-select",{attrs:{filterable:""},model:{value:t.hero,callback:function(a){e.$set(t,"hero",a)},expression:"item.hero"}},e._l(e.heroListOptions,function(t){return a("el-option",{directives:[{name:"show",rawName:"v-show",value:t._id!==e.id,expression:"hero._id!==id"}],key:t._id,attrs:{label:t.name,value:t._id}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"描述"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.description,callback:function(a){e.$set(t,"description",a)},expression:"item.description"}})],1)],1)}),1)],1),e._v(" "),a("el-tab-pane",{attrs:{label:"铭文选择",name:"inscription"}},[a("el-button",{attrs:{type:"text"},on:{click:function(t){return e.model.inscriptionChoice.push({})}}},[a("i",{staticClass:"el-icon-plus"}),e._v(" 添加铭文\n        ")]),e._v(" "),a("el-row",e._l(e.model.inscriptionChoice,function(t,l){return a("el-col",{key:l,attrs:{span:12}},[a("el-form-item",{attrs:{label:"铭文"}},[a("el-select",{attrs:{filterable:""},model:{value:t.inscription,callback:function(a){e.$set(t,"inscription",a)},expression:"item.inscription"}},e._l(e.inscriptionOptions,function(e){return a("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})}),1)],1)],1)}),1)],1)],1),e._v(" "),a("el-form-item",{staticStyle:{"margin-top":"15px"},attrs:{label:"操作"}},[a("el-button",{attrs:{type:"primary","native-type":"submit",around:""}},[e._v("保存")])],1)],1)],1)},staticRenderFns:[]};var m=a("VU/8")(c,u,!1,function(e){a("hPMc")},null,null);t.default=m.exports},hPMc:function(e,t){}});
//# sourceMappingURL=4.cdfa29a50a0c57e35d31.js.map