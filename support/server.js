const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/create-transaction', async (req, res) => {
  try {
    const response = await axios.post('https://api.gojekapi.com/v2/charge', {
      payment_type: 'gopay',
      transaction_details: {
        order_id: 'order-101',
        gross_amount: 10000
      },
      gopay: {
        enable_callback: true,
        callback_url: 'https://yourwebsite.com/callback'
      }
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': '107706242550'
    
      }
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.response.data);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});