export const CHANGETHEME = "CHANGETHEME";
export const CHANGEDASHTHEME = "CHANGEDASHTHEME";
export const CHANGETEAM ="CHANGETEAM"
export const toggleTheme = (theme) => ({
  type: CHANGETHEME, payload:theme
});


export const toggleTeams = (team) => ({
  type: CHANGETEAM, payload:team
})

export const toggleDashTheme =(theme) => ({
  type: CHANGEDASHTHEME, payload:theme
});
