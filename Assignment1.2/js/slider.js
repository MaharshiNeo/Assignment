let i = 1;

$(document).ready(() => {
  if(i == 1)
  {
    $('#prevButton').hide();
  }
  $('#prevButton').click(() => {
    i = i - 1;
    $('#user').attr('src', `images/user${i}.png`);
    if(i != 3)
    {
      $('#nextButton').show();
    }
    if(i == 1)
    {
      $('#prevButton').hide();
    }
  });
  $('#nextButton').click(() => {
    i = i + 1;
    $('#user').attr('src', `images/user${i}.png`);
    if(i != 1)
    {
      $('#prevButton').show();
    }
    if(i == 3)
    {
      $('#nextButton').hide();
    }
  });
});