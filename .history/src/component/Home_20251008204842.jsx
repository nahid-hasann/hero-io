import React from 'react';
import Banner from './Banner';
import {  useLoaderData } from 'react-router-dom';

const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timmer = setTimeout(() => {
            setLoading(false)
        }, 800);
        return () => clearTimeout(timmer);
    }, [])

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Oval
                    visible={true}
                    height={60}
                    width={60}
                    color="#8b5cf6"
                    secondaryColor="#c4b5fd"
                    ariaLabel="loading"
                />
            </div>
        );
    }

const Home = () => {
    const datas = useLoaderData();
    // console.log(datas);
    return (
        <div>
            <Banner datas={datas} ></Banner>
        </div>
    );
};

export default Home;