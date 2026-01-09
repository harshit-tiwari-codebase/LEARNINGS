#include <iostream>
#include <climits>
#include <cmath>
#include <vector>
#include <algorithm>

using namespace std;

int main() {
    int ans ;
    int base = 500;
    int arr[5] = {1,2,3,4,5};

    for (int i = 0; i < 5; i++)
    {
        ans = base + i*sizeof(arr[i]);
        cout<<ans<<endl;
    }
    
    return 0;
}