// Compiled by ClojureScript 0.0-2127
goog.provide('cloact.impl.template');
goog.require('cljs.core');
goog.require('cloact.debug');
goog.require('cloact.impl.util');
goog.require('cloact.impl.util');
goog.require('cloact.impl.reactimport');
goog.require('cloact.impl.reactimport');
goog.require('clojure.string');
goog.require('clojure.string');
cloact.impl.template.React = cloact.impl.reactimport.React;
cloact.impl.template.cljs_props = "cljsProps";
cloact.impl.template.cljs_children = "cljsChildren";
cloact.impl.template.isClient = !(((function (){try{return window.document;
}catch (e6269){if((e6269 instanceof Object))
{var e = e6269;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e6269;
} else
{return null;
}
}
}})() == null));
cloact.impl.template.dash_to_camel = (function dash_to_camel(dashed){var words = clojure.string.split.call(null,cljs.core.name.call(null,dashed),/-/);return cljs.core.apply.call(null,cljs.core.str,cljs.core.first.call(null,words),cljs.core.map.call(null,clojure.string.capitalize,cljs.core.rest.call(null,words)));
});
cloact.impl.template.attr_aliases = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",1108647146),"className",new cljs.core.Keyword(null,"for","for",1014005819),"htmlFor",new cljs.core.Keyword(null,"charset","charset",1752978622),"charSet"], null);
cloact.impl.template.undash_prop_name = (function undash_prop_name(n){var or__3405__auto__ = cloact.impl.template.attr_aliases.call(null,n);if(cljs.core.truth_(or__3405__auto__))
{return or__3405__auto__;
} else
{return cloact.impl.template.dash_to_camel.call(null,n);
}
});
cloact.impl.template.cached_prop_name = cljs.core.memoize.call(null,cloact.impl.template.undash_prop_name);
cloact.impl.template.cached_style_name = cljs.core.memoize.call(null,cloact.impl.template.dash_to_camel);
cloact.impl.template.convert_prop_value = (function convert_prop_value(val){if(cljs.core.map_QMARK_.call(null,val))
{var obj = (function (){var obj6279 = {};return obj6279;
})();var seq__6280_6286 = cljs.core.seq.call(null,val);var chunk__6281_6287 = null;var count__6282_6288 = 0;var i__6283_6289 = 0;while(true){
if((i__6283_6289 < count__6282_6288))
{var vec__6284_6290 = cljs.core._nth.call(null,chunk__6281_6287,i__6283_6289);var k_6291 = cljs.core.nth.call(null,vec__6284_6290,0,null);var v_6292 = cljs.core.nth.call(null,vec__6284_6290,1,null);(obj[cloact.impl.template.cached_style_name.call(null,k_6291)] = cljs.core.clj__GT_js.call(null,v_6292));
{
var G__6293 = seq__6280_6286;
var G__6294 = chunk__6281_6287;
var G__6295 = count__6282_6288;
var G__6296 = (i__6283_6289 + 1);
seq__6280_6286 = G__6293;
chunk__6281_6287 = G__6294;
count__6282_6288 = G__6295;
i__6283_6289 = G__6296;
continue;
}
} else
{var temp__4092__auto___6297 = cljs.core.seq.call(null,seq__6280_6286);if(temp__4092__auto___6297)
{var seq__6280_6298__$1 = temp__4092__auto___6297;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6280_6298__$1))
{var c__4134__auto___6299 = cljs.core.chunk_first.call(null,seq__6280_6298__$1);{
var G__6300 = cljs.core.chunk_rest.call(null,seq__6280_6298__$1);
var G__6301 = c__4134__auto___6299;
var G__6302 = cljs.core.count.call(null,c__4134__auto___6299);
var G__6303 = 0;
seq__6280_6286 = G__6300;
chunk__6281_6287 = G__6301;
count__6282_6288 = G__6302;
i__6283_6289 = G__6303;
continue;
}
} else
{var vec__6285_6304 = cljs.core.first.call(null,seq__6280_6298__$1);var k_6305 = cljs.core.nth.call(null,vec__6285_6304,0,null);var v_6306 = cljs.core.nth.call(null,vec__6285_6304,1,null);(obj[cloact.impl.template.cached_style_name.call(null,k_6305)] = cljs.core.clj__GT_js.call(null,v_6306));
{
var G__6307 = cljs.core.next.call(null,seq__6280_6298__$1);
var G__6308 = null;
var G__6309 = 0;
var G__6310 = 0;
seq__6280_6286 = G__6307;
chunk__6281_6287 = G__6308;
count__6282_6288 = G__6309;
i__6283_6289 = G__6310;
continue;
}
}
} else
{}
}
break;
}
return obj;
} else
{if(cljs.core.ifn_QMARK_.call(null,val))
{return (function() { 
var G__6311__delegate = function (args){return cljs.core.apply.call(null,val,args);
};
var G__6311 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__6311__delegate.call(this,args);};
G__6311.cljs$lang$maxFixedArity = 0;
G__6311.cljs$lang$applyTo = (function (arglist__6312){
var args = cljs.core.seq(arglist__6312);
return G__6311__delegate(args);
});
G__6311.cljs$core$IFn$_invoke$arity$variadic = G__6311__delegate;
return G__6311;
})()
;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.clj__GT_js.call(null,val);
} else
{return null;
}
}
}
});
cloact.impl.template.set_id_class = (function set_id_class(props,p__6313){var vec__6315 = p__6313;var id = cljs.core.nth.call(null,vec__6315,0,null);var class$ = cljs.core.nth.call(null,vec__6315,1,null);(props["id"] = id);
if(cljs.core.truth_(class$))
{return (props["className"] = (function (){var temp__4090__auto__ = (props["className"]);if(cljs.core.truth_(temp__4090__auto__))
{var old = temp__4090__auto__;return [cljs.core.str(class$),cljs.core.str(" "),cljs.core.str(old)].join('');
} else
{return class$;
}
})());
} else
{return null;
}
});
cloact.impl.template.convert_props = (function convert_props(props,id_class){var is_empty = cljs.core.empty_QMARK_.call(null,props);if((is_empty) && ((id_class == null)))
{return null;
} else
{if((cljs.core.type.call(null,props) === Object))
{return props;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var objprops = (function (){var obj6325 = {};return obj6325;
})();if(is_empty)
{} else
{var seq__6326_6332 = cljs.core.seq.call(null,props);var chunk__6327_6333 = null;var count__6328_6334 = 0;var i__6329_6335 = 0;while(true){
if((i__6329_6335 < count__6328_6334))
{var vec__6330_6336 = cljs.core._nth.call(null,chunk__6327_6333,i__6329_6335);var k_6337 = cljs.core.nth.call(null,vec__6330_6336,0,null);var v_6338 = cljs.core.nth.call(null,vec__6330_6336,1,null);(objprops[cloact.impl.template.cached_prop_name.call(null,k_6337)] = cloact.impl.template.convert_prop_value.call(null,v_6338));
{
var G__6339 = seq__6326_6332;
var G__6340 = chunk__6327_6333;
var G__6341 = count__6328_6334;
var G__6342 = (i__6329_6335 + 1);
seq__6326_6332 = G__6339;
chunk__6327_6333 = G__6340;
count__6328_6334 = G__6341;
i__6329_6335 = G__6342;
continue;
}
} else
{var temp__4092__auto___6343 = cljs.core.seq.call(null,seq__6326_6332);if(temp__4092__auto___6343)
{var seq__6326_6344__$1 = temp__4092__auto___6343;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6326_6344__$1))
{var c__4134__auto___6345 = cljs.core.chunk_first.call(null,seq__6326_6344__$1);{
var G__6346 = cljs.core.chunk_rest.call(null,seq__6326_6344__$1);
var G__6347 = c__4134__auto___6345;
var G__6348 = cljs.core.count.call(null,c__4134__auto___6345);
var G__6349 = 0;
seq__6326_6332 = G__6346;
chunk__6327_6333 = G__6347;
count__6328_6334 = G__6348;
i__6329_6335 = G__6349;
continue;
}
} else
{var vec__6331_6350 = cljs.core.first.call(null,seq__6326_6344__$1);var k_6351 = cljs.core.nth.call(null,vec__6331_6350,0,null);var v_6352 = cljs.core.nth.call(null,vec__6331_6350,1,null);(objprops[cloact.impl.template.cached_prop_name.call(null,k_6351)] = cloact.impl.template.convert_prop_value.call(null,v_6352));
{
var G__6353 = cljs.core.next.call(null,seq__6326_6344__$1);
var G__6354 = null;
var G__6355 = 0;
var G__6356 = 0;
seq__6326_6332 = G__6353;
chunk__6327_6333 = G__6354;
count__6328_6334 = G__6355;
i__6329_6335 = G__6356;
continue;
}
}
} else
{}
}
break;
}
}
if((id_class == null))
{} else
{cloact.impl.template.set_id_class.call(null,objprops,id_class);
}
return objprops;
} else
{return null;
}
}
}
});
cloact.impl.template.map_into_array = (function map_into_array(f,coll){var a = cljs.core.into_array.call(null,coll);var n__4233__auto___6357 = a.length;var i_6358 = 0;while(true){
if((i_6358 < n__4233__auto___6357))
{(a[i_6358] = f.call(null,(a[i_6358])));
{
var G__6359 = (i_6358 + 1);
i_6358 = G__6359;
continue;
}
} else
{}
break;
}
return a;
});
cloact.impl.template.wrapped_render = (function wrapped_render(this$,comp,id_class){var inprops = (this$["props"]);var props = (inprops[cloact.impl.template.cljs_props]);var hasprops = ((props == null)) || (cljs.core.map_QMARK_.call(null,props));var jsargs = cloact.impl.template.map_into_array.call(null,cloact.impl.template.as_component,(inprops[cloact.impl.template.cljs_children]));jsargs.unshift(cloact.impl.template.convert_props.call(null,props,id_class));
return comp.apply(null,jsargs);
});
cloact.impl.template.wrapped_should_update = (function wrapped_should_update(C,nextprops,nextstate){var inprops = (C["props"]);var p1 = (inprops[cloact.impl.template.cljs_props]);var c1 = (inprops[cloact.impl.template.cljs_children]);var p2 = (nextprops[cloact.impl.template.cljs_props]);var c2 = (nextprops[cloact.impl.template.cljs_children]);return cljs.core.not.call(null,cloact.impl.util.equal_args.call(null,p1,c1,p2,c2));
});
cloact.impl.template.wrap_component = (function wrap_component(comp,extras){return cloact.impl.template.React.createClass((function (){var obj6365 = {"render":(function (){var C = this;return cloact.impl.template.wrapped_render.call(null,C,comp,extras);
}),"shouldComponentUpdate":(function (p1__6360_SHARP_,p2__6361_SHARP_){var C = this;return cloact.impl.template.wrapped_should_update.call(null,C,p1__6360_SHARP_,p2__6361_SHARP_);
})};return obj6365;
})());
});
/**
* Regular expression that parses a CSS-style id and class
* from a tag name.
*/
cloact.impl.template.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
cloact.impl.template.DOM = (cloact.impl.template.React["DOM"]);
cloact.impl.template.parse_tag = (function parse_tag(tag){var vec__6367 = cljs.core.next.call(null,cljs.core.re_matches.call(null,cloact.impl.template.re_tag,cljs.core.name.call(null,tag)));var tag__$1 = cljs.core.nth.call(null,vec__6367,0,null);var id = cljs.core.nth.call(null,vec__6367,1,null);var class$ = cljs.core.nth.call(null,vec__6367,2,null);var comp = (cloact.impl.template.DOM[tag__$1]);var class_SINGLEQUOTE_ = (cljs.core.truth_(class$)?clojure.string.replace.call(null,class$,/\./," "):null);if(cljs.core.truth_(comp))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Unknown tag: "),cljs.core.str(tag__$1)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"comp","comp",-1637472056,null)))].join('')));
}
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,(cljs.core.truth_((function (){var or__3405__auto__ = id;if(cljs.core.truth_(or__3405__auto__))
{return or__3405__auto__;
} else
{return class_SINGLEQUOTE_;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,class_SINGLEQUOTE_], null):null)], null);
});
cloact.impl.template.get_wrapper = (function get_wrapper(tag){var vec__6369 = cloact.impl.template.parse_tag.call(null,tag);var comp = cljs.core.nth.call(null,vec__6369,0,null);var id_class = cljs.core.nth.call(null,vec__6369,1,null);return cloact.impl.template.wrap_component.call(null,comp,id_class);
});
cloact.impl.template.cached_wrapper = cljs.core.memoize.call(null,cloact.impl.template.get_wrapper);
cloact.impl.template.fn_to_class = (function fn_to_class(f){var spec = cljs.core.meta.call(null,f);var withrender = cljs.core.merge.call(null,spec,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",4374279432),f], null));var res = cloact.core.create_class.call(null,withrender);var wrapf = res.cljsReactClass;f.cljsReactClass = wrapf;
return wrapf;
});
cloact.impl.template.as_class = (function as_class(tag){if((tag instanceof cljs.core.Keyword))
{return cloact.impl.template.cached_wrapper.call(null,tag);
} else
{if(cljs.core.fn_QMARK_.call(null,tag))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",-1640430032,null),new cljs.core.Symbol(null,"tag","tag",-1640416941,null))))].join('')));
}
var cached_class = tag.cljsReactClass;if(!((cached_class == null)))
{return cached_class;
} else
{if(cljs.core.truth_(cloact.impl.template.React.isValidClass(tag)))
{return tag.cljsReactClass = cloact.impl.template.wrap_component.call(null,tag,null);
} else
{return cloact.impl.template.fn_to_class.call(null,tag);
}
}
}
});
cloact.impl.template.vec_to_comp = (function vec_to_comp(v){if((cljs.core.count.call(null,v) > 0))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-1637084636,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"v","v",-1640531409,null)))))].join('')));
}
var vec__6373 = v;var tag = cljs.core.nth.call(null,vec__6373,0,null);var props = cljs.core.nth.call(null,vec__6373,1,null);var hasmap = cljs.core.map_QMARK_.call(null,props);var first_child = (((hasmap) || ((props == null)))?2:1);var c = cloact.impl.template.as_class.call(null,tag);var jsprops = (function (){var obj6375 = {};(obj6375[cloact.impl.template.cljs_props] = ((hasmap)?props:null));
(obj6375[cloact.impl.template.cljs_children] = (((cljs.core.count.call(null,v) > first_child))?cljs.core.subvec.call(null,v,first_child):null));
return obj6375;
})();if(hasmap)
{var key_6376 = new cljs.core.Keyword(null,"key","key",1014010321).cljs$core$IFn$_invoke$arity$1(props);if((key_6376 == null))
{} else
{(jsprops["key"] = key_6376);
}
} else
{}
return c.call(null,jsprops);
});
cloact.impl.template.as_component = (function as_component(x){if(cljs.core.vector_QMARK_.call(null,x))
{return cloact.impl.template.vec_to_comp.call(null,x);
} else
{if(cljs.core.seq_QMARK_.call(null,x))
{return cloact.impl.template.map_into_array.call(null,as_component,x);
} else
{if(true)
{return x;
} else
{return null;
}
}
}
});

//# sourceMappingURL=template.js.map