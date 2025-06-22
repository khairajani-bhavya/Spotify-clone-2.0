// src/utils/shazamAPI.js

const API_KEY = '1542503722msh5555f772f9d7a43p1b2fe6jsnfa80121ed732'; // ✅ Replace with your actual key (yours is valid)

const headers = {
  'X-RapidAPI-Key': API_KEY,
  'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
};

/**
 * Fetches top chart songs from Shazam.
 * @returns {Promise<Array>} List of top chart songs
 */
export const getTopCharts = async () => {
  try {
    const response = await fetch(
      'https://shazam.p.rapidapi.com/charts/track?locale=en-US&pageSize=12&startFrom=0',
      {
        method: 'GET',
        headers,
      }
    );

    const json = await response.json();

    if (!json.tracks) throw new Error("Tracks not found in response");

    return json.tracks.map((track) => ({
      title: track.title,
      artist: track.subtitle,
      image: track.images?.coverart || '',
      url: track.hub?.actions?.find(a => a.uri)?.uri || null, // Fallback to first URI
    }));
  } catch (error) {
    console.error('❌ Failed to fetch top charts:', error.message);
    return [];
  }
};

/**
 * Searches for songs using a query.
 * @param {string} query - Search term
 * @returns {Promise<Array>} List of matching songs
 */
export const searchSongs = async (query) => {
  try {
    const response = await fetch(
      `https://shazam.p.rapidapi.com/search?term=${encodeURIComponent(query)}&locale=en-US&offset=0&limit=10`,
      {
        method: 'GET',
        headers,
      }
    );

    const json = await response.json();

    if (!json.tracks?.hits) return [];

    return json.tracks.hits.map(({ track }) => ({
      title: track.title,
      artist: track.subtitle,
      image: track.images?.coverart || '',
      url: track.hub?.actions?.find(a => a.uri)?.uri || null,
    }));
  } catch (error) {
    console.error('❌ Search failed:', error.message);
    return [];
  }
};
