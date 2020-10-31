import React from 'react';
import { connect } from 'react-redux';
import { moneyFormatter } from '../utils';
import AddToCart from './AddToCart'

class SingleModel extends React.Component {
  constructor() {
    super();
    this.state = {
      auto: {
        model: '',
        description: '',
        price: 0,
        image: '',
      },
      basket: [],
    };
    console.log(this.state)
  }
  componentDidUpdate(){
    console.log('didUpdate ', this.state)
  }
  componentDidMount() {
    console.log('did', this.state)
    const model = this.props.products.find(
      (e) => e.id === this.props.match.params.id * 1
    );
    this.setState({
      auto: {
        model: model.model,
        description: model.description,
        price: model.price,
        image: model.image,
      },
    });
  }
  render() {
    const { model, description, price, image } = this.state.auto;
    const mulah = moneyFormatter.format(price);
    const {auto} = this.state;
    console.log('render ', auto)
    console.log('render ', this.state)
    return (
      <div className="single-car">
        <div className="inner">
          <div className="image-is-64x64">
            <img src={`../${image}`} alt={model}></img>
          </div>
          <div className="single-model">{model}</div>
          <div className="single-description">{description}</div>
          <div className="single-price">{mulah}</div>
        </div>
        <AddToCart model={model}/>
        {/* <button className="add-car-cart" onClick={() => this.setState({basket: [...this.state.basket, auto]})}>Add to Cart</button> */}
      </div>
    );
  }
}
const mapStateToProps = ({ products }) => {
  return { products };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(SingleModel);