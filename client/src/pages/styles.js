import { makeStyles } from "@material-ui/core/styles";
import { width } from "@mui/system";

export default makeStyles((theme) => ({
    appBar: {
        padding: '5px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      heading: {
        fontFamily: 'Franklin Gothic Medium',
        color: 'rgb(35, 38, 35)',
        textDecoration: 'none',
        fontSize: '30px',
      },
      brandContainer: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '15px',
      },
      searchBar: {
        display: 'flex',
        paddingRight: '20px',
        width: '600px'
    },

}))