// total bishop moves 
#include <iostream>
#include<cmath>
using namespace std;

int main() {

    int A, B;

    cin>>A>>B;
    int total = 0;

    //a direction
    total+=min(8-A,8-B);
    //b direction
    total+=min(A-1,8-B);
    //c direction
    total+=min(A-1,B-1);
    //d direction
    total+=min(8-A,B-1);

    cout<<"the total bishop moves is "<<total;
    return 0;
}