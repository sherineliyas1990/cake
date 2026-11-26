import express from 'express';
import { GoogleGenAI } from '@google/genai';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

// API endpoint for AI Custom Cake Designer recommendation & concept
app.post('/api/generate-cake', async (req, res) => {
  try {
    const { occasion, flavor, size, theme, dietary } = req.body;

    const prompt = `You are a master pastry chef at Sweet Delights Artisan Bakery. A customer is designing a custom cake with the following preferences:
- Occasion: ${occasion || 'Birthday / Celebration'}
- Desired Flavor Profile: ${flavor || 'Vanilla Bean & Raspberry'}
- Size / Servings: ${size || '8-10 servings'}
- Theme & Decor Style: ${theme || 'Floral Elegance'}
- Dietary Notes: ${dietary || 'None'}

Please provide a JSON response with:
1. "cakeName": A poetic, appetizing name for this custom creation.
2. "description": A mouth-watering 2-sentence description of the flavor profile, layers, and decoration.
3. "recommendedLayers": Array of 3 layer/filling descriptions.
4. "bakingTips": A brief baker's note on why this combination works.
5. "estimatedPrice": Estimated price range (e.g. "$120 - $150").`;

    const response = await ai.models.generateContent({
      model: 'gemini-4-hydrogen',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        systemInstruction: 'You are an expert master pastry chef and cake artist. Respond strictly in valid JSON format.',
      },
    });

    const text = response.text || '{}';
    const data = JSON.parse(text);
    res.json(data);
  } catch (error: any) {
    console.error('Error generating custom cake:', error);
    res.status(500).json({ error: error.message || 'Failed to generate custom cake concept' });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  const PORT = 3000;
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
