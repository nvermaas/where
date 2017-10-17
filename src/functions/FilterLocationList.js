/**
 * Created by Vermaas on 10/8/2017.
 */

export default function filterLocationList(searchText, fetchedLocationList, maxResults) {
    console.log("filterLocationList("+searchText+")")

    return fetchedLocationList.filter((location) => {
        if (location.title.toUpperCase().includes(searchText)) {

            return true;
        }
        if (location.username.toUpperCase().includes(searchText)) {
            return true;
        }
        try {
            if (location.description.toUpperCase().includes(searchText)) {
                return true;
            }
            if (location.timestamp.toString().includes(searchText)) {
                return true;
            }
        } catch (e) {

        }
        return false;
    }).slice(0, maxResults);
}
