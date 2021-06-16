import axios from "axios";

import { useQuery } from "react-query";

const useProfiles = (originUrl, locationUrl, episodesUrls, requestId) =>
  useQuery(
    ["profiles", requestId],
    async () => {
      const origin = await axios.get(originUrl);
      const location = await axios.get(locationUrl);
      const episodesRequests = episodesUrls.map((url) => axios.get(url));
      const episodes = await Promise.allSettled(episodesRequests);
      return {
        origin: origin.data,
        location: location.data,
        episodes: episodes
          .filter((r) => r.status === "fulfilled")
          .map((r) => r.value.data.name),
      };
    },
    {
      enabled: !!requestId,
      refetchOnWindowFocus: false,
      retry: 3,
    }
  );

export default useProfiles;
