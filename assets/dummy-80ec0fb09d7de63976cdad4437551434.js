define("dummy/app",["exports","ember","ember/resolver","ember/load-initializers","dummy/config/environment"],function(e,t,a,n,r){"use strict";var d;t["default"].MODEL_FACTORY_INJECTIONS=!0,d=t["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:a["default"]}),n["default"](d,r["default"].modulePrefix),e["default"]=d}),define("dummy/components/input-tokenfield",["exports","ember-cli-bootstrap-tokenfield/components/input-tokenfield"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/controllers/application",["exports","ember","bloodhound"],function(e,t,a){"use strict";e["default"]=t["default"].Controller.extend({autocomplete:{source:["red","blue","green","yellow","violet","brown","purple","black","white"],delay:100},autocompletePromise:t["default"].computed(function(){var e={source:["banana","apple","watermelon","pear","grape","peach","mango"],delay:100};return new t["default"].RSVP.Promise(function(a){t["default"].run.later(function(){a(e)},3e3)})}),typeahead:function(){var e=new a["default"]({local:[{value:"red"},{value:"blue"},{value:"green"},{value:"yellow"},{value:"violet"},{value:"brown"},{value:"purple"},{value:"black"},{value:"white"}],datumTokenizer:function(e){return a["default"].tokenizers.whitespace(e.value)},queryTokenizer:a["default"].tokenizers.whitespace});return e.initialize(),[null,{source:e.ttAdapter()}]}()})}),define("dummy/controllers/array",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("dummy/controllers/object",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("dummy/initializers/app-version",["exports","dummy/config/environment","ember"],function(e,t,a){"use strict";var n=a["default"].String.classify,r=!1;e["default"]={name:"App Version",initialize:function(e,d){if(!r){var l=n(d.toString());a["default"].libraries.register(l,t["default"].APP.version),r=!0}}}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,a){"use strict";function n(e,n){var r=t["default"].String.classify(a["default"].modulePrefix);a["default"].exportApplicationGlobal&&!window[r]&&(window[r]=n)}e.initialize=n,e["default"]={name:"export-application-global",initialize:n}}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,a){"use strict";var n=t["default"].Router.extend({location:a["default"].locationType});n.map(function(){}),e["default"]=n}),define("dummy/templates/-autocomplete-promise",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.2",loc:{source:null,start:{line:1,column:0},end:{line:35,column:0}},moduleName:"dummy/templates/-autocomplete-promise.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("p"),n=e.createElement("strong"),r=e.createTextNode("Autocomplete with a promise");e.appendChild(n,r),e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("p"),n=e.createTextNode("Promises can be used to update the autocomplete object used by jQuery UI.");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","panel panel-default");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","panel-body");var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","panel-footer");var r=e.createTextNode("\n    Controller\n    ");e.appendChild(n,r);var r=e.createElement("pre"),d=e.createTextNode("// contribed example, this data is likely to come from ember-data\nautocompletePromise: Ember.computed({\n  var autocomplete = {\n    source: ['banana','apple','watermelon','pear','grape','peach','mango'],\n    delay: 100\n  };\n\n  return new Ember.RSVP.Promise(function(resolve) {\n    Ember.run.later(function() {\n      resolve( autocomplete );\n    }, 3000); // simulate a 3 seconds delay \n  });\n})");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n    Template\n");e.appendChild(n,r);var r=e.createElement("pre"),d=e.createTextNode('{{input-tokenfield value="banana,apple,watermelon" \n                   placeholder="Type something and hit enter"\n                   autocomplete=autocompletePromise\n                   showAutocompleteOnFocus=true}}');e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(1);return n[0]=e.createMorphAt(e.childAt(t,[5,1]),1,1),n},statements:[["inline","input-tokenfield",[],["value","banana,apple,watermelon","placeholder","Type something and hit enter","autocomplete",["subexpr","@mut",[["get","autocompletePromise"]],[]],"showAutocompleteOnFocus",!0]]],locals:[],templates:[]}}())}),define("dummy/templates/-autocomplete",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.2",loc:{source:null,start:{line:1,column:0},end:{line:26,column:0}},moduleName:"dummy/templates/-autocomplete.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("p"),n=e.createTextNode("Create elegant taggable fields with copy/paste and keyboard support.");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("p"),n=e.createElement("strong"),r=e.createTextNode("Using jQuery UI Autocomplete");e.appendChild(n,r),e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","panel panel-default");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","panel-body");var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","panel-footer");var r=e.createTextNode("\n    Controller\n    ");e.appendChild(n,r);var r=e.createElement("pre"),d=e.createTextNode("autocomplete: {\n  source: ['red','blue','green','yellow','violet','brown','purple','black','white'],\n  delay: 100\n}");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n    Template\n");e.appendChild(n,r);var r=e.createElement("pre"),d=e.createTextNode('{{input-tokenfield value="red,green,blue" \n                   placeholder="Type something and hit enter"\n                   autocomplete=autocomplete\n                   showAutocompleteOnFocus=true}}');e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(1);return n[0]=e.createMorphAt(e.childAt(t,[5,1]),1,1),n},statements:[["inline","input-tokenfield",[],["value","red,green,blue","placeholder","Type something and hit enter","autocomplete",["subexpr","@mut",[["get","autocomplete"]],[]],"showAutocompleteOnFocus",!0]]],locals:[],templates:[]}}())}),define("dummy/templates/-typeahead",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.2",loc:{source:null,start:{line:1,column:0},end:{line:32,column:0}},moduleName:"dummy/templates/-typeahead.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("p"),n=e.createElement("strong"),r=e.createTextNode("Using Twitter Typeahead");e.appendChild(n,r),e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","panel panel-default");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","panel-body");var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","panel-footer");var r=e.createTextNode("\n    Controller\n");e.appendChild(n,r);var r=e.createElement("pre"),d=e.createTextNode("typeahead: (function() {\n  var engine = new Bloodhound({\n    local: [{value: 'red'}, {value: 'blue'}, {value: 'green'} , \n            {value: 'yellow'}, {value: 'violet'}, {value: 'brown'}, \n            {value: 'purple'}, {value: 'black'}, {value: 'white'}],\n    datumTokenizer: function(d) {\n      return Bloodhound.tokenizers.whitespace(d.value);\n    },\n    queryTokenizer: Bloodhound.tokenizers.whitespace\n  });\n  engine.initialize();\n\n  return [null, { source: engine.ttAdapter() }];\n})()");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n      Template\n");e.appendChild(n,r);var r=e.createElement("pre"),d=e.createTextNode('{{input-tokenfield value="red,green,blue"\n                   placeholder="Type something and hit enter"\n                   typeahead=typeahead}}');e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(1);return n[0]=e.createMorphAt(e.childAt(t,[3,1]),1,1),n},statements:[["inline","input-tokenfield",[],["value","red,green,blue","placeholder","Type something and hit enter","typeahead",["subexpr","@mut",[["get","typeahead"]],[]]]]],locals:[],templates:[]}}())}),define("dummy/templates/application",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.2",loc:{source:null,start:{line:1,column:0},end:{line:41,column:0}},moduleName:"dummy/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("a");e.setAttribute(a,"href","https://github.com/aethermx/ember-cli-bootstrap-tokenfield");var n=e.createElement("img");e.setAttribute(n,"style","position: absolute; top: 0; right: 0; border: 0;"),e.setAttribute(n,"src","https://camo.githubusercontent.com/652c5b9acfaddf3a9c326fa6bde407b87f7be0f4/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6f72616e67655f6666373630302e706e67"),e.setAttribute(n,"alt","Fork me on GitHub"),e.setAttribute(n,"data-canonical-src","https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png"),e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","container");var n=e.createTextNode("\n\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","row");var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","col-xs-12");var d=e.createTextNode("\n\n      ");e.appendChild(r,d);var d=e.createElement("div");e.setAttribute(d,"class","page-header");var l=e.createTextNode("\n        ");e.appendChild(d,l);var l=e.createElement("h1");e.setAttribute(l,"id","tokenfield");var o=e.createTextNode("Tokenfield");e.appendChild(l,o),e.appendChild(d,l);var l=e.createTextNode("\n      ");e.appendChild(d,l),e.appendChild(r,d);var d=e.createTextNode("\n\n      ");e.appendChild(r,d);var d=e.createElement("h2"),l=e.createTextNode("Install addon");e.appendChild(d,l),e.appendChild(r,d);var d=e.createTextNode("\n\n      ");e.appendChild(r,d);var d=e.createElement("code"),l=e.createTextNode("\n        ember install ember-cli-bootstrap-tokenfield\n      ");e.appendChild(d,l),e.appendChild(r,d);var d=e.createTextNode("\n      ");e.appendChild(r,d);var d=e.createElement("br");e.appendChild(r,d);var d=e.createTextNode("\n      ");e.appendChild(r,d);var d=e.createElement("br");e.appendChild(r,d);var d=e.createTextNode("\n      ");e.appendChild(r,d);var d=e.createElement("code"),l=e.createTextNode("\n        # if ember-cli <= 0.2.2\n      ");e.appendChild(d,l),e.appendChild(r,d);var d=e.createTextNode("\n      ");e.appendChild(r,d);var d=e.createElement("br");e.appendChild(r,d);var d=e.createTextNode("\n      ");e.appendChild(r,d);var d=e.createElement("code"),l=e.createTextNode("\n        ember install:addon ember-cli-bootstrap-tokenfield\n      ");e.appendChild(d,l),e.appendChild(r,d);var d=e.createTextNode("\n\n      ");e.appendChild(r,d);var d=e.createElement("h2");e.setAttribute(d,"id","examples");var l=e.createTextNode("Examples");e.appendChild(d,l),e.appendChild(r,d);var d=e.createTextNode("\n\n      ");e.appendChild(r,d);var d=e.createComment("");e.appendChild(r,d);var d=e.createTextNode("\n\n      ");e.appendChild(r,d);var d=e.createComment("");e.appendChild(r,d);var d=e.createTextNode("\n\n      ");e.appendChild(r,d);var d=e.createComment("");e.appendChild(r,d);var d=e.createTextNode("\n\n    ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createComment(" col ");e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createComment(" row ");e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createComment(" container ");e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=e.childAt(t,[3,1,1]),r=new Array(4);return r[0]=e.createMorphAt(n,19,19),r[1]=e.createMorphAt(n,21,21),r[2]=e.createMorphAt(n,23,23),r[3]=e.createMorphAt(t,6,6,a),r},statements:[["inline","partial",["autocomplete"],[]],["inline","partial",["autocomplete-promise"],[]],["inline","partial",["typeahead"],[]],["content","outlet"]],locals:[],templates:[]}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var a=t+"/config/environment",n=e["default"].$('meta[name="'+a+'"]').attr("content"),r=JSON.parse(unescape(n));return{"default":r}}catch(d){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests?require("dummy/tests/test-helper"):require("dummy/app")["default"].create({name:"ember-cli-bootstrap-tokenfield",version:"0.0.4.ac06b92f"});