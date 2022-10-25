package com.example.postgre.service;

import com.stripe.Stripe;
import com.stripe.model.Charge;
import com.stripe.model.Customer;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.HashMap;
import java.util.Map;

@Service
public class PaymentGatewayService {


    @PostConstruct
    public void init() {
        Stripe.apiKey = "sk_test_51LtEyLIFsTvZxqKPKjsZa4jZETbHS2yAfddKXdOOtFDJKgOyuRx0JFijTrIYZyJ6YUyQkTMlyysIwZRsFHqAKgHh00tNKoXUTM";
    }

    public Charge chargeNewCard(String token, Integer amount) throws Exception {
        Map<String, Object> chargeParams = new HashMap<String, Object>();
        chargeParams.put("amount", amount);
        chargeParams.put("currency", "LKR");
        chargeParams.put("source", token);
        Charge charge = Charge.create(chargeParams);
        return charge;
    }
}
