import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Topbar } from "./scenes/global/Topbar";
import SidebarLocal from './scenes/global/SidebarLocal'
import Dashboard from './scenes/dashboard/index'
import Team from './scenes/team'
// import Invoices from './scenes/invoices/index'
import Contacts from './scenes/contacts/index'
// import Bar from './scenes/bar/index'
// import Form from './scenes/form/index'
// import Line from './scenes/line/index'
// import Pie from './scenes/pie/index'
// import FAQ from './scenes/faq/index'
// import Geography from './scenes/geography/index'
// import Calender from './scenes/calender/index'

const App = () => {
    const [theme, colorMode] = useMode()
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="app">
                    <SidebarLocal />
                    <main className="content">
                        <Topbar />
                        <Routes>
                            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/team" element={<Team />} />
                            {/* <Route path="/invoices" element={<Invoices />} /> */}
                            <Route path="/contacts" element={<Contacts />} />
                            {/* <Route path="/bar" element={<Bar />} /> */}
                            {/* <Route path="/form" element={<Form />} /> */}
                            {/* <Route path="/line" element={<Line />} /> */}
                            {/* <Route path="/pie" element={<Pie />} /> */}
                            {/* <Route path="/faq" element={<FAQ />} /> */}
                            {/* <Route path="/geography" element={<Geography />} /> */}
                            {/* <Route path="/calender" element={<Calender />} /> */}
                        </Routes>
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}

App.propTypes = {}

export default App