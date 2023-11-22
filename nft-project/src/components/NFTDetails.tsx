import React from 'react'
import Header from './Header'
import Footer from './Footer'


const NFTDetails: React.FC = () => {
  return (
   <div>
     <Header />
     <main className="flex justify-center">
        <div className="w-3/6 h-full bg-gray rounded-2xl">
            <h5>From "Collection Name"</h5>
            <h6>Artwork Name</h6>
            <div>
             <h4>Royalties</h4>
             <label htmlFor="">2.5%</label>
            </div>
            <p>You are about to buy this artwork from
               <br /> "COLLECTION NAME" collection.
            </p>
            <div>
                <label htmlFor="">Floor Price</label>
                <div>
                    <span>0.25</span>
                    <span>ETH</span>
                </div>
            </div>
            <div>
                <label htmlFor="">Mintii fee</label>
                <div>2.5%</div>
            </div>
            <div>
                <label htmlFor="">You will pay</label>
                <div>
                    <span>0.27</span>
                    <span>ETH</span>
                </div>
            </div>  
            <button>Submit Purchase</button>
        </div>
        <img src="" alt="" className="w-3/6 h-full rounded-2xl" />
     </main>
     <Footer />
   </div>
  )
}

export default NFTDetails