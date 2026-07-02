const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const counter = document.getElementById("counter");

let currentIndex = 0;

images.forEach((img,index)=>{
    img.addEventListener("click",()=>{
        currentIndex=index;
        showImage();
        lightbox.style.display="flex";
    });
});

function showImage(){
    lightboxImg.src=images[currentIndex].src;
    counter.textContent=`Image ${currentIndex+1} of ${images.length}`;
}

document.getElementById("close").onclick=()=>{
    lightbox.style.display="none";
};

document.getElementById("next").onclick=()=>{
    currentIndex=(currentIndex+1)%images.length;
    showImage();
};

document.getElementById("prev").onclick=()=>{
    currentIndex=(currentIndex-1+images.length)%images.length;
    showImage();
};

function filterImages(category){
    images.forEach(img=>{
        if(category==="all" || img.dataset.category===category){
            img.style.display="block";
        }else{
            img.style.display="none";
        }
    });
}

document.getElementById("search").addEventListener("keyup",function(){
    let value=this.value.toLowerCase();

    images.forEach(img=>{
        let name=img.alt.toLowerCase();

        if(name.includes(value)){
            img.style.display="block";
        }else{
            img.style.display="none";
        }
    });
});
