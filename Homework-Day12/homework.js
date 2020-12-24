//1. Viết hàm tạo Weapon với các thuộc tính name, damage, ...
//2. Viết hàm tạo Player với các thuộc tính name, level, weapon, weapon object khởi tạo từ Weapon. Player có các methods: 
// - attack() tính và in ra màn hình lượng sát thương gây ra = weapon.damage * level 
// - changeWeapon() thay đổi weapon của Player
//3. Tạo một vài đối tượng từ Player và Weapon, gọi phương thức attack() trên các đối tượng đó

// 3 bài em gộp làm 1

function Weapon(name,damage) {
    this.name = name;
    this.damage = damage;
}

let code = new Weapon("Code", 999);
let keyboard = new Weapon("Keyboard", 666)
let mouse = new Weapon("Mouse", 333)

function Player(name, level, weapon) {
    this.name = name;
    this.level = level;
    this.weapon = weapon;
    this.attack = function() {
        console.log("Sát thương vật lý: " +(this.weapon.damage * this.level) + " damg")
    };
    this.changeWeapon = function (newWeapon) {
        this.weapon = newWeapon;
    }
}

let ba = new Player("TeacherBar", 69, code)
let tuan = new Player("StudenTuan",1, mouse)
let thao = new Player("StudentThao",1,keyboard)

// ba // check 
// ba.attack() check với weapon đầu khởi tạo 
// ba.changeWeapon(mouse)
// ba.attack() check với weapon thay đổi

//4. Tạo một object calculator, có các thuộc tính a, b là 2 số, và các phương thức:  
// a. get(a, b) tham số nhận vào là 2 số a, b
// b. add() trả về tổng a + b
// c. sub() trả về hiệu a - b
// d. div(), mul(), rem(), exp(), ... trả về kết quả phép tính tương ứng
// e. Làm thế nào để cho phép gọi hàm theo chuỗi VD cal.get(4,5).add(); 

function Calculator() {
    this.get = function() {
        let a = +prompt("Nhập vào số a"),
        b = +prompt("Nhập vào số b");
        this.a = a;
        this.b = b;
    };
    this.add = function() {
        console.log("Tổng = " + (this.a + this.b));
    };
    this.sub = function() {
        console.log("Hiệu = " + (this.a - this.b));
    };
    this.div = function() {
        console.log("Thương = " + (this.a / this.b));
    };
    this.mul = function() {
        console.log("Tích = " + this.a * this.b);
    };
    this.exp = function() {
        console.log("2.72^" + this.a + " = " + (2.72 ** this.a));
        console.log("2.72^" + this.b + " = " + (2.72 ** this.b));
    }
}
let cal = new Calculator(); 
// cal.get()
// cal.add()
// cal.exp()


//5. Viết hàm tạo Counter, có thuộc tính count, và các phương thức
// - count là tham số truyền vào, mặc định = 0
// - up() tăng count lên 1
// - down() giảm count 1
// - get() in ra count hiện tại
// - Làm thế nào để cho phép gọi hàm theo chuỗi VD counter.up().up().get().down().get()

function Counter(count=0) {
    this.count = count;
    this.up = function() {
        console.log("Count tăng 1: " + ++this.count);
    }
    this.down = function() {
        console.log("Count giảm 1: " + --this.count);
    }
    this.get = function() {
        console.log("Count hiện tại: " + this.count);
    }
}
let counter = new Counter();


//6. Viết hàm tạo Girl có các thuộc tính và phương thức tùy ý 
//7.  Viết hàm tạo Boy có các thuộc tính và phương thức tùy ý

function Person(name, age, occupations) {
    this.name = name;
    this.age = age;
    this.occupations = occupations;
    this.hobbies = function(){
        let a = prompt("nhập sở thích cho cô/ anh ấy ");
        this.hobbies = a;
    }
}
let ngoctrinh = new Person("Ngọc Trinh", 29, "Model")
let tuanhung = new Person("Tuấn Hưng", 35, "Singer")

