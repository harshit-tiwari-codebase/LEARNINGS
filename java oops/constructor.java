 class  Student {
    int roll;
    String name ;



    Student(int r , String s){
        roll = r;
        name = s;
        System.out.println("i am constructor and student info is " + roll+ " and " + name+ "");
    }
    }  
    



public class constructor {
    public static void main(String[] args) {
        Student s1 = new Student(99, "harshit");
    }
}
