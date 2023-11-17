//Viết function truyền vào 1 số nguyên dường. Tính giai thừa của số đó
const calculateFactorial = n => {
    if (n == 1) return 1;
    return n * calculateFactorial(n - 1);
}
console.log(calculateFactorial(5));

//Viết function truyền vào 1 chuỗi. In ra chuỗi đảo ngược của chuỗi đó
const reverseString = s => {
    let reverseS = "";
    for (let i = s.length - 1; i >= 0; i--) {
        reverseS = reverseS + s[i];
    }
    return reverseS;
}
console.log(reverseString("hello"));
//Viết function truyền vào mã quốc gia. Trả về message có ý nghĩa là “Xin chào”, tương ứng với mã quốc gia được truyền vào
const translate = s => {
    switch (s){
        case "VN":
            return "Xin chào";
        case "EN":
            return "Hello";
        case "FR":
            return "Salut";
        default:
            return "Không tìm thấy";
    }
}
console.log(translate("VN"));
//Cho function truyền vào 1 chuỗi dài hơn 15 ký tự. Viết 1 function cắt chuỗi, lấy ra 10 ký tự đầu tiên và thêm vào dấu “…” ở cuối chuỗi.
const subString = s => s.substring(0, 10) + "...";
console.log(subString("xinchaocacbandenvoiTechmaster"));