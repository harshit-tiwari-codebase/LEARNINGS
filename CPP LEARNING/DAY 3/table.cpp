#include<iostream>
using namespace std;

int main(){
    int num;;
    cout<<"enter the number ";
    cin>>num;
    cout<<"the table of "<<num<<" is";
   for (int i = 1; i <= 10; i++)
   {
    int table = num*i;
   
   cout<<table<<endl;
   }
   
   
     return 0;
}