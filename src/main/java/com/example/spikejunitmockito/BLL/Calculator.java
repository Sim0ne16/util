package com.example.spikejunitmockito.BLL;

public class Calculator {

    public int multiply(int a,int b){
        return a * b;
    }

    public int divide(int a,int b){
       try {
            return  a / b;
       }catch(ArithmeticException e) {
          throw new ArithmeticException("Division by 0");
       }
    }

}
