#include <iostream>
#include <climits>
#include <cmath>
#include <vector>
#include <algorithm>

using namespace std;

int main() {
    int arr[5] = {10,12,9,7,6};
    int key = 6;
    int index = -1;
    for (int i = 0; i<=5; i++)
    {
        if (arr[i] == key)
        {
            index = i;
            break;
        }
        
    }
    cout<<index;
    return 0;
}