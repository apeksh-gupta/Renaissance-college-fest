

long arrayManipulation(int n, vector<vector<int>> queries) {

  vector<long> arr(n,0)

  for(int i=0 ; i<q ; i++){

    int leftIndex = queries[i][0];
    int rightIndex = queries[i][1];
    int value = queries[i][2];

    for(int j=leftIndex ; j<=rightIndex ; j++){
      arr[j] = arr[j] + value 
    }
  }
  return *maximum_element(arr.begin() , arr.end())


}
