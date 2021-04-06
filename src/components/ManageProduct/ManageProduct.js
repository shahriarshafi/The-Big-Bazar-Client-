import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const ManageProduct = ({ product , products , setProducts }) => {
  const classes = useStyles();

  console.log(product);
  const deleteEvent = (id) => {
    // const url = `https://dry-brook-88096.herokuapp.com/deleteEvent/${id}`;
    fetch(`https://dry-brook-88096.herokuapp.com/deleteEvent/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(result => {
        console.log('deleted successfully');
        const remaining = products.filter(product => product._id !== id);
        setProducts(remaining);
      })
  }

  return (
    <>
      <tbody>
        <tr>
          <th scope="row">{product.name}</th>
          <td>{product.price}</td>
          <td>{product.weight}</td>
          <td><DeleteIcon style={{color: "red" , cursor:"pointer"}} onClick={()=> deleteEvent(product._id)}/></td>
        </tr>
      </tbody>
    </>
  );
};

export default ManageProduct;
