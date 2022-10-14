import "./styles/main.css"



export function App() {

  const value = false

  return (
    <h1 className={value ? "bg-gray-800" : "bg-cyan-500"}>Hello World</h1>
  )
}

