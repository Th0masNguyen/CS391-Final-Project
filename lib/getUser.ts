/**
 * Created by Eytan Mobilio (emobilio@bu.edu)
 * Contains a function to get a user from the database corresponding
 * to a particular username to check if that username has been taken.
 */
"use server";
import getCollection, {ALIAS_COLLECTION} from "@/db";

// Takes a string corresponding to a username and finds the corresponding user in the database if one exists
export default async function getUser(username: string) : Promise<string | null> {
    // get the collection
    const aliasCollection = await getCollection(ALIAS_COLLECTION);

    // try to find an object with name = username in the db
    const res = await aliasCollection.findOne({ name: username });

    // if a document was found, return it's name, otherwise return null
    if (res) {
        return res.name;
    } else {
        return null;
    }
}