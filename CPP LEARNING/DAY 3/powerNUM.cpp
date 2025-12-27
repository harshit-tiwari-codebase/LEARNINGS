// calculate the power of number


#include<iostream>
using namespace std;

int main(){
    int ans =1;
    int num;
    cout<<"enter the number"<<endl;
    cin>>num;
    int power;
    cout<<"enter the power"<<endl;
    cin>>power;


   for (int i = 1; i <= power; i++)
   {
    ans = ans*num;
   }
   cout<<"power of digit "<<ans;
     return 0;
}