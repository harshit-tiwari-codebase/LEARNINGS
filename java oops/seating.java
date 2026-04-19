class book {
    int total = 10;

       synchronized void seat_book(int seat) {
        if (total >= seat) {
            System.out.println("the seat is booked");
            total -= seat;
            System.out.println("total seat is left " + total);
        } else {
            System.out.println("seats not available");  // ✅ add kiya
        }
    }
}

class Moviebook extends Thread {
    static book b;

    int seats;

    public void run() {
        b.seat_book(seats);
    }
}

public class seating {
    public static void main(String[] args) {

        book a = new book();

        Moviebook.b = a;

        Moviebook m1 = new Moviebook();
        m1.seats = 4;
        m1.start();

        Moviebook m2 = new Moviebook();
        m2.seats = 12;
        m2.start();
    }
}