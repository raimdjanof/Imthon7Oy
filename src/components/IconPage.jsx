import { NavLink } from "react-router-dom"

function IconPage({Icon,text}) {
  return (
    <NavLink  className="font-bold  flex ic space-x-5  text-lg text-[#d7cfcfd8] py-1">
      <img className="mr-5" src={Icon} alt="icon img svg" />
      {text}
    </NavLink>
  )
}

export default IconPage
