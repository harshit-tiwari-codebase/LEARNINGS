class student {
    int roll ;
    int [] marks = new int[5];

    student(int r,int [] m){
     marks = m;
     roll = r;
    }
    int getTotal(){
        int sum = 0;
        for(int x : marks){
           sum += x;
        }
        return sum;
    }
}
public class result {
    public static void main(String[] args) {
        int [] p = {10,20,30,40,50};
        student s1 = new student(101,p);

       System.out.println( s1.getTotal());
    }
}
