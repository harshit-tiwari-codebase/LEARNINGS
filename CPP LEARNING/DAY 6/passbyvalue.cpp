#include <iostream>
using namespace std;
void  incrementPBV(int n){
n++;
}
void incrementPBR(int&n){
    n++;
}
int main() {

    int a = 10;
    incrementPBV(a);
    cout<<a<<endl;
    int b = 10;
    incrementPBR(b);
    cout<<b;
    return 0;
}