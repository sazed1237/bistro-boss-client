import { Helmet } from 'react-helmet-async';
import CoverBanner from '../../Shared/CoverBanner/CoverBanner';
import menuBanner from '../../../assets/menu/banner3.jpg';
import MenuCategory from '../MenuCategory/MenuCategory';
import dessertBg from '../../../assets/menu/dessertBg.jpeg';
import pizzaBg from '../../../assets/menu/pizza-bg.jpg';
import soupBG from '../../../assets/menu/soup-bg.jpg';
import saladBG from '../../../assets/menu/salad-bg.jpg';
import UseMenu from '../../../hooks/UseMenu';
import SectionsTitle from '../../../components/SectionsTitle/SectionsTitle';

const Menu = () => {
    // use custom hooks
    const [menuItems, loading] = UseMenu()
    // filter by category 
    const offered = menuItems.filter(item => item.category === "offered")
    const dessert = menuItems.filter(item => item.category === "dessert")
    const salad = menuItems.filter(item => item.category === "salad")
    const soup = menuItems.filter(item => item.category === "soup")
    const pizza = menuItems.filter(item => item.category === "pizza")

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            {/* Main Banner */}
            <CoverBanner
                coverImage={menuBanner}
                title={"Our Menu"}
                text={"would you like to try a dish?"}
            ></CoverBanner>

            <SectionsTitle
                heading="Today's Offer"
                subHeading="Don't Miss"
            >
            </SectionsTitle>

            {/* offered Items */}
            <MenuCategory menuItems={offered}></MenuCategory>

            {/* Dessert Menu */}
            <MenuCategory
                menuItems={dessert}
                coverImage={dessertBg}
                title={"desserts"}
                text={"would you like to try a dish?"}
            ></MenuCategory>

            {/* Pizza menu */}
            <MenuCategory
                menuItems={pizza}
                coverImage={pizzaBg}
                title={"pizza"}
                text={"would you like to try a dish?"}
            ></MenuCategory>

            {/* Soup Menu */}
            <MenuCategory
                menuItems={soup}
                coverImage={soupBG}
                title={"soups"}
                text={"would you like to try a dish?"}
            ></MenuCategory>

            {/* Salads Menu */}
            <MenuCategory
                menuItems={salad}
                coverImage={saladBG}
                title={"salads"}
                text={"would you like to try a dish?"}
            ></MenuCategory>



        </div>
    );
};

export default Menu;