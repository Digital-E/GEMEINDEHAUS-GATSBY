(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{164:function(e,t,n){"use strict";n.r(t);var A=n(5),a=n.n(A),i=n(0),o=n.n(i),r=(n(168),n(29)),c=n(16),l=(n(169),n(62)),d=n(181),s=n.n(d),p=(n(201),n(166)),m=(n(87),r.a.ul.withConfig({displayName:"menu__StyledUl",componentId:"ldryeq-0"})(["list-style:none;grid-column:2/8;align-self:flex-end;margin:0 0 110px 0;line-height:40px;@media(min-width:992px){margin:20px 0;}"])),u=Object(r.a)(l.a).withConfig({displayName:"menu__StyledLink",componentId:"ldryeq-1"})(["text-decoration:none;font-family:'Druk-Wide-Medium';color:#0A5640;font-size:2em;@media (min-width:992px){text-decoration:none;font-family:'Druk-Wide-Medium';color:#0A5640;font-size:44px;}"]),E=function(e){function t(){return e.call(this)||this}a()(t,e);var n=t.prototype;return n.onClick=function(){console.log(document.querySelector(".menutop")),document.querySelector(".menutop").style.transform="translateY(0%)"},n.render=function(){return o.a.createElement(m,null,o.a.createElement("li",null,o.a.createElement(u,{onClick:this.onClick,to:"/workspaces"},"Workspaces")),o.a.createElement("li",null,o.a.createElement(u,{onClick:this.onClick,to:"/about"},"About")),o.a.createElement("li",null,o.a.createElement(u,{onClick:this.onClick,to:"/stpauli"},"St. Pauli")),o.a.createElement("li",null,o.a.createElement(u,{onClick:this.onClick,to:"/kontakt"},"Kontakt")))},t}(o.a.Component),g=(n(72),r.a.ul.withConfig({displayName:"otherlinks__StyledUl",componentId:"c2suhy-0"})(["list-style:none;grid-column:12 / 8;align-self:flex-end;justify-self:flex-end;margin:20px 0;display:none;@media (min-width:992px){display:inline-block;}"])),f=r.a.a.withConfig({displayName:"otherlinks__StyledLink",componentId:"c2suhy-1"})(["text-decoration:none;font-family:'Druk-Wide-Medium';color:#0A5640;font-size:18px;display:flex;justify-content:flex-end;"]),h=r.a.p.withConfig({displayName:"otherlinks__Address",componentId:"c2suhy-2"})(["font-family:'Druk-Wide-Medium';color:#0A5640;text-align:right;"]),w=function(){return o.a.createElement(g,null,o.a.createElement(h,null,"GEMEINDEHAUS ",o.a.createElement("br",null),"BRUNNENHOFSTR. 2 ",o.a.createElement("br",null),"22767 Hamburg"),o.a.createElement("li",null,o.a.createElement(f,{href:"https://www.instagram.com/gemeindehaus.work/",target:"_blank"},"INSTA")),o.a.createElement("li",null,o.a.createElement(f,{href:"https://www.facebook.com/gemeindehaus.work/",target:"_blank"},"FACEBOOK")))},y=n(202),b=n.n(y),k=r.a.video.withConfig({displayName:"backgroundvideo__StyledVideo",componentId:"gdwzdv-0"})(["position:fixed;left:50%;top:50%;min-width:100%;min-height:100%;height:auto;width:auto;transform:translate(-50%,-50%);z-index:-1;overflow:hidden"]),B=function(){return o.a.createElement("div",{id:"scene","data-relative-input":"true"},o.a.createElement(k,{"data-depth":"0.2",muted:!0,playsInline:!0,loop:!0,autoPlay:!0},o.a.createElement("source",{src:b.a,type:"video/mp4"}),"Your browser does not support the video tag."))},x=n(203),N=n.n(x);n(204),n(205);n.d(t,"pageQuery",function(){return v});var I=r.a.div.withConfig({displayName:"pages__Container",componentId:"sc-6kvjaa-0"})(["margin:0;padding:0;display:grid;grid-template-columns:repeat(12,1fr);grid-template-rows:1fr;height:100vh;overflow:hidden;width:100vw;"]),S=r.a.img.withConfig({displayName:"pages__ImgTitle",componentId:"sc-6kvjaa-1"})(["grid-column:2 / 12;width:100%;padding:20px 0px;"]),j=c.b.div({preEnter:{position:"fixed",x:"100%",overflow:"hidden",transition:{duration:600,ease:"easeInOut"}},enter:{position:"fixed",opacity:1,overflow:"hidden",x:"0%",transition:{duration:600,ease:"easeInOut"}},exit:{position:"fixed",opacity:1,overflow:"hidden",x:"-100%",transition:{duration:600,ease:"easeInOut"}}}),D=function(e){function t(){return e.apply(this,arguments)||this}a()(t,e);var n=t.prototype;return n.componentDidMount=function(){document.querySelector(".menutop").style.transform="translateY(-100%)";var e=document.getElementById("scene");new s.a(e)},n.render=function(){var e=this.props,t=(e.children,e.location);return console.log(t),o.a.createElement(o.a.Fragment,null,o.a.createElement(j,{style:{overflow:"hidden",height:"100%"}},o.a.createElement(p.a,{title:"Home",keywords:["gemeindehaus","workspace","coworking"]}),o.a.createElement(I,null,o.a.createElement(S,{src:N.a}),o.a.createElement(E,{location:this.props.location}),o.a.createElement(w,null)),o.a.createElement(B,null)))},t}(o.a.PureComponent),v=(t.default=D,"3808403634")},166:function(e,t,n){"use strict";var A=n(167),a=n(0),i=n.n(a),o=n(1),r=n.n(o),c=n(169),l=n.n(c);function d(e){var t=e.description,n=e.lang,a=e.meta,o=e.keywords,r=e.title,c=A.data.site,d=t||c.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:n},title:r,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:r},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:r},{name:"twitter:description",content:d}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(a)})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:r.a.string,lang:r.a.string,meta:r.a.array,keywords:r.a.arrayOf(r.a.string),title:r.a.string.isRequired},t.a=d},167:function(e){e.exports={data:{site:{siteMetadata:{title:"GEMEINDEHAUS",description:"Description goes here.",author:"Digital-E"}}}}},201:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAMCBAX/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAAByVSaKSwUf//EABkQAAIDAQAAAAAAAAAAAAAAAAABAhAREv/aAAgBAQABBQJu8FLDqB//xAAXEQEAAwAAAAAAAAAAAAAAAAAAARES/9oACAEDAQE/AaYl/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGhAAAgIDAAAAAAAAAAAAAAAAAAECIDIzkf/aAAgBAQAGPwKmMWa10//EABsQAAICAwEAAAAAAAAAAAAAAAABETEQIXHx/9oACAEBAAE/IV0iNvDgxVuhHtD/2gAMAwEAAgADAAAAEEgP/8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQMBAT8QEkP/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAIAQIBAT8QjX//xAAdEAEAAwABBQAAAAAAAAAAAAABABEhMUFxgZHB/9oACAEBAAE/ECLsWbLqGhtw4mio3tVBEN8/sYv0+w/Z/9k=",aspectRatio:1.4997000599880024,src:"/GEMEINDEHAUS-GATSBY/static/c52becc35dbbcc03325977259432fd56/b9797/prices.jpg",srcSet:"/GEMEINDEHAUS-GATSBY/static/c52becc35dbbcc03325977259432fd56/df397/prices.jpg 75w,\n/GEMEINDEHAUS-GATSBY/static/c52becc35dbbcc03325977259432fd56/ec7f3/prices.jpg 150w,\n/GEMEINDEHAUS-GATSBY/static/c52becc35dbbcc03325977259432fd56/b9797/prices.jpg 300w,\n/GEMEINDEHAUS-GATSBY/static/c52becc35dbbcc03325977259432fd56/69ff0/prices.jpg 450w,\n/GEMEINDEHAUS-GATSBY/static/c52becc35dbbcc03325977259432fd56/5c434/prices.jpg 600w,\n/GEMEINDEHAUS-GATSBY/static/c52becc35dbbcc03325977259432fd56/32e7f/prices.jpg 900w,\n/GEMEINDEHAUS-GATSBY/static/c52becc35dbbcc03325977259432fd56/023b0/prices.jpg 2500w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},202:function(e,t,n){e.exports=n.p+"static/gemeindehausbackgroundvideo-3f01317f25bbe5d6325ffb23804b2859.mp4"},203:function(e,t,n){e.exports=n.p+"static/GEMEINDEHAUS-TITLE-ea204414e35cac49bbe58a705e325d0a.svg"},209:function(e,t){},211:function(e,t){}}]);
//# sourceMappingURL=component---src-pages-index-js-018ba7cb5e24af22d1a5.js.map