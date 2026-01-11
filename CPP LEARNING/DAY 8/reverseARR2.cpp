#include <iostream>
#include <climits>
#include <cmath>
#include <vector>
#include <algorithm>

using namespace std;

int main() {
    int arr[7]= {5,8,7,9,11,4,3};
    int j = 6;
    int i = 0;
    while (i<j)
    {
        swap(arr[i],arr[j]);
        i++;
        j--;
    }
       for ( int i = 0; i < 7; i++)
       {
        cout<<arr[i]<< " ";
       }
       
    return 0;
}