import { useState } from 'react';
import './App.css';
import Barchart from './Barchart';
import Donut from './Donutchart';

function App() {
  const [contri, setContri] = useState('0');
  const [age, setAge] = useState('50')
  return (
    <>

      <div className="main">

        <div className="mob-side">
          <ul>
            <li>
              <div className='icons'><i className='bx bx-home-alt'></i></div>
              <div className='icons'><i className='bx bx-news'></i></div>
              <div className='icons'><i className='bx bx-list-ul'></i></div>
              <div className='icons'><i className='bx bx-user'></i></div>
              <div className='icons'><i className='bx bx-search'></i></div>
            </li>
          </ul>
        </div>
        <div className="sidebar">
          <div className="logo">
            <img src="logo.png" width={30} height={30} alt="" />
          </div>
          <div className="search">
            <div className='icons'>
              <i className='bx bx-search'></i>
            </div>
          </div>
          <div className="nav">
            <ul>
              <li><div className='icons'>
                <i className='bx bx-home-alt'></i>
              </div></li>
              <li><div className='icons'>
                <i className='bx bx-news'></i>
              </div></li>
              <li><div className='icons'>
                <i className='bx bx-list-ul'></i>
              </div></li>
              <li><div className='icons'>
                <i className='bx bx-user'></i>
              </div></li>
            </ul>
          </div>
          <div className="bottom-sidebar">
            <div className="noti">
              <div className='icons'>
                <i className='bx bx-bell'></i>
              </div>
            </div>
            <div className="exit">
              <div className='icons'>
                <i className='bx bx-exit'></i>
              </div>
            </div>
          </div>
        </div>
        <div className="userbar">
          <div className="user">
            <div className="profile">
              <img src="logo.png" width={80} height={80} alt="" />
            </div>
            <div className="user-name">
              <h1>Hi Mike,</h1>
              <p>Welcome back.</p>
            </div>
          </div>
          <div className="balance">
            <h2>Today</h2>
            <div className="acc">
              <h1>$19,892</h1>
              <p>Account Balance</p>
            </div>
            <div className='mob-bal'>
              <div className="acc">
                <h3>$4,892</h3>
                <p>Year-to-Date Contribution</p>
              </div>
              <div className="acc">
                <h3>$1,892</h3>
                <p>Total Interest</p>
              </div>
            </div>
            <button className='bal-btn'>I Want to </button>
          </div>
          <div className="transactions">
            <h2>Recent Transactions</h2>
            <div className="trans1">
              <p>2020-08-07</p>
              <h5>Withdrawal Transfer to Bank-XXX11</h5>
            </div>
            <hr />
            <div className="trans1">
              <p>2020-07-27</p>
              <h5>Withdrawal Transfer to Bank-XXX11</h5>
            </div>
            <hr />
            <div className="trans1">
              <p>2020-07-17</p>
              <h5>Withdrawal Transfer to Bank-XXX11</h5>
            </div>
            <hr />
          </div>
        </div>
        <div className="data">
          <div className="title">
            <p style={{ color: 'blue' }}>Retirement Income</p>
            <h3>Starting Year 2056</h3>
          </div>
          <div className="goals">
            <div className="goal">
              <h3>$300,000</h3>
              <p>My Goal</p>
            </div>
            <div className="goal1">
              <div className="goal">
                <h3>59%</h3>
                <p>Goal Achieved</p>
              </div>
              <div className="goal">
                <h3>$300</h3>
                <p>Est.Monthly Income</p>
              </div>
            </div>
          </div>
          <div className="datachart">
            <h5>Contributions Overtime</h5>
            <div className="dv-title">
              <div className="contri">
                <p>Employer :</p>
                <h6>K 73,500</h6>
              </div>
              <div className="contri">
                <p>Employee :</p>
                <h6>K 53,500</h6>
              </div>
              <div className="contri">
                <p>Total Interest :</p>
                <h6>K 273,500</h6>
              </div>
            </div>
            <div className="chart">
              <div style={{ width: '90%', fontWeight: 'bolder' }}>
                <Barchart />
              </div>
            </div>
            <div className="percentage">
              <h4>How do I compare to my peers?</h4>
              <p>These numbers represents current goal achievement</p>
            </div>
            <div className="more">
              <div className="more-sel">
                <div className="more1">
                  <h6>Age :</h6>
                  <select>
                    <option value="Under 30">Under 30</option>
                    <option value="30-60">30-60</option>
                    <option value="Over 60">Over 60</option>
                  </select>
                </div>
                <hr />
                <div className="more1">
                  <h6>Salary :</h6>
                  <select>
                    <option value="Under 20k">Under 20k</option>
                    <option value="20-40k">20-60k</option>
                    <option value="40-60k">40-60k</option>
                    <option value="Over 60k">Over 60k</option>
                  </select>
                </div>
                <hr />
                <div className="more1">
                  <h6>Gender</h6>
                  <select>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
              </div>
              <div className="morecharts">
                <div className="mc1">
                  <Donut/>
                  <p>Average</p>
                </div>
                <div className="mc1">
                  <Donut/>
                  <p>Top</p>
                </div>
                <div className="mc1">
                  <Donut/>
                  <p>ME</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="strategy">
          <h3>Retirement Strategy</h3>
          <div className="range">
            <form action="">
              <p>Employee Contribution</p>
              <div className='range1'>
                <input type="range" name="employeeContri" id="employeeContri" min={0} max={25} onChange={(e) => setContri(e.target.value)} />
                <div>{contri} %</div>
              </div>
              <p>Retirement Age</p>
              <div className='range1'>
                <input type="range" name="ReAge" id="ReAge" min={50} max={80} onChange={(e) => setAge(e.target.value)} />
                <div>{age}</div>
              </div>
            </form>
          </div>
          <hr />
          <div className="rates">
            <div className="rates1">
              <h6>Employer Contribution</h6>
              <div>{contri}</div>
            </div>
            <div className="rates1">
              <h6>Interest Rate</h6>
              <div>5%</div>
            </div>
          </div>
          <button className='bal-btn'>Update</button>
          <div className="docs">
            <a href="docs" style={{textDecoration:'none',fontSize:'14px',fontWeight:'bolder'}}>View Help Docs -</a>
          </div>
          <div className="extra">
            <h6>Are you considering a</h6>
            <h5>Housing Advance?</h5>
            <p>Limited time reduced interest</p>
            <a href="" style={{textDecoration:'none'}}>Learn More</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
