import { createUseStyles } from "react-jss";

const Button3 = ({ buttonText }) => {
    const styles = createUseStyles({
      btn: {
        backgroundColor: '#24292e', // adding the styles in the object that we'll apply to our button
        borderRadius: '8px',
        color: '#f7df1c',
        fontSize: '24pt',
        padding: '15px 50px',
        width: '300px',
      }
    })
    return <button className={classes.btn}>{buttonText}</button>;
  };
  
  const classes = styles()
  export default Button3;
  