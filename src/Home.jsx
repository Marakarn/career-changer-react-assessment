import './App.css'
import Layout from './Layout'
import Admin from './Admin'
import User from './User'
import axios from "axios";
import { useEffect, useState } from 'react'

const Home = () => {

  const [sector, setSector] = useState("");
  const [employees, setEmployees] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(()=> {
    const getData = async () => {
      const response = await axios.get(
        "https://jsd5-mock-backend.onrender.com/members"
      );
      setEmployees(response.data);
    };

    getData();
  }, [reload]);

  const createData = async (name, lastname, position) => {
    const requestData = {
      name: name,
      lastname: lastname,
      position: position
    };

    const response = await axios.post(
      "https://jsd5-mock-backend.onrender.com/members",
      requestData
    );

    if (response.status === 200) {
      setReload(!reload);
    };
  };

  const removeData = async (id) => {
    const response = await axios.delete(
      `https://jsd5-mock-backend.onrender.com/member/${id}`
    );

    if (response.status === 200) {
      setReload(!reload);
    };
  };


  const handleButton = (value) => {
      setSector(value);

  };
  return (
    <Layout>
      <Display sector={sector} handleButton={handleButton} employees={employees} submitCreate={createData} submitRemove={removeData}/>
    </Layout>
  )
}

function Display(props) {
  const {sector, handleButton, employees, submitCreate, submitRemove} = props

  let display;
  let text;

  if(sector === "admin") {
      display = <Admin employees={employees} submitCreate={submitCreate} submitRemove={submitRemove}/>;
      text = <h1>Generation Thailand <br /> Home - Admin Sector</h1>;
  } else if (sector === "user") {
      display = <User employees={employees}/>;
      text = <h1>Generation Thailand <br /> Home - User Sector</h1>;
  } else {
      display = <img className='welcome_picture' src="https://i.pinimg.com/originals/18/b1/77/18b177f65bd1119ce41186d0d0959910.gif" alt="welcome_picture" />;
      text = <h1>Generation Thailand <br /> React - Assessment</h1>;
  }

  return (
    <>
        {text}
          <div className='sector_box'>
              <button className='sector_button' onClick={() => handleButton("user")}>User Home Sector</button>
              <button className='sector_button' onClick={() => handleButton("admin")}>Admin Home Sector</button>
          </div>
        {display}
    </>
  );
}





export default Home
