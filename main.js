const iphone = document.querySelector('.iphone')
const samsung = document.querySelector('.samsung')

iphone.addEventListener("click", function (event) {
    let clickTaregt = event.target;
    let activeButton = iphone.querySelector(".active");
    let priceItem = iphone.querySelector(".price");
    let currentPrice;
    let activeButtonColor = iphone.querySelector(".active-border");

    if (clickTarget.classList.contains("color-bth") && 
        !clickTarget.classList.contains("active-border")) {
        clickTaregt.classList.add("active-border");
        activeButton.Color.classList.remove("active-border");
    }
    if (clickTarget.classList.contains("bth") &&
        !clickTarget.classList.contains("active")) {
            clickTaregt.classList.add("active");
            activeButton.classList.remove("active")
        
        currentPrice = clickTaregt.getAttribute("data-size");

        if(curremtPrice ==="medium") {
            priceItem.textContent = "Цена 80 000р.";
        }
        
        if(curremtPrice ==="large") {
            priceItem.textContent = "Цена 100 000р.";
        }
    
    
    }

});
