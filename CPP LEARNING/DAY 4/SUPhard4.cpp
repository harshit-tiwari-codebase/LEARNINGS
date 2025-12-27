#include <iostream>
using namespace std;

int main() {

    int row,space,star;

    for(row=4;row>=1;row--){
        for(star=1;star<=row;star++){
            cout<<"*";
        }
        for(space=1;space<=8-2*row;space++){
            cout<<" ";

        }
        for(star=1;star<=row;star++){
            cout<<"*";
        }
        cout<<endl;

    }
    for(row=1;row<=4;row++){
        for(star=1;star<=row;star++){
            cout<<"*";
        }
        for(space=1;space<=8-2*row;space++){
            cout<<" ";

        }
        for(star=1;star<=row;star++){
            cout<<"*";
        }
        cout<<endl;

    }

    return 0;
}

// ********
// ***  ***
// **    **
// *      *
// *      *
// **    **
// ***  ***
// ********