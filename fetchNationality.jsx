import React, { useState, useRef, useEffect} from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const FetchNationality = () => {
  /* const [name, setName] = useState(""); */
  const [name, setName] = useState("");
  const [nationality, setNationality] = useState(null);
  const [trigger, setTrigger] = useState(false)
  const [error, setError] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    if (trigger) {
      const focusInput = () => {
        inputRef.current.focus();
      };
      focusInput();

      const getNationality = async () => {
        try {
          const response = await axios.get(`https://api.nationalize.io/?name=${name}`);
          setNationality(response.data);
          setError("");
        } catch (err) {
          setError("Something went wrong");
          setNationality(null);
        }
      }
      getNationality();
      setTrigger(false);
    }
  }, [trigger]);

  const handleClick = () => {
    setTrigger(true);
  };
  
  return (
    <div>
      <br></br>
      <h4>Let's fetch your nationality</h4>
      <input ref={inputRef}
        type="text"
        className="inputbox"
        placeholder="Enter lastname"
        style={{
          backgroundColor: "cyan", 
          color: "black", 
          fontWeight: "bold"
        }}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit"
        className="button"
        style={{
          backgroundColor: "darkblue", 
          color: "white",
          margin: "15px",
          borderWidth: "5px",
          borderColor: "aqua" 
        }} 
        onClick={handleClick}>
          Fetch Data
      </button>
      {error && <p>{error}</p>}
      {nationality && (<pre style={{fontSize: "medium"}}>{JSON.stringify(nationality.name, null, 2)}
        <div style={{ display: "block", width: 700, padding: 30 }}>
          <Row className="header-row">
            <Col style={{backgroundColor: "yellow", fontSize: "large"}}>
              Data Item
            </Col>
            <Col style={{backgroundColor: "yellow", fontSize: "large"}}>
              Details
            </Col>
          </Row>
          <Row>
            <Col style={{backgroundColor: "lightgrey", alignContent: "center"}}>
              Possible Countries
            </Col>
            <Col style={{backgroundColor: "beige"}}>
              {JSON.stringify(nationality.country, null, 2)}
            </Col>
          </Row>
        </div>
      </pre>)}
    </div>
  )
};
  
export default FetchNationality;