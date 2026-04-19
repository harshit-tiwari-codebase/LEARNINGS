class ConstructorDemo {

    // Constructor 1
    ConstructorDemo(int a, String b) {
        System.out.println("I am constructor 1");
    }

    // Constructor 2 (order changed)
    ConstructorDemo(String b, int a) {
        System.out.println("I am constructor 2");
    }
}

public class ConstructorOverloading {
    public static void main(String[] args) {

        ConstructorDemo s1 = new ConstructorDemo("harshit", 1);
        ConstructorDemo s2 = new ConstructorDemo(1, "harshit");

    }
}