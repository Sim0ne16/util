import com.example.spikejunitmockito.BLL.Calculator;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

public class CalculatorTest {

    Calculator calculator;

    //Prima del test fai..
    @BeforeEach
    public void setup() {
        calculator = new Calculator();
    }

    @Test
    public void testMultiply(){
        //assert è una classe utile per scrivere test
        assertEquals(20,calculator.multiply(4,5));
        assertEquals(20,calculator.multiply(5,4));
        assertEquals(20,calculator.multiply(5,5));

    }




    @Test()
    public void testDivide(){
        //  Verifico che quel specifico errore si verifichi e lo gestisco direttamente nel metodo
        assertThrows(ArithmeticException.class, () -> {
            calculator.divide(5,0);
        });
    }




}
