#include <iostream>
using namespace std;

int main() {

    int num;
    cout<<"enter the binary";
    cin>>num;
    int rem , ans=0 , mul=1;

    while (num>0)
    {
        rem = num%10;
        num=num/10;
        ans = ans + rem*mul;
        mul = mul*2;
    }
    
cout<<endl<<ans;
    return 0;
}