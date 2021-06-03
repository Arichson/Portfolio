function Other(props) {
  return (
    <div className="App">
      <h1>{props.page}</h1>
      <p>arichsonh@gmail.com</p>
      <form>
        <div>
          Name:  {" "} 
          <input type="text" />
        </div>
        <div>
          Email: {" "} 
          <input type="text" />
        </div>
        <div>
          Message:  {" "} 
          <textarea/>
        </div>
      </form>
    </div>
  );
}

export default Other;
