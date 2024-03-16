import { UserContext } from "./context"
import { useState } from "react"
import DonorPage from "./pages/DonorPage"
import PatientPage from "./pages/PatientPage"
import HospitalPage from "./pages/HospitalPage"



function App() {
  const [userType,setUserType] = useState("hospital")
  const Name = "Riyasat"
  const HosName = "AIIMS"
  return (
    <UserContext.Provider value={{userType, Name, HosName}} >
      <div>
        {userType === "donor" && <DonorPage />}
        {userType === "patient" && <PatientPage />}
        {userType === "hospital" && <HospitalPage />}
      </div>
    </UserContext.Provider>
  )
}

export default App
