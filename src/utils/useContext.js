import { createContext } from "react";

//// Create a context for the user (i.e shared Object)-----------
const userContext = createContext({
    loggedInUser: 'Dummy User',
})

export default userContext;