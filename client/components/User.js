import React from 'react';
import {connect} from 'react-redux'
import {setSingleUser} from "../store/redux/users"
import {fetchMyOrders} from '../store/redux/orders'



class  User extends React.Component{
        constructor(){
            super()
        }
        async componentDidMount(){
            await this.props.getUser()
            await this.props.getOrders(this.props.user.id)
        }

        render(){
            console.log(this.props)
        return(
            
            <div>
                <li>
                    USER: {this.props.user.name}
                </li>
                <li>
                    EMAIL: {this.props.user.email}
                </li>
                <div>
                 Orders:
                </div>
                <li>
                    {this.props.orders.map(order => {
                        return(
                            <div>
                                <li>{order.id}</li>
                                <li>{order.order_date}</li>
                            </div>
                        )
                    })}
                </li>
            </div>
        )
        }
}

const mapStateToProps=({user,orders})=>{
    return {user,orders};
}

const mapDispatchToProps = (dispatch) =>{
    return{
        getUser: () => dispatch(setSingleUser()),
        getOrders: (id) => dispatch(fetchMyOrders(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps )(User)