
class dhaga extends Thread {
  public void run() {
    int sum = 0;
    for (int i = 0; i <= 10; i++) {
      sum += i;
    }
    System.out.println(sum);
  }
}

public class threading {
  public static void main(String[] args) {
    dhaga d1 = new dhaga();
    d1.start();
  }
}
