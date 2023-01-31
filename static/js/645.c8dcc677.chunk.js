"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[645],{9645:function(e,n,r){r.r(n),r.d(n,{default:function(){return F}});var t=r(4087),i=r(9229),a=r(176),l=r(9439),o=r(9434),s=r(2791),u=r(5036),c=function(e){return e.contacts.items},d=function(e){return e.contacts.isLoading},p=r(2701),m=r(4585),x=r(7886),f=r(4224),h=r(184),v=function(){var e=(0,s.useState)(""),n=(0,l.Z)(e,2),r=n[0],t=n[1],i=(0,s.useState)(""),d=(0,l.Z)(i,2),v=d[0],b=d[1],Z=(0,o.v9)(c),g=(0,o.I0)(),j=function(e){var n=e.target,r=n.name,i=n.value;"name"===r?t(i):b(i)},k=function(){t(""),b("")};return(0,h.jsxs)(a.k,{as:"form",flexDirection:"column",border:"1px",borderColor:"pink",borderRadius:"10px",mx:"auto",mb:"50px",p:"20px",gap:"30px",w:["260px","400px","450px","480px"],onSubmit:function(e){e.preventDefault();var n=Z.find((function(e){return e.name.toLowerCase()===r.toLowerCase()}));if(n)return alert("".concat(r," is already in contacts")),void k();var t={name:r,number:v};g((0,u.uK)(t)),k()},children:[(0,h.jsx)(a.k,{flexDirection:"column",align:"center",gap:"20px",children:(0,h.jsxs)(p.NI,{children:[(0,h.jsx)(m.l,{color:"pink",children:"Name"}),(0,h.jsx)(x.I,{value:r,type:"text",name:"name",color:"pink",placeholder:"Name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:j}),(0,h.jsx)(m.l,{color:"pink",children:" Number "}),(0,h.jsx)(x.I,{value:v,type:"tel",name:"number",color:"pink",placeholder:"Phone Number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:j})]})}),(0,h.jsx)(f.z,{type:"submit",colorScheme:"pink",size:"sm",children:"Add contact"})]})},b=r(1295),Z=r(1413),g=function(e){var n=e.closeForm,r=e.contactToUpdate,t=(0,s.useState)(r.name),i=(0,l.Z)(t,2),c=i[0],d=i[1],v=(0,s.useState)(r.number),g=(0,l.Z)(v,2),j=g[0],k=g[1],y=(0,b.p)(),I=(0,o.I0)(),C=function(e){var n=e.target,r=n.name,t=n.value;switch(r){case"name":d(t);break;case"number":k(t)}};return(0,h.jsxs)(a.k,{as:"form",onSubmit:function(e){e.preventDefault(),I((0,u.Tk)((0,Z.Z)((0,Z.Z)({},r),{},{name:c,number:j}))),n()},children:[(0,h.jsxs)(p.NI,{children:[(0,h.jsx)(m.l,{children:" Name"}),(0,h.jsx)(x.I,{type:"text",name:"name",value:c,size:"sm",onChange:C}),(0,h.jsx)(m.l,{children:" Number"}),(0,h.jsx)(x.I,{type:"text",name:"number",value:j,size:"sm",onChange:C})]}),(0,h.jsx)(f.z,{colorScheme:"pink",size:"sm",type:"submit",onClick:function(){return y({status:"success",position:"bottom-right",description:"Your contact details has been updated"})},children:"Save"})]})},j=function(e){var n=e.name,r=e.number,t=e.id,d=(0,o.v9)(c),p=(0,s.useState)(null),m=(0,l.Z)(p,2),x=m[0],v=m[1],Z=(0,o.I0)(),j=(0,b.p)();return(0,h.jsxs)(a.k,{align:"center",justify:"space-between",gap:"60px",children:[(0,h.jsxs)(i.x,{children:[(0,h.jsxs)("span",{children:[n,":"]})," ",(0,h.jsx)("span",{children:r})]}),(0,h.jsx)(f.z,{type:"button",colorScheme:"pink",size:"xs",onClick:function(){Z((0,u.GK)(t)),j({status:"success",position:"bottom-right",description:"Your contact has been successfully deleted"})},children:"Delete"}),(0,h.jsx)(f.z,{type:"button",colorScheme:"pink",size:"xs",onClick:function(){return function(e){var n=d.find((function(n){return n.id===e}));v(n)}(t)},children:"Update"}),x&&x.id===t&&(0,h.jsx)(g,{contactToUpdate:x,closeForm:function(){v(null)}})]})},k=function(e){return e.filter.filter},y=r(3204),I=r(3541),C=function(){var e=(0,o.v9)(c),n=(0,o.v9)(k),r=(0,o.v9)(d),t=(0,o.I0)();(0,s.useEffect)((function(){t((0,u.yF)())}),[t]);var i=e.filter((function(e){return e.name.toLowerCase().includes(n)}));return(0,h.jsxs)(h.Fragment,{children:[r&&(0,h.jsx)(y.$,{thickness:"4px",speed:"0.65s",emptyColor:"gray.200",color:"#2563EB",size:"xl",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}),(0,h.jsx)(I.aV,{color:"pink",display:"flex",flexDirection:"column",gap:"20px",mb:"80px",justifyContent:"center",children:i.map((function(e){var n=e.name,r=e.number,t=e.id;return(0,h.jsx)(j,{id:t,name:n,number:r},t)}))})]})},N=r(1634),q=function(){var e=(0,o.I0)();return(0,h.jsxs)(a.k,{flexDirection:"column",justify:"center",alignItems:"center",gap:"10px",children:[(0,h.jsx)(i.x,{color:"pink",children:"Find contacts by name"}),(0,h.jsx)(x.I,{type:"text",name:"filter",placeholder:"Find contact",color:"pink",mb:"10px",w:["260px","400px","450px","480px"],pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",onChange:function(n){return e((0,N.h)(n.target.value))}})]})},F=function(){return(0,h.jsxs)(t.xu,{w:["280px","479px","767px","991px","1200px"],pt:"50px",mx:"auto",textAlign:"center",children:[(0,h.jsx)(q,{}),(0,h.jsx)(i.x,{color:"pink",mb:"20px",children:"Add new contact:"}),(0,h.jsx)(v,{}),(0,h.jsx)(a.k,{justify:"center",align:"center",minH:"300px",children:(0,h.jsx)(C,{})})]})}},4585:function(e,n,r){r.d(n,{l:function(){return m}});var t=r(1413),i=r(4925),a=r(2701),l=r(7872),o=r(9084),s=r(9477),u=r(2952),c=r(6992),d=r(184),p=["className","children","requiredIndicator","optionalIndicator"],m=(0,l.G)((function(e,n){var r,l=(0,o.mq)("FormLabel",e),m=(0,s.Lr)(e),f=(m.className,m.children),h=m.requiredIndicator,v=void 0===h?(0,d.jsx)(x,{}):h,b=m.optionalIndicator,Z=void 0===b?null:b,g=(0,i.Z)(m,p),j=(0,a.NJ)(),k=null!=(r=null==j?void 0:j.getLabelProps(g,n))?r:(0,t.Z)({ref:n},g);return(0,d.jsxs)(u.m.label,(0,t.Z)((0,t.Z)({},k),{},{className:(0,c.cx)("chakra-form__label",m.className),__css:(0,t.Z)({display:"block",textAlign:"start"},l),children:[f,(null==j?void 0:j.isRequired)?v:Z]}))}));m.displayName="FormLabel";var x=(0,l.G)((function(e,n){var r=(0,a.NJ)(),i=(0,a.e)();if(!(null==r?void 0:r.isRequired))return null;var l=(0,c.cx)("chakra-form__required-indicator",e.className);return(0,d.jsx)(u.m.span,(0,t.Z)((0,t.Z)({},null==r?void 0:r.getRequiredIndicatorProps(e,n)),{},{__css:i.requiredIndicator,className:l}))}));x.displayName="RequiredIndicator"},2701:function(e,n,r){r.d(n,{NI:function(){return C},NJ:function(){return I},e:function(){return g}});var t=r(1413),i=r(4925),a=r(9439),l=r(9886),o=r(4591),s=r(7872),u=r(9084),c=r(9477),d=r(2952),p=r(6992),m=r(2791),x=r(184),f=["id","isRequired","isInvalid","isDisabled","isReadOnly"],h=["getRootProps","htmlProps"],v=(0,l.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),b=(0,a.Z)(v,2),Z=b[0],g=b[1],j=(0,l.k)({strict:!1,name:"FormControlContext"}),k=(0,a.Z)(j,2),y=k[0],I=k[1];var C=(0,s.G)((function(e,n){var r=(0,u.jC)("Form",e),l=function(e){var n=e.id,r=e.isRequired,l=e.isInvalid,s=e.isDisabled,u=e.isReadOnly,c=(0,i.Z)(e,f),d=(0,m.useId)(),x=n||"field-".concat(d),h="".concat(x,"-label"),v="".concat(x,"-feedback"),b="".concat(x,"-helptext"),Z=(0,m.useState)(!1),g=(0,a.Z)(Z,2),j=g[0],k=g[1],y=(0,m.useState)(!1),I=(0,a.Z)(y,2),C=I[0],N=I[1],q=(0,m.useState)(!1),F=(0,a.Z)(q,2),R=F[0],_=F[1],z=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,t.Z)((0,t.Z)({id:b},e),{},{ref:(0,o.lq)(n,(function(e){e&&N(!0)}))})}),[b]),P=(0,m.useCallback)((function(){var e,n,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,t.Z)((0,t.Z)({},r),{},{ref:i,"data-focus":(0,p.PB)(R),"data-disabled":(0,p.PB)(s),"data-invalid":(0,p.PB)(l),"data-readonly":(0,p.PB)(u),id:null!=(e=r.id)?e:h,htmlFor:null!=(n=r.htmlFor)?n:x})}),[x,s,R,l,u,h]),S=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,t.Z)((0,t.Z)({id:v},e),{},{ref:(0,o.lq)(n,(function(e){e&&k(!0)})),"aria-live":"polite"})}),[v]),D=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,t.Z)((0,t.Z)((0,t.Z)({},e),c),{},{ref:n,role:"group"})}),[c]),w=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,t.Z)((0,t.Z)({},e),{},{ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!r,isInvalid:!!l,isReadOnly:!!u,isDisabled:!!s,isFocused:!!R,onFocus:function(){return _(!0)},onBlur:function(){return _(!1)},hasFeedbackText:j,setHasFeedbackText:k,hasHelpText:C,setHasHelpText:N,id:x,labelId:h,feedbackId:v,helpTextId:b,htmlProps:c,getHelpTextProps:z,getErrorMessageProps:S,getRootProps:D,getLabelProps:P,getRequiredIndicatorProps:w}}((0,c.Lr)(e)),s=l.getRootProps,v=(l.htmlProps,(0,i.Z)(l,h)),b=(0,p.cx)("chakra-form-control",e.className);return(0,x.jsx)(y,{value:v,children:(0,x.jsx)(Z,{value:r,children:(0,x.jsx)(d.m.div,(0,t.Z)((0,t.Z)({},s({},n)),{},{className:b,__css:r.container}))})})}));C.displayName="FormControl",(0,s.G)((function(e,n){var r=I(),i=g(),a=(0,p.cx)("chakra-form__helper-text",e.className);return(0,x.jsx)(d.m.div,(0,t.Z)((0,t.Z)({},null==r?void 0:r.getHelpTextProps(e,n)),{},{__css:i.helperText,className:a}))})).displayName="FormHelperText"},7886:function(e,n,r){r.d(n,{I:function(){return h}});var t=r(1413),i=r(4925),a=r(2701),l=r(6992),o=["isDisabled","isInvalid","isReadOnly","isRequired"],s=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function u(e){var n=function(e){var n,r,o,u=(0,a.NJ)(),c=e.id,d=e.disabled,p=e.readOnly,m=e.required,x=e.isRequired,f=e.isInvalid,h=e.isReadOnly,v=e.isDisabled,b=e.onFocus,Z=e.onBlur,g=(0,i.Z)(e,s),j=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==u?void 0:u.hasFeedbackText)&&(null==u?void 0:u.isInvalid)&&j.push(u.feedbackId);(null==u?void 0:u.hasHelpText)&&j.push(u.helpTextId);return(0,t.Z)((0,t.Z)({},g),{},{"aria-describedby":j.join(" ")||void 0,id:null!=c?c:null==u?void 0:u.id,isDisabled:null!=(n=null!=d?d:v)?n:null==u?void 0:u.isDisabled,isReadOnly:null!=(r=null!=p?p:h)?r:null==u?void 0:u.isReadOnly,isRequired:null!=(o=null!=m?m:x)?o:null==u?void 0:u.isRequired,isInvalid:null!=f?f:null==u?void 0:u.isInvalid,onFocus:(0,l.v0)(null==u?void 0:u.onFocus,b),onBlur:(0,l.v0)(null==u?void 0:u.onBlur,Z)})}(e),r=n.isDisabled,u=n.isInvalid,c=n.isReadOnly,d=n.isRequired,p=(0,i.Z)(n,o);return(0,t.Z)((0,t.Z)({},p),{},{disabled:r,readOnly:c,required:d,"aria-invalid":(0,l.Qm)(u),"aria-required":(0,l.Qm)(d),"aria-readonly":(0,l.Qm)(c)})}var c=r(7872),d=r(9084),p=r(9477),m=r(2952),x=r(184),f=["htmlSize"],h=(0,c.G)((function(e,n){var r=e.htmlSize,a=(0,i.Z)(e,f),o=(0,d.jC)("Input",a),s=u((0,p.Lr)(a)),c=(0,l.cx)("chakra-input",e.className);return(0,x.jsx)(m.m.input,(0,t.Z)((0,t.Z)({size:r},s),{},{__css:o.field,ref:n,className:c}))}));h.displayName="Input",h.id="Input"},1295:function(e,n,r){r.d(n,{p:function(){return s}});var t=r(1413),i=r(7477),a=r(3188),l=r(9729),o=r(2791);function s(e){var n=(0,l.uP)().theme,r=(0,i.OX)();return(0,o.useMemo)((function(){return(0,a.Cj)(n.direction,(0,t.Z)((0,t.Z)({},r),e))}),[e,n.direction,r])}}}]);
//# sourceMappingURL=645.c8dcc677.chunk.js.map