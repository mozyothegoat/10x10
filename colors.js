var Links = {
  setColor : function(color) {
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length) {
      alist[i].style.color = color;
      i++; }
    }
  }

var Body = {
  setColor : function(color) {
    document.querySelector('body').style.color = color;} ,
  setBackgroundColor : function(color) {
    document.querySelector('body').style.backgroundColor = color;}
  }

function nd(self) {
  var target = document.querySelector('body');
  if(self.value === '어두운 테마') {
    Body.setColor('white');
    Body.setBackgroundColor('black');
    self.value = '밝은 테마';

    Links.setColor('powderblue');
  }
  else {
    Body.setColor('black');
    Body.setBackgroundColor('white');
    self.value = '어두운 테마';

    Links.setColor('black');
  }
}
