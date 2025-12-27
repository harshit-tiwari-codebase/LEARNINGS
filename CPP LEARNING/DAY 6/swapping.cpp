#include <iostream>
using namespace std;

void swap(int &m, int &n){
    int temp;
    temp = n;
    n = m;
    m = temp;
}
int main() {

    int a , b;
    cout<<"enter a:"<<endl;
    cin>>  a ;
    cout<<"enter b:"<<endl;
    cin>> b;

    swap(a,b);
    cout<<"swapped a is: "<<a<<endl;
    cout<<"swapped b is: "<<b<<endl;

    return 0;
}