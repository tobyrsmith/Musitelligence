webpackJsonp([2],{"/n6Q":function(t,e,n){n("zQR9"),n("+tPU"),t.exports=n("Kh4W").f("iterator")},"1kS7":function(t,e){e.f=Object.getOwnPropertySymbols},"35t/":function(t,e,n){"use strict";var r=n("BO1k"),i=n.n(r),o=n("Zrlr"),a=n.n(o),u=n("wxAW"),s=n.n(u),c=n("DQtg"),l=n("6epY"),f=n("EKTo"),h=n("D+dc"),p=n("787E"),d=n("FRcm"),y=n("OMJi"),v=(n.n(y),function(){function t(e,n,r){a()(this,t),this._BPM=e,this._time_signature=n,this.rhythm=c.a.getRhythm(e,n),this._data=r||[],this.init()}return s()(t,[{key:"init",value:function(){this.duration=0,this.playable_data=new Array;var t=!0,e=!1,n=void 0;try{for(var r,o=i()(this.data);!(t=(r=o.next()).done);t=!0){var a=r.value;if(a instanceof f.a||a instanceof l.a){var u=!0,s=!1,c=void 0;try{for(var h,p=i()(a.getData());!(u=(h=p.next()).done);u=!0){var y=h.value;this.playable_data.push(y),this.duration+=d.d[y.duration]}}catch(t){s=!0,c=t}finally{try{!u&&p.return&&p.return()}finally{if(s)throw c}}}else this.playable_data.push(a),this.duration+=d.d[a.duration]}}catch(t){e=!0,n=t}finally{try{!t&&o.return&&o.return()}finally{if(e)throw n}}this.length=this.calculateLength()}},{key:"calculateLength",value:function(){var t=this;return this.length=0,this.playable_data.forEach(function(e){if(e instanceof h.b||e instanceof p.a)t.length+=60/t.BPM*d.d[e.duration]*t.rhythm.beats_per_measure;else if(Object(y.isArray)(e)){var n=d.d[e.duration];e.forEach(function(t){n=n<d.d[t.duration]?n:d.d[t.duration]}),t.length+=60/t.BPM*n*t.rhythm.beats_per_measure}}),this.length}},{key:"play",value:function(){this.rhythm.addNotes(this.playable_data),this.rhythm.toggle()}},{key:"pushToData",value:function(t){this.data.push(t)}},{key:"toString",value:function(){var t="Piece: { ",e=!0,n=!1,r=void 0;try{for(var o,a=i()(this.data);!(e=(o=a.next()).done);e=!0){t+=o.value.toString()+", "}}catch(t){n=!0,r=t}finally{try{!e&&a.return&&a.return()}finally{if(n)throw r}}return t+="} "}},{key:"data",get:function(){return this._data},set:function(t){this._data=t,this.init()}},{key:"duration",get:function(){return this._duration},set:function(t){this._duration=t}},{key:"BPM",get:function(){return this._BPM},set:function(t){this._BPM=t,this.rhythm.updateBPM(t),this.length=this.calculateLength()}}]),t}());e.a=v},"5QVw":function(t,e,n){t.exports={default:n("BwfY"),__esModule:!0}},"6epY":function(t,e,n){"use strict";var r=n("BO1k"),i=n.n(r),o=n("Zrlr"),a=n.n(o),u=n("wxAW"),s=n.n(u),c=function(){function t(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];a()(this,t),this._measures=n,this._duration=0,this._measures.forEach(function(t){e._duration+=t.duration})}return s()(t,[{key:"getData",value:function(){var t=new Array,e=!0,n=!1,r=void 0;try{for(var o,a=i()(this.measures);!(e=(o=a.next()).done);e=!0){var u=o.value,s=!0,c=!1,l=void 0;try{for(var f,h=i()(u.data);!(s=(f=h.next()).done);s=!0){var p=f.value;t.push(p)}}catch(t){c=!0,l=t}finally{try{!s&&h.return&&h.return()}finally{if(c)throw l}}}}catch(t){n=!0,r=t}finally{try{!e&&a.return&&a.return()}finally{if(n)throw r}}return t}},{key:"length",value:function(){return this._measures.length}},{key:"addMeasure",value:function(t){this.measures.push(t)}},{key:"toString",value:function(){var t="Sequence: { ",e=!0,n=!1,r=void 0;try{for(var o,a=i()(this.measures);!(e=(o=a.next()).done);e=!0){t+=o.value.toString()+", "}}catch(t){n=!0,r=t}finally{try{!e&&a.return&&a.return()}finally{if(n)throw r}}return t+="} "}},{key:"measures",get:function(){return this._measures},set:function(t){this._measures=t}},{key:"duration",get:function(){return this._duration},set:function(t){this._duration=t}}]),t}();e.a=c},BwfY:function(t,e,n){n("fWfb"),n("M6a0"),n("OYls"),n("QWe/"),t.exports=n("FeBl").Symbol},DQtg:function(t,e,n){"use strict";var r,i=n("BO1k"),o=n.n(i),a=n("Zrlr"),u=n.n(a),s=n("wxAW"),c=n.n(s),l=n("D+dc"),f=n("OMJi"),h=(n.n(f),n("787E")),p=n("FRcm"),d=new(window.AudioContext||window.webkitAudioContext),y=0,v=10;function m(){for(;y<d.currentTime+r.scheduleAheadTime;){if(r.next_note>=r.data_with_time.length-1)for(var t=0;t<v;t++)r.scheduleNote();r.nextNote()}r.timerID=setTimeout(m,r.lookahead)}var g=function(){function t(e,n){u()(this,t),this.data=null,this.dataKeeper=null,this.reload_data=!1,this.metronome_sound=new Howl({src:["/static/Media/Metronome/1.wav"]}),this.data_with_time=[],this.next_note=0,this.next_note_to_schedule=0,this.overall_time=0,this.metronome=!1,this.timerID=null,this.lookahead=10,this.scheduleAheadTime=.1,this.seconds_per_beat=60/e,this.current_beat=1,this.lastNoteDrawn=3,this.bpm=e,this.beats_per_measure=n[0],this.beat_duration=n[1],this.isPlaying=!1,this.beat_check=0,this.loop=!0}return c()(t,[{key:"scheduleNote",value:function(){this.data[this.next_note_to_schedule]?(this.scheduleNoteHelper(this.data[this.next_note_to_schedule]),this.next_note_to_schedule++):this.next_note_to_schedule=0}},{key:"scheduleNoteHelper",value:function(t){if(t instanceof l.b||t instanceof h.a)this.data_with_time.push({sounds:[t],time:this.overall_time}),this.overall_time+=60/this.bpm*p.d[t.duration]*this.beats_per_measure;else if(Object(f.isArray)(t)){var e=p.d[t.duration];t.forEach(function(t){e=e<p.d[t.duration]?e:p.d[t.duration]}),this.data_with_time.push({sounds:t,time:this.overall_time}),this.overall_time+=60/this.bpm*e*this.beats_per_measure}}},{key:"playSounds",value:function(){var t=!0,e=!1,n=void 0;try{for(var r,i=o()(this.data_with_time[this.next_note].sounds);!(t=(r=i.next()).done);t=!0){r.value.play()}}catch(t){e=!0,n=t}finally{try{!t&&i.return&&i.return()}finally{if(e)throw n}}}},{key:"nextNote",value:function(){y+=this.seconds_per_beat*(1/16),this.beat_check+=this.seconds_per_beat*(1/16),this.prev_beat_time+this.seconds_per_beat<=d.currentTime&&(this.metronome&&this.metronome_sound.play(),this.beat_check=0,this.current_beat++,this.current_beat===this.beats_per_measure+1&&(this.current_beat=1),this.prev_beat_time+=this.seconds_per_beat),this.data_with_time[this.next_note]&&this.data_with_time[this.next_note].time<=d.currentTime&&(this.playSounds(),this.next_note++)}},{key:"draw",value:function(){var t=r.lastNoteDrawn;r.currentTime=d.currentTime,r.lastNoteDrawn!=t&&(r.lastNoteDrawn=t),requestAnimationFrame(r.draw)}},{key:"getBeat",value:function(){return this.current_beat}},{key:"toggle",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;r=this,this.isPlaying=!this.isPlaying,this.isPlaying?("suspended"===d.state&&d.resume(),this.start_time=d.currentTime,this.overall_time=d.currentTime,this.prev_beat_time=d.currentTime,this.data_with_time.length=0,this.next_note=t,this.current_beat=1,this.next_note_to_schedule=t,m(),requestAnimationFrame(this.draw)):clearTimeout(this.timerID)}},{key:"addNotes",value:function(t){this.data=t}},{key:"toggleMetronome",value:function(){r&&(r.metronome=!r.metronome)}},{key:"updateBPM",value:function(t){this.bpm=t,this.seconds_per_beat=60/t,1==this.isPlaying&&(this.toggle(),this.toggle())}}],[{key:"getRhythm",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:80,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[4,4];return r||(r=new t(e,n))}}]),t}();e.a=g},EKTo:function(t,e,n){"use strict";var r=n("mvHQ"),i=n.n(r),o=n("BO1k"),a=n.n(o),u=n("Zrlr"),s=n.n(u),c=n("wxAW"),l=n.n(c),f=n("D+dc"),h=(n("DQtg"),n("787E")),p=n("OMJi"),d=(n.n(p),n("FRcm")),y=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;s()(this,t),this._data=e,this.max_duration=n,this._duration=0,this.updateDuration()}return l()(t,[{key:"getData",value:function(){var t=new Array,e=!0,n=!1,r=void 0;try{for(var i,o=a()(this.data);!(e=(i=o.next()).done);e=!0){var u=i.value;t.push(u)}}catch(t){n=!0,r=t}finally{try{!e&&o.return&&o.return()}finally{if(n)throw r}}return t}},{key:"mutate",value:function(e,n){var r=JSON.parse(i()(this.data));return r[e]=n,new t(r)}},{key:"addNotes",value:function(t){this.data.push(t)}},{key:"updateDuration",value:function(){var t=this;this.duration=0;var e=0,n=!0,r=!1,i=void 0;try{for(var o,u=a()(this.data);!(n=(o=u.next()).done);n=!0){var s=o.value;if(s instanceof f.b||s instanceof h.a?this.duration+=d.d[s.duration]:Object(p.isArray)(s)&&function(){var e=s[0].duration;s.forEach(function(t){e=e<d.d[t.duration]?e:d.d[t.duration]}),t.duration+=e}(),!(this.duration<=this.max_duration||0===this.max_duration))break;e++}}catch(t){r=!0,i=t}finally{try{!n&&u.return&&u.return()}finally{if(r)throw i}}this.data=this.data.slice(0,e)}},{key:"toString",value:function(){var t="Measure: { ",e=!0,n=!1,r=void 0;try{for(var i,o=a()(this.data);!(e=(i=o.next()).done);e=!0){var u=i.value;if(u instanceof f.b||u instanceof h.a)t+=u.toString()+", ";else{t+="[ ";var s=!0,c=!1,l=void 0;try{for(var p,d=a()(u);!(s=(p=d.next()).done);s=!0){t+=p.value+", "}}catch(t){c=!0,l=t}finally{try{!s&&d.return&&d.return()}finally{if(c)throw l}}t+="] "}}}catch(t){n=!0,r=t}finally{try{!e&&o.return&&o.return()}finally{if(n)throw r}}return t+="} "}},{key:"data",get:function(){return this._data},set:function(t){this._data=t}},{key:"duration",get:function(){return this._duration},set:function(t){this._duration=t}}]),t}();e.a=y},Kh4W:function(t,e,n){e.f=n("dSzd")},Kh5d:function(t,e,n){var r=n("sB3e"),i=n("PzxK");n("uqUo")("getPrototypeOf",function(){return function(t){return i(r(t))}})},LC74:function(t,e){"function"==typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e;var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},LKZe:function(t,e,n){var r=n("NpIQ"),i=n("X8DO"),o=n("TcQ7"),a=n("MmMw"),u=n("D2L2"),s=n("SfB7"),c=Object.getOwnPropertyDescriptor;e.f=n("+E39")?c:function(t,e){if(t=o(t),e=a(e,!0),s)try{return c(t,e)}catch(t){}if(u(t,e))return i(!r.f.call(t,e),t[e])}},NpIQ:function(t,e){e.f={}.propertyIsEnumerable},OMJi:function(t,e,n){(function(t,r){var i=/%[sdj%]/g;e.format=function(t){if(!m(t)){for(var e=[],n=0;n<arguments.length;n++)e.push(u(arguments[n]));return e.join(" ")}n=1;for(var r=arguments,o=r.length,a=String(t).replace(i,function(t){if("%%"===t)return"%";if(n>=o)return t;switch(t){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(t){return"[Circular]"}default:return t}}),s=r[n];n<o;s=r[++n])y(s)||!b(s)?a+=" "+s:a+=" "+u(s);return a},e.deprecate=function(n,i){if(g(t.process))return function(){return e.deprecate(n,i).apply(this,arguments)};if(!0===r.noDeprecation)return n;var o=!1;return function(){if(!o){if(r.throwDeprecation)throw new Error(i);r.traceDeprecation?console.trace(i):console.error(i),o=!0}return n.apply(this,arguments)}};var o,a={};function u(t,n){var r={seen:[],stylize:c};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),d(n)?r.showHidden=n:n&&e._extend(r,n),g(r.showHidden)&&(r.showHidden=!1),g(r.depth)&&(r.depth=2),g(r.colors)&&(r.colors=!1),g(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=s),l(r,t,r.depth)}function s(t,e){var n=u.styles[e];return n?"["+u.colors[n][0]+"m"+t+"["+u.colors[n][1]+"m":t}function c(t,e){return t}function l(t,n,r){if(t.customInspect&&n&&O(n.inspect)&&n.inspect!==e.inspect&&(!n.constructor||n.constructor.prototype!==n)){var i=n.inspect(r,t);return m(i)||(i=l(t,i,r)),i}var o=function(t,e){if(g(e))return t.stylize("undefined","undefined");if(m(e)){var n="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(n,"string")}if(v(e))return t.stylize(""+e,"number");if(d(e))return t.stylize(""+e,"boolean");if(y(e))return t.stylize("null","null")}(t,n);if(o)return o;var a=Object.keys(n),u=function(t){var e={};return t.forEach(function(t,n){e[t]=!0}),e}(a);if(t.showHidden&&(a=Object.getOwnPropertyNames(n)),x(n)&&(a.indexOf("message")>=0||a.indexOf("description")>=0))return f(n);if(0===a.length){if(O(n)){var s=n.name?": "+n.name:"";return t.stylize("[Function"+s+"]","special")}if(_(n))return t.stylize(RegExp.prototype.toString.call(n),"regexp");if(w(n))return t.stylize(Date.prototype.toString.call(n),"date");if(x(n))return f(n)}var c,b="",k=!1,S=["{","}"];(p(n)&&(k=!0,S=["[","]"]),O(n))&&(b=" [Function"+(n.name?": "+n.name:"")+"]");return _(n)&&(b=" "+RegExp.prototype.toString.call(n)),w(n)&&(b=" "+Date.prototype.toUTCString.call(n)),x(n)&&(b=" "+f(n)),0!==a.length||k&&0!=n.length?r<0?_(n)?t.stylize(RegExp.prototype.toString.call(n),"regexp"):t.stylize("[Object]","special"):(t.seen.push(n),c=k?function(t,e,n,r,i){for(var o=[],a=0,u=e.length;a<u;++a)j(e,String(a))?o.push(h(t,e,n,r,String(a),!0)):o.push("");return i.forEach(function(i){i.match(/^\d+$/)||o.push(h(t,e,n,r,i,!0))}),o}(t,n,r,u,a):a.map(function(e){return h(t,n,r,u,e,k)}),t.seen.pop(),function(t,e,n){if(t.reduce(function(t,e){return 0,e.indexOf("\n")>=0&&0,t+e.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60)return n[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+n[1];return n[0]+e+" "+t.join(", ")+" "+n[1]}(c,b,S)):S[0]+b+S[1]}function f(t){return"["+Error.prototype.toString.call(t)+"]"}function h(t,e,n,r,i,o){var a,u,s;if((s=Object.getOwnPropertyDescriptor(e,i)||{value:e[i]}).get?u=s.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):s.set&&(u=t.stylize("[Setter]","special")),j(r,i)||(a="["+i+"]"),u||(t.seen.indexOf(s.value)<0?(u=y(n)?l(t,s.value,null):l(t,s.value,n-1)).indexOf("\n")>-1&&(u=o?u.split("\n").map(function(t){return"  "+t}).join("\n").substr(2):"\n"+u.split("\n").map(function(t){return"   "+t}).join("\n")):u=t.stylize("[Circular]","special")),g(a)){if(o&&i.match(/^\d+$/))return u;(a=JSON.stringify(""+i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.substr(1,a.length-2),a=t.stylize(a,"name")):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),a=t.stylize(a,"string"))}return a+": "+u}function p(t){return Array.isArray(t)}function d(t){return"boolean"==typeof t}function y(t){return null===t}function v(t){return"number"==typeof t}function m(t){return"string"==typeof t}function g(t){return void 0===t}function _(t){return b(t)&&"[object RegExp]"===k(t)}function b(t){return"object"==typeof t&&null!==t}function w(t){return b(t)&&"[object Date]"===k(t)}function x(t){return b(t)&&("[object Error]"===k(t)||t instanceof Error)}function O(t){return"function"==typeof t}function k(t){return Object.prototype.toString.call(t)}function S(t){return t<10?"0"+t.toString(10):t.toString(10)}e.debuglog=function(t){if(g(o)&&(o=Object({NODE_ENV:"production"}).NODE_DEBUG||""),t=t.toUpperCase(),!a[t])if(new RegExp("\\b"+t+"\\b","i").test(o)){var n=r.pid;a[t]=function(){var r=e.format.apply(e,arguments);console.error("%s %d: %s",t,n,r)}}else a[t]=function(){};return a[t]},e.inspect=u,u.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},u.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},e.isArray=p,e.isBoolean=d,e.isNull=y,e.isNullOrUndefined=function(t){return null==t},e.isNumber=v,e.isString=m,e.isSymbol=function(t){return"symbol"==typeof t},e.isUndefined=g,e.isRegExp=_,e.isObject=b,e.isDate=w,e.isError=x,e.isFunction=O,e.isPrimitive=function(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||void 0===t},e.isBuffer=n("fC4T");var E=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function j(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.log=function(){var t,n;console.log("%s - %s",(t=new Date,n=[S(t.getHours()),S(t.getMinutes()),S(t.getSeconds())].join(":"),[t.getDate(),E[t.getMonth()],n].join(" ")),e.format.apply(e,arguments))},e.inherits=n("LC74"),e._extend=function(t,e){if(!e||!b(e))return t;for(var n=Object.keys(e),r=n.length;r--;)t[n[r]]=e[n[r]];return t}}).call(e,n("DuR2"),n("W2nU"))},OYls:function(t,e,n){n("crlp")("asyncIterator")},OvRC:function(t,e,n){t.exports={default:n("oM7Q"),__esModule:!0}},Pf15:function(t,e,n){"use strict";e.__esModule=!0;var r=a(n("kiBT")),i=a(n("OvRC")),o=a(n("pFYg"));function a(t){return t&&t.__esModule?t:{default:t}}e.default=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":(0,o.default)(e)));t.prototype=(0,i.default)(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(r.default?(0,r.default)(t,e):t.__proto__=e)}},"QWe/":function(t,e,n){n("crlp")("observable")},Rrel:function(t,e,n){var r=n("TcQ7"),i=n("n0T6").f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?function(t){try{return i(t)}catch(t){return a.slice()}}(t):i(r(t))}},W2nU:function(t,e){var n,r,i=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function u(t){if(n===setTimeout)return setTimeout(t,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(t){n=o}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(t){r=a}}();var s,c=[],l=!1,f=-1;function h(){l&&s&&(l=!1,s.length?c=s.concat(c):f=-1,c.length&&p())}function p(){if(!l){var t=u(h);l=!0;for(var e=c.length;e;){for(s=c,c=[];++f<e;)s&&s[f].run();f=-1,e=c.length}s=null,l=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function y(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new d(t,e)),1!==c.length||l||u(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=y,i.addListener=y,i.once=y,i.off=y,i.removeListener=y,i.removeAllListeners=y,i.emit=y,i.prependListener=y,i.prependOnceListener=y,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},Xc4G:function(t,e,n){var r=n("lktj"),i=n("1kS7"),o=n("NpIQ");t.exports=function(t){var e=r(t),n=i.f;if(n)for(var a,u=n(t),s=o.f,c=0;u.length>c;)s.call(t,a=u[c++])&&e.push(a);return e}},ZaQb:function(t,e,n){var r=n("EqjI"),i=n("77Pl"),o=function(t,e){if(i(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{(r=n("+ZMJ")(Function.call,n("LKZe").f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return o(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:o}},Zx67:function(t,e,n){t.exports={default:n("fS6E"),__esModule:!0}},Zzip:function(t,e,n){t.exports={default:n("/n6Q"),__esModule:!0}},crlp:function(t,e,n){var r=n("7KvD"),i=n("FeBl"),o=n("O4g8"),a=n("Kh4W"),u=n("evD5").f;t.exports=function(t){var e=i.Symbol||(i.Symbol=o?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||u(e,t,{value:a.f(t)})}},eblY:function(t,e){},exh5:function(t,e,n){var r=n("kM2E");r(r.S,"Object",{setPrototypeOf:n("ZaQb").set})},fC4T:function(t,e){t.exports=function(t){return t&&"object"==typeof t&&"function"==typeof t.copy&&"function"==typeof t.fill&&"function"==typeof t.readUInt8}},fS6E:function(t,e,n){n("Kh5d"),t.exports=n("FeBl").Object.getPrototypeOf},fWfb:function(t,e,n){"use strict";var r=n("7KvD"),i=n("D2L2"),o=n("+E39"),a=n("kM2E"),u=n("880/"),s=n("06OY").KEY,c=n("S82l"),l=n("e8AB"),f=n("e6n0"),h=n("3Eo+"),p=n("dSzd"),d=n("Kh4W"),y=n("crlp"),v=n("Xc4G"),m=n("7UMu"),g=n("77Pl"),_=n("EqjI"),b=n("TcQ7"),w=n("MmMw"),x=n("X8DO"),O=n("Yobk"),k=n("Rrel"),S=n("LKZe"),E=n("evD5"),j=n("lktj"),M=S.f,D=E.f,T=k.f,P=r.Symbol,N=r.JSON,B=N&&N.stringify,F=p("_hidden"),A=p("toPrimitive"),z={}.propertyIsEnumerable,Q=l("symbol-registry"),C=l("symbols"),I=l("op-symbols"),J=Object.prototype,K="function"==typeof P,R=r.QObject,Y=!R||!R.prototype||!R.prototype.findChild,W=o&&c(function(){return 7!=O(D({},"a",{get:function(){return D(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=M(J,e);r&&delete J[e],D(t,e,n),r&&t!==J&&D(J,e,r)}:D,Z=function(t){var e=C[t]=O(P.prototype);return e._k=t,e},q=K&&"symbol"==typeof P.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof P},L=function(t,e,n){return t===J&&L(I,e,n),g(t),e=w(e,!0),g(n),i(C,e)?(n.enumerable?(i(t,F)&&t[F][e]&&(t[F][e]=!1),n=O(n,{enumerable:x(0,!1)})):(i(t,F)||D(t,F,x(1,{})),t[F][e]=!0),W(t,e,n)):D(t,e,n)},U=function(t,e){g(t);for(var n,r=v(e=b(e)),i=0,o=r.length;o>i;)L(t,n=r[i++],e[n]);return t},H=function(t){var e=z.call(this,t=w(t,!0));return!(this===J&&i(C,t)&&!i(I,t))&&(!(e||!i(this,t)||!i(C,t)||i(this,F)&&this[F][t])||e)},G=function(t,e){if(t=b(t),e=w(e,!0),t!==J||!i(C,e)||i(I,e)){var n=M(t,e);return!n||!i(C,e)||i(t,F)&&t[F][e]||(n.enumerable=!0),n}},V=function(t){for(var e,n=T(b(t)),r=[],o=0;n.length>o;)i(C,e=n[o++])||e==F||e==s||r.push(e);return r},$=function(t){for(var e,n=t===J,r=T(n?I:b(t)),o=[],a=0;r.length>a;)!i(C,e=r[a++])||n&&!i(J,e)||o.push(C[e]);return o};K||(u((P=function(){if(this instanceof P)throw TypeError("Symbol is not a constructor!");var t=h(arguments.length>0?arguments[0]:void 0),e=function(n){this===J&&e.call(I,n),i(this,F)&&i(this[F],t)&&(this[F][t]=!1),W(this,t,x(1,n))};return o&&Y&&W(J,t,{configurable:!0,set:e}),Z(t)}).prototype,"toString",function(){return this._k}),S.f=G,E.f=L,n("n0T6").f=k.f=V,n("NpIQ").f=H,n("1kS7").f=$,o&&!n("O4g8")&&u(J,"propertyIsEnumerable",H,!0),d.f=function(t){return Z(p(t))}),a(a.G+a.W+a.F*!K,{Symbol:P});for(var X="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;X.length>tt;)p(X[tt++]);for(var et=j(p.store),nt=0;et.length>nt;)y(et[nt++]);a(a.S+a.F*!K,"Symbol",{for:function(t){return i(Q,t+="")?Q[t]:Q[t]=P(t)},keyFor:function(t){if(!q(t))throw TypeError(t+" is not a symbol!");for(var e in Q)if(Q[e]===t)return e},useSetter:function(){Y=!0},useSimple:function(){Y=!1}}),a(a.S+a.F*!K,"Object",{create:function(t,e){return void 0===e?O(t):U(O(t),e)},defineProperty:L,defineProperties:U,getOwnPropertyDescriptor:G,getOwnPropertyNames:V,getOwnPropertySymbols:$}),N&&a(a.S+a.F*(!K||c(function(){var t=P();return"[null]"!=B([t])||"{}"!=B({a:t})||"{}"!=B(Object(t))})),"JSON",{stringify:function(t){for(var e,n,r=[t],i=1;arguments.length>i;)r.push(arguments[i++]);if(n=e=r[1],(_(e)||void 0!==t)&&!q(t))return m(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!q(e))return e}),r[1]=e,B.apply(N,r)}}),P.prototype[A]||n("hJx8")(P.prototype,A,P.prototype.valueOf),f(P,"Symbol"),f(Math,"Math",!0),f(r.JSON,"JSON",!0)},gbFO:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("k9Ku"),i=(n("DQtg"),n("EKTo")),o=(n("787E"),n("D+dc")),a=(n("rxGY"),n("FRcm"),n("35t/")),u=n("6epY"),s=n("b/bh"),c={name:"Play",data:function(){var t=new o.a("e",5,"e"),e=new o.a("d#",5,"e"),n=new o.a("b",4,"e"),r=(new o.a("d",5,"e"),new o.a("c",5,"e")),c=new o.a("a",4,"q"),l=new i.a([s.a.note("e5e"),s.a.note("d#5e")]),f=new i.a([s.a.note("e5e"),s.a.note("d#5e"),s.a.note("e5e"),s.a.note("b4e"),s.a.note("d5e"),s.a.note("c5e")]),h=new i.a([[s.a.note("a4q"),s.a.note("a2e")],s.a.note("e3e"),s.a.note("a3e"),s.a.note("c4e"),s.a.note("e4e"),s.a.note("a4e")]),p=new i.a([[n.newDuration("q"),t.newOctave(2).newDuration("e")],t.newOctave(3).newDuration("e"),new o.a("g#",3,"e"),new o.a("e",4,"e"),new o.a("g#",4,"e"),new o.a("b",4,"e")]),d=new i.a([[r.newDuration("q"),new o.a("a",2,"e")],new o.a("e",3,"e"),new o.a("a",3,"e"),new o.a("e",4,"e"),t,e]),y=new i.a([[n.newDuration("q"),t.newOctave(2).newDuration("e")],t.newOctave(3).newDuration("e"),new o.a("g#",3,"e"),new o.a("e",4,"e"),r,n]),v=new i.a([[c,new o.a("a",2,"h")],new o.a("e",3,"e"),new o.a("a",3,"q"),t,e]),m=new u.a([f,h,p,d]),g=new u.a([f,h,y,v]),_=[l,m,g,m,g,m,g,m,g];return{bpm:120,beat:null,vol:1,piece:new a.a(120,[4,4],_),piano:s.a.note("E5")}},components:{navigation:n("bwGm").a},methods:{g:function(){this.piece.play(),this.beat=this.piece.rhythm.getBeat()},updateBPM:function(){this.piece.BPM=this.bpm},updateVol:function(){r.Howler.volume([this.vol])}}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("navigation"),t._v(" "),n("v-container",{attrs:{fluid:"","grid-list-lg":""}},[n("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[n("v-flex",{attrs:{xs12:""}},[n("h1",{staticClass:"st",staticStyle:{"text-align":"center"}},[t._v("Fur Elise")])])],1),t._v(" "),n("v-flex",{staticStyle:{"text-align":"center"},attrs:{xs12:""}},[n("v-btn",{staticClass:"general-btn",attrs:{color:"success",round:"",large:""},on:{click:t.g}},[n("v-icon",[t._v("music_note")]),t._v("Press Me!"),n("v-icon",[t._v("music_note")])],1)],1),t._v(" "),n("br"),n("br"),t._v(" "),n("v-layout",{attrs:{row:"","align-center":""}},[n("v-flex",{attrs:{xs12:""}},[n("v-slider",{staticClass:"slider",attrs:{name:"bpm",label:"BPM",min:40,max:300,step:"5","thumb-label":"always",height:"30"},on:{change:t.updateBPM},model:{value:t.bpm,callback:function(e){t.bpm=e},expression:"bpm"}})],1)],1),t._v(" "),n("v-flex",{attrs:{xs12:""}},[n("v-slider",{staticClass:"slider",attrs:{name:"volume","prepend-icon":"volume_up",min:"0",max:"1",step:"0.01",height:"30"},on:{change:t.updateVol},model:{value:t.vol,callback:function(e){t.vol=e},expression:"vol"}})],1),t._v(" "),n("v-layout",{attrs:{column:"",wrap:"","align-center":""}},[n("v-flex",{attrs:{xs12:""}},[n("v-btn",{staticClass:"general-btn",attrs:{color:"primary",fab:""},on:{click:t.piece.rhythm.toggleMetronome}},[t._v("Toggle Metronome")])],1),t._v(" "),n("v-flex",{attrs:{xs12:""}},[t.piece.rhythm.metronome?n("p",[t._v(" \n                    Current Beat:"+t._s(t.piece.rhythm.getBeat())+"\n                ")]):t._e()])],1),t._v(" "),n("br"),n("br"),n("br")],1)],1)},staticRenderFns:[]};var f=n("VU/8")(c,l,!1,function(t){n("eblY")},"data-v-55cb6c81",null);e.default=f.exports},"i/C/":function(t,e,n){n("exh5"),t.exports=n("FeBl").Object.setPrototypeOf},kiBT:function(t,e,n){t.exports={default:n("i/C/"),__esModule:!0}},mvHQ:function(t,e,n){t.exports={default:n("qkKv"),__esModule:!0}},n0T6:function(t,e,n){var r=n("Ibhu"),i=n("xnc9").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},oM7Q:function(t,e,n){n("sF+V");var r=n("FeBl").Object;t.exports=function(t,e){return r.create(t,e)}},pFYg:function(t,e,n){"use strict";e.__esModule=!0;var r=a(n("Zzip")),i=a(n("5QVw")),o="function"==typeof i.default&&"symbol"==typeof r.default?function(t){return typeof t}:function(t){return t&&"function"==typeof i.default&&t.constructor===i.default&&t!==i.default.prototype?"symbol":typeof t};function a(t){return t&&t.__esModule?t:{default:t}}e.default="function"==typeof i.default&&"symbol"===o(r.default)?function(t){return void 0===t?"undefined":o(t)}:function(t){return t&&"function"==typeof i.default&&t.constructor===i.default&&t!==i.default.prototype?"symbol":void 0===t?"undefined":o(t)}},qkKv:function(t,e,n){var r=n("FeBl"),i=r.JSON||(r.JSON={stringify:JSON.stringify});t.exports=function(t){return i.stringify.apply(i,arguments)}},rxGY:function(t,e,n){"use strict";var r=n("Zx67"),i=n.n(r),o=n("Zrlr"),a=n.n(o),u=n("wxAW"),s=n.n(u),c=n("zwoO"),l=n.n(c),f=n("Pf15"),h=n.n(f),p=n("BO1k"),d=n.n(p),y=n("D+dc"),v=function(){function t(e,n){a()(this,t),e instanceof y.b?this.tonic=e.clone():this.tonic=new y.b(e),this.pattern=n,this.notes=[this.tonic];var r=!0,i=!1,o=void 0;try{for(var u,s=d()(n);!(r=(u=s.next()).done);r=!0){var c=u.value;this.notes.push(this.tonic.getInterval(c))}}catch(t){i=!0,o=t}finally{try{!r&&s.return&&s.return()}finally{if(i)throw o}}}return s()(t,[{key:"getNotes",value:function(){return this._notes}},{key:"toString",value:function(){for(var t="",e=0;e<this.notes.length-1;++e)t+=this.notes[e]+", ";return t+=this.notes[this.notes.length-1]}},{key:"getInterval",value:function(t){for(var e=0,n=0;n<t;n++)e+=this.pattern[n];return this.tonic.getInterval(e)}},{key:"loadSound",value:function(){var t=!0,e=!1,n=void 0;try{for(var r,i=d()(this.notes);!(t=(r=i.next()).done);t=!0){r.value.loadSound()}}catch(t){e=!0,n=t}finally{try{!t&&i.return&&i.return()}finally{if(e)throw n}}}},{key:"play",value:function(){for(var t=this,e=function(e){setTimeout(function(){t.notes[e].play()},500*e)},n=0;n<this.notes.length;n++)e(n)}}]),t}(),m=n("787E");n.d(e,"a",function(){return g});var g=function(t){function e(t,n){a()(this,e);var r=l()(this,(e.__proto__||i()(e)).call(this,t,n));for(var o in r.chords=[],r.show=!1,r.notes.slice(0,7))r.chords.push(new m.a(r.notes[o],r.notes[(parseInt(o)+2)%7],r.notes[(parseInt(o)+4)%7]));return r}return h()(e,t),s()(e,[{key:"getChord",value:function(t){return void 0!=this.chords[t-1]?this.chords[t-1]:null}},{key:"getChords",value:function(){return this.chords}}]),e}(v)},"sF+V":function(t,e,n){var r=n("kM2E");r(r.S,"Object",{create:n("Yobk")})},uqUo:function(t,e,n){var r=n("kM2E"),i=n("FeBl"),o=n("S82l");t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],a={};a[t]=e(n),r(r.S+r.F*o(function(){n(1)}),"Object",a)}},zwoO:function(t,e,n){"use strict";e.__esModule=!0;var r,i=n("pFYg"),o=(r=i)&&r.__esModule?r:{default:r};e.default=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==(void 0===e?"undefined":(0,o.default)(e))&&"function"!=typeof e?t:e}}});
//# sourceMappingURL=2.5b9715cfd6c849899ec1.js.map