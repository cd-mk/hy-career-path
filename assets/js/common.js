/**
 * common.js
 * UI Script
 */

var setGnb = function() {
  $('.gnb > li').on('mouseenter mouseover', function() {
    $('.sub_gnb').removeClass('active');
    $(this).closest('.header').find('.header_bottom').addClass('active');
    $(this).find('.sub_gnb').addClass('active');
  });
  $('.header').on('mouseleave', function() {
    $(this).find('.header_bottom').removeClass('active');
    $(this).find('.sub_gnb').removeClass('active');
  });
};

var setDatePicker = function() {
  $.datepicker.setDefaults({
    dateFormat: 'yy-mm-dd',
    dayNames: ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'],
    dayNamesMin: ['월', '화', '수', '목', '금', '토', '일'],
    monthNames: ['1월', '2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
    monthNamesShort: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
  });
  $('.input_date').datepicker();
};

var setTab = function() {
  $('.js-tab-list > li').each(function() {
    $(this).on('click', function() {
      var idx = $(this).index();
      $(this).closest('.js-tab-list').find('li').removeClass('active');
      $(this).addClass('active');

      $(this).closest('.js-tab-list').siblings('.js-tab-con').children('li').removeClass('active');
      $(this).closest('.js-tab-list').siblings('.js-tab-con').children('li').eq(idx).addClass('active');
    });
  });
};

var setTooltip = function() {
  $('.js-tooltip').on('click', function() {
    $(this).next('.layer_tooltip').toggleClass('on');
  });
};

var setInputFile = function() {
  $('.file_inp').each(function() {
    $(this).on('change', function() {
      var filename = window.FileReader ? $(this)[0].files[0].name : $(this).val().split('/').pop().split('\\').pop();

      $(this).siblings('.js-file-name').val(filename).attr('disabled', true);
      $(this).siblings('.js-file-label').addClass('hide');
      $(this).siblings('.js-file-del').addClass('on');
    });
  });
  $('.js-file-label').on('click', function() {
    $(this).siblings('.file_inp').trigger('click');
  });
  $('.js-file-del').on('click', function() {
    $(this).siblings('.js-file-name').val('');
    $(this).siblings('.file_inp').val('');
    $(this).siblings('.js-file-label').removeClass('hide');
    $(this).removeClass('on');
  });
};

var setCustomList = function() {
  $('.js-list-add').on('click', function() {
    var listClone = $(this).closest('.item_list').clone(true);

    listClone.find('.js-file-label').removeClass('hide');
    listClone.find('.js-file-del').removeClass('on');
    listClone.find('input').val('');
    listClone.find('.status').text('');
    listClone.find('.js-list-add').off('click').removeClass('js-list-add plus').addClass('js-list-del minus');
    $(this).closest('.js-list-item').append(listClone);
    setListRemove();
  });
  function setListRemove() {
    $('.js-list-del').on('click', function() {
      $(this).closest('.item_list').remove();
    });
  }
};

var selectRadio = function() {
  $('.js-inp-show').on('click', function() {
    $(this).closest('.chk_inp_box').siblings('.js-inp-target').find('input').attr('disabled', false);
  });
  $('.js-inp-hide').on('click', function() {
    $(this).closest('.chk_inp_box').siblings('.js-inp-target').find('input').val('');
    $(this).closest('.chk_inp_box').siblings('.js-inp-target').find('input').attr('disabled', true);
  });
};

var setKvImgReplace = function() {
  $('.js-tab-list > li').on('click', function() {
    var idx = $(this).index();
    $('.key_visual').attr('class', 'key_visual');

    if (idx === 0) {
      $('.key_visual').addClass('person');
    } else if (idx === 1) {
      $('.key_visual').addClass('company');
    } else if (idx === 2) {
      $('.key_visual').addClass('admin');
    }
  });
};

var checkAll = function() {
  $('.js-chk-all').on('click', function() {
    $(this).closest('.agree_box').find('.chk_inp').prop('checked', this.checked);
  });
};

var tblChkAll = function() {
  $('.js-tbl-chkall').on('click', function() {
    $(this).closest('table').find('.chk_inp').prop('checked', this.checked);
  });
};

var checkboxContent = function() {
  $('.js-chk-show').on('change', function() {
    var isChk = $(this).prop('checked');

    $(this).closest('ul').find('.js-chk-show').prop('checked', false);
    $(this).closest('ul').find('li').removeClass('on');
    $(this).closest('ul').find('.chk_con').removeClass('on');
    
    if (isChk) {
      $(this).prop('checked', true);
      $(this).closest('li').addClass('on');
      $(this).closest('li').find('.chk_con').addClass('on');
    }
  });
};

var setSendAccordian = function() {
  $('.js-send-accr').on('click', function() {
    $(this).siblings('.send_editor_form').toggleClass('active');
    var text = $(this).siblings('.send_editor_form').hasClass('active') ? text = '닫기' : text = '열기';
    $(this).find('.js-send-text').text(text);
  });
};

var setDataLayerPopup = function() {
  $('.js-layer-open').on('click', function() {
    var dataPopup = $(this).attr('data-popup');
    $("[data-popup= " + dataPopup + "]").addClass('open');

    $('body').addClass('popup_open');
  });
  $('.js-popup-close').on('click', function() {
    $(this).closest('.layer_popup').removeClass('open');
    $('body').removeClass('popup_open');
  });
};

var init = function() {
  setGnb();

  if ($('.input_date').length) setDatePicker();
  if ($('.js-tab-list').length) setTab();
  if ($('.js-tooltip').length) setTooltip();
  if ($('.file_inp').length) setInputFile();
  if ($('.js-list-add').length) setCustomList();
  if ($('.js-inp-show').length) selectRadio();
  if ($('.key_visual').length) setKvImgReplace();
  if ($('.js-chk-all').length) checkAll(); 
  if ($('.js-chk-show').length) checkboxContent();
  if ($('.js-send-accr').length) setSendAccordian();
  if ($('.js-tbl-chkall').length) tblChkAll();
  if ($('.js-layer-open').length)  setDataLayerPopup();
};

$(document).ready(init);
