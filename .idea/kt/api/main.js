const API_POSTS = "https://jsonplaceholder.typicode.com/posts";
const API_ALBUMS = "https://jsonplaceholder.typicode.com/albums";
const API_PHOTOS = "https://jsonplaceholder.typicode.com/photos";

const apiName = document.querySelector(".api-name");
const listTitle = document.querySelector(".list-title");
const btnPost = document.getElementById("btn-post");
const btnPhoto = document.getElementById("btn-photo");
const btnAlbum = document.getElementById("btn-album");
const btns = document.querySelectorAll(".btn");

//Lấy data từ api
const getAll = async (url, type) => {
    try {
        let res = await axios.get(url);
        const data = res.data;
        let html = "";
        apiName.innerHTML = type;
        data.forEach((element) => {
            html += `<li>${element.title}</li>`;
        });
        listTitle.innerHTML = html;
    } catch (error) {
        console.log(error);
    }
};

//Sự kiện click nút post
btnPost.addEventListener("click", () => {
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });
    btnPost.classList.add("active");
    getAll(API_POSTS, "posts");
});

////Sự kiện click nút photo
btnPhoto.addEventListener("click", () => {
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });
    btnPhoto.classList.add("active");
    getAll(API_PHOTOS, "photos");
});
////Sự kiện click nút album
btnAlbum.addEventListener("click", () => {
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });
    btnAlbum.classList.add("active");
    getAll(API_ALBUMS, "albums");
});
//Mặc định hiện thị dữ liệu posts
getAll(API_POSTS, "posts");
