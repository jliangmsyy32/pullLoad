"use strict";var pullLoad=function(o){function e(o){o.css("display","none")}function l(o){o.css("display","block")}function i(){e(m),e(w),e(g),e(I)}var n=o.node,t=void 0===n?"":n,c=o.topFoo,a=void 0!==c&&c,r=o.botFoo,d=void 0!==r&&r,s=o.delay,u=void 0===s?500:s,p=o.AMUIIs,v=void 0!==p&&p,f=($(t),void 0);if(v){var h=$.AMUI.iScroll;f=new h(t,{click:!0,mouseWheel:!0})}else f=new IScroll(t,{click:!0,mouseWheel:!0});var m=$("#wrapper [data-top-placeholder]"),g=$("#wrapper [data-bot-placeholder]"),w=$("#wrapper [data-top-loading]"),I=$("#wrapper [data-bot-loading]");i();var T=void 0,b=void 0;f.on("scrollStart",function(){console.log("开始pull"),this.directionY===-1?(l(m),T&&clearTimeout(T),T=setTimeout(function(){e(m),l(w),a?b=a():console.log("请设置下拉后的回调函数")},u)):1===this.directionY&&(l(g),T&&clearTimeout(T),T=setTimeout(function(){e(g),l(I),d?b=d():console.log("请设置上拉后的回调函数")},u))}),f.on("scrollEnd",function(){console.log("IScroll end"),b&&i(),setTimeout(function(){f.refresh()},100)})};