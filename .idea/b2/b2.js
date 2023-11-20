// Danh sách các sản phẩm có trong giỏ hàng
let products = [
    {
        name: "Iphone 13 Pro Max", // Tên sản phẩm
        price: 3000000, // Giá mỗi sản phẩm
        brand: "Apple", // Thương hiệu
        count: 2, // Số lượng sản phẩm trong giỏ hàng
    },
    {
        name: "Samsung Galaxy Z Fold3",
        price: 41000000,
        brand: "Samsung",
        count: 1,
    },
    {
        name: "IPhone 11",
        price: 15500000,
        brand: "Apple",
        count: 1,
    },
    {
        name: "OPPO Find X3 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 3,
    },
]

// 1. In ra thông tin các sản phẩm trong giỏ hàng theo cấu trúc sau
// Tên - Giá - Thương Hiệu - Số lượng
// Ví dụ : OPPO Find X3 Pro - 19500000 - OPPO - 3
products.forEach((product) => console.log(`${product.name} - ${product.price} - ${product.brand} - ${product.count}`));

// 2. Tính tổng tiền tất cả sản phẩm trong giỏ hàng
// Tổng tiền mỗi sản phẩm = price * count
let totalAmount = products.reduce((total, product) => total + (product.price * product.count), 0);
console.log(totalAmount);

// 3. Tìm các sản phẩm của thuơng hiệu "Apple"
let findByBrand = (arrProducts, brand) => arrProducts.filter(product => product.brand === brand);
console.log(findByBrand(products, "Apple"));

// 4. Tìm các sản phẩm có giá > 20000000
let findByPrice = (arrProducts, price) => arrProducts.filter(product => product.price > price)
console.log(findByPrice(products, 20000000));

// 5. Tìm các sản phẩm có chữ "pro" trong tên (Không phân biệt hoa thường)
let findByString = (arrProducts, s) => arrProducts.filter(product => product.name.toLocaleLowerCase().indexOf(s) !== -1);
console.log(findByString(products, "pro"));

// 6. Thêm 1 sản phẩm bất kỳ vào trong mảng product
let newProduct = {
    name: "Huawei P60 Pro",
    price: 100000,
    brand: "Huawei",
    count: 1
}
products.push(newProduct);

// 7. Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng
let removeBrand = (arrProducts, brand) => arrProducts.filter(product => product.brand !== brand)
products = removeBrand(products, "Samsung")

// 8. Sắp xếp giỏ hàng theo price tăng dần
products.sort((o1, o2) => o1.price - o2.price);

// 9. Sắp xếp giỏ hàng theo count giảm dần
products.sort((o1, o2) => o2.price - o1.price);

// 10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng
let randomInt =  (min, max) => Math.floor(Math.random() * (max - min) + min);
let index_1 = randomInt(0, products.length - 1);
let index_2 = randomInt(0, products.length - 1);
while (index_1 === index_2){
    index_2 = randomInt(0, products.length - 1);
}
let getRandomProduct_1 = products[index_1];
let getRandomProduct_2 = products[index_2];
console.log(getRandomProduct_1);
console.log(getRandomProduct_2);