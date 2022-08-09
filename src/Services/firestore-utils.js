import { firestore } from "./firestore";

export const getBagsData = async () => {
    //Specify the collection
    const collectionRef = firestore.collection("bags");

    // Get records from that collection

    const data = await collectionRef.get();

    // Clean up our records

    const rawDocuments = data.docs;
    //console.log(rawData);
    //console.log(rawDocuments[0].data());
    //console.log(rawDocuments[0].id);

    const cleanedDocuments = rawDocuments.map((rawDoc) => ({
        ...rawDoc.data(),
        id: rawDoc.id,
    }));

    console.log(cleanedDocuments);

    // Return our records

    return cleanedDocuments;
};

export const addItemToCart = async (cartItem) => {
    const collectionRef = firestore.collection("bags-cart");
    const newCart = await collectionRef.add(cartItem);
    return newCart;
};

export const readCart = async () => {
    const collectionRef = firestore.collection("bags-cart");

    const data = await collectionRef.get();
    const rawDocuments = data.docs;
    const cleanedDocuments = rawDocuments.map((rawDoc) => ({
        ...rawDoc.data(),
        id: rawDoc.id,
    }));
    return cleanedDocuments;
};

export const deleteItem = async (id) => {
    const collectionRef = firestore.collection("bags-cart");
    const docRef = collectionRef.doc(id);
    await docRef.delete();
    return true;
};
