import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Topbar } from "./components/scenes/global/Topbar";
import SidebarLocal from './components/scenes/global/SidebarLocal'
import Dashboard from './components/scenes/dashboard/index'
// import Team from './components/scenes/team'
// import Invoices from './components/scenes/invoices'
// import Contacts from './components/scenes/contacts'
// import Bar from './components/scenes/bar'
// import Form from './components/scenes/form'
// import Line from './components/scenes/line'
// import Pie from './components/scenes/pie'
// import FAQ from './components/scenes/faq'
// import Geography from './components/scenes/geography'
// import Calender from './components/scenes/calender'

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
                            <Route path="/dashboard" element={<Dashboard />} />
                            {/* <Route path="/team" element={<Team />} /> */}
                            {/* <Route path="/invoices" element={<Invoices />} /> */}
                            {/* <Route path="/contacts" element={<Contacts />} /> */}
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