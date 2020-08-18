$(function(){

    let k = 0;
    
        $('.btn').click(function(){
    
            if( k === 0 ) {
                $('.gnb').css({ right:0, background:'white' })
                $('.n1').css({ transform:'rotate(45deg)', top:'15px' });
                $('.n2').css({ opacity:0 });
                $('.n3').css({ transform:'rotate(-45deg)', top:'15px' });
                k = 1;
            } else {
                $('.gnb').css({ right:'-240px', background:'none' })
                $('.n1').css({ transform:'rotate(0deg)', top:'0px' });
                $('.n2').css({ opacity:1 });
                $('.n3').css({ transform:'rotate(0deg)', top:'25px' });
                k = 0;
            }
        })
    
        $('.logo').click(function(){
            $('html,body').animate({ scrollTop:0 });
        })


        $(window).scroll(function(){ //스크롤할때(스크롤하는동안)
	  
            var scrl = $(document).scrollTop(); //스크롤범위값
                
            $('.scrl').text(scrl);	 //b값을 #tt에 출력
        
            $('.visl').css({ left:'-'+(0.5 * scrl)+'px' });
            $('.visr').css({ left:(0.5 * scrl)+'px' });
            
                      
        });


    });