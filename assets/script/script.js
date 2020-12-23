// $(document).ready(function(){
//     $('#raiting-tabs').tabs()
// })
$(document).ready(function(){
    $('.leaderboard-raiting__item').click(function(){
        $('.leaderboard-raiting__item').removeClass('active');
        $(this).addClass('active');
    })
});