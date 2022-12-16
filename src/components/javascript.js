let x = document.getElementById("Test_Audio") ;
    function playsound(){
          x.play() ;
    }
    function pausesound(){
        x.pause() ;
    }

let count = 0 ;

function playsound() {
    if ( count %2==0) {
        x.play() ;
    }else {
        x.pause() ;
    }
    count ++ ;
}


