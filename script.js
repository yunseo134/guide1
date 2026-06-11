
function copyBlock(btn){
  const pre = btn.parentElement.querySelector('code');
  navigator.clipboard.writeText(pre.innerText).then(()=>{btn.innerText='복사됨';setTimeout(()=>btn.innerText='복사',900);});
}
function filterCards(){
  const q=document.getElementById('search').value.toLowerCase().trim();
  document.querySelectorAll('[data-key]').forEach(el=>{
    const show=el.innerText.toLowerCase().includes(q);
    el.style.display=show?'':'none';
  });
}
