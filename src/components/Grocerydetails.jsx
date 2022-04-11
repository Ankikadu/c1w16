import React from "react"
import data from '../data.json'


const GroceryDetails = ()=>{
console.log(data)

    return(
        <>
        <h1>Groceries</h1>
        <h3>TOP DEALS</h3>
        <div className="container">
       
            {/* map through the data and display the cards */}
       
        <div>
     <img src="https://www.jiomart.com/images/product/150x150/490830561/nivea-whitening-smooth-skin-roll-on-deodorant-for-women-50-ml-product-images-o490830561-p490830561-0-202203151142.jpg"></img>
        <h6>Nivea Whitening smooth skin rool on</h6>
        <p>132.00</p>
        <button>Add to cart + </button>
        </div>
      
        <div>
    <img src="https://www.jiomart.com/images/product/150x150/490162338/nivea-men-fresh-active-roll-on-deodorant-50-ml-product-images-o490162338-p490162338-0-202203150039.jpg"></img>
     <h6>Nivea Men Fresh Active Roll On Deodorant 50 ml</h6>
     <p>$187.00</p>
    <button>Add to cart + </button>
    </div>
   
    <div>
    <img src="https://www.jiomart.com/images/product/150x150/490249967/b-natural-guava-gush-juice-1-l-product-images-o490249967-p490249967-0-202203151704.jpg"></img>
    <h6>B Natural Guava Gush Juice 1 L</h6>
     <p>$187.00</p>
    <button>Add to cart + </button>
    </div>

    <div>
    <img src="https://www.jiomart.com/images/product/150x150/491439052/nivea-milk-delights-turmeric-face-wash-for-acne-prone-skin-100-ml-product-images-o491439052-p491439052-0-202203151950.jpg"></img>
     <h6>Nivea Milk Delights Turmeric Face Wash for Acne Prone Skin 100 ml</h6>
     <p>$187.00</p>
    <button>Add to cart + </button>
    </div>

    <div>
    <img src="https://www.jiomart.com/images/product/150x150/490249971/b-natural-mixed-fruit-juice-1-l-product-images-o490249971-p490249971-0-202203150027.jpg"></img>
    <h6>B Natural Mixed Fruit Juice 1 L</h6>
     <p>$187.00</p>
    <button>Add to cart + </button>
    </div>

    <div>
    <img src="https://www.jiomart.com/images/product/150x150/590032548/fortune-rice-bran-health-physically-refined-rice-bran-oil-5-l-fortune-everyday-basmati-rice-5-kg-combo-pack-0-20210927.jpg"></img>
    <h6></h6>
     <p>$187.00</p>
    <button>Add to cart + </button>
    </div>


    <div>
    <img src="https://www.jiomart.com/images/product/150x150/490920576/nivea-lemon-oil-shower-gel-250-ml-product-images-o490920576-p490920576-0-202203170215.jpg"></img>
    <h6>soap</h6>
    <p>$187.00</p>
    <button>Add to cart + </button>
    </div>

    <div>
    <img src="https://www.jiomart.com/images/product/150x150/490249971/b-natural-mixed-fruit-juice-1-l-product-images-o490249971-p490249971-0-202203150027.jpg"></img>
    <h6>B Natural Mixed Fruit Juice 1 L</h6>
     <p>$187.00</p>
    <button>Add to cart + </button>
    </div>

    <div>
    <img src="https://www.jiomart.com/images/product/150x150/590032548/fortune-rice-bran-health-physically-refined-rice-bran-oil-5-l-fortune-everyday-basmati-rice-5-kg-combo-pack-0-20210927.jpg"></img>
    <h6></h6>
     <p>$187.00</p>
    <button>Add to cart + </button>
    </div>


    <div>
    <img src="https://www.jiomart.com/images/product/150x150/490920576/nivea-lemon-oil-shower-gel-250-ml-product-images-o490920576-p490920576-0-202203170215.jpg"></img>
    <h6>soap</h6>
    <p>$187.00</p>
    <button>Add to cart + </button>
    </div>
    <div>
    <img src="https://www.jiomart.com/images/product/150x150/491055460/colgate-strong-teeth-dental-cream-toothpaste-500-g-saver-pack-product-images-o491055460-p491055460-0-202203151056.jpg"></img>
    <h6>colgate strong teeth dental creame</h6>
    <p>$187.00</p>
    <button>Add to cart + </button>
    </div>
        </div>
        </>
    )
}
export default GroceryDetails