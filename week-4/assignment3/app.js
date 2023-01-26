const Header = () => {
    return (
        <header className="header">
            <h1 className="logo">Website Title/Logo</h1>
            <MenuToggle/>
            <ul className="header-nav">
                <li><a href="#">Item 1</a></li>
                <li><a href="#">Item 2</a></li>
                <li><a href="#">Item 3</a></li>
                <li><a href="#">Item 4</a></li>
            </ul>
        </header>
    )
}
const Banner = () => {
    return (
        <div className="banner">
            {/* <h2 onClick={bannerClick} >Welcome Message</h2> */}
            <BannerClick />
        </div>
    )
}
const Container = () => {
    return (
        <section className="container">
            <h3>Section Title</h3>
            <div className="boxes">
                <div className="box box1">Content Box 1</div>
                <div className="box box2">Content Box 2</div>
                <div className="box box3">Content Box 3</div>
                <div className="box box4">Content Box 4</div>
            </div>
            <ActionBtn />
        </section>
    )
}

class BannerClick extends React.Component {
    state = {
        title: "Welcome Message"
    }
    changeTitle = () => {
        this.setState({ title: "Have a Good Time!" });
    };
    render() {
        return <h2 onClick={this.changeTitle}>{this.state.title}</h2>;
    }
}

const ActionBtn =()=>{
        const [show, setShow] = React.useState(false);
        const onClick = (e) => {
            setShow(!show);
            e.preventDefault()
        }
        return (
          <React.Fragment>
            <a href="#" className="btn" onClick={onClick}>Call to Action</a>
            {show && 
              <div className="secondary-boxes">
                <div className="box box1">Content Box 1</div>
                <div className="box box2">Content Box 2</div>
                <div className="box box3">Content Box 3</div>
                <div className="box box4">Content Box 4</div>
              </div> 
            }
          </React.Fragment>
        );
        
}
const MenuToggle =()=>{
    const [show, setShow] = React.useState(false);
    const onClick = () => { setShow(!show)}
    return (
      <React.Fragment>
        <span className="material-symbols-outlined menuToggle" onClick={onClick}>menu</span>
        {show && 
            <div className="header-active" >
                <ul className="menu-active">
                    <li><a href="#">Item 1</a></li>
                    <li><a href="#">Item 2</a></li>
                    <li><a href="#">Item 3</a></li>
                    <li><a href="#">Item 4</a></li>
                </ul>
                <span className="material-symbols-outlined closeToggle"  onClick={onClick}>close</span>
            </div>
        }
      </React.Fragment>
    );
    
}

const App = () => {
    return (<React.Fragment>
        <Header />
        <Banner />
        <Container />
    </React.Fragment>
    )
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
)