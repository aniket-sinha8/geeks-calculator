import './App.css';
import {useState} from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';

function App() {
  const [calculator, setCalculator] = useState('');
  const [result, setResult] = useState('');

  const operators = ['+', '-', '*', '/', '.'];

  const updateCalculator = (value) => {
    if (operators.includes(value) && calculator === '' || operators.includes(value) && operators.includes(calculator.slice(-1))) {
      return;
    }

    setCalculator(calculator + value);

    if(!operators.includes(value)) {
      setResult(eval(calculator + value).toString());
    }

    if(value === '=') {
      setCalculator(eval(calculator).toString());
      setResult(eval(calculator).toString());
    }
  };

  const keypress = (e) => {
    if(e.key === '1') {
      updateCalculator('1');
    } else if(e.key === '2') {
      updateCalculator('2');
    } else if(e.key === '3') {
      updateCalculator('3');
    } else if(e.key === '4') {
      updateCalculator('4');
    } else if(e.key === '5') {
      updateCalculator('5');
    } else if(e.key === '6') {
      updateCalculator('6');
    } else if(e.key === '7') {
      updateCalculator('7');
    } else if(e.key === '8') {
      updateCalculator('8');
    } else if(e.key === '9') {
      updateCalculator('9');
    } else if(e.key === '0') {
      updateCalculator('0');
    } else if(e.key === '+') {
      updateCalculator('+');
    } else if(e.key === '-') {
      updateCalculator('-');
    } else if(e.key === '*') {
      updateCalculator('*');
    } else if(e.key === '/') {
      updateCalculator('/');
    } else if(e.key === '.') {
      updateCalculator('.');
    } else if(e.key === '.') {
      updateCalculator('.');
    } else if (e.key === '=') {
      setCalculator(eval(calculator).toString());
      setResult(eval(calculator).toString());
    }
  };

  onkeypress = keypress;

  const keydown = (e) => {
    if(e.key === 'Backspace') {
      setCalculator(calculator.slice(0, -1));
      setResult(calculator.slice(0, -1));
    }
    else if(e.key === 'Enter')  {
      setCalculator(eval(calculator).toString());
      setResult(eval(calculator).toString());
    }
  };

  onkeydown = keydown;

  const clearCalculator = () => {
    setCalculator('');
    setResult('');
  };

  const deleteLast = () => {
    setCalculator(calculator.slice(0, -1));
    setResult(calculator.slice(0, -1));
  };

  const calculate = () => {
    setCalculator(eval(calculator).toString());
    setResult(eval(calculator).toString());
  };

  return (
    <div className="App">
      <div className='Calculator'>
        <div className='Calculator-display'>
              <div className='Calculator-display-text'>{calculator}</div>
        </div>

        <div className='Calculator-keypad'>
          <Grid container spacing={0}>
              <Grid item xs={2}>
                <div className='Calculator-operators'>
                  <Button color='success' variant="contained" onClick={() => updateCalculator('/')}>/</Button>
                  <Button color='success' variant="contained" onClick={() => updateCalculator('*')}>*</Button>
                  <Button color='success' variant="contained" onClick={() => updateCalculator('-')}>-</Button>
                  <Button color='success' variant="contained" onClick={() => updateCalculator('+')}>+</Button>
                  <Button color='success' variant="contained" onClick={() => calculate()}>=</Button>
                </div>
              </Grid>

              <Grid item xs={10}>
                <div className='Calculator-numbers'>
                  <Button color='success' variant="contained" onClick={() => updateCalculator('7')}>7</Button>
                  <Button color='success' variant="contained" onClick={() => updateCalculator('8')}>8</Button>
                  <Button color='success' variant="contained" onClick={() => updateCalculator('9')}>9</Button>
                  <Button color='success' variant="contained" onClick={() => updateCalculator('4')}>4</Button>
                  <Button color='success' variant="contained" onClick={() => updateCalculator('5')}>5</Button>
                  <Button color='success' variant="contained" onClick={() => updateCalculator('6')}>6</Button>
                  <Button color='success' variant="contained" onClick={() => updateCalculator('1')}>1</Button>
                  <Button color='success' variant="contained" onClick={() => updateCalculator('2')}>2</Button>
                  <Button color='success' variant="contained" onClick={() => updateCalculator('3')}>3</Button>
                  <Button color='success' variant="contained" onClick={() => updateCalculator('0')}>0</Button>
                  <Button color='success' variant="contained" onClick={() => updateCalculator('.')}>.</Button>
                  <Button color='success' variant="contained" onClick={() => deleteLast()}><BackspaceOutlinedIcon /></Button>

                  <Button style={{ padding: "6px 73.5px" }} color='success' variant="contained" onClick={() => clearCalculator()}>CLEAR</Button>
                </div>
              </Grid>
            </Grid>
        </div>
      </div>
    </div>
  );
}

export default App;