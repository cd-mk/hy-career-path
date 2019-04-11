daum.postcode.load(function() {
  var layer = document.getElementById('layer_address');

  var postCodeOpt = {
    oncomplete: function(data) {
      var fullAddr = '';
      var zipcode = data.zonecode;


      // 사용자가 선택한 주소 양식에 따른 값 저장
      if (data.userSelectedType === 'R') { // 도로명 주소일 경우
        fullAddr = data.roadAddress;
      } else { // 지번 주소일 경우
        fullAddr = data.jibunAddress;
      }

      $('.js-addr-zipcode').val(zipcode);
      $('.js-addr-default').attr('disabled', true).val(fullAddr);
      $('.js-addr-detail').focus();

      $('#layer_address_wrap').removeClass('open');
      $('body').removeClass('open');
    },
    width: '100%',
    heigth: '100%'
  };

  $('.js-address').on('click', function() {
    var daumPostCode = new daum.Postcode(postCodeOpt).embed(layer);
    $('#layer_address_wrap').addClass('open');
    $('body').addClass('open');
  });
  $('#layer_address_wrap .dim').click(function() {
    $('#layer_address_wrap').removeClass('open');
    $('body').removeClass('open');
  });
});