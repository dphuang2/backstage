/*! For license information please see 2b51a7e6.6747b70c.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[55210],{603905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(667294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),s=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},i="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),i=s(r),h=n,f=i["".concat(d,".").concat(h)]||i[h]||u[h]||o;return r?a.createElement(f,c(c({ref:t},p),{},{components:r})):a.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=h;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[i]="string"==typeof e?e:n,c[1]=l;for(var s=2;s<o;s++)c[s]=r[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},405213:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>d,toc:()=>p});r(827378);var a=r(603905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const c={id:"plugin-techdocs",title:"@backstage/plugin-techdocs",description:"API Reference for @backstage/plugin-techdocs"},l=void 0,d={unversionedId:"reference/plugin-techdocs",id:"reference/plugin-techdocs",title:"@backstage/plugin-techdocs",description:"API Reference for @backstage/plugin-techdocs",source:"@site/../docs/reference/plugin-techdocs.md",sourceDirName:"reference",slug:"/reference/plugin-techdocs",permalink:"/docs/reference/plugin-techdocs",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-techdocs.md",tags:[],version:"current",frontMatter:{id:"plugin-techdocs",title:"@backstage/plugin-techdocs",description:"API Reference for @backstage/plugin-techdocs"}},s={},p=[{value:"Classes",id:"classes",level:2},{value:"Functions",id:"functions",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Variables",id:"variables",level:2},{value:"Type Aliases",id:"type-aliases",level:2}],i=(u="Reader",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",n({},e))});var u;const h={toc:p};function f(e){var{components:t}=e,r=o(e,["components"]);return(0,a.kt)("wrapper",n({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",n({parentName:"p"},{href:"/docs/reference/"}),"Home")," ",">"," ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/reference/plugin-techdocs"}),(0,a.kt)("inlineCode",{parentName:"a"},"@backstage/plugin-techdocs"))),(0,a.kt)("p",null,"The Backstage plugin that renders technical documentation for your components"),(0,a.kt)("h2",n({},{id:"classes"}),"Classes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Class"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.techdocsclient"}),"TechDocsClient")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"API to talk to ",(0,a.kt)("code",null,"techdocs-backend"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.techdocsstorageclient"}),"TechDocsStorageClient")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"API which talks to TechDocs storage to fetch files to render.")))),(0,a.kt)("h2",n({},{id:"functions"}),"Functions"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Function"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.defaulttechdocshome"}),"DefaultTechDocsHome(props)")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Component which renders a default documentation landing page.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.docscardgrid"}),"DocsCardGrid(props)")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Component which accepts a list of entities and renders a item card for each entity")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.entitylistdocsgrid"}),"EntityListDocsGrid(props)")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Component responsible to get entities from entity list context and pass down to DocsCardGrid")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.reader"}),"Reader(props)")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Component responsible for rendering TechDocs documentation")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.router"}),"Router()")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Responsible for registering routes for TechDocs, TechDocs Homepage and separate TechDocs page")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.techdocspage"}),"TechdocsPage()")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Routable extension used to render docs")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.techdocspagewrapper"}),"TechDocsPageWrapper(props)")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Component wrapping a techdocs page with Page and Header components")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.techdocsreaderlayout"}),"TechDocsReaderLayout(props)")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Default TechDocs reader page structure composed with a header and content")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.techdocsreaderpagecontent"}),"TechDocsReaderPageContent(props)")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Renders the reader page content")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.techdocsreaderpageheader"}),"TechDocsReaderPageHeader(props)")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Renders the reader page header. This component does not accept props, please use the Tech Docs add-ons to customize it")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.techdocsreaderprovider"}),"TechDocsReaderProvider(props)")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Provides shared building process state to the reader page components.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.techdocssearch"}),"TechDocsSearch(props)")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Component used to render search bar on TechDocs page, scoped to")))),(0,a.kt)("h2",n({},{id:"interfaces"}),"Interfaces"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Interface"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.panelconfig"}),"PanelConfig")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Type representing a TechDocsCustomHome panel.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.tabconfig"}),"TabConfig")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Type representing a TechDocsCustomHome tab.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.techdocsapi"}),"TechDocsApi")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"API to talk to techdocs-backend.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.techdocsstorageapi"}),"TechDocsStorageApi")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"API which talks to TechDocs storage to fetch files to render.")))),(0,a.kt)("h2",n({},{id:"variables"}),"Variables"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Variable"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.docstable"}),"DocsTable")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Component which renders a table documents")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.embeddeddocsrouter"}),"EmbeddedDocsRouter")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Responsible for registering route to view docs on Entity page")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.entitylistdocstable"}),"EntityListDocsTable")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Component which renders a table with entities from catalog.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.entitytechdocscontent"}),"EntityTechdocsContent")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Routable extension used to render docs on Entity page")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.istechdocsavailable"}),"isTechDocsAvailable")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Helper that takes in entity and returns true/false if TechDocs is available for the entity")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.techdocsapiref"}),"techdocsApiRef")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Utility API reference for the ",(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.techdocsapi"}),"TechDocsApi"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.techdocscustomhome"}),"TechDocsCustomHome")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Component which takes a custom tabs config object and renders a documentation landing page.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.techdocsindexpage"}),"TechDocsIndexPage")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Responsible for rendering the provided router element")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.techdocspicker"}),"TechDocsPicker")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Component responsible for updating TechDocs filters")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.techdocsplugin"}),"techdocsPlugin")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"The Backstage plugin that renders technical documentation for your components")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.techdocsreaderpage"}),"TechDocsReaderPage")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Component responsible for composing a TechDocs reader page experience")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.techdocsreaderpagesubheader"}),"TechDocsReaderPageSubheader")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Renders the reader page subheader. Please use the Tech Docs add-ons to customize it")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.techdocssearchresultlistitem"}),"TechDocsSearchResultListItem")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"React extension used to render results on Search page or modal")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.techdocsstorageapiref"}),"techdocsStorageApiRef")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Utility API reference for the ",(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.techdocsstorageapi"}),"TechDocsStorageApi"),".")))),(0,a.kt)("h2",n({},{id:"type-aliases"}),"Type Aliases"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Type Alias"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.contentstatetypes"}),"ContentStateTypes")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"A state representation that is used to configure the UI of ",(0,a.kt)(i,{mdxType:"Reader"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.defaulttechdocshomeprops"}),"DefaultTechDocsHomeProps")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Props for ",(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.defaulttechdocshome"}),"DefaultTechDocsHome()"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.docscardgridprops"}),"DocsCardGridProps")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Props for ",(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.docscardgrid"}),"DocsCardGrid()"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.docsgroupconfig"}),"DocsGroupConfig")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Props for ",(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.entitylistdocsgrid"}),"EntityListDocsGrid()"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.docstableprops"}),"DocsTableProps")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Props for ",(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.docstable"}),"DocsTable"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.docstablerow"}),"DocsTableRow")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Generic representing the metadata structure for a docs table row.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.entitylistdocsgridpageprops"}),"EntityListDocsGridPageProps")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Props for ",(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.entitylistdocsgrid"}),"EntityListDocsGrid()"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.entitylistdocstableprops"}),"EntityListDocsTableProps")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Props for ",(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.entitylistdocstable"}),"EntityListDocsTable"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.paneltype"}),"PanelType")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Available panel types")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.readerstate"}),"ReaderState")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"shared reader state")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.syncresult"}),"SyncResult")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"The outcome of a docs sync operation.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.tabsconfig"}),"TabsConfig")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Type representing a list of TechDocsCustomHome tabs.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.techdocscustomhomeprops"}),"TechDocsCustomHomeProps")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Props for ",(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.techdocscustomhome"}),"TechDocsCustomHome"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.techdocsentitymetadata"}),"TechDocsEntityMetadata")),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.techdocsindexpageprops"}),"TechDocsIndexPageProps")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Props for ",(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.techdocsindexpage"}),"TechDocsIndexPage"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.techdocsmetadata"}),"TechDocsMetadata")),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.techdocspagewrapperprops"}),"TechDocsPageWrapperProps")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Props for ",(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.techdocspagewrapper"}),"TechDocsPageWrapper()"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.techdocsreaderlayoutprops"}),"TechDocsReaderLayoutProps")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Props for ",(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.techdocsreaderlayout"}),"TechDocsReaderLayout()"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.techdocsreaderpagecontentprops"}),"TechDocsReaderPageContentProps")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Props for ",(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.techdocsreaderpagecontent"}),"TechDocsReaderPageContent()"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.techdocsreaderpageheaderprops"}),"TechDocsReaderPageHeaderProps")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Props for ",(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.techdocsreaderpageheader"}),"TechDocsReaderPageHeader()"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.techdocsreaderpageprops"}),"TechDocsReaderPageProps")),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.techdocsreaderpagerenderfunction"}),"TechDocsReaderPageRenderFunction")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Helper function that gives the children of ",(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.techdocsreaderpage"}),"TechDocsReaderPage")," access to techdocs and entity metadata")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.techdocsreaderproviderprops"}),"TechDocsReaderProviderProps")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Props for ",(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.techdocsreaderprovider"}),"TechDocsReaderProvider()"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.techdocsreaderproviderrenderfunction"}),"TechDocsReaderProviderRenderFunction")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Render function for ",(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.techdocsreaderprovider"}),"TechDocsReaderProvider()"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.techdocssearchprops"}),"TechDocsSearchProps")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Props for ",(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.techdocssearch"}),"TechDocsSearch()"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.techdocssearchresultlistitemprops"}),"TechDocsSearchResultListItemProps")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Props for ",(0,a.kt)("a",n({parentName:"td"},{href:"/docs/reference/plugin-techdocs.techdocssearchresultlistitem"}),"TechDocsSearchResultListItem"),".")))))}f.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function n(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach((function(e){a[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(n){return!1}}()?Object.assign:function(e,o){for(var c,l,d=n(e),s=1;s<arguments.length;s++){for(var p in c=Object(arguments[s]))r.call(c,p)&&(d[p]=c[p]);if(t){l=t(c);for(var i=0;i<l.length;i++)a.call(c,l[i])&&(d[l[i]]=c[l[i]])}}return d}},541535:(e,t,r)=>{var a=r(862525),n=60103,o=60106;var c=60109,l=60110,d=60112;var s=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var i=Symbol.for;n=i("react.element"),o=i("react.portal"),i("react.fragment"),i("react.strict_mode"),i("react.profiler"),c=i("react.provider"),l=i("react.context"),d=i("react.forward_ref"),i("react.suspense"),s=i("react.memo"),p=i("react.lazy")}var u="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function g(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||f}function k(){}function N(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||f}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=g.prototype;var y=N.prototype=new k;y.constructor=N,a(y,g.prototype),y.isPureReactComponent=!0;var b={current:null},v=Object.prototype.hasOwnProperty,D={key:!0,ref:!0,__self:!0,__source:!0};function T(e,t,r){var a,o={},c=null,l=null;if(null!=t)for(a in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(c=""+t.key),t)v.call(t,a)&&!D.hasOwnProperty(a)&&(o[a]=t[a]);var d=arguments.length-2;if(1===d)o.children=r;else if(1<d){for(var s=Array(d),p=0;p<d;p++)s[p]=arguments[p+2];o.children=s}if(e&&e.defaultProps)for(a in d=e.defaultProps)void 0===o[a]&&(o[a]=d[a]);return{$$typeof:n,type:e,key:c,ref:l,props:o,_owner:b.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var w=/\/+/g;function O(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,r,a,c){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var d=!1;if(null===e)d=!0;else switch(l){case"string":case"number":d=!0;break;case"object":switch(e.$$typeof){case n:case o:d=!0}}if(d)return c=c(d=e),e=""===a?"."+O(d,0):a,Array.isArray(c)?(r="",null!=e&&(r=e.replace(w,"$&/")+"/"),R(c,t,r,"",(function(e){return e}))):null!=c&&(P(c)&&(c=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,r+(!c.key||d&&d.key===c.key?"":(""+c.key).replace(w,"$&/")+"/")+e)),t.push(c)),1;if(d=0,a=""===a?".":a+":",Array.isArray(e))for(var s=0;s<e.length;s++){var p=a+O(l=e[s],s);d+=R(l,t,r,p,c)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=u&&e[u]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),s=0;!(l=e.next()).done;)d+=R(l=l.value,t,r,p=a+O(l,s++),c);else if("object"===l)throw t=""+e,Error(h(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return d}function j(e,t,r){if(null==e)return e;var a=[],n=0;return R(e,a,"","",(function(e){return t.call(r,e,n++)})),a}function C(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var S={current:null};function x(){var e=S.current;if(null===e)throw Error(h(321));return e}},827378:(e,t,r)=>{r(541535)}}]);