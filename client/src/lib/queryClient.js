import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey }) => {
        const res = await fetch(queryKey[0], {
          credentials: "include",
        });

        if (!res.ok) {
          if (res.status === 401) {
            window.location.href = "/login";
          }
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        return res.json();
      },
      staleTime: Infinity,
    },
  },
});

export { queryClient };

export async function apiRequest(url, options = {}) {
  const response = await fetch(url, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    if (response.status === 401) {
      window.location.href = "/login";
    }
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}