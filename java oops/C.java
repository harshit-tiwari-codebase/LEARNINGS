// Explain how the this keyword is used to differentiate between instance variables and
// local variables within a method. Consider the following code
class M
{
 private String name;
 public M (String name)
{
 this.name = name;
 }
 public void printLength() {
System.out.println("Length: " + name.length());
 }
}
public class C {
 public static void main(String[] args) {
 M obj = new M("harshit");
 obj.printLength();
 }
}
