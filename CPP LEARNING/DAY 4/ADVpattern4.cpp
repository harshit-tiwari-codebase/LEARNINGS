#include <iostream>
using namespace std;

int main() {

    int row,space;
    char alpha;
for(row=1;row<=5;row++){

    for(space=1;space<=5-row;space++){
        cout<<" ";
    
    }
    for(alpha='A';alpha<='A'+(row-1);alpha++){
        cout<<alpha;
    }
    cout<<endl;

}
    

    return 0;
}

//     A
//    AB
//   ABC
//  ABCD
// ABCDE