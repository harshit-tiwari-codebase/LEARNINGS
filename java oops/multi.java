class test extends Thread{
    public void run(){
        for (int i = 0; i < 5; i++) {
            System.out.println(i);
        }
    }
}
class best extends Thread{
    public void run(){
        for (char i = 'a'; i < 'e'; i++) {
            System.out.println(i);
        }
    }
}


public class multi {
    public static void main(String[] args) {
        test t1 = new test();
        best b1 = new best();

        t1.start();
        b1.start();
    }
}
