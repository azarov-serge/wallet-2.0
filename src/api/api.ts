import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { dbMock } from "@/mocks/api";

const config = {
	apiKey: process.env.API_KEY,
	authDomain: process.env.AUTH_DOMAIN,
	databaseURL: process.env.DATABASE_URL,
	projectId: process.env.PROJECT_ID,
	messagingSenderId: process.env.MESSAGING_SENDER_ID,
	appId: process.env.APP_ID,
};

firebase.initializeApp(config);

export const db = process.env.USE_MOCK ? dbMock : firebase.firestore();