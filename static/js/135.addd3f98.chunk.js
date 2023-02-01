"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[135],{7135:function(e,n,i){i.r(n),i.d(n,{default:function(){return H}});var r=i(4087),l=i(5946),a=i(9229),t=i(9439),s=i(176),o=i(2701),d=i(4585),u=i(7886),c=i(1413),p=i(4925),m=i(9886),h=i(7200),v=i(7872),f=i(9084),x=i(9477),b=i(2952),g=i(6992),Z=i(5246),I=i(2791),y=i(184),N=["children","className"],k=(0,m.k)({name:"InputGroupStylesContext",errorMessage:"useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<InputGroup />\" "}),_=(0,t.Z)(k,2),j=_[0],R=_[1],C=(0,v.G)((function(e,n){var i=(0,f.jC)("Input",e),r=(0,x.Lr)(e),l=r.children,a=r.className,t=(0,p.Z)(r,N),s=(0,g.cx)("chakra-input__group",a),o={},d=(0,h.W)(l),u=i.field;d.forEach((function(e){var n,r;i&&(u&&"InputLeftElement"===e.type.id&&(o.paddingStart=null!=(n=u.height)?n:u.h),u&&"InputRightElement"===e.type.id&&(o.paddingEnd=null!=(r=u.height)?r:u.h),"InputRightAddon"===e.type.id&&(o.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(o.borderStartRadius=0))}));var m=d.map((function(n){var i,r,l=(0,Z.oA)({size:(null==(i=n.props)?void 0:i.size)||e.size,variant:(null==(r=n.props)?void 0:r.variant)||e.variant});return"Input"!==n.type.id?(0,I.cloneElement)(n,l):(0,I.cloneElement)(n,Object.assign(l,o,n.props))}));return(0,y.jsx)(b.m.div,(0,c.Z)((0,c.Z)({className:s,ref:n,__css:{width:"100%",display:"flex",position:"relative",isolation:"isolate"}},t),{},{children:(0,y.jsx)(j,{value:i,children:m})}))}));C.displayName="InputGroup";var q=i(4942),F=["placement"],S=["className"],E=["className"],P=(0,b.m)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),w=(0,v.G)((function(e,n){var i,r,l,a=e.placement,t=void 0===a?"left":a,s=(0,p.Z)(e,F),o=R(),d=o.field,u="left"===t?"insetStart":"insetEnd",m=(0,c.Z)((i={},(0,q.Z)(i,u,"0"),(0,q.Z)(i,"width",null!=(r=null==d?void 0:d.height)?r:null==d?void 0:d.h),(0,q.Z)(i,"height",null!=(l=null==d?void 0:d.height)?l:null==d?void 0:d.h),(0,q.Z)(i,"fontSize",null==d?void 0:d.fontSize),i),o.element);return(0,y.jsx)(P,(0,c.Z)({ref:n,__css:m},s))}));w.id="InputElement",w.displayName="InputElement";var D=(0,v.G)((function(e,n){var i=e.className,r=(0,p.Z)(e,S),l=(0,g.cx)("chakra-input__left-element",i);return(0,y.jsx)(w,(0,c.Z)({ref:n,placement:"left",className:l},r))}));D.id="InputLeftElement",D.displayName="InputLeftElement";var G=(0,v.G)((function(e,n){var i=e.className,r=(0,p.Z)(e,E),l=(0,g.cx)("chakra-input__right-element",i);return(0,y.jsx)(w,(0,c.Z)({ref:n,placement:"right",className:l},r))}));G.id="InputRightElement",G.displayName="InputRightElement";var L=i(4224),z=i(9434),O=i(8724),T=function(){var e=(0,I.useState)(""),n=(0,t.Z)(e,2),i=n[0],r=n[1],l=(0,I.useState)(""),a=(0,t.Z)(l,2),c=a[0],p=a[1],m=(0,z.I0)(),h=(0,I.useState)(!1),v=(0,t.Z)(h,2),f=v[0],x=v[1],b=function(e){var n=e.target,i=n.name,l=n.value;switch(i){case"email":r(l);break;case"password":p(l)}};return(0,y.jsxs)(s.k,{as:"form",flexDirection:"column",border:"1px",borderColor:"#D53F8C",borderRadius:"10px",mx:"auto",mb:"200px",p:"20px",gap:"30px",bg:"rgb(250, 255, 255, 0.725)",w:["260px","400px","450px","480px"],onSubmit:function(e){e.preventDefault(),m((0,O.x4)({email:i,password:c})),r(""),p("")},children:[(0,y.jsx)(s.k,{flexDirection:"column",align:"center",gap:"20px",children:(0,y.jsxs)(o.NI,{isRequired:!0,children:[(0,y.jsx)(d.l,{color:"#2C2E8A",children:" Email"}),(0,y.jsx)(u.I,{type:"email",name:"email",value:i,id:"id",color:"#020226",borderColor:"#D53F8C",placeholder:"Email address",onChange:b}),(0,y.jsx)(d.l,{color:"#2C2E8A",children:"Password"}),(0,y.jsxs)(C,{children:[(0,y.jsx)(u.I,{name:"password",value:c,type:f?"text":"password",color:"#020226",borderColor:"#D53F8C",placeholder:"Password",onChange:b}),(0,y.jsx)(G,{children:(0,y.jsx)(L.z,{h:"1.55rem",bg:"transparent",mr:"5px",size:"xs",onClick:function(){return x(!f)},children:f?"Hide":"Show"})})]})]})}),(0,y.jsx)(L.z,{type:"submit",colorScheme:"pink",size:"sm",children:"Login"})]})},H=function(){return(0,y.jsxs)(r.xu,{w:["280px","479px","767px","991px","1200px"],pt:"50px",mx:"auto",textAlign:"center",children:[(0,y.jsx)(l.X,{bgGradient:"linear(to-r, #302b63, #24243e )",bgClip:"text",mb:"10px",children:"Welcome back!"}),(0,y.jsx)(a.x,{color:"#2C2E8A",mb:"30px",children:"Please log into your account to continue"}),(0,y.jsx)(T,{})]})}},4585:function(e,n,i){i.d(n,{l:function(){return m}});var r=i(1413),l=i(4925),a=i(2701),t=i(7872),s=i(9084),o=i(9477),d=i(2952),u=i(6992),c=i(184),p=["className","children","requiredIndicator","optionalIndicator"],m=(0,t.G)((function(e,n){var i,t=(0,s.mq)("FormLabel",e),m=(0,o.Lr)(e),v=(m.className,m.children),f=m.requiredIndicator,x=void 0===f?(0,c.jsx)(h,{}):f,b=m.optionalIndicator,g=void 0===b?null:b,Z=(0,l.Z)(m,p),I=(0,a.NJ)(),y=null!=(i=null==I?void 0:I.getLabelProps(Z,n))?i:(0,r.Z)({ref:n},Z);return(0,c.jsxs)(d.m.label,(0,r.Z)((0,r.Z)({},y),{},{className:(0,u.cx)("chakra-form__label",m.className),__css:(0,r.Z)({display:"block",textAlign:"start"},t),children:[v,(null==I?void 0:I.isRequired)?x:g]}))}));m.displayName="FormLabel";var h=(0,t.G)((function(e,n){var i=(0,a.NJ)(),l=(0,a.e)();if(!(null==i?void 0:i.isRequired))return null;var t=(0,u.cx)("chakra-form__required-indicator",e.className);return(0,c.jsx)(d.m.span,(0,r.Z)((0,r.Z)({},null==i?void 0:i.getRequiredIndicatorProps(e,n)),{},{__css:l.requiredIndicator,className:t}))}));h.displayName="RequiredIndicator"},2701:function(e,n,i){i.d(n,{NI:function(){return _},NJ:function(){return k},e:function(){return Z}});var r=i(1413),l=i(4925),a=i(9439),t=i(9886),s=i(4591),o=i(7872),d=i(9084),u=i(9477),c=i(2952),p=i(6992),m=i(2791),h=i(184),v=["id","isRequired","isInvalid","isDisabled","isReadOnly"],f=["getRootProps","htmlProps"],x=(0,t.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),b=(0,a.Z)(x,2),g=b[0],Z=b[1],I=(0,t.k)({strict:!1,name:"FormControlContext"}),y=(0,a.Z)(I,2),N=y[0],k=y[1];var _=(0,o.G)((function(e,n){var i=(0,d.jC)("Form",e),t=function(e){var n=e.id,i=e.isRequired,t=e.isInvalid,o=e.isDisabled,d=e.isReadOnly,u=(0,l.Z)(e,v),c=(0,m.useId)(),h=n||"field-".concat(c),f="".concat(h,"-label"),x="".concat(h,"-feedback"),b="".concat(h,"-helptext"),g=(0,m.useState)(!1),Z=(0,a.Z)(g,2),I=Z[0],y=Z[1],N=(0,m.useState)(!1),k=(0,a.Z)(N,2),_=k[0],j=k[1],R=(0,m.useState)(!1),C=(0,a.Z)(R,2),q=C[0],F=C[1],S=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({id:b},e),{},{ref:(0,s.lq)(n,(function(e){e&&j(!0)}))})}),[b]),E=(0,m.useCallback)((function(){var e,n,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({},i),{},{ref:l,"data-focus":(0,p.PB)(q),"data-disabled":(0,p.PB)(o),"data-invalid":(0,p.PB)(t),"data-readonly":(0,p.PB)(d),id:null!=(e=i.id)?e:f,htmlFor:null!=(n=i.htmlFor)?n:h})}),[h,o,q,t,d,f]),P=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({id:x},e),{},{ref:(0,s.lq)(n,(function(e){e&&y(!0)})),"aria-live":"polite"})}),[x]),w=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)((0,r.Z)({},e),u),{},{ref:n,role:"group"})}),[u]),D=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({},e),{},{ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!i,isInvalid:!!t,isReadOnly:!!d,isDisabled:!!o,isFocused:!!q,onFocus:function(){return F(!0)},onBlur:function(){return F(!1)},hasFeedbackText:I,setHasFeedbackText:y,hasHelpText:_,setHasHelpText:j,id:h,labelId:f,feedbackId:x,helpTextId:b,htmlProps:u,getHelpTextProps:S,getErrorMessageProps:P,getRootProps:w,getLabelProps:E,getRequiredIndicatorProps:D}}((0,u.Lr)(e)),o=t.getRootProps,x=(t.htmlProps,(0,l.Z)(t,f)),b=(0,p.cx)("chakra-form-control",e.className);return(0,h.jsx)(N,{value:x,children:(0,h.jsx)(g,{value:i,children:(0,h.jsx)(c.m.div,(0,r.Z)((0,r.Z)({},o({},n)),{},{className:b,__css:i.container}))})})}));_.displayName="FormControl",(0,o.G)((function(e,n){var i=k(),l=Z(),a=(0,p.cx)("chakra-form__helper-text",e.className);return(0,h.jsx)(c.m.div,(0,r.Z)((0,r.Z)({},null==i?void 0:i.getHelpTextProps(e,n)),{},{__css:l.helperText,className:a}))})).displayName="FormHelperText"},7886:function(e,n,i){i.d(n,{I:function(){return f}});var r=i(1413),l=i(4925),a=i(2701),t=i(6992),s=["isDisabled","isInvalid","isReadOnly","isRequired"],o=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function d(e){var n=function(e){var n,i,s,d=(0,a.NJ)(),u=e.id,c=e.disabled,p=e.readOnly,m=e.required,h=e.isRequired,v=e.isInvalid,f=e.isReadOnly,x=e.isDisabled,b=e.onFocus,g=e.onBlur,Z=(0,l.Z)(e,o),I=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==d?void 0:d.hasFeedbackText)&&(null==d?void 0:d.isInvalid)&&I.push(d.feedbackId);(null==d?void 0:d.hasHelpText)&&I.push(d.helpTextId);return(0,r.Z)((0,r.Z)({},Z),{},{"aria-describedby":I.join(" ")||void 0,id:null!=u?u:null==d?void 0:d.id,isDisabled:null!=(n=null!=c?c:x)?n:null==d?void 0:d.isDisabled,isReadOnly:null!=(i=null!=p?p:f)?i:null==d?void 0:d.isReadOnly,isRequired:null!=(s=null!=m?m:h)?s:null==d?void 0:d.isRequired,isInvalid:null!=v?v:null==d?void 0:d.isInvalid,onFocus:(0,t.v0)(null==d?void 0:d.onFocus,b),onBlur:(0,t.v0)(null==d?void 0:d.onBlur,g)})}(e),i=n.isDisabled,d=n.isInvalid,u=n.isReadOnly,c=n.isRequired,p=(0,l.Z)(n,s);return(0,r.Z)((0,r.Z)({},p),{},{disabled:i,readOnly:u,required:c,"aria-invalid":(0,t.Qm)(d),"aria-required":(0,t.Qm)(c),"aria-readonly":(0,t.Qm)(u)})}var u=i(7872),c=i(9084),p=i(9477),m=i(2952),h=i(184),v=["htmlSize"],f=(0,u.G)((function(e,n){var i=e.htmlSize,a=(0,l.Z)(e,v),s=(0,c.jC)("Input",a),o=d((0,p.Lr)(a)),u=(0,t.cx)("chakra-input",e.className);return(0,h.jsx)(m.m.input,(0,r.Z)((0,r.Z)({size:i},o),{},{__css:s.field,ref:n,className:u}))}));f.displayName="Input",f.id="Input"},5946:function(e,n,i){i.d(n,{X:function(){return p}});var r=i(1413),l=i(4925),a=i(7872),t=i(9084),s=i(9477),o=i(2952),d=i(6992),u=i(184),c=["className"],p=(0,a.G)((function(e,n){var i=(0,t.mq)("Heading",e),a=(0,s.Lr)(e),p=(a.className,(0,l.Z)(a,c));return(0,u.jsx)(o.m.h2,(0,r.Z)((0,r.Z)({ref:n,className:(0,d.cx)("chakra-heading",e.className)},p),{},{__css:i}))}));p.displayName="Heading"}}]);
//# sourceMappingURL=135.addd3f98.chunk.js.map