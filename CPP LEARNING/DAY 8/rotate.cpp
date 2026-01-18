#include <iostream>
#include <climits>
#include <cmath>
#include <vector>
#include <algorithm>

using namespace std;

int main() {
 int arr[7] = {2,3,7,9,8,6,4};
 int temp = arr[7];
  for(int i = 7;i>=1;i--){
    arr[i] = arr[i-1];
  }   
  arr[0] = temp;

  for(int i = 0; i<7; i++){
    cout<<arr[i]<<" ";
  }
  
    return 0;
}