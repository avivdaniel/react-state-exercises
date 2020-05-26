import React, { Component } from 'react';

/**
 * See the component below? there are 4 fields: name, restaurant, meal and desert.
 * Once the user changes the form, it should be reflected on the "Your reservation" paragraph.
 */

class FoodPicker extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'stranger',
			restaurant: 'Frangelico',
			favoriteMeal: '',
			hasDesert: false
		}
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(e) {
		const { desert } = this.form;
		this.setState({
			name: this.name.value,
			restaurant: this.selectResturant.value,
			favoriteMeal: this.favoriteMeal.value,
			hasDesert: desert.checked ? true : false
		});
		e.preventDefault();
	}
	render() {
		const { name, restaurant, favoriteMeal, hasDesert } = this.state;
		return (
			<div>
				<h1>Order special meal:</h1>
				<form onSubmit={this.handleSubmit} ref={input => this.form = input}>
					<div>
						Your name:
					<input type="text" ref={input => this.name = input} />
					</div>
					<div>
						Choose restaurant:
					<select ref={input => this.selectResturant = input}>
							<option value="Frangelico" selected>Frangelico</option>
							<option value="Mina Tomei">Mina Tomei</option>
							<option value="Rak Basar">Rak Basar</option>
							<option value="Texas BBQ">Texas BBQ</option>
						</select>
					</div>
					<div>
						Favorite meal:
					<input type="text" ref={input => this.favoriteMeal = input} />
					</div>
					<div>
						Want a desert?
					<input type="checkbox" value="true" name="desert" />
					</div>
					<button type="submit">submit</button>

				</form>

				<div>
					<h2>Your reservation:</h2>
					Hi {name}! <br />
					We are glad you want to reserve a table at {restaurant}.<br />
					We will make sure that your favorite meal, {favoriteMeal} is available.<br />
					{hasDesert ? <span>Additionally, our chef will make a special desert for you!<br /></span> : null}
				</div>
			</div>
		);
	}
}


export default FoodPicker;