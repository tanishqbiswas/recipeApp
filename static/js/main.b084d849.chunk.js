(this.webpackJsonprecipe=this.webpackJsonprecipe||[]).push([[0],{15:function(e,a,t){e.exports=t(31)},20:function(e,a,t){},21:function(e,a,t){},22:function(e,a,t){},31:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),l=t(7),r=t.n(l),c=(t(20),t(21),t(4)),i=t(8),o=t(9),m=t(3),u=t(13),d=t(12),h=(t(22),t(10)),v=t.n(h),p=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(i.a)(this,t),(e=a.call(this)).searchHandler=function(a){e.setState({search:a.target.value}),console.log(e.state.search)},e.findoneHandler=function(){var a=Object(m.a)(e),t=new XMLHttpRequest,n="https://www.themealdb.com/api/json/v1/1/search.php?s="+e.state.search,s=[];t.onreadystatechange=function(){if(4===this.readyState&&200===this.status)if(null!=JSON.parse(this.responseText).meals){a.setState({value:1,valuehead:1,valueone:0,name:JSON.parse(this.responseText).meals[0].strMeal,ims:JSON.parse(this.responseText).meals[0].strMealThumb,catmeal:JSON.parse(this.responseText).meals[0].strCategory,areameal:JSON.parse(this.responseText).meals[0].strArea,desc:JSON.parse(this.responseText).meals[0].strInstructions,sourceurl:JSON.parse(this.responseText).meals[0].strSource}),s=JSON.parse(this.responseText).meals,console.log("inner",s[0]);var e=s[0];console.log("outer",s);var t=[];for(var n in e)n.match("strIngredient")&&""!==e[n]&&null!==e[n]&&t.push(e[n]);console.log(t),a.setState({ingrd:t});var l=[];for(var r in e)r.match("strMeasure")&&""!==e[r]&&null!==e[r]&&l.push(e[r]);a.setState({ingms:l})}else a.setState({nodata:"No data found",value:0,valueone:1,valuehead:1})},t.open("GET",n,!0),t.send()},e.likeClickHandler=function(){"black"===e.state.color?e.setState({color:"red"}):e.setState({color:"black"})},e.state={name:"",search:"",ims:"",value:0,valueone:0,nodata:"",catmeal:"",areameal:"",ingrd:[],ingms:[],bgColor:"",valuecolor:0,desc:"",sourceurl:"",valuehead:0,color:"black"},e}return Object(o.a)(t,[{key:"render",value:function(){var e,a=this;return s.a.createElement("div",null,s.a.createElement("div",{class:"card text-white bg-warning"},s.a.createElement("div",{class:"card-body"},s.a.createElement("div",{className:"hd"},"Recipe Finder"))),s.a.createElement("div",{class:"card text-white bg-info"},s.a.createElement("div",{class:"card-body"},s.a.createElement("div",{className:"search"},s.a.createElement("input",{className:"boxin",type:"text",value:this.state.search,placeholder:"Enter the Name of Dish",onChange:this.searchHandler}),s.a.createElement("button",(e={type:"button",class:"btn btn-danger"},Object(c.a)(e,"type","submit"),Object(c.a)(e,"onClick",this.findoneHandler.bind(this)),e),"Get Recipe")))),0===this.state.valuehead?s.a.createElement("div",{className:"hdone"},"Type a Dish Name to Search for it's ingredients"):"",1===this.state.value?s.a.createElement("div",{className:"contain"},s.a.createElement("div",{className:"heading"},s.a.createElement("center",null,s.a.createElement("a",{href:this.state.sourceurl,className:"link"},s.a.createElement("span",{className:"headone"},this.state.name))),s.a.createElement("center",null,s.a.createElement("div",{className:"like"},s.a.createElement(v.a,{className:this.state.color,onClick:function(){return a.likeClickHandler()}})))),s.a.createElement("div",{className:"containerone"},s.a.createElement("div",null,s.a.createElement("img",{src:this.state.ims,alt:"food",className:"pic"})),s.a.createElement("div",{className:"containertwo"},s.a.createElement("div",null,s.a.createElement("i",null,"Category of Meal - ")," ",this.state.catmeal),s.a.createElement("div",null,s.a.createElement("i",null,"Area of the Meal - ")," ",this.state.areameal),s.a.createElement("div",null,s.a.createElement("p",{className:"ingrdhead"},"Ingredients"),s.a.createElement("div",{id:"box"},s.a.createElement("span",null,this.state.ingrd.map((function(e){return s.a.createElement("p",{key:e},e," --- ")}))),s.a.createElement("span",null,this.state.ingms.map((function(e){return s.a.createElement("p",{key:a.state.ingms.indexOf(e)},e)}))),s.a.createElement("div",null))),s.a.createElement("div",null,s.a.createElement("center",null," ",s.a.createElement("p",{className:"ingrdhead"},"Recipes")),s.a.createElement("div",{className:"desc"},this.state.desc))))):"",1===this.state.valueone?s.a.createElement("div",null,s.a.createElement("center",null,"No Data Has been recieved")):"")}}]),t}(s.a.Component);var E=function(){return s.a.createElement(p,null)};t(29),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.b084d849.chunk.js.map