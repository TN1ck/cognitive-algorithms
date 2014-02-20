// Compiled by ClojureScript 0.0-2127
goog.provide('playground.core');
goog.require('cljs.core');
goog.require('cloact.core');
goog.require('playground.slides');
goog.require('playground.slides');
goog.require('cloact.core');
goog.require('cloact.core');
playground.core.presentation = (function presentation(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.reveal","div.reveal",2762532668),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.slides","div.slides",2797238353),cljs.core.apply.call(null,cljs.core.concat,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [playground.slides.introduction.call(null),playground.slides.classifier.call(null),playground.slides.csp.call(null)], null))], null)], null);
});
playground.core.run_presentation = (function run_presentation(){return cloact.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [playground.core.presentation], null),document.body);
});
playground.core.run_presentation.call(null);
Reveal.initialize((function (){var obj6229 = {"transition":"linear","backgroundTransition":"slide","controls":false,"progress":true,"history":true,"center":false,"dependencies":[(function (){var obj6231 = {"src":"bower_components/reveal.js/plugin/math/math.js","async":false};return obj6231;
})()]};return obj6229;
})());
console.log("Hello world1!");

//# sourceMappingURL=core.js.map