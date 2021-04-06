import 'date-fns';
import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from "react-hook-form";
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import "./PlaceOrder.css";

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'block',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

const PlaceOrder = () => {

    //date pickers
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const classes = useStyles();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => {
        const orderData = {
            name: data.name,
            email: data.email,
            price: data.price,
            time: { selectedDate }.selectedDate,
            productImage : data.productImage,
            productName : data.productName,
            productWeight : data.productWeight,
        };
        console.log(orderData)

        const url = `https://dry-brook-88096.herokuapp.com/orderDetails`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderData)
        })
            .then(res => res.json())
            .then(data => {
                alert("Your Order Added Successfully!")
            })
    }

  console.log(loggedInUser);
  
    return (
        <>
         <Header/>
            <div className="container">
            <div class="form-style">
                <form onSubmit={handleSubmit(onSubmit)} className={classes.container} noValidate p-5>
                    <div className="p-2">
                        <label class="form-label">User Name : </label>
                        <input name="name" class="form-control" defaultValue={loggedInUser.name} ref={register({ required: true })} />
                    </div>
                    <div className="p-2">
                        <label class="form-label">User Email : </label>
                        <input name="email" class="form-control" defaultValue={loggedInUser.email} ref={register} />
                    </div>

                    <div className="p-2">
                        <label class="form-label">Product Name : </label>
                        <input name="productName" class="form-control" defaultValue={loggedInUser.productName} ref={register} />
                    </div>
                    <div className="p-2">
                        <label class="form-label">Product Weight : </label>
                        <input name="productWeight" class="form-control" defaultValue={loggedInUser.productQuantity} ref={register} />
                    </div>

                    <div className="p-2">
                        <label class="form-label">Product Price : </label>
                        <input name="price" class="form-control" defaultValue={loggedInUser.price} ref={register} />
                    </div>
                    <div style={{display:"none"}}>
                        <label class="form-label">Product Image: </label>
                        <input name="productImage" class="form-control" defaultValue={loggedInUser.productImage} ref={register} />
                    </div>

                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify="space-around">
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Select Your Date"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                            <KeyboardTimePicker
                                margin="normal"
                                id="time-picker"
                                label="Time"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change time',
                                }}
                            />
                        </Grid>
                    </MuiPickersUtilsProvider>



                    {errors.exampleRequired && <span>This field is required</span>}
                    <input class="btn btn-success" type="submit" />
                </form>
            </div>
        </div>
        </>
        
    );
};

export default PlaceOrder;