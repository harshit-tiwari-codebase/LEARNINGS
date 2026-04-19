import java.lang.*;
class test implements Runnable{
   public void run(){
    System.out.println("run method");
   }
}


public class runna {
   public static void main(String[] args) {
     test t = new test();
    Thread th = new Thread(t);
    th.start();
   }
}
