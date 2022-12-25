import React from 'react';
import { Link } from 'react-router-dom';
import './CatCard.css'

const CatCard = ({ category }) => {

    // console.log(category)
    //destructuring the object
    const { img, id, name } = category

    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-sm">
                <div className='wrapper'>
                    <img className='imgi' src={img} alt="Shoes" />
                    <div className='overlay'>
                        <div className='content'>
                            <Link>{name}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CatCard;