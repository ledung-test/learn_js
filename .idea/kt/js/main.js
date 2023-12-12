//B1.
// function truyền vào mảng các chuỗi có độ dài bất kỳ. Kết quả trả về là 1 mảng các chuỗi có độ dài lớn nhất
function getStringHasMaxLength(arr){
    const maxLength = arr.reduce((max, str) => {
            return str.length > max.length ? str : max;
        }
    );
    const newArr = arr.filter((str) => str.length === maxLength.length);
    return newArr;
}

console.log(getStringHasMaxLength(['aba', 'aa', 'ad', 'c', 'vcd']));

//B2.
users = [
    {
        name: "Bùi Công Sơn",
        age: 30,
        isStatus: true
    },
    {
        name: "Nguyễn Thu Hằng",
        age: 27,
        isStatus: false
    },
    {
        name: "Phạm Văn Dũng",
        age: 20,
        isStatus: false
    }
]
// Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age > 25 và isStatus = true
const getUsers = (arr) => {
    return arr.filter((user) => user.age > 25 && user.isStatus === true);
}
console.log(getUsers(users));
// Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age tăng dần
const sortUsers = (arr) => {
    return arr.sort((o1, o2) => o1.age - o2.age);
}
console.log(sortUsers(users));

//B3.
const arr = ["one", "two", "three", "one", "one", "three"];
//Viết function truyền vào 1 mảng các chuỗi. Trả về Object hiển thị xem mỗi phần tử trong mảng xuất hiện bao nhiêu lần
const frequency = (arr) => {
    const obj = {};
    arr.forEach(element => {
        if (obj[element]){
            obj[element]++;
        }else {
            obj[element] = 1;
        }
    })
    return obj
}
console.log(frequency(arr));