import React from "react";
const Menucard = ({ menuData }) => {
    return (
        <>
            <section className="main-card--cointainer">
            {menuData.map((curElem) => {
                const {id, name, category, image, description} = curElem;
                return (
                    <>
                        <div className='card-conatainer' key = {id}>
        <div className='card'>
                <div className='card-body'>
                      <span className='card-number card-circle subtle'>
                        {id}
                      </span>
                         <span className='card-author subtle' style={{color: 'red'}}>{name}</span>
                         <h5 className='card-title'>{name}</h5>
                         <span className='card description subtle'>
                          {description}
                         </span>
                          <div className='card-read'>Read</div>
                           <div>
                           <img src= {image}
                           alt = "images"
                            className = "card-media"
                            />

                             <span className='card-tag subtle'>Order Now</span>
                           </div>
                </div>
        </div>
    </div>
                    </>
                );
            })}
            </section>
            </>
    )
}
export default Menucard
