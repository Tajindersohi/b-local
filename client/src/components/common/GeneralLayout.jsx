import React from 'react'
import Header from './Header/index'
function GeneralLayout({ children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <main style={{ margin: "80px 0 0 30px", flex: 1 }}>{children}</main>
      <footer style={{ backgroundColor: "#333", color: "#fff", padding: "5px 30px", textAlign: "center" }}>
        <span>© 2023 My Website</span>
      </footer>
    </div>
  )
}

export default GeneralLayout
