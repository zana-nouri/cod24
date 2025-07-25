const slides = [
  {
    img: "/assets/image/slider/1.jpg",
    title: "خیلی راحت",
    text: "بسته‌ هاتو ارسال کن",
  },
  {
    img: "/assets/image/slider/2.jpg",
    title: "مدیریت هوشمند",
    text: "با یک پنل همه‌چیزو کنترل کن",
  },
  {
    img: "/assets/image/slider/3.jpg",
    title: "ارسال سریع و امن",
    text: "همکاری با بهترین شرکت‌های پستی",
  },
];

let current = 0;
const slide = document.getElementById("slide");
const title = document.getElementById("slide-title");
const text = document.getElementById("slide-text");

function showSlide(index) {
  slide.src = slides[index].img;
  title.textContent = slides[index].title;
  text.textContent = slides[index].text;
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

showSlide(current);
setInterval(nextSlide, 4000);
