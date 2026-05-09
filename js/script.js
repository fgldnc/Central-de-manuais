function norm(s){return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'')}
function getManualText(el){
  var clone=el.cloneNode(true);
  clone.querySelectorAll('.ms-actions,.btn-link,.btn-print,.ms-date,.ms-meta').forEach(function(x){x.remove()});
  return clone.textContent||'';
}
function removeHighlights(){
  document.querySelectorAll('mark.hl').forEach(function(m){
    var p=m.parentNode;
    p.replaceChild(document.createTextNode(m.textContent),m);
    p.normalize();
  });
}
function highlightNode(node,q){
  if(node.nodeType===3){
    var t=node.textContent,nt=norm(t),idx=nt.indexOf(q);
    if(idx<0)return;
    var frag=document.createDocumentFragment(),last=0;
    while(idx>=0){
      frag.appendChild(document.createTextNode(t.slice(last,idx)));
      var m=document.createElement('mark');m.className='hl';
      m.textContent=t.slice(idx,idx+q.length);frag.appendChild(m);
      last=idx+q.length;idx=nt.indexOf(q,last);
    }
    frag.appendChild(document.createTextNode(t.slice(last)));
    node.parentNode.replaceChild(frag,node);
  } else if(node.nodeType===1&&!['SCRIPT','STYLE','MARK'].includes(node.tagName)){
    Array.from(node.childNodes).forEach(function(c){highlightNode(c,q)});
  }
}
var si=document.getElementById('si'),sc=document.getElementById('sc'),sr=document.getElementById('sr'),nr=document.getElementById('nr');
si.addEventListener('input',function(){
  var raw=this.value,q=norm(raw);
  removeHighlights();
  if(!q){
    sc.classList.remove('visible');sr.innerHTML='';nr.classList.remove('visible');
    document.querySelectorAll('.ni,.nc').forEach(function(x){x.classList.remove('hidden')});
    return;
  }
  sc.classList.add('visible');
  var total=0;
  document.querySelectorAll('.ms').forEach(function(ms){
    var txt=norm(getManualText(ms)),found=txt.includes(q);
    if(found){total++;highlightNode(ms,q);}
    var id=ms.id,ni=document.querySelector('.ni[data-target="'+id+'"]');
    if(ni)ni.classList.toggle('hidden',!found);
  });
  document.querySelectorAll('.nc').forEach(function(c){
    c.classList.toggle('hidden',c.querySelectorAll('.ni:not(.hidden)').length===0);
  });
  if(total>0){sr.innerHTML='<span class="rc">'+total+'</span> resultado'+(total>1?'s':'');nr.classList.remove('visible');}
  else{sr.innerHTML='';nr.classList.add('visible');}
});
sc.addEventListener('click',function(){
  si.value='';si.dispatchEvent(new Event('input'));si.focus();
});
document.querySelectorAll('.ni').forEach(function(i){
  i.addEventListener('click',function(){
    var t=i.dataset.target,s=document.getElementById(t);
    if(!s)return;
    document.querySelectorAll('.ni').forEach(function(x){x.classList.remove('active')});
    i.classList.add('active');
    s.scrollIntoView({behavior:'smooth',block:'start'});
    if(window.innerWidth<=700)document.getElementById('sidebar').classList.remove('open');
  });
});
var sb=document.getElementById('sidebar'),mn=document.getElementById('mc'),tb=document.getElementById('tb');
tb.addEventListener('click',function(){
  if(window.innerWidth<=700)sb.classList.toggle('open');
  else{sb.classList.toggle('collapsed');mn.classList.toggle('expanded');tb.classList.toggle('shifted')}
});
var ml=document.getElementById('mc'),ss=document.querySelectorAll('.ms');
ml.addEventListener('scroll',function(){
  var id='';
  ss.forEach(function(s){if(s.offsetTop-200<=ml.scrollTop)id=s.id});
  if(id)document.querySelectorAll('.ni').forEach(function(i){i.classList.toggle('active',i.dataset.target===id)});
});
ml.addEventListener('scroll',function(){
  document.getElementById('bt').classList.toggle('visible',ml.scrollTop>300);
});
document.getElementById('bt').addEventListener('click',function(){ml.scrollTo({top:0,behavior:'smooth'})});
function copyLink(id,btn){
  var url=window.location.href.split('#')[0]+'#'+id;
  navigator.clipboard.writeText(url).then(function(){
    btn.classList.add('copied');btn.innerHTML='<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Copiado!';
    setTimeout(function(){btn.classList.remove('copied');btn.innerHTML='<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg> Link';},2000);
  });
}
if(window.location.hash){
  var tid=window.location.hash.slice(1);
  setTimeout(function(){
    var el=document.getElementById(tid);
    if(el){el.scrollIntoView({behavior:'smooth',block:'start'});}
    var ni=document.querySelector('.ni[data-target="'+tid+'"]');
    if(ni){document.querySelectorAll('.ni').forEach(function(x){x.classList.remove('active')});ni.classList.add('active');}
  },200);
}
