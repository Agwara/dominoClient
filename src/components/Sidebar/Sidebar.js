import React from "react";
import { connect } from "react-redux";

import SidebarFooter from "./SidebarFooter";
import SidebarHeader from "./SidebarHeader";
import SidebarNav from "./SidebarNav";

const Sidebar = (props) => {
    const sidebarOpen = props.open_sidebar_state.open_sidebar;
    
    return (
        <div className="sidebar">
            <div className={sidebarOpen ? "sidebar__component-open" : "sidebar__component-close"}>
                <SidebarHeader />
                <SidebarNav />
                <SidebarFooter />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
	open_sidebar_state: state.sidebar,
})

export default connect(mapStateToProps)(Sidebar);