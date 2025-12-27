// Armstrong number
#include <iostream>
#include<cmath>
using namespace std;

int power(int n){
    int i = 0;
    while (n != 0) {
        n = n / 10;
        i++;
    }
    return i;
}

void armstrong(int n, int digit){
    double ans = 0 ; int rem;
       // original number save
int org =n;
    while (n ) {
        rem = n % 10;
         n = n / 10;
        ans = ans + pow(rem, digit);
       
    }

    if (ans == org) 
        cout <<1;
     else 
        cout << 0;
    
}

int main() {
    int num;
    cout<<"enter the armstrong number";
    cin >> num;

    int x = power(num);
    armstrong(num, x);
    return 0;
}
