function filter(para, element) {
    const filter = document.querySelectorAll(".myBtnColor");
    const listIds = ["trend", "new", "discount", "Exciter", "yaz", "Sh", "xipo", "hondaware", "Si-Fi", "sirius"];

    // Đặt màu nền cho tất cả các nút về mặc định
    for (let i = 0; i < filter.length; i++) {
        filter[i].style.background = "#1f317a";
    }
    // Đặt màu nền cho nút được chọn
    element.style.background = "#b900d1";

    // Ẩn tất cả các danh sách
    listIds.forEach(id => {
        document.getElementById(id).style.display = "none";
    });

    // Hiển thị danh sách được chọn
    document.getElementById(para).style.display = "block";
    document.getElementById(para).style.display = "flex";
    document.getElementById(para).style.justifyContent = "space-between";
    document.getElementById(para).style.alignItems = "center";
    const namebike = document.getElementById("motobikename");

    // Cập nhật tên xe nếu cần thiết
    if (para === "Exciter") {
        namebike.innerHTML = "Exciter";
    }
    else if (para === "sirius") {
        namebike.innerHTML = "Sirius";
    }
    else if (para === "Sh") {
        namebike.innerHTML = "Sh300i";
    }
    else if (para === "Si-Fi") {
        namebike.innerHTML = "Si-Fi";
    }
    else if (para === "yaz") {
        namebike.innerHTML = "Yaz";
    }
    else if (para === "hondaware") {
        namebike.innerHTML = "Honda";
    }
    else if (para === "xipo") {
        namebike.innerHTML = "Xipo";
    }
    else {
        namebike.innerHTML = "";
    }

}

// add to cart code

const allButton = document.querySelectorAll(".item button")

for (let i = 0; i < allButton.length; i++) {
    allButton[i].addEventListener("click", (event) => {
        var getValue = event.target;
        var allgetValue = getValue.parentElement;
        var srcImg = allgetValue.querySelector("div img").src;
        var nameImg = allgetValue.querySelector("h2").innerText;
        var priceCart = allgetValue.querySelector("p span").innerText;
        showData(srcImg, nameImg, priceCart);
        changePrice()
        deleteDiv()
        updateQuantity(nameImg)

    })
}
const showData = (srcImg, nameImg, priceCart) => {

    // var textSp = document.querySelectorAll(".added .cleanLine")
    var storage = document.querySelectorAll(".nameInfo")
    for (var i = 0; i < storage.length; i++) {
        console.log(storage)
        if (storage[i].innerHTML === nameImg) {
            alert("Xe đã được thêm vào giỏ hàng!   :)))")
            return
        }
        updateQuantity(nameImg)
    }


    const newDiv = document.createElement('div');
    newDiv.innerHTML = `<div class="img">
                            <img src="${srcImg}" alt="">
                        </div>
                        <div>
                            <span class="nameInfo">${nameImg}</span>
                        </div>
                        <div class="price"><span>${priceCart}</span>$</div>
                        <div class="quantity"><input type="number" width="90px" min="1" value="1"></div>
                        <div class="emplement"><button id="delete" class="delete">Delete</button></div>`
    newDiv.className = "cleanLine";
    // document.querySelector("#cleanLine").style.display = "flex";
    // document.querySelector("#cleanLine").style.justifyContent = "space-between";
    // document.querySelector("#cleanLine").style.alignItems = "center";

    const added = document.querySelector(".added");
    added.appendChild(newDiv)

}

function changePrice() {
    const changePrice = document.querySelectorAll(".cleanLine");
    var totalAfterLoop = 0
    for (let i = 0; i < changePrice.length; i++) {
        var priceChange = changePrice[i].querySelector("div.quantity input").value;
        var increChange = changePrice[i].querySelector("div.price span").innerHTML;
        var totalChange = priceChange * increChange;
        totalAfterLoop += totalChange
    }
    document.getElementById("total-price_money").innerHTML = totalAfterLoop + `$`
    inputChange()
}


// delete
function deleteDiv() {
    const allBtn = document.querySelectorAll(".added .cleanLine")
    for (var i = 0; i < allBtn.length; i++) {
        const allBtns = document.querySelectorAll("div.emplement .delete");
        allBtns[i].addEventListener("click", function (event) {
            var getValue = event.target;
            var allValue = getValue.parentElement.parentElement;
            allValue.remove();
            changePrice();
            updateQuantityMinus()
        })
    }
}

// handle inputchange

function inputChange() {
    const allBtn = document.querySelectorAll(".added .cleanLine")
    for (var i = 0; i < allBtn.length; i++) {
        const allBtns = allBtn[i].querySelector("div.quantity input");
        allBtns.addEventListener("change", function () {
            changePrice();
        })
    }
}

// click cart icon
const Ba = document.getElementById("left0");
Ba.addEventListener("click", function () {
    const showCart = document.querySelector(".manageOf--cart ");
    showCart.classList.toggle("active-cart")
})



// update quantity 
var i = 0;

function updateQuantity() {
    const updateQ = document.getElementById("quantity");
    updateQ.innerText = ++i;
}
function updateQuantityMinus() {
    const updateQ = document.getElementById("quantity");
    updateQ.innerText = --i;
}


const addForm = document.getElementById("bookingbike");

addForm.addEventListener("click", function () {
    const setWidthForm = document.querySelector(".setWidthForms");
    setWidthForm.classList.toggle("cc");

});



// commmmmmment
// const bookNow = document.getElementById("bookNow");
// bookNow.addEventListener("click", function () {
//     const showpop = document.querySelector(".showpop");
//     showpop.classList.toggle("moveBooknow1s");
//     const subsub = document.querySelector(".subsub");
//     subsub.classList.toggle("close-setWidthForms")
// });

const closed = document.getElementById("close");
closed.addEventListener("click", function () {
    const showpop = document.querySelector(".showpop");
    showpop.classList.add("vnvn");

});
