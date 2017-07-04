function navScroll(){
    $(window).scroll(function () {
        if ($(window).scrollTop()  >  0 ) {
            $('.position-menu').css('display', 'none');
            $('.position-menu-sm').css('display', 'inline-block');
        }
        else if ($(window).scrollTop() ==0  ) {
            $('.position-menu-sm').css('display', 'none');
            $('.position-menu').css('display', 'inline-block');
        }

    });

}
$(document).ready(function () {

    $('.carousel-caption').addClass('animate-1');

    $('.arrow-to-about').find('a').css({'transform': 'translateY(0)', 'opacity': 1});
    // Swipe kéo ảnh banner sang trái sang phải bằng điện thoại

    var position=$('#primary-nav').offset();
    if (position.top >0) {
     $('.position-menu').css('display', 'none');
     $('.position-menu-sm').css('display', 'inline-block');
 }
    navScroll();

    $('#search-lightbox').click(function(){
        $('.mfp-bg').addClass('mfp-ready');
    })
    // show sidenav menu
 $('.nav-icon').click(function (e) {
    $('.mfp-wrap').css({'transform': 'translateX(0)'});
    $('.mfp-bg').addClass('mfp-ready');
    $('body').css('overflow','hidden');
    event.preventDefault();

});

 $('.nav-icon-sm').click(function (event) {
    $('.mfp-wrap').css({'transform': 'translateX(0)'});
    $('.mfp-bg').addClass('mfp-ready');
    $('body').css('overflow','hidden');

    event.preventDefault();
});

// hide sidenav menu
$('.mfp-bg').click(function () {
    $('.mfp-wrap').css({'transform': 'translateX(-270px)'})
    $('.mfp-bg').removeClass('mfp-ready')
    $('body').css('overflow','auto');

});
$(window).scroll(function () {
    checkY();
})

    // Nút chuyển xuống dòng xem thêm Target
    $("#about-shop").click(function () {
        $('html,body').animate({
            scrollTop: $("#to-about").offset().top
        },
        'slow');

    });
    // nút chuyển lên đầu trang
    $(".back-top").click(function () {
        $('html,body').animate({
            scrollTop: $("header").offset().top
        },
        'slow');

    });
    function checkY() {

        if ($(window).scrollTop() > 500) {
            $('.back-top').fadeIn('slow');
        }
        else {
            $('.back-top').fadeOut('slow')
        }
    }


//Hiện Giỏ Hàng Thêm Class
$('.cart-item').hover(
    function(){
        $(this).addClass('current-dropdown')
    },
    function(){
        $(this).removeClass('current-dropdown')
    }
    );

// đổi tab
function activeTab(obj) {
        // Xóa class active tất cả các tab
        $('.nav-tabs li').removeClass('active');

        // Thêm class active vòa tab đang click
        $(obj).addClass('active');

        // Lấy href của tab để show content tương ứng
        var id = $(obj).find('a').attr('href');

        // Ẩn hết nội dung các tab đang hiển thị
        $('.tab-item').fadeOut();

        // Hiển thị nội dung của tab hiện tại
        $(id).fadeIn();
    }

    // Sự kiện click đổi tab
    $('.nav-tabs li').click(function () {
        activeTab(this);
        return false;
    });

    // Active tab đầu tiên khi trang web được chạy
    activeTab($('.nav-tabs li:first-child'));





    //slider tin tức du lịch
    $("#slide-travel").owlCarousel({
        autoPlay: false,
        loop: true,
        items: 3,


        navigation: false,
        navigationText: ["<i class='fa fa-angle-left fa-3x'></i>", "<i class='fa fa-angle-right fa-3x'></i>"],
        stopOnHover: true,

        //Pagination
        pagination: true,
        paginationNumbers: false,
        responsive: {
            0: {
                items: 3,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 1,
            }
        },


        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 2],
        itemsTablet: [768, 1],
        itemsTabletSmall: false,
        itemsMobile: [479, 1]

    });



})
