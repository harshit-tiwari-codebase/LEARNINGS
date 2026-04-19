class demo {
    static{
        System.out.println("hlo i am loaded and i am static block");
    }
}

public class staticBlock {

    public static void main(String[] args) {
           demo d = new demo();
    }
}