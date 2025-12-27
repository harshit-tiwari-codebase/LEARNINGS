
#include <iostream>
using namespace std;

int main()
{
    int num;
    int ans = 1;
    cout << "enter the  term";
    cin >> num;

    for (int i = num; i >= 1; i--)
    {

        ans = ans * i;
    }

cout<<"the factorial of "<<num<<" is "<<ans;

    return 0;
}