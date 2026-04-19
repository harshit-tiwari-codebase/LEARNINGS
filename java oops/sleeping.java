
class test extends Thread{
   public void run (){
        for(int i = 1; i<=5;i++){
            System.out.println(i);
            try{
                Thread.sleep(1000);
            }
            catch(Exception e){
                System.out.println(e);
            }
        }
    }
}
public class sleeping {
    public static void main(String[] args) {
        test t = new test();

        t.start();
    }
}
