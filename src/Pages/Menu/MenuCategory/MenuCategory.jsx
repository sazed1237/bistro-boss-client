import { Link } from 'react-router-dom';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import CoverBanner from '../../Shared/CoverBanner/CoverBanner';

const MenuCategory = ({ menuItems, title, text, coverImage }) => {

    return (
        <section className='my-12'>
            {title && <CoverBanner title={title} text={text} coverImage={coverImage}></CoverBanner>}
            <div className='w-10/12 mx-auto grid md:grid-cols-2 gap-5 mb-10 pt-8'>
                {
                    menuItems.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className='flex items-center justify-center'>
                <Link to={`/order/${title}`}>
                    <button className="btn btn-outline border-0 border-b-4 btn-sm mt-4 uppercase ">Oder Your Favourite Menu</button>
                </Link>
            </div>

        </section>
    );
};

export default MenuCategory;