/******************************************* Owl Carousel **************************************/
$('.news .owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        800:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
})
$('.team .owl-carousel').owlCarousel({
    items:1,
    loop:true,
    margin:20,
    nav:true,
    responsiveClass:true,
})
$('.services_details_page .owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        800:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
})
$('[aria-label="Next"]').html('<i class="fas fa-arrow-right"></i>');
$('[aria-label="Previous"]').html('<i class="fas fa-arrow-left"></i>');
/******************************************* controlling sidenav *******************************/ 
$("#open-nav").click(function(){
    $("#background_overlay").fadeIn(200);
    $('#background_overlay').addClass('activeBG');
    $("#sidenavResponsive").css("left", "0px");
});
$('#sidenavResponsive').find('#close').on('click',function(){
    $('#sidenavResponsive').css('left', '-300px');
    $('#background_overlay').fadeOut(500);
    $('#background_overlay').removeClass('activeBG');
    $('#logo').css('display', 'block');
    $('#close').css('display', 'block');
});
// close modal on click outside at anywhere

$(document).on('click',function(e){
        if( !(($(e.target).closest("#sidenavResponsive").length > 0 ) || ($(e.target).closest("#open-nav").length > 0))){
            $('#sidenavResponsive').css('left', '-300px');
            $('#background_overlay').removeClass('activeBG');
            $('#background_overlay').fadeOut(500);
        }
});
/******************************************* Search Filter *************************************/
$(document).ready(function() {
    $('#searchButton').on('click', function() {
        var searchQuery = $('#search_input').val().toLowerCase();
        
        $('.content').children('div').each(function() {
            var search_title = $(this).find('.search_title').text().toLowerCase();
            if (search_title.indexOf(searchQuery) !== -1) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
});
/******************************************* Slice Paragraph ***********************************/
$(document).ready(function() {
    var paragraph_content = $('.paragraph_content');
    var originalText = paragraph_content.text();
    var wordsToShow = 27; 
    function showWords(text, numWords) {
        var words = text.split(' ');
        var truncatedText = words.slice(0, numWords).join(' ');
        return truncatedText;
    }
    paragraph_content.text(showWords(originalText, wordsToShow));
    $('#hideButton').hide();

    $('#hideButton').on('click', function() {
        paragraph_content.text(showWords(originalText, wordsToShow));
        $('#showButton').show();
        $('#hideButton').hide();
    });
    
    $('#showButton').on('click', function() {
        paragraph_content.text(originalText);
        $('#hideButton').show();
        $('#showButton').hide();
    });
});
/******************************************* Features Section Animation *******************************/ 
$(document).ready(function(){
    $(window).scroll(function(){
        $('section.feartures').each(function(){
            var position = $(this).offset().top;
            var scrollPosition = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (position < scrollPosition + windowHeight - 100) {
                $('section.feartures figure').each(function(){
                    $(this).animate({opacity: '1'}, 1000);
                })
            }
        });
    });
});
/******************************************* Governance Principles Animation *******************************/ 
$(document).ready(function(){
    $(window).scroll(function(){
        $('section.governance_principles').each(function(){
            var position = $(this).offset().top;
            var scrollPosition = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (position < scrollPosition + windowHeight - 100) { 
                $(this).find('figure').addClass('slide-up');
            }
        });
    });
});
$(document).ready(function(){
    $('.governance_principles figure').mouseenter(function() {
        $(this).append('<div class="governance_principles_animation"></div>');
        $('.governance_principles_animation', this).animate({
            width: '100%'
        }, 300);
    }).mouseleave(function() {
        $('.governance_principles_animation', this).remove();
    });
});
/******************************************* Staticts Counter Animation *******************************/ 
$(document).ready(function(){
    $(window).scroll(function(){
        $('section.staticts').each(function(){
            var position = $(this).offset().top;
            var scrollPosition = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (position < scrollPosition + windowHeight - 100) { 
                $('.staticts_info').each(function(){
                    var $counter = $(this).find('.counter');
                    var target = $counter.data('target');
                    animateCounter($counter, target);
                })
            }
        });
    });
    function animateCounter($counter, target) {
        $({ countNum: $counter.text() }).animate({
            countNum: target
        }, {
            duration: 2000, 
            easing: 'linear',
            step: function () {
                $counter.text(Math.floor(this.countNum));
            },
            complete: function () {
                $counter.text(target);
            }
        });
    }
});

/******************************************* Loading Page *******************************/ 
var loadingDiv = $(`<div id="loading-overlay">
    <div class="ring">
        <img src="../img/loadin-logo-removebg-preview.png">
        <span></span>
    </div>
    </div>`);
$('body').append(loadingDiv);
$(window).on('load', function() {
    $('#loading-overlay').fadeOut('slow', function() {
    });
});
/******************************************* Custom Cursor *******************************/ 
var mouse_cursor = $(`<div class="custom-cursor">`);
$('body').append(mouse_cursor);
$(document).ready(function(){
    $(document).mousemove(function(e){
        $('.custom-cursor').css({
            left: e.pageX - 15, 
            top: e.pageY - 15
        });
    });
});