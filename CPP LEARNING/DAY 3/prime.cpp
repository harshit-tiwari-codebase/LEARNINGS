#include <iostream>
using namespace std;

int main()
{
    int num;
    cout << "Enter the number to check: ";
    cin >> num;

    bool isPrime = true; // assume number is prime

    if (num < 2)
    {
        isPrime = false;
    }

    for (int i = 2; i * i <= num; i++) // optimized loop
    {
        if (num % i == 0)
        {
            isPrime = false;
            break; // no need to check further
        }
    }

    if (isPrime)
        cout << "Prime number";
    else
        cout << "Not prime";

    return 0;
};
