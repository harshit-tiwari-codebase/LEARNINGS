#include <iostream>
using namespace std;
int sum(int a , int b){
    int result = a+b;
    return result; 
}
int main() {
    int x,y;
    cout<<"enter both a&b:";
    cin>>x>>y;

    cout<<"sum of two numbers are " <<sum(x,y);
    

    return 0;
}