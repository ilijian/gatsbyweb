(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{149:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return g});var n=a(7),r=a.n(n),l=a(0),i=a.n(l),c=(a(151),a(160)),o=a.n(c),s=a(159),u=a.n(s),m=a(225),p=a.n(m),d=a(154),f=a(167),E=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=o()(this,"props.data.site.siteMetadata.title"),t=o()(this,"props.data.allContentfulBlogPost.edges");return i.a.createElement(d.a,{location:this.props.location},i.a.createElement("div",{style:{background:"#fff"}},i.a.createElement(u.a,{title:e}),i.a.createElement("div",{className:p.a.hero},"Blog"),i.a.createElement("div",{className:"wrapper"},i.a.createElement("h2",{className:"section-headline"},"Recent articles"),i.a.createElement("ul",{className:"article-list"},t.map(function(e){var t=e.node;return i.a.createElement("li",{key:t.slug},i.a.createElement(f.a,{article:t}))})))))},t}(i.a.Component);t.default=E;var g="1833322291"},151:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(5),i=a.n(l),c=a(35),o=a.n(c);a.d(t,"a",function(){return o.a});a(152),r.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},152:function(e,t,a){var n;e.exports=(n=a(153))&&n.default||n},153:function(e,t,a){"use strict";a.r(t);a(36);var n=a(0),r=a.n(n),l=a(5),i=a.n(l),c=a(60),o=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};o.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=o},154:function(e,t,a){"use strict";var n=a(7),r=a.n(n),l=a(0),i=a.n(l),c=a(151),o=(a(165),function(e){var t=e.children;return i.a.createElement("div",{style:{maxWidth:1180,margin:"0 auto"}},t)}),s=a(166),u=a.n(s),m=function(){return i.a.createElement("nav",{role:"navigation"},i.a.createElement("ul",{className:u.a.navigation},i.a.createElement("li",{className:u.a.navigationItem},i.a.createElement(c.a,{to:"/"},"Home")),i.a.createElement("li",{className:u.a.navigationItem},i.a.createElement(c.a,{to:"/blog/"},"Blog"))))},p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=(e.location,e.children);return"undefined"!=typeof __PREFIX_PATHS__&&__PREFIX_PATHS__&&"/",i.a.createElement(o,null,i.a.createElement(m,null),t)},t}(i.a.Component);t.a=p},167:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(151),i=a(158),c=a.n(i),o=a(173),s=a.n(o);t.a=function(e){var t=e.article;return r.a.createElement("div",{className:s.a.preview},r.a.createElement(c.a,{alt:"",fluid:t.heroImage.fluid}),r.a.createElement("h3",{className:s.a.previewTitle},r.a.createElement(l.a,{to:"/blog/"+t.slug},t.title)),r.a.createElement("small",null,t.publishDate),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.description.childMarkdownRemark.html}}),t.tags&&t.tags.map(function(e){return r.a.createElement("p",{className:s.a.tag,key:e},e)}))}}}]);
//# sourceMappingURL=component---src-pages-blog-js-5de85a7ce6303fc1c93e.js.map