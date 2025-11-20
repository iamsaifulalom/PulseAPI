// fn take_own(name: &mut String){
//     name.push_str(" Alom");
//     println!("{} is a bad programmer" ,name);
// }

// fn main() {
//    let mut name = String::from("Saiful");
//    let age = 21;
//    take_own(&mut name);
//    println!("{} is {} years old" ,name, age);
// }


struct User {
    name: String,
    age: u32,
}

impl User {
    fn say(&self) {
        println!("Hi, my name is {}, I am {} years old", self.name , self.age);
    }
}

fn main() {
    let u = User { name: "Saiful".to_string(), age: 22 };
    u.say(); // ✅ calls the method
    println!("{}", u.name); // ✅ still usable
}

