#include <iostream>
using namespace std;

int main() {
int row,space,num;
    for (row = 1;row<=5;row++){
      for(space=1;space<=5-row;space++){
        cout<<" ";
      }
      for(num=1;num<=row;num++){
        cout<<num;
      }
      cout<<endl;


    }

    return 0;
}

//     1
//    12
//   123
//  1234
// 12345