"use strict";(self.webpackChunkformularios=self.webpackChunkformularios||[]).push([[552],{8552:(J,u,r)=>{r.r(u),r.d(u,{TextAreaModule:()=>U});var i=r(9983),s=r(412),A=r(4466),d=r(701),t=r(3018),f=r(3010),p=r(6094),l=r(665),c=r(8583),m=r(3908),x=r(8295);function C(o,a){if(1&o&&(t.TgZ(0,"div",6),t._UZ(1,"textarea",7),t.TgZ(2,"label",8),t._uU(3),t.qZA(),t.TgZ(4,"div",9),t._uU(5),t.qZA(),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("formControl",e.textAreaCountControl),t.xp6(2),t.Oqu(e.labelTextArea),t.xp6(2),t.Oqu(e.counterText)}}function T(o,a){if(1&o&&(t.TgZ(0,"mat-form-field",10),t.TgZ(1,"mat-label"),t._uU(2),t.qZA(),t._UZ(3,"textarea",11),t.TgZ(4,"mat-hint",12),t._uU(5),t.qZA(),t.qZA()),2&o){const e=t.oxw();t.xp6(2),t.Oqu(e.labelTextArea),t.xp6(1),t.Q6J("formControl",e.textAreaCountControl)("placeholder",e.labelTextArea),t.xp6(2),t.Oqu(e.counterText)}}let g=(()=>{class o extends p.z{constructor(e,n){super(n),this.fb=e,this.labelTextArea="Introduzca un texto"}ngOnInit(){this.buildTextAreaCountControl()}buildTextAreaCountControl(){this.textAreaCountControl=this.fb.control({value:"",disabled:!1}),this.updateCounterText(this.textAreaCountControl.value),this.changeValueSubscription=this.textAreaCountControl.valueChanges.subscribe(e=>this.updateCounterText(e))}updateCounterText(e){this.counterText=`Total caracteres: ${e.length}`}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(l.qu),t.Y36(s.V))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-text-area-count"]],features:[t.qOj],decls:8,vars:7,consts:[[1,"row"],[1,"col-8"],["class","form-floating mb-3",4,"ngIf"],["appearance","fill",4,"ngIf"],[1,"col-4"],[3,"control"],[1,"form-floating","mb-3"],["id","textAreaCount",1,"form-control","text-area-count",3,"formControl"],["for","textAreaCount"],["id","textAreaCountHelp",1,"form-text","text-end"],["appearance","fill"],["matInput","",1,"text-area-count",3,"formControl","placeholder"],["align","end"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.YNc(2,C,6,3,"div",2),t.ALo(3,"async"),t.YNc(4,T,6,4,"mat-form-field",3),t.ALo(5,"async"),t.qZA(),t.TgZ(6,"div",4),t._UZ(7,"app-control-data-table",5),t.qZA(),t.qZA()),2&e&&(t.xp6(2),t.Q6J("ngIf",t.lcZ(3,3,n.isBootstrap)),t.xp6(2),t.Q6J("ngIf",t.lcZ(5,5,n.isMaterial)),t.xp6(3),t.Q6J("control",n.textAreaCountControl))},directives:[c.O5,m.d,l.Fj,l.JJ,l.oH,x.KE,x.hX,i.Nt,x.bx],pipes:[c.Ov],styles:[".text-area-count[_ngcontent-%COMP%]{height:10rem;resize:none}mat-hint[align=end][_ngcontent-%COMP%]{justify-content:flex-end}"],changeDetection:0}),o})();var Z=r(4206);function h(o,a){if(1&o&&(t.TgZ(0,"div",10),t.TgZ(1,"div"),t._uU(2),t.qZA(),t.qZA()),2&o){const e=t.oxw(2);t.xp6(2),t.hij(" Se ha superado el m\xe1ximo de caracteres (",null==e.textAreaMaxControl.errors||null==e.textAreaMaxControl.errors.maxlength?null:e.textAreaMaxControl.errors.maxlength.requiredLength,") ")}}const v=function(o,a){return{"is-invalid":o,"is-valid":a}};function M(o,a){if(1&o&&(t.TgZ(0,"div",6),t._UZ(1,"textarea",7),t.TgZ(2,"label",8),t._uU(3),t.qZA(),t.YNc(4,h,3,1,"div",9),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngClass",t.WLB(4,v,e.textAreaMaxControl.errors,!e.textAreaMaxControl.errors))("formControl",e.textAreaMaxControl),t.xp6(2),t.Oqu(e.labelTextArea),t.xp6(1),t.Q6J("ngIf",null==e.textAreaMaxControl.errors?null:e.textAreaMaxControl.errors.maxlength)}}function b(o,a){if(1&o&&(t.TgZ(0,"mat-error",14),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.hij(" Se ha superado el m\xe1ximo de caracteres (",null==e.textAreaMaxControl.errors||null==e.textAreaMaxControl.errors.maxlength?null:e.textAreaMaxControl.errors.maxlength.requiredLength,") ")}}function q(o,a){if(1&o&&(t.TgZ(0,"mat-form-field",11),t.TgZ(1,"mat-label"),t._uU(2),t.qZA(),t._UZ(3,"textarea",12),t.YNc(4,b,2,1,"mat-error",13),t.qZA()),2&o){const e=t.oxw();t.xp6(2),t.Oqu(e.labelTextArea),t.xp6(1),t.Q6J("formControl",e.textAreaMaxControl)("errorStateMatcher",e.textAreaMaxControlMatcher)("placeholder",e.labelTextArea),t.xp6(1),t.Q6J("ngIf",null==e.textAreaMaxControl.errors?null:e.textAreaMaxControl.errors.maxlength)}}let y=(()=>{class o extends p.z{constructor(e,n){super(n),this.fb=e,this.labelTextArea="Introduzca un texto"}ngOnInit(){this.buildTextAreaMaxControl()}buildTextAreaMaxControl(){this.textAreaMaxControl=this.fb.control({value:"",disabled:!1},[l.kI.required,l.kI.maxLength(25)]),this.textAreaMaxControlMatcher=new Z.MI}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(l.qu),t.Y36(s.V))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-text-area-max"]],features:[t.qOj],decls:8,vars:7,consts:[[1,"row"],[1,"col-8"],["class","form-floating mb-3",4,"ngIf"],["appearance","fill",4,"ngIf"],[1,"col-4"],[3,"control"],[1,"form-floating","mb-3"],["id","textAreaMax",1,"form-control","text-area-max",3,"ngClass","formControl"],["for","textAreaMax"],["class","invalid-feedback text-end",4,"ngIf"],[1,"invalid-feedback","text-end"],["appearance","fill"],["matInput","",1,"text-area-max",3,"formControl","errorStateMatcher","placeholder"],["align","end",4,"ngIf"],["align","end"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.YNc(2,M,5,7,"div",2),t.ALo(3,"async"),t.YNc(4,q,5,5,"mat-form-field",3),t.ALo(5,"async"),t.qZA(),t.TgZ(6,"div",4),t._UZ(7,"app-control-data-table",5),t.qZA(),t.qZA()),2&e&&(t.xp6(2),t.Q6J("ngIf",t.lcZ(3,3,n.isBootstrap)),t.xp6(2),t.Q6J("ngIf",t.lcZ(5,5,n.isMaterial)),t.xp6(3),t.Q6J("control",n.textAreaMaxControl))},directives:[c.O5,m.d,l.Fj,c.mk,l.JJ,l.oH,x.KE,x.hX,i.Nt,x.TO],pipes:[c.Ov],styles:[".text-area-max[_ngcontent-%COMP%]{height:10rem;resize:none}mat-error[align=end][_ngcontent-%COMP%]{justify-content:flex-end}"],changeDetection:0}),o})();const I=[{path:"",component:(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-text-area"]],decls:18,vars:0,consts:[[1,"row"],[1,"col-12"],["id","textAreaAccordion",1,"accordion","accordion-flush"],[1,"accordion-item"],["id","textAreaCount",1,"accordion-header"],["type","button","data-bs-toggle","collapse","data-bs-target","#textAreaCountCollapse","aria-expanded","true","aria-controls","textAreaCountCollapse",1,"accordion-button","collapsed"],["id","textAreaCountCollapse","aria-labelledby","textAreaCount",1,"accordion-collpase","collapse"],[1,"accordion-body"],["id","textAreaMax",1,"accordion-header"],["type","button","data-bs-toggle","collapse","data-bs-target","#textAreaMaxCollapse","aria-expanded","true","aria-controls","textAreaMaxCollapse",1,"accordion-button","collapsed"],["id","textAreaMaxCollapse","aria-labelledby","textAreaMax",1,"accordion-collpase","collapse"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t._UZ(2,"app-style-selector"),t.qZA(),t.qZA(),t.TgZ(3,"div",2),t.TgZ(4,"div",3),t.TgZ(5,"div",4),t.TgZ(6,"button",5),t._uU(7," Text-area con contador de caracteres "),t.qZA(),t.qZA(),t.TgZ(8,"div",6),t.TgZ(9,"div",7),t._UZ(10,"app-text-area-count"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(11,"div",3),t.TgZ(12,"div",8),t.TgZ(13,"button",9),t._uU(14," Text-area con valor requerido y m\xe1ximo de caracteres "),t.qZA(),t.qZA(),t.TgZ(15,"div",10),t.TgZ(16,"div",7),t._UZ(17,"app-text-area-max"),t.qZA(),t.qZA(),t.qZA(),t.qZA())},directives:[f.S,g,y],encapsulation:2,changeDetection:0}),o})()}];let O=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[d.Bz.forChild(I)],d.Bz]}),o})(),U=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[s.V],imports:[[A.m,O,i.c]]}),o})()}}]);