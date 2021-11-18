
#include <iostream>
#include <conio.h>
using namespace std;
int main(){
   long int s,jam,menit,detik;
   cout<<"Masukan Detik = ";
   cin>>s;

   jam   =  s / 3600;
   menit = (s-(jam*3600)) / 60;
   detik = (s-(jam*3600)-(menit*60));
   cout<<s<<" detik = "<<jam<<" jam "<<menit<<" menit "<<detik<<" detik"<<endl;
   return 0;
}