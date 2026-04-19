


 class Animal {

    String color ;
    int legs;
    
    // void set(String c , int laa){
    //      color = c;
    //      legs = laa;
    // }

    Animal(String s , int l){
        color = s ;
        legs = l;
    }
    void display(){
        System.out.println("dog color is " + color + " and dog has 4 legs " );
    }
}


public class object {
    public static void main(String[] args){
        System.out.println("hello");
        Animal buzzo = new Animal("brown" , 4);
        // buzzo.color = "black";
        // buzzo.legs = 4;
        
        // buzzo.set("red", 10);
        buzzo.display();
    }
    
}