#include<stdio.h>
#include<conio.h>
int main()
{
int n,i;
printf(“Enter the last number:”);
scanf(“%d”,&n);
i=1;
do  {
       if(i%2!=0)
       printf(“%d\n”,i);
     i++;
     }

while(i<=n);
getch();
return 0;
}

