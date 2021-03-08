import React from "react";
import "./myform.css"

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form className="form container-fluid"
        onSubmit={this.submitForm}
        action="https://formspree.io/f/xleopakw"
        method="POST"
      >
        <div className="contact-row row">
          <div className="col-1"></div>
            <div className="col-10">
                <label for="formGroupExampleInput">Name</label>
                <input type="text" className="form-control" id="formGroupExampleInput" />
            </div>
          </div>
          <br></br>
          <div className="contact-row row">
          <div className="col-1"></div>
            <div className="col-10">
                <label for="formGroupExampleInput2">Email</label>
                <input type="email" className="form-control" id="formGroupExampleInput2"  />
            </div>
          </div>
         <br></br>
         <div className="contact-row row">
         <div className="col-1"></div>
            <div className="col-10">
                <label for="formGroupExampleInput2">Subject</label>
                <textarea type="text" name="subject" className="form-control" id="formGroupExampleInput2" rows="1" ></textarea> 
            </div>
          </div> 
          <br></br>
          <div className="contact-row row">
          <div className="col-1"></div>
            <div className="col-10">
                <label for="formGroupExampleInput2">Message</label>
                <textarea type="text" name="message" className="form-control" id="formGroupExampleInput2" rows="3" ></textarea> 
            </div>
          </div> 
         

        {status === "SUCCESS" ? <p>Thanks!</p> : <button className="submitBtn btn btn-sm btn-dark">Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}