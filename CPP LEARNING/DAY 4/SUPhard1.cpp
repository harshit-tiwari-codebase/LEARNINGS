#include <iostream>
using namespace std;

int main() {
int row,space,star;
    for (row = 1;row<=5;row++){
      for(space=1;space<=5-row;space++){
        cout<<" ";
      }
      for(star=1;star<=2*row - 1;star++){
        cout<<"*";
      }
      cout<<endl;


    }

    return 0;
}

//     *
//    ***
//   *****
//  *******
// *********