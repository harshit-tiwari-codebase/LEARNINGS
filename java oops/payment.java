abstract class Vehicle {

    abstract void start();
}

class Car extends Vehicle{
    void start(){
        System.out.println("car start");
    }
}
 class Bike extends Vehicle {
  void start(){
     System.out.println("bike start");
  }
    
}

class Service {
    void journey(Vehicle v){
        v.start();
    }
}



public class payment {
    public static void main(String[] args) {
       Service s1 = new Service();

       Vehicle c1 = new Car();

       s1.journey(c1);
    }
}
