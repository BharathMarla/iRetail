import './ProductCard.css'
import strawberry from '../../assets/images/strawBerry.png'
import AddButton from '../Buttons/AddButton/AddButton'

const ProductCard = () => {
    return (
        <div className="card-wrapper">
            <div className="card-container">
                <div className="card-container-top">
                    <img src={strawberry} alt='product-img' className='product-img' />
                </div>
                <div className="card-container-bottom">
                    <div className='product-description-container'>
                        <text className='product-description'>Brown Clasic Slim Rolling Paper king</text>
                    </div>
                    <div className='product-small-description'>
                        <text>Bharth 1grm</text>
                    </div>
                    <div className='price-and-addButton-container'>
                        <div className='price-container'>
                            <p>$499</p>
                        </div>
                        <div>
                            <AddButton />
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default ProductCard;