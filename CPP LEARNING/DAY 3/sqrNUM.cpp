#include <iostream>
using namespace std;

int main()
{
    int n;
    cout << "enter the n";
    cin >> n;

    for (int i = 1; i <= n; i++)
    {
        cout << "the square is " << i * i<<endl;
    }

    return 0;
}