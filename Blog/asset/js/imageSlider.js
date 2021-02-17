const carousel = document.getElementById("carousel-example-1z")

const imageFetcher = async () => {
    const imagesResponse = [];

    for(let i = 0; i < 9; i++){
        let image = await fetch(`https://picsum.photos/${600+i}/600`);
        imagesResponse.push(image.url);
    }
    console.log(imagesResponse)
    let controls =`<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>`
    carousel.innerHTML = ""
    
    const slides = document.createElement("div")
    slides.setAttribute("class","carousel-inner")
    let slideString = `<div class="carousel-item active">`
    for (let i = 0; i < 9; i++) {
    `<img height="800px"  class="d-block w-100" src=${imagesResponse[i]};
        alt="First slide">
</div>`

    slides.innerHTML = slideString+controls
    carousel.appendChild(slides)
    carousel.setAttribute("style","width:75%;margin:auto;margin-top:100px;")  
    }
}

imageFetcher();

