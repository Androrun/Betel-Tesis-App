import 'dotenv/config';
import ngrok from 'ngrok';

(async function() {
  try {
    // Inicia ngrok para la API
    const apiUrl = await ngrok.connect({
      proto: 'http',
      addr: 5000,
      authtoken: '2kDNvnEpwYwOzJcFpcAlhF4LJl8_4AATbBm1ucrNJVuV7oufu'
    });
    console.log(`API is publicly accessible at: ${apiUrl}`);

    // Inicia ngrok para el frontend
    const frontendUrl = await ngrok.connect({
      proto: 'http',
      addr: 3000,
      authtoken: '2kDNvnEpwYwOzJcFpcAlhF4LJl8_4AATbBm1ucrNJVuV7oufu'
    });
    console.log(`Frontend is publicly accessible at: ${frontendUrl}`);
  } catch (err) {
    console.error('Error starting ngrok:', err);
  }
})();

