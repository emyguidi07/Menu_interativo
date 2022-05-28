$('.status').click(function(){
    $('.menulateral ul .itensstatus').toggleClass('mostra');
});
$('.amigos').click(function(){
    $('.menulateral ul .itensamigos').toggleClass('mostra');
});
$('.btabre').click(function(){
    $('.menulateral').toggleClass('mostra');
});
$('.btfecha').click(function(){
    $('.menulateral').toggleClass('mostra');
});
$('.status').mouseover(function(){
    $('.menulateral ul .seta1').toggleClass('gira');
});
$('.amigos').mouseover(function(){
    $('.menulateral ul .seta2').toggleClass('gira');
});
$('.status').mouseout(function(){
    $('.menulateral ul .seta1').toggleClass('gira');
});
$('.amigos').mouseout(function(){
    $('.menulateral ul .seta2').toggleClass('gira');
});