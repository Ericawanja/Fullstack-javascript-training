function Navbar({menu}) {
    
  return (
    <div>
     {menu.map(element=>{
        return <span>{element}</span>
     })}
    </div>
  );
}

export default Navbar;
