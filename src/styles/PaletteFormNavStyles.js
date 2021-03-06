import sizes from "../size";
import { drawerWidth } from "../constants";

export default (theme) => ({
	root: {
		display: "flex"
	},
	appBar: {
		transition: theme.transitions.create([ "margin", "width" ], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		height: "64px"
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create([ "margin", "width" ], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		}),
		[sizes.down("md")]: {
			"& .hideHelper": {
				display: "none"
			}
		}
	},
	heading: {
		[sizes.down("xs")]: {
			display: "none"
		}
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	hide: {
		display: "none"
	},
	navBtns: {
		marginRight: "1rem",
		"& a": {
			textDecoration: "none"
		}
	},
	button: {
		margin: "0 0.5rem"
	}
});
