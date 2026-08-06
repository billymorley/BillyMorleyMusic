const menuButton=document.querySelector('.menu-button');
const navigation=document.querySelector('.nav-links');

if(menuButton&&navigation){
  const closeMenu=()=>{
    menuButton.setAttribute('aria-expanded','false');
    menuButton.setAttribute('aria-label','Open navigation menu');
    navigation.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  };

  menuButton.addEventListener('click',()=>{
    const isOpen=menuButton.getAttribute('aria-expanded')==='true';
    menuButton.setAttribute('aria-expanded',String(!isOpen));
    menuButton.setAttribute('aria-label',isOpen?'Open navigation menu':'Close navigation menu');
    navigation.classList.toggle('is-open',!isOpen);
    document.body.classList.toggle('menu-open',!isOpen);
  });

  navigation.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
  document.addEventListener('keydown',event=>{
    if(event.key==='Escape') closeMenu();
  });
  window.addEventListener('resize',()=>{
    if(window.innerWidth>760) closeMenu();
  });
}

document.querySelectorAll('[data-year]').forEach(element=>{
  element.textContent=new Date().getFullYear();
});

const enquiryForm=document.querySelector('#enquiry-form');
if(enquiryForm){
  enquiryForm.addEventListener('submit',event=>{
    event.preventDefault();
    const data=new FormData(enquiryForm);
    const service=String(data.get('service')||'Website enquiry');
    const subject=encodeURIComponent(service+' enquiry');
    const body=encodeURIComponent([
      'Name: '+(data.get('name')||''),
      'Email: '+(data.get('email')||''),
      'Service: '+service,
      'Dates / availability: '+(data.get('dates')||''),
      'Location / routing: '+(data.get('location')||''),
      '',
      'Project details:',
      data.get('details')||''
    ].join('\n'));

    const status=document.querySelector('#form-status');
    if(status){
      status.textContent='Opening your email app. If nothing happens, email billymorleymusic@gmail.com or call 07772 888769.';
    }
    window.location.href='mailto:billymorleymusic@gmail.com?subject='+subject+'&body='+body;
  });
}

document.addEventListener('click',event=>{
  const trigger=event.target.closest('.lite-youtube');
  if(!trigger) return;

  const videoId=trigger.dataset.videoId;
  const videoTitle=trigger.dataset.videoTitle||'Billy Morley performance';
  if(!videoId) return;

  const iframe=document.createElement('iframe');
  iframe.src='https://www.youtube-nocookie.com/embed/'+encodeURIComponent(videoId)+'?autoplay=1&rel=0';
  iframe.title=videoTitle;
  iframe.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  iframe.allowFullscreen=true;
  iframe.referrerPolicy='strict-origin-when-cross-origin';

  trigger.replaceChildren(iframe);
  trigger.removeAttribute('aria-label');
  trigger.style.cursor='default';
});
