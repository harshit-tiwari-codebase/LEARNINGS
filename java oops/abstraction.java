abstract class Vehicle {
    int tyres;
    abstract void start();
    
}
class Car extends Vehicle {
    int tyres = 4;

    void start(){
        System.out.println("it starts with key " + "it has "+tyres+ " tyres");
    }
    
}
class bike extends Vehicle {
    int tyres = 2;

    void start(){
        System.out.println("it starts with kick " + "it has "+tyres+ " tyres");
    }
    
}
public class abstraction {
    public static void main(String[] args) {
        Vehicle v1 = new Car();
        Vehicle v2 = new bike();
        v1.start();
        v2.start();
        // Vehicle v3 = new Vehicle();

    }
}
