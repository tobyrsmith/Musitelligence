webpackJsonp([10],{L3sP:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("bwGm"),s=n("T5H/"),r=n("FRcm"),c=n("D+dc"),a={name:"select-note",components:{navigation:i.a,LearnNote:s.a},data:function(){return{notes:r.g,Note:c.b,pick:new c.b("C"),picked:!1}},methods:{gotPicked:function(t){this.pick=new c.b(t),this.picked=!0}}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[t.picked?t._e():n("div",[n("v-flex",{attrs:{xs1:""}},[n("v-btn",{staticClass:"general-btn",attrs:{color:"error",to:"/learnmenu"}},[t._v("Back")])],1),t._v(" "),n("v-container",{attrs:{fluid:"","grid-list-lg":""}},[n("br"),t._v(" "),t._l(t.notes["#"],function(e){return n("div",{key:e.id,staticClass:"n"},[n("v-btn",{staticClass:"general-btn",attrs:{color:"success",fab:""},on:{click:function(n){t.gotPicked(e)}}},[t._v(t._s(e))])],1)})],2)],1),t._v(" "),t.picked?n("div",{attrs:{fluid:"","grid-list-lg":""}},[n("v-btn",{staticClass:"general-btn",attrs:{color:"error"},on:{click:function(e){t.picked=!1}}},[t._v("Back")]),t._v(" "),n("learn-note",{attrs:{note:t.pick}})],1):t._e()])},staticRenderFns:[]},l=n("VU/8")(a,o,!1,null,null,null);e.default=l.exports}});
//# sourceMappingURL=10.f9b9879203f5ad5bbda3.js.map