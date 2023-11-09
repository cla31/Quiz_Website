const fetchQuestionsFromJson = async (pathJson) => {
    try {
        const response = await fetch(pathJson);
        const jsonData = await response.json();
        console.log("retour fetch", jsonData);
        return jsonData;
    } catch (erreur) {
        console.log(erreur);
    }
};