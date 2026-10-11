/* GRWM 2.8: optional Supabase Auth. Never store service_role or OAuth client secrets here. */
(()=>{'use strict';
 const URL='https://ixkzpazxisgykzfavnca.supabase.co';
 const KEY='sb_publishable_dkqrwdJKGTsCtN_TByCktw_jrHgvy7b';
 const $=id=>document.getElementById(id);
 const status=$('authStatus'),guest=$('authGuest'),userBox=$('authUser'),emailView=$('authUserEmail');
 if(!status)return;
 const originRedirect='https://kenshi787.github.io/grwm-app/';
 const currentRedirect=location.origin==='https://kenshi787.github.io'&&location.pathname.startsWith('/grwm-app/')?location.origin+'/grwm-app/':originRedirect;
 let client=null,busy=false;
 function msg(t){status.textContent=t}
 function show(user){guest.classList.toggle('hidden',!!user);userBox.classList.toggle('hidden',!user);emailView.textContent=user?.email||'';msg(user?'Angemeldet. Dein lokaler Kleiderschrank bleibt privat.':'Nicht angemeldet. Du kannst GRWM trotzdem vollständig lokal verwenden.');}
 function lock(v){busy=v;['authGoogle','authLogin','authSignup','authReset','authLogout'].forEach(id=>{if($(id))$(id).disabled=v})}
 function error(e){msg('Fehler: '+(e?.message||'Bitte später erneut versuchen.'))}
 if(!window.supabase?.createClient){msg('Online-Anmeldung gerade nicht verfügbar. Prüfe deine Internetverbindung. Dein Kleiderschrank funktioniert weiterhin offline.');guest.classList.add('hidden');return;}
 try{client=window.supabase.createClient(URL,KEY,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true,flowType:'pkce'}})}catch(e){error(e);return}
 client.auth.onAuthStateChange((_event,session)=>show(session?.user||null));
 client.auth.getSession().then(({data,error:e})=>e?error(e):show(data.session?.user||null)).catch(error);
 $('authGoogle').addEventListener('click',async()=>{if(busy)return;lock(true);msg('Google-Anmeldung wird geöffnet …');try{const {error:e}=await client.auth.signInWithOAuth({provider:'google',options:{redirectTo:currentRedirect}});if(e)throw e}catch(e){error(e)}finally{lock(false)}});
 $('authForm').addEventListener('submit',async e=>{e.preventDefault();if(busy)return;lock(true);try{const {error:err}=await client.auth.signInWithPassword({email:$('authEmail').value.trim(),password:$('authPassword').value});if(err)throw err;msg('Anmeldung erfolgreich.')}catch(err){error(err)}finally{lock(false)}});
 $('authSignup').addEventListener('click',async()=>{if(busy)return;if(!$('authForm').reportValidity())return;lock(true);try{const {data,error:e}=await client.auth.signUp({email:$('authEmail').value.trim(),password:$('authPassword').value,options:{emailRedirectTo:currentRedirect}});if(e)throw e;msg(data.session?'Konto erstellt und angemeldet.':'Registrierung gesendet. Bitte bestätige deine E-Mail-Adresse und melde dich danach an.')}catch(e){error(e)}finally{lock(false)}});
 $('authReset').addEventListener('click',async()=>{const email=$('authEmail').value.trim();if(!email){msg('Bitte zuerst deine E-Mail-Adresse eintragen.');return}lock(true);try{const {error:e}=await client.auth.resetPasswordForEmail(email,{redirectTo:currentRedirect});if(e)throw e;msg('Falls ein Konto mit dieser E-Mail existiert, erhältst du einen Link zum Zurücksetzen.')}catch(e){error(e)}finally{lock(false)}});
 $('authLogout').addEventListener('click',async()=>{lock(true);try{const {error:e}=await client.auth.signOut();if(e)throw e;show(null)}catch(e){error(e)}finally{lock(false)}});
 client.auth.onAuthStateChange((event)=>{if(event==='PASSWORD_RECOVERY'){msg('Passwort-Wiederherstellung geöffnet. Bitte neues Passwort eingeben.');const next=prompt('Neues Passwort (mindestens 6 Zeichen):');if(next&&next.length>=6){client.auth.updateUser({password:next}).then(({error:e})=>e?error(e):msg('Passwort aktualisiert.')).catch(error)}else if(next!==null)msg('Das Passwort muss mindestens 6 Zeichen haben.')}});
})();
