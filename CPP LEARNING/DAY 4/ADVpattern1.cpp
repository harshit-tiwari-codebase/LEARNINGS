#include <iostream>
using namespace std;

int main() {
int row,space,star;
    for (row = 1;row<=5;row++){
      for(space=1;space<=5-row;space++){
        cout<<" ";
      }
      for(star=1;star<=row;star++){
        cout<<"*";
      }
      cout<<endl;


    }

    return 0;
}

//     *
//    **
//   ***
//  ****
// *****