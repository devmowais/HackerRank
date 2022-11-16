#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>

using namespace std;

class Difference {
    private:
    vector<int> elements;
  
  	public:
  	int maximumDifference;

    //Main Code

Difference(vector<int> arr){
        elements = arr;
        sort(elements.begin(), elements.end());
    }

    void computeDifference(){
        
        maximumDifference = abs(elements[elements.size()-1] - elements[0]);
    }


}; // End of Difference class