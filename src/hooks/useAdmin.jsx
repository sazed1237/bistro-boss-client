
import Loading from '../Pages/Shared/Loading/Loading';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from 'react-query';

const useAdmin = () => {

    const { user, loading } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !loading,
        queryFn: async () => {
            if (isAdminLoading) {
                return <Loading></Loading>
            }
            console.log('asking for login ', user)
            const res = await axiosSecure.get(`/users/admin/${user.email}`);
            console.log(res.data)
            return res.data?.admin
        }
    })

    return [isAdmin, isAdminLoading]
};

export default useAdmin;