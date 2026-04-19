class printer {
   void print(String dox){
    System.out.println(dox+" is printing");
   }
}

class work{
    void Officework (){
        printer p1 = new printer();
        p1.print("java module");

        System.out.println("the work is completed");
    }
}


public class office {
    public static void main(String[] args) {
        work w1 = new work();
        w1.Officework();
    }
}
