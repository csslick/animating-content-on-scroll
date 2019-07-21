$(function(){
  var $content = $('.content');
  console.log($content.length);

  for(var i = 0; i < $content.length; i++){
    var title = char_info[i].name;
    var text = char_info[i].text;

    $('.content').eq(i).find('h2').text(title);
    $('.content').eq(i).find('p').text(text);
    console.log(i + ': ' + title);
  }

})