#include<iostream>
using namespace std;

int check_prime_number(int n){
    int flag = 1;
    if (n <2) return flag = 0;
    int i = 2;
    while(i <n){
        if( n%i==0 ) {
            flag = 0;
            break;
        }
        i++;
    }
    return flag;
}

 int main(){
 	int m;
	cin >> m;
	while (m--){ 	
 	int n;
 	int flag2=0;
 	cin>>n;
 	int arr[n];
 	int i=0;
 	while(i<n){
	 	cin>>arr[i];
	 	i++;
	}
 	int k=0;
 	while(k<n){
	 if(check_prime_number(arr[k])==1){
		 cout<<arr[k]<<" ";
		 flag2=1;
		 }
	 	k++;
	 }
	 if(flag2==0){
	 cout<<-1;
	 }
	}
}