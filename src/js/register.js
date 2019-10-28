$('#txtPhone').focus(function(){
    $(this).css('background','white');
})
$('#txtPhone').blur(function(){
    $(this).css('background','transparent');
    var re = /^(1)\d{10}$/g;
    if(re.test($(this).val())){
        $('#r-tips').html('');
        $(this).css({'border':'1px solid #ccc', 'background':'white'});
    }else{
        $('#r-tips').html('手机格式错误，请核对');
        $(this).css('border','2px solid red');
    }
    if($(this).val() === ''){
        $('#r-tips').html('请输入你要注册的手机');
        $(this).css('border','2px solid red');
    }else{
        $(this).css('background','white');
    }
})
$('#txtVFCode').focus(function(){
    $(this).css('background','white');
})
$('#txtVFCode').blur(function(){
    $(this).css('background','transparent');
    if($(this).val() === ''){
        $('#r-tips').html('请输入校验码');
        $(this).css('border','2px solid red');
    }else{
        $(this).css('background','white');
    }
})