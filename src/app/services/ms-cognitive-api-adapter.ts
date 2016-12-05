/**
 * Created by dawsonp on 02.12.2016.
 */

import {Http, Headers, RequestOptions} from "@angular/http";
import {Injectable} from "@angular/core";

@Injectable()
export class MsCognitiveApiAdapter {

    private API_KEY = "869d3b5d50bb4ea482153e5e81761c1d";

    constructor(private http: Http) {

    }


    personIdToPersonName(personId) {
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            headers.append("Ocp-Apim-Subscription-Key", this.API_KEY);

            this.http.get("https://api.projectoxford.ai/face/v1.0/persongroups/users/persons", {headers})
                .subscribe((data) => {
                    const person = data.json().find((element) => {
                        return element.personId === personId;
                    });
                    if (person) {
                        resolve(person.name)
                    } else {
                        reject("Person not found");
                    }
                }, (err) => {
                    reject(`faceIdToPersonId failed: ${err}`);
                });
        });
    }

    faceIdToPersonId(faceId) {
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            headers.append("Ocp-Apim-Subscription-Key", this.API_KEY);
            headers.append("Content-Type", "application/json");

            this.http.post("https://api.projectoxford.ai/face/v1.0/identify", {
                personGroupId: "users",
                faceIds: [faceId],
                maxNumOfCandidatesReturned: 1,
                confidenceThreshold: 0.5
            }, {headers})
                .subscribe((response) => {
                    const candidates = response.json()[0].candidates;
                    if (candidates.length > 0) {
                        const personId = candidates[0].personId;
                        this.personIdToPersonName(personId).then((name) => resolve(name));
                    } else {
                        reject("No matching candidates");
                    }
                }, (err) => {
                    reject(`faceIdToPersonId failed: ${err}`);
                });
        });
    };

    faceToPersonId(image) {
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            headers.append("Ocp-Apim-Subscription-Key", this.API_KEY);
            headers.append("Content-Type", "application/octet-stream");

            this.http.post("https://api.projectoxford.ai/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=false", image, {headers})
                .subscribe((response) => {
                    const personId = response.json()[0].faceId;
                    this.faceIdToPersonId(personId).then((name) => resolve(name));
                }, (err) => {
                    reject(`faceToPersonId failed: ${err}`);
                });
        });

    }
}


/*


 const personIdToPersonName = function (personId, cb) {
 request
 .get("https://api.projectoxford.ai/face/v1.0/persongroups/users/persons")
 .proxy("http://192.168.20.1:8080")
 .set('Ocp-Apim-Subscription-Key', API_KEY)
 .end((error, response) => {
 if (!error) {
 const person = _.find(response.body, (element) => {
 return element.personId === personId;
 });
 if (person) {
 cb(null, person.name);
 } else {
 cb("Person not found");
 }
 } else {
 cb(`faceIdToPersonId failed: ${error}`);
 }
 });
 };

 const faceIdToPersonId = function (faceId, cb) {
 request
 .post("https://api.projectoxford.ai/face/v1.0/identify")
 .proxy("http://192.168.20.1:8080")
 .set('Ocp-Apim-Subscription-Key', API_KEY)
 .set("Content-Type", "application/json")
 .send({
 personGroupId: "users",
 faceIds: [faceId],
 maxNumOfCandidatesReturned: 1,
 confidenceThreshold: 0.5
 })
 .end((error, response) => {
 if (!error) {
 const candidates = response.body[0].candidates;
 if (candidates.length > 0) {
 const personId = candidates[0].personId;
 personIdToPersonName(personId, cb);
 } else {
 cb("No matching candidates");
 }


 } else {
 cb(`faceIdToPersonId failed: ${error}`);
 }
 });
 };

 const faceToPersonId = function (image, cb) {
 request
 .post("https://api.projectoxford.ai/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=false")
 .proxy("http://192.168.20.1:8080")
 .set('Ocp-Apim-Subscription-Key', API_KEY)
 .set("Content-Type", "application/octet-stream")
 .send(image)
 .end((error, response) => {
 if (!error) {
 const personId = response.body[0].faceId;
 faceIdToPersonId(personId, cb);
 } else {
 cb(`faceToPersonId failed: ${error}`);
 }
 });
 };
 */

