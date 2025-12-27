#include <iostream>
using namespace std;

int main() {
int row,space,num;
    for (row = 1;row<=5;row++){
      for(space=1;space<=5-row;space++){
        cout<<" ";
      }
      for(num=row;num>=1;num--){
        cout<<num;
      }
      cout<<endl;


    }

    return 0;
}
//     1
//    21
//   321
//  4321
// 54321