(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{159:function(e,t,i){"use strict";i.r(t),i.d(t,"pageQuery",function(){return h});var n=i(0),a=i.n(n),r=(i(61),i(164)),o=i.n(r),s=i(39),l=i(40),c=(i(167),i(165)),d=(i(169),i(170),i(171),i(84),i(173),i(174),s.a.div.withConfig({displayName:"kontakt__Container",componentId:"sc-1f99pwj-0"})(["margin:0;padding:0;display:grid;grid-template-columns:repeat(12,1fr);grid-template-rows:1fr;height:100%;background-color:#0A5640;"])),u=s.a.div.withConfig({displayName:"kontakt__BigTitle",componentId:"sc-1f99pwj-1"})(["grid-column:2/12;font-family:'DrukCond-Super';font-size:230px;color:#E9AFB8;line-height:200px;margin-top:50px;@media (min-width:992px){line-height:260px;grid-column:2/12;font-size:320px;}"]),f=s.a.div.withConfig({displayName:"kontakt__Paragraph",componentId:"sc-1f99pwj-2"})(["grid-column:2/12;display:flex;flex-direction:column;font-family:'GT-America';font-size:16px;color:#E9AFB8;margin-top:50px;@media (min-width:992px){font-size:32px;flex-direction:row;}"]),A=s.a.div.withConfig({displayName:"kontakt__Info",componentId:"sc-1f99pwj-3"})(["margin-top:50px;grid-column:2/12;font-family:'Druk-Wide-Medium';font-size:18px;color:#E9AFB8;background-color:#0A5640;text-transform:uppercase;margin-bottom:50px;@media (min-width:992px){font-size:64px;}"]),p=Object(s.a)(o.a).withConfig({displayName:"kontakt__StyledImg",componentId:"sc-1f99pwj-4"})(["flex-basis:200%;margin-top:50px;@media (min-width:992px){margin-top:0;}"]),m=l.b.div({preEnter:{x:"100%",transition:{duration:800,ease:"easeInOut"}},enter:{x:"0%",transition:{duration:800,ease:"easeInOut"}},exit:{x:"-100%",transition:{duration:800,ease:"easeInOut"}}});t.default=function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(m,null,a.a.createElement(d,null,a.a.createElement(c.a,{title:"St. Pauli",keywords:["gemeindehaus","workspace","coworking"]}),a.a.createElement(u,null,"GOD IN TOUCH"),a.a.createElement(f,null,a.a.createElement("p",{style:{margin:0}},"Neugierig geworden? Fragen zu den Konditionen oder auf der Suche nach dem besten Flat White im Umkreis von 200 Metern? Oder hast du einfach nur noch ein super Wortspiel mit Kirchenbegriffen auf Lager? Wir freuen uns auf Mails und frohe Botschaften."),a.a.createElement(p,{fluid:e.data.imageOne.childImageSharp.fluid})),a.a.createElement(A,null,"hi@gemeindehaus.work ",a.a.createElement("br",null),"40 209 32 11 — 99 ",a.a.createElement("br",null),a.a.createElement("br",null),"Brunnenhofstr. 2 ",a.a.createElement("br",null),"22767 Hamburg ",a.a.createElement("br",null)))))};var h="1411493676"},164:function(e,t,i){"use strict";var n=i(9);t.__esModule=!0,t.default=void 0;var a,r=n(i(5)),o=n(i(15)),s=n(i(87)),l=n(i(88)),c=n(i(0)),d=n(i(1)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f=Object.create({}),A=function(e){var t=u(e),i=t.fluid?t.fluid.src:t.fixed.src;return f[i]||!1},p=new WeakMap;var m=function(e,t){var i=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver(function(e){e.forEach(function(e){if(p.has(e.target)){var t=p.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),p.delete(e.target),t())}})},{rootMargin:"200px"})),a);return i&&(i.observe(e),p.set(e,t)),function(){i.unobserve(e),p.delete(e)}},h=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',i=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+i+"/>":"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1",d=e.transitionDelay?e.transitionDelay:"0.5s";return"<picture>"+n+"<img "+s+l+i+a+t+o+r+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+d+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},g=c.default.forwardRef(function(e,t){var i=e.sizes,n=e.srcSet,a=e.src,r=e.style,o=e.onLoad,d=e.onError,u=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({sizes:i,srcSet:n,src:a},u,{onLoad:o,onError:d,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))});g.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var b=function(e){function t(t){var i;i=e.call(this,t)||this;var n=!0,a=!1,r=t.fadeIn,s=A(t);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,a=!0),"undefined"==typeof window&&(n=!1),t.critical&&(n=!0,a=!1);var l=!(t.critical&&!t.fadeIn);return i.state={isVisible:n,imgLoaded:!1,IOSupported:a,fadeIn:r,hasNoScript:l,seenBefore:s},i.imageRef=c.default.createRef(),i.handleImageLoaded=i.handleImageLoaded.bind((0,o.default)((0,o.default)(i))),i.handleRef=i.handleRef.bind((0,o.default)((0,o.default)(i))),i}(0,r.default)(t,e);var i=t.prototype;return i.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:A(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},i.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},i.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=m(e,function(){var e=A(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})}))},i.handleImageLoaded=function(){var e,t,i;e=this.props,t=u(e),i=t.fluid?t.fluid.src:t.fixed.src,f[i]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},i.render=function(){var e=u(this.props),t=e.title,i=e.alt,n=e.className,a=e.style,r=void 0===a?{}:a,o=e.imgStyle,s=void 0===o?{}:o,d=e.placeholderStyle,f=void 0===d?{}:d,A=e.placeholderClassName,p=e.fluid,m=e.fixed,b=e.backgroundColor,E=e.Tag,y=e.itemProp,w="boolean"==typeof b?"lightgray":b,S=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,f),v=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s),k={title:t,alt:this.state.isVisible?"":i,style:S,className:A};if(p){var x=p;return c.default.createElement(E,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(x.srcSet)},c.default.createElement(E,{style:{width:"100%",paddingBottom:100/x.aspectRatio+"%"}}),w&&c.default.createElement(E,{title:t,style:{backgroundColor:w,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",right:0,left:0}}),x.base64&&c.default.createElement(g,(0,l.default)({src:x.base64},k)),x.tracedSVG&&c.default.createElement(g,(0,l.default)({src:x.tracedSVG},k)),this.state.isVisible&&c.default.createElement("picture",null,x.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:x.srcSetWebp,sizes:x.sizes}),c.default.createElement(g,{alt:i,title:t,sizes:x.sizes,src:x.src,crossOrigin:this.props.crossOrigin,srcSet:x.srcSet,style:v,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,l.default)({alt:i,title:t},x))}}))}if(m){var I=m,N=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:I.width,height:I.height},r);return"inherit"===r.display&&delete N.display,c.default.createElement(E,{className:(n||"")+" gatsby-image-wrapper",style:N,ref:this.handleRef,key:"fixed-"+JSON.stringify(I.srcSet)},w&&c.default.createElement(E,{title:t,style:{backgroundColor:w,width:I.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:I.height}}),I.base64&&c.default.createElement(g,(0,l.default)({src:I.base64},k)),I.tracedSVG&&c.default.createElement(g,(0,l.default)({src:I.tracedSVG},k)),this.state.isVisible&&c.default.createElement("picture",null,I.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:I.srcSetWebp,sizes:I.sizes}),c.default.createElement(g,{alt:i,title:t,width:I.width,height:I.height,sizes:I.sizes,src:I.src,crossOrigin:this.props.crossOrigin,srcSet:I.srcSet,style:v,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,l.default)({alt:i,title:t,width:I.width,height:I.height},I))}}))}return null},t}(c.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var E=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),y=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});b.propTypes={resolutions:E,sizes:y,fixed:E,fluid:y,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string};var w=b;t.default=w},165:function(e,t,i){"use strict";var n=i(166),a=i(0),r=i.n(a),o=i(1),s=i.n(o),l=i(175),c=i.n(l);function d(e){var t=e.description,i=e.lang,a=e.meta,o=e.keywords,s=e.title,l=n.data.site,d=t||l.siteMetadata.description;return r.a.createElement(c.a,{htmlAttributes:{lang:i},title:s,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:s},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:d}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(a)})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=d},166:function(e){e.exports={data:{site:{siteMetadata:{title:"GEMEINDEHAUS",description:"Description goes here.",author:"Digital-E"}}}}},167:function(e,t,i){"use strict";i(168),i(0),i(61),i(164)},168:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAMCBAX/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAAByVSaKSwUf//EABkQAAIDAQAAAAAAAAAAAAAAAAABAhAREv/aAAgBAQABBQJu8FLDqB//xAAXEQEAAwAAAAAAAAAAAAAAAAAAARES/9oACAEDAQE/AaYl/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGhAAAgIDAAAAAAAAAAAAAAAAAAECIDIzkf/aAAgBAQAGPwKmMWa10//EABsQAAICAwEAAAAAAAAAAAAAAAABETEQIXHx/9oACAEBAAE/IV0iNvDgxVuhHtD/2gAMAwEAAgADAAAAEEgP/8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQMBAT8QEkP/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAIAQIBAT8QjX//xAAdEAEAAwABBQAAAAAAAAAAAAABABEhMUFxgZHB/9oACAEBAAE/ECLsWbLqGhtw4mio3tVBEN8/sYv0+w/Z/9k=",aspectRatio:1.4997000599880024,src:"/GEMEINDEHAUS-GATSBY/static/c52becc35dbbcc03325977259432fd56/b9797/prices.jpg",srcSet:"/GEMEINDEHAUS-GATSBY/static/c52becc35dbbcc03325977259432fd56/df397/prices.jpg 75w,\n/GEMEINDEHAUS-GATSBY/static/c52becc35dbbcc03325977259432fd56/ec7f3/prices.jpg 150w,\n/GEMEINDEHAUS-GATSBY/static/c52becc35dbbcc03325977259432fd56/b9797/prices.jpg 300w,\n/GEMEINDEHAUS-GATSBY/static/c52becc35dbbcc03325977259432fd56/69ff0/prices.jpg 450w,\n/GEMEINDEHAUS-GATSBY/static/c52becc35dbbcc03325977259432fd56/5c434/prices.jpg 600w,\n/GEMEINDEHAUS-GATSBY/static/c52becc35dbbcc03325977259432fd56/32e7f/prices.jpg 900w,\n/GEMEINDEHAUS-GATSBY/static/c52becc35dbbcc03325977259432fd56/023b0/prices.jpg 2500w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},169:function(e,t,i){"use strict";var n=i(5),a=i.n(n),r=i(0),o=i.n(r),s=i(61),l=i(39),c=(i(84),l.a.ul.withConfig({displayName:"menu__StyledUl",componentId:"ldryeq-0"})(["list-style:none;grid-column:2/8;align-self:flex-end;margin:20px 0;line-height:40px;"])),d=Object(l.a)(s.a).withConfig({displayName:"menu__StyledLink",componentId:"ldryeq-1"})(["text-decoration:none;font-family:'Druk-Wide-Medium';color:#0A5640;font-size:24px;@media (min-width:992px){text-decoration:none;font-family:'Druk-Wide-Medium';color:#0A5640;font-size:44px;}"]),u=function(e){function t(){return e.call(this)||this}a()(t,e);var i=t.prototype;return i.onClick=function(){console.log(document.querySelector(".menutop")),document.querySelector(".menutop").style.transform="translateY(0%)"},i.render=function(){return o.a.createElement(c,null,o.a.createElement("li",null,o.a.createElement(d,{onClick:this.onClick,to:"/workspaces"},"Workspaces")),o.a.createElement("li",null,o.a.createElement(d,{onClick:this.onClick,to:"/about"},"About")),o.a.createElement("li",null,o.a.createElement(d,{onClick:this.onClick,to:"/stpauli"},"St. Pauli")),o.a.createElement("li",null,o.a.createElement(d,{onClick:this.onClick,to:"/kontakt"},"Kontakt")))},t}(o.a.Component);t.a=u},170:function(e,t,i){"use strict";var n=i(0),a=i.n(n),r=(i(61),i(39)),o=(i(84),r.a.ul.withConfig({displayName:"otherlinks__StyledUl",componentId:"c2suhy-0"})(["list-style:none;grid-column:12 / 8;align-self:flex-end;justify-self:flex-end;margin:20px 0;display:none;@media (min-width:992px){display:inline-block;}"])),s=r.a.a.withConfig({displayName:"otherlinks__StyledLink",componentId:"c2suhy-1"})(["text-decoration:none;font-family:'Druk-Wide-Medium';color:#0A5640;font-size:18px;display:flex;justify-content:flex-end;"]),l=r.a.p.withConfig({displayName:"otherlinks__Address",componentId:"c2suhy-2"})(["font-family:'Druk-Wide-Medium';color:#0A5640;text-align:right;"]);t.a=function(){return a.a.createElement(o,null,a.a.createElement(l,null,"GEMEINDEHAUS ",a.a.createElement("br",null),"BRUNNENHOFSTR. 2 ",a.a.createElement("br",null),"22767 Hamburg"),a.a.createElement("li",null,a.a.createElement(s,{href:"https://www.instagram.com/gemeindehaus.work/",target:"_blank"},"INSTA")),a.a.createElement("li",null,a.a.createElement(s,{href:"https://www.facebook.com/gemeindehaus.work/",target:"_blank"},"FACEBOOK")))}},171:function(e,t,i){"use strict";var n=i(0),a=i.n(n),r=i(39),o=i(172),s=i.n(o),l=r.a.video.withConfig({displayName:"backgroundvideo__StyledVideo",componentId:"gdwzdv-0"})(["position:fixed;left:50%;top:50%;min-width:100%;min-height:100%;height:auto;width:auto;transform:translate(-50%,-50%);z-index:-1;overflow:hidden"]);t.a=function(){return a.a.createElement(l,{loop:!0,autoPlay:!0},a.a.createElement("source",{src:s.a,type:"video/mp4"}),"Your browser does not support the video tag.")}},172:function(e,t,i){e.exports=i.p+"static/gemeindehausbackgroundvideo-3f01317f25bbe5d6325ffb23804b2859.mp4"},173:function(e,t,i){e.exports=i.p+"static/GEMEINDEHAUS-TITLE-ea204414e35cac49bbe58a705e325d0a.svg"},174:function(e,t,i){(function(e){function i(e,t){for(var i=0,n=e.length-1;n>=0;n--){var a=e[n];"."===a?e.splice(n,1):".."===a?(e.splice(n,1),i++):i&&(e.splice(n,1),i--)}if(t)for(;i--;i)e.unshift("..");return e}var n=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,a=function(e){return n.exec(e).slice(1)};function r(e,t){if(e.filter)return e.filter(t);for(var i=[],n=0;n<e.length;n++)t(e[n],n,e)&&i.push(e[n]);return i}t.resolve=function(){for(var t="",n=!1,a=arguments.length-1;a>=-1&&!n;a--){var o=a>=0?arguments[a]:e.cwd();if("string"!=typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(t=o+"/"+t,n="/"===o.charAt(0))}return(n?"/":"")+(t=i(r(t.split("/"),function(e){return!!e}),!n).join("/"))||"."},t.normalize=function(e){var n=t.isAbsolute(e),a="/"===o(e,-1);return(e=i(r(e.split("/"),function(e){return!!e}),!n).join("/"))||n||(e="."),e&&a&&(e+="/"),(n?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(r(e,function(e,t){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e}).join("/"))},t.relative=function(e,i){function n(e){for(var t=0;t<e.length&&""===e[t];t++);for(var i=e.length-1;i>=0&&""===e[i];i--);return t>i?[]:e.slice(t,i-t+1)}e=t.resolve(e).substr(1),i=t.resolve(i).substr(1);for(var a=n(e.split("/")),r=n(i.split("/")),o=Math.min(a.length,r.length),s=o,l=0;l<o;l++)if(a[l]!==r[l]){s=l;break}var c=[];for(l=s;l<a.length;l++)c.push("..");return(c=c.concat(r.slice(s))).join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){var t=a(e),i=t[0],n=t[1];return i||n?(n&&(n=n.substr(0,n.length-1)),i+n):"."},t.basename=function(e,t){var i=a(e)[2];return t&&i.substr(-1*t.length)===t&&(i=i.substr(0,i.length-t.length)),i},t.extname=function(e){return a(e)[3]};var o="b"==="ab".substr(-1)?function(e,t,i){return e.substr(t,i)}:function(e,t,i){return t<0&&(t=e.length+t),e.substr(t,i)}}).call(this,i(85))}}]);
//# sourceMappingURL=component---src-pages-kontakt-js-4ed094aa8a1640943b61.js.map