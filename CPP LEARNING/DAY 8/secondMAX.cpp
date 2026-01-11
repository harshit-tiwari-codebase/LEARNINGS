#include <iostream>
#include <climits>
#include <cmath>
#include <vector>
#include <algorithm>

using namespace std;

int main() {
    int arr[7] = {5,8,7,9,11,4,3};
    int ans = INT_MIN;
    int i;
    int secondMAX = INT_MIN;
    // first loop → max element
    for(i = 0; i < 7; i++){
        if(arr[i] > ans){
            ans = arr[i];
        }
    }

    // second loop → max except ans
    for(i = 0; i < 7; i++){
        if(arr[i] != ans){
            secondMAX = max(arr[i], secondMAX);
        }
    }
    
    cout << secondMAX;
    return 0;
}
