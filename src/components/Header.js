import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { useHistory } from "react-router-dom";
import { CryptoState } from "../CryptoContext";

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    mode: "dark", // Updated for MUI v5
  },
});

function Header() {
  const { currency, setCurrency } = CryptoState();
  const history = useHistory();

  const titleStyles = {
    flex: 1,
    color: "#A91D3A",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              onClick={() => history.push(`/`)}
              variant="h4"
              style={titleStyles}
            >
              Crypto-Pulse
            </Typography>
            <Select
              variant="outlined"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              style={{ width: 100, height: 40, marginLeft: 15 }}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;
