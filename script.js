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

function openWhatsApp(message){window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`,'_blank','noopener')}
document.querySelectorAll('.selection-enquiry').forEach(button=>button.addEventListener('click',()=>{
  const eventRequest=button.dataset.kind==='event';
  const choices=selectedValues(eventRequest?'#event-options':'#product-options');
  if(!choices.length){const section=document.querySelector(eventRequest?'#event-options':'#product-options');section.querySelector('input').focus();alert(`Please select at least one ${eventRequest?'service':'sample'} first.`);return}
  const intro=eventRequest?'I am planning an event and would like a tailored quote for:':'I would like current pricing and availability for these illustrative furniture samples:';
  openWhatsApp(['Hello Anitop Events,','',intro,...choices.map(choice=>`• ${choice}`),'',eventRequest?'Please let me know what details you need about my date, location and guest count.':'I understand the images are illustrative and subject to availability. Please share suitable current options.'].join('\n'));
}));

const form=document.querySelector('#quote-form');
form.addEventListener('submit',event=>{event.preventDefault();if(!form.reportValidity())return;const data=new FormData(form),channel=event.submitter?.value||'whatsapp',message=['Hello Anitop Events,','',`My name is ${data.get('name')}.`,`I am interested in: ${data.get('interest')}.`,data.get('location')?`Location: ${data.get('location')}.`:'',`Details: ${data.get('details')}`].filter(Boolean).join('\n');document.querySelector('#form-status').textContent=`Opening ${channel==='email'?'your email app':'WhatsApp'} with your enquiry…`;if(channel==='email')window.location.href=`mailto:omoniyikenny19@gmail.com?subject=${encodeURIComponent('Anitop enquiry: '+data.get('interest'))}&body=${encodeURIComponent(message)}`;else openWhatsApp(message)});
document.querySelector('#year').textContent=new Date().getFullYear();
const items=document.querySelectorAll('.reveal');
if('IntersectionObserver'in window&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.08});items.forEach(item=>observer.observe(item))}else items.forEach(item=>item.classList.add('visible'));
