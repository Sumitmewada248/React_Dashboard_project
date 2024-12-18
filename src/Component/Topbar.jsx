import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Topbar=()=>{
  const name=localStorage.getItem("name");
    return(
        <>
       <Navbar className="bg-info" data-bs-theme="dark" style={{height:"90px"}} >
      <Container fluid style={{display:"flex",marginLeft:"115px"}}>
        <Navbar.Brand to="" > <i class="fa-solid fa-motorcycle" style={{color:"white", paddingRight:"10px" ,fontSize:"30px"}}/> Bike Dashboard</Navbar.Brand>
       
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a to="/" >Sumit Mewada</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}
export default Topbar;