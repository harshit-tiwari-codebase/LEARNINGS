#include <iostream>
using namespace std;

int main(){
    int arr[5];
    cout<<"take an input in array ";
    // input
    for(int i = 0; i < 5; i++){
        cin>> arr[i];
    }

    // output
    cout << "Array elements are: ";
    for(int i = 0; i < 5; i++){
        cout << arr[i] << " ";
    }

    return 0;
}
