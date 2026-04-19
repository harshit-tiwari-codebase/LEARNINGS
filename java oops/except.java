class Myclass{
   public void divide(){
     try{
        int a = 1;
        int b = 0;
        int c ;
        c = a/b;

    }
    catch(Exception e){
            throw new ArithmeticException("lundke 1 se 0 divide tera baap krta ehe ");
    }
   }
}

public class except {
    public static void main(String[] args) {
        Myclass m = new Myclass();
        m.divide();

    }
}
