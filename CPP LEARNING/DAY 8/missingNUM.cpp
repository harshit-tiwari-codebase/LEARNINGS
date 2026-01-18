#include <iostream>
#include <climits>
#include <cmath>
#include <vector>
#include <algorithm>

using namespace std;

int main() {
 int sum = 0;
 int arr[7] = {1,2,3,4,6,7};
 for (int i = 0; i < 6; i++)
 {
    sum+=arr[i];
 }

 int total = 0;
 for (int i = 1; i <= 7; i++)
 {
   total+=i;
 }
 

 int miss = total - sum;
 cout<<miss;
    
    return 0;
}