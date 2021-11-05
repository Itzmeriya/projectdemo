import React, {Component} from 'react'

class Form extends Component {
  initialState = {
    name: '',
    job: '',
    location:'',
  }

  state = this.initialState
  handleChange = (event) => {
    const {name, value} = event.target
  
    this.setState({
      [name]: value,
    })
  }
  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }
  render() {
    const { name, job, location } = this.state;
  
    return (
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={this.handleChange} />
        <label htmlFor="job">Job</label>
        <input
          type="text"
          name="job"
          id="job"
          value={job}
          onChange={this.handleChange} />
        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          id="location"
          value={location}
          onChange={this.handleChange} />
          <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    );
  }
  
}

export default Form;
