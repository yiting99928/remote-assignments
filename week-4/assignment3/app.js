const item = [1, 2, 3, 4];
const { useState } = React; //解構

const Header = () => {
    return (
        <header className="header">
            <h1 className="logo">Website Title/Logo</h1>
            <MenuToggle />
            <ul className="header-nav">
                {item.map((item, i) => <li key={i}><a href="#">Item {item}</a></li>)}
            </ul>
        </header>
    )
}
const MenuToggle = () => {
    const [show, setShow] = useState(false);
    // 前者放變數 後者放方法(大多數使用set)用來寫入前者的值
    const onClick = () => { setShow(!show) }
    return (
        <>
            <span className="material-symbols-outlined menuToggle" onClick={onClick}>menu</span>
            {show &&
                <div className="header-active" >
                    <ul className="menu-active">
                        {item.map((item, i) => <li key={i}><a href="#">Item {item}</a></li>)}
                    </ul>
                    <span className="material-symbols-outlined closeToggle" onClick={onClick}>close</span>
                </div>
            }
        </>
    );
}
const Banner = () => {
    const [title, setTitle] = useState("Welcome Message");
    const onClick = () => {
        setTitle("Have a Good Time!")
    }
    return (
        <div className="banner">
            <h2 onClick={onClick} >{title}</h2>
        </div>
    )
}
const Container = () => {
    return (
        <section className="container">
            <h3>Section Title</h3>
            <div className="boxes">
                {item.map((item, i) => <div key={i} className="box">Content Box {item}</div>)}
            </div>
            <CallToAction />
        </section>
    )
}

const CallToAction = () => {
    const [show, setShow] = React.useState(false);
    const onClick = (e) => {
        setShow(!show);
        e.preventDefault()
    }
    return (<>
        <a href="#" className="btn" onClick={onClick}>Call to Action</a>
        {show &&
            <div className="secondary-boxes">
                {item.map((item, i) => <div key={i} className="box">Content Box {item}</div>)}
            </div>
        }
    </>
    );
}

const App = () => {
    return (<>
        <Header />
        <Banner />
        <Container />
    </>
    )
}
ReactDOM.createRoot(document.querySelector('#root'))
    .render(<App />)