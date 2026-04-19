class st {
    int roll;
    int num;

    st(int r, int n) {
        int roll = r;
        int num = n;
    }
    st(st s) {
        int roll = s.roll;
        int num = s.num;
    }
  void display (){
    System.out.println(roll +  " got" + num + " marks");
  }

}

public class student {
    public static void main(String[] args) {
           st s1 = new st(101010,50);
            s1.display();
    }
}
