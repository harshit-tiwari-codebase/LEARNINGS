class A {
    int a = 10;
    

}

class B extends A {
    int a = 20;
    void show (int x){
        System.out.println(x+" this is of function instance");
        System.out.println(this.a+" this is of current instance");
        System.out.println(super.a+" this is of parent instance");
    }
}

public class ps2 {
   public static void main(String[] args) {
     B obj1 = new B();
      obj1.show(10);
   }
}
