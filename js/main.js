$(function() {
  // 캐릭터 정보 추가
  var $content = $(".content");
  console.log($content.length);

  for (var i = 0; i < $content.length; i++) {
    var title = char_info[i].name;
    var text = char_info[i].text;

    $(".content")
      .eq(i)
      .find("h2")
      .text(title);
    $(".content")
      .eq(i)
      .find("p")
      .text(text);
    console.log(i + ": " + title);
  }

  // 페이지 인디케이터
  $("#page-indicator a").on("click", function() {
    // 이동한 내부 링크의 위치값(hash)
    var target = $(this.hash);
    // 페이지 버튼 index
    var idx = $(this).index()
    console.log(target, idx);
    $("#page-indicator a").removeClass('active');
    $(this).addClass('active');


    $("html, body").animate({
      scrollTop: target.offset().top
    });
    return false; // 앵커태그 무효화
  });

  // 시작하면 강제로 첫페이지로
  $('#page-indicator a').eq(0).trigger('click')


}); // end$()
