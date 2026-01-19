#include <iostream>
#include <climits>
#include <cmath>
#include <vector>
#include <algorithm>

using namespace std;

int main() {
    int arr[6]={1,2,3,4,5,6};
    int even = 0;
    int odd = 0;
    for(int i =0; i<=5;i++){
        if (arr[i]%2 == 0)
        {
            even++;
        }
        else{
            odd++;
        }
        
    }  
    cout<<"even is "<<even<<" and odd is "<<odd;

    return 0;
}