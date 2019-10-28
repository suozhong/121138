$('#tab-left').click(function(){
    $(this).css('border', 'none');
    $('#tab-right').css({'border-bottom': '1px solid #ccc',
        'border-left': '1px solid #ccc'});
    $('#div-common').css('display', 'block');
    $('#div-active').css('display', 'none');
    $('#r-tips').html('');   
})
$('#tab-right').click(function(){
    $(this).css('border', 'none');
    $('#tab-left').css({'border-bottom': '1px solid #ccc',
        'border-right': '1px solid #ccc'});
    $('#div-common').css('display', 'none');
    $('#div-active').css('display', 'block');
    $('#r-tips').html('');
})

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
        $('#r-tips').html('请输入手机号码');
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
        $('#r-tips').html('请输入动态密码');
        $(this).css('border','2px solid red');
    }else{
        $(this).css('background','white');
    }
})


$('#txtUName').focus(function(){
    $(this).css('background','white');
})
$('#txtUName').blur(function(){
    $(this).css('background','transparent');
    var re = /^((1)\d{10})|([0-9a-zA-Z]+@(126|163|qq)(\.com|\.cn))$/g;
    if(re.test($(this).val())){
        $('#r-tips').html('');
        $(this).css({'border':'1px solid #ccc', 'background':'white'});
    }else{
        $('#r-tips').html('帐号不存在，请核对');
        $(this).css('border','2px solid red');
    }
    if($(this).val() === ''){
        $('#r-tips').html('请输入账号（手机或邮箱）');
        $(this).css('border','2px solid red');
    }else{
        $(this).css('background','white');
    }
})
$('#txtUPwd').focus(function(){
    $(this).css('background','white');
})
$('#txtUPwd').blur(function(){
    $(this).css('background','transparent');
    if($(this).val() === ''){
        $('#r-tips').html('请输入账号（手机或邮箱）');
        $('#txtUName').css('border','2px solid red');
    }else{
        $(this).css('background','white');
        $('#r-tips').html('请输入账号（手机或邮箱）');
        $('#txtUName').css('border','2px solid red');
    }
})