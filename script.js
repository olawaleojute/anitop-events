const phone='2348102992250';
const menuButton=document.querySelector('.menu-button');
const nav=document.querySelector('#site-nav');
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open',!open)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false')}));

const selectedValues=selector=>[...document.querySelectorAll(`${selector} input:checked`)].map(input=>input.value);
function updateCounts(){
  const events=selectedValues('#event-options'),products=selectedValues('#product-options');
  document.querySelector('#event-count').textContent=events.length?`${events.length} service${events.length===1?'':'s'} selected`:'No services selected';
  document.querySelector('#product-count').textContent=products.length?`${products.length} sample${products.length===1?'':'s'} selected`:'No samples selected';
}
document.querySelectorAll('.select-card input,.product-card input').forEach(input=>input.addEventListener('change',updateCounts));

document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('.filter').forEach(item=>{const active=item===button;item.classList.toggle('active',active);item.setAttribute('aria-pressed',String(active))});
  document.querySelectorAll('.product-card').forEach(card=>card.classList.toggle('filtered-out',button.dataset.filter!=='all'&&card.dataset.category!==button.dataset.filter));
}));

function trackEvent(name,params={}){if(typeof window.gtag==='function')window.gtag('event',name,params)}
function openWhatsApp(message,source='general'){trackEvent('whatsapp_enquiry',{enquiry_source:source});window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`,'_blank','noopener')}
document.querySelectorAll('.selection-enquiry').forEach(button=>button.addEventListener('click',()=>{
  const eventRequest=button.dataset.kind==='event';
  const choices=selectedValues(eventRequest?'#event-options':'#product-options');
  if(!choices.length){const section=document.querySelector(eventRequest?'#event-options':'#product-options');section.querySelector('input').focus();alert(`Please select at least one ${eventRequest?'service':'sample'} first.`);return}
  const intro=eventRequest?'I am planning an event and would like a tailored quote for:':'I would like current pricing and availability for these illustrative furniture samples:';
  openWhatsApp(['Hello Anitop Events,','',intro,...choices.map(choice=>`• ${choice}`),'',eventRequest?'Please let me know what details you need about my date, location and guest count.':'I understand the images are illustrative and subject to availability. Please share suitable current options.'].join('\n'),eventRequest?'event_planner':'furniture_catalogue');
}));

const form=document.querySelector('#quote-form');
form.addEventListener('submit',event=>{event.preventDefault();if(!form.reportValidity())return;const data=new FormData(form),channel=event.submitter?.value||'whatsapp',message=['Hello Anitop Events,','',`My name is ${data.get('name')}.`,`I am interested in: ${data.get('interest')}.`,data.get('location')?`Location: ${data.get('location')}.`:'',`Details: ${data.get('details')}`].filter(Boolean).join('\n');document.querySelector('#form-status').textContent=`Opening ${channel==='email'?'your email app':'WhatsApp'} with your enquiry…`;if(channel==='email'){trackEvent('email_enquiry',{enquiry_source:'contact_form'});window.location.href=`mailto:omoniyikenny19@gmail.com?subject=${encodeURIComponent('Anitop enquiry: '+data.get('interest'))}&body=${encodeURIComponent(message)}`}else openWhatsApp(message,'contact_form')});
document.querySelector('.floating-whatsapp')?.addEventListener('click',()=>trackEvent('whatsapp_enquiry',{enquiry_source:'floating_button'}));
document.querySelector('#year').textContent=new Date().getFullYear();
let counterChecks=0;
const counterTimer=setInterval(()=>{counterChecks+=1;if(window.goatcounter?.visit_count){clearInterval(counterTimer);document.querySelector('#visit-count').textContent='';window.goatcounter.visit_count({append:'#visit-count',path:'TOTAL',type:'html',no_branding:true,attr:{'aria-label':'Total website visits'},style:'div{border:0;background:transparent;color:inherit;padding:0;width:auto;height:auto;font:inherit}#gcvc-for{display:none}#gcvc-views:before{content:"Website visits: "}'});}else if(counterChecks>=100){clearInterval(counterTimer);document.querySelector('#visit-count').textContent='Website visit counter unavailable';}},100);
const items=document.querySelectorAll('.reveal');
if('IntersectionObserver'in window&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.08});items.forEach(item=>observer.observe(item))}else items.forEach(item=>item.classList.add('visible'));
