"use strict";(self.webpackChunkformularios=self.webpackChunkformularios||[]).push([[32],{9032:(Ne,E,p)=>{p.r(E),p.d(E,{InputTextModule:()=>ye});var M=p(412),L=p(4466),w=p(701),t=p(3018),k=p(3010),C=p(6094),r=p(665),s=p(8583),b=p(3908),c=p(8295),T=p(521),v=p(9490),V=p(9193),y=p(9765);p(2759),p(5124),p(6782);const O=(0,T.i$)({passive:!0});let J=(()=>{class n{constructor(e,i){this._platform=e,this._ngZone=i,this._monitoredElements=new Map}monitor(e){if(!this._platform.isBrowser)return V.E;const i=(0,v.fI)(e),a=this._monitoredElements.get(i);if(a)return a.subject;const l=new y.xQ,u="cdk-text-field-autofilled",d=m=>{"cdk-text-field-autofill-start"!==m.animationName||i.classList.contains(u)?"cdk-text-field-autofill-end"===m.animationName&&i.classList.contains(u)&&(i.classList.remove(u),this._ngZone.run(()=>l.next({target:m.target,isAutofilled:!1}))):(i.classList.add(u),this._ngZone.run(()=>l.next({target:m.target,isAutofilled:!0})))};return this._ngZone.runOutsideAngular(()=>{i.addEventListener("animationstart",d,O),i.classList.add("cdk-text-field-autofill-monitored")}),this._monitoredElements.set(i,{subject:l,unlisten:()=>{i.removeEventListener("animationstart",d,O)}}),l}stopMonitoring(e){const i=(0,v.fI)(e),a=this._monitoredElements.get(i);a&&(a.unlisten(),a.subject.complete(),i.classList.remove("cdk-text-field-autofill-monitored"),i.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(i))}ngOnDestroy(){this._monitoredElements.forEach((e,i)=>this.stopMonitoring(i))}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(T.t4),t.LFG(t.R0b))},n.\u0275prov=t.Yz7({factory:function(){return new n(t.LFG(T.t4),t.LFG(t.R0b))},token:n,providedIn:"root"}),n})(),R=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[T.ud]]}),n})();var q=p(2458);const D=new t.OlP("MAT_INPUT_VALUE_ACCESSOR"),z=["button","checkbox","file","hidden","image","radio","range","reset","submit"];let S=0;const H=(0,q.FD)(class{constructor(n,o,e,i){this._defaultErrorStateMatcher=n,this._parentForm=o,this._parentFormGroup=e,this.ngControl=i}});let I=(()=>{class n extends H{constructor(e,i,a,l,u,d,m,h,g,_){super(d,l,u,a),this._elementRef=e,this._platform=i,this._autofillMonitor=h,this._formField=_,this._uid="mat-input-"+S++,this.focused=!1,this.stateChanges=new y.xQ,this.controlType="mat-input",this.autofilled=!1,this._disabled=!1,this._required=!1,this._type="text",this._readonly=!1,this._neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(N=>(0,T.qK)().has(N));const x=this._elementRef.nativeElement,f=x.nodeName.toLowerCase();this._inputValueAccessor=m||x,this._previousNativeValue=this.value,this.id=this.id,i.IOS&&g.runOutsideAngular(()=>{e.nativeElement.addEventListener("keyup",N=>{const A=N.target;!A.value&&0===A.selectionStart&&0===A.selectionEnd&&(A.setSelectionRange(1,1),A.setSelectionRange(0,0))})}),this._isServer=!this._platform.isBrowser,this._isNativeSelect="select"===f,this._isTextarea="textarea"===f,this._isInFormField=!!_,this._isNativeSelect&&(this.controlType=x.multiple?"mat-native-select-multiple":"mat-native-select")}get disabled(){return this.ngControl&&null!==this.ngControl.disabled?this.ngControl.disabled:this._disabled}set disabled(e){this._disabled=(0,v.Ig)(e),this.focused&&(this.focused=!1,this.stateChanges.next())}get id(){return this._id}set id(e){this._id=e||this._uid}get required(){return this._required}set required(e){this._required=(0,v.Ig)(e)}get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&(0,T.qK)().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}get value(){return this._inputValueAccessor.value}set value(e){e!==this.value&&(this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=(0,v.Ig)(e)}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement)}ngDoCheck(){this.ngControl&&this.updateErrorState(),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}_focusChanged(e){e!==this.focused&&(this.focused=e,this.stateChanges.next())}_onInput(){}_dirtyCheckPlaceholder(){var e,i;const a=(null===(i=null===(e=this._formField)||void 0===e?void 0:e._hideControlPlaceholder)||void 0===i?void 0:i.call(e))?null:this.placeholder;if(a!==this._previousPlaceholder){const l=this._elementRef.nativeElement;this._previousPlaceholder=a,a?l.setAttribute("placeholder",a):l.removeAttribute("placeholder")}}_dirtyCheckNativeValue(){const e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_validateType(){z.indexOf(this._type)}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!(this._isNeverEmpty()||this._elementRef.nativeElement.value||this._isBadInput()||this.autofilled)}get shouldLabelFloat(){if(this._isNativeSelect){const e=this._elementRef.nativeElement,i=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&i&&i.label)}return this.focused||!this.empty}setDescribedByIds(e){e.length?this._elementRef.nativeElement.setAttribute("aria-describedby",e.join(" ")):this._elementRef.nativeElement.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){const e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.SBq),t.Y36(T.t4),t.Y36(r.a5,10),t.Y36(r.F,8),t.Y36(r.sg,8),t.Y36(q.rD),t.Y36(D,10),t.Y36(J),t.Y36(t.R0b),t.Y36(c.G_,8))},n.\u0275dir=t.lG2({type:n,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-input-element","mat-form-field-autofill-control"],hostVars:11,hostBindings:function(e,i){1&e&&t.NdJ("focus",function(){return i._focusChanged(!0)})("blur",function(){return i._focusChanged(!1)})("input",function(){return i._onInput()}),2&e&&(t.Ikx("disabled",i.disabled)("required",i.required),t.uIk("id",i.id)("data-placeholder",i.placeholder)("readonly",i.readonly&&!i._isNativeSelect||null)("aria-invalid",i.empty&&i.required?null:i.errorState)("aria-required",i.required),t.ekj("mat-input-server",i._isServer)("mat-native-select-inline",i._isInlineSelect()))},inputs:{id:"id",disabled:"disabled",required:"required",type:"type",value:"value",readonly:"readonly",placeholder:"placeholder",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:["aria-describedby","userAriaDescribedBy"]},exportAs:["matInput"],features:[t._Bn([{provide:c.Eo,useExisting:n}]),t.qOj,t.TTD]}),n})(),B=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[q.rD],imports:[[R,c.lN,q.BQ],R,c.lN]}),n})();function P(n,o){if(1&n&&(t.TgZ(0,"div",6),t._UZ(1,"input",7),t.TgZ(2,"label",8),t._uU(3),t.qZA(),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("placeholder",e.labelInput)("formControl",e.inputText),t.xp6(2),t.Oqu(e.labelInput)}}function G(n,o){if(1&n&&(t.TgZ(0,"mat-form-field",9),t.TgZ(1,"mat-label"),t._uU(2),t.qZA(),t._UZ(3,"input",10),t.qZA()),2&n){const e=t.oxw();t.xp6(2),t.Oqu(e.labelInput),t.xp6(1),t.Q6J("formControl",e.inputText)("placeholder",e.labelInput)}}let j=(()=>{class n extends C.z{constructor(e,i){super(i),this.fb=e,this.labelInput="Input de texto"}ngOnInit(){this.buildInputText()}buildInputText(){this.inputText=this.fb.control({value:"",disabled:!1})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(r.qu),t.Y36(M.V))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-input-text-simple"]],features:[t.qOj],decls:8,vars:7,consts:[[1,"row"],[1,"col-8"],["class","form-floating mb-3",4,"ngIf"],["appearance","fill",4,"ngIf"],[1,"col-4"],[3,"control"],[1,"form-floating","mb-3"],["type","text","id","inputTextBootstrap",1,"form-control",3,"placeholder","formControl"],["for","inputTextBootstrap"],["appearance","fill"],["matInput","","type","text",3,"formControl","placeholder"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.YNc(2,P,4,3,"div",2),t.ALo(3,"async"),t.YNc(4,G,4,3,"mat-form-field",3),t.ALo(5,"async"),t.qZA(),t.TgZ(6,"div",4),t._UZ(7,"app-control-data-table",5),t.qZA(),t.qZA()),2&e&&(t.xp6(2),t.Q6J("ngIf",t.lcZ(3,3,i.isBootstrap)),t.xp6(2),t.Q6J("ngIf",t.lcZ(5,5,i.isMaterial)),t.xp6(3),t.Q6J("control",i.inputText))},directives:[s.O5,b.d,r.Fj,r.JJ,r.oH,c.KE,c.hX,I],pipes:[s.Ov],encapsulation:2,changeDetection:0}),n})();var Z=p(4206);function X(n,o){if(1&n&&(t.TgZ(0,"div"),t._uU(1),t.qZA()),2&n){const e=t.oxw(3);t.xp6(1),t.Oqu(e.requiredMessage)}}function $(n,o){if(1&n&&(t.TgZ(0,"div",10),t.YNc(1,X,2,1,"div",11),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.inputTextRequired.errors.required)}}const K=function(n,o){return{"is-invalid":n,"is-valid":o}};function W(n,o){if(1&n&&(t.TgZ(0,"div",6),t._UZ(1,"input",7),t.TgZ(2,"label",8),t._uU(3),t.qZA(),t.YNc(4,$,2,1,"div",9),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngClass",t.WLB(5,K,e.inputTextRequired.errors&&!e.inputTextRequired.pristine,!e.inputTextRequired.errors&&!e.inputTextRequired.pristine))("placeholder",e.labelInput)("formControl",e.inputTextRequired),t.xp6(2),t.Oqu(e.labelInput),t.xp6(1),t.Q6J("ngIf",e.inputTextRequired.errors&&!e.inputTextRequired.pristine)}}function tt(n,o){if(1&n&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Oqu(e.requiredMessage)}}function et(n,o){if(1&n&&(t.TgZ(0,"mat-form-field",12),t.TgZ(1,"mat-label"),t._uU(2),t.qZA(),t._UZ(3,"input",13),t.YNc(4,tt,2,1,"mat-error",11),t.qZA()),2&n){const e=t.oxw();t.xp6(2),t.Oqu(e.labelInput),t.xp6(1),t.Q6J("formControl",e.inputTextRequired)("placeholder",e.labelInput)("errorStateMatcher",e.inputTextRequiredMatcher),t.xp6(1),t.Q6J("ngIf",null==e.inputTextRequired.errors?null:e.inputTextRequired.errors.required)}}let nt=(()=>{class n extends C.z{constructor(e,i){super(i),this.fb=e,this.labelInput="Input de texto con valor requerido"}ngOnInit(){this.buildInputTextRequired()}buildInputTextRequired(){this.inputTextRequired=this.fb.control({value:"",disabled:!1},r.kI.required),this.inputTextRequiredMatcher=new Z.MI}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(r.qu),t.Y36(M.V))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-input-text-required"]],features:[t.qOj],decls:8,vars:7,consts:[[1,"row"],[1,"col-8"],["class","form-floating mb-3",4,"ngIf"],["appearance","fill",4,"ngIf"],[1,"col-4"],[3,"control"],[1,"form-floating","mb-3"],["type","text","id","inputTextRequired",1,"form-control",3,"ngClass","placeholder","formControl"],["for","inputTextRequired"],["class","invalid-feedback",4,"ngIf"],[1,"invalid-feedback"],[4,"ngIf"],["appearance","fill"],["type","text","matInput","",3,"formControl","placeholder","errorStateMatcher"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.YNc(2,W,5,8,"div",2),t.ALo(3,"async"),t.YNc(4,et,5,5,"mat-form-field",3),t.ALo(5,"async"),t.qZA(),t.TgZ(6,"div",4),t._UZ(7,"app-control-data-table",5),t.qZA(),t.qZA()),2&e&&(t.xp6(2),t.Q6J("ngIf",t.lcZ(3,3,i.isBootstrap)),t.xp6(2),t.Q6J("ngIf",t.lcZ(5,5,i.isMaterial)),t.xp6(3),t.Q6J("control",i.inputTextRequired))},directives:[s.O5,b.d,r.Fj,s.mk,r.JJ,r.oH,c.KE,c.hX,I,c.TO],pipes:[s.Ov],encapsulation:2,changeDetection:0}),n})();function it(n,o){if(1&n&&(t.TgZ(0,"div"),t._uU(1),t.qZA()),2&n){const e=t.oxw(3);t.xp6(1),t.Oqu(e.errorNoMin)}}function ot(n,o){if(1&n&&(t.TgZ(0,"div"),t._uU(1),t.qZA()),2&n){const e=t.oxw(3);t.xp6(1),t.Oqu(e.errorNoMax)}}function at(n,o){if(1&n&&(t.TgZ(0,"div",10),t.YNc(1,it,2,1,"div",11),t.YNc(2,ot,2,1,"div",11),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.inputTextMinMaxLength.errors.minlength),t.xp6(1),t.Q6J("ngIf",e.inputTextMinMaxLength.errors.maxlength)}}const rt=function(n,o){return{"is-invalid":n,"is-valid":o}};function lt(n,o){if(1&n&&(t.TgZ(0,"div",6),t._UZ(1,"input",7),t.TgZ(2,"label",8),t._uU(3),t.qZA(),t.YNc(4,at,3,2,"div",9),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngClass",t.WLB(5,rt,e.inputTextMinMaxLength.errors&&!e.inputTextMinMaxLength.pristine,!e.inputTextMinMaxLength.errors&&!e.inputTextMinMaxLength.pristine))("placeholder",e.labelInput)("formControl",e.inputTextMinMaxLength),t.xp6(2),t.Oqu(e.labelInput),t.xp6(1),t.Q6J("ngIf",e.inputTextMinMaxLength.errors&&!e.inputTextMinMaxLength.pristine)}}function st(n,o){if(1&n&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Oqu(e.errorNoMin)}}function ut(n,o){if(1&n&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Oqu(e.errorNoMax)}}function pt(n,o){if(1&n&&(t.TgZ(0,"mat-form-field",12),t.TgZ(1,"mat-label"),t._uU(2),t.qZA(),t._UZ(3,"input",13),t.YNc(4,st,2,1,"mat-error",11),t.YNc(5,ut,2,1,"mat-error",11),t.qZA()),2&n){const e=t.oxw();t.xp6(2),t.Oqu(e.labelInput),t.xp6(1),t.Q6J("formControl",e.inputTextMinMaxLength)("placeholder",e.labelInput)("errorStateMatcher",e.inputTextMinMaxLengthMatcher),t.xp6(1),t.Q6J("ngIf",null==e.inputTextMinMaxLength.errors?null:e.inputTextMinMaxLength.errors.minlength),t.xp6(1),t.Q6J("ngIf",null==e.inputTextMinMaxLength.errors?null:e.inputTextMinMaxLength.errors.maxlength)}}let ct=(()=>{class n extends C.z{constructor(e,i){super(i),this.fb=e,this.labelInput="Input de texto con m\xednimo y m\xe1ximo de largo de cadena"}ngOnInit(){this.buildInputTextMinMaxLength()}ngOnDestroy(){this.valueChangeSub.unsubscribe()}buildInputTextMinMaxLength(){this.inputTextMinMaxLength=this.fb.control({value:"",disabled:!1},[r.kI.minLength(5),r.kI.maxLength(10)]),this.inputTextMinMaxLengthMatcher=new Z.MI,this.valueChangeSub=this.inputTextMinMaxLength.valueChanges.subscribe(()=>{var e,i,a,l,u,d,m,h,g,_,x,f;this.errorNoMin=`Se requieren un m\xednimo de ${null===(a=null===(i=null===(e=this.inputTextMinMaxLength)||void 0===e?void 0:e.errors)||void 0===i?void 0:i.minlength)||void 0===a?void 0:a.requiredLength} (la cadena contiene ${null===(d=null===(u=null===(l=this.inputTextMinMaxLength)||void 0===l?void 0:l.errors)||void 0===u?void 0:u.minlength)||void 0===d?void 0:d.actualLength})`,this.errorNoMax=`No se pueden superar los ${null===(g=null===(h=null===(m=this.inputTextMinMaxLength)||void 0===m?void 0:m.errors)||void 0===h?void 0:h.maxlength)||void 0===g?void 0:g.requiredLength} caracteres (la cadena contiene ${null===(f=null===(x=null===(_=this.inputTextMinMaxLength)||void 0===_?void 0:_.errors)||void 0===x?void 0:x.maxlength)||void 0===f?void 0:f.actualLength})`})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(r.qu),t.Y36(M.V))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-input-text-min-max-length"]],features:[t.qOj],decls:8,vars:7,consts:[[1,"row"],[1,"col-8"],["class","form-floating mb-3",4,"ngIf"],["appearance","fill",4,"ngIf"],[1,"col-4"],[3,"control"],[1,"form-floating","mb-3"],["type","text","id","inputTextMinMaxLength",1,"form-control",3,"ngClass","placeholder","formControl"],["for","inputTextMinMaxLength"],["class","invalid-feedback",4,"ngIf"],[1,"invalid-feedback"],[4,"ngIf"],["appearance","fill"],["type","text","matInput","",3,"formControl","placeholder","errorStateMatcher"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.YNc(2,lt,5,8,"div",2),t.ALo(3,"async"),t.YNc(4,pt,6,6,"mat-form-field",3),t.ALo(5,"async"),t.qZA(),t.TgZ(6,"div",4),t._UZ(7,"app-control-data-table",5),t.qZA(),t.qZA()),2&e&&(t.xp6(2),t.Q6J("ngIf",t.lcZ(3,3,i.isBootstrap)),t.xp6(2),t.Q6J("ngIf",t.lcZ(5,5,i.isMaterial)),t.xp6(3),t.Q6J("control",i.inputTextMinMaxLength))},directives:[s.O5,b.d,r.Fj,s.mk,r.JJ,r.oH,c.KE,c.hX,I,c.TO],pipes:[s.Ov],encapsulation:2,changeDetection:0}),n})();function dt(n,o){if(1&n&&(t.TgZ(0,"div"),t._uU(1),t.qZA()),2&n){const e=t.oxw(3);t.xp6(1),t.Oqu(e.emailFormatMessage)}}function mt(n,o){if(1&n&&(t.TgZ(0,"div",10),t.YNc(1,dt,2,1,"div",11),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.inputTextEmail.errors.email)}}const xt=function(n,o){return{"is-invalid":n,"is-valid":o}};function _t(n,o){if(1&n&&(t.TgZ(0,"div",6),t._UZ(1,"input",7),t.TgZ(2,"label",8),t._uU(3),t.qZA(),t.YNc(4,mt,2,1,"div",9),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngClass",t.WLB(5,xt,e.inputTextEmail.errors&&!e.inputTextEmail.pristine,!e.inputTextEmail.errors&&!e.inputTextEmail.pristine))("placeholder",e.labelInput)("formControl",e.inputTextEmail),t.xp6(2),t.Oqu(e.labelInput),t.xp6(1),t.Q6J("ngIf",e.inputTextEmail.errors&&!e.inputTextEmail.pristine)}}function ft(n,o){if(1&n&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Oqu(e.emailFormatMessage)}}function ht(n,o){if(1&n&&(t.TgZ(0,"mat-form-field",12),t.TgZ(1,"mat-label"),t._uU(2),t.qZA(),t._UZ(3,"input",13),t.YNc(4,ft,2,1,"mat-error",11),t.qZA()),2&n){const e=t.oxw();t.xp6(2),t.Oqu(e.labelInput),t.xp6(1),t.Q6J("formControl",e.inputTextEmail)("placeholder",e.labelInput)("errorStateMatcher",e.inputTextEmailMatcher),t.xp6(1),t.Q6J("ngIf",null==e.inputTextEmail.errors?null:e.inputTextEmail.errors.email)}}let gt=(()=>{class n extends C.z{constructor(e,i){super(i),this.fb=e,this.labelInput="Input de texto formato de e-mail v\xe1lido",this.emailFormatMessage="Se requiere un formato de e-mail v\xe1lido"}ngOnInit(){this.buildInputTextEmail()}buildInputTextEmail(){this.inputTextEmail=this.fb.control({value:"",disabled:!1},r.kI.email),this.inputTextEmailMatcher=new Z.MI}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(r.qu),t.Y36(M.V))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-input-text-email"]],features:[t.qOj],decls:8,vars:7,consts:[[1,"row"],[1,"col-8"],["class","form-floating mb-3",4,"ngIf"],["appearance","fill",4,"ngIf"],[1,"col-4"],[3,"control"],[1,"form-floating","mb-3"],["type","email","id","inputTextEmail",1,"form-control",3,"ngClass","placeholder","formControl"],["for","inputTextEmail"],["class","invalid-feedback",4,"ngIf"],[1,"invalid-feedback"],[4,"ngIf"],["appearance","fill"],["type","text","matInput","",3,"formControl","placeholder","errorStateMatcher"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.YNc(2,_t,5,8,"div",2),t.ALo(3,"async"),t.YNc(4,ht,5,5,"mat-form-field",3),t.ALo(5,"async"),t.qZA(),t.TgZ(6,"div",4),t._UZ(7,"app-control-data-table",5),t.qZA(),t.qZA()),2&e&&(t.xp6(2),t.Q6J("ngIf",t.lcZ(3,3,i.isBootstrap)),t.xp6(2),t.Q6J("ngIf",t.lcZ(5,5,i.isMaterial)),t.xp6(3),t.Q6J("control",i.inputTextEmail))},directives:[s.O5,b.d,r.Fj,s.mk,r.JJ,r.oH,c.KE,c.hX,I,c.TO],pipes:[s.Ov],encapsulation:2,changeDetection:0}),n})();function Tt(n,o){if(1&n&&(t.TgZ(0,"div"),t._uU(1),t.qZA()),2&n){const e=t.oxw(3);t.xp6(1),t.Oqu(e.errorNoMin)}}function vt(n,o){if(1&n&&(t.TgZ(0,"div"),t._uU(1),t.qZA()),2&n){const e=t.oxw(3);t.xp6(1),t.Oqu(e.errorNoMax)}}function Mt(n,o){if(1&n&&(t.TgZ(0,"div",10),t.YNc(1,Tt,2,1,"div",11),t.YNc(2,vt,2,1,"div",11),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.inputNumberMinMax.errors.min),t.xp6(1),t.Q6J("ngIf",e.inputNumberMinMax.errors.max)}}const bt=function(n){return{"is-invalid":n}};function Ct(n,o){if(1&n&&(t.TgZ(0,"div",6),t._UZ(1,"input",7),t.TgZ(2,"label",8),t._uU(3),t.qZA(),t.YNc(4,Mt,3,2,"div",9),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngClass",t.VKq(5,bt,e.inputNumberMinMax.errors&&!e.inputNumberMinMax.pristine))("placeholder",e.labelInput)("formControl",e.inputNumberMinMax),t.xp6(2),t.Oqu(e.labelInput),t.xp6(1),t.Q6J("ngIf",e.inputNumberMinMax.errors&&!e.inputNumberMinMax.pristine)}}function It(n,o){if(1&n&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Oqu(e.errorNoMin)}}function Zt(n,o){if(1&n&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Oqu(e.errorNoMax)}}function At(n,o){if(1&n&&(t.TgZ(0,"mat-form-field",12),t.TgZ(1,"mat-label"),t._uU(2),t.qZA(),t._UZ(3,"input",13),t.YNc(4,It,2,1,"mat-error",11),t.YNc(5,Zt,2,1,"mat-error",11),t.qZA()),2&n){const e=t.oxw();t.xp6(2),t.Oqu(e.labelInput),t.xp6(1),t.Q6J("formControl",e.inputNumberMinMax)("placeholder",e.labelInput)("errorStateMatcher",e.inputNumberMinMaxMatcher),t.xp6(1),t.Q6J("ngIf",null==e.inputNumberMinMax.errors?null:e.inputNumberMinMax.errors.min),t.xp6(1),t.Q6J("ngIf",null==e.inputNumberMinMax.errors?null:e.inputNumberMinMax.errors.max)}}let qt=(()=>{class n extends C.z{constructor(e,i){super(i),this.fb=e,this.labelInput="Input num\xe9rico con comprobaci\xf3n de m\xednimo y m\xe1ximo"}ngOnInit(){this.buildInputNumberMinMax()}ngOnDestroy(){this.valueChangeSub.unsubscribe()}buildInputNumberMinMax(){this.inputNumberMinMax=this.fb.control({value:null,disabled:!1},[r.kI.min(5),r.kI.max(15)]),this.inputNumberMinMaxMatcher=new Z.MI,this.valueChangeSub=this.inputNumberMinMax.valueChanges.subscribe(()=>{var e,i,a,l,u,d,m,h,g,_,x,f;this.errorNoMin=`El m\xednimo es ${null===(a=null===(i=null===(e=this.inputNumberMinMax)||void 0===e?void 0:e.errors)||void 0===i?void 0:i.min)||void 0===a?void 0:a.min} (el valor actual es ${null===(d=null===(u=null===(l=this.inputNumberMinMax)||void 0===l?void 0:l.errors)||void 0===u?void 0:u.min)||void 0===d?void 0:d.actual})`,this.errorNoMax=`El m\xe1ximo es ${null===(g=null===(h=null===(m=this.inputNumberMinMax)||void 0===m?void 0:m.errors)||void 0===h?void 0:h.max)||void 0===g?void 0:g.max} (el valor actual es ${null===(f=null===(x=null===(_=this.inputNumberMinMax)||void 0===_?void 0:_.errors)||void 0===x?void 0:x.max)||void 0===f?void 0:f.actual})`})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(r.qu),t.Y36(M.V))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-input-number-min-max"]],features:[t.qOj],decls:8,vars:7,consts:[[1,"row"],[1,"col-8"],["class","form-floating mb-3",4,"ngIf"],["appearance","fill",4,"ngIf"],[1,"col-4"],[3,"control"],[1,"form-floating","mb-3"],["type","number","id","inputNumberMinMax",1,"form-control",3,"ngClass","placeholder","formControl"],["for","inputNumberMinMax"],["class","invalid-feedback",4,"ngIf"],[1,"invalid-feedback"],[4,"ngIf"],["appearance","fill"],["type","number","matInput","",3,"formControl","placeholder","errorStateMatcher"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.YNc(2,Ct,5,7,"div",2),t.ALo(3,"async"),t.YNc(4,At,6,6,"mat-form-field",3),t.ALo(5,"async"),t.qZA(),t.TgZ(6,"div",4),t._UZ(7,"app-control-data-table",5),t.qZA(),t.qZA()),2&e&&(t.xp6(2),t.Q6J("ngIf",t.lcZ(3,3,i.isBootstrap)),t.xp6(2),t.Q6J("ngIf",t.lcZ(5,5,i.isMaterial)),t.xp6(3),t.Q6J("control",i.inputNumberMinMax))},directives:[s.O5,b.d,r.wV,r.Fj,s.mk,r.JJ,r.oH,c.KE,c.hX,I,c.TO],pipes:[s.Ov],encapsulation:2,changeDetection:0}),n})();function yt(n,o){if(1&n&&(t.TgZ(0,"div"),t._uU(1),t.qZA()),2&n){const e=t.oxw(3);t.xp6(1),t.Oqu(e.errorMessage)}}function Nt(n,o){if(1&n&&(t.TgZ(0,"div",10),t.YNc(1,yt,2,1,"div",11),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.inputTextPattern.errors.pattern)}}const Et=function(n){return{"is-invalid":n}};function wt(n,o){if(1&n&&(t.TgZ(0,"div",6),t._UZ(1,"input",7),t.TgZ(2,"label",8),t._uU(3),t.qZA(),t.YNc(4,Nt,2,1,"div",9),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngClass",t.VKq(5,Et,e.inputTextPattern.errors&&!e.inputTextPattern.pristine))("placeholder",e.labelInput)("formControl",e.inputTextPattern),t.xp6(2),t.Oqu(e.labelInput),t.xp6(1),t.Q6J("ngIf",e.inputTextPattern.errors&&!e.inputTextPattern.pristine)}}function Ot(n,o){if(1&n&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Oqu(e.errorMessage)}}function Jt(n,o){if(1&n&&(t.TgZ(0,"mat-form-field",12),t.TgZ(1,"mat-label"),t._uU(2),t.qZA(),t._UZ(3,"input",13),t.YNc(4,Ot,2,1,"mat-error",11),t.qZA()),2&n){const e=t.oxw();t.xp6(2),t.Oqu(e.labelInput),t.xp6(1),t.Q6J("formControl",e.inputTextPattern)("placeholder",e.labelInput)("errorStateMatcher",e.inputTextPatternMatcher),t.xp6(1),t.Q6J("ngIf",null==e.inputTextPattern.errors?null:e.inputTextPattern.errors.pattern)}}let Rt=(()=>{class n extends C.z{constructor(e,i){super(i),this.fb=e,this.labelInput="Input de texto con comprobaci\xf3n de patr\xf3n",this.errorMessage="El texto debe cumplir el patr\xf3n XXXXX-XXX"}ngOnInit(){this.buildInputTextPattern()}buildInputTextPattern(){this.inputTextPattern=this.fb.control({value:"",disabled:!1},r.kI.pattern(/[a-zA-Z]{5,5}-[a-zA-Z]{3,3}$/)),this.inputTextPatternMatcher=new Z.MI}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(r.qu),t.Y36(M.V))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-input-text-valid-pattern"]],features:[t.qOj],decls:8,vars:7,consts:[[1,"row"],[1,"col-8"],["class","form-floating mb-3",4,"ngIf"],["appearance","fill",4,"ngIf"],[1,"col-4"],[3,"control"],[1,"form-floating","mb-3"],["type","text","id","inputTextPattern",1,"form-control",3,"ngClass","placeholder","formControl"],["for","inputTextPattern"],["class","invalid-feedback",4,"ngIf"],[1,"invalid-feedback"],[4,"ngIf"],["appearance","fill"],["type","text","matInput","",3,"formControl","placeholder","errorStateMatcher"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.YNc(2,wt,5,7,"div",2),t.ALo(3,"async"),t.YNc(4,Jt,5,5,"mat-form-field",3),t.ALo(5,"async"),t.qZA(),t.TgZ(6,"div",4),t._UZ(7,"app-control-data-table",5),t.qZA(),t.qZA()),2&e&&(t.xp6(2),t.Q6J("ngIf",t.lcZ(3,3,i.isBootstrap)),t.xp6(2),t.Q6J("ngIf",t.lcZ(5,5,i.isMaterial)),t.xp6(3),t.Q6J("control",i.inputTextPattern))},directives:[s.O5,b.d,r.Fj,s.mk,r.JJ,r.oH,c.KE,c.hX,I,c.TO],pipes:[s.Ov],encapsulation:2,changeDetection:0}),n})();function Lt(n,o){1&n&&t.GkF(0)}function kt(n,o){1&n&&t.GkF(0)}function Vt(n,o){1&n&&t.GkF(0)}function Ft(n,o){1&n&&t.GkF(0)}function Yt(n,o){1&n&&t.GkF(0)}function Qt(n,o){1&n&&t.GkF(0)}function Ut(n,o){1&n&&t.GkF(0)}function Dt(n,o){1&n&&t.GkF(0)}function zt(n,o){1&n&&t.GkF(0)}function St(n,o){1&n&&t.GkF(0)}function Ht(n,o){1&n&&t.GkF(0)}function Bt(n,o){1&n&&t.GkF(0)}function Pt(n,o){1&n&&t.GkF(0)}function Gt(n,o){1&n&&t.GkF(0)}function jt(n,o){1&n&&t.GkF(0)}function Xt(n,o){1&n&&t.GkF(0)}function $t(n,o){1&n&&t.GkF(0)}function Kt(n,o){1&n&&t.GkF(0)}function Wt(n,o){if(1&n&&t._UZ(0,"i",11),2&n){const e=t.oxw().icon;t.Q6J("ngClass","bi-"+e)}}function te(n,o){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=t.oxw().data;t.xp6(1),t.Oqu(e)}}function ee(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div",6),t.TgZ(1,"div",7),t.TgZ(2,"button",8),t.NdJ("click",function(){const l=t.CHM(e).data;return t.oxw().handleClickButton(l)}),t.YNc(3,Wt,1,1,"i",9),t.YNc(4,te,2,1,"span",10),t.qZA(),t.qZA(),t.qZA()}if(2&n){const e=o.icon,i=t.oxw();t.xp6(2),t.Q6J("disabled",i.disabled),t.xp6(1),t.Q6J("ngIf",e),t.xp6(1),t.Q6J("ngIf",!e)}}const ne=function(){return{data:"A"}},ie=function(){return{data:"B"}},oe=function(){return{data:"C"}},ae=function(){return{data:"D"}},re=function(){return{data:"E"}},le=function(){return{data:"F"}},se=function(){return{data:"1"}},ue=function(){return{data:"2"}},pe=function(){return{data:"3"}},ce=function(){return{data:"4"}},de=function(){return{data:"5"}},me=function(){return{data:"6"}},xe=function(){return{data:"7"}},_e=function(){return{data:"8"}},fe=function(){return{data:"9"}},he=function(){return{data:"0"}},ge=function(){return{data:"DEL",icon:"backspace"}},Te=function(){return{data:"OK",icon:"check-circle"}};let ve=(()=>{class n{constructor(){this.disabled=!1,this.codigo=""}registerOnChange(e){this.onChanged=e}registerOnTouched(e){this.onTouched=e}writeValue(e){this.codigo=e}setDisabledState(e){this.disabled=e}handleClickButton(e){"DEL"===e?this.codigo=this.codigo.substring(0,this.codigo.length-1):"OK"===e?(this.onTouched(),this.onChanged(this.codigo)):this.codigo+=e}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-cva-input-text"]],features:[t._Bn([{provide:r.JU,useExisting:(0,t.Gpc)(()=>n),multi:!0}])],decls:29,vars:55,consts:[[1,"row"],[1,"col-12"],["type","text","readonly","",1,"form-control-plaintext","border","rounded","py-1","px-2","text-end",3,"value"],[1,"row","px-2"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["boton",""],[1,"col-4","p-2"],[1,"d-grid","gap-2"],["type","button",1,"btn","btn-primary",3,"disabled","click"],["class","bi",3,"ngClass",4,"ngIf"],[4,"ngIf"],[1,"bi",3,"ngClass"]],template:function(e,i){if(1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t._UZ(2,"input",2),t.qZA(),t.qZA(),t.TgZ(3,"div",3),t.YNc(4,Lt,1,0,"ng-container",4),t.YNc(5,kt,1,0,"ng-container",4),t.YNc(6,Vt,1,0,"ng-container",4),t.qZA(),t.TgZ(7,"div",3),t.YNc(8,Ft,1,0,"ng-container",4),t.YNc(9,Yt,1,0,"ng-container",4),t.YNc(10,Qt,1,0,"ng-container",4),t.qZA(),t.TgZ(11,"div",3),t.YNc(12,Ut,1,0,"ng-container",4),t.YNc(13,Dt,1,0,"ng-container",4),t.YNc(14,zt,1,0,"ng-container",4),t.qZA(),t.TgZ(15,"div",3),t.YNc(16,St,1,0,"ng-container",4),t.YNc(17,Ht,1,0,"ng-container",4),t.YNc(18,Bt,1,0,"ng-container",4),t.qZA(),t.TgZ(19,"div",3),t.YNc(20,Pt,1,0,"ng-container",4),t.YNc(21,Gt,1,0,"ng-container",4),t.YNc(22,jt,1,0,"ng-container",4),t.qZA(),t.TgZ(23,"div",3),t.YNc(24,Xt,1,0,"ng-container",4),t.YNc(25,$t,1,0,"ng-container",4),t.YNc(26,Kt,1,0,"ng-container",4),t.qZA(),t.YNc(27,ee,5,3,"ng-template",null,5,t.W1O)),2&e){const a=t.MAs(28);t.xp6(2),t.Q6J("value",i.codigo),t.xp6(2),t.Q6J("ngTemplateOutlet",a)("ngTemplateOutletContext",t.DdM(37,ne)),t.xp6(1),t.Q6J("ngTemplateOutlet",a)("ngTemplateOutletContext",t.DdM(38,ie)),t.xp6(1),t.Q6J("ngTemplateOutlet",a)("ngTemplateOutletContext",t.DdM(39,oe)),t.xp6(2),t.Q6J("ngTemplateOutlet",a)("ngTemplateOutletContext",t.DdM(40,ae)),t.xp6(1),t.Q6J("ngTemplateOutlet",a)("ngTemplateOutletContext",t.DdM(41,re)),t.xp6(1),t.Q6J("ngTemplateOutlet",a)("ngTemplateOutletContext",t.DdM(42,le)),t.xp6(2),t.Q6J("ngTemplateOutlet",a)("ngTemplateOutletContext",t.DdM(43,se)),t.xp6(1),t.Q6J("ngTemplateOutlet",a)("ngTemplateOutletContext",t.DdM(44,ue)),t.xp6(1),t.Q6J("ngTemplateOutlet",a)("ngTemplateOutletContext",t.DdM(45,pe)),t.xp6(2),t.Q6J("ngTemplateOutlet",a)("ngTemplateOutletContext",t.DdM(46,ce)),t.xp6(1),t.Q6J("ngTemplateOutlet",a)("ngTemplateOutletContext",t.DdM(47,de)),t.xp6(1),t.Q6J("ngTemplateOutlet",a)("ngTemplateOutletContext",t.DdM(48,me)),t.xp6(2),t.Q6J("ngTemplateOutlet",a)("ngTemplateOutletContext",t.DdM(49,xe)),t.xp6(1),t.Q6J("ngTemplateOutlet",a)("ngTemplateOutletContext",t.DdM(50,_e)),t.xp6(1),t.Q6J("ngTemplateOutlet",a)("ngTemplateOutletContext",t.DdM(51,fe)),t.xp6(2),t.Q6J("ngTemplateOutlet",a)("ngTemplateOutletContext",t.DdM(52,he)),t.xp6(1),t.Q6J("ngTemplateOutlet",a)("ngTemplateOutletContext",t.DdM(53,ge)),t.xp6(1),t.Q6J("ngTemplateOutlet",a)("ngTemplateOutletContext",t.DdM(54,Te))}},directives:[s.tP,s.O5,s.mk],encapsulation:2}),n})();function Me(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"button",10),t.NdJ("click",function(){return t.CHM(e),t.oxw().disableControl()}),t._uU(1,"Deshabilitar"),t.qZA()}}function be(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"button",10),t.NdJ("click",function(){return t.CHM(e),t.oxw().enableControl()}),t._uU(1,"Habilitar"),t.qZA()}}function Ce(n,o){1&n&&(t.TgZ(0,"div",12),t.TgZ(1,"span"),t._UZ(2,"i",13),t.qZA(),t._uU(3,"El campo es requerido "),t.qZA())}function Ie(n,o){if(1&n&&(t.ynx(0),t.YNc(1,Ce,4,0,"div",11),t.BQk()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",null==e.inputTextCVA.errors?null:e.inputTextCVA.errors.required)}}let Ze=(()=>{class n{constructor(e){this.fb=e}ngOnInit(){this.buildInputTextCVA()}buildInputTextCVA(){this.inputTextCVA=this.fb.control({value:"",disabled:!1},r.kI.required)}randomCode(){const e=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];this.inputTextCVA.setValue(new Array(16).fill("").map(i=>e[Math.floor(Math.random()*e.length)]).join(""))}disableControl(){this.inputTextCVA.disable()}enableControl(){this.inputTextCVA.enable()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(r.qu))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-cva-input-text-example"]],decls:12,vars:6,consts:[[1,"row"],[1,"col-8","pb-3"],[3,"formControl"],[1,"col-4"],[3,"control"],[1,"pt-2"],[1,"btn","btn-primary",3,"disabled","click"],["class","btn btn-primary ms-2",3,"click",4,"ngIf"],[1,"col-12","p-2"],[4,"ngIf"],[1,"btn","btn-primary","ms-2",3,"click"],["class","alert alert-danger","role","alert",4,"ngIf"],["role","alert",1,"alert","alert-danger"],[1,"bi","bi-exclamation-triangle-fill","me-2"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t._UZ(2,"app-cva-input-text",2),t.qZA(),t.TgZ(3,"div",3),t._UZ(4,"app-control-data-table",4),t.TgZ(5,"div",5),t.TgZ(6,"button",6),t.NdJ("click",function(){return i.randomCode()}),t._uU(7,"Introducir c\xf3digo aleatorio"),t.qZA(),t.YNc(8,Me,2,0,"button",7),t.YNc(9,be,2,0,"button",7),t.qZA(),t.qZA(),t.TgZ(10,"div",8),t.YNc(11,Ie,2,1,"ng-container",9),t.qZA(),t.qZA()),2&e&&(t.xp6(2),t.Q6J("formControl",i.inputTextCVA),t.xp6(2),t.Q6J("control",i.inputTextCVA),t.xp6(2),t.Q6J("disabled",i.inputTextCVA.disabled),t.xp6(2),t.Q6J("ngIf",i.inputTextCVA.enabled),t.xp6(1),t.Q6J("ngIf",i.inputTextCVA.disabled),t.xp6(2),t.Q6J("ngIf",i.inputTextCVA.touched))},directives:[ve,r.JJ,r.oH,b.d,s.O5],encapsulation:2,changeDetection:0}),n})();const Ae=[{path:"",component:(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-input-text"]],decls:53,vars:0,consts:[[1,"row"],[1,"col-12"],["id","inputTextAccordion",1,"accordion","accordion-flush"],[1,"accordion-item"],["id","inputTextSimple",1,"accordion-header"],["type","button","data-bs-toggle","collapse","data-bs-target","#inputTextSimpleCollapse","aria-expanded","true","aria-controls","inputTextSimpleCollapse",1,"accordion-button","collapsed"],["id","inputTextSimpleCollapse","aria-labelledby","inputTextSimple",1,"accordion-collpase","collapse"],[1,"accordion-body"],["id","inputTextRequired",1,"accordion-header"],["type","button","data-bs-toggle","collapse","data-bs-target","#inputTextRequiredCollapse","aria-expanded","true","aria-controls","inputTextRequiredCollapse",1,"accordion-button","collapsed"],["id","inputTextRequiredCollapse","aria-labelledby","inputTextRequired",1,"accordion-collpase","collapse"],["id","inputTextMinMaxLength",1,"accordion-header"],["type","button","data-bs-toggle","collapse","data-bs-target","#inputTextMinMaxLengthCollapse","aria-expanded","true","aria-controls","inputTextMinMaxLengthCollapse",1,"accordion-button","collapsed"],["id","inputTextMinMaxLengthCollapse","aria-labelledby","inputTextMinMaxLength",1,"accordion-collpase","collapse"],["id","inputTextEmail",1,"accordion-header"],["type","button","data-bs-toggle","collapse","data-bs-target","#inputTextEmailCollapse","aria-expanded","true","aria-controls","inputTextEmailCollapse",1,"accordion-button","collapsed"],["id","inputTextEmailCollapse","aria-labelledby","inputTextEmail",1,"accordion-collpase","collapse"],["id","inputNumberMinMax",1,"accordion-header"],["type","button","data-bs-toggle","collapse","data-bs-target","#inputNumberMinMaxCollapse","aria-expanded","true","aria-controls","inputNumberMinMaxCollapse",1,"accordion-button","collapsed"],["id","inputNumberMinMaxCollapse","aria-labelledby","inputNumberMinMax",1,"accordion-collpase","collapse"],["id","inputTextPattern",1,"accordion-header"],["type","button","data-bs-toggle","collapse","data-bs-target","#inputTextPatternCollapse","aria-expanded","true","aria-controls","inputTextPatternCollapse",1,"accordion-button","collapsed"],["id","inputTextPatternCollapse","aria-labelledby","inputTextPattern",1,"accordion-collpase","collapse"],["id","inputTextCVA",1,"accordion-header"],["type","button","data-bs-toggle","collapse","data-bs-target","#inputTextCVACollapse","aria-expanded","true","aria-controls","inputTextCVACollapse",1,"accordion-button","collapsed"],["id","inputTextCVACollapse","aria-labelledby","inputTextCVA",1,"accordion-collpase","collapse"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t._UZ(2,"app-style-selector"),t.qZA(),t.qZA(),t.TgZ(3,"div",2),t.TgZ(4,"div",3),t.TgZ(5,"div",4),t.TgZ(6,"button",5),t._uU(7," Input de texto "),t.qZA(),t.qZA(),t.TgZ(8,"div",6),t.TgZ(9,"div",7),t._UZ(10,"app-input-text-simple"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(11,"div",3),t.TgZ(12,"div",8),t.TgZ(13,"button",9),t._uU(14," Input de texto con valor requerido "),t.qZA(),t.qZA(),t.TgZ(15,"div",10),t.TgZ(16,"div",7),t._UZ(17,"app-input-text-required"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(18,"div",3),t.TgZ(19,"div",11),t.TgZ(20,"button",12),t._uU(21," Input de texto con m\xednimo y m\xe1ximo de largo de cadena "),t.qZA(),t.qZA(),t.TgZ(22,"div",13),t.TgZ(23,"div",7),t._UZ(24,"app-input-text-min-max-length"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(25,"div",3),t.TgZ(26,"div",14),t.TgZ(27,"button",15),t._uU(28," Input de texto formato de e-mail v\xe1lido "),t.qZA(),t.qZA(),t.TgZ(29,"div",16),t.TgZ(30,"div",7),t._UZ(31,"app-input-text-email"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(32,"div",3),t.TgZ(33,"div",17),t.TgZ(34,"button",18),t._uU(35," Input num\xe9rico con comprobaci\xf3n de m\xednimo y m\xe1ximo "),t.qZA(),t.qZA(),t.TgZ(36,"div",19),t.TgZ(37,"div",7),t._UZ(38,"app-input-number-min-max"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(39,"div",3),t.TgZ(40,"div",20),t.TgZ(41,"button",21),t._uU(42," Input de texto con validaci\xf3n de patr\xf3n "),t.qZA(),t.qZA(),t.TgZ(43,"div",22),t.TgZ(44,"div",7),t._UZ(45,"app-input-text-valid-pattern"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(46,"div",3),t.TgZ(47,"div",23),t.TgZ(48,"button",24),t._uU(49," Input text con CVA "),t.qZA(),t.qZA(),t.TgZ(50,"div",25),t.TgZ(51,"div",7),t._UZ(52,"app-cva-input-text-example"),t.qZA(),t.qZA(),t.qZA(),t.qZA())},directives:[k.S,j,nt,ct,gt,qt,Rt,Ze],encapsulation:2,changeDetection:0}),n})()}];let qe=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[w.Bz.forChild(Ae)],w.Bz]}),n})(),ye=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[M.V],imports:[[L.m,qe,B]]}),n})()}}]);