(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(41)},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},39:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),i=a.n(c),l=a(5),s=a(6),o=a(8),m=a(7),u=a(9),f=(a(31),a(14)),d=a(10),p=(a(32),a(33),function(e){var t=e.title,a=e.description,n=e.imgUrl,c=e.imdbUrl,i=e.id;return r.a.createElement(f.b,{to:"/film/".concat(i),className:"card"},r.a.createElement("div",{className:"card-image"},r.a.createElement("figure",{className:"image is-4by3"},r.a.createElement("img",{src:n,alt:"Film logo"}))),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"media"},r.a.createElement("div",{className:"media-left"},r.a.createElement("figure",{className:"image is-48x48"},r.a.createElement("img",{src:"https://images-na.ssl-images-amazon.com/images/I/315W5zxAnTL._SY355_.png",alt:"imdb"}))),r.a.createElement("div",{className:"media-content"},r.a.createElement("p",{className:"title is-4"},t))),r.a.createElement("div",{className:"content"},a,r.a.createElement("br",null),r.a.createElement("p",{href:c},"IMDB"))))});p.defaultProps={description:"",imgUrl:"",imdbUrl:"",title:""};var h=a(25),b=a(12);function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var g={ADD_NEW_FILM:"FILM::ADD"},E=function(e){return{type:g.ADD_NEW_FILM,payload:e}},O={films:[]};var y=function(e){var t=e(),a=[];return{getState:function(){return t},dispatch:function(n){t=e(t,n),a.forEach(function(e){return e(t)})},subscribe:function(e){if("function"!==typeof e)throw new Error("Callback should be a function");return a.push(e),function(){a=a.filter(function(t){return t!==e})}}}}(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case g.ADD_NEW_FILM:return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(a,!0).forEach(function(t){Object(b.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e,{films:[].concat(Object(h.a)(e.films),[t.payload])});default:return e}}),j=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={films:y.getState().films},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;y.subscribe(function(){e.setState({films:y.getState().films})})}},{key:"render",value:function(){var e=this.state.films;return r.a.createElement("div",{className:"films"},e.map(function(e){return r.a.createElement(p,Object.assign({key:e.id},e))}))}}]),t}(n.Component);j.defaultProps={films:[]};var N=a(19),w=a(18),D=a.n(w),P=(a(39),Object(n.memo)(function(e){var t=e.error,a=e.name,n=e.label,c=e.type,i=e.onChange,l=e.placeholder,s=e.value,o=D()("input",{"is-danger":!!t}),m=D()("control",{"has-icons-right":!!t}),u="textarea"===c?c:"input";return r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:a,className:"label"},n),r.a.createElement("div",{className:m},r.a.createElement(u,{name:a,id:a,className:o,type:c,placeholder:l,value:s,onChange:i}),t&&r.a.createElement("span",{className:"icon is-small is-right"},r.a.createElement("i",{className:"fas fa-exclamation-triangle"}))),t&&r.a.createElement("p",{className:"help is-danger"},t))}));P.defaultProps={error:"",type:"text",placeholder:"Type text here"};var S=function(e,t){return t?null:"Field ".concat(e," is required")};function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var k={title:{value:"",error:null},description:{value:"",error:null},imgUrl:{value:"",error:null},imdbUrl:{value:"",error:null}},F={title:S,imgUrl:S,imdbUrl:S},U=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state=k,a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(function(e){return Object(b.a)({},n,{value:r,error:e[n].error})})},a.handleSubmit=function(e){e.preventDefault();var t=a.props.onAdd,n=a.getFormValue(),r=a.validate(),c=r.hasError,i=r.errors;c?a.setState(function(e){var t=i.map(function(t){var a=Object(N.a)(t,2),n=a[0];return[n,{error:a[1],value:e[n].value}]});return Object.fromEntries(t)}):(a.setState(k),t(n))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"getFormValue",value:function(){return Object.entries(this.state).reduce(function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(a,!0).forEach(function(t){Object(b.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e,Object(b.a)({},t[0],t[1].value))},{})}},{key:"validate",value:function(){var e=Object.entries(this.state).map(function(e){var t=Object(N.a)(e,2),a=t[0],n=t[1],r=F[a];return[a,r?r(a,n.value):null]});return{hasError:e.some(function(e){return!!e[1]}),errors:e}}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.description,n=e.imgUrl,c=e.imdbUrl;return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(P,Object.assign({},t,{name:"title",placeholder:"Input film title",label:"Title",onChange:this.handleChange})),r.a.createElement(P,Object.assign({},a,{type:"textarea",name:"description",placeholder:"Input film description",label:"Description",onChange:this.handleChange})),r.a.createElement(P,Object.assign({},n,{name:"imgUrl",placeholder:"Paste image url",label:"Image url",onChange:this.handleChange})),r.a.createElement(P,Object.assign({},c,{name:"imdbUrl",placeholder:"Paste IMDB url",label:"IMDB url",onChange:this.handleChange})),r.a.createElement("button",{type:"submit",className:"button is-primary"},"Add film"))}}]),t}(n.Component),A=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={film:a.findFilm()},a.findFilm=function(){var e=a.props.match;return a.store.getState().films.find(function(t){return String(t.id)===e.params.id})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){y.subscribe(function(){})}},{key:"componentWillUnmount",value:function(){y.subscribe(function(){})}},{key:"render",value:function(){var e=this.state.film,t=e.imgUrl,a=e.description,n=e.title,c=e.imdbUrl;return console.log("filmfilmfilmfilmfilmfilmfilmfilm",e),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-image"},r.a.createElement("figure",{className:"image is-4by3"},r.a.createElement("img",{src:t,alt:"Film logo"}))),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"media"},r.a.createElement("div",{className:"media-left"},r.a.createElement("figure",{className:"image is-48x48"},r.a.createElement("img",{src:"https://images-na.ssl-images-amazon.com/images/I/315W5zxAnTL._SY355_.png",alt:"imdb"}))),r.a.createElement("div",{className:"media-content"},r.a.createElement("p",{className:"title is-4"},n))),r.a.createElement("div",{className:"content"},a,r.a.createElement("br",null),r.a.createElement("a",{href:c},"IMDB"))))}}]),t}(n.Component);A.defaultProps={};var I="https://www.omdbapi.com/?apikey=2f4a38c9&t=",x=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={searchWord:""},a.handleAddFilm=function(e){y.dispatch(E(e))},a.handleSearchChange=function(e){var t=e.target;a.setState({searchWord:t.value})},a.searchFilm=function(e){fetch("".concat(I).concat(e)).then(function(e){return e.json()}).then(function(e){var t=e.Title,a=e.Plot,n=e.Poster,r=e.Website,c={id:e.imdbID,title:t,description:a,imgUrl:n,imdbUrl:r};y.dispatch(E(c))})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.searchFilm("spider")}},{key:"render",value:function(){var e=this,t=this.state.searchWord;return r.a.createElement(f.a,null,r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"box"},r.a.createElement(P,{value:t,name:"searchWord",placeholder:"Type search word",label:"Search film",onChange:this.handleSearchChange}),r.a.createElement("button",{onClick:function(){return e.searchFilm(t)},type:"button",className:"button is-primary"},"Search film")),r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:j}),r.a.createElement(d.a,{exact:!0,path:"/film/:id",component:A}))),r.a.createElement("div",{className:"sidebar"},r.a.createElement(U,{onAdd:this.handleAddFilm}))))}}]),t}(n.Component);a(40);i.a.render(r.a.createElement(x,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.6dbc571d.chunk.js.map