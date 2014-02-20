// Compiled by ClojureScript 0.0-2127
goog.provide('cloact.ratom');
goog.require('cljs.core');
cloact.ratom._running = cljs.core.atom.call(null,0);
cloact.ratom.running = (function running(){return cljs.core.deref.call(null,cloact.ratom._running);
});
cloact.ratom.capture_derefed = (function capture_derefed(f){var _STAR_ratom_context_STAR_6086 = cloact.ratom._STAR_ratom_context_STAR_;try{cloact.ratom._STAR_ratom_context_STAR_ = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null),cljs.core.deref.call(null,cloact.ratom._STAR_ratom_context_STAR_)], null);
}finally {cloact.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_6086;
}});
cloact.ratom.notify_deref_watcher_BANG_ = (function notify_deref_watcher_BANG_(derefable){if((cloact.ratom._STAR_ratom_context_STAR_ == null))
{return null;
} else
{return cljs.core.swap_BANG_.call(null,cloact.ratom._STAR_ratom_context_STAR_,cljs.core.conj,derefable);
}
});

/**
* @constructor
*/
cloact.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
cloact.ratom.RAtom.cljs$lang$type = true;
cloact.ratom.RAtom.cljs$lang$ctorStr = "cloact.ratom/RAtom";
cloact.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__3954__auto__,writer__3955__auto__,opt__3956__auto__){return cljs.core._write.call(null,writer__3955__auto__,"cloact.ratom/RAtom");
});
cloact.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
cloact.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__6087 = cljs.core.seq.call(null,self__.watches);var chunk__6088 = null;var count__6089 = 0;var i__6090 = 0;while(true){
if((i__6090 < count__6089))
{var vec__6091 = cljs.core._nth.call(null,chunk__6088,i__6090);var key = cljs.core.nth.call(null,vec__6091,0,null);var f = cljs.core.nth.call(null,vec__6091,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__6093 = seq__6087;
var G__6094 = chunk__6088;
var G__6095 = count__6089;
var G__6096 = (i__6090 + 1);
seq__6087 = G__6093;
chunk__6088 = G__6094;
count__6089 = G__6095;
i__6090 = G__6096;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6087);if(temp__4092__auto__)
{var seq__6087__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6087__$1))
{var c__4134__auto__ = cljs.core.chunk_first.call(null,seq__6087__$1);{
var G__6097 = cljs.core.chunk_rest.call(null,seq__6087__$1);
var G__6098 = c__4134__auto__;
var G__6099 = cljs.core.count.call(null,c__4134__auto__);
var G__6100 = 0;
seq__6087 = G__6097;
chunk__6088 = G__6098;
count__6089 = G__6099;
i__6090 = G__6100;
continue;
}
} else
{var vec__6092 = cljs.core.first.call(null,seq__6087__$1);var key = cljs.core.nth.call(null,vec__6092,0,null);var f = cljs.core.nth.call(null,vec__6092,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__6101 = cljs.core.next.call(null,seq__6087__$1);
var G__6102 = null;
var G__6103 = 0;
var G__6104 = 0;
seq__6087 = G__6101;
chunk__6088 = G__6102;
count__6089 = G__6103;
i__6090 = G__6104;
continue;
}
}
} else
{return null;
}
}
break;
}
});
cloact.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});
cloact.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key);
});
cloact.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){var self__ = this;
var a__$1 = this;cljs.core._write.call(null,writer,"#<Atom: ");
cljs.core.pr_writer.call(null,self__.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
cloact.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.meta;
});
cloact.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;cloact.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);
return self__.state;
});
cloact.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
cloact.ratom.__GT_RAtom = (function __GT_RAtom(state,meta,validator,watches){return (new cloact.ratom.RAtom(state,meta,validator,watches));
});
/**
* Like clojure.core/atom, except that it keeps track of derefs.
* @param {...*} var_args
*/
cloact.ratom.atom = (function() {
var atom = null;
var atom__1 = (function (x){return (new cloact.ratom.RAtom(x,null,null,null));
});
var atom__2 = (function() { 
var G__6108__delegate = function (x,p__6105){var map__6107 = p__6105;var map__6107__$1 = ((cljs.core.seq_QMARK_.call(null,map__6107))?cljs.core.apply.call(null,cljs.core.hash_map,map__6107):map__6107);var validator = cljs.core.get.call(null,map__6107__$1,new cljs.core.Keyword(null,"validator","validator",4199087812));var meta = cljs.core.get.call(null,map__6107__$1,new cljs.core.Keyword(null,"meta","meta",1017252215));return (new cloact.ratom.RAtom(x,meta,validator,null));
};
var G__6108 = function (x,var_args){
var p__6105 = null;if (arguments.length > 1) {
  p__6105 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__6108__delegate.call(this,x,p__6105);};
G__6108.cljs$lang$maxFixedArity = 1;
G__6108.cljs$lang$applyTo = (function (arglist__6109){
var x = cljs.core.first(arglist__6109);
var p__6105 = cljs.core.rest(arglist__6109);
return G__6108__delegate(x,p__6105);
});
G__6108.cljs$core$IFn$_invoke$arity$variadic = G__6108__delegate;
return G__6108;
})()
;
atom = function(x,var_args){
var p__6105 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$core$IFn$_invoke$arity$1 = atom__1;
atom.cljs$core$IFn$_invoke$arity$variadic = atom__2.cljs$core$IFn$_invoke$arity$variadic;
return atom;
})()
;
cloact.ratom.IDisposable = (function (){var obj6111 = {};return obj6111;
})();
cloact.ratom.dispose_BANG_ = (function dispose_BANG_(this$){if((function (){var and__3393__auto__ = this$;if(and__3393__auto__)
{return this$.cloact$ratom$IDisposable$dispose_BANG_$arity$1;
} else
{return and__3393__auto__;
}
})())
{return this$.cloact$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else
{var x__4013__auto__ = (((this$ == null))?null:this$);return (function (){var or__3405__auto__ = (cloact.ratom.dispose_BANG_[goog.typeOf(x__4013__auto__)]);if(or__3405__auto__)
{return or__3405__auto__;
} else
{var or__3405__auto____$1 = (cloact.ratom.dispose_BANG_["_"]);if(or__3405__auto____$1)
{return or__3405__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDisposable.dispose!",this$);
}
}
})().call(null,this$);
}
});
cloact.ratom.IRunnable = (function (){var obj6113 = {};return obj6113;
})();
cloact.ratom.run = (function run(this$){if((function (){var and__3393__auto__ = this$;if(and__3393__auto__)
{return this$.cloact$ratom$IRunnable$run$arity$1;
} else
{return and__3393__auto__;
}
})())
{return this$.cloact$ratom$IRunnable$run$arity$1(this$);
} else
{var x__4013__auto__ = (((this$ == null))?null:this$);return (function (){var or__3405__auto__ = (cloact.ratom.run[goog.typeOf(x__4013__auto__)]);if(or__3405__auto__)
{return or__3405__auto__;
} else
{var or__3405__auto____$1 = (cloact.ratom.run["_"]);if(or__3405__auto____$1)
{return or__3405__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRunnable.run",this$);
}
}
})().call(null,this$);
}
});
cloact.ratom.IComputedImpl = (function (){var obj6115 = {};return obj6115;
})();
cloact.ratom._update_watching = (function _update_watching(this$,derefed){if((function (){var and__3393__auto__ = this$;if(and__3393__auto__)
{return this$.cloact$ratom$IComputedImpl$_update_watching$arity$2;
} else
{return and__3393__auto__;
}
})())
{return this$.cloact$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else
{var x__4013__auto__ = (((this$ == null))?null:this$);return (function (){var or__3405__auto__ = (cloact.ratom._update_watching[goog.typeOf(x__4013__auto__)]);if(or__3405__auto__)
{return or__3405__auto__;
} else
{var or__3405__auto____$1 = (cloact.ratom._update_watching["_"]);if(or__3405__auto____$1)
{return or__3405__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IComputedImpl.-update-watching",this$);
}
}
})().call(null,this$,derefed);
}
});
cloact.ratom._handle_change = (function _handle_change(k,sender,oldval,newval){if((function (){var and__3393__auto__ = k;if(and__3393__auto__)
{return k.cloact$ratom$IComputedImpl$_handle_change$arity$4;
} else
{return and__3393__auto__;
}
})())
{return k.cloact$ratom$IComputedImpl$_handle_change$arity$4(k,sender,oldval,newval);
} else
{var x__4013__auto__ = (((k == null))?null:k);return (function (){var or__3405__auto__ = (cloact.ratom._handle_change[goog.typeOf(x__4013__auto__)]);if(or__3405__auto__)
{return or__3405__auto__;
} else
{var or__3405__auto____$1 = (cloact.ratom._handle_change["_"]);if(or__3405__auto____$1)
{return or__3405__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IComputedImpl.-handle-change",k);
}
}
})().call(null,k,sender,oldval,newval);
}
});
cloact.ratom.call_watches = (function call_watches(obs,watches,oldval,newval){var seq__6122 = cljs.core.seq.call(null,watches);var chunk__6123 = null;var count__6124 = 0;var i__6125 = 0;while(true){
if((i__6125 < count__6124))
{var vec__6126 = cljs.core._nth.call(null,chunk__6123,i__6125);var k = cljs.core.nth.call(null,vec__6126,0,null);var wf = cljs.core.nth.call(null,vec__6126,1,null);wf.call(null,k,obs,oldval,newval);
{
var G__6128 = seq__6122;
var G__6129 = chunk__6123;
var G__6130 = count__6124;
var G__6131 = (i__6125 + 1);
seq__6122 = G__6128;
chunk__6123 = G__6129;
count__6124 = G__6130;
i__6125 = G__6131;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6122);if(temp__4092__auto__)
{var seq__6122__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6122__$1))
{var c__4134__auto__ = cljs.core.chunk_first.call(null,seq__6122__$1);{
var G__6132 = cljs.core.chunk_rest.call(null,seq__6122__$1);
var G__6133 = c__4134__auto__;
var G__6134 = cljs.core.count.call(null,c__4134__auto__);
var G__6135 = 0;
seq__6122 = G__6132;
chunk__6123 = G__6133;
count__6124 = G__6134;
i__6125 = G__6135;
continue;
}
} else
{var vec__6127 = cljs.core.first.call(null,seq__6122__$1);var k = cljs.core.nth.call(null,vec__6127,0,null);var wf = cljs.core.nth.call(null,vec__6127,1,null);wf.call(null,k,obs,oldval,newval);
{
var G__6136 = cljs.core.next.call(null,seq__6122__$1);
var G__6137 = null;
var G__6138 = 0;
var G__6139 = 0;
seq__6122 = G__6136;
chunk__6123 = G__6137;
count__6124 = G__6138;
i__6125 = G__6139;
continue;
}
}
} else
{return null;
}
}
break;
}
});

/**
* @constructor
*/
cloact.ratom.Reaction = (function (f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.active_QMARK_ = active_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.on_set = on_set;
this.on_dispose = on_dispose;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
cloact.ratom.Reaction.cljs$lang$type = true;
cloact.ratom.Reaction.cljs$lang$ctorStr = "cloact.ratom/Reaction";
cloact.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__3954__auto__,writer__3955__auto__,opt__3956__auto__){return cljs.core._write.call(null,writer__3955__auto__,"cloact.ratom/Reaction");
});
cloact.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
cloact.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;cljs.core._write.call(null,writer,[cljs.core.str("#<Reaction "),cljs.core.str(cljs.core.hash.call(null,this$__$1)),cljs.core.str(": ")].join(''));
cljs.core.pr_writer.call(null,self__.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
cloact.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
cloact.ratom.Reaction.prototype.cloact$ratom$IDisposable$ = true;
cloact.ratom.Reaction.prototype.cloact$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var seq__6140_6153 = cljs.core.seq.call(null,self__.watching);var chunk__6141_6154 = null;var count__6142_6155 = 0;var i__6143_6156 = 0;while(true){
if((i__6143_6156 < count__6142_6155))
{var w_6157 = cljs.core._nth.call(null,chunk__6141_6154,i__6143_6156);cljs.core.remove_watch.call(null,w_6157,this$__$1);
{
var G__6158 = seq__6140_6153;
var G__6159 = chunk__6141_6154;
var G__6160 = count__6142_6155;
var G__6161 = (i__6143_6156 + 1);
seq__6140_6153 = G__6158;
chunk__6141_6154 = G__6159;
count__6142_6155 = G__6160;
i__6143_6156 = G__6161;
continue;
}
} else
{var temp__4092__auto___6162 = cljs.core.seq.call(null,seq__6140_6153);if(temp__4092__auto___6162)
{var seq__6140_6163__$1 = temp__4092__auto___6162;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6140_6163__$1))
{var c__4134__auto___6164 = cljs.core.chunk_first.call(null,seq__6140_6163__$1);{
var G__6165 = cljs.core.chunk_rest.call(null,seq__6140_6163__$1);
var G__6166 = c__4134__auto___6164;
var G__6167 = cljs.core.count.call(null,c__4134__auto___6164);
var G__6168 = 0;
seq__6140_6153 = G__6165;
chunk__6141_6154 = G__6166;
count__6142_6155 = G__6167;
i__6143_6156 = G__6168;
continue;
}
} else
{var w_6169 = cljs.core.first.call(null,seq__6140_6163__$1);cljs.core.remove_watch.call(null,w_6169,this$__$1);
{
var G__6170 = cljs.core.next.call(null,seq__6140_6163__$1);
var G__6171 = null;
var G__6172 = 0;
var G__6173 = 0;
seq__6140_6153 = G__6170;
chunk__6141_6154 = G__6171;
count__6142_6155 = G__6172;
i__6143_6156 = G__6173;
continue;
}
}
} else
{}
}
break;
}
self__.watching = cljs.core.PersistentHashSet.EMPTY;
self__.state = null;
self__.dirty_QMARK_ = true;
if(cljs.core.truth_(self__.active_QMARK_))
{cljs.core.swap_BANG_.call(null,cloact.ratom._running,cljs.core.dec);
self__.active_QMARK_ = false;
} else
{}
if(cljs.core.truth_(self__.on_dispose))
{return self__.on_dispose.call(null);
} else
{return null;
}
});
cloact.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core.not.call(null,(function (){var or__3405__auto__ = self__.auto_run;if(cljs.core.truth_(or__3405__auto__))
{return or__3405__auto__;
} else
{return cloact.ratom._STAR_ratom_context_STAR_;
}
})()))
{var x__4750__auto___6174 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.auto_run,cloact.ratom._STAR_ratom_context_STAR_], null);if(!((console.log == null)))
{console.log([cljs.core.str([cljs.core.str("dbg "),cljs.core.str("cloact.ratom"),cljs.core.str(":"),cljs.core.str(119),cljs.core.str(": "),cljs.core.str("[auto-run *ratom-context*]"),cljs.core.str(": "),cljs.core.str(cljs.core.pr_str.call(null,x__4750__auto___6174))].join(''))].join(''));
} else
{}
} else
{}
if(cljs.core.truth_((function (){var or__3405__auto__ = self__.auto_run;if(cljs.core.truth_(or__3405__auto__))
{return or__3405__auto__;
} else
{return cloact.ratom._STAR_ratom_context_STAR_;
}
})()))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Reaction derefed outside auto-running context"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",-1640527972,null),new cljs.core.Symbol(null,"auto-run","auto-run",-202959066,null),new cljs.core.Symbol(null,"*ratom-context*","*ratom-context*",1304741512,null))))].join('')));
}
cloact.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);
if(cljs.core.truth_(self__.dirty_QMARK_))
{return cloact.ratom.run.call(null,this$__$1);
} else
{return self__.state;
}
});
cloact.ratom.Reaction.prototype.cloact$ratom$IRunnable$ = true;
cloact.ratom.Reaction.prototype.cloact$ratom$IRunnable$run$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var oldstate = self__.state;var vec__6144 = cloact.ratom.capture_derefed.call(null,self__.f);var res = cljs.core.nth.call(null,vec__6144,0,null);var derefed = cljs.core.nth.call(null,vec__6144,1,null);if(cljs.core.not_EQ_.call(null,derefed,self__.watching))
{cloact.ratom._update_watching.call(null,this$__$1,derefed);
} else
{}
if(cljs.core.truth_(self__.active_QMARK_))
{} else
{cljs.core.swap_BANG_.call(null,cloact.ratom._running,cljs.core.inc);
self__.active_QMARK_ = true;
}
self__.dirty_QMARK_ = false;
self__.state = res;
cloact.ratom.call_watches.call(null,this$__$1,self__.watches,oldstate,self__.state);
return res;
});
cloact.ratom.Reaction.prototype.cloact$ratom$IComputedImpl$ = true;
cloact.ratom.Reaction.prototype.cloact$ratom$IComputedImpl$_handle_change$arity$4 = (function (this$,sender,oldval,newval){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_((function (){var and__3393__auto__ = self__.active_QMARK_;if(cljs.core.truth_(and__3393__auto__))
{return (cljs.core.not.call(null,self__.dirty_QMARK_)) && (!((oldval === newval)));
} else
{return and__3393__auto__;
}
})()))
{self__.dirty_QMARK_ = true;
return (function (){var or__3405__auto__ = self__.auto_run;if(cljs.core.truth_(or__3405__auto__))
{return or__3405__auto__;
} else
{return cloact.ratom.run;
}
})().call(null,this$__$1);
} else
{return null;
}
});
cloact.ratom.Reaction.prototype.cloact$ratom$IComputedImpl$_update_watching$arity$2 = (function (this$,derefed){var self__ = this;
var this$__$1 = this;var seq__6145_6175 = cljs.core.seq.call(null,derefed);var chunk__6146_6176 = null;var count__6147_6177 = 0;var i__6148_6178 = 0;while(true){
if((i__6148_6178 < count__6147_6177))
{var w_6179 = cljs.core._nth.call(null,chunk__6146_6176,i__6148_6178);if(cljs.core.contains_QMARK_.call(null,self__.watching,w_6179))
{} else
{cljs.core.add_watch.call(null,w_6179,this$__$1,cloact.ratom._handle_change);
}
{
var G__6180 = seq__6145_6175;
var G__6181 = chunk__6146_6176;
var G__6182 = count__6147_6177;
var G__6183 = (i__6148_6178 + 1);
seq__6145_6175 = G__6180;
chunk__6146_6176 = G__6181;
count__6147_6177 = G__6182;
i__6148_6178 = G__6183;
continue;
}
} else
{var temp__4092__auto___6184 = cljs.core.seq.call(null,seq__6145_6175);if(temp__4092__auto___6184)
{var seq__6145_6185__$1 = temp__4092__auto___6184;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6145_6185__$1))
{var c__4134__auto___6186 = cljs.core.chunk_first.call(null,seq__6145_6185__$1);{
var G__6187 = cljs.core.chunk_rest.call(null,seq__6145_6185__$1);
var G__6188 = c__4134__auto___6186;
var G__6189 = cljs.core.count.call(null,c__4134__auto___6186);
var G__6190 = 0;
seq__6145_6175 = G__6187;
chunk__6146_6176 = G__6188;
count__6147_6177 = G__6189;
i__6148_6178 = G__6190;
continue;
}
} else
{var w_6191 = cljs.core.first.call(null,seq__6145_6185__$1);if(cljs.core.contains_QMARK_.call(null,self__.watching,w_6191))
{} else
{cljs.core.add_watch.call(null,w_6191,this$__$1,cloact.ratom._handle_change);
}
{
var G__6192 = cljs.core.next.call(null,seq__6145_6185__$1);
var G__6193 = null;
var G__6194 = 0;
var G__6195 = 0;
seq__6145_6175 = G__6192;
chunk__6146_6176 = G__6193;
count__6147_6177 = G__6194;
i__6148_6178 = G__6195;
continue;
}
}
} else
{}
}
break;
}
var seq__6149_6196 = cljs.core.seq.call(null,self__.watching);var chunk__6150_6197 = null;var count__6151_6198 = 0;var i__6152_6199 = 0;while(true){
if((i__6152_6199 < count__6151_6198))
{var w_6200 = cljs.core._nth.call(null,chunk__6150_6197,i__6152_6199);if(cljs.core.contains_QMARK_.call(null,derefed,w_6200))
{} else
{cljs.core.remove_watch.call(null,w_6200,this$__$1);
}
{
var G__6201 = seq__6149_6196;
var G__6202 = chunk__6150_6197;
var G__6203 = count__6151_6198;
var G__6204 = (i__6152_6199 + 1);
seq__6149_6196 = G__6201;
chunk__6150_6197 = G__6202;
count__6151_6198 = G__6203;
i__6152_6199 = G__6204;
continue;
}
} else
{var temp__4092__auto___6205 = cljs.core.seq.call(null,seq__6149_6196);if(temp__4092__auto___6205)
{var seq__6149_6206__$1 = temp__4092__auto___6205;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6149_6206__$1))
{var c__4134__auto___6207 = cljs.core.chunk_first.call(null,seq__6149_6206__$1);{
var G__6208 = cljs.core.chunk_rest.call(null,seq__6149_6206__$1);
var G__6209 = c__4134__auto___6207;
var G__6210 = cljs.core.count.call(null,c__4134__auto___6207);
var G__6211 = 0;
seq__6149_6196 = G__6208;
chunk__6150_6197 = G__6209;
count__6151_6198 = G__6210;
i__6152_6199 = G__6211;
continue;
}
} else
{var w_6212 = cljs.core.first.call(null,seq__6149_6206__$1);if(cljs.core.contains_QMARK_.call(null,derefed,w_6212))
{} else
{cljs.core.remove_watch.call(null,w_6212,this$__$1);
}
{
var G__6213 = cljs.core.next.call(null,seq__6149_6206__$1);
var G__6214 = null;
var G__6215 = 0;
var G__6216 = 0;
seq__6149_6196 = G__6213;
chunk__6150_6197 = G__6214;
count__6151_6198 = G__6215;
i__6152_6199 = G__6216;
continue;
}
}
} else
{}
}
break;
}
return self__.watching = derefed;
});
cloact.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(self__.on_set))
{self__.on_set.call(null,oldval,newval);
} else
{}
return cloact.ratom.call_watches.call(null,this$__$1,self__.watches,oldval,newval);
});
cloact.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,wf){var self__ = this;
var this$__$1 = this;return self__.watches = cljs.core.assoc.call(null,self__.watches,k,wf);
});
cloact.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;self__.watches = cljs.core.dissoc.call(null,self__.watches,k);
if(cljs.core.empty_QMARK_.call(null,self__.watches))
{return cloact.ratom.dispose_BANG_.call(null,this$__$1);
} else
{return null;
}
});
cloact.ratom.__GT_Reaction = (function __GT_Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){return (new cloact.ratom.Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose));
});
/**
* @param {...*} var_args
*/
cloact.ratom.make_reaction = (function() { 
var make_reaction__delegate = function (f,p__6217){var map__6219 = p__6217;var map__6219__$1 = ((cljs.core.seq_QMARK_.call(null,map__6219))?cljs.core.apply.call(null,cljs.core.hash_map,map__6219):map__6219);var on_dispose = cljs.core.get.call(null,map__6219__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2213067683));var on_set = cljs.core.get.call(null,map__6219__$1,new cljs.core.Keyword(null,"on-set","on-set",4294781670));var auto_run = cljs.core.get.call(null,map__6219__$1,new cljs.core.Keyword(null,"auto-run","auto-run",2451476703));var runner = ((cljs.core._EQ_.call(null,auto_run,true))?cloact.ratom.run:auto_run);return (new cloact.ratom.Reaction(f,null,true,false,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,runner,on_set,on_dispose));
};
var make_reaction = function (f,var_args){
var p__6217 = null;if (arguments.length > 1) {
  p__6217 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return make_reaction__delegate.call(this,f,p__6217);};
make_reaction.cljs$lang$maxFixedArity = 1;
make_reaction.cljs$lang$applyTo = (function (arglist__6220){
var f = cljs.core.first(arglist__6220);
var p__6217 = cljs.core.rest(arglist__6220);
return make_reaction__delegate(f,p__6217);
});
make_reaction.cljs$core$IFn$_invoke$arity$variadic = make_reaction__delegate;
return make_reaction;
})()
;

//# sourceMappingURL=ratom.js.map