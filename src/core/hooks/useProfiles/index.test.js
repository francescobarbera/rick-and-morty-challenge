import { renderHook } from "@testing-library/react-hooks";
import nock from "nock";
import { QueryClient, QueryClientProvider } from "react-query";

import config from "../../../config";
import useProfiles from "./";

describe("useProfiles hook", () => {
  it("correctly calls the profiles api", async () => {
    const queryClient = new QueryClient();
    const wrapper = ({ children }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const scope = nock(config.apiBasePath).get("/character").reply(200, "", {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Authorization,X-App-Name,X-App-Version,X-Request-ID,X-Correlation-ID",
    });

    const { result, waitFor } = renderHook(() => useProfiles(), { wrapper });

    await waitFor(() => {
      return result.current.isSuccess;
    });

    expect(scope.isDone()).toBe(true);
  });
});
