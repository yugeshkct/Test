const express = require("express");

require("dotenv").config();

const Encrypt = require("./sha512.js");
const app = express();
app.use(express.json());
app.use(express.static("public"));

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

app.post("/check", (req, res) => {
  if (req.body.items[0].protect == "true") {
    if (req.body.items[0].hash == Encrypt.encryptor(req.body.items[0].price)) {
      res.redirect(307, "/create-checkout-session");
    } else {
      res.json({ url: `${process.env.SERVER_URL}/attack.html` });
    }
  } else {
    res.redirect(307, "/create-checkout-session");
  }
});

app.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map((item) => {
        return {
          price_data: {
            currency: "inr",

            product_data: {
              name: item.name,
              description: `Rating : ${item.rating}`,
              images: [`${item.image}`],
            },
            unit_amount: item.price * 100,
          },
          quantity: 1,
        };
      }),

      success_url: `${process.env.SERVER_URL}/success.html`,
      cancel_url: `${process.env.SERVER_URL}/cancel.html`,
    });

    res.json({ url: session.url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running in ${PORT}`);
});
