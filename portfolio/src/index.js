import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home.js';
import About from './About.js';
import Skills from './Skills.js';
import Work from './Work.js';
import Contact from './Contact.js';

class Root extends Component {
  constructor() {
    super();
    this.state = {
      session: 'home',
      barHidden: false
    };
    this.onHome = this.onHome.bind(this);
    this.onAbout = this.onAbout.bind(this);
    this.onSkills = this.onSkills.bind(this);
    this.onWork = this.onWork.bind(this);
    this.onContactMe = this.onContactMe.bind(this);
    this.onEmail = this.onEmail.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.onMenu = this.onMenu.bind(this);
  };

  // componentDidMount() {
  //   window.addEventListener('scroll', this.handleScroll);
  // };



  onSession(session) {
    switch (session) {
      case 'home':
        return <Home scrollToAbout={this.onAbout} />
      case 'about':
        return <About scrollToHome={this.onHome} scrollToSkills={this.onSkills} />
      case 'skills':
        return <Skills scrollToAbout={this.onAbout} scrollToWork={this.onWork} />
      case 'work':
        return <Work scrollToSkills={this.onSkills} scrollToContact={this.onContactMe} />
      case 'contact':
        return <Contact onEmail={this.onEmail} scrollToWork={this.onWork}/>
    };
  };

  onHome() {
    document.getElementsByClassName(`${this.state.session}`)[0].classList.remove('btn-border');
    this.setState({
      session: 'home',
      barHidden: false
    });
    // document.getElementsByClassName('home')[0].classList.add('btn-border');
  };

  onAbout() {
    // document.getElementsByClassName(`${this.state.session}`)[0].classList.remove('btn-border');
    this.setState({
      session: 'about',
      barHidden: true
    })
    document.getElementsByClassName('about')[0].classList.add('btn-border');
  };

  onSkills() {
    document.getElementsByClassName(`${this.state.session}`)[0].classList.remove('btn-border');
    this.setState({
      session: 'skills'
    })
    document.getElementsByClassName('skills')[0].classList.add('btn-border');
  };

  onWork() {
    document.getElementsByClassName(`${this.state.session}`)[0].classList.remove('btn-border');
    this.setState({
      session: 'work'
    })
    document.getElementsByClassName('work')[0].classList.add('btn-border');
  };

  onContactMe() {
    document.getElementsByClassName(`${this.state.session}`)[0].classList.remove('btn-border');
    this.setState({
      session: 'contact'
    })
    document.getElementsByClassName('contact')[0].classList.add('btn-border');
  };

  onEmail(info) {
    console.log('info', info);
    fetch('http://localhost:8888/email', {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info)
    })
    this.setState({
      session: 'home',
      barHidden: false
    })
  };

  onMenu() {
    if (document.getElementsByClassName('menu')[0].classList.contains('fa-ellipsis-v')) {
      document.getElementsByClassName('menu')[0].classList.remove('fa-ellipsis-v');
      document.getElementsByClassName('menu')[0].classList.add('fa-ellipsis-h');
      document.getElementsByClassName('btn')[0].style.visibility = 'visible';
      document.getElementsByClassName('btn')[1].style.visibility = 'visible';
      document.getElementsByClassName('btn')[2].style.visibility = 'visible';
      document.getElementsByClassName('btn')[3].style.visibility = 'visible';
      document.getElementsByClassName('btn')[4].style.visibility = 'visible';
    } else if (document.getElementsByClassName('menu')[0].classList.contains('fa-ellipsis-h')) {
      document.getElementsByClassName('menu')[0].classList.remove('fa-ellipsis-h');
      document.getElementsByClassName('menu')[0].classList.add('fa-ellipsis-v');
      document.getElementsByClassName('btn')[0].style.visibility = 'hidden';
      document.getElementsByClassName('btn')[1].style.visibility = 'hidden';
      document.getElementsByClassName('btn')[2].style.visibility = 'hidden';
      document.getElementsByClassName('btn')[3].style.visibility = 'hidden';
      document.getElementsByClassName('btn')[4].style.visibility = 'hidden';
    }
  };

  handleScroll(e) {
    let element = e.target
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      console.log('end');
    };
  };

  render() {
    const { session, barHidden } = this.state;
    return (
      <div className='container' onScroll={this.handleScroll}>
        {
          !barHidden
            ?
            null
            :
            <div className='left main'>
              <div className='btn-container'>
                <button className='menu-btn' onClick={() => this.onMenu()}><p className='home-btn' style={{ 'margin': '0' }}><i className="fas fa-ellipsis-v menu"></i></p></button>
                {/* <button className='home btn' onClick={() => this.onHome()}><p className='home-btn btn-p'>THE HOME</p></button> */}
                <button className='about btn' onClick={() => this.onAbout()}><p className='about-btn btn-p'>THE WHO</p></button>
                <button className='skills btn' onClick={() => this.onSkills()}><p className='skills-btn btn-p'>THE HOW</p></button>
                <button className='work btn' onClick={() => this.onWork()}><p className='projects-btn btn-p'>THE WHAT</p></button>
                <button className='contact btn' onClick={() => this.onContactMe()}><p className='contact-btn btn-p'>THE POKE</p></button>
              </div>
              <div className='last main'>
                <a href='https://www.facebook.com/adrian.acosta.7771' target='_blank'><i className="fab fa-facebook-f icon"></i></a>
                <a href='https://www.instagram.com/adriansiito_mokoya/' target='_blank'><i className="fab fa-instagram icon"></i></a>
                <a href='https://github.com/adrianacosta20' target='_blank'><i className="fab fa-github icon"></i></a>
                <a href='https://www.linkedin.com/in/adrian-acosta-931977162/' target='_blank' style={{ 'marginRight': '26px' }}><i className="fab fa-linkedin-in icon"></i></a>
              </div>
            </div>
        }
        <div className='right main'>
          {/* <button className='contact-icon' onClick={() => this.onContactMe()}>contact me</button> */}
          <div className='right-bottom main'>
            {this.onSession(session)}
          </div>
          {/* <button className='home-icon' onClick={() => this.onHome()}>home</button> */}
        </div>

      </div>
    )
  };
};

ReactDOM.render(<Root />, document.getElementById('root'));
