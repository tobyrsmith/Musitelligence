webpackJsonp([1],{bBPT:function(e,n){},gbFO:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=a("k9Ku"),o=a("DQtg"),r=a("EKTo"),s=(a("787E"),a("D+dc")),i=(a("rxGY"),a("FRcm"),a("35t/")),c=a("6epY"),l=a("b/bh"),v={name:"Play",data:function(){var e=new s.a("e",5,"e"),n=new s.a("d#",5,"e"),a=new s.a("b",4,"e"),t=(new s.a("d",5,"e"),new s.a("c",5,"e")),v=new s.a("a",4,"q"),p=new r.a([l.a.note("e5e"),l.a.note("d#5e")]),w=new r.a([l.a.note("e5e"),l.a.note("d#5e"),l.a.note("e5e"),l.a.note("b4e"),l.a.note("d5e"),l.a.note("c5e")]),b=new r.a([[l.a.note("a4q"),l.a.note("a2e")],l.a.note("e3e"),l.a.note("a3e"),l.a.note("c4e"),l.a.note("e4e"),l.a.note("a4e")]),u=new r.a([[a.newLength("q"),e.newOctave(2).newLength("e")],e.newOctave(3).newLength("e"),new s.a("g#",3,"e"),new s.a("e",4,"e"),new s.a("g#",4,"e"),new s.a("b",4,"e")]),m=new r.a([[t.newLength("q"),new s.a("a",2,"e")],new s.a("e",3,"e"),new s.a("a",3,"e"),new s.a("e",4,"e"),e,n]),_=new r.a([[a.newLength("q"),e.newOctave(2).newLength("e")],e.newOctave(3).newLength("e"),new s.a("g#",3,"e"),new s.a("e",4,"e"),t,a]),d=new r.a([[v,new s.a("a",2,"h")],new s.a("e",3,"e"),new s.a("a",3,"q"),e,n]),h=new c.a([w,b,u,m]),g=new c.a([w,b,_,d]);return{bpm:120,r:new o.a(120,[4,4]),beat:null,vol:1,piece:new i.a(120,[3,4],[p,h,g,h,g,h,g]),piano:l.a.note("E5")}},components:{navigation:a("bwGm").a},methods:{g:function(){this.piece.play(),this.beat=this.piece.rhythm.getBeat()},updateBPM:function(){this.piece.rhythm.bpm=this.bpm},updateVol:function(){t.Howler.volume([this.vol])}}},p={render:function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{attrs:{id:"app"}},[a("v-app",{attrs:{id:"inspire"}},[a("v-container",{attrs:{fluid:"","grid-list-lg":""}},[a("navigation"),e._v(" "),a("h1",{staticClass:"st"},[e._v("Fur Elise!")]),e._v(" "),a("br"),a("br"),a("br"),e._v(" "),a("span",{attrs:{id:"bpmval"}},[e._v("BPM: "+e._s(e.bpm))]),e._v(" "),a("v-slider",{staticClass:"slider",attrs:{name:"bpm",type:"range",min:40,max:300,step:"5","thumb-label":"always",height:"70"},on:{change:e.updateBPM},model:{value:e.bpm,callback:function(n){e.bpm=n},expression:"bpm"}}),e._v(" "),a("br"),a("br"),a("br"),e._v(" "),e.r?a("p",[e._v("Current Beat: "+e._s(e.piece.rhythm.getBeat())+"\n                "),a("v-btn",{attrs:{color:"primary",fab:""},on:{click:e.piece.rhythm.toggleMetronome}},[e._v("Toggle Metronome")])],1):e._e(),e._v(" "),a("br"),a("br"),a("br"),e._v(" "),a("span",[e._v("Volume: "+e._s(Math.floor(100*e.vol)))]),e._v(" "),a("v-slider",{staticClass:"slider",attrs:{name:"volume","prepend-icon":"volume_up",min:"0",max:"1",step:"0.01"},on:{change:e.updateVol},model:{value:e.vol,callback:function(n){e.vol=n},expression:"vol"}}),e._v(" "),a("br"),a("br"),a("br"),e._v(" "),a("v-btn",{staticClass:"btn",attrs:{color:"success",round:"",large:""},on:{click:e.g}},[a("v-icon",[e._v("music_note")]),e._v("Press Me!"),a("v-icon",[e._v("music_note")])],1),e._v(" "),a("span",[e._v(e._s(e.piano))])],1)],1)],1)},staticRenderFns:[]};var w=a("VU/8")(v,p,!1,function(e){a("bBPT")},"data-v-e721b5a0",null);n.default=w.exports}});
//# sourceMappingURL=1.55fcc3e1d972d12d959d.js.map