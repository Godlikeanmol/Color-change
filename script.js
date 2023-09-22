var rect = document.querySelector('.color');

        rect.addEventListener("mousemove",function(et){
            var rectlocation = rect.getBoundingClientRect();
            var left = et.x - rectlocation.left;
            var top = et.y -rectlocation.top;
            document.querySelector("#box").innerHTML=left;
            document.querySelector("#box2").innerHTML=top;

            if(left < rectlocation.width/2){
                document.querySelector("#left").innerHTML="left"
                rect.style.backgroundColor=`rgb(${left},${top},${left})`;
                rect.style.transition
            }
            else{
                document.querySelector("#left").innerHTML="right";
                rect.style.backgroundColor=`rgb(${left}, ${top} , 20)`
            }
            chnagepagetittle();
            function chnagepagetittle(){
            PageTittle = "colourfull";
                document.title=PageTittle;
            }
        });

        
        rect.addEventListener("mouseleave", function(){
            rect.style.backgroundColor="#fff";

            chnagepagetittle();
            function chnagepagetittle(){
            PageTittle = "White";
                document.title=PageTittle;
            }
        })
