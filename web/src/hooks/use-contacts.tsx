import { useQuery } from "@tanstack/react-query";
import { getContacts } from "../http/get-contacts";

export const useContactsQuery = (contactList: Array<string>) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["contacts"],
    queryFn: getContacts,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    retry: false,
  });

  return { data, isLoading, isError };
};
