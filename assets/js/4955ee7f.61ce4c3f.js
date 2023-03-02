/*! For license information please see 4955ee7f.61ce4c3f.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[996901],{603905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>m});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},f=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),c=d(r),u=a,m=c["".concat(p,".").concat(u)]||c[u]||s[u]||l;return r?n.createElement(m,o(o({ref:t},f),{},{components:r})):n.createElement(m,o({ref:t},f))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var d=2;d<l;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},783006:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>f});r(827378);var n=r(603905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const o={id:"plugin-scaffolder",title:"@backstage/plugin-scaffolder",description:"API Reference for @backstage/plugin-scaffolder"},i=void 0,p={unversionedId:"reference/plugin-scaffolder",id:"reference/plugin-scaffolder",title:"@backstage/plugin-scaffolder",description:"API Reference for @backstage/plugin-scaffolder",source:"@site/../docs/reference/plugin-scaffolder.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder",permalink:"/docs/reference/plugin-scaffolder",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-scaffolder.md",tags:[],version:"current",frontMatter:{id:"plugin-scaffolder",title:"@backstage/plugin-scaffolder",description:"API Reference for @backstage/plugin-scaffolder"}},d={},f=[{value:"Classes",id:"classes",level:2},{value:"Functions",id:"functions",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Variables",id:"variables",level:2},{value:"Type Aliases",id:"type-aliases",level:2}],c={toc:f};function s(e){var{components:t}=e,r=l(e,["components"]);return(0,n.kt)("wrapper",a({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",a({parentName:"p"},{href:"/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/reference/plugin-scaffolder"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/plugin-scaffolder"))),(0,n.kt)("p",null,"The Backstage plugin that helps you create new things"),(0,n.kt)("h2",a({},{id:"classes"}),"Classes"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Class"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-scaffolder.scaffolderclient"}),"ScaffolderClient")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"An API to interact with the scaffolder backend.")))),(0,n.kt)("h2",a({},{id:"functions"}),"Functions"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Function"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-scaffolder.makefieldschemafromzod"}),"makeFieldSchemaFromZod(returnSchema, uiOptionsSchema)")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Utility function to convert zod return and UI options schemas to a CustomFieldExtensionSchema with FieldExtensionComponentProps type inference")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-scaffolder.taskpage"}),"TaskPage(props)")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"TaskPage for showing the status of the taskId provided as a param")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-scaffolder.templatetypepicker"}),"TemplateTypePicker()")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"The component to select the ",(0,n.kt)("code",null,"type")," of ",(0,n.kt)("code",null,"Template")," that you will see in the table.")))),(0,n.kt)("h2",a({},{id:"interfaces"}),"Interfaces"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Interface"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-scaffolder.fieldschema"}),"FieldSchema")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"FieldSchema encapsulates a JSONSchema7 along with the matching FieldExtensionComponentProps type for a field extension.")))),(0,n.kt)("h2",a({},{id:"variables"}),"Variables"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Variable"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-scaffolder.createscaffolderfieldextension"}),"createScaffolderFieldExtension")),(0,n.kt)("td",a({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-scaffolder.createscaffolderlayout"}),"createScaffolderLayout")),(0,n.kt)("td",a({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-scaffolder.entitynamepickerfieldextension"}),"EntityNamePickerFieldExtension")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"The field extension for selecting a name for a new Entity in the Catalog.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-scaffolder.entitypickerfieldextension"}),"EntityPickerFieldExtension")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"A field extension for selecting an Entity that exists in the Catalog.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-scaffolder.entitypickerfieldschema"}),"EntityPickerFieldSchema")),(0,n.kt)("td",a({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-scaffolder.entitytagspickerfieldextension"}),"EntityTagsPickerFieldExtension")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"EntityTagsPickerFieldExtension")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-scaffolder.entitytagspickerfieldschema"}),"EntityTagsPickerFieldSchema")),(0,n.kt)("td",a({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-scaffolder.ownedentitypickerfieldextension"}),"OwnedEntityPickerFieldExtension")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"A field extension to show all the Entities that are owned by the current logged-in User for use in templates.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-scaffolder.ownedentitypickerfieldschema"}),"OwnedEntityPickerFieldSchema")),(0,n.kt)("td",a({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-scaffolder.ownerpickerfieldextension"}),"OwnerPickerFieldExtension")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"A field extension for picking users and groups out of the Catalog.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-scaffolder.ownerpickerfieldschema"}),"OwnerPickerFieldSchema")),(0,n.kt)("td",a({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-scaffolder.repopickervalidation"}),"repoPickerValidation")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"The validation function for the ",(0,n.kt)("code",null,"repoUrl")," that is returned from the field extension. Ensures that you have all the required fields filled for the different providers that exist.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-scaffolder.repourlpickerfieldextension"}),"RepoUrlPickerFieldExtension")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"The field extension which provides the ability to select a RepositoryUrl. Currently, this is an encoded URL that looks something like the following ",(0,n.kt)("code",null,"github.com?repo=myRepoName","&","owner=backstage"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-scaffolder.repourlpickerfieldschema"}),"RepoUrlPickerFieldSchema")),(0,n.kt)("td",a({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-scaffolder.rootrouteref"}),"rootRouteRef")),(0,n.kt)("td",a({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-scaffolder.scaffolderapiref"}),"scaffolderApiRef")),(0,n.kt)("td",a({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-scaffolder.scaffolderfieldextensions"}),"ScaffolderFieldExtensions")),(0,n.kt)("td",a({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-scaffolder.scaffolderlayouts"}),"ScaffolderLayouts")),(0,n.kt)("td",a({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-scaffolder.scaffolderpage"}),"ScaffolderPage")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"The Router and main entrypoint to the Scaffolder plugin.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-scaffolder.scaffolderplugin"}),"scaffolderPlugin")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"The main plugin export for the scaffolder.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-scaffolder.usetemplatesecrets"}),"useTemplateSecrets")),(0,n.kt)("td",a({parentName:"tr"},{align:null}))))),(0,n.kt)("h2",a({},{id:"type-aliases"}),"Type Aliases"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Type Alias"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-scaffolder.customfieldextensionschema"}),"CustomFieldExtensionSchema")),(0,n.kt)("td",a({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-scaffolder.customfieldvalidator"}),"CustomFieldValidator")),(0,n.kt)("td",a({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-scaffolder.entitypickeruioptions"}),"EntityPickerUiOptions")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"The input props that can be specified under ",(0,n.kt)("code",null,"ui:options")," for the ",(0,n.kt)("code",null,"EntityPicker")," field extension.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-scaffolder.entitytagspickeruioptions"}),"EntityTagsPickerUiOptions")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"The input props that can be specified under ",(0,n.kt)("code",null,"ui:options")," for the ",(0,n.kt)("code",null,"EntityTagsPicker")," field extension.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-scaffolder.fieldextensioncomponent"}),"FieldExtensionComponent")),(0,n.kt)("td",a({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-scaffolder.fieldextensioncomponentprops"}),"FieldExtensionComponentProps")),(0,n.kt)("td",a({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-scaffolder.fieldextensionoptions"}),"FieldExtensionOptions")),(0,n.kt)("td",a({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-scaffolder.layoutoptions"}),"LayoutOptions")),(0,n.kt)("td",a({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-scaffolder.layouttemplate"}),"LayoutTemplate")),(0,n.kt)("td",a({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-scaffolder.listactionsresponse"}),"ListActionsResponse")),(0,n.kt)("td",a({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-scaffolder.logevent"}),"LogEvent")),(0,n.kt)("td",a({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-scaffolder.ownedentitypickeruioptions"}),"OwnedEntityPickerUiOptions")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"The input props that can be specified under ",(0,n.kt)("code",null,"ui:options")," for the ",(0,n.kt)("code",null,"OwnedEntityPicker")," field extension.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-scaffolder.ownerpickeruioptions"}),"OwnerPickerUiOptions")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"The input props that can be specified under ",(0,n.kt)("code",null,"ui:options")," for the ",(0,n.kt)("code",null,"OwnerPicker")," field extension.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-scaffolder.repourlpickeruioptions"}),"RepoUrlPickerUiOptions")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"The input props that can be specified under ",(0,n.kt)("code",null,"ui:options")," for the ",(0,n.kt)("code",null,"RepoUrlPicker")," field extension.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-scaffolder.reviewstepprops"}),"ReviewStepProps")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"The props for the Last Step in scaffolder template form. Which represents the summary of the input provided by the end user.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-scaffolder.routerprops"}),"RouterProps")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"The props for the entrypoint ",(0,n.kt)("code",null,"ScaffolderPage")," component the plugin.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-scaffolder.scaffolderapi"}),"ScaffolderApi")),(0,n.kt)("td",a({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-scaffolder.scaffolderdryrunoptions"}),"ScaffolderDryRunOptions")),(0,n.kt)("td",a({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-scaffolder.scaffolderdryrunresponse"}),"ScaffolderDryRunResponse")),(0,n.kt)("td",a({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-scaffolder.scaffoldergetintegrationslistoptions"}),"ScaffolderGetIntegrationsListOptions")),(0,n.kt)("td",a({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-scaffolder.scaffoldergetintegrationslistresponse"}),"ScaffolderGetIntegrationsListResponse")),(0,n.kt)("td",a({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-scaffolder.scaffolderoutputlink"}),"ScaffolderOutputlink")),(0,n.kt)("td",a({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-scaffolder.scaffolderscaffoldoptions"}),"ScaffolderScaffoldOptions")),(0,n.kt)("td",a({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-scaffolder.scaffolderscaffoldresponse"}),"ScaffolderScaffoldResponse")),(0,n.kt)("td",a({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-scaffolder.scaffolderstreamlogsoptions"}),"ScaffolderStreamLogsOptions")),(0,n.kt)("td",a({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-scaffolder.scaffoldertask"}),"ScaffolderTask")),(0,n.kt)("td",a({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-scaffolder.scaffoldertaskoutput"}),"ScaffolderTaskOutput")),(0,n.kt)("td",a({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-scaffolder.scaffoldertaskstatus"}),"ScaffolderTaskStatus")),(0,n.kt)("td",a({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-scaffolder.scaffolderusetemplatesecrets"}),"ScaffolderUseTemplateSecrets")),(0,n.kt)("td",a({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-scaffolder.taskpageprops"}),"TaskPageProps")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"TaskPageProps for constructing a TaskPage")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-scaffolder.templateparameterschema"}),"TemplateParameterSchema")),(0,n.kt)("td",a({parentName:"tr"},{align:null}))))))}s.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,l){for(var o,i,p=a(e),d=1;d<arguments.length;d++){for(var f in o=Object(arguments[d]))r.call(o,f)&&(p[f]=o[f]);if(t){i=t(o);for(var c=0;c<i.length;c++)n.call(o,i[c])&&(p[i[c]]=o[i[c]])}}return p}},541535:(e,t,r)=>{var n=r(862525),a=60103,l=60106;var o=60109,i=60110,p=60112;var d=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var c=Symbol.for;a=c("react.element"),l=c("react.portal"),c("react.fragment"),c("react.strict_mode"),c("react.profiler"),o=c("react.provider"),i=c("react.context"),p=c("react.forward_ref"),c("react.suspense"),d=c("react.memo"),f=c("react.lazy")}var s="function"==typeof Symbol&&Symbol.iterator;function u(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k={};function g(e,t,r){this.props=e,this.context=t,this.refs=k,this.updater=r||m}function N(){}function h(e,t,r){this.props=e,this.context=t,this.refs=k,this.updater=r||m}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(u(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},N.prototype=g.prototype;var y=h.prototype=new N;y.constructor=h,n(y,g.prototype),y.isPureReactComponent=!0;var b={current:null},v=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,r){var n,l={},o=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(o=""+t.key),t)v.call(t,n)&&!O.hasOwnProperty(n)&&(l[n]=t[n]);var p=arguments.length-2;if(1===p)l.children=r;else if(1<p){for(var d=Array(p),f=0;f<p;f++)d[f]=arguments[f+2];l.children=d}if(e&&e.defaultProps)for(n in p=e.defaultProps)void 0===l[n]&&(l[n]=p[n]);return{$$typeof:a,type:e,key:o,ref:i,props:l,_owner:b.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var S=/\/+/g;function x(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function E(e,t,r,n,o){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var p=!1;if(null===e)p=!0;else switch(i){case"string":case"number":p=!0;break;case"object":switch(e.$$typeof){case a:case l:p=!0}}if(p)return o=o(p=e),e=""===n?"."+x(p,0):n,Array.isArray(o)?(r="",null!=e&&(r=e.replace(S,"$&/")+"/"),E(o,t,r,"",(function(e){return e}))):null!=o&&(P(o)&&(o=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,r+(!o.key||p&&p.key===o.key?"":(""+o.key).replace(S,"$&/")+"/")+e)),t.push(o)),1;if(p=0,n=""===n?".":n+":",Array.isArray(e))for(var d=0;d<e.length;d++){var f=n+x(i=e[d],d);p+=E(i,t,r,f,o)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=s&&e[s]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),d=0;!(i=e.next()).done;)p+=E(i=i.value,t,r,f=n+x(i,d++),o);else if("object"===i)throw t=""+e,Error(u(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return p}function j(e,t,r){if(null==e)return e;var n=[],a=0;return E(e,n,"","",(function(e){return t.call(r,e,a++)})),n}function T(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var F={current:null};function C(){var e=F.current;if(null===e)throw Error(u(321));return e}},827378:(e,t,r)=>{r(541535)}}]);