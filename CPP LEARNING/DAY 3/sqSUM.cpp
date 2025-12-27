
#include <iostream>
using namespace std;

int main()
{
    int num;
    int sum = 0;
    cout << "enter the nth term";
    cin >> num;

    for (int i = 1; i <= num; i++)
    {

        sum = sum + i*i;
    }

cout<<"the sum of "<<num<<"nth term is "<<sum;

    return 0;
}