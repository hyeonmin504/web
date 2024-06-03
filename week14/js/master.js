function nightDayHandler(self){
    var target = document.querySelector('body');
  
    if(self.value == 'night'){
      $('body').css('background-color', 'black');
      $('body').css('color', 'white');
      self.value = 'day';
  
      var alist = document.querySelectorAll('a');
      var i = 0;
      while (i < alist.length) {
        alist[i].style.color = 'powderblue';
        i = i + 1;
      }    
    } else {
      $('body').css('background-color', 'white');
      $('body').css('color', 'black');
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
      $('body').css('background-color', 'black');
      $('body').css('color', 'white');
      self.value = 'day';
      setColor('powderblue');    
    } else {
      $('body').css('background-color', 'white');
      $('body').css('color', 'black');
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
      $('body').css('color', color);
      // document.querySelector('body').style.color=color;  
    },
    setBackgroundColor: function(color){
      $('body').css('background-color', color);
      // document.querySelector('body').style.backgroundColor=color;  
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
      $('body').css('background-color', 'black');
      $('body').css('color', 'white');
      Links.setColor('powderblue')   
      self.value = 'day';
    } else {
      $('body').css('background-color', 'white');
      $('body').css('color', 'black');
      Links.setColor('blue');
      self.value = 'night';  
    } 
  }
  
  
  
  function bodySetColor(color){
    $('body').css('color', color);
  }
  
  function bodySetBackgroundColor(color){
    $('body').css('background-color', color);
  }
  