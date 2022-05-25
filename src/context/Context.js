import React, { createContext, useEffect, useState } from "react"
import App from "../App"
export const MainContext = createContext()



const Context = () => {

    const [user, setuser] = useState("")
    const [tocken, settocken] = useState("")
    const [dietPlans, setdietPlans] = useState(5)
    const [viewData, setviewData] = useState("")
    const [fetchAgain, setfetchAgain] = useState(true)
    const [selectedDiet, setselectedDiet] = useState("")
    const [myDietPlan, setmyDietPlan] = useState("")
    const [allUser, setAllUser] = useState("")




    useEffect(() => {
        let userData = JSON.parse(localStorage.getItem("user"))
        let tocken = localStorage.getItem("tocken")
        setuser(userData)
        settocken(tocken)
    },[fetchAgain])


    return (
        <MainContext.Provider value={{user, tocken, dietPlans, setdietPlans, viewData, setviewData, fetchAgain, setfetchAgain, selectedDiet, setselectedDiet, myDietPlan, setmyDietPlan, allUser, setAllUser}}>
            <App />
        </MainContext.Provider>
    )
}


export default Context