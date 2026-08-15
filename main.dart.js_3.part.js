((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,G,E,F,C={afC:function afC(){},
b2s(){return new C.p8(null)},
p8:function p8(d){this.a=d},
J5:function J5(d,e,f){var _=this
_.d=d
_.r=_.f=_.e=!1
_.w=e
_.x=f
_.c=_.a=_.y=null},
aA7:function aA7(d){this.a=d},
aA2:function aA2(d){this.a=d},
aA3:function aA3(d,e){this.a=d
this.b=e},
aA4:function aA4(d){this.a=d},
aA5:function aA5(d,e){this.a=d
this.b=e},
aA6:function aA6(d){this.a=d},
aA8:function aA8(){},
aA_:function aA_(d){this.a=d},
aA0:function aA0(d,e){this.a=d
this.b=e},
aA1:function aA1(d){this.a=d},
azZ:function azZ(){},
aAf:function aAf(d,e,f){this.a=d
this.b=e
this.c=f},
aAi:function aAi(d,e){this.a=d
this.b=e},
aAg:function aAg(d){this.a=d},
aAh:function aAh(d){this.a=d},
aAj:function aAj(d){this.a=d},
aAk:function aAk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aAa:function aAa(){},
aAb:function aAb(d,e){this.a=d
this.b=e},
aAd:function aAd(){},
aAc:function aAc(d,e,f){this.a=d
this.b=e
this.c=f},
aAe:function aAe(d,e,f){this.a=d
this.b=e
this.c=f},
aA9:function aA9(d){this.a=d},
R5(){var w=0,v=A.t(x.a),u,t=2,s=[],r=[],q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4
var $async$R5=A.u(function(c5,c6){if(c5===1){s.push(c6)
w=t}for(;;)switch(w){case 0:c3=$.Dw
if(c3!=null){u=c3
w=1
break}w=$.afO?3:4
break
case 3:c3=x.z
case 5:if(!$.afO){w=6
break}w=7
return A.l(A.mK(B.tp,null,c3),$async$R5)
case 7:w=5
break
case 6:c3=$.Dw
u=c3==null?A.b([],x.s):c3
w=1
break
case 4:$.afO=!0
t=9
w=12
return A.l($.qA().MZ("assets/mugefci_2026.csv"),$async$R5)
case 12:q=c6
A.bz().$1("LocalDictService: loaded CSV, length="+J.b5(q))
c3=x.z
p=D.Qw.wt(q,c3)
b6=J.b5(p)
b7=J.b5(p)!==0?J.iS(p).length:0
A.bz().$1("LocalDictService: parsed rows="+b6+", firstRowCols="+b7)
if(J.b5(p)!==0&&J.iS(p).length===1&&J.vi(q,";")){p=D.Qx.wt(q,c3)
A.bz().$1("LocalDictService: fallback semicolon parsed rows="+J.b5(p))}if(J.b5(p)===0){c3=A.b([],x.s)
$.Dw=c3
u=c3
r=[1]
w=10
break}o=1
n=J.iS(p)
if(J.b5(n)!==0){c3=n
b6=A.a_(c3).i("a8<1,m>")
b8=A.a3(new A.a8(c3,new C.afP(),b6),b6.i("aD.E"))
m=b8
l=A.b(["nom_commercial","d\xe9nomination","denomination","d\xe9nomination_commerciale","denomination_commerciale","nom","name"],x.s)
for(c3=l,b6=c3.length,b9=0;b9<c3.length;c3.length===b6||(0,A.E)(c3),++b9){k=c3[b9]
j=J.aO3(m,k)
if(!J.d(j,-1)){o=j
break}}A.bz().$1("LocalDictService: headers="+A.j(m)+", denomIndex="+A.j(o))}c3=x.N
i=A.aW(c3)
for(h=0;h<J.b5(p);++h){g=J.U(p,h)
if(J.b5(g)<=o)continue
f=B.c.by(J.b0(J.U(g,o)))
if(J.b5(f)===0)continue
if(J.d(h,0)){e=f.toLowerCase()
if(J.d(e,"nom_commercial")||J.d(e,"d\xe9nomination")||J.d(e,"denomination")||J.d(e,"d\xe9nomination_commerciale")||J.d(e,"denomination_commerciale")||J.d(e,"nom")||J.d(e,"name")){A.bz().$1('LocalDictService: skipping header row value="'+A.j(f)+'"')
continue}}J.cY(i,f)}A.bz().$1("LocalDictService: extracted set size="+i.a)
b6=i
c0=A.a3(b6,A.n(b6).c)
d=c0
if(J.b5(d)===0){a0=A.aW(c3)
a1=D.rk.br(q)
a2=!1
a3=A.b2('^\\s*"[^"]*",\\s*"([^"]*)"',!0,!1,!1)
for(b6=a1,b7=b6.length,b9=0;b9<b6.length;b6.length===b7||(0,A.E)(b6),++b9){a4=b6[b9]
if(!a2){a2=!0
continue}a5=a3.jy(a4)
if(a5!=null){c1=a5.b[1]
c1.toString
a6=B.c.by(c1)
if(J.b5(a6)!==0)J.cY(a0,a6)}}A.bz().$1("LocalDictService: fallback regex extracted="+a0.a)
if(a0.a!==0){b6=a0
c0=A.a3(b6,A.n(b6).c)
d=c0}}if(J.b5(d)===0){a7=A.aW(c3)
a8=D.rk.br(q)
for(a9=0;a9<J.b5(a8);++a9){b0=B.c.by(J.U(a8,a9))
if(J.b5(b0)===0)continue
if(J.d(a9,0)){c3=b0.toLowerCase()
c3=A.Af(c3,"nom_commercial",0)}else c3=!1
if(c3)continue
b1=J.aO3(b0,",")
b2=J.aZt(b0,",",b1+1)
if(J.d(b1,-1)||J.d(b2,-1))continue
b3=B.c.by(J.aZC(b0,b1+1,b2))
c3=A.b2('^"|"$',!0,!1,!1)
b4=B.c.by(A.br(b3,c3,""))
if(J.b5(b4)!==0)J.cY(a7,b4)}A.bz().$1("LocalDictService: fallback comma split extracted="+a7.a)
if(a7.a!==0){c3=a7
c0=A.a3(c3,A.n(c3).c)
d=c0}}J.vj(d,new C.afQ())
c3=d
$.Dw=c3
$.aKF=null
c3.toString
u=c3
r=[1]
w=10
break
r.push(11)
w=10
break
case 9:t=8
c4=s.pop()
b5=A.Z(c4)
$.aKF=J.b0(b5)
c3=A.b([],x.s)
$.Dw=c3
u=c3
r=[1]
w=10
break
r.push(11)
w=10
break
case 8:r=[2]
case 10:t=2
$.afO=!1
w=r.pop()
break
case 11:case 1:return A.q(u,v)
case 2:return A.p(s.at(-1),v)}})
return A.r($async$R5,v)},
R6(){var w=0,v=A.t(x.y),u,t=2,s=[],r,q,p,o,n,m
var $async$R6=A.u(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.l($.qA().lm(0,"assets/mugefci_2026.csv"),$async$R6)
case 7:u=!0
w=1
break
t=2
w=6
break
case 4:t=3
n=s.pop()
t=9
w=12
return A.l($.qA().MZ("AssetManifest.json"),$async$R6)
case 12:r=e
q=B.am.l6(0,r,null)
o=J.h8(q,"assets/mugefci_2026.csv")||J.h8(q,"assets/mugefci_2026.csv")
u=o
w=1
break
t=3
w=11
break
case 9:t=8
m=s.pop()
u=!1
w=1
break
w=11
break
case 8:w=3
break
case 11:w=6
break
case 3:w=2
break
case 6:case 1:return A.q(u,v)
case 2:return A.p(s.at(-1),v)}})
return A.r($async$R6,v)},
b2e(d){var w,v,u
if(d.length===0)return A.b([],x.s)
w=C.aQv(d)
v=$.Dw
if(v==null)v=A.b([],x.s)
u=A.a_(v).i("aK<1>")
u=A.a3(new A.aK(v,new C.afR(w),u),u.i("v.E"))
return u},
aQv(d){var w=A.b2("[\xe0\xe1\xe2\xe4]",!0,!1,!1),v=A.br(d.toLowerCase(),w,"a")
w=A.b2("[\xe7]",!0,!1,!1)
v=A.br(v,w,"c")
w=A.b2("[\xe9\xe8\xea\xeb]",!0,!1,!1)
v=A.br(v,w,"e")
w=A.b2("[\xee\xef\xec\xed]",!0,!1,!1)
v=A.br(v,w,"i")
w=A.b2("[\xf4\xf6\xf2\xf3]",!0,!1,!1)
v=A.br(v,w,"o")
w=A.b2("[\xf9\xfb\xfc\xfa]",!0,!1,!1)
v=A.br(v,w,"u")
v=A.br(v,"\xff","y")
return A.br(v,"\u0153","oe")},
afP:function afP(){},
afQ:function afQ(){},
afR:function afR(d){this.a=d},
MT(d,e){var w=0,v=A.t(x.H),u
var $async$MT=A.u(function(f,g){if(f===1)return A.p(g,v)
for(;;)switch(w){case 0:u=$.aIY()
w=2
return A.l(u.tG("search_medication",A.a2(["medication_name",e,"commune",d.length!==0?d:"Inconnue"],x.N,x.K)),$async$MT)
case 2:return A.q(null,v)}})
return A.r($async$MT,v)},
RX(d){var w=0,v=A.t(x.H),u,t,s,r,q,p
var $async$RX=A.u(function(e,f){if(e===1)return A.p(f,v)
for(;;)switch(w){case 0:w=3
return A.l(A.ll(),$async$RX)
case 3:t=x.z
s=x.C.a($.o9().lX("ordonnance",!1,t))
r=$.Al()
q=A.mW(r.a,x.N,x.S)
p=d.toUpperCase()
if(q.ag(0,p)){w=1
break}q.m(0,p,1)
r.sq(0,q)
w=4
return A.l(s.tW(A.a2(["items",q],t,s.$ti.c)),$async$RX)
case 4:case 1:return A.q(u,v)}})
return A.r($async$RX,v)},
S1(d){var w=0,v=A.t(x.H),u,t,s,r,q,p,o,n
var $async$S1=A.u(function(e,f){if(e===1)return A.p(f,v)
for(;;)switch(w){case 0:w=3
return A.l(A.ll(),$async$S1)
case 3:t=x.z
s=x.C.a($.o9().lX("ordonnance",!1,t))
r=$.Al()
q=A.mW(r.a,x.N,x.S)
p=d.toUpperCase()
if(!q.ag(0,p)){w=1
break}o=q.h(0,p)
o.toString
n=o-1
if(n<=0)q.F(0,p)
else q.m(0,p,n)
r.sq(0,q)
w=4
return A.l(s.tW(A.a2(["items",q],t,s.$ti.c)),$async$S1)
case 4:case 1:return A.q(u,v)}})
return A.r($async$S1,v)}},D
J=c[1]
A=c[0]
B=c[2]
G=c[4]
E=c[5]
F=c[7]
C=a.updateHolder(c[3],C)
D=c[6]
C.afC.prototype={
br(d){var w,v,u,t,s=A.b([],x.s),r=d.length
for(w=0,v=0,u=0;u<r;++u,v=t){t=d.charCodeAt(u)
if(t!==13){if(t!==10)continue
if(v===13){w=u+1
continue}}s.push(B.c.T(d,w,u))
w=u+1}if(w<r)s.push(B.c.T(d,w,r))
return s}}
C.p8.prototype={
al(){var w=x.s
return new C.J5(new A.pR(B.iK,$.aL()),A.b([],w),A.b([],w))}}
C.J5.prototype={
aw(){var w=this
w.aM()
A.bz().$1("[MedPriceSearchScreen] initState START")
w.vc()
w.d.a_(0,w.gal9())
A.ll()
A.bz().$1("[MedPriceSearchScreen] initState END")},
ala(){var w=this.y
if(w!=null)w.aG(0)
this.y=A.cr(B.tm,new C.aA7(this))},
vW(d){return this.anZ(d)},
anZ(d){var w=0,v=A.t(x.a),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$vW=A.u(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=$.ew().b
g===$&&A.a()
q=g
p=null
t=4
w=7
return A.l(q.iT("dictionnaire_medicaments").qq(0).a2q("nom_commercial.ilike."+d+"%,dci.ilike."+d+"%").MX(20),$async$vW)
case 7:p=a1
t=2
w=6
break
case 4:t=3
f=s.pop()
t=9
w=12
return A.l(q.iT("medicaments").qq(0).a2q("denomination.ilike."+d+"%,nom_commercial.ilike."+d+"%").MX(20),$async$vW)
case 12:p=a1
t=3
w=11
break
case 9:t=8
e=s.pop()
g=A.b([],x.s)
u=g
w=1
break
w=11
break
case 8:w=3
break
case 11:w=6
break
case 3:w=2
break
case 6:n=A.b([],x.s)
for(g=J.aV(p),m=x.f;g.v();){l=g.gJ(g)
if(!m.b(l))continue
k=J.ai(l)
j=k.h(l,"nom_commercial")
if(j==null)j=k.h(l,"dci")
if(j==null)j=k.h(l,"denomination")
if(j==null)j=k.h(l,"D\xe9nomination")
if(j==null)j=k.h(l,"Denomination")
k=j==null?k.h(l,"D\xe9nomination_commerciale"):j
i=B.c.by(J.b0(k==null?"":k))
if(i.length!==0)n.push(i)}if(n.length!==0){h=A.lb(r.w,x.N)
h.M(0,n)
g=A.a3(h,A.n(h).c)
B.b.ef(g,new C.aA8())
r.w=g}u=n
w=1
break
case 1:return A.q(u,v)
case 2:return A.p(s.at(-1),v)}})
return A.r($async$vW,v)},
vc(){var w=0,v=A.t(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$vc=A.u(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:A.bz().$1("[MedPriceSearchScreen] _fetchMedicines START")
r.R(new C.aA_(r))
t=4
A.bz().$1("[MedPriceSearchScreen] Calling LocalDictService.getAllMedicines()")
w=7
return A.l(C.R5(),$async$vc)
case 7:q=e
A.bz().$1("[MedPriceSearchScreen] getAllMedicines returned "+J.b5(q)+" items")
r.R(new C.aA0(r,q))
A.bz().$1("[MedPriceSearchScreen] _fetchMedicines SUCCESS, _allMeds.length="+J.b5(r.w))
w=J.fK(q)&&r.c!=null?8:9
break
case 8:A.bz().$1("[MedPriceSearchScreen] Items empty, checking asset availability")
w=10
return A.l(C.R6(),$async$vc)
case 10:p=e
if(r.c==null){w=1
break}l=$.aKF
o=l==null?"":l
n=p?'CSV present mais aucune donnee trouvee. Verifiez la colonne "nom_commercial". '+A.j(o):"Asset CSV introuvable. Verifiez pubspec.yaml et redemarrez l'application. "+A.j(o)
A.bz().$1("[MedPriceSearchScreen] Asset check: present="+A.j(p)+", msg="+A.j(n))
r.c.ab(x.q).f.cv(A.y4(null,null,null,null,null,B.E,null,A.ao(n,null,null,null,null,null,null),null,B.ak,null,null,null,null,null,null,null,null,null,null))
case 9:t=2
w=6
break
case 4:t=3
i=s.pop()
m=A.Z(i)
A.bz().$1("[MedPriceSearchScreen] _fetchMedicines ERROR: "+A.j(m))
r.R(new C.aA1(r))
j=r.c
if(j!=null)j.ab(x.q).f.cv(A.y4(null,null,null,null,null,B.E,null,A.ao("Erreur de chargement des medicaments: "+A.j(m),null,null,null,null,null,null),null,B.ak,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:A.bz().$1("[MedPriceSearchScreen] _fetchMedicines END")
case 1:return A.q(u,v)
case 2:return A.p(s.at(-1),v)}})
return A.r($async$vc,v)},
abo(d){return"Valider le panier ("+A.j(J.aO0(J.aJp(d),0,new C.azZ()))+")"},
l(){A.bz().$1("[MedPriceSearchScreen] dispose")
var w=this.y
if(w!=null)w.aG(0)
w=this.d
w.P$=$.aL()
w.S$=0
this.aH()},
L(d){var w,v,u,t,s,r,q,p,o=null
A.bz().$1("[MedPriceSearchScreen] build START")
try{w=A.W(d)
v=w.ax.a===B.R
u=new C.aAf(this,w,v)
r=v?w.fx:B.h
q=v?w.fx:B.h
r=A.pz(A.a64(o,!1,q,!0,0,A.hP(o,o,A.d1(B.fl,D.hH,o,o),o,o,new C.aAj(d),o,o,o,o,o),o,A.ao("Prix des m\xe9dicaments",o,o,o,A.b3(o,o,D.hH,o,o,o,o,o,o,o,o,A.d2(d,16,18,20),o,o,B.K,o,o,!0,o,o,o,o,o,o,o,o),o,o),o),r,A.fZ(!0,new A.bK(new A.ad(A.dn(d,16,20,24),16,A.dn(d,16,20,24),16),new A.kp($.Al(),new C.aAk(this,v,w,u),o,o,x.m),o),B.ab,!0),o)
return r}catch(p){t=A.Z(p)
s=A.az(p)
A.bz().$1("[MedPriceSearchScreen] build ERROR: "+A.j(t))
A.bz().$1("[MedPriceSearchScreen] build STACK: "+A.j(s))
r=A.pz(o,B.h,A.f9(new A.bK(B.jG,A.cc(A.b([A.d1(D.T3,B.dW.b5(0.6),o,40),B.as,A.ao("Erreur d'affichage",o,o,o,D.aed,B.ae,o),B.aV,A.ao(A.j(t),o,o,o,D.af7,B.ae,o)],x.p),B.x,B.q,B.a6),o),o,o),o)
return r}}}
var z=a.updateTypes(["~()","pf(T)"])
C.aA7.prototype={
$0(){var w=0,v=A.t(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$$0=A.u(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.a
l=B.c.by(m.d.a.a)
A.bz().$1("[MedPriceSearchScreen] _onQueryChanged: q='"+A.j(l)+"', _allMeds.length="+J.b5(m.w))
if(J.b5(l)===0){m.R(new C.aA2(m))
w=1
break}o=C.b2e(l)
if(o.length!==0){m.R(new C.aA3(m,o))
A.bz().$1(y.b+J.b5(m.x)+" (local)")
w=1
break}m.R(new C.aA4(m))
t=4
w=7
return A.l(m.vW(l),$async$$0)
case 7:q=e
if(m.c==null){w=1
break}m.R(new C.aA5(m,q))
A.bz().$1(y.b+J.b5(m.x)+" (supabase)")
t=2
w=6
break
case 4:t=3
k=s.pop()
p=A.Z(k)
A.bz().$1("[MedPriceSearchScreen] Supabase search error: "+A.j(p))
if(m.c==null){w=1
break}m.R(new C.aA6(m))
w=6
break
case 3:w=2
break
case 6:case 1:return A.q(u,v)
case 2:return A.p(s.at(-1),v)}})
return A.r($async$$0,v)},
$S:7}
C.aA2.prototype={
$0(){var w=this.a
w.x=A.dZ(w.w,!0,x.N)
w.r=w.f=!1},
$S:0}
C.aA3.prototype={
$0(){var w=this.a
w.x=this.b
w.r=w.f=!1},
$S:0}
C.aA4.prototype={
$0(){var w=this.a
w.f=!0
w.r=!1
w.x=A.b([],x.s)},
$S:0}
C.aA5.prototype={
$0(){var w=this.a,v=this.b
w.x=v
w.f=!1
w.r=J.fK(v)},
$S:0}
C.aA6.prototype={
$0(){var w=this.a
w.x=A.b([],x.s)
w.f=!1
w.r=!0},
$S:0}
C.aA8.prototype={
$2(d,e){return B.c.aR(d.toLowerCase(),e.toLowerCase())},
$S:242}
C.aA_.prototype={
$0(){this.a.e=!0},
$S:0}
C.aA0.prototype={
$0(){var w=this.a,v=this.b
w.w=v
w.x=A.dZ(v,!0,x.N)
w.e=!1},
$S:0}
C.aA1.prototype={
$0(){this.a.e=!1},
$S:0}
C.azZ.prototype={
$2(d,e){return d+e},
$S:91}
C.aAf.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null
A.bz().$1("[MedPriceSearchScreen] buildItemRow: "+e+", isSelected="+f)
u=this.b.ax
t=A.aN(16)
s=this.c
r=A.b([new A.d_(0,B.bj,s?B.o.b5(0.25):B.o.b5(0.05),B.pq,14)],x.V)
q=A.iV(s?B.bB:B.f0,1)
p=A.dn(d,10,12,14)
o=A.dn(d,10,12,14)
n=A.lv(d,36,40,44)
m=A.lv(d,36,40,44)
s=(f?B.ck:D.eZ).b5(0.15)
l=f?D.T0:B.uj
k=f?B.ck:D.eZ
n=A.bA(j,A.d1(l,k,j,A.lv(d,20,22,24)),B.l,j,j,new A.bg(s,j,j,j,j,j,B.bA),j,m,j,j,j,j,n)
m=u.k3
s=x.p
w=A.b([A.ao(e,j,j,j,A.b3(j,j,m,j,j,j,j,j,j,j,j,A.d2(d,14,15,16),j,j,B.K,j,j,!0,j,j,j,j,j,j,j,j),j,j)],s)
if(f)J.aJl(w,A.b([D.abX,D.aii],s))
v=A.b([n,B.iF,A.da(A.cc(w,B.a8,B.q,B.B),1)],s)
if(f)J.cY(v,A.h1(D.aj4,new C.aAg(e),A.arn(j,j,j,j,j,j,j,j,j,B.dW,j,j,D.tu,j,j,j,j,j,A.b3(j,j,j,j,j,j,j,j,j,j,j,A.d2(d,12,14,16),j,j,B.K,j,j,!0,j,j,j,j,j,j,j,j),j)))
if(!f)J.cY(v,A.h1(D.ai0,new C.aAh(e),A.arn(j,j,j,j,j,j,j,j,j,B.ck,j,j,D.tu,j,j,j,j,j,A.b3(j,j,j,j,j,j,j,j,j,j,j,A.d2(d,12,14,16),j,j,B.K,j,j,!0,j,j,j,j,j,j,j,j),j)))
if(f)J.aJl(v,A.b([B.lQ,A.d1(B.u8,m.b5(0.6),j,j)],s))
return A.oN(j,A.bA(j,A.c5(v,B.x,B.q,B.B,0),B.l,j,j,new A.bg(u.k2,j,q,t,r,j,B.I),j,j,j,new A.ad(o,p,o,p),j,j,j),B.aO,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.aAi(this.a,e),j,j,j,j,j,j)},
$S:643}
C.aAi.prototype={
$0(){var w=0,v=A.t(x.H),u=this,t,s
var $async$$0=A.u(function(d,e){if(d===1)return A.p(e,v)
for(;;)switch(w){case 0:s=u.b
A.bz().$1("[MedPriceSearchScreen] Item tapped: "+s)
w=2
return A.l(E.ly(!0,!1,s,u.a.d.a.a),$async$$0)
case 2:t=$.tn
C.MT(t==null?"":t,s)
return A.q(null,v)}})
return A.r($async$$0,v)},
$S:7}
C.aAg.prototype={
$0(){var w=0,v=A.t(x.H),u=this
var $async$$0=A.u(function(d,e){if(d===1)return A.p(e,v)
for(;;)switch(w){case 0:w=2
return A.l(C.S1(u.a.toUpperCase()),$async$$0)
case 2:return A.q(null,v)}})
return A.r($async$$0,v)},
$S:7}
C.aAh.prototype={
$0(){C.RX(this.a.toUpperCase())},
$S:0}
C.aAj.prototype={
$0(){return A.cC(this.a,!1).dN()},
$S:0}
C.aAk.prototype={
$3(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=J.ai(a0)
A.bz().$1("[MedPriceSearchScreen] ValueListenableBuilder rebuilt, selectedItems.length="+e.gA(a0))
u=x.p
w=A.b([],u)
if(e.gbN(a0))J.cY(w,A.hP(f,f,D.TJ,f,f,new C.aAa(),f,f,f,f,f))
J.cY(w,B.h5)
w=A.c5(w,B.x,B.q,B.B,0)
t=A.ao("Besoin d'aide avec vos produits ?",f,f,f,A.b3(f,f,D.hH,f,f,f,f,f,f,f,f,A.d2(d,18,20,22),f,f,B.K,f,f,!0,f,-0.3,f,f,f,f,f,f),B.ae,f)
s=A.d2(d,14,16,18)
s=A.ao("Cliquez juste en dessous",f,f,f,A.b3(f,f,A.W(d).ax.a===B.R?B.a2:B.eg,f,f,f,f,f,f,f,f,s,f,f,B.Y,f,f,!0,f,f,f,f,f,f,f,f),B.ae,f)
r=g.b
q=r?B.t8:B.rQ
p=r?2:6
o=A.aN(22)
n=r?B.o.b5(0.25):D.eZ.b5(0.08)
m=g.a
l=A.b3(f,f,r?B.nc:B.eg,f,f,f,f,f,f,f,f,f,f,f,f,f,f,!0,f,f,f,f,f,f,f,f)
k=A.dn(d,14,16,18)
j=A.dn(d,14,16,18)
i=A.aN(22)
r=r?B.dI:B.w
l=A.aKx(f,f,f,new A.ad(k,j,k,j),f,f,f,f,!0,new A.fc(4,i,new A.aS(r,1,B.u,-1)),f,f,f,f,f,B.w,!0,f,f,f,f,new A.fc(4,A.aN(22),D.MV),f,f,f,f,f,f,f,f,l,"Ex: Paracetamol 500mg (saisissez un nom)",f,f,f,f,f,f,f,f,f,!0,!0,!1,f,D.TT,f,f,f,f,f,f,f,f,f,f,f,f)
r=g.c
i=r.ok
j=i.z
k=j==null
h=k?f:j.c3(r.ax.k3)
n=A.fx(!1,B.O,!0,o,A.ars(m.d,l,f,f,new C.aAb(m,d),h,B.Lt),B.l,q,p,f,n,f,f,f,B.bH)
if(m.e)r=B.j8
else if(m.f)r=B.j8
else if(m.r){r=r.ax
q=A.aN(20)
p=r.ry
if(p==null){p=r.p
if(p==null)p=r.k3}p=A.iV(p.b5(0.15),1)
o=r.d
o=(o==null?r.b:o).b5(0.7)
o=A.bA(f,A.d1(D.T8,r.b,f,28),B.l,f,f,new A.bg(o,f,f,f,f,f,B.bA),f,f,f,F.nD,f,f,f)
i=i.w
l=A.ao("D\xe9sol\xe9, m\xe9dicament introuvable pour le moment.",f,f,f,i==null?f:i.C6(r.k3,B.K),B.ae,f)
i=A.ao("Nous travaillons \xe0 vous fournir une liste compl\xe8te.",f,f,f,k?f:j.c3(r.k3.b5(0.75)),B.ae,f)
r=A.f9(A.bA(f,A.cc(A.b([o,B.lR,l,B.aV,i,B.eH,A.ao("Merci pour votre compr\xe9hension.",f,f,f,k?f:j.at9(r.k3.b5(0.75),B.jS),B.ae,f)],u),B.x,B.q,B.a6),B.l,f,f,new A.bg(r.k2,f,p,q,f,f,B.I),f,f,f,B.tA,f,f,f),f,f)}else if(J.fK(m.x)){q=i.w
r=A.f9(A.ao("Aucun medicament",f,f,f,q==null?f:q.C6(r.ax.k3.b5(0.7),B.aK),f,f),f,f)}else{r=A.dn(d,2,4,4)
q=A.dn(d,8,10,12)
q=A.afK(new C.aAc(m,a0,g.d),J.b5(m.x),new A.ad(0,r,0,q),new C.aAd(),!1)
r=q}v=A.b([w,t,B.eH,s,B.at,n,B.as,A.da(r,1)],u)
if(e.gbN(a0)){w=A.aN(30)
e=A.b([new A.d_(0,B.bj,D.eZ.b5(0.4),B.fP,12)],x.V)
J.cY(v,new A.bK(new A.ad(0,12,0,4),new A.f8(B.a7,f,f,A.bA(f,A.fx(!1,B.O,!0,f,A.mR(!1,A.aN(30),!0,A.bA(f,A.c5(A.b([D.Tu,B.dk,A.ao(m.abo(a0),f,f,f,D.aeq,f,f)],u),B.x,B.q,B.a6,0),B.l,f,f,f,f,f,f,D.RY,f,f,f),f,!0,f,f,f,f,f,f,f,f,new C.aAe(m,a0,d),f,f,f,f,f),B.l,B.w,0,f,f,f,f,f,B.bH),B.l,f,f,new A.bg(f,f,f,w,e,D.UT,B.I),f,f,f,f,f,f,f),f),f))}return A.cc(v,B.d6,B.q,B.B)},
$S:644}
C.aAa.prototype={
$0(){},
$S:0}
C.aAb.prototype={
$1(d){return this.a44(d)},
a44(d){var w=0,v=A.t(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$$1=A.u(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:A.bz().$1("[MedPriceSearchScreen] Search submitted: '"+d+"'")
p=s.a
r=J.fL(p.x)
u=3
w=6
return A.l(E.ly(r,!1,null,d),$async$$1)
case 6:o=$.tn
C.MT(o==null?"":o,d)
u=1
w=5
break
case 3:u=2
m=t.pop()
q=A.Z(m)
A.bz().$1("[MedPriceSearchScreen] Analytics error: "+A.j(q))
w=5
break
case 2:w=1
break
case 5:if(!r&&p.c!=null)s.b.ab(x.q).f.cv(D.ack)
return A.q(null,v)
case 1:return A.p(t.at(-1),v)}})
return A.r($async$$1,v)},
$S:111}
C.aAd.prototype={
$2(d,e){return B.iG},
$S:88}
C.aAc.prototype={
$2(d,e){var w=J.U(this.a.x,e),v=w.toUpperCase(),u=J.h8(this.b,v)
return this.c.$3(d,w,u)},
$S:645}
C.aAe.prototype={
$0(){var w=0,v=A.t(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$$0=A.u(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:o=r.b
A.bz().$1("[MedPriceSearchScreen] Cart tapped, selectedItems="+A.j(o))
t=4
A.bz().$1("[MedPriceSearchScreen] Loading panier_validation library...")
w=7
return A.l(A.aMH("panier_validation",""),$async$$0)
case 7:A.bz().$1("[MedPriceSearchScreen] Library loaded, pushing PanierValidationScreen")
if(r.a.c==null){w=1
break}A.cC(r.c,!1).il(A.x2(new C.aA9(o),null,x.z))
A.bz().$1("[MedPriceSearchScreen] PanierValidationScreen pushed")
t=2
w=6
break
case 4:t=3
n=s.pop()
q=A.Z(n)
A.bz().$1("[MedPriceSearchScreen] Cart error: "+A.j(q))
if(r.a.c!=null)r.c.ab(x.q).f.cv(A.y4(null,null,null,null,null,B.E,null,A.ao("Erreur: "+A.j(q),null,null,null,null,null,null),null,B.ak,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return A.q(u,v)
case 2:return A.p(s.at(-1),v)}})
return A.r($async$$0,v)},
$S:7}
C.aA9.prototype={
$1(d){A.aMo("panier_validation")
return G.b32(A.mW(this.a,x.N,x.S))},
$S:z+1}
C.afP.prototype={
$1(d){return J.b0(d).toLowerCase()},
$S:40}
C.afQ.prototype={
$2(d,e){return B.c.aR(d.toLowerCase(),e.toLowerCase())},
$S:242}
C.afR.prototype={
$1(d){return B.c.b2(C.aQv(d),this.a)},
$S:11};(function installTearOffs(){var w=a._instance_0u
w(C.J5.prototype,"gal9","ala",0)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(C.afC,A.Gh)
w(C.p8,A.a7)
w(C.J5,A.ah)
v(A.vZ,[C.aA7,C.aA2,C.aA3,C.aA4,C.aA5,C.aA6,C.aA_,C.aA0,C.aA1,C.aAi,C.aAg,C.aAh,C.aAj,C.aAa,C.aAe])
v(A.w_,[C.aA8,C.azZ,C.aAd,C.aAc,C.afQ])
v(A.kO,[C.aAf,C.aAk,C.aAb,C.aA9,C.afP,C.afR])})()
A.aFX(b.typeUniverse,JSON.parse('{"p8":{"a7":[],"f":[]},"J5":{"ah":["p8"]}}'))
var y={b:"[MedPriceSearchScreen] _filteredMeds.length="}
var x=(function rtii(){var w=A.ak
return{C:w("oq<@>"),V:w("F<d_>"),s:w("F<m>"),p:w("F<f>"),a:w("J<m>"),f:w("aq<@,@>"),K:w("L"),N:w("m"),m:w("kp<aq<m,o>>"),q:w("uS"),y:w("N"),z:w("@"),S:w("o"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.eZ=new A.x(1,0.1803921568627451,0.5450980392156862,0.3411764705882353,B.f)
D.MV=new A.aS(D.eZ,1.4,B.u,-1)
D.rk=new C.afC()
D.hH=new A.x(1,0,0.39215686274509803,0,B.f)
D.Qw=new A.By(",","\r\n",!0)
D.Qx=new A.By(";","\r\n",!0)
D.tu=new A.ad(10,0,10,0)
D.RY=new A.ad(28,14,28,14)
D.T0=new A.bh(63030,"MaterialIcons",!1)
D.T3=new A.bh(63250,"MaterialIcons",!1)
D.T8=new A.bh(63664,"MaterialIcons",!1)
D.Tu=new A.cq(F.jY,22,B.h,null,null)
D.T_=new A.bh(62334,"MaterialIcons",!1)
D.TJ=new A.cq(D.T_,null,D.hH,null,null)
D.TT=new A.cq(B.jZ,null,D.hH,null,null)
D.PC=new A.x(1,0.11764705882352941,0.47843137254901963,0.27058823529411763,B.f)
D.ZB=w([D.eZ,D.PC],A.ak("F<x>"))
D.UT=new A.hi(B.dE,B.mG,B.bv,D.ZB,null,null)
D.abX=new A.cS(null,2,null,null)
D.aih=new A.aQ("Medicament non trouve dans la base de donnees",null,null,null,null,null,null,null,null)
D.ack=new A.dD(D.aih,null,null,null,null,null,null,null,null,null,null,null,null,B.ak,!1,null,null,null,B.E,null)
D.aed=new A.w(!0,B.a0,null,null,null,null,16,B.aK,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aeq=new A.w(!0,B.h,null,null,null,null,16,B.K,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.af7=new A.w(!0,B.cV,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ai0=new A.aQ("Ajouter",null,null,null,null,null,null,null,null)
D.afo=new A.w(!0,B.ck,null,null,null,null,12,B.aK,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aii=new A.aQ("Selectionne",null,D.afo,null,null,null,null,null,null)
D.aj4=new A.aQ("Retirer",null,null,null,null,null,null,null,null)})();(function staticFields(){$.Dw=null
$.afO=!1
$.aKF=null})()};
(a=>{a["1XA5X6RQdFaXsuFoPEOCXSGwjZg="]=a.current})($__dart_deferred_initializers__);