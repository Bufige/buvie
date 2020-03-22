(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{37:function(e,n,t){e.exports=t(64)},64:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(30),c=t.n(i),o=t(12),u=t(9),s=t(3),l=t(4);function m(){var e=Object(s.a)(["\n    * {\n        margin: 0;\n        padding: 0;\n    }\n    \n    html, body, #root {\n        width: 100%;\n        height: 100%;\n        background-color: #141414;\n\n        .container {\n            padding-right: 15px;\n            padding-left: 15px;\n            margin-right: auto;\n            margin-left: auto;\n        }\n        @media (min-width: 576px) {\n            .container {\n                max-width: 540px;\n            }\n        }\n\n        @media (min-width: 768px) {\n            .container {\n                max-width: 720px;\n            }\n        }\n\n        @media (min-width: 992px) {\n            .container {\n                max-width: 960px;\n            }\n        }\n\n        @media (min-width: 1200px) {\n            .container {\n                max-width: 1140px;\n            }\n        }\n    }\n"]);return m=function(){return e},e}var p=Object(l.a)(m()),d=t(1);function g(){var e=Object(s.a)(["\n    .filters {\n        margin-top: 20px;\n        display: flex;\n        justify-content: center;\n        .filter {\n            color: white;\n            cursor: pointer;\n            user-select: none;\n            border: 1px solid #fff;\n            border-radius: 4px;\n            padding: 6px 15px;\n            &.active {\n                color: black;\n                background-color: white;\n            }\n        }\n    }\n"]);return g=function(){return e},e}var f=l.b.div(g());function h(){var e=Object(s.a)(["\n    .content {\n        margin-top: 20px;\n        display: grid;\n        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n        grid-gap: 2rem;\n        grid-auto-flow: dense;\n    }\n    .pagination {\n        width: 100%;\n        margin-top: 50px;\n    }\n    @media(max-width: 600px) {\n        grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));\n    }\n"]);return h=function(){return e},e}var v=l.b.div(h());function b(){var e=Object(s.a)(["\n    width: 100%;\n    position: relative;\n    transition: opacity .3s ease-in-out;\n    cursor: pointer;\n    .title {\n        margin-top: 10px;\n        display: block;\n        text-decoration: none;\n        font-size: 1.3rem;\n        font-weight: 500;\n        line-height: 18px;\n        color: white;\n        overflow-wrap: break-word;\n    }\n    .genres {\n        margin-top: 5px;\n        display: flex;\n        flex-wrap: wrap;\n        color: #aaa;\n        font-size: .6rem;\n        .genre {\n            margin-right: 5px;\n        }\n    }\n    :hover {\n        opacity: 0.7;\n    }\n"]);return b=function(){return e},e}var x=l.b.div(b()),w=t(5),E=t.n(w),j=t(11),O=t(34),y=t.n(O).a.create({baseURL:"https://api.themoviedb.org/3"});y.interceptors.request.use((function(e){return e.url&&(e.url+="?api_key=".concat("d8b813dafae4ea935257dba6cb1eae38")),e}),(function(e){return Promise.reject(e)}));var N=y,k={getPopular:function(){var e=Object(j.a)(E.a.mark((function e(){var n,t=arguments;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.length>0&&void 0!==t[0]?t[0]:1,e.next=3,N.get("/movie/popular",{params:{page:n}}).then((function(e){return e.data}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getTopRated:function(){var e=Object(j.a)(E.a.mark((function e(){var n,t=arguments;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.length>0&&void 0!==t[0]?t[0]:1,e.next=3,N.get("/movie/top_rated",{params:{page:n}}).then((function(e){return e.data}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getUpcoming:function(){var e=Object(j.a)(E.a.mark((function e(){var n,t=arguments;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.length>0&&void 0!==t[0]?t[0]:1,e.next=3,N.get("/movie/upcoming",{params:{page:n}}).then((function(e){return e.data}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getMovieDetail:function(){var e=Object(j.a)(E.a.mark((function e(n){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.get("/movie/".concat(n)).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),getMovieRecommendation:function(){var e=Object(j.a)(E.a.mark((function e(n){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.get("/movie/".concat(n,"/recommendations")).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),getMovieCast:function(){var e=Object(j.a)(E.a.mark((function e(n){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.get("/movie/".concat(n,"/credits")).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),getMovieImages:function(){var e=Object(j.a)(E.a.mark((function e(n){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.get("/movie/".concat(n,"/images")).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),getSearch:function(){var e=Object(j.a)(E.a.mark((function e(n,t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.get("/search/movie",{params:{query:n,page:t}}).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),generateImageUrl:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:185;switch(n){case 185:return"https://image.tmdb.org/t/p/w185"+e;case 300:return"https://image.tmdb.org/t/p/w300"+e;default:return"https://image.tmdb.org/t/p/original"+e}}};function S(){var e=Object(s.a)(["\n    position: relative;\n    width: 100%;\n    height: 100%;\n    .image {\n        display: block;\n        width: ",";\n        height: ",";\n        min-width: ",";\n        background-size: 100% 100%;\n        background-repeat: no-repeat;\n        background-image: url(",");\n    }\n    .rating {\n        border-radius: 2px;\n        position: absolute;\n        left: -5px;\n        color: white;\n        width: 32px;\n        height: 18px;\n        text-align: center;\n        font-size: 11px;\n        background-color: ",";\n        line-height: 18px;\n    }\n    .caption {\n        font-size: 13px;\n        font-weight: 600;\n        margin-bottom: 5px;\n    }\n"]);return S=function(){return e},e}var P=l.b.div(S(),(function(e){return e.width||"auto"}),(function(e){return e.height||"auto"}),(function(e){return e.minWidth||"auto"}),(function(e){return e.image}),(function(e){return e.rating>=7?"#3bb33b":e.rating<=3?"red":"#aaa"})),_=function(e){var n=Object(a.useState)(),t=Object(d.a)(n,2),i=t[0],c=t[1],o=Object(a.useState)(),u=Object(d.a)(o,2),s=u[0],l=u[1],m=Object(a.useState)(),p=Object(d.a)(m,2),g=p[0],f=p[1],h=Object(a.useState)(),v=Object(d.a)(h,2),b=v[0],x=v[1],w=Object(a.useState)(),E=Object(d.a)(w,2),j=E[0],O=E[1];return Object(a.useEffect)((function(){l(e.height),c(e.width),f(e.rating),x(e.image),O(e.caption)}),[e.width,e.height,e.rating,e.image,e.caption]),r.a.createElement(P,{width:i,height:s,rating:g,image:b,caption:j},void 0!==g&&r.a.createElement("div",{className:"rating"},g),r.a.createElement("div",{className:"image"}),void 0!==j&&r.a.createElement("div",{className:"caption"},j))},z=function(e){var n=Object(a.useState)(e.movie),t=Object(d.a)(n,2),i=t[0],c=t[1];return Object(a.useEffect)((function(){e.movie&&c(e.movie)}),[e.movie,i]),r.a.createElement(o.b,{style:{textDecoration:"none"},to:"/movie/"+i.id},r.a.createElement(x,null,r.a.createElement(_,{height:"275px",rating:i.vote_average,image:k.generateImageUrl(i.poster_path)}),r.a.createElement("div",{className:"title"},i.title),r.a.createElement("div",{className:"genres"},i.genre_ids.map((function(e,n){var t=n!==i.genre_ids.length-1;return r.a.createElement("div",{key:n,className:"genre"},e,t?",":"")})))))};function I(){var e=Object(s.a)(["\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    .page {\n        display: flex;\n        justify-content: center;\n        align-self: center;\n        width: 32px;\n        height: 32px;\n        margin: 0 10px;\n        border-radius: 50%;\n        color: #aaa;\n        text-decoration: none;\n        text-align: center;\n        line-height: 30px;\n        font-size: 14px;\n        cursor: pointer;\n        user-select: none;\n        &.active {\n            background-color: #3bb33b;\n            color: white;\n        }\n    }\n"]);return I=function(){return e},e}var U=l.b.div(I()),R=function(e){var n=Object(a.useState)(0),t=Object(d.a)(n,2),i=t[0],c=t[1],o=Object(a.useState)(0),u=Object(d.a)(o,2),s=u[0],l=u[1],m=function(e){var n=e===i;return r.a.createElement("div",{key:e,className:"page"+(n?" active":""),onClick:function(n){return p(n,e)}},e===s&&s>0?s:e+1)};Object(a.useEffect)((function(){c(e.currentPage),l(e.endPage)}),[e.currentPage,e.endPage]);var p=function(n,t){n.preventDefault(),c(t),e.onPage&&e.onPage(t)};return r.a.createElement(U,null,function(){var e=[];return e.push(m(0)),i-2>0&&e.push(m(i-2)),i-1>0&&e.push(m(i-1)),i>0&&e.push(m(i)),i+1<s&&e.push(m(i+1)),i+2<s&&e.push(m(i+2)),i+3<s&&e.push(m(s-1)),e}())},D=function(e){var n=Object(a.useState)(e.movies),t=Object(d.a)(n,2),i=t[0],c=t[1],o=Object(a.useState)(),u=Object(d.a)(o,2),s=u[0],l=u[1],m=Object(a.useState)(),p=Object(d.a)(m,2),g=p[0],f=p[1];Object(a.useEffect)((function(){c(e.movies),l(e.currentPage),f(e.endPage)}),[e.movies,e.currentPage,e.endPage]);return r.a.createElement(v,null,r.a.createElement("div",{className:"content"},i&&i.map((function(e,n){return r.a.createElement(z,{key:n,movie:e})}))),g>0&&r.a.createElement("div",{className:"pagination"},r.a.createElement(R,{currentPage:s,endPage:g,onPage:function(n){e.onPage&&e.onPage(n)}})))},M=function(e,n,t){if(e&&e.length>0)return k.getSearch(e,t);switch(n){case 0:return k.getPopular(t);case 1:return k.getTopRated(t);case 2:return k.getUpcoming(t)}},C=function(e){var n=Object(a.useState)(0),t=Object(d.a)(n,2),i=t[0],c=t[1],o=Object(a.useState)(),u=Object(d.a)(o,2),s=u[0],l=u[1],m=Object(a.useState)(0),p=Object(d.a)(m,2),g=p[0],h=p[1],v=Object(a.useState)(0),b=Object(d.a)(v,2),x=b[0],w=b[1],E=Object(a.useState)(),j=Object(d.a)(E,2),O=j[0];j[1];Object(a.useEffect)((function(){M(O,i,g+1).then((function(e){w(e.total_pages),l(e.results)}))}),[]);return r.a.createElement(f,{className:"container"},r.a.createElement("div",{className:"filters"},["Popular","Top Rated","Upcoming"].map((function(e,n){var t=i===n;return r.a.createElement("div",{key:n,className:"filter"+(t?" active":""),onClick:function(e){return function(e,n){e.preventDefault(),c(n),h(0),M(O,n,1).then((function(e){w(e.total_pages),l(e.results)}))}(e,n)}},e)}))),r.a.createElement(D,{movies:s,currentPage:g,endPage:x,onPage:function(e){h(e),M(O,i,e+1).then((function(e){l(e.results)}))}}))};function B(){var e=Object(s.a)(["\n    width: 100%;\n    height: 70px;\n    background-color: #1f1f1f;\n\n    .container {\n        display: grid;\n        height: 100%;\n        grid-template-columns: 1fr 3fr 1fr;\n    }\n    .searchbar, .user {\n        align-self: center;\n        justify-self: center;\n    }\n    .logo {\n        font-size: 2rem;\n        border-radius: 5px;\n        color: #fff;\n        text-transform: uppercase;\n        letter-spacing: 4px;\n        font-weight: 700;\n        align-self: center;\n    }\n    .searchbar {\n        width: 100%;\n        .field {\n            width: calc(100% - 60px);\n            height: 40px;\n            border: solid 2px grey;\n            padding-left: 10px;\n            padding-right: 25px;\n            border-radius: 10px;\n            font-size: 15px;\n            outline:none\n        }\n        i {\n            position: relative;\n            left: -25px;\n            cursor: pointer;\n        }\n    }\n    .user {\n        justify-self: flex-end;\n    }\n"]);return B=function(){return e},e}var T=l.b.div(B()),W=function(){return r.a.createElement(T,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"logo"},r.a.createElement(o.b,{style:{textDecoration:"none",color:"inherit"},to:"/"},"Buvie")),r.a.createElement("div",{className:"searchbar"},r.a.createElement("input",{type:"text",className:"field"}),r.a.createElement("i",{className:"fas fa-search"})),r.a.createElement("div",{className:"user"},r.a.createElement("i",{className:"fas fa-user"}))))};function q(){var e=Object(s.a)(["\n    width: 100%;\n    height: 70px;\n    background-color: #1f1f1f;\n    margin-top: 50px;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    .copyright {\n        color: #aaa;\n        font-size: 1.1rem;\n        cursor: pointer;\n    }\n\n    a {\n        text-decoration: none;\n        color: inherit;\n    }\n"]);return q=function(){return e},e}var F=l.b.div(q()),J=function(){return r.a.createElement(F,null,r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"https://github.com/Bufige"},r.a.createElement("div",{className:"copyright"},"\xa92020 Copyright Leonardo Igor"))))};function L(){var e=Object(s.a)(["\n    color: white;\n    .movie {\n        width: 100%;\n        display: flex;\n        margin-top: 25px;\n        span {\n            display: block;\n            margin-bottom: 5px;\n            font-size: 12px;\n            font-weight: 500;\n        }\n        .movie-image {\n            width: 320px;\n            min-width: 320px;\n            height: 480px;\n        }\n        .content {\n            width: 100%;\n            padding-left: 30px;\n            * {\n                margin-top: 15px;\n            }\n            .title {\n                font-size: 2rem;\n            }\n            .overview {\n\n            }\n            .release-date {\n\n            }\n            .budget {\n\n            }\n            .revenue {\n\n            }\n            .duration {\n\n            }\n            .cast {\n                .cast-images {\n                    display: grid;\n                    grid-template-columns: repeat(auto-fill, minmax(115px, 1fr));\n                    grid-gap: 2rem;\n                    grid-auto-flow: dense;\n                }\n            }\n            .images{\n                margin-top: 10px;\n                display: grid;\n                grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));\n                grid-gap: 1rem;\n                grid-auto-flow: dense;\n            }\n        }\n    }\n\n    .recommended {\n        .text {\n            font-size: 2.5rem;\n        }\n        .recomendations {\n            \n        }\n    }\n    @media(max-width: 900px) {\n        .movie {\n            display: block;\n            .movie-image {\n                width: 100%;\n                height: 475px;\n            }\n            .content {\n                padding-left: 0px;\n                \n                .cast-images {\n                    grid-template-columns: repeat(auto-fill, minmax(45%, 1fr));\n                }\n                .images {\n                    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n                }\n            }\n        }\n    }\n"]);return L=function(){return e},e}var $=l.b.div(L()),A=function(e){var n=Object(a.useState)([]),t=Object(d.a)(n,2),i=t[0],c=t[1],o=Object(a.useState)(),s=Object(d.a)(o,2),l=s[0],m=s[1],p=Object(a.useState)([]),g=Object(d.a)(p,2),f=g[0],h=g[1],v=Object(a.useState)([]),b=Object(d.a)(v,2),x=b[0],w=b[1],E=Object(u.f)().id,j=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});return Object(a.useEffect)((function(){k.getMovieRecommendation(E).then((function(e){c(e.results)})),k.getMovieDetail(E).then((function(e){m(e)})),k.getMovieCast(E).then((function(e){h(e.cast)})),k.getMovieImages(E).then((function(e){w(e.backdrops)}))}),[E]),r.a.createElement(r.a.Fragment,null,l&&r.a.createElement($,{className:"container"},r.a.createElement("div",{className:"movie"},r.a.createElement("div",{className:"movie-image"},r.a.createElement(_,{width:"100%",height:"100%",rating:l.vote_average,image:k.generateImageUrl(l.poster_path,500)})),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"title"},l.title),r.a.createElement("div",{className:"overview"},l.overview),r.a.createElement("div",{className:"release-date"},r.a.createElement("span",null,"Release date"),l.release_date),r.a.createElement("div",{className:"budget"},r.a.createElement("span",null,"Budget"),j.format(l.budget)),r.a.createElement("div",{className:"revenue"},r.a.createElement("span",null,"Revenue"),j.format(l.revenue)),r.a.createElement("div",{className:"duration"},r.a.createElement("span",null,"Duration"),l.runtime),r.a.createElement("div",{className:"cast"},r.a.createElement("span",null,"Cast"),r.a.createElement("div",{className:"cast-images"},function(e){return e.map((function(e,n){return r.a.createElement(_,{key:n,width:"115px !important",height:"160px",caption:e.name,image:k.generateImageUrl(e.profile_path,185)})}))}(f))),r.a.createElement("div",null,r.a.createElement("span",null,"Images"),r.a.createElement("div",{className:"images"},function(e){return e.map((function(e,n){return r.a.createElement(_,{key:n,width:"185px !important",height:"105px",caption:e.name,image:k.generateImageUrl(e.file_path,185)})}))}(x))))),r.a.createElement("div",{className:"recommended"},r.a.createElement("div",{className:"text"},"Recommended"),i.length>0?r.a.createElement(D,{movies:i}):r.a.createElement("h1",null,"No movies"))))},G=function(){return r.a.createElement(o.a,null,r.a.createElement(p,null),r.a.createElement(W,null),r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/movie/:id",component:A}),r.a.createElement(u.a,{path:"/",component:C})),r.a.createElement(J,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.ceadc9fd.chunk.js.map