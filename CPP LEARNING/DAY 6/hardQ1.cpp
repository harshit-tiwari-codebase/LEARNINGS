// convert 'a' to 'A'
#include <iostream>
using namespace std;

char converter(char name)
{
    char result = name - 'a' + 'A';
    return result;
}
int main()
{
    char input;
    cout << "enter the small charecter to convert into the capital ";
    cin >> input;
    cout << endl;
    cout << "the converted output is " << converter(input);

    return 0;
}