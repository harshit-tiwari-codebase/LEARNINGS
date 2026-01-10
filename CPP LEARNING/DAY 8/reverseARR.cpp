#include <iostream>
using namespace std;

int main() {
    int arr[5] = {1, 2, 3, 4, 5};
    
    int temp[5];
    int i = 4;
    int j = 0;
    while (i>=0)
    {
       temp[j] =  arr[i];
       j++;
       i--;
    }
    
    for ( i = 0; i <=4; i++)
    {
      cout<<temp[i]<<" ";
    }
    
    return 0;
}
