export function useReleases() {
 /**
  * Loop through artist and gather their releases
  *
  * @return  {Release[]} List of releases
  */
  const completeReleaseList = (): Release[] => {
   
    // Get every artist
    const { all }:any = useArtists()

    // Initialise release list
    let completeReleaseList: Release[] = []

    // Iterate over complete artist list
    for (const key in all) {
      if (Object.hasOwnProperty.call(all, key)) {
        const element = all[key];

        // Inject the artist name into the release index
        for (let i = 0; i < element["releases"].length; i++) {
          const release = element["releases"][i];
          release.artistName = element["name"];
          release.artistSlug = element["slug"];
        }

        // @ts-ignore
        completeReleaseList = completeReleaseList.concat(element.releases);
      }
    }
    return completeReleaseList
  };

  /**
   * Filter list of releases to find release matching given ID
   *
   * @param   {string}   id  ID of release, e.g. `OH-xxx`
   * @return  {object}       single release object
   */
  const getReleaseById = (
    id: string,
    releases: Release[] = completeReleaseList()
  ): Release => {
    return releases.find((release) => release.id === id)!;
  }

  /**
   * Get the 3 most recent releases (within the last 7 years)
   * Use date comparison to get most recent releases
   * @note    Matching method is deprecated, but working for now.
   *          e.g. if no new releases, the array will be empty
   *          use with caution!
   * @return  {Release[]}           3 most recent releases
   */
  const newReleases = (): Release[] | any => {
    return null
  }

  return {
    completeReleaseList,
    newReleases,
    getReleaseById
  }
}
