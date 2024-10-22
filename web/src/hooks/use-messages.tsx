import { useQuery } from "@tanstack/react-query";
import { getMessages } from "../http/get-messages";

export const useMessagesQuery = (contactId: string) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["contacts", contactId],
    queryFn: () => getMessages(contactId),
    enabled: !!contactId, 
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    retry: false,
  });

  return { data, isLoading, isError };
};
