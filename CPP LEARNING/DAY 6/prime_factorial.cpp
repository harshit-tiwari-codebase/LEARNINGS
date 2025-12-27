#include <iostream>
using namespace std;

bool prime(int n)
{
    if (n <= 1)
    {
        return false;
    }

    for (int i = 2; i < n; i++)
    {
        if (n % i == 0)
        {
            return false; // divisible → not prime
        }
    }
    return true; // no divisor found → prime
}
int factorial(int n)
{
    int ans = 1;
    for (int i = 1; i <= n; i++)
    {
        ans = ans * i; // continuous multiply krke hume factorial milta he
    }
    return ans;
}

int main()
{
    int a, b;
    cout<<"enter a & b";
    cin >> a >> b;
    // calling function for prime number
    cout << prime(a) << endl;
    cout << prime(b) << endl;
    cout << prime(a - b) << endl;
    // calling the function for the factorial
    cout << factorial(a) << endl;
    cout << factorial(b) << endl;
    cout << factorial(a - b);

    return 0;
}
