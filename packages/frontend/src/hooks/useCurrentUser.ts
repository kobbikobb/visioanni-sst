import { useQuery, queryOptions } from '@tanstack/react-query';

const getCurrentUser = async () => {
    return null;
};

export const userQueryOptions = queryOptions({
    queryKey: ['get-current-user'],
    queryFn: getCurrentUser,
    staleTime: Infinity
});

export const useCurrentUser = () => {
    const { data: user, isPending: isUserPending } = useQuery(userQueryOptions);
    return { user, isUserPending };
};
