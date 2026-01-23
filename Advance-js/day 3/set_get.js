class User {
    constructor() {
        this._age = 12;   // private-like property
    }

    // SETTER → value set / validate karne ke liye
    set age(val) {
        if (val < 0) {
            console.error("Bhaiya, age zero se choti nahi ho sakti");
        } else {
            this._age = val;
        }
    }

    // GETTER → value lene ke liye
    get age() {
        return this._age;
    }
}

// object creation
let u1 = new User();

// ❌ invalid value
u1.age = -1;

// ✅ valid value
u1.age = 21;

// get value
console.log(u1.age); // 21
