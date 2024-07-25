import { getUser } from "../api/AuthAPI";
import { useQuery } from "@tanstack/react-query";

export const useAuth = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    retry: false,
    refetchOnWindowFocus: false, // no hacer sobrecarga de pestañas
  });

  return { data, isError, isLoading };
};
