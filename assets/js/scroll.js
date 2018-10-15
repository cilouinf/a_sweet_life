$("header nav ul li a").click(function(){
    $("body,html").animate({
        scrollTop:$("#" + $(this).data('value')).offset().top
    },1000)

});

$(".modal .modal-body .top").click(function(){
    let parent = $(this.closest('.modal'));
    //console.log(parent.offset().top);
    //console.log(parent.height());
    parent.animate({
        scrollTop:-parent.height()
    },1000)

});