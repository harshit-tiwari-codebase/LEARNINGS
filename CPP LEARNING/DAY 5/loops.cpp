#include <iostream>
using namespace std;

int main() {

    int i=1;
    while (i<=10)
    {
        if (i==4)
        {
            break;
        }
        if (i==5)
        {
            continue;
        }

        cout<<i<<endl;
        i++;
        
        
    }
    

    return 0;
}