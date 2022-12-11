import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID JqoL38lhnul8W0GjmxP3AJhUsvs03IsdqSAWXar1OiM'
    },
    params: {
      query: term
    }
  })

  return response.data.results;
}

export default searchImages;