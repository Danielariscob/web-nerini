// shared.js — nav hamburger + active link
(function(){
  const ham = document.getElementById('hamburger');
  const mob = document.getElementById('mobileMenu');
  if(ham && mob){
    ham.addEventListener('click', ()=>{
      ham.classList.toggle('open');
      mob.classList.toggle('open');
    });
    // close on link click
    mob.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
      ham.classList.remove('open');
      mob.classList.remove('open');
    }));
  }

  // Highlight current page
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a=>{
    const href = a.getAttribute('href');
    if(href === path || (path==='' && href==='index.html')){
      a.classList.add('current');
    }
  });

  // Navbar shadow on scroll
  const nav = document.getElementById('navbar');
  if(nav){
    window.addEventListener('scroll', ()=>{
      nav.style.boxShadow = window.scrollY>10 ? '0 4px 30px rgba(0,0,0,.3)' : '';
    }, {passive:true});
  }
})();
