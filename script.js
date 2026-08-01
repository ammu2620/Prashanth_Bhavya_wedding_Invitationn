"use strict";
document.addEventListener("DOMContentLoaded",()=>{const opening=document.getElementById("opening"),openBtn=document.getElementById("openInvitationBtn"),music=document.getElementById("music"),musicBtn=document.getElementById("musicBtn"),stars=document.getElementById("openingStars"),trail=document.getElementById("sparkleTrail"),petalHeart=document.getElementById("petalHeart"),scratchCanvas=document.getElementById("scratchCanvas"),scratchCard=document.getElementById("scratchCard"),revealBtn=document.getElementById("revealDatesBtn"),acceptFields=document.getElementById("acceptFields"),attendanceBtns=document.querySelectorAll(".attendance-btn"),haldiCheck=document.getElementById("haldiCheck"),haldiPopup=document.getElementById("haldiPopup"),closeHaldi=document.getElementById("closeHaldiPopup"),haldiOkay=document.getElementById("haldiOkay"),successPopup=document.getElementById("successPopup"),closeSuccess=document.getElementById("closeSuccess"),form=document.getElementById("rsvpForm"),status=document.getElementById("formStatus"),guestCount=document.getElementById("guestCount");let attendance="accept";
for(let i=0;i<55;i++){const s=document.createElement("span");s.style.left=`${Math.random()*100}%`;s.style.top=`${Math.random()*100}%`;s.style.animationDelay=`${Math.random()*2.5}s`;stars.appendChild(s)}
setInterval(()=>{const s=document.createElement("span");s.style.left="50%";s.style.top="50%";s.style.setProperty("--sx",`${(Math.random()-.5)*120}px`);s.style.setProperty("--sy",`${(Math.random()-.5)*90}px`);trail.appendChild(s);setTimeout(()=>s.remove(),1500)},120);
for(let i=0;i<62;i++){const t=Math.PI*2*i/62,x=16*Math.sin(t)**3,y=13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t),p=document.createElement("span");p.textContent=i%4===0?"✦":"❀";p.style.setProperty("--x",`${x*6.4}px`);p.style.setProperty("--y",`${-y*6.4}px`);petalHeart.appendChild(p)}
openBtn.addEventListener("click",async()=>{opening.classList.add("hidden");try{await music.play();musicBtn.textContent="❚❚"}catch(_){musicBtn.textContent="♪"}});
musicBtn.addEventListener("click",async()=>{if(music.paused){try{await music.play();musicBtn.textContent="❚❚"}catch(_){}}else{music.pause();musicBtn.textContent="♪"}});
let ctx,isDown=false,revealed=false;
function setupScratch(){if(revealed)return;const r=scratchCard.getBoundingClientRect(),dpr=devicePixelRatio||1;scratchCanvas.width=r.width*dpr;scratchCanvas.height=r.height*dpr;scratchCanvas.style.width=`${r.width}px`;scratchCanvas.style.height=`${r.height}px`;ctx=scratchCanvas.getContext("2d");ctx.setTransform(dpr,0,0,dpr,0,0);const g=ctx.createLinearGradient(0,0,r.width,r.height);g.addColorStop(0,"#a77a18");g.addColorStop(.25,"#e8cc67");g.addColorStop(.52,"#fff2ad");g.addColorStop(.76,"#d6ae3f");g.addColorStop(1,"#8c6514");ctx.fillStyle=g;ctx.fillRect(0,0,r.width,r.height);ctx.fillStyle="rgba(55,38,0,.9)";ctx.textAlign="center";ctx.font=`600 ${Math.max(20,r.width*.04)}px Montserrat`;ctx.fillText("SCRATCH TO REVEAL",r.width/2,r.height/2-8);ctx.font=`400 ${Math.max(12,r.width*.021)}px Montserrat`;ctx.fillText("Use your finger or mouse",r.width/2,r.height/2+28);ctx.globalCompositeOperation="destination-out"}
function pos(e){const r=scratchCanvas.getBoundingClientRect(),p=e.touches?e.touches[0]:e;return{x:p.clientX-r.left,y:p.clientY-r.top}}
function scratch(e){if(!isDown||revealed)return;e.preventDefault();const p=pos(e);ctx.beginPath();ctx.arc(p.x,p.y,30,0,Math.PI*2);ctx.fill()}
function reveal(){if(revealed)return;revealed=true;scratchCanvas.style.transition="opacity .8s";scratchCanvas.style.opacity="0";setTimeout(()=>scratchCanvas.style.display="none",800);revealBtn.style.display="none"}
setupScratch();["mousedown","touchstart"].forEach(n=>scratchCanvas.addEventListener(n,e=>{isDown=true;scratch(e)},{passive:false}));["mousemove","touchmove"].forEach(n=>scratchCanvas.addEventListener(n,scratch,{passive:false}));["mouseup","mouseleave","touchend","touchcancel"].forEach(n=>scratchCanvas.addEventListener(n,()=>isDown=false));revealBtn.addEventListener("click",reveal);window.addEventListener("resize",setupScratch);
const weddingDate=new Date("2026-09-26T10:00:00-04:00").getTime();
function tick(){const d=weddingDate-Date.now();if(d<=0)return;document.getElementById("days").textContent=String(Math.floor(d/86400000)).padStart(2,"0");document.getElementById("hours").textContent=String(Math.floor((d%86400000)/3600000)).padStart(2,"0");document.getElementById("minutes").textContent=String(Math.floor((d%3600000)/60000)).padStart(2,"0");document.getElementById("seconds").textContent=String(Math.floor((d%60000)/1000)).padStart(2,"0")}tick();setInterval(tick,1000);
const acceptButton = document.querySelector('[data-attendance="accept"]');
const declineButton = document.querySelector('[data-attendance="decline"]');
                                                  const acceptFields = document.getElementById("acceptFields");
const guestCount = document.getElementById("guestCount");
const haldiCheck = document.getElementById("haldiCheck");
const haldiPopup = document.getElementById("haldiPopup");
const closeHaldi = document.getElementById("closeHaldi");
const haldiOkay = document.getElementById("haldiOkay");

function chooseAccept(){

    acceptButton.classList.add("active");
    declineButton.classList.remove("active");

    acceptFields.classList.remove("hidden");
}

function chooseDecline(){

    declineButton.classList.add("active");
    acceptButton.classList.remove("active");

    acceptFields.classList.add("hidden");

    document.querySelectorAll('#acceptFields input').forEach(input=>{
        input.checked = false;
    });

    guestCount.value = 1;

    haldiPopup.classList.remove("show");
    document.body.classList.remove("modal-open");
}

acceptButton.onclick = chooseAccept;
declineButton.onclick = chooseDecline;
                                                  
                                                  document.getElementById("minusGuest").addEventListener("click",()=>guestCount.value=Math.max(1,Number(guestCount.value)-1));document.getElementById("plusGuest").addEventListener("click",()=>guestCount.value=Math.min(10,Number(guestCount.value)+1));
const showHaldi = () => {
    haldiPopup.classList.add("show");
    document.body.classList.add("modal-open");
};

const hideHaldi = () => {
    haldiPopup.classList.remove("show");
    document.body.classList.remove("modal-open");
};

// Show popup ONLY if guest accepted AND selected Haldi
haldiCheck.addEventListener("change", () => {

    const accepted =
        document.querySelector('[data-attendance="accept"]')
        .classList.contains("active");

    if (accepted && haldiCheck.checked) {
        showHaldi();
    }

});

closeHaldi.addEventListener("click", hideHaldi);
haldiOkay.addEventListener("click", hideHaldi);
                                                  
                                                  document.querySelectorAll(".outline-btn").forEach(btn=>btn.addEventListener("click",()=>alert("Venue details will be updated soon.")));
form.addEventListener("submit",e=>{e.preventDefault();const events=[...document.querySelectorAll('input[name="events"]:checked')].map(i=>i.value);if(attendance==="accept"&&events.length===0){status.textContent="Please select at least one event.";return}const food=document.querySelector('input[name="food"]:checked');const record={submittedAt:new Date().toISOString(),name:document.getElementById("guestName").value.trim(),phone:document.getElementById("phone").value.trim(),attendance,guests:attendance==="accept"?Number(guestCount.value):0,events:attendance==="accept"?events:[],food:attendance==="accept"&&food?food.value:"Not applicable",message:document.getElementById("message").value.trim()};const saved=JSON.parse(localStorage.getItem("weddingRsvps")||"[]");saved.push(record);localStorage.setItem("weddingRsvps",JSON.stringify(saved));status.textContent="";successPopup.classList.add("show");document.body.classList.add("modal-open");form.reset();guestCount.value=1});closeSuccess.addEventListener("click",()=>{successPopup.classList.remove("show");document.body.classList.remove("modal-open")});
});
