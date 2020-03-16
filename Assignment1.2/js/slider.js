let i = 1;

$(document).ready(() => {
  if (i == 1) {
    $('#prevButton').css('visibility', 'hidden');
    $('#prevButton2').css('visibility', 'hidden');
  }
  $('#prevButton').click(() => {
    i = i - 1;
    $('#user').attr('src', `images/user${i}.png`);
    if (i != 3) {
      $('#nextButton').css('visibility', 'visible');
    }
    if (i == 1) {
      $('#prevButton').css('visibility', 'hidden');
    }
  });
  $('#nextButton').click(() => {
    i = i + 1;
    $('#user').attr('src', `images/user${i}.png`);
    if (i != 1) {
      $('#prevButton').css('visibility', 'visible');
    }
    if (i == 3) {
      $('#nextButton').css('visibility', 'hidden');
    }
  });
  if (i == 1) {
    $('#prevButton2').css('visibility', 'hidden');
  }
  $('#prevButton2').click(() => {
    i = i - 1;
    $('#user').attr('src', `images/user${i}.png`);
    if (i != 3) {
      $('#nextButton2').css('visibility', 'visible');
    }
    if (i == 1) {
      $('#prevButton2').css('visibility', 'hidden');
    }
  });
  $('#nextButton2').click(() => {    
    i = i + 1;    
    $('#user').attr('src', `images/user${i}.png`);
    if (i != 1) {
      $('#prevButton2').css('visibility', 'visible');
    }
    if (i == 3) {
      $('#nextButton2').css('visibility', 'hidden');
    }
  });
  $(window).resize(() => {
    if($( window ).width()>767){    
      $('#prevButton2').css('visibility', 'hidden');
      $('#nextButton2').css('visibility', 'hidden');
      if(i==1){
        $('#nextButton').css('visibility', 'visible');
        $('#prevButton').css('visibility', 'hidden');
      }
      else if(i==3){
        $('#nextButton').css('visibility', 'hidden');
        $('#prevButton').css('visibility', 'visible');
      }
      else{        
        $('#nextButton').css('visibility', 'visible');
        $('#prevButton').css('visibility', 'visible');
      }
    }
    if($( window ).width()<=767){      
      if(i==1){        
        $('#nextButton2').css('visibility', 'visible');
        $('#prevButton2').css('visibility', 'hidden');
      }
      else if(i==3){
        $('#nextButton2').css('visibility', 'hidden');
        $('#prevButton2').css('visibility', 'visible');
      }
      else{        
        $('#nextButton2').css('visibility', 'visible');
        $('#prevButton2').css('visibility', 'visible');
      }
    }
  });
});