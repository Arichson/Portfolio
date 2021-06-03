import emailjs from "emailjs-com"
import {useState} from "react"

function Other(props) {
  const [copy, setCopy] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'port-template', e.target, 'user_Y7Q650gzfvmB3TWjVxDFj')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }
  const copyCodeToClipboard = (string) => {
    navigator.clipboard.writeText(string)
    setCopy(true)
    console.log(copy)
  }
  const copyFunction = () => {
    console.log("yep")
    setTimeout(function(){setCopy(false)}, 5000)
    return(<span className="copyStatus">Copied!</span>)
  }
  
  return (
    <div className="contactPage">
      <div className="contactBox" >
        <button onClick={() => {copyCodeToClipboard("arichsonh@gmail.com")}}>Copy Email</button>
        <p className="myEmail"> arichsonh@gmail.com</p>
        {copy ? copyFunction(): ""}
        <form className="form" onSubmit={sendEmail}>
          <div className="contactItem subjectDiv">
            <label className="word">Subject:  {" "} </label>
            <input className="inputs" type="text" name="subject" placeholder="subject" />
          </div>
          <div className="contactItem nameDiv">
            <label className="word">Name:  {" "} </label>
            <input className="inputs" type="text" name="name" placeholder="name" />
          </div>
          <div className="contactItem emailDiv">
            <label className="word"> Email: {" "} </label>
            <input className="inputs" type="text" name="email" placeholder="email" />
          </div>
          <div className="contactItem messageDiv">
            <label className="word">Message:  {" "} </label>
            <textarea className="inputs" name="message" placeholder="message" />
          </div>
          <div className="contactItem submitDiv">
            <input className="inputs" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Other;
