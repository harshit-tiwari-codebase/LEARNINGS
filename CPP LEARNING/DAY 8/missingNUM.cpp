#include <iostream>
#include <climits>
#include <cmath>
#include <vector>
#include <algorithm>

using namespace std;

int main() {
    int arr[6] = {1,2,4,5,6};
    int sum1 = 0;
    int sum2 = 0;
    for(int i = 0; i<5 ; i++){
        sum1 += arr[i];

    }
    for(int i = 1; i<=6 ; i++){
        sum2+=i;
    }

    int missNUM = sum2 - sum1;
    cout<<missNUM;
    return 0;
}