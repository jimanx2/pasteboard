$(function(){
    $.getScript("//cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/js/select2.min.js", Initialize)

    function Initialize()
    {
        $('head').append('<link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/css/select2.min.css">')
        setTimeout(function(){
            $('#submerchantid').select2()
        }, 3000);
    }
})