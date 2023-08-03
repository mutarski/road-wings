import{a,o,b as u,e as c,w as x,F as _,r as I,T as m,f as d,h as p,i as E,t as f}from"./entry.1aa7006d.js";const v={name:"Slider",props:{items:{type:Array,required:!0}},data(){return{currentSlideIndex:0,lastSlideIndex:4,direction:1,timeoutId:null}},mounted(){this.autoNext()},methods:{next(){this.direction=1,this.currentSlideIndex=this.currentSlideIndex===this.lastSlideIndex?0:this.currentSlideIndex+=1,this.resetAutoNext()},previous(){this.direction=-1,this.currentSlideIndex=this.currentSlideIndex===0?this.lastSlideIndex:this.currentSlideIndex-=1,this.resetAutoNext()},isNextSlide(e){return e===this.currentSlideIndex+1||this.currentSlideIndex===this.lastSlideIndex&&e===0},isPreviousSlide(e){return e===this.currentSlideIndex-1||this.currentSlideIndex===0&&e===this.lastSlideIndex},autoNext(){this.timeoutId=setTimeout(()=>{this.next()},5e3)},resetAutoNext(){clearTimeout(this.timeoutId),this.autoNext()},getSlideClass(e,t,n){return e===t?["Slider__slide--current"]:this.isNextSlide(e)?["Slider__slide--next z-index-0"]:this.isPreviousSlide(e)?["Slider__slide--previous z-index-0"]:n===-1?["Slider__slide--previous z-index-neg"]:["Slider__slide--next z-index-neg"]},onTouchStart(e){this.startX=e.changedTouches[0].clientX},onTouchEnd(e){this.endX=e.changedTouches[0].clientX,this.endX>this.startX&&(console.log("go previous"),this.previous()),this.endX<this.startX&&(console.log("go next"),this.next())}}},g=["src"],A={class:"Slider__slide-title position-absolute position-center text-center"};function T(e,t,n,S,l,s){return o(),u("div",{class:"carousel-view",onTouchstart:t[2]||(t[2]=(...i)=>s.onTouchStart&&s.onTouchStart(...i)),onTouchend:t[3]||(t[3]=(...i)=>s.onTouchEnd&&s.onTouchEnd(...i)),onTouchmove:t[4]||(t[4]=p(()=>{},["prevent"]))},[c(m,{tag:"div",class:"d-flex"},{default:x(()=>[(o(!0),u(_,null,I(n.items,(i,h)=>(o(),u("div",{class:E(["Slider__slide",s.getSlideClass(h,l.currentSlideIndex,l.direction)]),key:i.url},[d("img",{class:"vw-100 h-100 object-fit-cover",src:i.url},null,8,g),d("p",A,f(i.title),1)],2))),128))]),_:1}),d("div",{class:"btn btn-prev","aria-label":"Previous slide",onClick:t[0]||(t[0]=(...i)=>s.previous&&s.previous(...i))}," ❮ "),d("div",{class:"btn btn-next","aria-label":"Next slide",onClick:t[1]||(t[1]=(...i)=>s.next&&s.next(...i))}," ❯ ")],32)}const R=a(v,[["render",T],["__scopeId","data-v-b4fe1906"]]);function r(e){const t=`../images/${e}`;return console.log(new URL(t,import.meta.url).href),new URL(t,import.meta.url).href}const N={homeSlides:[{url:r("SLIDE0.jpg"),title:"N-420 CORDUBA-TARRACO"},{url:r("SLIDE1.jpg"),title:"SIERRA CAMEROS-LA DEMANADA-VALLE DEL EBRO"},{url:r("SLIDE2.jpg"),title:"EJE PIRENAICO-VIELHA"},{url:r("SLIDE3.jpg"),title:"MAESTRAZGO-SERRANÍA DE CUENCA"},{url:r("SLIDE4.jpg"),title:"ENTRE SIERRAS-MAR Y DESIERTO"}]},L={data(){return{slides:N.homeSlides}}};function C(e,t,n,S,l,s){const i=R;return o(),u("div",null,[c(i,{items:l.slides},null,8,["items"])])}const b=a(L,[["render",C]]);export{b as default};