var imgs = document.querySelectorAll("img");

for (i = 0; i < imgs.length; i++) {

       imgs[i].setAttribute("tabindex", "0");

}

function upDate(previewPic){
  
       document.querySelector("#image").style.backgroundImage="url('"+previewPic.src+"')";
       document.getElementById("image").innerHTML = previewPic.alt;
       console.log("Shown on Div");

}
   
function unDo (){

       document.getElementById("image").innerHTML = "Hover over an image below to display here.";
       document.querySelector("#image").style.backgroundImage="url('')";
       console.log("Reverted to Original");
           
}