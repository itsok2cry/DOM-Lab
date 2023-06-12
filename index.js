// Menu data structure
let mainEl = document.getElementById("main");
mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';
mainEl.className= 'flex-ctr';


let topMenuEl = document.getElementById('top-menu');
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];
  function liItems(){
  for(let i= 0;i < menuLinks.length; i++){
   let anch= document.createElement('a')
   const link = menuLinks[i]
   anch.setAttribute("href",'link.href')
   console.log(link.text)
   anch.textContent = link.text
   topMenuEl.appendChild(anch)
  }
    
  }
  liItems()

