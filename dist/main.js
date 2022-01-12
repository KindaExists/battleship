(()=>{"use strict";var e={d:(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},o:(e,n)=>Object.prototype.hasOwnProperty.call(e,n)};e.d({},{M2:()=>h,H6:()=>i,iB:()=>d});let n=!1;const t=(()=>{document.querySelectorAll(".game-panel");const e=document.querySelectorAll(".gameboard"),o=e[0],a=e[1];function l(e){e.textContent=""}return{renderPlayerBoard:function(e){const a=e.gameboard,s=o;l(s);const c=r.buildPlayerBoard(a);a.areAllShipsPlaced()||c.addEventListener("click",(r=>function(e,r){const o=r.gameboard,a=o.sideLength,l=e.target;if(l.classList.contains("board-cell")){const e=l.parentNode.children,s=Array.from(e).indexOf(l),c=Math.floor(s/a),d=s%a;o.setShip({x:d,y:c},"vertical"),t.renderPlayerBoard(r),o.areAllShipsPlaced()&&(n=!0,i())}}(r,e)),!0),s.appendChild(c)},renderOpponentBoard:function(e){const t=e.gameboard,o=a;l(o);const s=r.buildOpponentBoard(t);n&&s.addEventListener("click",(e=>d(e)),!0),o.appendChild(s)}}})(),r={buildPlayerBoard:function(e){const n=document.createElement("div");n.classList.add("board-grid");for(let t of e.board)for(let e of t){const t=document.createElement("div");t.classList.add("board-cell"),e.hasShip()&&e.isChecked?t.classList.add("dead-ship-cell"):e.hasShip()?t.classList.add("live-ship-cell"):e.isChecked&&t.classList.add("cell-checked"),n.appendChild(t)}return n},buildOpponentBoard:function(e){const n=document.createElement("div");n.classList.add("board-grid");for(let t of e.board)for(let e of t){const t=document.createElement("div");t.classList.add("board-cell"),e.hasShip()&&e.isChecked?t.classList.add("dead-ship-cell"):e.isChecked&&t.classList.add("cell-checked"),n.appendChild(t)}return n}},o=t,a=()=>{const e={isChecked:!1,ship:null,shipIndex:null,assignShip(n,t){e.ship=n,e.shipIndex=t},hasShip:()=>null!==e.ship};return e},l=e=>{const n=e,t=function(e){let n=Array(e);for(let t=0;t<e;t++){n[t]=Array(e);for(let r=0;r<e;r++)n[t][r]=a()}return n}(e);let r=[5,4,3,3,2];function o(){return s.ships.map((e=>e.isSunk())).every((e=>!0===e))}function l(e){return s.board[e.y][e.x]}const s={sideLength:n,board:t,ships:[],missed:[],getCell:l,setShip:function(e,t){const o=((e,n,t)=>{const r={length:e,cells:Array(e).fill(!0),pos:n,orie:t,hit:function(e){r.cells[e]=!1},isSunk:function(){return r.cells.every((e=>0==e))}};return r})(r[0],e,t),a=function(e){const t=e.length,r=e.pos,o=e.orie;let a=[];for(let e=0;e<t;e++){let t;"horizontal"===o?r.x+e<n&&(t=l({x:r.x+e,y:r.y})):"vertical"===o&&r.y+e<n&&(t=l({x:r.x,y:r.y+e})),a.push([t,e])}return!!a.every((e=>void 0!==e[0]&&!e[0].hasShip()))&&(a.forEach((n=>{n[0].assignShip(e,n[1])})),!0)}(o);a&&(s.ships.push(o),r.shift())},areAllShipsSunk:o,areAllShipsPlaced:function(){return r.length<=0},scrambleShips:function(){for(;!s.areAllShipsPlaced();){const e=Math.floor(2*Math.random())?"horizontal":"vertical",t=Math.floor(Math.random()*n),r=Math.floor(Math.random()*n);s.setShip({x:t,y:r},e)}},recieveAttack:function(e){const n=l({x:e.x,y:e.y});if(n.hasShip()){const e=n.ship,t=n.shipIndex;e.hit(t),e.isSunk()&&console.log("SHIP SUNK")}else s.missed.push(e);n.isChecked=!0,o()&&h()},wasCellChecked:function(e){return!0===l(e).isChecked}};return s},s=(e,n=!1)=>{function t(e,n){return!e.gameboard.wasCellChecked(n)&&(e.gameboard.recieveAttack(n),!0)}const r={name:e,isAI:n,gameboard:l(10),attackOpponent:t};return n&&(r.attackRandomCell=function(e){const n=e.gameboard.board.length;let r=!1;for(;!r;)r=t(e,{x:Math.floor(Math.random()*n),y:Math.floor(Math.random()*n)})}),r};let c;function i(){const e=c[1];o.renderOpponentBoard(e)}function d(e){const n=c[0],t=c[1],r=n.gameboard.sideLength,a=e.target;if(a.classList.contains("board-cell")){const e=a.parentNode.children,l=Array.from(e).indexOf(a),s=Math.floor(l/r),i=l%r;let d=!1;if(d=n.attackOpponent(t,{x:i,y:s}),!d)return!1;o.renderOpponentBoard(t),function(){const e=c[0];c[1].attackRandomCell(e),o.renderPlayerBoard(e)}()}}function h(){const e=c[0],r=c[1];e.gameboard.areAllShipsSunk()?p(r):p(e),function(e){n=!1,t.renderPlayerBoard(e[0]),t.renderPlayerBoard(e[1])}(c)}function p(e){console.log(`${e.name} wins!`)}!function(){const e=s("Player"),n=s("CPU",!0);c=[e,n],function(){const e=c[1];e.gameboard.scrambleShips(),o.renderOpponentBoard(e)}(),function(){const e=c[0];o.renderPlayerBoard(e)}()}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RixXQUNFLE1BQU1uRyxFQUFTNkYsRUFBUSxHQUV2QixvQkFBMEI3RixHQU4xQm9HLEdBNEVGQyxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kaXNwbGF5Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVPYmplY3RzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVPYmplY3RzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lT2JqZWN0cy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsImltcG9ydCB7IGdhbWUsIGdhbWVQbGF5ZXJUdXJuIH0gZnJvbSBcIi4vaW5kZXguanNcIjtcblxubGV0IGluR2FtZWxvb3AgPSBmYWxzZTtcbmxldCBzZWxlY3RlZFJvdGF0aW9uID0gJ3ZlcnRpY2FsJztcblxuY29uc3QgZGlzcGxheUNvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICBjb25zdCBkaXNwbGF5R2FtZVBhbmVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lLXBhbmVsJyk7XG4gIGNvbnN0IGRpc3BsYXlHYW1lYm9hcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWVib2FyZCcpO1xuXG4gIGNvbnN0IHBsYXllckRpc3BsYXlHYW1lYm9hcmQgPSBkaXNwbGF5R2FtZWJvYXJkc1swXTtcbiAgY29uc3Qgb3Bwb25lbnREaXNwbGF5R2FtZWJvYXJkID0gZGlzcGxheUdhbWVib2FyZHNbMV07XG5cbiAgZnVuY3Rpb24gY2xlYXJEaXNwbGF5Qm9hcmQoZGlzcGxheUdhbWVib2FyZCkge1xuICAgIGRpc3BsYXlHYW1lYm9hcmQudGV4dENvbnRlbnQgPSAnJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlclBsYXllckJvYXJkKHBsYXllcikge1xuICAgIGNvbnN0IGdhbWVib2FyZCA9IHBsYXllci5nYW1lYm9hcmQ7XG4gICAgY29uc3QgZGlzcGxheUdhbWVib2FyZCA9IHBsYXllckRpc3BsYXlHYW1lYm9hcmQ7XG4gICAgY2xlYXJEaXNwbGF5Qm9hcmQoZGlzcGxheUdhbWVib2FyZCk7XG5cbiAgICBjb25zdCBkaXNwbGF5R3JpZCA9IGVsZW1lbnRCdWlsZGVyLmJ1aWxkUGxheWVyQm9hcmQoZ2FtZWJvYXJkKTtcbiAgICBpZiAoIWdhbWVib2FyZC5hcmVBbGxTaGlwc1BsYWNlZCgpKSB7XG4gICAgICBkaXNwbGF5R3JpZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldnQpID0+IGFkZFNoaXAoZXZ0LCBwbGF5ZXIpLCB0cnVlKTtcbiAgICB9XG4gICAgZGlzcGxheUdhbWVib2FyZC5hcHBlbmRDaGlsZChkaXNwbGF5R3JpZCk7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJPcHBvbmVudEJvYXJkKG9wcG9uZW50KSB7XG4gICAgY29uc3QgZ2FtZWJvYXJkID0gb3Bwb25lbnQuZ2FtZWJvYXJkO1xuICAgIGNvbnN0IGRpc3BsYXlHYW1lYm9hcmQgPSBvcHBvbmVudERpc3BsYXlHYW1lYm9hcmQ7XG4gICAgY2xlYXJEaXNwbGF5Qm9hcmQoZGlzcGxheUdhbWVib2FyZCk7XG5cbiAgICBjb25zdCBkaXNwbGF5R3JpZCA9IGVsZW1lbnRCdWlsZGVyLmJ1aWxkT3Bwb25lbnRCb2FyZChnYW1lYm9hcmQpO1xuICAgIGlmIChpbkdhbWVsb29wKSB7XG4gICAgICBkaXNwbGF5R3JpZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldnQpID0+IGdhbWVQbGF5ZXJUdXJuKGV2dCksIHRydWUpO1xuICAgIH1cbiAgICBkaXNwbGF5R2FtZWJvYXJkLmFwcGVuZENoaWxkKGRpc3BsYXlHcmlkKTtcbiAgfVxuXG4gIGNvbnN0IHJldHMgPSB7XG4gICAgcmVuZGVyUGxheWVyQm9hcmQsXG4gICAgcmVuZGVyT3Bwb25lbnRCb2FyZFxuICB9O1xuXG4gIHJldHVybiByZXRzO1xufSkoKTtcblxuY29uc3QgZWxlbWVudEJ1aWxkZXIgPSAoKCkgPT4ge1xuICBmdW5jdGlvbiBidWlsZFBsYXllckJvYXJkKGdhbWVib2FyZCkge1xuICAgIGNvbnN0IGJvYXJkR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJvYXJkR3JpZC5jbGFzc0xpc3QuYWRkKCdib2FyZC1ncmlkJyk7XG5cbiAgICBmb3IgKGxldCByb3cgb2YgZ2FtZWJvYXJkLmJvYXJkKSB7XG4gICAgICBmb3IgKGxldCBjZWxsIG9mIHJvdykge1xuICAgICAgICBjb25zdCBib2FyZENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYm9hcmRDZWxsLmNsYXNzTGlzdC5hZGQoJ2JvYXJkLWNlbGwnKTtcblxuICAgICAgICBpZiAoY2VsbC5oYXNTaGlwKCkgJiYgY2VsbC5pc0NoZWNrZWQpIHtcbiAgICAgICAgICBib2FyZENlbGwuY2xhc3NMaXN0LmFkZCgnZGVhZC1zaGlwLWNlbGwnKTtcbiAgICAgICAgfSBlbHNlIGlmIChjZWxsLmhhc1NoaXAoKSkge1xuICAgICAgICAgIGJvYXJkQ2VsbC5jbGFzc0xpc3QuYWRkKCdsaXZlLXNoaXAtY2VsbCcpO1xuICAgICAgICB9IGVsc2UgaWYgKGNlbGwuaXNDaGVja2VkKSB7XG4gICAgICAgICAgYm9hcmRDZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwtY2hlY2tlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgYm9hcmRHcmlkLmFwcGVuZENoaWxkKGJvYXJkQ2VsbCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGJvYXJkR3JpZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1aWxkT3Bwb25lbnRCb2FyZChnYW1lYm9hcmQpIHtcbiAgICBjb25zdCBib2FyZEdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib2FyZEdyaWQuY2xhc3NMaXN0LmFkZCgnYm9hcmQtZ3JpZCcpO1xuXG4gICAgZm9yIChsZXQgcm93IG9mIGdhbWVib2FyZC5ib2FyZCkge1xuICAgICAgZm9yIChsZXQgY2VsbCBvZiByb3cpIHtcbiAgICAgICAgY29uc3QgYm9hcmRDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJvYXJkQ2VsbC5jbGFzc0xpc3QuYWRkKCdib2FyZC1jZWxsJyk7XG5cbiAgICAgICAgaWYgKGNlbGwuaGFzU2hpcCgpICYmIGNlbGwuaXNDaGVja2VkKSB7XG4gICAgICAgICAgYm9hcmRDZWxsLmNsYXNzTGlzdC5hZGQoJ2RlYWQtc2hpcC1jZWxsJyk7XG4gICAgICAgIH0gZWxzZSBpZiAoY2VsbC5pc0NoZWNrZWQpIHtcbiAgICAgICAgICBib2FyZENlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbC1jaGVja2VkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBib2FyZEdyaWQuYXBwZW5kQ2hpbGQoYm9hcmRDZWxsKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYm9hcmRHcmlkO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBidWlsZFBsYXllckJvYXJkLFxuICAgIGJ1aWxkT3Bwb25lbnRCb2FyZFxuICB9O1xufSkoKTtcblxuXG5mdW5jdGlvbiBhZGRTaGlwKGV2dCwgcGxheWVyKSB7XG4gIGNvbnN0IGdhbWVib2FyZCA9IHBsYXllci5nYW1lYm9hcmQ7XG4gIGNvbnN0IHNpemUgPSBnYW1lYm9hcmQuc2lkZUxlbmd0aDtcblxuICBjb25zdCB0YXJnZXQgPSBldnQudGFyZ2V0O1xuICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYm9hcmQtY2VsbCcpKSB7XG4gICAgY29uc3QgZ3JpZENlbGxzID0gdGFyZ2V0LnBhcmVudE5vZGUuY2hpbGRyZW47XG4gICAgY29uc3QgdGFyZ2V0SW5kZXggPSAgQXJyYXkuZnJvbShncmlkQ2VsbHMpLmluZGV4T2YodGFyZ2V0KTtcblxuICAgIGNvbnN0IHRhcmdldFJvdyA9IE1hdGguZmxvb3IodGFyZ2V0SW5kZXggLyBzaXplKTtcbiAgICBjb25zdCB0YXJnZXRDb2wgPSB0YXJnZXRJbmRleCAlIHNpemU7XG5cbiAgICBnYW1lYm9hcmQuc2V0U2hpcCh7eDp0YXJnZXRDb2wsIHk6dGFyZ2V0Um93fSwgc2VsZWN0ZWRSb3RhdGlvbik7XG5cbiAgICBkaXNwbGF5Q29udHJvbGxlci5yZW5kZXJQbGF5ZXJCb2FyZChwbGF5ZXIpO1xuXG4gICAgaWYoZ2FtZWJvYXJkLmFyZUFsbFNoaXBzUGxhY2VkKCkpIHtcbiAgICAgIGluR2FtZWxvb3AgPSB0cnVlO1xuICAgICAgZ2FtZSgpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkaXNhYmxlQm9hcmRzKHBsYXllcnMpIHtcbiAgaW5HYW1lbG9vcCA9IGZhbHNlO1xuICBkaXNwbGF5Q29udHJvbGxlci5yZW5kZXJQbGF5ZXJCb2FyZChwbGF5ZXJzWzBdKTtcbiAgZGlzcGxheUNvbnRyb2xsZXIucmVuZGVyUGxheWVyQm9hcmQocGxheWVyc1sxXSk7XG59XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlDb250cm9sbGVyO1xuZXhwb3J0IHsgZGlzYWJsZUJvYXJkcyB9OyIsImltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXAuanNcIjtcbmltcG9ydCB7IGRldGVybWluZVdpbm5lciB9IGZyb20gXCIuLi9pbmRleC5qc1wiO1xuXG5jb25zdCBDZWxsID0gKCkgPT4ge1xuICBjb25zdCByZXRzID0ge1xuICAgIGlzQ2hlY2tlZDogZmFsc2UsXG5cbiAgICBzaGlwOiBudWxsLFxuICAgIHNoaXBJbmRleDogbnVsbCxcbiAgICBhc3NpZ25TaGlwKHNoaXAsIGluZGV4KSB7XG4gICAgICByZXRzLnNoaXAgPSBzaGlwO1xuICAgICAgcmV0cy5zaGlwSW5kZXggPSBpbmRleDtcbiAgICB9LFxuICAgIGhhc1NoaXAoKSB7XG4gICAgICByZXR1cm4gcmV0cy5zaGlwICE9PSBudWxsO1xuICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuIHJldHM7XG59O1xuXG5jb25zdCBHYW1lYm9hcmQgPSAoc2l6ZSkgPT4ge1xuICBjb25zdCBzaWRlTGVuZ3RoID0gc2l6ZTtcbiAgY29uc3QgYm9hcmQgPSBfY3JlYXRlQm9hcmRHcmlkKHNpemUpO1xuICBjb25zdCBzaGlwcyA9IFtdO1xuICBjb25zdCBtaXNzZWQgPSBbXTtcblxuICBsZXQgbmV4dFNoaXBMZW5ndGhzID0gWzUsIDQsIDMsIDMsIDJdO1xuXG4gIGZ1bmN0aW9uIF9jcmVhdGVCb2FyZEdyaWQoc2l6ZSkge1xuICAgIGxldCBncmlkID0gQXJyYXkoc2l6ZSk7XG4gICAgZm9yIChsZXQgciA9IDA7IHIgPCBzaXplOyByKyspIHtcbiAgICAgIGdyaWRbcl0gPSBBcnJheShzaXplKTtcbiAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgc2l6ZTsgYysrKSB7XG4gICAgICAgIGdyaWRbcl1bY10gPSBDZWxsKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGdyaWQ7XG4gIH1cblxuICBmdW5jdGlvbiBfYXNzaWduU2hpcENlbGxzKHNoaXApIHtcbiAgICBjb25zdCBsZW5ndGggPSBzaGlwLmxlbmd0aDtcbiAgICBjb25zdCBzdGFydFBvcyA9IHNoaXAucG9zO1xuICAgIGNvbnN0IG9yaWUgPSBzaGlwLm9yaWU7XG5cbiAgICBsZXQgdG9PY2N1cHlDZWxscyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGNlbGwgPSB1bmRlZmluZWQ7XG4gICAgICBpZiAob3JpZSA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgaWYgKHN0YXJ0UG9zLnggKyBpIDwgc2lkZUxlbmd0aCkge1xuICAgICAgICAgIGNlbGwgPSBnZXRDZWxsKHtcbiAgICAgICAgICAgIHg6IHN0YXJ0UG9zLnggKyBpLFxuICAgICAgICAgICAgeTogc3RhcnRQb3MueSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChvcmllID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgaWYgKHN0YXJ0UG9zLnkgKyBpIDwgc2lkZUxlbmd0aCkge1xuICAgICAgICAgIGNlbGwgPSBnZXRDZWxsKHtcbiAgICAgICAgICAgIHg6IHN0YXJ0UG9zLngsXG4gICAgICAgICAgICB5OiBzdGFydFBvcy55ICsgaSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdG9PY2N1cHlDZWxscy5wdXNoKFtjZWxsLCBpXSk7XG4gICAgfVxuXG4gICAgY29uc3QgYXJlTGVnYWxQbGFjZW1lbnRzID0gdG9PY2N1cHlDZWxscy5ldmVyeSgoY2VsbCkgPT4ge1xuICAgICAgaWYgKGNlbGxbMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoY2VsbFswXS5oYXNTaGlwKCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG5cbiAgICBpZiAoYXJlTGVnYWxQbGFjZW1lbnRzKSB7XG4gICAgICB0b09jY3VweUNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgY2VsbFswXS5hc3NpZ25TaGlwKHNoaXAsIGNlbGxbMV0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gYXJlQWxsU2hpcHNTdW5rKCkge1xuICAgIHJldHVybiByZXRzLnNoaXBzXG4gICAgICAubWFwKChzaGlwKSA9PiB7XG4gICAgICAgIHJldHVybiBzaGlwLmlzU3VuaygpO1xuICAgICAgfSlcbiAgICAgIC5ldmVyeSgoYm9vbFZhbHVlKSA9PiB7XG4gICAgICAgIHJldHVybiBib29sVmFsdWUgPT09IHRydWU7XG4gICAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldENlbGwocG9zKSB7XG4gICAgcmV0dXJuIHJldHMuYm9hcmRbcG9zLnldW3Bvcy54XTtcbiAgfVxuXG5cbiAgZnVuY3Rpb24gYXJlQWxsU2hpcHNQbGFjZWQoKSB7XG4gICAgcmV0dXJuIG5leHRTaGlwTGVuZ3Rocy5sZW5ndGggPD0gMDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFNoaXAocG9zLCBvcmllKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gbmV4dFNoaXBMZW5ndGhzWzBdO1xuICAgIGNvbnN0IHNoaXAgPSBTaGlwKGxlbmd0aCwgcG9zLCBvcmllKTtcbiAgICBjb25zdCByZXN1bHQgPSBfYXNzaWduU2hpcENlbGxzKHNoaXApO1xuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHJldHMuc2hpcHMucHVzaChzaGlwKTtcbiAgICAgIG5leHRTaGlwTGVuZ3Rocy5zaGlmdCgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNjcmFtYmxlU2hpcHMoKSB7XG4gICAgd2hpbGUgKCFyZXRzLmFyZUFsbFNoaXBzUGxhY2VkKCkpIHtcbiAgICAgIGNvbnN0IHJhbmRPcmllID0gKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpKSA/ICdob3Jpem9udGFsJyA6ICd2ZXJ0aWNhbCc7XG4gICAgICBjb25zdCByYW5kWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNpZGVMZW5ndGgpO1xuICAgICAgY29uc3QgcmFuZFkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzaWRlTGVuZ3RoKTtcblxuICAgICAgcmV0cy5zZXRTaGlwKHt4OiByYW5kWCwgeTogcmFuZFl9LCByYW5kT3JpZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVjaWV2ZUF0dGFjayhwb3MpIHtcbiAgICBjb25zdCBjZWxsID0gZ2V0Q2VsbCh7XG4gICAgICB4OiBwb3MueCxcbiAgICAgIHk6IHBvcy55LFxuICAgIH0pO1xuICAgIGlmIChjZWxsLmhhc1NoaXAoKSkge1xuICAgICAgY29uc3Qgc2hpcCA9IGNlbGwuc2hpcDtcbiAgICAgIGNvbnN0IHNoaXBJbmRleCA9IGNlbGwuc2hpcEluZGV4O1xuICAgICAgc2hpcC5oaXQoc2hpcEluZGV4KTtcblxuICAgICAgaWYgKHNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgLy8gU2hpcCBzdW5rZW4gY29kZSBoZXJlXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU0hJUCBTVU5LXCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXRzLm1pc3NlZC5wdXNoKHBvcyk7XG4gICAgfVxuICAgIGNlbGwuaXNDaGVja2VkID0gdHJ1ZTtcblxuICAgIGlmIChhcmVBbGxTaGlwc1N1bmsoKSkge1xuICAgICAgLy8gR2FtZW92ZXIgY29kZS9mdW5jdGlvbiBjYWxsIGhlcmVcbiAgICAgIGRldGVybWluZVdpbm5lcigpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHdhc0NlbGxDaGVja2VkKHBvcykge1xuICAgIHJldHVybiBnZXRDZWxsKHBvcykuaXNDaGVja2VkID09PSB0cnVlO1xuICB9XG5cbiAgY29uc3QgcmV0cyA9IHtcbiAgICBzaWRlTGVuZ3RoLFxuICAgIGJvYXJkLFxuICAgIHNoaXBzLFxuICAgIG1pc3NlZCxcblxuICAgIGdldENlbGwsXG4gICAgc2V0U2hpcCxcbiAgICBhcmVBbGxTaGlwc1N1bmssXG4gICAgYXJlQWxsU2hpcHNQbGFjZWQsXG4gICAgc2NyYW1ibGVTaGlwcyxcbiAgICByZWNpZXZlQXR0YWNrLFxuICAgIHdhc0NlbGxDaGVja2VkLFxuICB9O1xuXG4gIHJldHVybiByZXRzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuIiwiY29uc3QgU2hpcCA9IChsZW5ndGgsIHBvcywgb3JpZSkgPT4ge1xuICBjb25zdCBjZWxscyA9IEFycmF5KGxlbmd0aCkuZmlsbCh0cnVlKTtcblxuICBmdW5jdGlvbiBoaXQgKGNlbGxJbmRleCkge1xuICAgIHJldHMuY2VsbHNbY2VsbEluZGV4XSA9IGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNTdW5rKCkge1xuICAgIHJldHVybiByZXRzLmNlbGxzLmV2ZXJ5KGNlbGwgPT4gKGNlbGwgPT0gZmFsc2UpKTtcbiAgfVxuXG4gIGNvbnN0IHJldHMgPSB7XG4gICAgbGVuZ3RoLFxuICAgIGNlbGxzLFxuICAgIHBvcyxcbiAgICBvcmllLFxuXG4gICAgaGl0LFxuICAgIGlzU3VuayxcbiAgfTtcblxuICByZXR1cm4gcmV0cztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7IiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcblxuY29uc3QgZ2FtZWJvYXJkU2l6ZSA9IDEwXG5cbmNvbnN0IFBsYXllciA9IChuYW1lLCBpc0FJPWZhbHNlKSA9PiB7XG4gIGNvbnN0IGdhbWVib2FyZCA9IEdhbWVib2FyZChnYW1lYm9hcmRTaXplKTtcblxuICBmdW5jdGlvbiBhdHRhY2tSYW5kb21DZWxsKG9wcG9uZW50KSB7XG4gICAgY29uc3QgbGVuZ3RoID0gb3Bwb25lbnQuZ2FtZWJvYXJkLmJvYXJkLmxlbmd0aDtcblxuICAgIGxldCBhdHRhY2tTdWNjZXNzID0gZmFsc2U7XG4gICAgd2hpbGUoIWF0dGFja1N1Y2Nlc3MpIHtcbiAgICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBsZW5ndGgpO1xuICAgICAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxlbmd0aCk7XG5cbiAgICAgIGNvbnN0IHBvcyA9IHt4LCB5fTtcbiAgICAgIGF0dGFja1N1Y2Nlc3MgPSBhdHRhY2tPcHBvbmVudChvcHBvbmVudCwgcG9zKTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXR1cm5zIHRydWUgaWYgdGFyZ2V0IHBvc2l0aW9uIGlzIGEgdmFsaWQgY2xlbGxcbiAgLy8gUmV0dXJucyBmYWxzZSBvdGhlcndpc2VcbiAgZnVuY3Rpb24gYXR0YWNrT3Bwb25lbnQob3Bwb25lbnQsIHBvcykge1xuICAgIGlmKCFvcHBvbmVudC5nYW1lYm9hcmQud2FzQ2VsbENoZWNrZWQocG9zKSkge1xuICAgICAgb3Bwb25lbnQuZ2FtZWJvYXJkLnJlY2lldmVBdHRhY2socG9zKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCByZXRzID0ge1xuICAgIG5hbWUsXG4gICAgaXNBSSxcbiAgICBnYW1lYm9hcmQsXG4gICAgYXR0YWNrT3Bwb25lbnRcbiAgfTtcblxuICBpZiAoaXNBSSkge1xuICAgIHJldHMuYXR0YWNrUmFuZG9tQ2VsbCA9IGF0dGFja1JhbmRvbUNlbGw7XG4gIH1cblxuICByZXR1cm4gcmV0cztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjsiLCJpbXBvcnQgZGlzcGxheSBmcm9tIFwiLi9kaXNwbGF5Q29udHJvbGxlclwiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9nYW1lT2JqZWN0cy9wbGF5ZXJcIjtcbmltcG9ydCB7IGRpc2FibGVCb2FyZHMgfSBmcm9tIFwiLi9kaXNwbGF5Q29udHJvbGxlclwiO1xuXG5sZXQgcGxheWVycyA9IHVuZGVmaW5lZDtcblxuZnVuY3Rpb24gc3RhcnQoKSB7XG4gIGNvbnN0IHBsYXllciA9IFBsYXllcignUGxheWVyJyk7XG4gIGNvbnN0IGNvbXB1dGVyQUkgPSBQbGF5ZXIoJ0NQVScsIHRydWUpO1xuXG4gIHBsYXllcnMgPSBbcGxheWVyLCBjb21wdXRlckFJXTtcbiAgY29tcHV0ZXJTZXR1cCgpO1xuICBwbGF5ZXJTZXR1cCgpO1xufVxuXG5mdW5jdGlvbiBwbGF5ZXJTZXR1cCgpIHtcbiAgY29uc3QgcGxheWVyID0gcGxheWVyc1swXTtcblxuICBkaXNwbGF5LnJlbmRlclBsYXllckJvYXJkKHBsYXllcik7XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVyU2V0dXAoKSB7XG4gIGNvbnN0IG9wcG9uZW50ID0gcGxheWVyc1sxXTtcblxuICBvcHBvbmVudC5nYW1lYm9hcmQuc2NyYW1ibGVTaGlwcygpXG4gIGRpc3BsYXkucmVuZGVyT3Bwb25lbnRCb2FyZChvcHBvbmVudCk7XG59XG5cblxuZnVuY3Rpb24gZ2FtZSgpIHtcbiAgY29uc3Qgb3Bwb25lbnQgPSBwbGF5ZXJzWzFdO1xuICBkaXNwbGF5LnJlbmRlck9wcG9uZW50Qm9hcmQob3Bwb25lbnQpO1xufVxuXG5mdW5jdGlvbiBnYW1lUGxheWVyVHVybihldnQpIHtcbiAgY29uc3QgcGxheWVyID0gcGxheWVyc1swXTtcbiAgY29uc3Qgb3Bwb25lbnQgPSBwbGF5ZXJzWzFdO1xuXG4gIGNvbnN0IGdhbWVib2FyZCA9IHBsYXllci5nYW1lYm9hcmQ7XG4gIGNvbnN0IHNpemUgPSBnYW1lYm9hcmQuc2lkZUxlbmd0aDtcblxuICBjb25zdCB0YXJnZXQgPSBldnQudGFyZ2V0O1xuICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYm9hcmQtY2VsbCcpKSB7XG4gICAgY29uc3QgZ3JpZENlbGxzID0gdGFyZ2V0LnBhcmVudE5vZGUuY2hpbGRyZW47XG4gICAgY29uc3QgdGFyZ2V0SW5kZXggPSAgQXJyYXkuZnJvbShncmlkQ2VsbHMpLmluZGV4T2YodGFyZ2V0KTtcblxuICAgIGNvbnN0IHRhcmdldFJvdyA9IE1hdGguZmxvb3IodGFyZ2V0SW5kZXggLyBzaXplKTtcbiAgICBjb25zdCB0YXJnZXRDb2wgPSB0YXJnZXRJbmRleCAlIHNpemU7XG5cbiAgICBsZXQgbGVnYWxNb3ZlID0gZmFsc2U7XG4gICAgbGVnYWxNb3ZlID0gcGxheWVyLmF0dGFja09wcG9uZW50KG9wcG9uZW50LCB7eDp0YXJnZXRDb2wsIHk6dGFyZ2V0Um93fSk7XG4gICAgaWYgKCFsZWdhbE1vdmUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBkaXNwbGF5LnJlbmRlck9wcG9uZW50Qm9hcmQob3Bwb25lbnQpO1xuICAgIGdhbWVPcHBvbmVudFR1cm4oKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnYW1lT3Bwb25lbnRUdXJuKCkge1xuICBjb25zdCBwbGF5ZXIgPSBwbGF5ZXJzWzBdO1xuICBjb25zdCBvcHBvbmVudCA9IHBsYXllcnNbMV07XG5cbiAgLy8gQ3VycmVudGx5IGxvb3BpbmcgdG8gaW5maW5pdHlcbiAgb3Bwb25lbnQuYXR0YWNrUmFuZG9tQ2VsbChwbGF5ZXIpO1xuICBkaXNwbGF5LnJlbmRlclBsYXllckJvYXJkKHBsYXllcik7XG59XG5cbmZ1bmN0aW9uIGRldGVybWluZVdpbm5lcigpIHtcbiAgY29uc3QgcGxheWVyID0gcGxheWVyc1swXTtcbiAgY29uc3Qgb3Bwb25lbnQgPSBwbGF5ZXJzWzFdO1xuXG4gIGNvbnN0IHBsYXllckdhbWVib2FyZCA9IHBsYXllci5nYW1lYm9hcmQ7XG5cbiAgaWYgKHBsYXllckdhbWVib2FyZC5hcmVBbGxTaGlwc1N1bmsoKSkge1xuICAgIGRlY2xhcmVXaW5uZXIob3Bwb25lbnQpO1xuICB9IGVsc2Uge1xuICAgIGRlY2xhcmVXaW5uZXIocGxheWVyKTtcbiAgfVxuXG4gIGRpc2FibGVCb2FyZHMocGxheWVycyk7XG59XG5cbmZ1bmN0aW9uIGRlY2xhcmVXaW5uZXIocGxheWVyKSB7XG4gIGNvbnNvbGUubG9nKGAke3BsYXllci5uYW1lfSB3aW5zIWApO1xufVxuXG5zdGFydCgpO1xuXG5leHBvcnQgeyBnYW1lLCBnYW1lUGxheWVyVHVybiwgZGV0ZXJtaW5lV2lubmVyIH07Il0sIm5hbWVzIjpbIl9fd2VicGFja19yZXF1aXJlX18iLCJleHBvcnRzIiwiZGVmaW5pdGlvbiIsImtleSIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJvYmoiLCJwcm9wIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaW5HYW1lbG9vcCIsImRpc3BsYXlDb250cm9sbGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZGlzcGxheUdhbWVib2FyZHMiLCJwbGF5ZXJEaXNwbGF5R2FtZWJvYXJkIiwib3Bwb25lbnREaXNwbGF5R2FtZWJvYXJkIiwiY2xlYXJEaXNwbGF5Qm9hcmQiLCJkaXNwbGF5R2FtZWJvYXJkIiwidGV4dENvbnRlbnQiLCJyZW5kZXJQbGF5ZXJCb2FyZCIsInBsYXllciIsImdhbWVib2FyZCIsImRpc3BsYXlHcmlkIiwiZWxlbWVudEJ1aWxkZXIiLCJidWlsZFBsYXllckJvYXJkIiwiYXJlQWxsU2hpcHNQbGFjZWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZ0Iiwic2l6ZSIsInNpZGVMZW5ndGgiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImdyaWRDZWxscyIsInBhcmVudE5vZGUiLCJjaGlsZHJlbiIsInRhcmdldEluZGV4IiwiQXJyYXkiLCJmcm9tIiwiaW5kZXhPZiIsInRhcmdldFJvdyIsIk1hdGgiLCJmbG9vciIsInRhcmdldENvbCIsInNldFNoaXAiLCJ4IiwieSIsImdhbWUiLCJhZGRTaGlwIiwiYXBwZW5kQ2hpbGQiLCJyZW5kZXJPcHBvbmVudEJvYXJkIiwib3Bwb25lbnQiLCJidWlsZE9wcG9uZW50Qm9hcmQiLCJnYW1lUGxheWVyVHVybiIsImJvYXJkR3JpZCIsImNyZWF0ZUVsZW1lbnQiLCJhZGQiLCJyb3ciLCJib2FyZCIsImNlbGwiLCJib2FyZENlbGwiLCJoYXNTaGlwIiwiaXNDaGVja2VkIiwiQ2VsbCIsInJldHMiLCJzaGlwIiwic2hpcEluZGV4IiwiYXNzaWduU2hpcCIsImluZGV4IiwiZ3JpZCIsInIiLCJjIiwiX2NyZWF0ZUJvYXJkR3JpZCIsIm5leHRTaGlwTGVuZ3RocyIsImFyZUFsbFNoaXBzU3VuayIsInNoaXBzIiwibWFwIiwiaXNTdW5rIiwiZXZlcnkiLCJib29sVmFsdWUiLCJnZXRDZWxsIiwicG9zIiwibWlzc2VkIiwib3JpZSIsImxlbmd0aCIsImNlbGxzIiwiZmlsbCIsImhpdCIsImNlbGxJbmRleCIsInJlc3VsdCIsInN0YXJ0UG9zIiwidG9PY2N1cHlDZWxscyIsImkiLCJwdXNoIiwidW5kZWZpbmVkIiwiZm9yRWFjaCIsIl9hc3NpZ25TaGlwQ2VsbHMiLCJzaGlmdCIsInNjcmFtYmxlU2hpcHMiLCJyYW5kT3JpZSIsInJhbmRvbSIsInJhbmRYIiwicmFuZFkiLCJyZWNpZXZlQXR0YWNrIiwiY29uc29sZSIsImxvZyIsImRldGVybWluZVdpbm5lciIsIndhc0NlbGxDaGVja2VkIiwibmFtZSIsImlzQUkiLCJhdHRhY2tPcHBvbmVudCIsImF0dGFja1JhbmRvbUNlbGwiLCJhdHRhY2tTdWNjZXNzIiwicGxheWVycyIsImxlZ2FsTW92ZSIsImdhbWVPcHBvbmVudFR1cm4iLCJkZWNsYXJlV2lubmVyIiwiZGlzYWJsZUJvYXJkcyIsImNvbXB1dGVyQUkiLCJjb21wdXRlclNldHVwIiwicGxheWVyU2V0dXAiLCJzdGFydCJdLCJzb3VyY2VSb290IjoiIn0=