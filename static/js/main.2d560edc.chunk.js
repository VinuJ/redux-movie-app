(this["webpackJsonpredux-movie-app"]=this["webpackJsonpredux-movie-app"]||[]).push([[0],{47:function(e,t,c){},48:function(e,t,c){},50:function(e,t,c){},86:function(e,t,c){},87:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){},90:function(e,t,c){"use strict";c.r(t);var s=c(0),i=c(20),n=c.n(i),a=c(9),r=c(5),o=c(2),d=(c(47),c(48),c(1)),j=function(){return Object(d.jsxs)("div",{className:"footer",children:[Object(d.jsx)("div",{children:"Movie App"}),Object(d.jsx)("div",{children:"\xa9 2021, Movie App"})]})},l=c(8),b=c.p+"static/media/user.28e44cb7.png",u=(c(50),c(11)),O=c(10),m=c.p+"static/media/image2.ee281b91.png",h=c(4),v=c(13),x=c.n(v),p=c(22),f=c(12),g=c(37),N=c.n(g).a.create({baseURL:"https://www.omdbapi.com"}),w="1ef1e20d",S=Object(f.b)("movies/fetchAsyncMovies",Object(p.a)(x.a.mark((function e(){var t,c,s=arguments;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:"Mission",e.next=3,N.get("?s=".concat(t,"&type=movie&apikey=").concat(w));case 3:return c=e.sent,e.abrupt("return",c.data);case 5:case"end":return e.stop()}}),e)})))),y=Object(f.b)("movies/fetchAsyncShows",Object(p.a)(x.a.mark((function e(){var t,c,s=arguments;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:"Friends",e.next=3,N.get("?s=".concat(t,"&type=series&apikey=").concat(w));case 3:return c=e.sent,e.abrupt("return",c.data);case 5:case"end":return e.stop()}}),e)})))),T=Object(f.b)("movies/fetchAsyncDetails",function(){var e=Object(p.a)(x.a.mark((function e(t){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.get("?i=".concat(t,"&plot=full&apikey=").concat(w));case 2:return c=e.sent,e.abrupt("return",c.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),k=Object(f.c)({name:"movies",initialState:{movies:{},shows:{},details:{},loading:!1},reducers:{removeDetails:function(e){e.details={}}},extraReducers:function(e){e.addCase(S.pending,(function(e){return console.log("Pending"),Object(h.a)(Object(h.a)({},e),{},{loading:!0})})),e.addCase(S.fulfilled,(function(e,t){var c=t.payload;return console.log("Fetched Successfully"),Object(h.a)(Object(h.a)({},e),{},{movies:c,loading:!1})})),e.addCase(S.rejected,(function(){console.log("Rejected")})),e.addCase(y.fulfilled,(function(e,t){var c=t.payload;return console.log("Fetched Successfully"),Object(h.a)(Object(h.a)({},e),{},{shows:c,loading:!1})})),e.addCase(T.fulfilled,(function(e,t){var c=t.payload;return console.log("Fetched Successfully"),Object(h.a)(Object(h.a)({},e),{},{details:c})}))}}),D=k.actions.removeDetails,A=function(e){return e.movies.movies},R=function(e){return e.movies.shows},F=function(e){return e.movies.details},P=function(e){return e.movies.loading},I=k.reducer,M=function(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),c=t[0],i=t[1],n=Object(r.b)();return Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)("div",{className:"logo",children:Object(d.jsx)(a.b,{id:"logo-link",to:"/redux-movie-app/",children:Object(d.jsx)("img",{id:"logo-image",src:m,alt:"logo"})})}),Object(d.jsx)("div",{className:"search-bar",children:Object(d.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""===c)return alert("Please enter a search term!");n(S(c)),n(y(c)),i("")},children:[Object(d.jsx)("input",{type:"text",value:c,placeholder:"Search...",onChange:function(e){return i(e.target.value)}}),Object(d.jsx)("button",{type:"submit",children:Object(d.jsx)(O.a,{id:"search",icon:u.c})})]})}),Object(d.jsx)("div",{className:"user-image",children:Object(d.jsx)("img",{src:b,alt:"user"})})]})},C=c(25),E=c.n(C),B=(c(86),c.p+"static/media/noImage.b21add8f.png"),L=function(e){var t=e.data,c=Object(r.c)(P);return Object(d.jsx)("div",{className:"card-item",children:c?Object(d.jsx)("div",{className:"card-inner"}):Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(a.b,{to:"/redux-movie-app/movie/".concat(t.imdbID),children:Object(d.jsxs)("div",{className:"card-inner",children:[Object(d.jsx)("div",{className:"card-top",children:"N/A"==t.Poster?Object(d.jsx)("img",{id:"no-image",src:B,alt:"No image"}):Object(d.jsx)("img",{src:t.Poster,alt:t.Title})}),Object(d.jsx)("div",{className:"card-bottom",children:Object(d.jsxs)("div",{className:"card-info",children:[Object(d.jsx)("h4",{children:t.Title}),Object(d.jsx)("p",{children:t.Year})]})})]})})})})},Y=(c(87),{dots:!1,infinite:!0,speed:500,slidesToShow:6,slidesToScroll:3,initialSlide:0,responsive:[{breakpoint:1500,settings:{slidesToShow:5,slidesToScroll:4,infinite:!0,dots:!1}},{breakpoint:1300,settings:{slidesToShow:4,slidesToScroll:3,infinite:!0,dots:!1}},{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!1}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),G=function(){var e=Object(r.c)(A),t=Object(r.c)(R);console.log(e);var c,s="";return c="True"===e.Response?e.Search.map((function(e,t){return Object(d.jsx)(L,{data:e},t)})):Object(d.jsx)("div",{className:"movies-error",children:e.Error}),s="True"===t.Response?t.Search.map((function(e,t){return Object(d.jsx)(L,{data:e},t)})):Object(d.jsx)("div",{className:"shows-error",children:t.Error}),Object(d.jsxs)("div",{className:"movie-wrapper",children:[Object(d.jsxs)("div",{className:"movie-list",children:[Object(d.jsx)("h2",{children:"Movies"}),Object(d.jsx)("div",{className:"movie-container",children:Object(d.jsx)(E.a,Object(h.a)(Object(h.a)({},Y),{},{children:c}))})]}),Object(d.jsxs)("div",{className:"show-list",children:[Object(d.jsx)("h2",{children:"Shows"}),Object(d.jsx)("div",{className:"movie-container",children:Object(d.jsx)(E.a,Object(h.a)(Object(h.a)({},Y),{},{children:s}))})]})]})},J=(c(88),function(){var e=Object(r.b)();return Object(s.useEffect)((function(){e(S()),e(y())}),[e]),Object(d.jsx)("div",{children:Object(d.jsx)(G,{})})}),V=(c(89),function(){var e=Object(o.g)().imdbID,t=Object(r.b)(),c=Object(r.c)(F);return console.log(c),Object(s.useEffect)((function(){return t(T(e)),function(){t(D())}}),[t,e]),Object(d.jsx)("div",{className:"movie-section",children:0===Object.keys(c).length?Object(d.jsx)("div",{children:"Fetching..."}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"left-section",children:[Object(d.jsx)("div",{className:"movie-title",children:c.Title}),Object(d.jsxs)("div",{className:"movie-stats",children:[Object(d.jsxs)("div",{className:"stat-box",children:["IMDB Rating",Object(d.jsx)(O.a,{id:"star",icon:u.d}),c.imdbRating]}),Object(d.jsxs)("div",{className:"stat-box",children:["IMDB Votes",Object(d.jsx)(O.a,{id:"thumbs-up",icon:u.e}),c.imdbVotes]}),Object(d.jsxs)("div",{className:"stat-box",children:["Runtime",Object(d.jsx)(O.a,{id:"film",icon:u.b}),c.Runtime]}),Object(d.jsxs)("div",{className:"stat-box",children:["Year ",Object(d.jsx)(O.a,{id:"calendar",icon:u.a}),c.Year]})]}),Object(d.jsx)("div",{className:"movie-plot",children:c.Plot}),Object(d.jsx)("div",{className:"movie-info",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:"Director"}),Object(d.jsx)("div",{children:c.Director})]})}),Object(d.jsx)("div",{className:"movie-info",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:"Stars"}),Object(d.jsx)("div",{children:c.Actors})]})}),Object(d.jsx)("div",{className:"movie-info",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:"Genres"}),Object(d.jsx)("div",{children:c.Genre})]})}),Object(d.jsx)("div",{className:"movie-info",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:"Languages"}),Object(d.jsx)("div",{children:c.Language})]})}),Object(d.jsx)("div",{className:"movie-info",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:"Awards"}),Object(d.jsx)("div",{children:c.Awards})]})})]}),Object(d.jsx)("div",{className:"right-section",children:Object(d.jsx)("div",{className:"movie-image",children:"N/A"==c.Poster?Object(d.jsx)("img",{id:"no-image",src:B,alt:"No image"}):Object(d.jsx)("img",{src:c.Poster,alt:c.Title})})})]})})}),U=function(){return Object(d.jsx)("div",{children:"PageNotFound"})};var q=function(){return Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)(M,{}),Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{path:"/redux-movie-app/",element:Object(d.jsx)(J,{})}),Object(d.jsx)(o.a,{path:"/redux-movie-app/movie/:imdbID",element:Object(d.jsx)(V,{})}),Object(d.jsx)(o.a,{path:"/redux-movie-app/*",element:Object(d.jsx)(U,{})})]})}),Object(d.jsx)(j,{})]})},z=Object(f.a)({reducer:{movies:I}});n.a.render(Object(d.jsx)(a.a,{children:Object(d.jsx)(r.a,{store:z,children:Object(d.jsx)(q,{})})}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.2d560edc.chunk.js.map