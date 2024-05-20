function switchoff() {
    document.getElementById("bulb").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("cat").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png"
    document.getElementById("head").textContent="switch off";
    document.getElementById("bulb1").style.backgroundColor="grey"
    document.getElementById("bulb2").style.backgroundColor="green"
 
 }
 
 function switchon(){
     document.getElementById("bulb").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png"
     document.getElementById("cat").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png"              
     document.getElementById("head").textContent="switch on";
     document.getElementById("bulb1").style.backgroundColor="red"
     document.getElementById("bulb2").style.backgroundColor="grey"
     
     
 
 }
/*
1.on krne pe
 * lights on hogi 
 * cat will be apear
 * button status change hoga on krne pe onn show hoga 
 * onn krne pe onn likhega
 * off button ka color grey ho jayega
 * onn button ka color green ho jayega
2


*/
/**off krne pe
 * lights off hogi 
 * cat will be desapear
 * button status change hoga off krne pe off show hoga 
 * off krne pe off likhega
 * off button ka color grey ho jayega
 * onn button ka color green ho jayega
 * 
  */
