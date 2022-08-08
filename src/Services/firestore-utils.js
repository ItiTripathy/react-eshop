import { firestore } from "./firestore";

export const getCarData = async () => {
    //Specify the collection
    const collectionRef = firestore.collection("car");

    // Get records from that collection

    const data = await collectionRef.get();

    // Clean up our records

    const rawDocuments = data.docs;
    //console.log(rawData);
    console.log(rawDocuments[0].data());
    console.log(rawDocuments[0].id);

    const cleanedDocuments = rawDocuments.map((rawDoc) => ({
        ...rawDoc.data(),
        id: rawDoc.id,
    }));

    console.log(cleanedDocuments);

    // Return our records

    return cleanedDocuments;
};
