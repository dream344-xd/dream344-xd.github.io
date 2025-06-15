const foods = [
    { name: "กะเพราไก่ไข่ดาว", image: "images/kaprao.jpg" }, 
    { name: "ข้าวผัดหมู", image: "images/khao-pad.jpg" },    
    { name: "ผัดซีอิ๊ว", image: "images/pad-see-ew.jpg" },
    { name: "ราดหน้า", image: "images/rad-na.jpg" },
    { name: "บะหมี่เกี๊ยว", image: "images/ba-mee-kiew.jpg" },
    { name: "สุกี้น้ำ", image: "images/suki.jpg" },
    { name: "ข้าวขาหมู", image: "images/khao-kha-moo.jpg" },
    { name: "ข้าวมันไก่", image: "images/khao-man-gai.jpg" },
    { name: "ก๋วยเตี๋ยวเรือ", image: "images/kuay-teow-ruea.jpg" },
    { name: "ผัดไทย", image: "images/pad-thai.jpg" },
    { name: "ส้มตำไก่ย่าง", image: "images/som-tum-gai-yang.jpg" },
    { name: "มาม่า", image: "images/mama.jpg" },
    { name: "ข้าวไข่เจียว", image: "images/khao-khai-jiao.jpg" },
    { name: "ข้าวหมูแดง", image: "images/khao-moo-daeng.jpg" },
    { name: "สเต็ก", image: "images/steak.jpg" },
    { name: "สปาเก็ตตี้", image: "images/spaghetti.jpg" },
    { name: "แกงเขียวหวาน", image: "images/green-curry.jpg" },
    { name: "ต้มยำกุ้ง", image: "images/tom-yum-goong.jpg" },
    { name: "ข้าวหมูกรอบ", image: "images/khao-moo-daeng.jpg" },
    { name: "โจ๊ก", image: "images/joke.jpg" }
];

const foodDisplay = document.getElementById('food-display');
const foodImage = document.getElementById('food-image');
const randomButton = document.getElementById('random-button');

randomButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * foods.length);
    const randomFood = foods[randomIndex];

    foodDisplay.textContent = randomFood.name;
    foodImage.src = randomFood.image;
    foodImage.style.display = 'block';
    
    foodImage.classList.remove('fade-in');
    void foodImage.offsetWidth; 
    foodImage.classList.add('fade-in');
});

window.onload = () => {
    foodImage.style.display = 'none';
}