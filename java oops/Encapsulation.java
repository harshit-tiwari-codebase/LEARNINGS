class Employee{
    private String id ;
    private String Name;
    void setter(String i , String N){
        id = i;
        Name = N;

    }
    void Getter(){
        System.out.println("employee name is " + Name + " Employee Id is " + id);
    }
}

public class Encapsulation {
    public static void main(String[] args) {
        Employee E1 = new Employee();
        E1.setter("loada1234", "harshit");
        E1.Getter();
    }
}
