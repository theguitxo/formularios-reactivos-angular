"use strict";(self.webpackChunkformularios=self.webpackChunkformularios||[]).push([[357],{357:(L,c,l)=>{l.r(c),l.d(c,{FormModule:()=>Q});var g=l(4466),u=l(701),a=l(665),f=l(4206);const p=JSON.parse('[{"code":"02","state":"Albacete"},{"code":"03","state":"Alicante/Alacant"},{"code":"04","state":"Almer\xeda"},{"code":"01","state":"Araba/\xc1lava"},{"code":"33","state":"Asturias"},{"code":"05","state":"\xc1vila"},{"code":"06","state":"Badajoz"},{"code":"07","state":"Balears, Illes"},{"code":"08","state":"Barcelona"},{"code":"48","state":"Bizkaia"},{"code":"09","state":"Burgos"},{"code":"10","state":"C\xe1ceres"},{"code":"11","state":"C\xe1diz"},{"code":"39","state":"Cantabria"},{"code":"12","state":"Castell\xf3n/Castell\xf3"},{"code":"13","state":"Ciudad Real"},{"code":"14","state":"C\xf3rdoba"},{"code":"15","state":"Coru\xf1a, A"},{"code":"16","state":"Cuenca"},{"code":"20","state":"Gipuzkoa"},{"code":"17","state":"Girona"},{"code":"18","state":"Granada"},{"code":"19","state":"Guadalajara"},{"code":"21","state":"Huelva"},{"code":"22","state":"Huesca"},{"code":"23","state":"Ja\xe9n"},{"code":"24","state":"Le\xf3n"},{"code":"25","state":"Lleida"},{"code":"27","state":"Lugo"},{"code":"28","state":"Madrid"},{"code":"29","state":"M\xe1laga"},{"code":"30","state":"Murcia"},{"code":"31","state":"Navarra"},{"code":"32","state":"Ourense"},{"code":"34","state":"Palencia"},{"code":"35","state":"Palmas, Las"},{"code":"36","state":"Pontevedra"},{"code":"26","state":"Rioja, La"},{"code":"37","state":"Salamanca"},{"code":"38","state":"Santa Cruz de Tenerife"},{"code":"40","state":"Segovia"},{"code":"41","state":"Sevilla"},{"code":"42","state":"Soria"},{"code":"43","state":"Tarragona"},{"code":"44","state":"Teruel"},{"code":"45","state":"Toledo"},{"code":"46","state":"Valencia/Val\xe8ncia"},{"code":"47","state":"Valladolid"},{"code":"49","state":"Zamora"},{"code":"50","state":"Zaragoza"},{"code":"51","state":"Ceuta"},{"code":"52","state":"Melilla"}]');var C=l.t(p,2),e=l(3018),m=l(8583);function Z(t,r){if(1&t){const n=e.EpF();e.TgZ(0,"li",3),e.NdJ("click",function(){const d=e.CHM(n).$implicit;return e.oxw().handleClickLanguage(d.lang)}),e._UZ(1,"img",4),e.qZA()}if(2&t){const n=r.$implicit;e.ekj("selected",n.selected),e.Q6J("title",n.name),e.xp6(1),e.Q6J("src","assets/flags/"+n.lang+".png",e.LSH)}}let v=(()=>{class t{constructor(){this.languageChange=new e.vpe}ngOnInit(){this.langs=[{lang:"es",name:"Espa\xf1ol",selected:!1},{lang:"fr",name:"Frances",selected:!1},{lang:"en",name:"Ingles",selected:!1}]}registerOnChange(n){this.onChanged=n}registerOnTouched(n){this.onTouched=n}writeValue(n){this.selectLanguage(n)}handleClickLanguage(n){this.selectLanguage(n),this.onTouched(),this.onChanged(n)}selectLanguage(n){this.langs.map(s=>s.selected=!1);const o=this.langs.find(s=>s.lang===n);o&&(o.selected=!0,this.languageChange.emit(o))}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-lang-selector"]],outputs:{languageChange:"languageChange"},features:[e._Bn([{provide:a.JU,useExisting:(0,e.Gpc)(()=>t),multi:!0}])],decls:5,vars:1,consts:[[1,"form-label"],[1,"flags-list"],[3,"selected","title","click",4,"ngFor","ngForOf"],[3,"title","click"],[3,"src"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0),e._uU(1,"Idioma:"),e.qZA(),e.TgZ(2,"div",1),e.TgZ(3,"ul"),e.YNc(4,Z,2,4,"li",2),e.qZA(),e.qZA()),2&n&&(e.xp6(4),e.Q6J("ngForOf",o.langs))},directives:[m.sg],styles:[".flags-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:inline-flex;margin:0;padding:0;justify-content:space-around;width:100%}.flags-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none;cursor:pointer;padding:.5rem;border-radius:.25rem;border:solid 2px transparent}.flags-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{border-color:#0f5132}.flags-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]{border-color:#198754}"]}),t})();var _=l(3908),T=l(1679);const h=["confirmationSwal"];function A(t,r){1&t&&(e.TgZ(0,"div"),e._uU(1,"El valor es requerido"),e.qZA())}function q(t,r){1&t&&(e.TgZ(0,"div"),e._uU(1,"El valor es requerido"),e.qZA())}function J(t,r){1&t&&(e.TgZ(0,"div"),e._uU(1,"Se requiere una direcci\xf3n de e-mail v\xe1lida"),e.qZA())}function b(t,r){if(1&t&&(e.TgZ(0,"option",22),e._uU(1),e.qZA()),2&t){const n=r.$implicit;e.Q6J("value",n.code),e.xp6(1),e.hij(" ",n.state," ")}}function F(t,r){1&t&&(e.TgZ(0,"div"),e._uU(1,"El idioma es requerido"),e.qZA())}function U(t,r){1&t&&(e.TgZ(0,"div"),e._uU(1,"Se han de aceptar los t\xe9rminos y condiciones"),e.qZA())}const i=function(t,r){return{"is-valid":t,"is-invalid":r}},N=[{path:"",component:(()=>{class t{constructor(n){this.fb=n}get formControls(){return this.form.controls}ngOnInit(){this.stateOptions=f.cQ.getJSONDefault(C),this.form=this.fb.group({name:new a.NI("",a.kI.required),email:new a.NI("",[a.kI.required,a.kI.email]),state:new a.NI("",[a.kI.required]),lang:new a.NI("",a.kI.required),termsConditions:new a.NI(!1,a.kI.requiredTrue)}),this.popUpOptions={confirmButtonColor:"#0d6efd",confirmButtonText:"Aceptar"}}handleReset(){this.form.reset()}handleSend(){var n;const o=null===(n=this.stateOptions.find(s=>s.code===this.formControls.state.value))||void 0===n?void 0:n.state;this.confirmationSwal.title=`${this.formControls.name.value} (${this.formControls.email.value})`,this.confirmationSwal.text=`${o} - ${this.selectedLanguage.name}`,this.confirmationSwal.fire()}changeLanguage(n){this.selectedLanguage=n}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(a.qu))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-form"]],viewQuery:function(n,o){if(1&n&&e.Gf(h,5),2&n){let s;e.iGM(s=e.CRH())&&(o.confirmationSwal=s.first)}},decls:59,vars:43,consts:[[1,"row","px-0","mb-4"],[1,"col-6"],["novalidate","",3,"formGroup"],[1,"mb-3"],["for","name",1,"form-label"],["type","text","id","name",1,"form-control",3,"ngClass","formControlName"],[1,"invalid-feedback"],[4,"ngIf"],["for","email",1,"form-label"],["type","email","id","email",1,"form-control",3,"ngClass","formControlName"],["for","state",1,"form-label"],["id","state",1,"form-select",3,"ngClass","formControlName"],["value",""],[3,"value",4,"ngFor","ngForOf"],[3,"formControlName","ngClass","languageChange"],["type","checkbox","id","termsConditions",1,"form-check-input","me-2",3,"ngClass","formControlName"],["for","termsConditions",1,"form-check-label"],[1,"mb-3","text-end"],["type","button",1,"btn","btn-primary","ms-2",3,"disabled","click"],[3,"control"],["icon","info",3,"title","text","swalOptions"],["confirmationSwal",""],[3,"value"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"form",2),e.TgZ(3,"div",3),e.TgZ(4,"label",4),e._uU(5,"Nombre:"),e.qZA(),e._UZ(6,"input",5),e.TgZ(7,"div",6),e.YNc(8,A,2,0,"div",7),e.qZA(),e.qZA(),e.TgZ(9,"div",3),e.TgZ(10,"label",8),e._uU(11,"E-mail:"),e.qZA(),e._UZ(12,"input",9),e.TgZ(13,"div",6),e.YNc(14,q,2,0,"div",7),e.YNc(15,J,2,0,"div",7),e.qZA(),e.qZA(),e.TgZ(16,"div",3),e.TgZ(17,"label",10),e._uU(18,"Provincia:"),e.qZA(),e.TgZ(19,"select",11),e.TgZ(20,"option",12),e._uU(21,"Elija un valor"),e.qZA(),e.YNc(22,b,2,2,"option",13),e.qZA(),e.qZA(),e.TgZ(23,"div",3),e.TgZ(24,"app-lang-selector",14),e.NdJ("languageChange",function(d){return o.changeLanguage(d)}),e.qZA(),e.TgZ(25,"div",6),e.YNc(26,F,2,0,"div",7),e.qZA(),e.qZA(),e.TgZ(27,"div",3),e._UZ(28,"input",15),e.TgZ(29,"label",16),e._uU(30,"Aceptar t\xe9rminos y condiciones"),e.qZA(),e.TgZ(31,"div",6),e.YNc(32,U,2,0,"div",7),e.qZA(),e.qZA(),e.TgZ(33,"div",17),e.TgZ(34,"button",18),e.NdJ("click",function(){return o.handleSend()}),e._uU(35," Enviar "),e.qZA(),e.TgZ(36,"button",18),e.NdJ("click",function(){return o.handleReset()}),e._uU(37," Reset "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(38,"div",1),e.TgZ(39,"div"),e._uU(40,"Formulario:"),e.qZA(),e._UZ(41,"app-control-data-table",19),e.TgZ(42,"div"),e._uU(43,"Nombre:"),e.qZA(),e._UZ(44,"app-control-data-table",19),e.TgZ(45,"div"),e._uU(46,"Email:"),e.qZA(),e._UZ(47,"app-control-data-table",19),e.TgZ(48,"div"),e._uU(49,"Provincia:"),e.qZA(),e._UZ(50,"app-control-data-table",19),e.TgZ(51,"div"),e._uU(52,"Idioma:"),e.qZA(),e._UZ(53,"app-control-data-table",19),e.TgZ(54,"div"),e._uU(55,"T\xe9rminos y condiciones"),e.qZA(),e._UZ(56,"app-control-data-table",19),e.qZA(),e.qZA(),e._UZ(57,"swal",20,21)),2&n&&(e.xp6(2),e.Q6J("formGroup",o.form),e.xp6(4),e.Q6J("ngClass",e.WLB(28,i,!o.formControls.name.errors&&!o.formControls.name.pristine,o.formControls.name.errors&&!o.formControls.name.pristine))("formControlName","name"),e.xp6(2),e.Q6J("ngIf",null==o.formControls.name.errors?null:o.formControls.name.errors.required),e.xp6(4),e.Q6J("ngClass",e.WLB(31,i,!o.formControls.email.errors&&!o.formControls.email.pristine,o.formControls.email.errors&&!o.formControls.email.pristine))("formControlName","email"),e.xp6(2),e.Q6J("ngIf",null==o.formControls.email.errors?null:o.formControls.email.errors.required),e.xp6(1),e.Q6J("ngIf",null==o.formControls.email.errors?null:o.formControls.email.errors.email),e.xp6(4),e.Q6J("ngClass",e.WLB(34,i,!o.formControls.state.errors&&!o.formControls.state.pristine,o.formControls.state.errors&&!o.formControls.state.pristine))("formControlName","state"),e.xp6(3),e.Q6J("ngForOf",o.stateOptions),e.xp6(2),e.Q6J("formControlName","lang")("ngClass",e.WLB(37,i,!o.formControls.lang.errors,o.formControls.lang.errors)),e.xp6(2),e.Q6J("ngIf",null==o.formControls.lang.errors?null:o.formControls.lang.errors.required),e.xp6(2),e.Q6J("ngClass",e.WLB(40,i,!o.formControls.termsConditions.errors&&!o.formControls.termsConditions.pristine,o.formControls.termsConditions.errors&&!o.formControls.termsConditions.pristine))("formControlName","termsConditions"),e.xp6(4),e.Q6J("ngIf",null==o.formControls.termsConditions.errors?null:o.formControls.termsConditions.errors.required),e.xp6(2),e.Q6J("disabled",!o.form.valid),e.xp6(2),e.Q6J("disabled",o.form.pristine),e.xp6(5),e.Q6J("control",o.form),e.xp6(3),e.Q6J("control",o.formControls.name),e.xp6(3),e.Q6J("control",o.formControls.email),e.xp6(3),e.Q6J("control",o.formControls.state),e.xp6(3),e.Q6J("control",o.formControls.lang),e.xp6(3),e.Q6J("control",o.formControls.termsConditions),e.xp6(1),e.Q6J("title","")("text","")("swalOptions",o.popUpOptions))},directives:[a._Y,a.JL,a.sg,a.Fj,m.mk,a.JJ,a.u,m.O5,a.EJ,a.YN,a.Kr,m.sg,v,a.Wl,_.d,T.q1],encapsulation:2}),t})()}];let O=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[u.Bz.forChild(N)],u.Bz]}),t})(),Q=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[g.m,O]]}),t})()}}]);