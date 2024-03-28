import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FoodCart from '../../Shared/FoodCart/FoodCart';
import { useParams } from 'react-router-dom';

const OrderTabs = ({ salads, pizzas, soups, desserts, drinks }) => {

    const categories = ['salads', 'pizza', 'soups', 'desserts', 'drinks']
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    return (
        <div className='w-10/12 mx-auto my-12'>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className="text-center text-orange-400 font-semibold my-4 border-b ">
                    <Tab>SALADS</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUPS</Tab>
                    <Tab>DESSERTS</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>
                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-5'>
                        {
                            salads.map(item => <FoodCart
                                key={item._id}
                                item={item}
                            ></FoodCart>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-5'>
                        {
                            pizzas.map(item => <FoodCart
                                key={item._id}
                                item={item}
                            ></FoodCart>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-5'>
                        {
                            soups.map(item => <FoodCart
                                key={item._id}
                                item={item}
                            ></FoodCart>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-5'>
                        {
                            desserts.map(item => <FoodCart
                                key={item._id}
                                item={item}
                            ></FoodCart>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-5'>
                        {
                            drinks.map(item => <FoodCart
                                key={item._id}
                                item={item}
                            ></FoodCart>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default OrderTabs;