class Address {
    String city;

    Address(String city) {
        this.city = city;
    }

}
class Student{
    int id;
    String name;
    Address A;
    Student(int id , String name , Address A){
        this.id = id;
        this .name = name;
        this.A = A;

    }
    void display(){
        System.out.println(id + " " + name + " " + A.city);
    }
}
public class Aggregation {

    public static void main(String[] args) {
     Address a1 = new Address("jhabua");

     Student s = new Student(1, "harshit", a1);
     s.display();
    }
}