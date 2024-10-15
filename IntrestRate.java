import java.util.Scanner;
public class IntrestRate {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter principle amount : ");
        float Principle = in.nextFloat();
        System.out.println("Enter Rate of intrest : ");
        Float Rate = in.nextFloat();
        System.out.println("Enter Time period : ");
        Float Time = in.nextFloat();
        float SimpleIntrest = (Principle*Rate*Time)/100;
        System.out.println("principle amount : "+ Principle);
        System.out.println("rate of intrest : " + Rate);
        System.out.println("time period : " + Time);
        System.out.println("the simple intrest is : " + SimpleIntrest);


    }
}
