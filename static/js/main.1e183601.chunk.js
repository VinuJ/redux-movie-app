(this["webpackJsonpredux-movie-app"]=this["webpackJsonpredux-movie-app"]||[]).push([[0],{38:function(e,c,t){},39:function(e,c,t){},41:function(e,c,t){},61:function(e,c,t){},62:function(e,c,t){},63:function(e,c,t){},64:function(e,c,t){"use strict";t.r(c);var s=t(0),n=t(13),r=t.n(n),a=t(6),i=t(7),o=t(2),d=(t(38),t(39),t(1)),j=function(){return Object(d.jsxs)("div",{className:"footer",children:[Object(d.jsx)("div",{children:"Movie App"}),Object(d.jsx)("div",{children:"\xa9 2021, Movie App"})]})},l=t.p+"static/media/user.28e44cb7.png",u=(t(41),function(){return Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)(a.b,{to:"/",children:Object(d.jsx)("div",{className:"logo",children:"Movie App"})}),Object(d.jsx)("div",{className:"user-image",children:Object(d.jsx)("img",{src:l,alt:"user"})})]})}),b=t(5),v=t(10),m=t.n(v),h=t(17),O=t(8),p=t(27),x=t.n(p).a.create({baseURL:"https://cors-anywhere.herokuapp.com/http://www.omdbapi.com"}),f="1ef1e20d",N=Object(O.b)("movies/fetchAsyncMovies",Object(h.a)(m.a.mark((function e(){var c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get("?s=".concat("Harry","&type=movie&apikey=").concat(f));case 2:return c=e.sent,e.abrupt("return",c.data);case 4:case"end":return e.stop()}}),e)})))),w=Object(O.b)("movies/fetchAsyncShows",Object(h.a)(m.a.mark((function e(){var c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get("?s=".concat("Cars","&type=series&apikey=").concat(f));case 2:return c=e.sent,e.abrupt("return",c.data);case 4:case"end":return e.stop()}}),e)})))),g=Object(O.c)({name:"movies",initialState:{movies:{},shows:{}},reducers:{addMovies:function(e,c){var t=c.payload;e.movies=t}},extraReducers:function(e){e.addCase(N.pending,(function(){console.log("Pending")})),e.addCase(N.fulfilled,(function(e,c){var t=c.payload;return console.log("Fetched Successfully"),Object(b.a)(Object(b.a)({},e),{},{movies:t})})),e.addCase(N.rejected,(function(){console.log("Rejected")})),e.addCase(w.fulfilled,(function(e,c){var t=c.payload;return console.log("Fetched Successfully"),Object(b.a)(Object(b.a)({},e),{},{shows:t})}))}}),y=(g.actions.addMovies,function(e){return e.movies.movies}),M=function(e){return e.movies.shows},k=g.reducer,S=(t(61),function(e){var c=e.data;return Object(d.jsx)("div",{className:"card-item",children:Object(d.jsx)(a.b,{to:"/movie/".concat(c.imdbID),children:Object(d.jsxs)("div",{className:"card-inner",children:[Object(d.jsx)("div",{className:"card-top",children:Object(d.jsx)("img",{src:c.Poster,alt:c.Title})}),Object(d.jsx)("div",{className:"card-bottom",children:Object(d.jsxs)("div",{className:"card-info",children:[Object(d.jsx)("h4",{children:c.Title}),Object(d.jsx)("p",{children:c.Year})]})})]})})})}),A=(t(62),function(){var e=Object(i.c)(y),c=Object(i.c)(M);console.log(e);var t,s="";return t="True"===e.Response?e.Search.map((function(e,c){return Object(d.jsx)(S,{data:e},c)})):Object(d.jsx)("div",{className:"movies-error",children:e.Error}),s="True"===c.Response?c.Search.map((function(e,c){return Object(d.jsx)(S,{data:e},c)})):Object(d.jsx)("div",{className:"shows-error",children:c.Error}),Object(d.jsxs)("div",{className:"movie-wrapper",children:[Object(d.jsxs)("div",{className:"movie-list",children:[Object(d.jsx)("h2",{children:"Movies"}),Object(d.jsx)("div",{className:"movie-container",children:t})]}),Object(d.jsxs)("div",{className:"show-list",children:[Object(d.jsx)("h2",{children:"Shows"}),Object(d.jsx)("div",{className:"movie-container",children:s})]})]})}),C=(t(63),function(){var e=Object(i.b)();return Object(s.useEffect)((function(){e(N()),e(w())}),[e]),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"banner-img"}),Object(d.jsx)(A,{})]})}),R=function(){return Object(d.jsx)("div",{children:"MovieDetail"})},E=function(){return Object(d.jsx)("div",{children:"PageNotFound"})};var T=function(){return Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)(u,{}),Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{path:"/redux-movie-app/",element:Object(d.jsx)(C,{})}),Object(d.jsx)(o.a,{path:"/redux-movie-app/movie/:imdbID",element:Object(d.jsx)(R,{})}),Object(d.jsx)(o.a,{path:"/redux-movie-app/*",element:Object(d.jsx)(E,{})})]})}),Object(d.jsx)(j,{})]})},D=Object(O.a)({reducer:{movies:k}});r.a.render(Object(d.jsx)(a.a,{children:Object(d.jsx)(i.a,{store:D,children:Object(d.jsx)(T,{})})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.1e183601.chunk.js.map