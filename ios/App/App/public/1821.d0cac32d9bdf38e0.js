"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1821],{1821:(P,u,a)=>{a.r(u),a.d(u,{LoginPageModule:()=>M});var d=a(4755),r=a(5030),c=a(5562),g=a(4294);const m={email:"",username:"",createdAt:""};var n=a(2223),p=a(8119);function _(t,s){if(1&t&&(n.TgZ(0,"div"),n._uU(1),n.qZA()),2&t){const o=n.oxw();n.xp6(1),n.hij(" ",o.error," ")}}function f(t,s){if(1&t){const o=n.EpF();n.TgZ(0,"form",3,4)(2,"div",5)(3,"ion-input",6,7),n.NdJ("ngModelChange",function(e){n.CHM(o);const l=n.oxw();return n.KtG(l.login.email=e)}),n.qZA(),n.TgZ(5,"ion-text",8)(6,"p",9),n._uU(7," Por favor, ingrese su Correo Electr\xf3nico. "),n.qZA()(),n._UZ(8,"br"),n.TgZ(9,"ion-input",10,11),n.NdJ("ngModelChange",function(e){n.CHM(o);const l=n.oxw();return n.KtG(l.pass=e)}),n.qZA(),n.TgZ(11,"ion-text",8)(12,"p",9),n._uU(13," La contrase\xf1a ingresada es muy corta. "),n.qZA()(),n.TgZ(14,"ion-text",8)(15,"p",9),n._uU(16," Por favor, ingrese una contrase\xf1a. "),n.qZA()(),n.TgZ(17,"ion-row")(18,"ion-button",12),n.NdJ("click",function(){n.CHM(o);const e=n.MAs(1),l=n.oxw();return n.KtG(l.onLogin(e))}),n._uU(19,"Ingresar"),n.qZA(),n.TgZ(20,"ion-button",13),n.NdJ("click",function(){n.CHM(o);const e=n.oxw();return n.KtG(e.admin())}),n._uU(21,"Admin "),n.qZA(),n.TgZ(22,"ion-button",14),n.NdJ("click",function(){n.CHM(o);const e=n.oxw();return n.KtG(e.invitado())}),n._uU(23,"Invitado "),n.qZA(),n.TgZ(24,"ion-button",14),n.NdJ("click",function(){n.CHM(o);const e=n.oxw();return n.KtG(e.usuario())}),n._uU(25,"Usuario "),n.qZA(),n.TgZ(26,"ion-button",14),n.NdJ("click",function(){n.CHM(o);const e=n.oxw();return n.KtG(e.anonimo())}),n._uU(27,"Anonimo "),n.qZA(),n.TgZ(28,"ion-button",14),n.NdJ("click",function(){n.CHM(o);const e=n.oxw();return n.KtG(e.tester())}),n._uU(29,"Tester "),n.qZA()()()()}if(2&t){const o=n.MAs(4),i=n.MAs(10),e=n.oxw();n.xp6(3),n.Q6J("ngModel",e.login.email),n.xp6(3),n.Q6J("hidden",o.valid||!1===e.submitted),n.xp6(3),n.Q6J("ngModel",e.pass),n.xp6(3),n.Q6J("hidden",!i.errors||!1===e.submitted),n.xp6(3),n.Q6J("hidden",!i.errors||!1===e.submitted)}}const h=[{path:"",component:(()=>{class t{constructor(o,i){this.auth=o,this.router=i,this.login=m,this.submitted=!1,this.spinner=!1,this.error=""}onLogin(o){this.submitted=!0,o.valid&&this.auth.signIn(o.form.value.email,o.form.value.password).then(()=>{this.router.navigateByUrl("/home")}).catch(i=>this.error=i).finally(()=>{this.spinner=!1})}admin(){this.login.email="admin@admin.com",this.pass="111111"}invitado(){this.login.email="invitado@invitado.com",this.pass="222222"}usuario(){this.login.email="usuario@usuario.com",this.pass="333333"}anonimo(){this.login.email="anonimo@anonimo.com",this.pass="444444"}tester(){this.login.email="tester@tester.com",this.pass="555555"}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(p.e),n.Y36(g.F0))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-login"]],decls:4,vars:2,consts:[["id","idFound"],[4,"ngIf"],["novalidate","",4,"ngIf"],["novalidate",""],["loginForm","ngForm"],["id","idForm"],["name","email","type","text","spellcheck","false","autocapitalize","off","required","",3,"ngModel","ngModelChange"],["mail","ngModel"],["color","danger"],[1,"ion-padding-start",3,"hidden"],["name","password","type","password","minlength","6","required","",3,"ngModel","ngModelChange"],["password","ngModel"],["type","submit","expand","block",3,"click"],[3,"click"],["expand","block",3,"click"]],template:function(o,i){1&o&&(n.TgZ(0,"ion-content")(1,"div",0),n.YNc(2,_,2,1,"div",1),n.YNc(3,f,30,5,"form",2),n.qZA()()),2&o&&(n.xp6(2),n.Q6J("ngIf",i.error),n.xp6(1),n.Q6J("ngIf",!i.spinner))},dependencies:[d.O5,r._Y,r.JJ,r.JL,r.Q7,r.wO,r.On,r.F,c.YG,c.W2,c.pK,c.Nd,c.yW,c.j9],styles:["#errorLogin[_ngcontent-%COMP%]{color:red}#idForm[_ngcontent-%COMP%]{align-items:center;background-image:url(fondoEstrellas.964175999aa5ddfe.jpg);padding:8px 90px}#idFound[_ngcontent-%COMP%]{background-image:url(fondoEstrellas.964175999aa5ddfe.jpg);padding:250px 40px}#idColRow[_ngcontent-%COMP%]{background-color:#eded6e}ion-input[_ngcontent-%COMP%]{background-color:#add8e6;color:#393838}ion-button[_ngcontent-%COMP%]{align-items:center;width:233px;height:50px;padding:8px 5px;color:#000;font-size:medium;font-style:oblique}"]}),t})()}];let x=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[g.Bz.forChild(h),g.Bz]}),t})(),M=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[d.ez,r.u5,c.Pc,x]}),t})()}}]);