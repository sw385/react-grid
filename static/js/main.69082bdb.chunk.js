(this["webpackJsonpreact-grid"]=this["webpackJsonpreact-grid"]||[]).push([[0],{13:function(e,r,t){},14:function(e,r,t){},15:function(e,r,t){"use strict";t.r(r);var o=t(0),a=t.n(o),l=t(2),n=t.n(l),c=(t(13),t(3)),i=t(4),u=t(6),s=t(5),d=t(7);t(14);var f=function(e){var r=e.colorArray[e.row][e.col];return a.a.createElement("td",{className:r,onClick:function(){return e.handleClick(e.row,e.col)}},"cell")};var m=function(e){for(var r=[],t=0;t<e.numCols;++t)r.push(a.a.createElement(f,{row:e.row,col:t,colorArray:e.colorArray,handleClick:e.handleClick}));return a.a.createElement("tr",null,r)};var h=function(e){for(var r=[],t=0;t<e.numRows;++t)r.push(a.a.createElement(m,{numCols:e.numCols,row:t,colorArray:e.colorArray,handleClick:e.handleClick}));return a.a.createElement("table",null,r)},A=function(e){function r(e){var t;Object(c.a)(this,r),(t=Object(u.a)(this,Object(s.a)(r).call(this,e))).addRow=function(){var e=Array.from({length:t.state.colorArray[0].length}).map((function(e){return t.state.defaultColor}));t.setState({colorArray:t.state.colorArray.concat([e])},(function(){return console.log(t.state.colorArray)}))},t.addCol=function(){var e=t.state.colorArray.map((function(e){return e.concat(t.state.defaultColor)}));t.setState({colorArray:e})},t.removeRow=function(){if(t.state.colorArray.length>1){var e=t.state.colorArray.slice(0,-1);t.setState({colorArray:e},(function(){return console.log(t.state.colorArray)}))}else alert("Minimum rows achieved")},t.removeCol=function(){if(t.state.colorArray[0].length>1){var e=t.state.colorArray.map((function(e){return e.slice(0,-1)}));t.setState({colorArray:e})}else alert("Minimum cols achieved")},t.updateSelectedColor=function(e){t.setState({currentColor:e.target.value})},t.fillAll=function(){var e=t.state.colorArray.map((function(e){return e.map((function(){return t.state.currentColor}))}));t.setState({colorArray:e})},t.clearAll=function(){var e=t.state.colorArray.map((function(e){return e.map((function(){return t.state.defaultColor}))}));t.setState({colorArray:e})},t.fillUncolored=function(){for(var e=t.state,r=e.defaultColor,o=e.currentColor,a=e.colorArray,l=a,n=0;n<a.length;++n)for(var c=0;c<a[0].length;++c)l[n][c]===r&&(l[n][c]=o);t.setState({colorArray:l})},t.handleClick=function(e,r){for(var o=t.state,a=o.currentColor,l=o.colorArray,n=l,c=0;c<l.length;++c)for(var i=0;i<l[0].length;++i)c===e&&i===r&&(console.log(c,i),n[c][i]=a);console.log(n),t.setState({colorArray:n})};var o=Array.from({length:2}).map((function(e){return Array.from({length:3}).map((function(e){return"default-color"}))}));return t.state={defaultColor:"default-color",currentColor:"red-color",colorArray:o},console.log(t.state.colorArray),t}return Object(d.a)(r,e),Object(i.a)(r,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("button",{onClick:this.addRow},"Add a row"),a.a.createElement("button",{onClick:this.addCol},"Add a col"),a.a.createElement("button",{onClick:this.removeRow}," Remove a row"),a.a.createElement("button",{onClick:this.removeCol}," Remove a col"),a.a.createElement("select",{value:this.state.currentColor,onChange:this.updateSelectedColor},a.a.createElement("option",{id:"default",value:"default-color"},"default"),a.a.createElement("option",{id:"red",value:"red-color"},"red"),a.a.createElement("option",{id:"green",value:"green-color"},"green")),a.a.createElement(h,{numRows:this.state.colorArray.length,numCols:this.state.colorArray[0].length,colorArray:this.state.colorArray,handleClick:this.handleClick}),a.a.createElement("button",{onClick:this.fillAll},"Fill all"),a.a.createElement("button",{onClick:this.clearAll},"Clear all"),a.a.createElement("button",{onClick:this.fillUncolored},"Fill only uncolored"))}}]),r}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(a.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,r,t){e.exports=t(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.69082bdb.chunk.js.map