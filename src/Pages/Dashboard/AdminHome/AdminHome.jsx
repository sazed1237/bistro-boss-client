import React from 'react';
import { useQuery } from "react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaBook, FaBookOpen, FaCar, FaCarSide, FaTractor, FaUser, FaUsers, FaWallet } from "react-icons/fa";
import Loading from "../../Shared/Loading/Loading";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Sector, ResponsiveContainer, Legend } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink',];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'pink'];

const AdminHome = () => {

    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: stats = {}, isLoading } = useQuery({
        queryKey: ['stats', 'admin-stats'],
        queryFn: async () => {
            if (isLoading) {
                return <Loading></Loading>
            }
            // console.log('check to here it')
            const res = await axiosSecure.get('admin-stats')
            console.log(res.data)
            return res.data;
        }
    })

    const { data: chartData = [] } = useQuery({
        queryKey: ['order-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/order-stats');
            return res.data;
        }
    })
    console.log(chartData)
    // console.log(stats)

    // barChart 
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };


    // custom PieChart 
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const pieChartData = chartData.map(data => {
        return { name: data.category, value: data.revenue }
    })

    return (
        <section>
            <h2 className="text-2xl py-4 font-medium">Hi, Welcome Back, <br /> <span className="text-purple-500 text-3xl">{user?.displayName} </span></h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 bg-base-200 border-none ">

                <div className="stat bg-purple-400 text-white rounded ">
                    <div className="stat-figure text-secondary">
                        <FaWallet className="text-3xl text-white "></FaWallet>
                    </div>
                    <div className="stat-title">Revenue</div>
                    <div className="stat-value">${stats.revenue}</div>
                    {/* <div className="stat-desc">Jan 1st - Feb 1st</div> */}
                </div>

                <div className="stat bg-yellow-500 text-white rounded ">
                    <div className="stat-figure text-secondary">
                        <FaUsers className="text-4xl text-white"></FaUsers>
                    </div>
                    <div className="stat-title">Users</div>
                    <div className="stat-value">{stats.users}</div>
                    {/* <div className="stat-desc">↗︎ 400 (22%)</div> */}
                </div>

                <div className="stat bg-green-500 text-white rounded ">
                    <div className="stat-figure text-secondary">
                        <FaUser className="text-3xl text-white"></FaUser>
                    </div>
                    <div className="stat-title">Menu Items</div>
                    <div className="stat-value">{stats.menuItems}</div>
                    {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
                </div>

                <div className="stat bg-sky-400 text-white rounded ">
                    <div className="stat-figure text-secondary">
                        <FaCarSide className="text-3xl text-white"></FaCarSide>
                    </div>
                    <div className="stat-title">Orders</div>
                    <div className="stat-value">{stats.orders}</div>
                    {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
                </div>

            </div>

            <div className='md:flex'>
                {/* for barChart */}
                <div >
                    <BarChart
                        width={500}
                        height={300}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        className='mt-14'
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
                {/* for PieChart */}
                <div >
                    <PieChart width={400} height={400}>
                        <Pie
                            data={pieChartData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {pieChartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend></Legend>
                    </PieChart>
                </div>

            </div>

        </section>
    );
};

export default AdminHome;