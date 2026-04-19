class ATM{
   private String AccHOlderNAME = "Harshit tiwari";
   private int AccNum = 45729582;

// public String AccHOlderNAME = "Harshit tiwari";
//    public int AccNum = 45729582;
   public double balance = 0;
   public void deposit(double amount){
    balance +=amount;
    System.out.println("$"+balance+"deposited in your account");
   } 
   public void credit (double amount){
    if (balance>=amount) {
         balance  -= amount;
          System.out.println("$"+amount+"is withdrawn from your account");
    }
   }
   public void displayBAL(){
    System.out.println("Your current balance is " + balance);
   }

}


public class p2 {
    public static void main(String[] args) {
        ATM a1 = new ATM();
        a1.deposit(50000);
        a1.credit(5000);
        a1.displayBAL();
    }
}
