// api/dynamic-frame.js
export default function handler(req, res) {
  
    // Generate the HTML content with the dynamic target URL
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
          <title>Degen Price Frame</title>
          <meta property="fc:frame" content="vNext" />
          <meta property="fc:frame:image" content="https://i.imgur.com/q65Q2XN.png" />
          <meta property="fc:frame:button:1" content="View on OpenSea" />
          <meta property="fc:frame:button:1:action" content="link" />
          <meta property="fc:frame:button:1:target" content="${targetUrl}" />
          <script>
              function showSecondImage() {
                  var secondImage = document.getElementById('secondImage');
                  secondImage.style.display = 'block';
              }
          </script>
      </head>
      <body>
          <img id="secondImage" src="https://i.imgur.com/DkFXm8p.png" style="display: none;" />
          <!-- Button to show the second image -->
          <button onclick="showSecondImage()">Show Current Price</button>
      </body>
      </html>
    `;
  
    // Send the HTML content as the response
    res.status(200).send(htmlContent);
  }
  