import { useState } from "react"



const Pricing = ({plan, features}) => {

 const [toggle, setToggle] = useState("yearly");
  
  return (
    <section class="price-four">
		<div class="auto-container">
        
			<div class="row clearfix">
                <div className="pricing-container">

                

				<div class="price-block_one col-lg-4 col-md-6 col-sm-12">
					<div class="price-block_one-inner">
						<div class="price-block_one-title price-header">
                            <div className="header-item">
                                {plan.planName}
                            </div>
                            <div className="header-item">
                                <div className="toggle">
                                    <div className="toggle-item" id="yearly"><a className={toggle === "yearly" ? "active" : ""} onClick={() => {setToggle("yearly")}} href="javascript:void(0)">Yearly</a></div>
                                    <div className="toggle-item" id="monthly"><a className={toggle === "monthly" ? "active" : ""} onClick={() => {setToggle("monthly")}} href="javascript:void(0)">Monthly</a></div>
                                </div>
                            </div>
                        </div>

						<div class="price-block_one-content">
							<div class="d-flex justify-content-between align-items-end flex-wrap">
                                {
                                    toggle === "yearly" ? 
                                    <div class="price-block_one-price"><sup>₹</sup>{ plan.yearlyPrice && plan.yearlyPrice.split(".")[0]}<sub>/yr</sub></div> : 
                                    <div class="price-block_one-price"><sup>₹</sup>{ plan.monthlyPrice && plan.monthlyPrice.split(".")[0]}<sub>/mo</sub></div>
                                }
								
								
							</div>
							<ul class="price-block_one-list">
                                {features.map((feature,idx) => {
                                    return <li key={idx}><i class="fa-solid fa-check fa-fw"></i>{feature.feature}</li>
                                })}
							</ul>
                            <div class="price-block_one-button">
								<a class="template-btn price-one_button" href="#">Subscribe Now</a>
							</div>
						</div>
					</div>
				</div>
                </div>
            </div>
		</div>
	</section>
  )
}

export default Pricing