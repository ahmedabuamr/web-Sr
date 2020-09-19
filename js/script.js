var x = document.getElementById('test');

window.onscroll = function(){
  'use strict';
    
    if(window.pageYOffset>=200){
        x.style.display = 'block';
    }
    else{
        x.style.display = 'none';
    }
};
x.onclick = function(){
  'use strict'; 
    window.scrollTo(0,0);
};

var y = document.getElementById('pric');

y.onclick = function(){
    
  'use strict';
    alert('Sorry Is Not !!');
};
