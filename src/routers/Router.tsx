import {createBrowserRouter} from "react-router-dom";
import {PMain} from "../pages/Main/PMain.tsx";


export const Router = createBrowserRouter([
	{
		path: "/",
		element: (<PMain/>)
	},
])
