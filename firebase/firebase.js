import * as firebase from 'firebase'; //setting up my wrapper
import 'firebase/firestore';

export class FirebaseWrapper {
  constructor() {
    this.initialized = false;
    this._firebaseInstance = null; //instance of our npm package
    this._firebaseWrapperInstance = null; //instance of our wrapper
    this._firestore = null;
  }
  Initialize(config) {
    if (!this.initialized) {
      //initialize firebase
      this._firebaseInstance = firebase.initializeApp(config);
      this._firestore = firebase.firestore();
      this.initialized = true;
      console.log('It worked! :)');
    } else {
      console.log('already initialized!');
    }
  }

  static GetInstance() {
    if (null == this._firebaseWrapperInstance) {
      this._firebaseWrapperInstance = new FirebaseWrapper();
    } else {
      //Alreday initialized.nothing more to do here
    }
    return this._firebaseWrapperInstance;
  }

  async CreateNewDocument(collectionPath, doc, userId) {
    // we are passing "Post"/"here is the post information i want you to create" ex.: new user in the "UserCollection"/UserObject i want you to create
    try {
      const ref = this._firestore.collection(collectionPath).doc(userId);

      const timestamp = firebase.firestore.Timestamp.now().toDate(); //firebase module .firestore to use firestore and converted timestamp to a JS data object
      const res = await this._firestore
        .collection('times')
        .doc(userId)
        .get();
      console.log(res.data());
      if (!res.data()) {
        return await ref.set({
          times: [doc],
          createdAt: timestamp,
          id: new Date().valueOf(),
        }); //we have the post id which
      } else {
        return await ref.set({
          times: [...res.data().times, doc],
          createdAt: timestamp,
          id: new Date().valueOf(),
        }); //we have the post id which we set inside of our object that ends up getting stored
      }
    } catch (err) {
      console.log('something went wrong postin', err);
    }
  }

  async SetUpCollectionListener(userId) {
    try {
      console.log('calling setup did work');
      const res = await this._firestore
        .collection('times')
        .doc(userId)
        .get();
      console.log(res.data().times)
      return res.data().times;
    } catch (err) {
      console.log('OH no something did not work', err);
    }
  }
}
