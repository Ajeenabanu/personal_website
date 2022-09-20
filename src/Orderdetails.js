import "./index.css"
import watch from "./images/watch.png"
import icon1 from "./images/icon1.png"
import icon6 from "./images/icon6.webp"
import icon4 from "./images/icon4.png"
import icon5 from "./images/icon5.png"
export default function Orderdetails() {
    return <>
        <div className="order_main">
            <div className="order_main_header">
                <img src={watch} />
                <div className="order_main_header_row">
                    <label>Dictum morbi</label>
                    <label>$26.00</label>

                    <div className="order_main_header_row1">
                        <label>Order Placed On </label>
                        <label>Order ID </label>
                        <label>Expected Delivery </label>
                    </div>
                </div>
                <div className="order_main_header_row2">
                    <label>: 2022-6-21</label>
                    <label>: #4545695</label>
                    <label>: 2022-6-30</label>
                </div>
            </div>
            <div className="order_body">
                <div className="order_body_div">
                    <img src={icon1}/>
                    <div className="line"></div>
                    <img src={icon6}/>
                    <div className="line"></div>
                    <img src={icon4}/>
                    <div className="line"></div>
                    <img src={icon5}/>
                </div>
                <div className="order_body_div1">
                    <div className="order_body_div2">
                        <label>Order Placed<span>june 6 2022 | 03:45 pm</span></label></div>
                    <div className="order_body_div2">
                        <label>Order Deplicated<span>june 6 2022 | 03:45 pm</span></label></div>
                    <div className="order_body_div2">
                        <label>Out for Delivery<span>june 6 2022 | 03:45 pm</span></label></div>
                    <div className="order_body_div2">
                        <label>Delivered<span>june 6 2022 | 03:45 pm</span></label></div>
                </div>
            </div>
            <button>Cancel Order</button>
        </div>
    </>
}