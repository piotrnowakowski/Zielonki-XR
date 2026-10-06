/** Competition builds use independent local storage and cannot access the house sync service. */
export const isCompetitionBuild = () => import.meta.env.VITE_HACKATHON_MODE === 'true'
export const competitionSyncMessage = 'Remote synchronization is disabled in the competition build.'
