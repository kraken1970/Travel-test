(this["webpackJsonptravel-test"]=this["webpackJsonptravel-test"]||[]).push([[0],{126:function(e,t,a){e.exports={calculatorCard:"CalculatorCard_calculatorCard__oS99C"}},128:function(e,t,a){e.exports={resultBlock:"ResultBlock_resultBlock__38bCL"}},129:function(e,t,a){e.exports={hotelsPage:"HotelsPage_hotelsPage__1XMXl"}},146:function(e,t,a){},147:function(e,t,a){},20:function(e,t,a){e.exports={filtersBlock:"FiltersBlock_filtersBlock___nXMX",countrySelect:"FiltersBlock_countrySelect__2j2zf",typeSelect:"FiltersBlock_typeSelect__1k9Tw",starsCheck:"FiltersBlock_starsCheck__15egT",reviewsInput:"FiltersBlock_reviewsInput__3QL47",checkGroup:"FiltersBlock_checkGroup__3KpmW",revInput:"FiltersBlock_revInput__3q4de",filterButton:"FiltersBlock_filterButton__3ML1s",acceptButton:"FiltersBlock_acceptButton__u8TcQ"}},239:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a(27),n=a.n(c),s=a(254),l=(a(146),a(24)),i=a(135),o=Object(r.createContext)(null),u=(a(147),a(31)),j=a.n(u),d=a(45),_=a(117),b=a(118),p=a(92),h=a.n(p),O=function(){function e(){Object(_.a)(this,e)}return Object(b.a)(e,null,[{key:"getAll",value:function(){var e=Object(d.a)(j.a.mark((function e(){var t,a,r,c=arguments;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:10,a=c.length>1&&void 0!==c[1]?c[1]:1,e.next=4,h.a.get("./hotels.json",{params:{_limit:t,_page:a}});case 4:return r=e.sent,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getById",value:function(){var e=Object(d.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("./hotels.json"+t);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),v=function(e,t){return Math.ceil(e/t)},x=a(4),f=a.n(x),m=a(139),C=a(20),g=a.n(C),w=a(257),k=a(3),N=function(){var e=w.a.Option;return Object(k.jsxs)("div",{className:g.a.countrySelect,children:[Object(k.jsx)("h4",{className:g.a.title,children:"\u0421\u0442\u0440\u0430\u043d\u0430"}),Object(k.jsx)("div",{className:g.a.wrapSelect,children:Object(k.jsxs)(w.a,{style:{width:"100%"},showArrow:!1,showSearch:!0,placeholder:"\u041f\u043e\u0438\u0441\u043a \u0441\u0442\u0440\u0430\u043d",optionFilterProp:"children",filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0},filterSort:function(e,t){return e.children.toLowerCase().localeCompare(t.children.toLowerCase())},children:[Object(k.jsx)(e,{value:"1",children:"\u0410\u0432\u0441\u0442\u0440\u0438\u044f"}),Object(k.jsx)(e,{value:"2",children:"\u0410\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043d"}),Object(k.jsx)(e,{value:"3",children:"\u0410\u043b\u0431\u0430\u043d\u0438\u044f"}),Object(k.jsx)(e,{value:"4",children:"\u0410\u043b\u0436\u0438\u0440"}),Object(k.jsx)(e,{value:"5",children:"\u0410\u043d\u0433\u043e\u043b\u0430"}),Object(k.jsx)(e,{value:"6",children:"\u0410\u043d\u0434\u043e\u0440\u0440\u0430"})]})})]})},B=function(){var e=w.a.Option;return Object(k.jsxs)("div",{className:g.a.typeSelect,children:[Object(k.jsx)("h4",{className:g.a.title,children:"\u0422\u0438\u043f"}),Object(k.jsxs)(w.a,{defaultValue:"appartments",onChange:function(e){console.log("selected ".concat(e))},style:{width:"100%"},children:[Object(k.jsx)(e,{value:"appartments",children:"\u0410\u043f\u0430\u0440\u0442\u0430\u043c\u0435\u043d\u0442\u044b"}),Object(k.jsx)(e,{value:"hotel",children:"\u041e\u0442\u0435\u043b\u044c"})]})]})},P=a(260),y=function(){return Object(k.jsx)("div",{className:g.a.starsCheck,children:Object(k.jsx)(P.a.Group,{options:["1 \u0437\u0432\u0435\u0437\u0434\u0430","2 \u0437\u0432\u0435\u0437\u0434\u044b","3 \u0437\u0432\u0435\u0437\u0434\u044b","4 \u0437\u0432\u0435\u0437\u0434\u044b","5 \u0437\u0432\u0435\u0437\u0434"],defaultValue:["1 \u0437\u0432\u0435\u0437\u0434\u0430"],onChange:function(e){console.log("checked = ",e)},className:g.a.checkGroup})})},S=a(256),L=function(){return Object(k.jsx)("div",{className:g.a.reviewsInput,children:Object(k.jsx)(S.a,{placeholder:"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043e\u0442 10",className:g.a.revInput})})},T=a(258),F=a(60),W=a.n(F),R=function(e){var t=e.value,a=e.handleSliderChange,r=e.valuetext,c=e.min,n=e.max;return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(T.a,{value:"number"===typeof t?t:0,onChange:a,"aria-labelledby":"range-slider",valueLabelFormat:r,min:c,max:n,valueLabelDisplay:"on",classes:{root:W.a.newClass,rail:W.a.newRail,track:W.a.newTrack,thumb:W.a.newThumb,valueLabel:W.a.newLabel}})})},G=a(126),I=a.n(G),V=function(e){var t,a,r=e.type,c=e.value;return"from"===r?(t="\u041e\u0442",a=0):(t="\u0414\u043e",a=+c),Object(k.jsx)("div",{className:I.a.calculatorCard,children:Object(k.jsxs)("p",{children:[t," ",a," \u0420"]})})},X=a(36),K=a.n(X),A=function(){var e=Object(r.useState)(0),t=Object(l.a)(e,2),a=t[0],c=t[1],n=100500;return Object(k.jsxs)("div",{className:K.a.priceCalculator,children:[Object(k.jsx)("h4",{children:"\u0426\u0435\u043d\u0430"}),Object(k.jsxs)("div",{className:K.a.calculatorContainer,children:[Object(k.jsxs)("div",{className:K.a.calculatorCards,children:[Object(k.jsx)("div",{className:K.a.cardWrap,children:Object(k.jsx)(V,{type:"from",value:a})}),Object(k.jsx)("div",{className:K.a.cardWrap,children:Object(k.jsx)(V,{type:"before",value:a})})]}),Object(k.jsxs)("div",{className:K.a.slider,children:[Object(k.jsx)(R,{value:a,handleSliderChange:function(e,t){c(t)},valuetext:function(e){return"P ".concat(e)},min:0,max:n}),Object(k.jsxs)("div",{className:K.a.slederPoints,children:[Object(k.jsx)("span",{className:K.a.point,children:0}),Object(k.jsx)("span",{className:K.a.point,children:n})]})]})]})]})},E=a(134),z=function(){return Object(k.jsxs)("div",{className:g.a.filtersBlock,children:[Object(k.jsx)(N,{}),Object(k.jsx)(B,{}),Object(k.jsx)(y,{}),Object(k.jsx)(L,{}),Object(k.jsx)(A,{}),Object(k.jsx)(E.a,{type:"primary",className:f()(g.a.filterButton,g.a.acceptButton),children:"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u0444\u0438\u043b\u044c\u0442\u0440"}),Object(k.jsxs)(E.a,{className:f()(g.a.filterButton),children:[Object(k.jsx)(m.a,{}),"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u0444\u0438\u043b\u044c\u0442\u0440"]})]})},H=a(127),M=a(259),Q=a(263),J=a(51),Y=a(138),D=a(262),Z=a(84),q=a.n(Z),U=function(e){var t,a,r=e.status,c=e.handleReserved;return a=r?Y.a:D.a,Object(k.jsx)(E.a,{icon:Object(k.jsx)(a,{}),onClick:c,className:f()(q.a.cardButton,(t={},Object(J.a)(t,q.a.unreserved,r),Object(J.a)(t,q.a.reserved,!r),t)),children:r?"\u0417\u0430\u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043e":"\u0417\u0430\u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})},$=a(37),ee=a.n($),te=function(e){var t=e.name,a=e.stars,c=e.type,n=e.reviews_amount,s=e.country,i=e.min_price,o=e.currency,u=e.description,j=Object(r.useState)(!1),d=Object(l.a)(j,2),_=d[0],b=d[1];return console.log(t),Object(k.jsxs)("div",{className:ee.a.card,children:[Object(k.jsxs)("div",{className:ee.a.leftSide,children:[Object(k.jsx)("h3",{className:ee.a.name,children:t}),Object(k.jsxs)("div",{className:ee.a.feature,children:[Object(k.jsx)("div",{className:ee.a.stars,children:Object(k.jsx)(M.a,{disabled:!0,defaultValue:a})}),Object(k.jsx)("div",{className:ee.a.type,children:c}),Object(k.jsxs)("div",{className:ee.a.reviews,children:[n," \u043e\u0442\u0437\u044b\u0432\u043e\u0432"]}),Object(k.jsxs)("div",{children:[Object(k.jsx)(Q.a,{})," ",s]})]}),Object(k.jsx)("div",{className:u,children:u})]}),Object(k.jsxs)("div",{className:ee.a.rightSide,children:[Object(k.jsxs)("div",{className:ee.a.price,children:[i," ",o,Object(k.jsx)("p",{children:"\u0426\u0435\u043d\u0430 \u0437\u0430 1 \u043d\u043e\u0447\u044c"})]}),Object(k.jsx)(U,{handleReserved:function(){b((function(e){return!e}))},status:_})]})]})},ae=a(85),re=a.n(ae),ce=function(e){var t=e.totalPages,a=e.page,r=e.changePage,c=function(e){for(var t=[],a=0;a<e;a++)t.push(a+1);return t}(t);return Object(k.jsx)("div",{className:re.a.pageWrapper,children:c.map((function(e){return Object(k.jsx)("span",{onClick:function(){return r(e)},className:f()(re.a.page,Object(J.a)({},re.a.pageCurrent,a===e)),children:e},e)}))})},ne=a(128),se=a.n(ne),le=function(e){var t=e.hotels,a=e.page,r=e.changePage,c=e.totalPages;return console.log("totalp",c),Object(k.jsxs)("div",{className:se.a.resultBlock,children:[t.map((function(e){return Object(k.jsx)(te,Object(H.a)({},e),e.id)})),Object(k.jsx)(ce,{page:a,changePage:r,totalPages:c})]})},ie=a(129),oe=a.n(ie),ue=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1],n=Object(r.useState)(3),s=Object(l.a)(n,2),i=s[0],o=(s[1],Object(r.useState)(0)),u=Object(l.a)(o,2),_=u[0],b=u[1],p=Object(r.useState)(1),h=Object(l.a)(p,2),x=h[0],f=h[1],m=function(e){var t=Object(r.useState)(!1),a=Object(l.a)(t,2),c=a[0],n=a[1],s=Object(r.useState)(""),i=Object(l.a)(s,2),o=i[0],u=i[1];return[function(){var t=Object(d.a)(j.a.mark((function t(){var a=arguments;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(!0),t.next=4,e.apply(void 0,a);case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),u(t.t0.message);case 9:return t.prev=9,n(!1),t.finish(9);case 12:case"end":return t.stop()}}),t,null,[[0,6,9,12]])})));return function(){return t.apply(this,arguments)}}(),c,o]}(function(){var e=Object(d.a)(j.a.mark((function e(t,a){var r,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.getAll(t,a);case 2:r=e.sent,c(r.data),n=r.data.length,b(v(n,t));case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),C=Object(l.a)(m,3),g=C[0];C[1],C[2];Object(r.useEffect)((function(){g(i,x)}),[]);return Object(k.jsxs)("div",{className:oe.a.hotelsPage,children:[Object(k.jsx)(z,{}),Object(k.jsx)(le,{hotels:a,page:x,changePage:function(e){f(e),g(i,e)},totalPages:_})]})};var je=function(){var e=Object(r.useState)(!0),t=Object(l.a)(e,2),a=t[0];return t[1],Object(k.jsx)(o.Provider,{value:{isLoading:a},children:Object(k.jsx)(i.a,{children:Object(k.jsx)(ue,{})})})};n.a.render(Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(s.a,{}),Object(k.jsx)(je,{})]}),document.getElementById("root"))},36:function(e,t,a){e.exports={title:"PriceCalculator_title__eQRl5",calculatorCards:"PriceCalculator_calculatorCards__yKNYl",description:"PriceCalculator_description__2BjZ1",calculatorContainer:"PriceCalculator_calculatorContainer__17d7x",slider:"PriceCalculator_slider__37veY",sliderTitle:"PriceCalculator_sliderTitle__xXrRK",slederPoints:"PriceCalculator_slederPoints__3R27G",point:"PriceCalculator_point__2PHGu",CalculatorCards:"PriceCalculator_CalculatorCards__2Gp--",cardWrap:"PriceCalculator_cardWrap__pVLed",calcBtn:"PriceCalculator_calcBtn__313TF"}},37:function(e,t,a){e.exports={card:"Card_card__2AxQY",leftSide:"Card_leftSide__3EiJ4",feature:"Card_feature__2TnWE",stars:"Card_stars__2LWUV",type:"Card_type__3d0yg",reviews:"Card_reviews__3C4zS",rightSide:"Card_rightSide__D9ysj",button:"Card_button__2HaWb"}},60:function(e,t,a){e.exports={newClass:"SliderCalculator_newClass__3VXbl",newRail:"SliderCalculator_newRail__mi-cu",newTrack:"SliderCalculator_newTrack__Xwv6a",newThumb:"SliderCalculator_newThumb___KAKz",newLabel:"SliderCalculator_newLabel__35R0O"}},84:function(e,t,a){e.exports={cardButton:"CardButton_cardButton__1TK4L",unreserved:"CardButton_unreserved___V-TP",reserved:"CardButton_reserved__3zLEG"}},85:function(e,t,a){e.exports={pageWrapper:"Pagination_pageWrapper__PH50s",page:"Pagination_page__195CB",pageCurrent:"Pagination_pageCurrent__2Z310"}}},[[239,1,2]]]);
//# sourceMappingURL=main.bc410de2.chunk.js.map