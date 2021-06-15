import axios from "axios";
import { useQuery } from "react-query";

import config from "../../../config";

const useProfiles = () =>
  useQuery(
    ["profiles"],
    async () => {
      const { data } = await axios.get(`${config.apiBasePath}/character`);
      return data;
    },
    {
      enabled: true,
      refetchOnWindowFocus: false,
      retry: 3,
    }
  );

export default useProfiles;
