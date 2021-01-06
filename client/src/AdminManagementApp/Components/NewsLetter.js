import React from "react";
import Table from "react-bootstrap/Table";
import { Switch } from "react-router-dom";
import buttons from "../Components/buttons";

// /**
// // * @author
// // * @function Article

// **/
const NewsLetter = () => {
  const [newsLetter, setNewsLetter] = useState([]);

  useEffect(() => {
    axios
      .get("/WestaNewsLetter")
      .then((res) => {
        console.log(res.data);
        setNewsLetter(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {newsLetter.map((n, i) => (
            <tr>
              <td>{n.firstName}</td>
              <td>{n.lastName}</td>
              <td>{n.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <buttons />
    </div>
  );
};
export default NewsLetter;

// const NewsLetter = (props) => {
//     const [allNewsLetter, setAllNewsLetter] = useState([])

//     class Table extends React.Component {
//         render() {
//           return (
//             <BootstrapTable data={ products }>
//               <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
//               <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
//               <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
//             </BootstrapTable>
//           );
//         }
//       }
//     return (
//         <div>
//             NewsLetter

//         </div>
//     )
// }
