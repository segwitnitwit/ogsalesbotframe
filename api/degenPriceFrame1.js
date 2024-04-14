// api/dynamic-frame.js
export default function handler(req, res) {
    // Generate the HTML content with the dynamic target URL
    const htmlContent = `
          <!DOCTYPE html>
          <html>
          <head>
              <title>Dynamic Frame</title>
              <meta property="fc:frame" content="vNext" />
              <meta property="fc:frame:image" content="https://i.imgur.com/uFSOCL6.png" />
              <meta property="fc:frame:image:aspect_ratio" content="1:1" /> <!-- Adjust aspect ratio here -->
              <meta name="fc:frame:post_url" content="https://og-sales-bot-frame.vercel.app/api/degenPriceFrame2" />
              <meta name="fc:frame:button:1" content="View Price" />
          </head>
          <body>
              <!-- No content needed in the body -->
          </body>
          </html>
        `;
  
    // Send the HTML content as the response
    res.status(200).send(htmlContent);
  }
  