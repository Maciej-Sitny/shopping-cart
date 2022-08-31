import React from 'react'

export default function TopGallery(props) {
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    let topProducts = [...props.products.pillows, ...props.products.lamps]

    shuffleArray(topProducts)
    topProducts.map(product=>(<div>
        <div className='topProduct--imageDiv'>
            <img alt="" src={product.imgSource}/>
            {Boolean(product.discount)&&<p>Sale</p>}
        </div>
        <div className='topProduct--details'>
            <h2>{product.name}</h2>
            {Boolean(product.discount)? (<div className='topProduct--details--priceWithDiscount'>
                <p>${product.officialPrice}</p>
                <h2>${product.discount}</h2>
            </div>)
            :
            `$${product.officialPrice}`
            }
        </div>
    </div>))

    return (
        <div className='topGallery'>
            <h1>Top Product</h1>
            <div className='topGallery--slider'>
                {topProducts.map(product=>(<div className='topProduct'>
                    <div className='topProduct--imageDiv'>
                        <img alt="" src={product.imgSource}/>
                        
                    </div>
                    <div className='topProduct--details'>
                        <h3>{product.name}</h3>
                        {Boolean(product.discount)? (<div className='topProduct--details--priceWithDiscount'>
                            <p>${product.officialPrice}</p>
                            <h2>${product.officialPrice-(product.discount/100)*product.officialPrice}</h2>
                        </div>)
                        :
                        <h1>${product.officialPrice}</h1>
                        }
                    </div>
                    {Boolean(product.discount)&&<h1 className='topProductDiscountInfo'>-{product.discount}%</h1>}
                </div>))}
            </div>
        </div>
    )
}