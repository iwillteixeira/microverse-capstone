const team=[{name:"John Doe",profission:"Develpoper",description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",image:"/dist/assets/img/pales1.png"},{name:"Brad Doe",profission:"Front-End",description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione odio magnam.",image:"/dist/assets/img/pales2.png"},{name:"Anne Doe",profission:"instructional designer",description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione odio magnam perspiciatis, ipsam obcaecati id.",image:"/dist/assets/img/pales3.png"},{name:"Marry Doe",profission:"Develpoper",description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione odio magnam perspiciatis.",image:"/dist/assets/img/pales4.png"}],generateTeam=()=>{const i=document.querySelector("#our-team");team.forEach((e=>{i.insertAdjacentHTML("beforeend",`<li>\n        <div>\n          <div class="bg-square"></div>\n          <img src="${e.image}" alt="">\n        </div>\n        <div class="description">\n          <h3>${e.name}</h3>\n          <p>${e.profission} </p>\n          <hr>\n          <p>${e.description}</p>\n        </div>\n    </li>`)}))};document.addEventListener("DOMContentLoaded",(function(i){generateTeam()}));
//# sourceMappingURL=team.js.map