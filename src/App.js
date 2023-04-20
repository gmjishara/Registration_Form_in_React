import MainDiv from "./Components/MainDiv";
import Box from '@mui/material/Box';



function App() {
  return (
    <div className="App">
      <Box
      sx={{
        paddingTop:10,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#4caf50',
      }}
    >
      <MainDiv/>
      </Box>
    </div>
  );
}


export default App;
