import React from 'react';
import { Link } from 'react-router-dom';
import './CatCard.css'

const CatCard = ({ category }) => {

    // console.log(category)
    //destructuring the object
    const { img, name } = category

    return (
        <div>
            <div className="card card-compact mx-auto w-96 bg-base-100 shadow-sm">
                <div className='wrapper'>
                    <img className='imgi' src={img} alt="Shoes" />
                    <Link to={`/products/${name}`}>
                        <div className='overlay'>
                            <div className='content'>
                                <span>{name}</span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CatCard;