#include <iostream>
#include <climits>
#include <cmath>
#include <vector>
#include <algorithm>

using namespace std;

int main() {
    int arr[9] = {9,7,6,1,2,5,3,9,4};
    
    for(int i = 0; i<9;i++){
        int index = i;
      for(int j = i+1 ; j<9 ; j++){
          if (arr[index]>arr[j])
        {
            index = j;
        }
      }
        swap(arr[index],arr[i]);
    }

    for (int i = 0; i < 9; i++)
    {
        cout<<arr[i]<<" ";

    }
    
    return 0;
}