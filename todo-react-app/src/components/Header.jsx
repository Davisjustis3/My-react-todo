import '../index.css'

export function Header(props) {
  return (
    <header className="header">
      {props.children}
    </header>
   
  )
}