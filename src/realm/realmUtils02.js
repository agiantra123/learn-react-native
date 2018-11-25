// Good source:
// https://github.com/sunlight3d/react_native_v0.49/blob/master/61-Realm%20React%20Native%235.Filter%20data%20and%20working%20with%20To-Many%20Relationships/code/tutorialProject/databases/allSchemas.js

import Realm from 'realm'

const peopleSchema = {
    name: 'people',
    properties: {
        id: 'int',
        name: 'string',
        age: 'int'
    }
}

const databaseOptions = {
    schema: [peopleSchema],
    schemaVersion: 2
}

// jsonConst is an array of objects
export const insertPeopleData = (peopleJson) => {
    Realm.open(databaseOptions)
        .then(realm => {
            realm.write(() => {
                for(i=0;i<peopleJson.length;i++) {
                    realm.create('people', peopleJson[i]);
                }
            });
            alert(realm.objects('people').length)
        })
        .catch((error) => {
            alert('error!')
        });
};