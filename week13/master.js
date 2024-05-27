function nightDayHandler(self){
  var target = document.querySelector('body');

  if(self.value == 'night'){
    target.style.backgroundColor = 'black';
    target.style.color = 'white';
    self.value = 'day';

    var alist = document.querySelectorAll('a');
    var i = 0;
    while (i < alist.length) {
      alist[i].style.color = 'powderblue';
      i = i + 1;
    }    
  } else {
    target.style.backgroundColor = 'white';
    target.style.color = 'black';
    self.value = 'night';
    var alist = document.querySelectorAll('a');
    var i = 0;
    while (i < alist.length) {
      alist[i].style.color = 'blue';
      i = i + 1;
    }  
  } 
}
function setColor(color){
  var alist = document.querySelectorAll('a');
    var i = 0;
    while (i < alist.length) {
      alist[i].style.color = color;
      i = i + 1;
    }
}

function nightDayHandler(self){
  var target = document.querySelector('body');

  if(self.value == 'night'){
    target.style.backgroundColor = 'black';
    target.style.color = 'white';
    self.value = 'day';
    setColor('powderblue');    
  } else {
    target.style.backgroundColor = 'white';
    target.style.color = 'black';
    self.value = 'night';
    setColor('blue');    
  } 
}

function linksSetColor(color){
  var alist = document.querySelectorAll('a');
  var i = 0;
  while (i < alist.length) {
    alist[i].style.color = color;
    i = i + 1;
  }
}

var Body = {
  setColor: function(color){
    document.querySelector('body').style.color=color;  
  },
  setBackgroundColor: function(color){
    document.querySelector('body').style.backgroundColor=color;  
  }
}

var Links = {
  setColor: function(color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while (i < alist.length) {
      alist[i].style.color = color;
      i = i + 1;
    }
  }
}

function nightDayHandler(self){
  if(self.value == 'night'){
    Body.setBackgroundColor('black');
    Body.setColor('white');   
    Links.setColor('powderblue')   
    self.value = 'day';
  } else {
    Body.setBackgroundColor('white')
    Body.setColor('black');   
    Links.setColor('blue');
    self.value = 'night';  
  } 
}



function bodySetColor(color){
  document.querySelector('body').style.color=color;  
}

function bodySetBackgroundColor(color){
  document.querySelector('body').style.backgroundColor=color;  
}
