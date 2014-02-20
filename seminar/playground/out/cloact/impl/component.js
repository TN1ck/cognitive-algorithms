// Compiled by ClojureScript 0.0-2127
goog.provide('cloact.impl.component');
goog.require('cljs.core');
goog.require('cloact.impl.template');
goog.require('cloact.debug');
goog.require('cloact.ratom');
goog.require('cloact.ratom');
goog.require('cloact.impl.util');
goog.require('cloact.impl.util');
goog.require('cloact.impl.template');
goog.require('cloact.impl.template');
cloact.impl.component.cljs_state = "cljsState";
cloact.impl.component.state = (function state(this$){return (this$[cloact.impl.component.cljs_state]);
});
cloact.impl.component.replace_state = (function replace_state(this$,new_state){var old_state = cloact.impl.component.state.call(null,this$);if((old_state === new_state))
{return null;
} else
{(this$[cloact.impl.component.cljs_state] = new_state);
return this$.forceUpdate();
}
});
cloact.impl.component.set_state = (function set_state(this$,new_state){return cloact.impl.component.replace_state.call(null,this$,cljs.core.merge.call(null,cloact.impl.component.state.call(null,this$),new_state));
});
cloact.impl.component.js_props = (function js_props(C){return (C["props"]);
});
cloact.impl.component.props_in_props = (function props_in_props(props){return (props[cloact.impl.template.cljs_props]);
});
cloact.impl.component.get_props = (function get_props(C){return cloact.impl.component.props_in_props.call(null,cloact.impl.component.js_props.call(null,C));
});
cloact.impl.component.get_children = (function get_children(C){return (cloact.impl.template.cljs_children[cloact.impl.component.js_props.call(null,C)]);
});
cloact.impl.component.replace_props = (function replace_props(C,newprops){return C.setProps((function (){var obj6224 = {};(obj6224[cloact.impl.template.cljs_props] = newprops);
return obj6224;
})());
});
cloact.impl.component.set_props = (function set_props(C,newprops){return cloact.impl.component.replace_props.call(null,C,cljs.core.merge.call(null,cloact.impl.component.get_props.call(null,C),newprops));
});
cloact.impl.component.do_render = (function do_render(C,f){var p = cloact.impl.component.js_props.call(null,C);var props = cloact.impl.component.props_in_props.call(null,p);var children = (p[cloact.impl.template.cljs_children]);var res = f.call(null,props,children,C);var conv = ((cljs.core.vector_QMARK_.call(null,res))?cloact.impl.template.as_component.call(null,res):((cljs.core.fn_QMARK_.call(null,res))?do_render.call(null,C,C.cljsRenderFn = res):res));return conv;
});
cloact.impl.component.render = (function render(C){if(cljs.core.truth_(C))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"C","C",-1640531460,null)))].join('')));
}
if((C.cljsRatom == null))
{C.cljsRatom = cloact.ratom.make_reaction.call(null,(function (){return cloact.impl.component.do_render.call(null,C,C.cljsRenderFn);
}),new cljs.core.Keyword(null,"auto-run","auto-run",2451476703),(cljs.core.truth_(cloact.impl.template.isClient)?(function (){return C.forceUpdate();
}):cljs.core.identity));
} else
{}
return cloact.ratom.run.call(null,C.cljsRatom);
});
cloact.impl.component.custom_wrapper = (function custom_wrapper(key,f){var G__6226 = key;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"render","render",4374279432),G__6226))
{return (function (C){if((C.cljsRenderFn == null))
{C.cljsRenderFn = f;
} else
{}
return cloact.impl.component.render.call(null,C);
});
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",4147620643),G__6226))
{return (function (C){cloact.ratom.dispose_BANG_.call(null,C.cljsRatom);
if(cljs.core.truth_(f))
{return f.call(null,C);
} else
{return null;
}
});
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",4103164189),G__6226))
{return (function (C,oldprops){var inprops = cloact.impl.component.js_props.call(null,C);var p = (inprops[cloact.impl.template.cljs_props]);var c = (inprops[cloact.impl.template.cljs_children]);return f.call(null,C,p,c);
});
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",3193956709),G__6226))
{return (function (C,nextprops,nextstate){var inprops = cloact.impl.component.js_props.call(null,C);var p1 = (inprops[cloact.impl.template.cljs_props]);var c1 = (inprops[cloact.impl.template.cljs_children]);var p2 = (nextprops[cloact.impl.template.cljs_props]);var c2 = (nextprops[cloact.impl.template.cljs_children]);if((f == null))
{return cljs.core.not.call(null,cloact.impl.util.equal_args.call(null,p1,c1,p2,c2));
} else
{return f.call(null,C,p1,p2,c1,c2);
}
});
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",2122862542),G__6226))
{return (function (C,props){if(cljs.core.truth_(f))
{return f.call(null,C,cloact.impl.component.props_in_props.call(null,props));
} else
{return null;
}
});
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"getInitialState","getInitialState",2219830677),G__6226))
{return (function (C){if(cljs.core.truth_(f))
{return (C[cloact.impl.component.cljs_state] = cljs.core.merge.call(null,cloact.impl.component.state.call(null,C),f.call(null,C)));
} else
{return null;
}
});
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"getDefaultProps","getDefaultProps",1976256919),G__6226))
{if(false)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("getDefaultProps not supported yet"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,false))].join('')));
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
}
}
}
}
}
});
cloact.impl.component.default_wrapper = (function default_wrapper(f){if(cljs.core.fn_QMARK_.call(null,f))
{return (function() { 
var G__6227__delegate = function (args){var C = this;return cljs.core.apply.call(null,f,C,args);
};
var G__6227 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__6227__delegate.call(this,args);};
G__6227.cljs$lang$maxFixedArity = 0;
G__6227.cljs$lang$applyTo = (function (arglist__6228){
var args = cljs.core.seq(arglist__6228);
return G__6227__delegate(args);
});
G__6227.cljs$core$IFn$_invoke$arity$variadic = G__6227__delegate;
return G__6227;
})()
;
} else
{return f;
}
});
cloact.impl.component.get_wrapper = (function get_wrapper(key,f,name){var wrap = cloact.impl.component.custom_wrapper.call(null,key,f);if(cljs.core.truth_((function (){var and__3393__auto__ = wrap;if(cljs.core.truth_(and__3393__auto__))
{return f;
} else
{return and__3393__auto__;
}
})()))
{if(cljs.core.fn_QMARK_.call(null,f))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Expected function in "),cljs.core.str(name),cljs.core.str(key),cljs.core.str(" but got "),cljs.core.str(f)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",-1640430032,null),new cljs.core.Symbol(null,"f","f",-1640531425,null))))].join('')));
}
} else
{}
return cloact.impl.component.default_wrapper.call(null,(function (){var or__3405__auto__ = wrap;if(cljs.core.truth_(or__3405__auto__))
{return or__3405__auto__;
} else
{return f;
}
})());
});
cloact.impl.component.obligatory = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",3193956709),null,new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",4147620643),null], null);
cloact.impl.component.camelify_map_keys = (function camelify_map_keys(m){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4103__auto__ = (function iter__6237(s__6238){return (new cljs.core.LazySeq(null,(function (){var s__6238__$1 = s__6238;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__6238__$1);if(temp__4092__auto__)
{var s__6238__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__6238__$2))
{var c__4101__auto__ = cljs.core.chunk_first.call(null,s__6238__$2);var size__4102__auto__ = cljs.core.count.call(null,c__4101__auto__);var b__6240 = cljs.core.chunk_buffer.call(null,size__4102__auto__);if((function (){var i__6239 = 0;while(true){
if((i__6239 < size__4102__auto__))
{var vec__6243 = cljs.core._nth.call(null,c__4101__auto__,i__6239);var k = cljs.core.nth.call(null,vec__6243,0,null);var v = cljs.core.nth.call(null,vec__6243,1,null);cljs.core.chunk_append.call(null,b__6240,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,cloact.impl.template.dash_to_camel.call(null,k)),v], null));
{
var G__6245 = (i__6239 + 1);
i__6239 = G__6245;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6240),iter__6237.call(null,cljs.core.chunk_rest.call(null,s__6238__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6240),null);
}
} else
{var vec__6244 = cljs.core.first.call(null,s__6238__$2);var k = cljs.core.nth.call(null,vec__6244,0,null);var v = cljs.core.nth.call(null,vec__6244,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,cloact.impl.template.dash_to_camel.call(null,k)),v], null),iter__6237.call(null,cljs.core.rest.call(null,s__6238__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4103__auto__.call(null,m);
})());
});
cloact.impl.component.add_obligatory = (function add_obligatory(fun_map){return cljs.core.merge.call(null,cloact.impl.component.obligatory,fun_map);
});
cloact.impl.component.wrap_funs = (function wrap_funs(fun_map){var name = (function (){var or__3405__auto__ = new cljs.core.Keyword(null,"displayName","displayName",2728053215).cljs$core$IFn$_invoke$arity$1(fun_map);if(cljs.core.truth_(or__3405__auto__))
{return or__3405__auto__;
} else
{var temp__4092__auto__ = new cljs.core.Keyword(null,"render","render",4374279432).cljs$core$IFn$_invoke$arity$1(fun_map);if(cljs.core.truth_(temp__4092__auto__))
{var r = temp__4092__auto__;var or__3405__auto____$1 = r.displayName;if(cljs.core.truth_(or__3405__auto____$1))
{return or__3405__auto____$1;
} else
{return r.name;
}
} else
{return null;
}
}
})();var name1 = ((cljs.core.empty_QMARK_.call(null,name))?[cljs.core.str(cljs.core.gensym.call(null,"cloact"))].join(''):name);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4103__auto__ = (function iter__6254(s__6255){return (new cljs.core.LazySeq(null,(function (){var s__6255__$1 = s__6255;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__6255__$1);if(temp__4092__auto__)
{var s__6255__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__6255__$2))
{var c__4101__auto__ = cljs.core.chunk_first.call(null,s__6255__$2);var size__4102__auto__ = cljs.core.count.call(null,c__4101__auto__);var b__6257 = cljs.core.chunk_buffer.call(null,size__4102__auto__);if((function (){var i__6256 = 0;while(true){
if((i__6256 < size__4102__auto__))
{var vec__6260 = cljs.core._nth.call(null,c__4101__auto__,i__6256);var k = cljs.core.nth.call(null,vec__6260,0,null);var v = cljs.core.nth.call(null,vec__6260,1,null);cljs.core.chunk_append.call(null,b__6257,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cloact.impl.component.get_wrapper.call(null,k,v,name1)], null));
{
var G__6262 = (i__6256 + 1);
i__6256 = G__6262;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6257),iter__6254.call(null,cljs.core.chunk_rest.call(null,s__6255__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6257),null);
}
} else
{var vec__6261 = cljs.core.first.call(null,s__6255__$2);var k = cljs.core.nth.call(null,vec__6261,0,null);var v = cljs.core.nth.call(null,vec__6261,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cloact.impl.component.get_wrapper.call(null,k,v,name1)], null),iter__6254.call(null,cljs.core.rest.call(null,s__6255__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4103__auto__.call(null,cljs.core.assoc.call(null,fun_map,new cljs.core.Keyword(null,"displayName","displayName",2728053215),name1));
})());
});
cloact.impl.component.cljsify = (function cljsify(body){return cljs.core.clj__GT_js.call(null,cloact.impl.component.wrap_funs.call(null,cloact.impl.component.add_obligatory.call(null,cloact.impl.component.camelify_map_keys.call(null,body))));
});
cloact.impl.component.create_class = (function create_class(body){if(cljs.core.map_QMARK_.call(null,body))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1637187556,null),new cljs.core.Symbol(null,"body","body",-1637502117,null))))].join('')));
}
var spec = cloact.impl.component.cljsify.call(null,body);var res = cloact.impl.template.React.createClass(spec);var f = ((function (spec,res){
return (function() { 
var G__6267__delegate = function (args){var props = cljs.core.nth.call(null,args,0,null);var hasmap = cljs.core.map_QMARK_.call(null,props);var first_child = (((hasmap) || ((props == null)))?1:0);return res.call(null,(function (){var obj6266 = {};(obj6266[cloact.impl.template.cljs_props] = ((hasmap)?props:null));
(obj6266[cloact.impl.template.cljs_children] = (((cljs.core.count.call(null,args) > first_child))?cljs.core.subvec.call(null,args,first_child):null));
return obj6266;
})());
};
var G__6267 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__6267__delegate.call(this,args);};
G__6267.cljs$lang$maxFixedArity = 0;
G__6267.cljs$lang$applyTo = (function (arglist__6268){
var args = cljs.core.seq(arglist__6268);
return G__6267__delegate(args);
});
G__6267.cljs$core$IFn$_invoke$arity$variadic = G__6267__delegate;
return G__6267;
})()
;})(spec,res))
;f.cljsReactClass = res;
res.cljsReactClass = res;
return f;
});

//# sourceMappingURL=component.js.map