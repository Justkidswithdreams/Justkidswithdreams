(function(){
  var dd=document.getElementById('dd'), tg=dd.querySelector('.dd-toggle');
  var nav=document.getElementById('nav'), burger=document.querySelector('.burger');
  function setDD(o){dd.classList.toggle('open',o);tg.setAttribute('aria-expanded',o);}
  function setNav(o){nav.classList.toggle('open',o);burger.setAttribute('aria-expanded',o);burger.setAttribute('aria-label',o?'Menü schließen':'Menü öffnen');document.body.style.overflow=o?'hidden':'';}
  tg.addEventListener('click',function(e){e.stopPropagation();setDD(!dd.classList.contains('open'));});
  document.addEventListener('click',function(e){if(!dd.contains(e.target))setDD(false);});
  burger.addEventListener('click',function(){setNav(!nav.classList.contains('open'));});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'){setDD(false);setNav(false);}});

  // Sprunglinks innerhalb einer Seite, ohne den Router zu stören
  document.addEventListener('click',function(e){
    var a=e.target.closest('a[href^="#"]'); if(!a) return;
    var h=a.getAttribute('href'); if(h.length<2) return;
    var el=document.getElementById(h.slice(1)); if(!el) return;
    e.preventDefault();
    el.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
    if(el.id==='main'){el.focus();}
  });

  // Akkordeons (Unser Weg, FAQ)
  document.querySelectorAll('.step > button, .acc > li > button').forEach(function(b){
    b.addEventListener('click',function(){var li=b.parentElement,o=!li.classList.contains('open');li.classList.toggle('open',o);b.setAttribute('aria-expanded',o);});
  });

  // Newsletter
  var nb=document.getElementById('news-btn'), nm=document.getElementById('news-msg'), mi=document.getElementById('mail');
  if(nb) nb.addEventListener('click',function(){
    if(!mi.value||!mi.checkValidity()){nm.textContent='Bitte gib eine gültige E-Mail-Adresse ein.';mi.focus();return;}
    nm.textContent='Danke! Die Anmeldung wird beim Umsetzen mit dem Newsletter-Tool verbunden.';
  });

  // Formulare
  document.querySelectorAll('[data-form]').forEach(function(f){
    var btn=f.querySelector('[data-send]'), msg=f.querySelector('.form-msg');
    btn.addEventListener('click',function(){
      var bad=[].slice.call(f.querySelectorAll('input,textarea,select')).filter(function(i){return !i.checkValidity();})[0];
      if(bad){msg.classList.add('err');msg.textContent=bad.type==='checkbox'?'Bitte bestätige die Einwilligung zur Verarbeitung deiner Angaben.':(bad.type==='email'&&bad.value?'Bitte gib eine gültige E-Mail-Adresse ein.':'Bitte fülle alle Pflichtfelder aus.');bad.focus();return;}
      msg.classList.remove('err');msg.textContent='Danke! Das Formular wird beim Umsetzen mit dem Mail-Versand verbunden.';
    });
  });

  // Spenden-Widget
  var rhythm='einmalig', amt=50, free=document.getElementById('d-free'), sum=document.getElementById('d-sum');
  if(free){
  function upd(){var v=free.value?Math.max(0,parseInt(free.value,10)||0):amt; sum.textContent=v?'Du möchtest '+v+' € '+rhythm+' spenden.':'Bitte wähle einen Betrag.';}
  document.querySelectorAll('[data-rhythm]').forEach(function(b){b.addEventListener('click',function(){rhythm=b.dataset.rhythm;document.querySelectorAll('[data-rhythm]').forEach(function(x){x.setAttribute('aria-pressed',x===b);});upd();});});
  document.querySelectorAll('[data-amt]').forEach(function(b){b.addEventListener('click',function(){amt=+b.dataset.amt;free.value='';document.querySelectorAll('[data-amt]').forEach(function(x){x.setAttribute('aria-pressed',x===b);});upd();});});
  free.addEventListener('input',function(){if(free.value)document.querySelectorAll('[data-amt]').forEach(function(x){x.setAttribute('aria-pressed','false');});upd();});
  }
})();
