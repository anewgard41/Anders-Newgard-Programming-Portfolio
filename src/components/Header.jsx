function Header(props) {
  return (
    <header>
        <h1 className="">Anders Newgard</h1>
      {/* props.children refers to the Nav bar, since it is embedded in the Header component in the App.jsx file */}
      {props.children}  
    </header>
  )
}

export default Header