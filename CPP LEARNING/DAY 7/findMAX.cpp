#include <iostream>
#include <climits>   // for INT_MAX
using namespace std;

int main(){
    int arr[5] = {1,5,7,9,2};
    int ans = INT_MIN;

    for(int i = 0; i < 5; i++){
        if(arr[i] > ans){
            ans = arr[i];
        }
    }

    cout << "The max element is " << ans;
    return 0;
}
